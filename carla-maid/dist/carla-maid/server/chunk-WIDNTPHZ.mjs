import './polyfills.server.mjs';
import {
  AnalyticsService
} from "./chunk-EGVPGVWF.mjs";
import {
  ElementRef,
  inject,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-REGLKICM.mjs";

// src/app/shared/directives/phone-track.directive.ts
var PhoneTrackDirective = class _PhoneTrackDirective {
  phoneNumber = "";
  analyticsService = inject(AnalyticsService);
  element = inject(ElementRef);
  onClick(event) {
    this.analyticsService.trackPhoneCall(this.phoneNumber);
    this.analyticsService.trackButtonClick("phone_call", "contact_info");
    this.analyticsService.trackEngagement("click", "contact", "phone_call");
  }
  static \u0275fac = function PhoneTrackDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhoneTrackDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PhoneTrackDirective, selectors: [["", "appPhoneTrack", ""]], hostBindings: function PhoneTrackDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function PhoneTrackDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }, inputs: { phoneNumber: [0, "appPhoneTrack", "phoneNumber"] }, standalone: true });
};

export {
  PhoneTrackDirective
};
//# sourceMappingURL=chunk-WIDNTPHZ.mjs.map
