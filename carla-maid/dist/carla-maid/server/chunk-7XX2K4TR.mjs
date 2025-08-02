import './polyfills.server.mjs';
import {
  AnalyticsService
} from "./chunk-ZHFBS4H7.mjs";
import {
  ElementRef,
  inject,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-EEE5GEKV.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/app/shared/directives/phone-track.directive.ts
var _PhoneTrackDirective = class _PhoneTrackDirective {
  constructor() {
    __publicField(this, "phoneNumber", "");
    __publicField(this, "analyticsService", inject(AnalyticsService));
    __publicField(this, "element", inject(ElementRef));
  }
  onClick(event) {
    this.analyticsService.trackPhoneCall(this.phoneNumber);
    this.analyticsService.trackButtonClick("phone_call", "contact_info");
    this.analyticsService.trackEngagement("click", "contact", "phone_call");
  }
};
__publicField(_PhoneTrackDirective, "\u0275fac", function PhoneTrackDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PhoneTrackDirective)();
});
__publicField(_PhoneTrackDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PhoneTrackDirective, selectors: [["", "appPhoneTrack", ""]], hostBindings: function PhoneTrackDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function PhoneTrackDirective_click_HostBindingHandler($event) {
      return ctx.onClick($event);
    });
  }
}, inputs: { phoneNumber: [0, "appPhoneTrack", "phoneNumber"] }, standalone: true }));
var PhoneTrackDirective = _PhoneTrackDirective;

export {
  PhoneTrackDirective
};
//# sourceMappingURL=chunk-7XX2K4TR.mjs.map
