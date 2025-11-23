import './polyfills.server.mjs';
import {
  environment
} from "./chunk-XB3OBPTA.mjs";
import {
  HttpClient
} from "./chunk-RTKK4VRH.mjs";
import {
  Observable,
  catchError,
  map,
  switchMap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-REGLKICM.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-LBJNHE26.mjs";

// src/app/shared/services/google-form.service.ts
var GoogleFormService = class _GoogleFormService {
  http;
  backendApiUrl = environment.backendApiUrl;
  constructor(http) {
    this.http = http;
  }
  /**
   * Submit booking data to Google Form
   * @param bookingData - The booking data to submit
   * @returns Observable with submission response
   */
  submitBookingToGoogleForm(bookingData) {
    const apiUrl = `${this.backendApiUrl}/google-form/submit-booking`;
    return this.http.post(apiUrl, bookingData).pipe(map((response) => {
      if (response.success) {
        return {
          success: true,
          message: response.message || "Booking data submitted to Google Form successfully"
        };
      } else {
        return {
          success: false,
          error: response.error || "Failed to submit booking data to Google Form"
        };
      }
    }), catchError((error) => {
      console.error("Google Form submission error:", error);
      return throwError(() => new Error("Failed to submit booking data to Google Form"));
    }));
  }
  /**
   * Format booking data for Google Form submission
   * @param bookingData - Raw booking data
   * @returns Formatted data for Google Form
   */
  formatBookingForGoogleForm(bookingData) {
    return {
      orderId: bookingData.bookingId || bookingData.id || "",
      paymentId: bookingData.paymentOrderId || bookingData.payment_order_id || "",
      isPaid: Boolean(bookingData.isPaid || bookingData.is_paid || false),
      address: bookingData.address || "",
      customerName: bookingData.customerName || bookingData.customer_name || "",
      customerEmail: bookingData.customerEmail || bookingData.customer_email || "",
      customerPhone: bookingData.customerPhone || bookingData.customer_phone || "",
      scheduledDate: bookingData.scheduledDate || bookingData.scheduled_date || "",
      scheduledTime: bookingData.scheduledTime || bookingData.scheduled_time || "",
      hours: parseInt(bookingData.hours) || 1,
      materials: Boolean(bookingData.materials),
      cleaners: parseInt(bookingData.cleaners) || 1,
      submissionDate: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  /**
   * Validate Google Form submission data
   * @param submissionData - The data to validate
   * @returns True if valid, false otherwise
   */
  validateSubmissionData(submissionData) {
    return !!(submissionData.customerName?.trim() && submissionData.customerEmail?.trim() && submissionData.customerPhone?.trim() && submissionData.address?.trim() && submissionData.orderId?.trim());
  }
  static \u0275fac = function GoogleFormService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoogleFormService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GoogleFormService, factory: _GoogleFormService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/booking.service.ts
var BookingService = class _BookingService {
  http;
  googleFormService;
  backendApiUrl = environment.backendApiUrl;
  constructor(http, googleFormService) {
    this.http = http;
    this.googleFormService = googleFormService;
  }
  // ============================================================================
  // PUBLIC METHODS
  // ============================================================================
  /**
   * Creates a new booking order
   * @param bookingRequest - The booking request data
   * @returns Observable with booking response
   */
  createBooking(bookingRequest) {
    const orderData = this.transformBookingRequestToApiFormat(bookingRequest);
    return this.http.post(`${this.backendApiUrl}/bookings/create`, orderData).pipe(map(this.handleBookingApiResponse), catchError(this.handleHttpError.bind(this)));
  }
  /**
   * Creates a booking with payment information after successful payment
   * @param bookingData - The booking data
   * @param paymentOrderId - The payment order ID
   * @param paymentStatus - The payment status
   * @returns Observable with booking response
   */
  createBookingWithPayment(bookingData, paymentOrderId, paymentStatus) {
    const orderData = this.transformPaymentBookingToApiFormat(bookingData, paymentOrderId, paymentStatus);
    return this.http.post(`${this.backendApiUrl}/bookings/create-with-payment`, orderData).pipe(map(this.handleBookingApiResponse), switchMap((bookingResponse) => {
      if (bookingResponse.success && bookingResponse.order) {
        const googleFormData = this.googleFormService.formatBookingForGoogleForm(bookingResponse.order);
        return this.googleFormService.submitBookingToGoogleForm(googleFormData).pipe(
          map(() => bookingResponse)
          // Return the original booking response
        );
      }
      return [bookingResponse];
    }), catchError(this.handleHttpError.bind(this)));
  }
  /**
   * Retrieves a booking by its ID
   * @param orderId - The booking order ID
   * @returns Observable with booking order
   */
  getBooking(orderId) {
    return this.http.get(`${this.backendApiUrl}/bookings/${orderId}`).pipe(map((response) => {
      if (response.success && response.order) {
        return response.order;
      }
      throw new Error(response.error || "Failed to get booking");
    }), catchError(this.handleHttpError.bind(this)));
  }
  /**
   * Updates the status of a booking
   * @param orderId - The booking order ID
   * @param status - The new status
   * @returns Observable with booking response
   */
  updateBookingStatus(orderId, status) {
    return this.http.put(`${this.backendApiUrl}/bookings/${orderId}/status`, { status }).pipe(map(this.handleBookingApiResponse), catchError(this.handleHttpError.bind(this)));
  }
  /**
   * Retrieves all bookings for a customer
   * @param customerEmail - The customer's email
   * @returns Observable with array of booking orders
   */
  getCustomerBookings(customerEmail) {
    return this.http.get(`${this.backendApiUrl}/bookings/customer/${customerEmail}`).pipe(map((response) => {
      if (response.success && response.bookings) {
        return response.bookings;
      }
      throw new Error(response.error || "Failed to get customer bookings");
    }), catchError(this.handleHttpError.bind(this)));
  }
  /**
   * Cancels a booking
   * @param orderId - The booking order ID
   * @returns Observable with booking response
   */
  cancelBooking(orderId) {
    return this.http.put(`${this.backendApiUrl}/bookings/${orderId}/cancel`, {}).pipe(map(this.handleBookingApiResponse), catchError(this.handleHttpError.bind(this)));
  }
  // ============================================================================
  // UTILITY METHODS
  // ============================================================================
  /**
   * Generates a unique order ID
   * @returns Generated order ID
   */
  generateOrderId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `CARLA_BOOKING_${timestamp}_${random}`.toUpperCase();
  }
  /**
   * Validates booking request data
   * @param bookingRequest - The booking request to validate
   * @returns True if valid, false otherwise
   */
  validateBooking(bookingRequest) {
    return !!(bookingRequest.customerName?.trim() && bookingRequest.customerEmail?.trim() && bookingRequest.customerPhone?.trim() && bookingRequest.address?.trim() && bookingRequest.cleaners > 0 && bookingRequest.hours > 0 && bookingRequest.total > 0);
  }
  /**
   * Formats booking data for display
   * @param booking - The booking order to format
   * @returns Formatted booking data
   */
  formatBooking(booking) {
    return __spreadProps(__spreadValues({}, booking), {
      formattedDate: new Date(booking.scheduledDate).toLocaleDateString(),
      formattedTime: booking.scheduledTime,
      formattedTotal: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "QAR"
      }).format(booking.total)
    });
  }
  // ============================================================================
  // PRIVATE HELPER METHODS
  // ============================================================================
  /**
   * Transforms booking request to API format
   */
  transformBookingRequestToApiFormat(bookingRequest) {
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
  transformPaymentBookingToApiFormat(bookingData, paymentOrderId, paymentStatus) {
    return {
      customer_name: bookingData.customerName,
      customer_email: bookingData.customerEmail,
      customer_phone: bookingData.customerPhone,
      address: bookingData.address,
      service_type: "cleaning",
      cleaners: bookingData.cleaners,
      hours: bookingData.hours,
      materials: bookingData.materials,
      total: parseFloat(sessionStorage.getItem("paymentAmount") || "0"),
      payment_method: "skipcash",
      payment_order_id: paymentOrderId,
      payment_status: paymentStatus,
      is_paid: paymentStatus === "completed",
      scheduled_date: bookingData.scheduledDate,
      scheduled_time: bookingData.scheduledTime
    };
  }
  /**
   * Handles booking API response
   */
  handleBookingApiResponse(response) {
    if (response.success) {
      return {
        success: true,
        orderId: response.orderId,
        order: response.order
      };
    }
    return {
      success: false,
      error: response.error || "Operation failed"
    };
  }
  /**
   * Handles HTTP errors
   */
  handleHttpError(error) {
    console.error("Booking service error:", error);
    let errorMessage = "An unexpected error occurred";
    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return throwError(() => new Error(errorMessage));
  }
  static \u0275fac = function BookingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookingService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(GoogleFormService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingService, factory: _BookingService.\u0275fac, providedIn: "root" });
};

// src/app/shared/services/payment-data.service.ts
var PaymentDataService = class _PaymentDataService {
  http;
  backendApiUrl = environment.backendApiUrl;
  constructor(http) {
    this.http = http;
  }
  /**
   * Store booking data for payment processing
   * @param paymentOrderId - The payment order ID
   * @param bookingData - The booking data to store
   * @param paymentAmount - The payment amount
   * @returns Observable with storage response
   */
  storePaymentData(paymentOrderId, bookingData, paymentAmount) {
    const apiUrl = `${this.backendApiUrl}/bookings/store-payment-data`;
    const payload = {
      paymentOrderId,
      bookingData,
      paymentAmount
    };
    return this.http.post(apiUrl, payload).pipe(map((response) => {
      if (response.success) {
        return {
          success: true,
          message: response.message || "Payment data stored successfully"
        };
      } else {
        return {
          success: false,
          error: response.error || "Failed to store payment data"
        };
      }
    }), catchError((error) => {
      console.error("Store payment data error:", error);
      return throwError(() => new Error("Failed to store payment data"));
    }));
  }
  /**
   * Retrieve booking data for payment processing
   * @param paymentOrderId - The payment order ID
   * @returns Observable with payment data
   */
  retrievePaymentData(paymentOrderId) {
    const apiUrl = `${this.backendApiUrl}/bookings/payment-data/${paymentOrderId}`;
    return this.http.get(apiUrl).pipe(map((response) => {
      if (response.success && response.data) {
        return {
          success: true,
          data: response.data
        };
      } else {
        return {
          success: false,
          error: response.error || "Failed to retrieve payment data"
        };
      }
    }), catchError((error) => {
      console.error("Retrieve payment data error:", error);
      return throwError(() => new Error("Failed to retrieve payment data"));
    }));
  }
  /**
   * Clean up payment data after successful booking creation
   * @param paymentOrderId - The payment order ID
   * @returns Observable with cleanup response
   */
  cleanupPaymentData(paymentOrderId) {
    const apiUrl = `${this.backendApiUrl}/bookings/payment-data/${paymentOrderId}`;
    return this.http.delete(apiUrl).pipe(map((response) => {
      if (response.success) {
        return {
          success: true,
          message: response.message || "Payment data cleaned up successfully"
        };
      } else {
        return {
          success: false,
          error: response.error || "Failed to clean up payment data"
        };
      }
    }), catchError((error) => {
      console.error("Cleanup payment data error:", error);
      return throwError(() => new Error("Failed to clean up payment data"));
    }));
  }
  /**
   * Get payment data from multiple sources (backend, sessionStorage, URL params)
   * @param paymentOrderId - The payment order ID
   * @returns Observable with payment data
   */
  getPaymentDataFromMultipleSources(paymentOrderId) {
    return new Observable((observer) => {
      this.retrievePaymentData(paymentOrderId).subscribe({
        next: (backendResponse) => {
          if (backendResponse.success && backendResponse.data) {
            observer.next(backendResponse);
            observer.complete();
          } else {
            this.getPaymentDataFromSessionStorage(paymentOrderId).subscribe({
              next: (sessionResponse) => {
                if (sessionResponse.success && sessionResponse.data) {
                  observer.next(sessionResponse);
                  observer.complete();
                } else {
                  observer.next({
                    success: false,
                    error: "Payment data not found in backend or session storage"
                  });
                  observer.complete();
                }
              },
              error: (error) => {
                observer.next({
                  success: false,
                  error: "Failed to retrieve payment data from session storage"
                });
                observer.complete();
              }
            });
          }
        },
        error: (error) => {
          this.getPaymentDataFromSessionStorage(paymentOrderId).subscribe({
            next: (sessionResponse) => {
              if (sessionResponse.success && sessionResponse.data) {
                observer.next(sessionResponse);
                observer.complete();
              } else {
                observer.next({
                  success: false,
                  error: "Payment data not found in backend or session storage"
                });
                observer.complete();
              }
            },
            error: (sessionError) => {
              observer.next({
                success: false,
                error: "Failed to retrieve payment data from any source"
              });
              observer.complete();
            }
          });
        }
      });
    });
  }
  /**
   * Get payment data from sessionStorage (fallback method)
   * @param paymentOrderId - The payment order ID
   * @returns Observable with payment data
   */
  getPaymentDataFromSessionStorage(paymentOrderId) {
    return new Observable((observer) => {
      try {
        const storedPaymentOrderId = sessionStorage.getItem("paymentOrderId");
        const bookingData = sessionStorage.getItem("bookingData");
        const paymentAmount = sessionStorage.getItem("paymentAmount");
        if (storedPaymentOrderId === paymentOrderId && bookingData && paymentAmount) {
          const parsedBookingData = JSON.parse(bookingData);
          const parsedPaymentAmount = parseFloat(paymentAmount);
          observer.next({
            success: true,
            data: {
              bookingData: parsedBookingData,
              paymentAmount: parsedPaymentAmount,
              createdAt: (/* @__PURE__ */ new Date()).toISOString(),
              expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1e3).toISOString()
            }
          });
        } else {
          observer.next({
            success: false,
            error: "Payment data not found in session storage"
          });
        }
        observer.complete();
      } catch (error) {
        observer.next({
          success: false,
          error: "Failed to parse payment data from session storage"
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
  storePaymentDataInSessionStorage(paymentOrderId, bookingData, paymentAmount) {
    try {
      sessionStorage.setItem("paymentOrderId", paymentOrderId);
      sessionStorage.setItem("bookingData", JSON.stringify(bookingData));
      sessionStorage.setItem("paymentAmount", paymentAmount.toString());
    } catch (error) {
      console.error("Failed to store payment data in session storage:", error);
    }
  }
  /**
   * Clear payment data from sessionStorage
   */
  clearPaymentDataFromSessionStorage() {
    try {
      sessionStorage.removeItem("paymentOrderId");
      sessionStorage.removeItem("bookingData");
      sessionStorage.removeItem("paymentAmount");
    } catch (error) {
      console.error("Failed to clear payment data from session storage:", error);
    }
  }
  static \u0275fac = function PaymentDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentDataService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentDataService, factory: _PaymentDataService.\u0275fac, providedIn: "root" });
};

export {
  BookingService,
  PaymentDataService
};
//# sourceMappingURL=chunk-SVHP6IXP.mjs.map
