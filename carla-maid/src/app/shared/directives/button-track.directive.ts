import { Directive, ElementRef, Input, HostListener, inject } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Directive({
  selector: '[appButtonTrack]',
  standalone: true
})
export class ButtonTrackDirective {
  @Input('appButtonTrack') buttonName: string = '';
  @Input('buttonLocation') buttonLocation: string = '';
  @Input('trackEvent') trackEvent: string = 'button_click';
  
  private analyticsService = inject(AnalyticsService);
  private element = inject(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    // Track button click
    this.analyticsService.trackButtonClick(this.buttonName, this.buttonLocation);
    
    // Track custom event if specified
    if (this.trackEvent !== 'button_click') {
      this.analyticsService.trackCustomEvent(this.trackEvent, {
        button_name: this.buttonName,
        button_location: this.buttonLocation
      });
    }
    
    // Track engagement
    this.analyticsService.trackEngagement('click', 'button', this.buttonName);
  }
} 