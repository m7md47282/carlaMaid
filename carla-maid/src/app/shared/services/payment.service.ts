import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

// Payment-related interfaces
export interface PaymentRequest {
  amount: number;
  currency: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  description: string;
  // Additional form fields for booking
  address?: string;
  serviceType?: string;
  cleaners?: number;
  hours?: number;
  materials?: boolean;
  scheduledDate?: string;
  scheduledTime?: string;
}

export interface PaymentResponse {
  success: boolean;
  payUrl?: string;
  orderId?: string;
  error?: string;
  data?: any;
  // New fields from updated API response
  requiresRedirect?: boolean;
  redirectUrl?: string;
  message?: string;
}

export type PaymentStatusType = 'pending' | 'completed' | 'failed' | 'cancelled';

export interface PaymentStatus {
  orderId: string;
  status: PaymentStatusType;
  amount?: number;
  currency?: string;
  transactionId?: string;
  error?: string;
}

// SkipCash Webhook interfaces
export interface SkipCashWebhookPayload {
  PaymentId: string;
  Amount: string;
  StatusId: number;
  TransactionId: string | null;
  Custom1: string | null;
  Custom2: string | null;
  Custom3: string | null;
  Custom4: string | null;
  Custom5: string | null;
  Custom6: string | null;
  Custom7: string | null;
  Custom8: string | null;
  Custom9: string | null;
  Custom10: string | null;
  VisaId: string;
  TokenId: string;
  CardType: string;
  CardNumber: string | null;
  RecurringSubscriptionId: string;
}

// SkipCash Status ID mapping - Updated to match exact SkipCash values
export const SKIPCASH_STATUS_MAP: Record<number, PaymentStatusType> = {
  0: 'pending',    // new
  1: 'pending',    // pending
  2: 'completed',  // paid - triggers booking update
  3: 'cancelled',  // canceled
  4: 'failed',     // failed
  5: 'failed',     // rejected
  6: 'completed',  // refunded - treated as successful completion
  7: 'pending',    // pending refund
  8: 'failed'      // refund failed
};

// Backend API response interfaces
interface BackendPaymentResponse {
  success: boolean;
  data?: any;
  error?: string;
}

interface BackendStatusResponse {
  success: boolean;
  data?: {
    status?: string;
    order_id?: string;
    amount?: number;
    currency?: string;
    transaction_id?: string;
  };
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private readonly backendApiUrl = environment.backendApiUrl;
  private readonly validPaymentStatuses: PaymentStatusType[] = ['pending', 'completed', 'failed', 'cancelled'];
  private readonly maxAmount = 100000; // Maximum payment amount in QAR

  constructor(private http: HttpClient) {}

  /**
   * Create a new payment order with SkipCash via backend
   * @param paymentRequest - The payment request details
   * @returns Observable of payment response
   */
  createPayment(paymentRequest: PaymentRequest): Observable<PaymentResponse> {
    const apiUrl = `${this.backendApiUrl}/book`;
    
    // Transform payment request to booking format expected by Firebase functions
    const payload = {
      order_id: paymentRequest?.orderId || '',
      transaction_id: paymentRequest?.orderId || '',
      customer_name: paymentRequest.customerName,
      customer_email: paymentRequest.customerEmail,
      customer_phone: paymentRequest.customerPhone,
      address: paymentRequest.address || '',
      service_type: paymentRequest.serviceType || 'Cleaning Service',
      cleaners: paymentRequest.cleaners || 1,
      hours: paymentRequest.hours || 4,
      materials: paymentRequest.materials || false,
      total: paymentRequest.amount,
      payment_method: 'pay_now',
      scheduled_date: paymentRequest.scheduledDate || new Date().toISOString().split('T')[0],
      scheduled_time: paymentRequest.scheduledTime || '10:00'
    };

    console.log('Sending payload to Firebase functions:', payload);

    return this.http.post<BackendPaymentResponse>(apiUrl, payload)
      .pipe(
        map(this.handlePaymentCreationResponse.bind(this)),
        catchError(this.handlePaymentError.bind(this))
      );
  }

  /**
   * Check payment status via backend
   * @param orderId - The order ID to check
   * @returns Observable of payment status
   */
  checkPaymentStatus(orderId: string): Observable<PaymentStatus> {
    const apiUrl = `${this.backendApiUrl}/payment/status-skip-cash/${orderId}`;

    return this.http.get<BackendStatusResponse>(apiUrl)
      .pipe(
        map(response => this.handleStatusResponse(response, orderId)),
        catchError(this.handleStatusError.bind(this))
      );
  }

  /**
   * Map SkipCash StatusId to PaymentStatusType
   * @param statusId - SkipCash StatusId (0-8)
   * @returns PaymentStatusType
   */
  mapSkipCashStatus(statusId: number): PaymentStatusType {
    return SKIPCASH_STATUS_MAP[statusId] || 'failed';
  }

  /**
   * Process SkipCash webhook payload
   * @param webhookPayload - Raw webhook data from SkipCash
   * @returns Processed payment status
   */
  processWebhookPayload(webhookPayload: SkipCashWebhookPayload): PaymentStatus {
    const status = this.mapSkipCashStatus(webhookPayload.StatusId);
    const amount = webhookPayload.Amount ? parseFloat(webhookPayload.Amount) : undefined;
    
    return {
      orderId: webhookPayload.TransactionId || webhookPayload.PaymentId,
      status,
      amount,
      currency: 'QAR', // SkipCash uses QAR by default
      transactionId: webhookPayload.PaymentId,
      error: status === 'failed' ? `SkipCash StatusId: ${webhookPayload.StatusId}` : undefined
    };
  }

