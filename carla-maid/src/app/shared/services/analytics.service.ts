import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  /**
   * Push data to Google Tag Manager dataLayer
   */
  pushToDataLayer(data: any): void {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(data);
    }
  }

  /**
   * Track page views
   */
  trackPageView(pageTitle: string, pagePath: string): void {
    this.pushToDataLayer({
      event: 'page_view',
      page_title: pageTitle,
      page_path: pagePath
    });
  }

  /**
   * Track form submissions (for lead generation)
   */
  trackFormSubmission(formName: string, formId?: string): void {
    this.pushToDataLayer({
      event: 'form_submit',
      form_name: formName,
      form_id: formId,
      conversion_label: 'lead_generation'
    });
  }

  /**
   * Track phone calls (for call tracking)
   */
  trackPhoneCall(phoneNumber: string): void {
    this.pushToDataLayer({
      event: 'phone_call',
      phone_number: phoneNumber,
      conversion_label: 'phone_call'
    });
  }

  /**
   * Track booking completions
   */
  trackBookingComplete(serviceType: string, value?: number): void {
    this.pushToDataLayer({
      event: 'booking_complete',
      service_type: serviceType,
      value: value,
      conversion_label: 'booking_conversion'
    });
  }

  /**
   * Track service inquiries
   */
  trackServiceInquiry(serviceType: string): void {
    this.pushToDataLayer({
      event: 'service_inquiry',
      service_type: serviceType,
      conversion_label: 'service_inquiry'
    });
  }

  /**
   * Track button clicks
   */
  trackButtonClick(buttonName: string, buttonLocation: string): void {
    this.pushToDataLayer({
      event: 'button_click',
      button_name: buttonName,
      button_location: buttonLocation
    });
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth(percentage: number): void {
    this.pushToDataLayer({
      event: 'scroll_depth',
      scroll_percentage: percentage
    });
  }

  /**
   * Track time on page
   */
  trackTimeOnPage(seconds: number): void {
    this.pushToDataLayer({
      event: 'time_on_page',
      time_seconds: seconds
    });
  }

  /**
   * Track custom events
   */
  trackCustomEvent(eventName: string, parameters?: any): void {
    this.pushToDataLayer({
      event: eventName,
      ...parameters
    });
  }

  /**
   * Track ecommerce events (if you add online booking)
   */
  trackPurchase(orderId: string, value: number, currency: string = 'USD'): void {
    this.pushToDataLayer({
      event: 'purchase',
      transaction_id: orderId,
      value: value,
      currency: currency
    });
  }

  /**
   * Track user engagement
   */
  trackEngagement(action: string, category: string, label?: string): void {
    this.pushToDataLayer({
      event: 'user_engagement',
      action: action,
      category: category,
      label: label
    });
  }
} 