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
  returnUrl: string;
  cancelUrl: string;
}

export interface PaymentResponse {
  success: boolean;
  payUrl?: string;
  orderId?: string;
  error?: string;
  data?: any;
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
    const apiUrl = `${this.backendApiUrl}/skipcash/payment/create`;
    
    const payload = this.buildPaymentPayload(paymentRequest);

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
   * Test SkipCash API connectivity
   * @returns Observable of connection test result
   */
  testSkipCashConnection(): Observable<{ success: boolean; message?: string; error?: string }> {
    const apiUrl = `${this.backendApiUrl}/skipcash/health`;

    return this.http.get<{ success: boolean; message?: string }>(apiUrl)
      .pipe(
        map(response => ({
          success: response.success,
          message: response.success ? 'SkipCash API is accessible' : 'SkipCash API is not accessible',
          error: response.success ? undefined : 'SkipCash API is not accessible'
        })),
        catchError(error => {
          console.error('SkipCash health check error:', error);
          return throwError(() => new Error('SkipCash API health check failed'));
        })
      );
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
   * Redirect to payment gateway
   * @param paymentUrl - URL to redirect to
   */
  redirectToPayment(paymentUrl: string): void {
    if (paymentUrl && paymentUrl.trim()) {
      window.location.href = paymentUrl;
    }
  }

  /**
   * Handle payment callback from URL parameters
   * @returns Payment status from URL parameters
   */
  handlePaymentCallbackFromUrl(): PaymentStatus {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order_id');
    const status = urlParams.get('status');
    const transactionId = urlParams.get('transaction_id');
    const amount = urlParams.get('amount');
    const currency = urlParams.get('currency');

    if (!orderId || !status) {
      return {
        orderId: '',
        status: 'failed',
        error: 'Missing required callback parameters'
      };
    }

    const validStatus = this.validatePaymentStatus(status);
    const parsedAmount = amount ? parseFloat(amount) : undefined;

    return {
      orderId,
      status: validStatus,
      amount: parsedAmount,
      currency: currency || 'QAR',
      transactionId: transactionId || undefined
    };
  }

  /**
   * Get payment success URL
   * @param orderId - Optional order ID to append
   * @returns Success URL
   */
  getPaymentSuccessUrl(orderId?: string): string {
    const baseUrl = environment.skipCash.returnUrl;
    return orderId ? `${baseUrl}${orderId}` : baseUrl;
  }

  /**
   * Get payment cancel URL
   * @param orderId - Optional order ID to append
   * @returns Cancel URL
   */
  getPaymentCancelUrl(orderId?: string): string {
    const baseUrl = environment.skipCash.cancelUrl;
    return orderId ? `${baseUrl}${orderId}` : baseUrl;
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

  // Private helper methods

  /**
   * Build payment payload from request
   */
  private buildPaymentPayload(paymentRequest: PaymentRequest): any {
    return {
      amount: paymentRequest.amount,
      currency: paymentRequest.currency,
      customerName: paymentRequest.customerName,
      customerEmail: paymentRequest.customerEmail,
      customerPhone: paymentRequest.customerPhone,
      description: paymentRequest.description,
      returnUrl: paymentRequest.returnUrl,
      cancelUrl: paymentRequest.cancelUrl,
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
} 