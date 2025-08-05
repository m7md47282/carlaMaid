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
   * Track SkipCash payment success with enhanced marketing data
   */
  trackSkipCashPaymentSuccess(orderId: string, value: number, currency: string = 'QAR', serviceType?: string): void {
    // Standard purchase tracking
    this.pushToDataLayer({
      event: 'purchase',
      transaction_id: orderId,
      value: value,
      currency: currency,
      payment_method: 'skipcash',
      service_type: serviceType || 'cleaning_service'
    });

    // Enhanced marketing tracking
    this.pushToDataLayer({
      event: 'payment_success',
      payment_gateway: 'skipcash',
      order_id: orderId,
      amount: value,
      currency: currency,
      service_type: serviceType || 'cleaning_service',
      conversion_type: 'payment_completion',
      marketing_channel: 'website_direct'
    });

    // Revenue tracking for marketing campaigns
    this.pushToDataLayer({
      event: 'revenue_tracking',
      revenue: value,
      currency: currency,
      order_id: orderId,
      payment_method: 'skipcash',
      conversion_source: 'website_booking'
    });
  }

  /**
   * Track payment initiation for funnel analysis
   */
  trackPaymentInitiation(orderId: string, value: number, currency: string = 'QAR'): void {
    this.pushToDataLayer({
      event: 'payment_initiated',
      order_id: orderId,
      amount: value,
      currency: currency,
      payment_gateway: 'skipcash',
      funnel_step: 'payment_processing'
    });
  }

  /**
   * Track payment failure for optimization
   */
  trackPaymentFailure(orderId: string, errorReason?: string): void {
    this.pushToDataLayer({
      event: 'payment_failed',
      order_id: orderId,
      payment_gateway: 'skipcash',
      error_reason: errorReason || 'unknown',
      funnel_step: 'payment_processing'
    });
  }

  /**
   * Track booking completion with payment
   */
  trackBookingWithPayment(orderId: string, bookingOrderId: string, value: number, currency: string = 'QAR'): void {
    this.pushToDataLayer({
      event: 'booking_completed_with_payment',
      payment_order_id: orderId,
      booking_order_id: bookingOrderId,
      amount: value,
      currency: currency,
      payment_method: 'skipcash',
      conversion_type: 'full_booking_conversion'
    });
  }

  /**
   * Track customer lifetime value events
   */
  trackCustomerLifetimeValue(customerId: string, totalSpent: number, currency: string = 'QAR'): void {
    this.pushToDataLayer({
      event: 'customer_lifetime_value',
      customer_id: customerId,
      total_spent: totalSpent,
      currency: currency,
      payment_method: 'skipcash'
    });
  }

  /**
   * Track custom events
   */
  trackEvent(eventName: string, parameters: any = {}): void {
    this.pushToDataLayer({
      event: eventName,
      ...parameters
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