  /**
   * Generate a unique order ID
   * @returns Unique order ID string
   */
  generateOrderId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `CARLA_${timestamp}_${random}`.toUpperCase();
  }

  /**
   * Validate payment amount
   * @param amount - Amount to validate
   * @returns True if amount is valid
   */
  validateAmount(amount: number): boolean {
    return amount > 0 && amount <= this.maxAmount;
  }

  /**
   * Format amount for display
   * @param amount - Amount to format
   * @param currency - Currency code (default: QAR)
   * @returns Formatted amount string
   */
  formatAmount(amount: number, currency: string = 'QAR'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  /**
   * Extract payment URL from API response
   * @param response - API response object
   * @returns Payment URL or null if not found
   */
  extractPaymentUrl(response: any): string | null {
    // Try different possible locations for the payment URL
    const paymentUrl = response.redirectUrl || 
                      response.data?.paymentUrl || 
                      response.data?.payUrl || 
                      response.payUrl;
    
    return paymentUrl || null;
  }

  /**
   * Validate payment URL format
   * @param url - URL to validate
   * @returns true if URL is valid
   */
  validatePaymentUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'https:' || urlObj.protocol === 'http:';
    } catch {
      return false;
    }
  }

  /**
   * Redirect to payment gateway
   * @param paymentUrl - URL to redirect to
   */
  redirectToPayment(paymentUrl: string): void {
    if (paymentUrl && paymentUrl.trim()) {
      if (this.validatePaymentUrl(paymentUrl)) {
        console.log('Redirecting to payment gateway:', paymentUrl);
        window.location.href = paymentUrl;
      } else {
        console.error('Invalid payment URL format:', paymentUrl);
        throw new Error('Invalid payment URL format');
      }
    } else {
      console.error('Empty or missing payment URL');
      throw new Error('Payment URL is required');
    }
  }

  /**
   * Log payment attempt for analytics
   * @param paymentRequest - Payment request details
   */
  logPaymentAttempt(paymentRequest: PaymentRequest): void {
    console.log('Payment attempt:', {
      orderId: paymentRequest.orderId,
      amount: paymentRequest.amount,
      currency: paymentRequest.currency,
      customerEmail: paymentRequest.customerEmail,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Log payment result for analytics
   * @param orderId - Order ID
   * @param status - Payment status
   * @param error - Optional error message
   */
  logPaymentResult(orderId: string, status: string, error?: string): void {
    console.log('Payment result:', {
      orderId,
      status,
      error,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Log webhook processing for analytics
   * @param webhookPayload - Webhook data received
   * @param processedStatus - Processed payment status
   */
  logWebhookProcessing(webhookPayload: SkipCashWebhookPayload, processedStatus: PaymentStatus): void {
    console.log('Webhook processed:', {
      skipCashPaymentId: webhookPayload.PaymentId,
      orderId: processedStatus.orderId,
      originalStatusId: webhookPayload.StatusId,
      mappedStatus: processedStatus.status,
      amount: processedStatus.amount,
      timestamp: new Date().toISOString()
    });
  }

  // Private helper methods

  /**
   * Build payment payload from request
   */
  private buildPaymentPayload(paymentRequest: PaymentRequest): any {
    return {
      amount: paymentRequest.amount.toString(),
      currency: paymentRequest.currency,
      customerName: paymentRequest.customerName,
      customerEmail: paymentRequest.customerEmail,
      customerPhone: paymentRequest.customerPhone,
      description: paymentRequest.description,
      orderId: paymentRequest.orderId
    };
  }

  /**
   * Handle payment creation response
   */
  private handlePaymentCreationResponse(response: BackendPaymentResponse): PaymentResponse {
    console.log('SkipCash payment creation response:', response);
    
    if (response.success) {
      return {
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        error: response.error || 'Payment creation failed'
      };
    }
  }

  /**
   * Handle payment error
   */
  private handlePaymentError(error: any): Observable<never> {
    console.error('Payment creation error:', error);
    return throwError(() => new Error('Failed to create payment'));
  }

  /**
   * Handle status response
   */
  private handleStatusResponse(response: BackendStatusResponse, orderId: string): PaymentStatus {
    if (response.success && response.data) {
      const status = response.data.status || 'pending';
      const validStatus = this.validatePaymentStatus(status);
      
      return {
        orderId: response.data.order_id || orderId,
        status: validStatus,
        amount: response.data.amount,
        currency: response.data.currency,
        transactionId: response.data.transaction_id
      };
    } else {
      return {
        orderId: orderId,
        status: 'failed',
        error: response.error || 'Failed to check payment status'
      };
    }
  }

  /**
   * Handle status error
   */
  private handleStatusError(error: any): Observable<never> {
    console.error('Payment status check error:', error);
    return throwError(() => new Error('Failed to check payment status'));
  }

  /**
   * Validate payment status
   */
  private validatePaymentStatus(status: string): PaymentStatusType {
    return this.validPaymentStatuses.includes(status as PaymentStatusType) 
      ? status as PaymentStatusType
      : 'failed';
  }

  savePayment({orderId, transactionId, statusId, bookingInfo}: {orderId: string, transactionId: string, statusId: string, bookingInfo: any}): Observable<BackendPaymentResponse> {
    if(orderId && transactionId && statusId) {
      const apiUrl = `${this.backendApiUrl}/saveBooking`;
      return this.http.post<BackendPaymentResponse>(apiUrl, { orderId, transactionId, statusId, bookingInfo });
    } else {
      return throwError(() => new Error('Invalid payment data'));
    }
  }
} 