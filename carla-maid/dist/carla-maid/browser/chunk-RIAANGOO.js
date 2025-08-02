import {
  __publicField,
  __spreadValues,
  ɵɵdefineInjectable
} from "./chunk-7A2U3HSL.js";

// src/app/shared/services/analytics.service.ts
var _AnalyticsService = class _AnalyticsService {
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
};
__publicField(_AnalyticsService, "\u0275fac", function AnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnalyticsService)();
});
__publicField(_AnalyticsService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" }));
var AnalyticsService = _AnalyticsService;

export {
  AnalyticsService
};
//# sourceMappingURL=chunk-RIAANGOO.js.map
