import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { GoogleFormService, GoogleFormSubmission } from './google-form.service';

// ============================================================================
// INTERFACES
// ============================================================================

export interface BookingOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  serviceType: string;
  cleaners: number;
  hours: number;
  materials: boolean;
  total: number;
  paymentMethod: string;
  status: BookingStatus;
  createdAt: string;
  scheduledDate: string;
  scheduledTime: string;
}

export interface BookingRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  serviceType: string;
  cleaners: number;
  hours: number;
  materials: boolean;
  total: number;
  paymentMethod: string;
  scheduledDate: string;
  scheduledTime: string;
}

export interface BookingResponse {
  success: boolean;
  orderId?: string;
  order?: BookingOrder;
  error?: string;
}

export interface PaymentBookingData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  cleaners: number;
  hours: number;
  materials: boolean;
  scheduledDate: string;
  scheduledTime: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

// ============================================================================
// API RESPONSE INTERFACES
// ============================================================================

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface BookingApiResponse extends ApiResponse<BookingOrder> {
  orderId?: string;
  order?: BookingOrder;
}

interface BookingsListResponse extends ApiResponse<BookingOrder[]> {
  bookings?: BookingOrder[];
}

// ============================================================================
// BOOKING SERVICE
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly backendApiUrl = environment.backendApiUrl;

  constructor(
    private http: HttpClient,
    private googleFormService: GoogleFormService
  ) { }

  // ============================================================================
  // PUBLIC METHODS
  // ============================================================================

  /**
   * Creates a new booking order
   * @param bookingRequest - The booking request data
   * @returns Observable with booking response
   */
  createBooking(bookingRequest: BookingRequest): Observable<BookingResponse> {
    const orderData = this.transformBookingRequestToApiFormat(bookingRequest);

    return this.http.post<BookingApiResponse>(`${this.backendApiUrl}/book`, orderData)
      .pipe(
        map(this.handleBookingApiResponse),
        catchError(this.handleHttpError.bind(this))
      );
  }

  /**
   * Creates a booking with payment information after successful payment
   * @param bookingData - The booking data
   * @param paymentOrderId - The payment order ID
   * @param paymentStatus - The payment status
   * @returns Observable with booking response
   */
  createBookingWithPayment(
    bookingData: PaymentBookingData, 
    paymentOrderId: string, 
    paymentStatus: string
  ): Observable<BookingResponse> {
    const orderData = this.transformPaymentBookingToApiFormat(bookingData, paymentOrderId, paymentStatus);

    return this.http.post<BookingApiResponse>(`${this.backendApiUrl}/bookings/create-with-payment`, orderData)
      .pipe(
        map(this.handleBookingApiResponse),
        switchMap(bookingResponse => {
          if (bookingResponse.success && bookingResponse.order) {
            // Submit to Google Form after successful booking creation
            const googleFormData = this.googleFormService.formatBookingForGoogleForm(bookingResponse.order);
            return this.googleFormService.submitBookingToGoogleForm(googleFormData).pipe(
              map(() => bookingResponse) // Return the original booking response
            );
          }
          return [bookingResponse];
        }),
        catchError(this.handleHttpError.bind(this))
      );
  }

  /**
   * Retrieves a booking by its ID
   * @param orderId - The booking order ID
   * @returns Observable with booking order
   */
  getBooking(orderId: string): Observable<BookingOrder> {
    return this.http.get<BookingApiResponse>(`${this.backendApiUrl}/bookings/${orderId}`)
      .pipe(
        map(response => {
          if (response.success && response.order) {
            return response.order;
          }
          throw new Error(response.error || 'Failed to get booking');
        }),
        catchError(this.handleHttpError.bind(this))
      );
  }

  /**
   * Updates the status of a booking
   * @param orderId - The booking order ID
   * @param status - The new status
   * @returns Observable with booking response
   */
  updateBookingStatus(orderId: string, status: BookingStatus): Observable<BookingResponse> {
    return this.http.put<BookingApiResponse>(`${this.backendApiUrl}/bookings/${orderId}/status`, { status })
      .pipe(
        map(this.handleBookingApiResponse),
        catchError(this.handleHttpError.bind(this))
      );
  }

  /**
   * Retrieves all bookings for a customer
   * @param customerEmail - The customer's email
   * @returns Observable with array of booking orders
   */
  getCustomerBookings(customerEmail: string): Observable<BookingOrder[]> {
    return this.http.get<BookingsListResponse>(`${this.backendApiUrl}/bookings/customer/${customerEmail}`)
      .pipe(
        map(response => {
          if (response.success && response.bookings) {
            return response.bookings;
          }
          throw new Error(response.error || 'Failed to get customer bookings');
        }),
        catchError(this.handleHttpError.bind(this))
      );
  }

  /**
   * Cancels a booking
   * @param orderId - The booking order ID
   * @returns Observable with booking response
   */
  cancelBooking(orderId: string): Observable<BookingResponse> {
    return this.http.put<BookingApiResponse>(`${this.backendApiUrl}/bookings/${orderId}/cancel`, {})
      .pipe(
        map(this.handleBookingApiResponse),
        catchError(this.handleHttpError.bind(this))
      );
  }

  // ============================================================================
  // UTILITY METHODS
  // ============================================================================

  /**
   * Generates a unique order ID
   * @returns Generated order ID
   */
  generateOrderId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `CARLA_BOOKING_${timestamp}_${random}`.toUpperCase();
  }

  /**
   * Validates booking request data
   * @param bookingRequest - The booking request to validate
   * @returns True if valid, false otherwise
   */
  validateBooking(bookingRequest: BookingRequest): boolean {
    return !!(
      bookingRequest.customerName?.trim() &&
      bookingRequest.customerEmail?.trim() &&
      bookingRequest.customerPhone?.trim() &&
      bookingRequest.address?.trim() &&
      bookingRequest.cleaners > 0 &&
      bookingRequest.hours > 0 &&
      bookingRequest.total > 0
    );
  }

  /**
   * Formats booking data for display
   * @param booking - The booking order to format
   * @returns Formatted booking data
   */
  formatBooking(booking: BookingOrder): BookingOrder & {
    formattedDate: string;
    formattedTime: string;
    formattedTotal: string;
  } {
    return {
      ...booking,
      formattedDate: new Date(booking.scheduledDate).toLocaleDateString(),
      formattedTime: booking.scheduledTime,
      formattedTotal: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'QAR'
      }).format(booking.total)
    };
  }

  // ============================================================================
  // PRIVATE HELPER METHODS
  // ============================================================================

  /**
   * Transforms booking request to API format
   */
  private transformBookingRequestToApiFormat(bookingRequest: BookingRequest): Record<string, any> {
    return {
      customer_name: bookingRequest.customerName,
      customer_email: bookingRequest.customerEmail,
      customer_phone: bookingRequest.customerPhone,
      address: bookingRequest.address,
      service_type: bookingRequest.serviceType,
      cleaners: bookingRequest.cleaners,
      hours: bookingRequest.hours,
      materials: bookingRequest.materials,
      total: bookingRequest.total,
      payment_method: bookingRequest.paymentMethod,
      scheduled_date: bookingRequest.scheduledDate,
      scheduled_time: bookingRequest.scheduledTime
    };
  }

  /**
   * Transforms payment booking data to API format
   */
  private transformPaymentBookingToApiFormat(
    bookingData: PaymentBookingData, 
    paymentOrderId: string, 
    paymentStatus: string
  ): Record<string, any> {
    return {
      customer_name: bookingData.customerName,
      customer_email: bookingData.customerEmail,
      customer_phone: bookingData.customerPhone,
      address: bookingData.address,
      service_type: 'cleaning',
      cleaners: bookingData.cleaners,
      hours: bookingData.hours,
      materials: bookingData.materials,
      total: parseFloat(sessionStorage.getItem('paymentAmount') || '0'),
      payment_method: 'skipcash',
      payment_order_id: paymentOrderId,
      payment_status: paymentStatus,
      is_paid: paymentStatus === 'completed',
      scheduled_date: bookingData.scheduledDate,
      scheduled_time: bookingData.scheduledTime
    };
  }

  /**
   * Handles booking API response
   */
  private handleBookingApiResponse(response: BookingApiResponse): BookingResponse {
    if (response.success) {
      return {
        success: true,
        orderId: response.orderId,
        order: response.order
      };
    }
    
    return {
      success: false,
      error: response.error || 'Operation failed'
    };
  }

  /**
   * Handles HTTP errors
   */
  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    console.error('Booking service error:', error);
    
    let errorMessage = 'An unexpected error occurred';
    
    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return throwError(() => new Error(errorMessage));
  }
} 