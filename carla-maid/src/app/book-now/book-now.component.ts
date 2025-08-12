import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatLabel, MatSelectModule } from '@angular/material/select';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { AnalyticsService } from '../shared/services/analytics.service';
import { PaymentService, PaymentRequest, PaymentResponse, PaymentStatus } from '../shared/services/payment.service';
import { BookingService, BookingRequest, BookingResponse } from '../shared/services/booking.service';
import { PaymentDataService } from '../shared/services/payment-data.service';
import { PaymentSuccessPopupComponent } from '../shared/components/payment-success-popup/payment-success-popup.component';

// Constants for pricing and configuration
const PRICING_CONFIG = {
  CLEANER_PRICE_PER_HOUR: 35,
  MATERIALS_PRICE_PER_HOUR: 5,
  DATE_RANGE_DAYS: 30
};

const FORM_TIMEOUT = 9000;

@Component({
  selector: 'app-book-now',
  standalone: true,
  providers: [provideNativeDateAdapter(), DatePipe],
  imports: [
    MatSelectModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterLink,
    MatDatepickerModule,
    PaymentSuccessPopupComponent,
  ],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.sass'
})
export class BookNowComponent implements OnInit {
  // Form and UI state
  bookingForm!: FormGroup;
  price: number = 0;
  sent = false;
  isProcessingPayment = false;
  paymentError = '';
  
  // Payment success popup state
  showPaymentSuccessPopup = false;
  showPaymentCancelPopup = false;
  showPaymentFailedPopup = false;
  paymentStatus?: PaymentStatus;
  bookingOrderId?: string;

  // Date configuration
  minDate!: Date;
  maxDate!: Date;

