import {
  __spreadValues,
  ɵɵdefineInjectable
} from "./chunk-Y2VF4S5M.js";

// src/app/shared/services/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
  constructor() {
  }
  /**
   * Push data to Google Tag Manager dataLayer
   */
  pushToDataLayer(data) {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(data);
    }
  }
  /**
   * Track page views
   */
  trackPageView(pageTitle, pagePath) {
    this.pushToDataLayer({
      event: "page_view",
      page_title: pageTitle,
      page_path: pagePath
    });
  }
  /**
   * Track form submissions (for lead generation)
   */
  trackFormSubmission(formName, formId) {
    this.pushToDataLayer({
      event: "form_submit",
      form_name: formName,
      form_id: formId,
      conversion_label: "lead_generation"
    });
  }
  /**
   * Track phone calls (for call tracking)
   */
  trackPhoneCall(phoneNumber) {
    this.pushToDataLayer({
      event: "phone_call",
      phone_number: phoneNumber,
      conversion_label: "phone_call"
    });
  }
  /**
   * Track booking completions
   */
  trackBookingComplete(serviceType, value) {
    this.pushToDataLayer({
      event: "booking_complete",
      service_type: serviceType,
      value,
      conversion_label: "booking_conversion"
    });
  }
  /**
   * Track service inquiries
   */
  trackServiceInquiry(serviceType) {
    this.pushToDataLayer({
      event: "service_inquiry",
      service_type: serviceType,
      conversion_label: "service_inquiry"
    });
  }
  /**
   * Track button clicks
   */
  trackButtonClick(buttonName, buttonLocation) {
    this.pushToDataLayer({
      event: "button_click",
      button_name: buttonName,
      button_location: buttonLocation
    });
  }
  /**
   * Track scroll depth
   */
  trackScrollDepth(percentage) {
    this.pushToDataLayer({
      event: "scroll_depth",
      scroll_percentage: percentage
    });
  }
  /**
   * Track time on page
   */
  trackTimeOnPage(seconds) {
    this.pushToDataLayer({
      event: "time_on_page",
      time_seconds: seconds
    });
  }
  /**
   * Track custom events
   */
  trackCustomEvent(eventName, parameters) {
    this.pushToDataLayer(__spreadValues({
      event: eventName
    }, parameters));
  }
  /**
   * Track ecommerce events (if you add online booking)
   */
  trackPurchase(orderId, value, currency = "USD") {
    this.pushToDataLayer({
      event: "purchase",
      transaction_id: orderId,
      value,
      currency
    });
  }
  /**
   * Track SkipCash payment success with enhanced marketing data
   */
  trackSkipCashPaymentSuccess(orderId, value, currency = "QAR", serviceType) {
    this.pushToDataLayer({
      event: "purchase",
      transaction_id: orderId,
      value,
      currency,
      payment_method: "skipcash",
      service_type: serviceType || "cleaning_service"
    });
    this.pushToDataLayer({
      event: "payment_success",
      payment_gateway: "skipcash",
      order_id: orderId,
      amount: value,
      currency,
      service_type: serviceType || "cleaning_service",
      conversion_type: "payment_completion",
      marketing_channel: "website_direct"
    });
    this.pushToDataLayer({
      event: "revenue_tracking",
      revenue: value,
      currency,
      order_id: orderId,
      payment_method: "skipcash",
      conversion_source: "website_booking"
    });
  }
  /**
   * Track payment initiation for funnel analysis
   */
  trackPaymentInitiation(orderId, value, currency = "QAR") {
    this.pushToDataLayer({
      event: "payment_initiated",
      order_id: orderId,
      amount: value,
      currency,
      payment_gateway: "skipcash",
      funnel_step: "payment_processing"
    });
  }
  /**
   * Track payment failure for optimization
   */
  trackPaymentFailure(orderId, errorReason) {
    this.pushToDataLayer({
      event: "payment_failed",
      order_id: orderId,
      payment_gateway: "skipcash",
      error_reason: errorReason || "unknown",
      funnel_step: "payment_processing"
    });
  }
  /**
   * Track booking completion with payment
   */
  trackBookingWithPayment(orderId, bookingOrderId, value, currency = "QAR") {
    this.pushToDataLayer({
      event: "booking_completed_with_payment",
      payment_order_id: orderId,
      booking_order_id: bookingOrderId,
      amount: value,
      currency,
      payment_method: "skipcash",
      conversion_type: "full_booking_conversion"
    });
  }
  /**
   * Track customer lifetime value events
   */
  trackCustomerLifetimeValue(customerId, totalSpent, currency = "QAR") {
    this.pushToDataLayer({
      event: "customer_lifetime_value",
      customer_id: customerId,
      total_spent: totalSpent,
      currency,
      payment_method: "skipcash"
    });
  }
  /**
   * Track custom events
   */
  trackEvent(eventName, parameters = {}) {
    this.pushToDataLayer(__spreadValues({
      event: eventName
    }, parameters));
  }
  /**
   * Track user engagement
   */
  trackEngagement(action, category, label) {
    this.pushToDataLayer({
      event: "user_engagement",
      action,
      category,
      label
    });
  }
  static \u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnalyticsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
};

export {
  AnalyticsService
};
//# sourceMappingURL=chunk-W45IR67I.js.map
