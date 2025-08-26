import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentService, PaymentStatus } from '../../shared/services/payment.service';
import { BookingService } from '../../shared/services/booking.service';
import { PaymentDataService } from '../../shared/services/payment-data.service';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <!-- Progress Bar at Top -->
    @if(isProcessing && !isPaymentFailed){
      <div class="top-progress-bar">
        <div class="progress-container">
          <div class="progress-text">{{ 'payment.processing.progressText' | translate }}</div>
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="getProgressPercentage()"></div>
          </div>
        </div>
      </div>
    }
    
    <div class="payment-success-container">
      <div class="success-card">
        <!-- Failed Payment State -->
        @if(isPaymentFailed){
          <div class="failed-payment-state">
            <div class="failed-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
            </div>
            <h1>{{ 'payment.incomplete.title' | translate }}</h1>
            <p>{{ 'payment.incomplete.message' | translate }}</p>
            
            <!-- Payment Details Section for Failed Payment -->
            @if(paymentStatus){
              <div class="payment-details">
                <div class="detail-row">
                  <span>{{ 'payment.orderId' | translate }}:</span>
                  <span>{{ paymentStatus.orderId }}</span>
                </div>
                @if(paymentStatus.amount){
                  <div class="detail-row">
                    <span>{{ 'payment.amount' | translate }}:</span>
                    <span>{{ paymentStatus.amount }} {{ paymentStatus.currency }}</span>
                  </div>
                }
                @if(paymentStatus.transactionId){
                  <div class="detail-row">
                    <span>{{ 'payment.transactionId' | translate }}:</span>
                    <span>{{ paymentStatus.transactionId }}</span>
                  </div>
                }
                @if(paymentStatus.error){
                  <div class="detail-row error">
                    <span>{{ 'payment.error' | translate }}:</span>
                    <span>{{ paymentStatus.error }}</span>
                  </div>
                }
              </div>
            }
            
            <!-- Action Buttons for Failed Payment -->
            <div class="actions">
              <button class="btn-primary" (click)="bookWithoutPayment()">
                {{ 'payment.incomplete.bookWithoutPayment' | translate }}
              </button>
              <button class="btn-outline" (click)="goToHome()">
                {{ 'payment.backToHome' | translate }}
              </button>
            </div>
          </div>
        }
        
        <!-- Loading State -->
        @if(isProcessing && !isPaymentFailed){
          <div class="processing-state">
            <div class="loading-spinner">
              <div class="spinner"></div>
            </div>
            <h1>{{ 'payment.processing.title' | translate }}</h1>
            <p class="processing-message">{{ 'payment.processing.message' | translate }}</p>
            <div class="warning-box">
              <div class="warning-icon">⚠️</div>
              <p class="warning-text">{{ 'payment.processing.warning' | translate }}</p>
            </div>
            <div class="progress-steps">
              <div class="step" [class.active]="isSavingPayment" [class.completed]="paymentSaved">
                <div class="step-icon">{{ paymentSaved ? '✓' : (isSavingPayment ? '⟳' : '1') }}</div>
                <span>{{ 'payment.processing.savingPayment' | translate }}</span>
              </div>
              <div class="step" [class.active]="isCreatingBooking" [class.completed]="bookingCreated">
                <div class="step-icon">{{ bookingCreated ? '✓' : (isCreatingBooking ? '⟳' : '2') }}</div>
                <span>{{ 'payment.processing.creatingBooking' | translate }}</span>
              </div>
            </div>
          </div>
        }
        
        <!-- Success State -->
        @if(!isProcessing && !isPaymentFailed){
          <div class="completion-message">
            <div class="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h1>{{ 'payment.success.title' | translate }}</h1>
            <p>{{ 'payment.success.message' | translate }}</p>
                        <div class="completion-badge">
              <span class="badge-icon">✓</span>
              <span>{{ 'payment.processing.completed' | translate }}</span>
            </div>
          </div>
          
          <!-- Payment Details Section -->
          @if(paymentStatus){
            <div class="payment-details">
              <div class="detail-row">
                <span>{{ 'payment.orderId' | translate }}:</span>
                <span>{{ paymentStatus.orderId }}</span>
              </div>
              <div class="detail-row">
                <span>{{ 'payment.amount' | translate }}:</span>
                <span>{{ paymentStatus.amount }} {{ paymentStatus.currency }}</span>
              </div>
              @if(paymentStatus.transactionId){
                <div class="detail-row">
                  <span>{{ 'payment.transactionId' | translate }}:</span>
                  <span>{{ paymentStatus.transactionId }}</span>
                </div>
              }
              @if(bookingOrderId){
                <div class="detail-row">
                  <span>{{ 'booking.orderId' | translate }}:</span>
                  <span>{{ bookingOrderId }}</span>
                </div>
              }
            </div>
          }
          
          <!-- SkipCash Payment Details Section -->
          @if(skipCashId || skipCashStatus || skipCashTransId){
            <div class="skipcash-details">
              <h3>SkipCash Payment Details</h3>
              @if(skipCashId){
                <div class="detail-row">
                  <span>SkipCash ID:</span>
                  <span>{{ skipCashId }}</span>
                </div>
              }
              @if(skipCashStatus){
                <div class="detail-row">
                  <span>Payment Status:</span>
                  <span>{{ skipCashStatus }}</span>
                </div>
              }
              @if(skipCashTransId){
                <div class="detail-row">
                  <span>Transaction ID:</span>
                  <span>{{ skipCashTransId }}</span>
                </div>
              }
              @if(skipCashCustom1){
                <div class="detail-row">
                  <span>Service:</span>
                  <span>{{ skipCashCustom1 }}</span>
                </div>
              }
            </div>
          }
          
          <!-- Action Buttons -->
          <div class="actions">
            <button class="btn-primary" (click)="goToHome()">
              {{ 'payment.backToHome' | translate }}
            </button>
            <button class="btn-secondary" (click)="bookAnother()">
              {{ 'payment.bookAnother' | translate }}
            </button>
          </div>
        }
      </div>
    </div>
  `,
  styleUrls: ['./payment-success.component.sass']
})
export class PaymentSuccessComponent implements OnInit, OnDestroy {
  // Payment status and order information
  paymentStatus?: PaymentStatus;
  orderId?: string;
  bookingOrderId?: string;
  
  // Processing states
  isProcessing = true;
  isSavingPayment = false;
  isCreatingBooking = false;
  paymentSaved = false;
  bookingCreated = false;
  isPaymentFailed = false;
  
  // Prevention of double processing
  private readonly PROCESSING_KEY = 'payment_processing_completed';
  private readonly PROCESSING_TIMEOUT = 30000; // 30 seconds timeout
  
  // SkipCash payment parameters
  skipCashId?: string;
  skipCashStatusId?: string;
  skipCashStatus?: string;
  skipCashTransId?: string;
  skipCashCustom1?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
    private bookingService: BookingService,
    private paymentDataService: PaymentDataService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    // Check if payment has already been processed to prevent double saving
    if (this.isPaymentAlreadyProcessed()) {
      this.showAlreadyProcessedState();
      return;
    }
    
    this.initializePaymentData();
    
    // Check if payment failed before proceeding with normal flow
    if (this.isPaymentFailedFromUrl()) {
      this.handleFailedPayment();
      return;
    }
    
    this.handlePaymentFlow();
    this.setupPageUnloadWarning();
    this.setupRouterEvents();
  }

  /**
   * Setup warning when user tries to close/refresh the page during processing
   */
  private setupPageUnloadWarning(): void {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    
    // Also handle page visibility change to detect refresh
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  /**
   * Cleanup event listeners when component is destroyed
   */
  ngOnDestroy(): void {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  /**
   * Handle beforeunload event
   */
  private handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (this.isProcessing) {
      event.preventDefault();
      event.returnValue = '⚠️ Please do not close this page until your booking is complete. Your payment is being processed.';
      return event.returnValue;
    }
  }

  /**
   * Handle visibility change event to detect page refresh
   */
  private handleVisibilityChange = () => {
    if (document.visibilityState === 'visible' && this.isPaymentAlreadyProcessed()) {
      // Page was refreshed and payment was already processed
      console.log('Page refreshed after payment was already processed');
      this.showAlreadyProcessedState();
    }
  }

  /**
   * Setup router events to handle navigation
   */
  private setupRouterEvents(): void {
    // Listen for route changes to prevent double processing
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if we're still on the success page and payment was already processed
        if (this.router.url.includes('payment-success') && this.isPaymentAlreadyProcessed()) {
          this.showAlreadyProcessedState();
        }
      }
    });
  }

  /**
   * Calculate progress percentage based on current state
   */
  getProgressPercentage(): number {
    let progress = 0;
    if (this.paymentSaved) progress += 50;
    if (this.bookingCreated) progress += 50;
    return progress;
  }

  /**
   * Initialize payment data from various sources
   */
  private initializePaymentData(): void {
    // Get orderId from URL parameters
    const urlOrderId = this.route.snapshot.queryParams['order_id'] || '';
    
    this.orderId = urlOrderId;
    
    // Extract SkipCash payment parameters
    this.extractSkipCashParameters();
  }

  /**
   * Extract SkipCash specific parameters from URL
   */
  private extractSkipCashParameters(): void {
    this.skipCashId = this.route.snapshot.queryParams['id'];
    this.skipCashStatusId = this.route.snapshot.queryParams['statusId'];
    this.skipCashStatus = this.route.snapshot.queryParams['status'];
    this.skipCashTransId = this.route.snapshot.queryParams['transId'];
    this.skipCashCustom1 = this.route.snapshot.queryParams['custom1'];
  }

  /**
   * Handle the payment flow based on available data
   */
  private handlePaymentFlow(): void {
    
    // Check if we have valid payment data to process
    if (!this.hasValidPaymentData()) {
      console.warn('No valid payment data found, redirecting to home');
      this.router.navigate(['/']);
      return;
    }
    
    if (this.orderId) {
      this.savePayment();
    } else if (this.isSkipCashSuccessRedirect()) {
      this.createMinimalPaymentStatus();
      this.completeProcessing();
    }
  }

  /**
   * Check if we have valid payment data to process
   */
  private hasValidPaymentData(): boolean {
    // Check if payment parameters are expired
    if (this.arePaymentParametersExpired()) {
      console.warn('Payment parameters are expired');
      return false;
    }
    
    return !!(this.orderId || (this.skipCashId && this.skipCashStatus === 'Paid'));
  }

  /**
   * Check if payment parameters are expired (older than 1 hour)
   */
  private arePaymentParametersExpired(): boolean {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const timestamp = urlParams.get('timestamp');
      
      if (!timestamp) return false;
      
      const paramTime = parseInt(timestamp);
      const now = Date.now();
      const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
      
      return (now - paramTime) > oneHour;
    } catch (error) {
      console.error('Error checking payment parameter expiration:', error);
      return false;
    }
  }

  /**
   * Check if user came directly from SkipCash success redirect
   */
  private isSkipCashSuccessRedirect(): boolean {
    return !!(this.skipCashId && this.skipCashStatus === 'Paid');
  }

  /**
   * Create minimal payment status for SkipCash redirects
   */
  private createMinimalPaymentStatus(): void {
    this.paymentStatus = {
      orderId: this.orderId || 'Unknown',
      status: 'completed',
      amount: 0, // Will be updated when actual data is retrieved
      currency: 'QAR'
    };
  }

  /**
   * Save payment information to backend
   */
  private savePayment(): void {       
    this.isSavingPayment = true;
    
    this.paymentService.savePayment(
      {
        orderId: this.orderId || '',
        transactionId: this.skipCashTransId || '',
        statusId: this.skipCashStatusId || '',
        bookingInfo: this.bookingOrderId || ''
      }
    ).subscribe({
      next: () => {
        // Payment saved successfully
        console.log('Payment saved successfully');
        this.paymentSaved = true;
        this.isSavingPayment = false;
        
        // Now create the booking
        this.createBookingWithPayment();
      },
      error: (error) => {
        // Handle payment save error
        console.error('Failed to save payment:', error);
        this.isSavingPayment = false;
        this.completeProcessing();
      }
    });
  }
  
  /**
   * Create booking with payment information
   */
  private createBookingWithPayment(): void {
    if (!this.orderId) {
      this.completeProcessing();
      return;
    }

    this.isCreatingBooking = true;
    this.retrievePaymentDataAndCreateBooking(this.orderId);
  }

  /**
   * Retrieve payment data and create booking
   */
  private retrievePaymentDataAndCreateBooking(paymentOrderId: string): void {
    this.paymentDataService.getPaymentDataFromMultipleSources(paymentOrderId).subscribe({
      next: (paymentDataResponse) => {
        if (paymentDataResponse.success && paymentDataResponse.data) {
          this.processPaymentDataAndCreateBooking(paymentDataResponse.data, paymentOrderId);
        } else {
          this.handlePaymentDataError();
        }
      },
      error: () => {
        this.handlePaymentDataError();
      }
    });
  }

  /**
   * Process payment data and create booking
   */
  private processPaymentDataAndCreateBooking(paymentData: any, paymentOrderId: string): void {
    const { bookingData, paymentAmount } = paymentData;
    
    // Store payment amount for booking service
    sessionStorage.setItem('paymentAmount', paymentAmount.toString());
    
    this.createBooking(bookingData, paymentOrderId);
  }

  /**
   * Create the actual booking
   */
  private createBooking(bookingData: any, paymentOrderId: string): void {
    this.bookingService.createBookingWithPayment(bookingData, paymentOrderId, 'completed').subscribe({
      next: (response) => {
        if (response.success && response.orderId) {
          this.handleSuccessfulBooking(response.orderId, paymentOrderId);
        }
        this.bookingCreated = true;
        this.isCreatingBooking = false;
        this.completeProcessing();
      },
      error: () => {
        this.isCreatingBooking = false;
        this.completeProcessing();
      }
    });
  }

  /**
   * Handle successful booking creation
   */
  private handleSuccessfulBooking(bookingOrderId: string, paymentOrderId: string): void {
    this.bookingOrderId = bookingOrderId;
    
    // Clean up session storage
    this.cleanupSessionStorage();
    
    // Clean up payment data
    this.cleanupPaymentData(paymentOrderId);
    
    // Mark payment processing as completed
    this.markPaymentProcessingCompleted();
  }

  /**
   * Complete the processing and show success state
   */
  private completeProcessing(): void {
    // Add a small delay to show the completion state
    setTimeout(() => {
      this.isProcessing = false;
      
      // Mark payment processing as completed to prevent double saving
      this.markPaymentProcessingCompleted();
      
      // Remove URL parameters after successful processing
      this.removeUrlParameters();
    }, 1000);
  }

  /**
   * Clean up session storage after successful booking
   */
  private cleanupSessionStorage(): void {
    sessionStorage.removeItem('paymentOrderId');
    sessionStorage.removeItem('paymentAmount');
    sessionStorage.removeItem('bookingData');
    this.paymentDataService.clearPaymentDataFromSessionStorage();
  }

  /**
   * Clean up payment data from backend
   */
  private cleanupPaymentData(paymentOrderId: string): void {
    this.paymentDataService.cleanupPaymentData(paymentOrderId).subscribe({
      next: (cleanupResponse) => {
        if (!cleanupResponse.success) {
          // Handle cleanup failure silently for better UX
        }
      },
      error: () => {
        // Handle cleanup error silently for better UX
      }
    });
  }

  /**
   * Check if payment has already been processed to prevent double saving
   */
  private isPaymentAlreadyProcessed(): boolean {
    const processingData = sessionStorage.getItem(this.PROCESSING_KEY);
    if (!processingData) return false;
    
    try {
      const data = JSON.parse(processingData);
      const now = Date.now();
      
      // Check if processing was completed and is within timeout period
      if (data.completed && (now - data.timestamp) < this.PROCESSING_TIMEOUT) {
        return true;
      }
      
      // Clean up expired data
      sessionStorage.removeItem(this.PROCESSING_KEY);
      return false;
    } catch (error) {
      console.error('Error parsing processing data:', error);
      sessionStorage.removeItem(this.PROCESSING_KEY);
      return false;
    }
  }

  /**
   * Show state when payment has already been processed
   */
  private showAlreadyProcessedState(): void {
    this.isProcessing = false;
    this.paymentSaved = true;
    this.bookingCreated = true;
    
    // Try to restore data from session storage
    this.restoreProcessedData();
    
    // Remove URL parameters to prevent further processing
    this.removeUrlParameters();
  }

  /**
   * Restore processed data from session storage
   */
  private restoreProcessedData(): void {
    try {
      const processingData = sessionStorage.getItem(this.PROCESSING_KEY);
      if (processingData) {
        const data = JSON.parse(processingData);
        if (data.paymentStatus) {
          this.paymentStatus = data.paymentStatus;
        }
        if (data.bookingOrderId) {
          this.bookingOrderId = data.bookingOrderId;
        }
        if (data.orderId) {
          this.orderId = data.orderId;
        }
      }
    } catch (error) {
      console.error('Error restoring processed data:', error);
    }
  }

  /**
   * Mark payment processing as completed
   */
  private markPaymentProcessingCompleted(): void {
    const processingData = {
      completed: true,
      timestamp: Date.now(),
      paymentStatus: this.paymentStatus,
      bookingOrderId: this.bookingOrderId,
      orderId: this.orderId
    };
    
    sessionStorage.setItem(this.PROCESSING_KEY, JSON.stringify(processingData));
  }

  /**
   * Remove URL parameters after successful processing
   */
  private removeUrlParameters(): void {
    try {
      // Get current URL without query parameters
      const url = new URL(window.location.href);
      const cleanUrl = url.origin + url.pathname;
      
      // Replace current URL without query parameters
      window.history.replaceState({}, document.title, cleanUrl);
      
      console.log('URL parameters removed after successful processing');
    } catch (error) {
      console.error('Error removing URL parameters:', error);
    }
  }

  /**
   * Handle payment data retrieval errors
   */
  private handlePaymentDataError(): void {
    this.isCreatingBooking = false;
    this.completeProcessing();
  }

  /**
   * Navigate to home page
   */
  goToHome(): void {
    this.router.navigate(['/']);
  }

  /**
   * Navigate to book now page
   */
  bookAnother(): void {
    this.router.navigate(['/book-now']);
  }

  /**
   * Handle failed payment scenario
   */
  private handleFailedPayment(): void {
    this.isPaymentFailed = true;
    this.isProcessing = false;
    
    // Create payment status for failed payment
    this.createFailedPaymentStatus();
    
    // Track failed payment
    this.analyticsService.trackEvent('payment_failed', {
      orderId: this.orderId,
      status: this.skipCashStatus,
      statusId: this.skipCashStatusId,
      transactionId: this.skipCashTransId
    });
  }

  /**
   * Create payment status for failed payment
   */
  private createFailedPaymentStatus(): void {
    this.paymentStatus = {
      orderId: this.orderId || this.skipCashTransId || 'Unknown',
      status: 'failed',
      amount: 0,
      currency: 'QAR',
      transactionId: this.skipCashTransId,
      error: this.skipCashStatus === 'Failed' ? 'Payment was not completed successfully' : 'Payment status indicates incomplete transaction'
    };
  }

  /**
   * Check if payment failed based on URL parameters
   */
  private isPaymentFailedFromUrl(): boolean {
    // Check if status is 'Failed' or statusId is not 2 (completed)
    const status = this.route.snapshot.queryParams['status'];
    const statusId = this.route.snapshot.queryParams['statusId'];
    
    return status === 'Failed' || (statusId && statusId !== '2');
  }

  /**
   * Navigate to book now page without completing payment
   */
  bookWithoutPayment(): void {
    this.router.navigate(['/book-now']);
  }

  /**
   * Navigate to payment page again to try payment
   */
  tryPaymentAgain(): void {
    // This functionality would require a way to re-trigger the payment flow
    // For now, we'll just show a message or redirect to a payment page
    alert('Payment failed. Please try again or contact support.');
    // In a real app, you might redirect to a payment page with the same orderId
    // this.router.navigate(['/book-now'], { queryParams: { order_id: this.orderId } });
  }
} 