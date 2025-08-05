import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

// Google Form interfaces
export interface GoogleFormSubmission {
  orderId: string;
  paymentId?: string;
  isPaid: boolean;
  address: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  scheduledDate: string;
  scheduledTime: string;
  hours: number;
  materials: boolean;
  cleaners: number;
  submissionDate: string;
}

export interface GoogleFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleFormService {
  private readonly backendApiUrl = environment.backendApiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Submit booking data to Google Form
   * @param bookingData - The booking data to submit
   * @returns Observable with submission response
   */
  submitBookingToGoogleForm(bookingData: GoogleFormSubmission): Observable<GoogleFormResponse> {
    const apiUrl = `${this.backendApiUrl}/google-form/submit-booking`;

    return this.http.post<GoogleFormResponse>(apiUrl, bookingData)
      .pipe(
        map(response => {
          if (response.success) {
            return {
              success: true,
              message: response.message || 'Booking data submitted to Google Form successfully'
            };
          } else {
            return {
              success: false,
              error: response.error || 'Failed to submit booking data to Google Form'
            };
          }
        }),
        catchError(error => {
          console.error('Google Form submission error:', error);
          return throwError(() => new Error('Failed to submit booking data to Google Form'));
        })
      );
  }

  /**
   * Format booking data for Google Form submission
   * @param bookingData - Raw booking data
   * @returns Formatted data for Google Form
   */
  formatBookingForGoogleForm(bookingData: any): GoogleFormSubmission {
    return {
      orderId: bookingData.bookingId || bookingData.id || '',
      paymentId: bookingData.paymentOrderId || bookingData.payment_order_id || '',
      isPaid: Boolean(bookingData.isPaid || bookingData.is_paid || false),
      address: bookingData.address || '',
      customerName: bookingData.customerName || bookingData.customer_name || '',
      customerEmail: bookingData.customerEmail || bookingData.customer_email || '',
      customerPhone: bookingData.customerPhone || bookingData.customer_phone || '',
      scheduledDate: bookingData.scheduledDate || bookingData.scheduled_date || '',
      scheduledTime: bookingData.scheduledTime || bookingData.scheduled_time || '',
      hours: parseInt(bookingData.hours) || 1,
      materials: Boolean(bookingData.materials),
      cleaners: parseInt(bookingData.cleaners) || 1,
      submissionDate: new Date().toISOString()
    };
  }

  /**
   * Validate Google Form submission data
   * @param submissionData - The data to validate
   * @returns True if valid, false otherwise
   */
  validateSubmissionData(submissionData: GoogleFormSubmission): boolean {
    return !!(
      submissionData.customerName?.trim() &&
      submissionData.customerEmail?.trim() &&
      submissionData.customerPhone?.trim() &&
      submissionData.address?.trim() &&
      submissionData.orderId?.trim()
    );
  }
} 