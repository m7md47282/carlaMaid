import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quotation-thank-you',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="quotation-thank-you-container">
      <div class="success-card">
        <div class="success-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1>{{ 'quotation.thankYou.title' | translate }}</h1>
        <p>{{ 'quotation.thankYou.message' | translate }}</p>
        
        <div class="actions">
          <button class="btn-primary" (click)="goToHome()">
            {{ 'quotation.thankYou.backToHome' | translate }}
          </button>
          <button class="btn-secondary" (click)="requestAnother()">
            {{ 'quotation.thankYou.requestAnother' | translate }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './quotation-thank-you.component.sass'
})
export class QuotationThankYouComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }

  requestAnother(): void {
    this.router.navigate(['/quotation-request']);
  }
}
