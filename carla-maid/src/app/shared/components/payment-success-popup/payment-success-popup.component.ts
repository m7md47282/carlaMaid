import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentStatus } from '../../services/payment.service';

@Component({
  selector: 'app-payment-success-popup',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="popup-overlay" (click)="closePopup()">
      <div class="popup-container" (click)="$event.stopPropagation()">
        <div class="popup-content">
          <div class="success-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <h2 class="popup-title">{{ 'payment.success.title' | translate }}</h2>
          <p class="popup-message">{{ 'payment.success.message' | translate }}</p>
          
          @if(paymentStatus){
            <div class="payment-details">
              <div class="detail-row">
                <span class="detail-label">{{ 'payment.orderId' | translate }}:</span>
                <span class="detail-value">{{ paymentStatus.orderId }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">{{ 'payment.amount' | translate }}:</span>
                <span class="detail-value">{{ paymentStatus.amount }} {{ paymentStatus.currency }}</span>
              </div>
              @if(paymentStatus.transactionId){
                <div class="detail-row">
                  <span class="detail-label">{{ 'payment.transactionId' | translate }}:</span>
                  <span class="detail-value">{{ paymentStatus.transactionId }}</span>
                </div>
              }
              @if(bookingOrderId){
                <div class="detail-row">
                  <span class="detail-label">{{ 'booking.orderId' | translate }}:</span>
                  <span class="detail-value">{{ bookingOrderId }}</span>
                </div>
              }
            </div>
          }
          
          <div class="popup-actions">
            <button class="btn-primary" (click)="goToHome()">
              {{ 'payment.backToHome' | translate }}
            </button>
            <button class="btn-secondary" (click)="onBookAnother()">
              {{ 'payment.bookAnother' | translate }}
            </button>
          </div>
          
          <button class="close-btn" (click)="closePopup()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./payment-success-popup.component.sass']
})
export class PaymentSuccessPopupComponent {
  @Input() paymentStatus?: PaymentStatus;
  @Input() bookingOrderId?: string;
  @Output() close = new EventEmitter<void>();
  @Output() goHome = new EventEmitter<void>();
  @Output() bookAnother = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

  goToHome() {
    this.goHome.emit();
  }

  onBookAnother() {
    this.bookAnother.emit();
  }
} 