import { Directive, ElementRef, Input, HostListener, inject } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Directive({
  selector: '[appPhoneTrack]',
  standalone: true
})
export class PhoneTrackDirective {
  @Input('appPhoneTrack') phoneNumber: string = '';
  
  private analyticsService = inject(AnalyticsService);
  private element = inject(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    // Track phone call click
    this.analyticsService.trackPhoneCall(this.phoneNumber);
    
    // Track button click
    this.analyticsService.trackButtonClick('phone_call', 'contact_info');
    
    // Track engagement
    this.analyticsService.trackEngagement('click', 'contact', 'phone_call');
  }
} 