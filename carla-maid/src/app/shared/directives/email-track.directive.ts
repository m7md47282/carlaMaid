import { Directive, ElementRef, Input, HostListener, inject } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Directive({
  selector: '[appEmailTrack]',
  standalone: true
})
export class EmailTrackDirective {
  @Input('appEmailTrack') emailAddress: string = '';
  @Input('emailSubject') emailSubject: string = '';
  
  private analyticsService = inject(AnalyticsService);
  private element = inject(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    // Track email click
    this.analyticsService.trackCustomEvent('email_click', {
      email_address: this.emailAddress,
      subject: this.emailSubject,
      action: 'mailto_opened'
    });
    
    // Track button click
    this.analyticsService.trackButtonClick('email_contact', 'contact_info');
    
    // Track engagement
    this.analyticsService.trackEngagement('click', 'contact', 'email_contact');
    
    // Track form submission (email intent)
    this.analyticsService.trackFormSubmission('email_contact', 'footer_email_link');
  }
} 