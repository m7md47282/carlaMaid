import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentService, PaymentStatus } from '../../shared/services/payment.service';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'app-payment-cancel',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="payment-cancel-container">
      <div class="cancel-card">
        <div class="cancel-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1>{{ 'payment.cancel.title' | translate }}</h1>
        <p>{{ 'payment.cancel.message' | translate }}</p>
        
        @if(paymentStatus){
          <div class="payment-details">
            <div class="detail-row">
              <span>{{ 'payment.orderId' | translate }}:</span>
              <span>{{ paymentStatus.orderId }}</span>
            </div>
            <div class="detail-row">
              <span>{{ 'payment.status' | translate }}:</span>
              <span class="status-cancelled">{{ 'payment.status.cancelled' | translate }}</span>
            </div>
          </div>
        }
        
        <div class="actions">
          <button class="btn-primary" (click)="tryAgain()">
            {{ 'payment.tryAgain' | translate }}
          </button>
          <button class="btn-secondary" (click)="goToHome()">
            {{ 'payment.backToHome' | translate }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./payment-cancel.component.sass']
})
export class PaymentCancelComponent implements OnInit {
  paymentStatus?: PaymentStatus;
  orderId?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
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
          
          // Track cancelled payment
          this.analyticsService.trackEvent('payment_cancelled', {
            order_id: status.orderId,
            amount: status.amount,
            currency: status.currency
          });

          // Clear session storage for cancelled payment
          sessionStorage.removeItem('bookingData');
          sessionStorage.removeItem('paymentOrderId');
          sessionStorage.removeItem('paymentAmount');
        },
        error: (error) => {
          console.error('Error checking payment status:', error);
        }
      });
    }
  }

  tryAgain() {
    this.router.navigate(['/book-now']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
} 