  // ViewChild references
  @ViewChild('addressInput') addressInput!: ElementRef;
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  // Injected services
  private datePipe = inject(DatePipe);

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private router: Router,
    private analyticsService: AnalyticsService,
    private paymentService: PaymentService,
    private bookingService: BookingService,
    private paymentDataService: PaymentDataService
  ) {
    this.initializeForm();
    this.initializeDateRange();
    this.setupLanguage();
  }

  ngOnInit(): void {
    this.setupFormSubscriptions();
    this.setupRouterEvents();
    this.checkPaymentSuccessFromUrl();
    this.checkPaymentCancelFromUrl();
    this.checkPaymentFailedFromUrl();
  }

  // ==================== INITIALIZATION METHODS ====================

  private initializeForm(): void {
    this.bookingForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      address: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      cleaners: ['', Validators.required],
      materials: ['', Validators.required],
      hours: ['', Validators.required],
      paymentOption: ['', Validators.required]
    });
  }

  private initializeDateRange(): void {
    const today = new Date();
    this.minDate = today;
    this.maxDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + PRICING_CONFIG.DATE_RANGE_DAYS
    );
  }

  private setupLanguage(): void {
    this.translate.setDefaultLang('en');
  }

  private setupFormSubscriptions(): void {
    this.bookingForm.valueChanges.subscribe(() => this.calculatePrice());
    
    this.bookingForm.get('hours')?.valueChanges.subscribe(() => {
      this.bookingForm.get('arrivalTime')?.setValue('');
    });
  }

  private setupRouterEvents(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0 });
      }
    });
  }

  // ==================== PRICING METHODS ====================

  calculatePrice(): void {
    const formValue = this.bookingForm.value;
    const cleanerCost = formValue.cleaners * PRICING_CONFIG.CLEANER_PRICE_PER_HOUR * formValue.hours;
    const materialsCost = formValue.materials 
      ? formValue.hours * PRICING_CONFIG.MATERIALS_PRICE_PER_HOUR * formValue.cleaners 
      : 0;
    
    this.price = cleanerCost + materialsCost;
  }

  // ==================== FORM SUBMISSION METHODS ====================

  async onSubmit(): Promise<void> {
    if (this.bookingForm.invalid) {
      return;
    }

    const paymentOption = this.bookingForm.value.paymentOption;
    
    if (paymentOption === 'pay_now') {
      await this.processPayment();
    } else {
      await this.submitBookingWithoutPayment();
    }
  }

  // ==================== PAYMENT PROCESSING METHODS ====================

  private async processPayment(): Promise<void> {
    this.setPaymentProcessingState(true);

    try {
      if (!this.validatePaymentAmount()) {
        return;
      }

      await this.testPaymentServiceConnection();
    } catch (error) {
      this.handlePaymentError('An unexpected error occurred. Please try again.', error);
    }
  }

  private validatePaymentAmount(): boolean {
    if (!this.paymentService.validateAmount(this.price)) {
      this.setPaymentError('Invalid payment amount');
      return false;
    }
    return true;
  }

  private async testPaymentServiceConnection(): Promise<void> {
    this.paymentService.testSkipCashConnection().subscribe({
      next: (healthCheck) => {
        if (!healthCheck.success) {
          this.setPaymentError('Payment service is temporarily unavailable. Please try again later.');
          return;
        }
        this.createPaymentOrder();
      },
      error: (error) => {
        this.handlePaymentError('Payment service is unavailable. Please try again later.', error);
      }
    });
  }

  private createPaymentOrder(): void {
    const paymentOrderId = this.paymentService.generateOrderId();
    const paymentRequest = this.buildPaymentRequest(paymentOrderId);

    this.paymentService.logPaymentAttempt(paymentRequest);

    this.paymentService.createPayment(paymentRequest).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.handleSuccessfulPaymentCreation(paymentOrderId, response);
        } else {
          this.handlePaymentCreationFailure(paymentOrderId, response);
        }
      },
      error: (error) => {
        this.handlePaymentError('Payment processing failed. Please try again.', error, paymentOrderId);
      }
    });
  }

  private buildPaymentRequest(paymentOrderId: string): PaymentRequest {
    const formValue = this.bookingForm.value;
    return {
      amount: this.price,
      currency: 'QAR',
      orderId: paymentOrderId,
      customerName: formValue.fullName,
      customerEmail: formValue.email,
      customerPhone: formValue.phone,
      description: `Cleaning Service - ${formValue.cleaners} cleaner(s), ${formValue.hours} hour(s)`,
      returnUrl: this.paymentService.getPaymentSuccessUrl(paymentOrderId),
      cancelUrl: this.paymentService.getPaymentCancelUrl(paymentOrderId)
    };
  }

  private handleSuccessfulPaymentCreation(paymentOrderId: string, response: any): void {
    this.trackPaymentInitiation(paymentOrderId);
    this.storePaymentData(paymentOrderId);
    // Persist the orderId locally to be read on success/cancel pages without URL params
    sessionStorage.setItem('paymentOrderId', paymentOrderId);
    this.paymentService.logPaymentResult(paymentOrderId, 'initiated');
    this.paymentService.redirectToPayment(response.data.payUrl);
  }

  private handlePaymentCreationFailure(paymentOrderId: string, response: any): void {
    const errorMessage = response.error || 'Payment creation failed';
    this.setPaymentError(errorMessage);
    this.paymentService.logPaymentResult(paymentOrderId, 'failed', response.error);
  }

  private trackPaymentInitiation(paymentOrderId: string): void {
    this.analyticsService.trackPaymentInitiation(paymentOrderId, this.price, 'QAR');
  }

  private storePaymentData(paymentOrderId: string): void {
    const bookingData = this.buildBookingData();
    
    // Store in backend for reliable retrieval
    this.paymentDataService.storePaymentData(paymentOrderId, bookingData, this.price).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Payment data stored in backend successfully');
        } else {
          console.error('Failed to store payment data in backend:', response.error);
        }
      },
      error: (error) => {
        console.error('Error storing payment data in backend:', error);
      }
    });
    
    // Also store in sessionStorage as backup
    this.paymentDataService.storePaymentDataInSessionStorage(paymentOrderId, bookingData, this.price);
  }

  // ==================== BOOKING METHODS ====================

  private async submitBookingWithoutPayment(): Promise<void> {
    this.analyticsService.trackFormSubmission('booking_form', 'book-now-form');
    
    const bookingRequest = this.buildBookingRequest('pay_later');

    this.bookingService.createBooking(bookingRequest).subscribe({
      next: (bookingResponse: BookingResponse) => {
        if (bookingResponse.success) {
          this.handleSuccessfulBooking();
        } else {
          this.setPaymentError(bookingResponse.error || 'Failed to create booking');
        }
      },
      error: (error) => {
        this.handleBookingError(error);
      }
    });
  }

  private buildBookingRequest(paymentMethod: string): BookingRequest {
    const formValue = this.bookingForm.value;
    return {
      customerName: formValue.fullName,
      customerEmail: formValue.email,
      customerPhone: formValue.phone,
      address: formValue.address,
      serviceType: 'cleaning',
      cleaners: formValue.cleaners,
      hours: formValue.hours,
      materials: formValue.materials,
      total: this.price,
      paymentMethod: paymentMethod,
      scheduledDate: this.formatDate(formValue.arrivalDate),
      scheduledTime: formValue.arrivalTime
    };
  }

  private buildBookingData(): any {
    const formValue = this.bookingForm.value;
    return {
      customerName: formValue.fullName,
      customerEmail: formValue.email,
      customerPhone: formValue.phone,
      address: formValue.address,
      cleaners: formValue.cleaners,
      hours: formValue.hours,
      materials: formValue.materials,
      scheduledDate: this.formatDate(formValue.arrivalDate),
      scheduledTime: formValue.arrivalTime
    };
  }

  private handleSuccessfulBooking(): void {
    this.sent = true;
    this.resetForm();
    this.trackBookingCompletion();
    this.scheduleFormReset();
  }

  private trackBookingCompletion(): void {
    this.analyticsService.trackBookingComplete('cleaning_service', this.price);
    this.analyticsService.trackPurchase(`booking_${Date.now()}`, this.price, 'QAR');
  }

  // ==================== GOOGLE FORM SUBMISSION ====================

  submitGoogleForm({ formUrl, formData }: { formUrl: string, formData: FormData }): void {
    this.sent = false;
    
    fetch(formUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })
    .then(() => {
      this.handleSuccessfulGoogleFormSubmission();
    })
    .catch((error) => {
      console.error('Google form submission error:', error);
    });
  }

  private handleSuccessfulGoogleFormSubmission(): void {
    this.sent = true;
    this.resetForm();
    this.trackBookingCompletion();
    this.scheduleFormReset();
  }

  // ==================== UTILITY METHODS ====================

  private formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || new Date().toISOString().split('T')[0];
  }

  private setPaymentProcessingState(isProcessing: boolean): void {
    this.isProcessingPayment = isProcessing;
    if (!isProcessing) {
      this.paymentError = '';
    }
  }

  private setPaymentError(message: string): void {
    this.paymentError = message;
    this.isProcessingPayment = false;
  }

  private handlePaymentError(message: string, error: any, paymentOrderId?: string): void {
    console.error('Payment error:', error);
    this.setPaymentError(message);
    if (paymentOrderId) {
      this.paymentService.logPaymentResult(paymentOrderId, 'error', 'Payment processing failed');
      // Track payment failure for marketing optimization
      this.analyticsService.trackPaymentFailure(paymentOrderId, 'payment_processing_error');
    }
  }

  private handleBookingError(error: any): void {
    console.error('Booking creation error:', error);
    this.setPaymentError('Failed to create booking. Please try again.');
  }

  private scheduleFormReset(): void {
    setTimeout(() => {
      this.sent = false;
    }, FORM_TIMEOUT);
  }

  // ==================== PUBLIC METHODS ====================

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  resetForm(): void {
    this.bookingForm.reset();
    this.paymentError = '';
    this.isProcessingPayment = false;
  }

  openDatePicker(picker: any): void {
    picker.open();
  }

  // ==================== PAYMENT SUCCESS POPUP METHODS ====================

  private checkPaymentSuccessFromUrl(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentSuccess = urlParams.get('payment_success');
    const orderId = urlParams.get('order_id');
        
    if (paymentSuccess === 'true' && orderId) {
      
      // Show popup immediately with basic info
      const mockPaymentStatus: PaymentStatus = {
        orderId: orderId,
        status: 'completed',
        amount: 280,
        currency: 'QAR',
        transactionId: `TXN_${orderId}`
      };
      
      // Show popup immediately
      this.showPaymentSuccess(mockPaymentStatus, orderId);
      
      // Also try to check actual payment status
      this.paymentService.checkPaymentStatus(orderId).subscribe({
        next: (status) => {
          console.log('Payment status check result:', status);
          if (status.status === 'completed') {
            // Enhanced tracking for SkipCash payment success
            this.analyticsService.trackSkipCashPaymentSuccess(
              status.orderId,
              status.amount || 0,
              status.currency || 'QAR',
              'cleaning_service'
            );

            // Update popup with real payment data
            this.paymentStatus = status;
            
            // Try to create booking with payment information
            this.createBookingWithPayment(status);
          } else {
            console.error('Payment not completed:', status);
          }
        },
        error: (error) => {
          console.error('Error checking payment status:', error);
          // Keep the popup open even if status check fails
        }
      });
    }
  }

  private createBookingWithPayment(paymentStatus: PaymentStatus): void {
    const paymentOrderId = paymentStatus.orderId;

    if (paymentOrderId) {
      // Try to get payment data from multiple sources
      this.paymentDataService.getPaymentDataFromMultipleSources(paymentOrderId).subscribe({
        next: (paymentDataResponse) => {
          if (paymentDataResponse.success && paymentDataResponse.data) {
            const bookingInfo = paymentDataResponse.data.bookingData;
            const paymentAmount = paymentDataResponse.data.paymentAmount;
            
            // Update session storage with payment amount for booking service
            sessionStorage.setItem('paymentAmount', paymentAmount.toString());
            
            this.bookingService.createBookingWithPayment(
              bookingInfo, 
              paymentOrderId, 
              paymentStatus.status
            ).subscribe({
              next: (response) => {
                if (response.success && response.orderId) {
                  this.bookingOrderId = response.orderId;
                  
                  // Track booking completion with payment for marketing analytics
                  this.analyticsService.trackBookingWithPayment(
                    paymentOrderId,
                    response.orderId,
                    paymentAmount,
                    'QAR'
                  );
                  
                  // Clean up payment data after successful booking creation
                  this.paymentDataService.cleanupPaymentData(paymentOrderId).subscribe({
                    next: (cleanupResponse) => {
                      if (cleanupResponse.success) {
                        console.log('Payment data cleaned up successfully');
                      } else {
                        console.error('Failed to clean up payment data:', cleanupResponse.error);
                      }
                    },
                    error: (cleanupError) => {
                      console.error('Error cleaning up payment data:', cleanupError);
                    }
                  });
                  
                  // Also clear session storage
                  this.paymentDataService.clearPaymentDataFromSessionStorage();
                  
                  console.log('Booking created successfully with payment:', response.orderId);
                  
                  // Show success popup
                  this.showPaymentSuccess(paymentStatus, response.orderId);
                } else {
                  console.error('Failed to create booking with payment:', response.error);
                }
              },
              error: (error) => {
                console.error('Error creating booking with payment:', error);
              }
            });
          } else {
            console.error('Failed to retrieve payment data:', paymentDataResponse.error);
            // Show error message to user
            this.setPaymentError('Failed to retrieve booking data. Please contact support.');
          }
        },
        error: (error) => {
          console.error('Error retrieving payment data:', error);
          // Show error message to user
          this.setPaymentError('Failed to retrieve booking data. Please contact support.');
        }
      });
    } else {
      console.error('Missing payment order ID');
      this.setPaymentError('Missing payment information. Please contact support.');
    }
  }

  showPaymentSuccess(paymentStatus: PaymentStatus, bookingOrderId?: string): void {
    this.paymentStatus = paymentStatus;
    this.bookingOrderId = bookingOrderId;
    this.showPaymentSuccessPopup = true;
  }

  closePaymentSuccessPopup(): void {
    this.showPaymentSuccessPopup = false;
    this.paymentStatus = undefined;
    this.bookingOrderId = undefined;
  }

  // ==================== PAYMENT CANCEL POPUP METHODS ====================

  private checkPaymentCancelFromUrl(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentCancel = urlParams.get('payment_cancel');
    const orderId = urlParams.get('order_id');
        
    if (paymentCancel === 'true' && orderId) {
      // Show popup immediately with basic info
      const mockPaymentStatus: PaymentStatus = {
        orderId: orderId,
        status: 'cancelled',
        amount: 280,
        currency: 'QAR'
      };
      
      // Show popup immediately
      this.showPaymentCancel(mockPaymentStatus, orderId);
      
      // Also try to check actual payment status
      this.paymentService.checkPaymentStatus(orderId).subscribe({
        next: (status) => {
          console.log('Payment cancel status check result:', status);
          if (status.status === 'cancelled') {
            // Track cancelled payment
            this.analyticsService.trackEvent('payment_cancelled', {
              order_id: status.orderId,
              amount: status.amount,
              currency: status.currency
            });

            // Update popup with real payment data
            this.paymentStatus = status;
          } else {
            console.error('Payment not cancelled:', status);
          }
        },
        error: (error) => {
          console.error('Error checking payment cancel status:', error);
          // Keep the popup open even if status check fails
        }
      });
    }
  }

  showPaymentCancel(paymentStatus: PaymentStatus, orderId?: string): void {
    this.paymentStatus = paymentStatus;
    this.showPaymentCancelPopup = true;
    
    // Clear session storage for cancelled payment
    sessionStorage.removeItem('bookingData');
    sessionStorage.removeItem('paymentOrderId');
    sessionStorage.removeItem('paymentAmount');
  }

  closePaymentCancelPopup(): void {
    this.showPaymentCancelPopup = false;
    this.paymentStatus = undefined;
  }

  // ==================== PAYMENT FAILED POPUP METHODS ====================

  private checkPaymentFailedFromUrl(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentFailed = urlParams.get('payment_failed');
    const orderId = urlParams.get('order_id');
        
    if (paymentFailed === 'true' && orderId) {
      // Show popup immediately with basic info
      const mockPaymentStatus: PaymentStatus = {
        orderId: orderId,
        status: 'failed',
        amount: 280,
        currency: 'QAR'
      };
      
      // Show popup immediately
      this.showPaymentFailed(mockPaymentStatus, orderId);
      
      // Also try to check actual payment status
      this.paymentService.checkPaymentStatus(orderId).subscribe({
        next: (status) => {
          console.log('Payment failed status check result:', status);
          if (status.status === 'failed') {
            // Track failed payment
            this.analyticsService.trackEvent('payment_failed', {
              order_id: status.orderId,
              amount: status.amount,
              currency: status.currency
            });

            // Update popup with real payment data
            this.paymentStatus = status;
          } else {
            console.error('Payment not failed:', status);
          }
        },
        error: (error) => {
          console.error('Error checking payment failed status:', error);
          // Keep the popup open even if status check fails
        }
      });
    }
  }

  showPaymentFailed(paymentStatus: PaymentStatus, orderId?: string): void {
    this.paymentStatus = paymentStatus;
    this.showPaymentFailedPopup = true;
    
    // Clear session storage for failed payment
    sessionStorage.removeItem('bookingData');
    sessionStorage.removeItem('paymentOrderId');
    sessionStorage.removeItem('paymentAmount');
  }

  closePaymentFailedPopup(): void {
    this.showPaymentFailedPopup = false;
    this.paymentStatus = undefined;
  }

  tryAgain(): void {
    this.closePaymentCancelPopup();
    this.closePaymentFailedPopup();
    this.router.navigate(['/book-now']);
  }

  goToHome(): void {
    this.closePaymentSuccessPopup();
    this.router.navigate(['/']);
  }

  bookAnother(): void {
    this.closePaymentSuccessPopup();
    this.resetForm();
  }
}
