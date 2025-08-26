import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

// Payment data interfaces
export interface PaymentDataRequest {
  paymentOrderId: string;
  bookingData: any;
  paymentAmount: number;
}

export interface PaymentDataResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaymentDataRetrieval {
  success: boolean;
  data?: {
    bookingData: any;
    paymentAmount: number;
    createdAt: string;
    expiresAt: string;
  };
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentDataService {
  private readonly backendApiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Store booking data for payment processing
   * @param paymentOrderId - The payment order ID
   * @param bookingData - The booking data to store
   * @param paymentAmount - The payment amount
   * @returns Observable with storage response
   */
  storePaymentData(
    paymentOrderId: string, 
    bookingData: any, 
    paymentAmount: number
  ): Observable<PaymentDataResponse> {
    const apiUrl = `${this.backendApiUrl}/bookings/store-payment-data`;

    const payload: PaymentDataRequest = {
      paymentOrderId,
      bookingData,
      paymentAmount
    };

    return this.http.post<PaymentDataResponse>(apiUrl, payload)
      .pipe(
        map(response => {
          if (response.success) {
            return {
              success: true,
              message: response.message || 'Payment data stored successfully'
            };
          } else {
            return {
              success: false,
              error: response.error || 'Failed to store payment data'
            };
          }
        }),
        catchError(error => {
          console.error('Store payment data error:', error);
          return throwError(() => new Error('Failed to store payment data'));
        })
      );
  }

  /**
   * Retrieve booking data for payment processing
   * @param paymentOrderId - The payment order ID
   * @returns Observable with payment data
   */
  retrievePaymentData(paymentOrderId: string): Observable<PaymentDataRetrieval> {
    const apiUrl = `${this.backendApiUrl}/getBookingDetails/${paymentOrderId}`;

    return this.http.get<PaymentDataRetrieval>(apiUrl)
      .pipe(
        map(response => {
          if (response.success && response.data) {
            return {
              success: true,
              data: response.data
            };
          } else {
            return {
              success: false,
              error: response.error || 'Failed to retrieve payment data'
            };
          }
        }),
        catchError(error => {
          console.error('Retrieve payment data error:', error);
          return throwError(() => new Error('Failed to retrieve payment data'));
        })
      );
  }

  /**
   * Clean up payment data after successful booking creation
   * @param paymentOrderId - The payment order ID
   * @returns Observable with cleanup response
   */
  cleanupPaymentData(paymentOrderId: string): Observable<PaymentDataResponse> {
    const apiUrl = `${this.backendApiUrl}/bookings/payment-data/${paymentOrderId}`;

    return this.http.delete<PaymentDataResponse>(apiUrl)
      .pipe(
        map(response => {
          if (response.success) {
            return {
              success: true,
              message: response.message || 'Payment data cleaned up successfully'
            };
          } else {
            return {
              success: false,
              error: response.error || 'Failed to clean up payment data'
            };
          }
        }),
        catchError(error => {
          console.error('Cleanup payment data error:', error);
          return throwError(() => new Error('Failed to clean up payment data'));
        })
      );
  }

  /**
   * Get payment data from multiple sources (backend, sessionStorage, URL params)
   * @param paymentOrderId - The payment order ID
   * @returns Observable with payment data
   */
  getPaymentDataFromMultipleSources(orderId: string): Observable<PaymentDataRetrieval> {
    return new Observable(observer => {
      // First try to get from backend
      this.retrievePaymentData(orderId).subscribe({
        next: (backendResponse) => {
          if (backendResponse.success && backendResponse.data) {
            observer.next(backendResponse);
            observer.complete();
          } 
        },
        error: (error) => {
          // Fallback to sessionStorage
          observer.next({
            success: false,
            error: 'Failed to retrieve payment data from backend'
          });
          observer.complete();
        }
      });
    });
  }

  /**
   * Get payment data from sessionStorage (fallback method)
   * @param paymentOrderId - The payment order ID
   * @returns Observable with payment data
   */
  private getPaymentDataFromSessionStorage(paymentOrderId: string): Observable<PaymentDataRetrieval> {
    return new Observable(observer => {
      try {
        const storedPaymentOrderId = sessionStorage.getItem('paymentOrderId');
        const bookingData = sessionStorage.getItem('bookingData');
        const paymentAmount = sessionStorage.getItem('paymentAmount');

        if (storedPaymentOrderId === paymentOrderId && bookingData && paymentAmount) {
          const parsedBookingData = JSON.parse(bookingData);
          const parsedPaymentAmount = parseFloat(paymentAmount);

          observer.next({
            success: true,
            data: {
              bookingData: parsedBookingData,
              paymentAmount: parsedPaymentAmount,
              createdAt: new Date().toISOString(),
              expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
            }
          });
        } else {
          observer.next({
            success: false,
            error: 'Payment data not found in session storage'
          });
        }
        observer.complete();
      } catch (error) {
        observer.next({
          success: false,
          error: 'Failed to parse payment data from session storage'
        });
        observer.complete();
      }
    });
  }

  /**
   * Store payment data in sessionStorage (backup method)
   * @param paymentOrderId - The payment order ID
   * @param bookingData - The booking data
   * @param paymentAmount - The payment amount
   */
  storePaymentDataInSessionStorage(
    paymentOrderId: string, 
    bookingData: any, 
    paymentAmount: number
  ): void {
    try {
      sessionStorage.setItem('paymentOrderId', paymentOrderId);
      sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
      sessionStorage.setItem('paymentAmount', paymentAmount.toString());
    } catch (error) {
      console.error('Failed to store payment data in session storage:', error);
    }
  }

  /**
   * Clear payment data from sessionStorage
   */
  clearPaymentDataFromSessionStorage(): void {
    try {
      sessionStorage.removeItem('paymentOrderId');
      sessionStorage.removeItem('bookingData');
      sessionStorage.removeItem('paymentAmount');
    } catch (error) {
      console.error('Failed to clear payment data from session storage:', error);
    }
  }
} 