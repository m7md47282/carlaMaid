import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    <div class="payment-success-container">
      <div class="success-card">
        <div class="success-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1>{{ 'payment.success.title' | translate }}</h1>
        <p>{{ 'payment.success.message' | translate }}</p>
        
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
        
        <div class="actions">
          <button class="btn-primary" (click)="goToHome()">
            {{ 'payment.backToHome' | translate }}
          </button>
          <button class="btn-secondary" (click)="bookAnother()">
            {{ 'payment.bookAnother' | translate }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./payment-success.component.sass']
})
export class PaymentSuccessComponent implements OnInit {
  paymentStatus?: PaymentStatus;
  orderId?: string;
  bookingOrderId?: string;
  isCreatingBooking = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
    private bookingService: BookingService,
    private paymentDataService: PaymentDataService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.orderId = this.route.snapshot.queryParams['orderId'];
    
    if (this.orderId) {
      this.checkPaymentStatus();
    }
  }

  checkPaymentStatus() {
    if (this.orderId) {
      this.paymentService.checkPaymentStatus(this.orderId).subscribe({
        next: (status) => {
          this.paymentStatus = status;
          
          if (status.status === 'completed') {
            // Enhanced tracking for SkipCash payment success
            this.analyticsService.trackSkipCashPaymentSuccess(
              status.orderId,
              status.amount || 0,
              status.currency || 'QAR',
              'cleaning_service'
            );

            // Create booking with payment information
            this.createBookingWithPayment(status);
          }
        },
        error: (error) => {
          console.error('Error checking payment status:', error);
        }
      });
    }
  }

  createBookingWithPayment(paymentStatus: PaymentStatus) {
    const paymentOrderId = paymentStatus.orderId;

    if (paymentOrderId) {
      this.isCreatingBooking = true;
      
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
                } else {
                  console.error('Failed to create booking with payment:', response.error);
                }
                this.isCreatingBooking = false;
              },
              error: (error) => {
                console.error('Error creating booking with payment:', error);
                this.isCreatingBooking = false;
              }
            });
          } else {
            console.error('Failed to retrieve payment data:', paymentDataResponse.error);
            this.isCreatingBooking = false;
          }
        },
        error: (error) => {
          console.error('Error retrieving payment data:', error);
          this.isCreatingBooking = false;
        }
      });
    } else {
      console.error('Missing payment order ID');
      this.isCreatingBooking = false;
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  bookAnother() {
    this.router.navigate(['/book-now']);
  }
} 