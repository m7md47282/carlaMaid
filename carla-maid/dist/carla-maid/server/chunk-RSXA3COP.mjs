import './polyfills.server.mjs';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggleIcon
} from "./chunk-IFWTQF5K.mjs";
import {
  BookingService,
  PaymentDataService
} from "./chunk-SVHP6IXP.mjs";
import {
  PaymentService
} from "./chunk-BCMXJ4SR.mjs";
import {
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel,
  MatPrefix,
  MatSelect,
  MatSelectModule
} from "./chunk-HMINUFFI.mjs";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  PatternValidator,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-WIHOLO77.mjs";
import {
  MatOption,
  provideNativeDateAdapter
} from "./chunk-KJD7JTY7.mjs";
import "./chunk-XB3OBPTA.mjs";
import {
  NavigationEnd,
  Router,
  RouterLink
} from "./chunk-VAXAWVT6.mjs";
import {
  AnalyticsService
} from "./chunk-EGVPGVWF.mjs";
import "./chunk-L6APMHKW.mjs";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ULFMFSOZ.mjs";
import "./chunk-RTKK4VRH.mjs";
import {
  CommonModule,
  DatePipe,
  EventEmitter,
  inject,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-REGLKICM.mjs";
import {
  __async
} from "./chunk-LBJNHE26.mjs";

// src/app/shared/components/payment-success-popup/payment-success-popup.component.ts
function PaymentSuccessPopupComponent_Conditional_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "payment.transactionId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentStatus.transactionId);
  }
}
function PaymentSuccessPopupComponent_Conditional_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "booking.orderId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.bookingOrderId);
  }
}
function PaymentSuccessPopupComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15)(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, PaymentSuccessPopupComponent_Conditional_12_Conditional_13_Template, 6, 4, "div", 15)(14, PaymentSuccessPopupComponent_Conditional_12_Conditional_14_Template, 6, 4, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 7, "payment.orderId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentStatus.orderId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 9, "payment.amount"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.paymentStatus.amount, " ", ctx_r0.paymentStatus.currency, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.paymentStatus.transactionId ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bookingOrderId ? 14 : -1);
  }
}
var PaymentSuccessPopupComponent = class _PaymentSuccessPopupComponent {
  paymentStatus;
  bookingOrderId;
  close = new EventEmitter();
  goHome = new EventEmitter();
  bookAnother = new EventEmitter();
  closePopup() {
    this.close.emit();
  }
  goToHome() {
    this.goHome.emit();
  }
  onBookAnother() {
    this.bookAnother.emit();
  }
  static \u0275fac = function PaymentSuccessPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentSuccessPopupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentSuccessPopupComponent, selectors: [["app-payment-success-popup"]], inputs: { paymentStatus: "paymentStatus", bookingOrderId: "bookingOrderId" }, outputs: { close: "close", goHome: "goHome", bookAnother: "bookAnother" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 13, consts: [[1, "popup-overlay", 3, "click"], [1, "popup-container", 3, "click"], [1, "popup-content"], [1, "success-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "#10B981", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "popup-title"], [1, "popup-message"], [1, "payment-details"], [1, "popup-actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "#6B7280", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"]], template: function PaymentSuccessPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function PaymentSuccessPopupComponent_Template_div_click_0_listener() {
        return ctx.closePopup();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function PaymentSuccessPopupComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h2", 6);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, PaymentSuccessPopupComponent_Conditional_12_Template, 15, 11, "div", 8);
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function PaymentSuccessPopupComponent_Template_button_click_14_listener() {
        return ctx.goToHome();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function PaymentSuccessPopupComponent_Template_button_click_17_listener() {
        return ctx.onBookAnother();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275listener("click", function PaymentSuccessPopupComponent_Template_button_click_20_listener() {
        return ctx.closePopup();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 13);
      \u0275\u0275element(22, "path", 14);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "payment.success.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "payment.success.message"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.paymentStatus ? 12 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "payment.backToHome"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 11, "payment.bookAnother"), " ");
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.popup-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  animation: _ngcontent-%COMP%_popupSlideIn 0.3s ease-out;\n}\n.popup-content[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  position: relative;\n}\n.success-icon[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n.popup-title[_ngcontent-%COMP%] {\n  color: #0346FF;\n  margin-bottom: 15px;\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 15px 0;\n}\n.popup-message[_ngcontent-%COMP%] {\n  color: #6B7280;\n  margin-bottom: 30px;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0 0 30px 0;\n}\n.payment-details[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n  text-align: left;\n  border: 1px solid #E5E7EB;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 14px;\n  align-items: center;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.detail-label[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-weight: 500;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #0346FF;\n  font-weight: 600;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 30px;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  min-width: 120px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #0346FF;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0234CC;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(3, 70, 255, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #374151;\n  border: 1px solid #E5E7EB;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #E5E7EB;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #F3F4F6;\n  transform: scale(1.1);\n}\n@keyframes _ngcontent-%COMP%_popupSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@media (max-width: 600px) {\n  .popup-content[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .popup-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .popup-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .popup-message[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=payment-success-popup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentSuccessPopupComponent, { className: "PaymentSuccessPopupComponent" });
})();

// src/app/book-now/book-now.component.ts
var _c0 = ["addressInput"];
var _c1 = ["mapContainer"];
function BookNowComponent_Conditional_220_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "shared.booking_confirmation_message"));
  }
}
function BookNowComponent_Conditional_221_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.paymentError);
  }
}
function BookNowComponent_Conditional_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 126);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "form.processingPayment"), " ");
  }
}
function BookNowComponent_Conditional_233_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "form.submitButton"), " ");
  }
}
function BookNowComponent_Conditional_318_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-payment-success-popup", 127);
    \u0275\u0275listener("close", function BookNowComponent_Conditional_318_Template_app_payment_success_popup_close_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePaymentSuccessPopup());
    })("goHome", function BookNowComponent_Conditional_318_Template_app_payment_success_popup_goHome_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToHome());
    })("bookAnother", function BookNowComponent_Conditional_318_Template_app_payment_success_popup_bookAnother_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookAnother());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("paymentStatus", ctx_r2.paymentStatus)("bookingOrderId", ctx_r2.bookingOrderId);
  }
}
function BookNowComponent_Conditional_319_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 137)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 137)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 138);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 4, "payment.orderId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.paymentStatus.orderId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 6, "payment.status"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "payment.status.cancelled"));
  }
}
function BookNowComponent_Conditional_319_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 128)(2, "div", 129)(3, "div", 130);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 131);
    \u0275\u0275element(5, "path", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, BookNowComponent_Conditional_319_Conditional_12_Template, 14, 10, "div", 133);
    \u0275\u0275elementStart(13, "div", 134)(14, "button", 135);
    \u0275\u0275listener("click", function BookNowComponent_Conditional_319_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tryAgain());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 136);
    \u0275\u0275listener("click", function BookNowComponent_Conditional_319_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.closePaymentCancelPopup();
      return \u0275\u0275resetView(ctx_r2.goToHome());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "payment.cancel.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "payment.cancel.message"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.paymentStatus ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "payment.tryAgain"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 11, "payment.backToHome"), " ");
  }
}
function BookNowComponent_Conditional_320_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 137)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 137)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 141);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 4, "payment.orderId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.paymentStatus.orderId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 6, "payment.status"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "payment.status.failed"));
  }
}
function BookNowComponent_Conditional_320_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 128)(2, "div", 129)(3, "div", 139);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 131);
    \u0275\u0275element(5, "path", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, BookNowComponent_Conditional_320_Conditional_12_Template, 14, 10, "div", 133);
    \u0275\u0275elementStart(13, "div", 134)(14, "button", 135);
    \u0275\u0275listener("click", function BookNowComponent_Conditional_320_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tryAgain());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 136);
    \u0275\u0275listener("click", function BookNowComponent_Conditional_320_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.closePaymentFailedPopup();
      return \u0275\u0275resetView(ctx_r2.goToHome());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "payment.failed.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "payment.failed.message"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.paymentStatus ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "payment.tryAgain"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 11, "payment.backToHome"), " ");
  }
}
var PRICING_CONFIG = {
  CLEANER_PRICE_PER_HOUR: 35,
  MATERIALS_PRICE_PER_HOUR: 5,
  DATE_RANGE_DAYS: 30
};
var FORM_TIMEOUT = 9e3;
var BookNowComponent = class _BookNowComponent {
  fb;
  translate;
  router;
  analyticsService;
  paymentService;
  bookingService;
  paymentDataService;
  // Form and UI state
  bookingForm;
  price = 0;
  sent = false;
  isProcessingPayment = false;
  paymentError = "";
  // Payment success popup state
  showPaymentSuccessPopup = false;
  showPaymentCancelPopup = false;
  showPaymentFailedPopup = false;
  paymentStatus;
  bookingOrderId;
  // Date configuration
  minDate;
  maxDate;
  // ViewChild references
  addressInput;
  mapContainer;
  // Injected services
  datePipe = inject(DatePipe);
  constructor(fb, translate, router, analyticsService, paymentService, bookingService, paymentDataService) {
    this.fb = fb;
    this.translate = translate;
    this.router = router;
    this.analyticsService = analyticsService;
    this.paymentService = paymentService;
    this.bookingService = bookingService;
    this.paymentDataService = paymentDataService;
    this.initializeForm();
    this.initializeDateRange();
    this.setupLanguage();
  }
  ngOnInit() {
    this.setupFormSubscriptions();
    this.setupRouterEvents();
    this.checkPaymentSuccessFromUrl();
    this.checkPaymentCancelFromUrl();
    this.checkPaymentFailedFromUrl();
  }
  // ==================== INITIALIZATION METHODS ====================
  initializeForm() {
    this.bookingForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{8}$")]],
      address: ["", Validators.required],
      arrivalDate: ["", Validators.required],
      arrivalTime: ["", Validators.required],
      cleaners: ["", Validators.required],
      materials: ["", Validators.required],
      hours: ["", Validators.required],
      paymentOption: ["", Validators.required]
    });
  }
  initializeDateRange() {
    const today = /* @__PURE__ */ new Date();
    this.minDate = today;
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + PRICING_CONFIG.DATE_RANGE_DAYS);
  }
  setupLanguage() {
    this.translate.setDefaultLang("en");
  }
  setupFormSubscriptions() {
    this.bookingForm.valueChanges.subscribe(() => this.calculatePrice());
    this.bookingForm.get("hours")?.valueChanges.subscribe(() => {
      this.bookingForm.get("arrivalTime")?.setValue("");
    });
  }
  setupRouterEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0 });
      }
    });
  }
  // ==================== PRICING METHODS ====================
  calculatePrice() {
    const formValue = this.bookingForm.value;
    const cleanerCost = formValue.cleaners * PRICING_CONFIG.CLEANER_PRICE_PER_HOUR * formValue.hours;
    const materialsCost = formValue.materials ? formValue.hours * PRICING_CONFIG.MATERIALS_PRICE_PER_HOUR * formValue.cleaners : 0;
    this.price = cleanerCost + materialsCost;
  }
  // ==================== FORM SUBMISSION METHODS ====================
  onSubmit() {
    return __async(this, null, function* () {
      if (this.bookingForm.invalid) {
        return;
      }
      const paymentOption = this.bookingForm.value.paymentOption;
      if (paymentOption === "pay_now") {
        yield this.processPayment();
      } else {
        yield this.submitBookingWithoutPayment();
      }
    });
  }
  // ==================== PAYMENT PROCESSING METHODS ====================
  processPayment() {
    return __async(this, null, function* () {
      this.setPaymentProcessingState(true);
      try {
        if (!this.validatePaymentAmount()) {
          return;
        }
        yield this.testPaymentServiceConnection();
      } catch (error) {
        this.handlePaymentError("An unexpected error occurred. Please try again.", error);
      }
    });
  }
  validatePaymentAmount() {
    if (!this.paymentService.validateAmount(this.price)) {
      this.setPaymentError("Invalid payment amount");
      return false;
    }
    return true;
  }
  testPaymentServiceConnection() {
    return __async(this, null, function* () {
      this.paymentService.testSkipCashConnection().subscribe({
        next: (healthCheck) => {
          if (!healthCheck.success) {
            this.setPaymentError("Payment service is temporarily unavailable. Please try again later.");
            return;
          }
          this.createPaymentOrder();
        },
        error: (error) => {
          this.handlePaymentError("Payment service is unavailable. Please try again later.", error);
        }
      });
    });
  }
  createPaymentOrder() {
    const paymentOrderId = this.paymentService.generateOrderId();
    const paymentRequest = this.buildPaymentRequest(paymentOrderId);
    this.paymentService.logPaymentAttempt(paymentRequest);
    this.paymentService.createPayment(paymentRequest).subscribe({
      next: (response) => {
        if (response.success) {
          this.handleSuccessfulPaymentCreation(paymentOrderId, response);
        } else {
          this.handlePaymentCreationFailure(paymentOrderId, response);
        }
      },
      error: (error) => {
        this.handlePaymentError("Payment processing failed. Please try again.", error, paymentOrderId);
      }
    });
  }
  buildPaymentRequest(paymentOrderId) {
    const formValue = this.bookingForm.value;
    return {
      amount: this.price,
      currency: "QAR",
      orderId: paymentOrderId,
      customerName: formValue.fullName,
      customerEmail: formValue.email,
      customerPhone: formValue.phone,
      description: `Cleaning Service - ${formValue.cleaners} cleaner(s), ${formValue.hours} hour(s)`,
      returnUrl: this.paymentService.getPaymentSuccessUrl(paymentOrderId),
      cancelUrl: this.paymentService.getPaymentCancelUrl(paymentOrderId)
    };
  }
  handleSuccessfulPaymentCreation(paymentOrderId, response) {
    this.trackPaymentInitiation(paymentOrderId);
    this.storePaymentData(paymentOrderId);
    sessionStorage.setItem("paymentOrderId", paymentOrderId);
    this.paymentService.logPaymentResult(paymentOrderId, "initiated");
    this.paymentService.redirectToPayment(response.data.payUrl);
  }
  handlePaymentCreationFailure(paymentOrderId, response) {
    const errorMessage = response.error || "Payment creation failed";
    this.setPaymentError(errorMessage);
    this.paymentService.logPaymentResult(paymentOrderId, "failed", response.error);
  }
  trackPaymentInitiation(paymentOrderId) {
    this.analyticsService.trackPaymentInitiation(paymentOrderId, this.price, "QAR");
  }
  storePaymentData(paymentOrderId) {
    const bookingData = this.buildBookingData();
    this.paymentDataService.storePaymentData(paymentOrderId, bookingData, this.price).subscribe({
      next: (response) => {
        if (response.success) {
          console.log("Payment data stored in backend successfully");
        } else {
          console.error("Failed to store payment data in backend:", response.error);
        }
      },
      error: (error) => {
        console.error("Error storing payment data in backend:", error);
      }
    });
    this.paymentDataService.storePaymentDataInSessionStorage(paymentOrderId, bookingData, this.price);
  }
  // ==================== BOOKING METHODS ====================
  submitBookingWithoutPayment() {
    return __async(this, null, function* () {
      this.analyticsService.trackFormSubmission("booking_form", "book-now-form");
      const bookingRequest = this.buildBookingRequest("pay_later");
      this.bookingService.createBooking(bookingRequest).subscribe({
        next: (bookingResponse) => {
          if (bookingResponse.success) {
            this.handleSuccessfulBooking();
          } else {
            this.setPaymentError(bookingResponse.error || "Failed to create booking");
          }
        },
        error: (error) => {
          this.handleBookingError(error);
        }
      });
    });
  }
  buildBookingRequest(paymentMethod) {
    const formValue = this.bookingForm.value;
    return {
      customerName: formValue.fullName,
      customerEmail: formValue.email,
      customerPhone: formValue.phone,
      address: formValue.address,
      serviceType: "cleaning",
      cleaners: formValue.cleaners,
      hours: formValue.hours,
      materials: formValue.materials,
      total: this.price,
      paymentMethod,
      scheduledDate: this.formatDate(formValue.arrivalDate),
      scheduledTime: formValue.arrivalTime
    };
  }
  buildBookingData() {
    const formValue = this.bookingForm.value;
    return {
      customerName: formValue.fullName,
      customerEmail: formValue.email,
      customerPhone: formValue.phone,
      address: formValue.address,
      cleaners: formValue.cleaners,
      hours: formValue.hours,
      materials: formValue.materials,
      scheduledDate: this.formatDate(formValue.arrivalDate),
      scheduledTime: formValue.arrivalTime
    };
  }
  handleSuccessfulBooking() {
    this.sent = true;
    this.resetForm();
    this.trackBookingCompletion();
    this.scheduleFormReset();
  }
  trackBookingCompletion() {
    this.analyticsService.trackBookingComplete("cleaning_service", this.price);
    this.analyticsService.trackPurchase(`booking_${Date.now()}`, this.price, "QAR");
  }
  // ==================== GOOGLE FORM SUBMISSION ====================
  submitGoogleForm({ formUrl, formData }) {
    this.sent = false;
    fetch(formUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    }).then(() => {
      this.handleSuccessfulGoogleFormSubmission();
    }).catch((error) => {
      console.error("Google form submission error:", error);
    });
  }
  handleSuccessfulGoogleFormSubmission() {
    this.sent = true;
    this.resetForm();
    this.trackBookingCompletion();
    this.scheduleFormReset();
  }
  // ==================== UTILITY METHODS ====================
  formatDate(date) {
    return this.datePipe.transform(date, "yyyy-MM-dd") || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  setPaymentProcessingState(isProcessing) {
    this.isProcessingPayment = isProcessing;
    if (!isProcessing) {
      this.paymentError = "";
    }
  }
  setPaymentError(message) {
    this.paymentError = message;
    this.isProcessingPayment = false;
  }
  handlePaymentError(message, error, paymentOrderId) {
    console.error("Payment error:", error);
    this.setPaymentError(message);
    if (paymentOrderId) {
      this.paymentService.logPaymentResult(paymentOrderId, "error", "Payment processing failed");
      this.analyticsService.trackPaymentFailure(paymentOrderId, "payment_processing_error");
    }
  }
  handleBookingError(error) {
    console.error("Booking creation error:", error);
    this.setPaymentError("Failed to create booking. Please try again.");
  }
  scheduleFormReset() {
    setTimeout(() => {
      this.sent = false;
    }, FORM_TIMEOUT);
  }
  // ==================== PUBLIC METHODS ====================
  switchLanguage(lang) {
    this.translate.use(lang);
  }
  resetForm() {
    this.bookingForm.reset();
    this.paymentError = "";
    this.isProcessingPayment = false;
  }
  openDatePicker(picker) {
    picker.open();
  }
  // ==================== PAYMENT SUCCESS POPUP METHODS ====================
  checkPaymentSuccessFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentSuccess = urlParams.get("payment_success");
    const orderId = urlParams.get("order_id");
    if (paymentSuccess === "true" && orderId) {
      const mockPaymentStatus = {
        orderId,
        status: "completed",
        amount: 280,
        currency: "QAR",
        transactionId: `TXN_${orderId}`
      };
      this.showPaymentSuccess(mockPaymentStatus, orderId);
      this.paymentService.checkPaymentStatus(orderId).subscribe({
        next: (status) => {
          console.log("Payment status check result:", status);
          if (status.status === "completed") {
            this.analyticsService.trackSkipCashPaymentSuccess(status.orderId, status.amount || 0, status.currency || "QAR", "cleaning_service");
            this.paymentStatus = status;
            this.createBookingWithPayment(status);
          } else {
            console.error("Payment not completed:", status);
          }
        },
        error: (error) => {
          console.error("Error checking payment status:", error);
        }
      });
    }
  }
  createBookingWithPayment(paymentStatus) {
    const paymentOrderId = paymentStatus.orderId;
    if (paymentOrderId) {
      this.paymentDataService.getPaymentDataFromMultipleSources(paymentOrderId).subscribe({
        next: (paymentDataResponse) => {
          if (paymentDataResponse.success && paymentDataResponse.data) {
            const bookingInfo = paymentDataResponse.data.bookingData;
            const paymentAmount = paymentDataResponse.data.paymentAmount;
            sessionStorage.setItem("paymentAmount", paymentAmount.toString());
            this.bookingService.createBookingWithPayment(bookingInfo, paymentOrderId, paymentStatus.status).subscribe({
              next: (response) => {
                if (response.success && response.orderId) {
                  this.bookingOrderId = response.orderId;
                  this.analyticsService.trackBookingWithPayment(paymentOrderId, response.orderId, paymentAmount, "QAR");
                  this.paymentDataService.cleanupPaymentData(paymentOrderId).subscribe({
                    next: (cleanupResponse) => {
                      if (cleanupResponse.success) {
                        console.log("Payment data cleaned up successfully");
                      } else {
                        console.error("Failed to clean up payment data:", cleanupResponse.error);
                      }
                    },
                    error: (cleanupError) => {
                      console.error("Error cleaning up payment data:", cleanupError);
                    }
                  });
                  this.paymentDataService.clearPaymentDataFromSessionStorage();
                  console.log("Booking created successfully with payment:", response.orderId);
                  this.showPaymentSuccess(paymentStatus, response.orderId);
                } else {
                  console.error("Failed to create booking with payment:", response.error);
                }
              },
              error: (error) => {
                console.error("Error creating booking with payment:", error);
              }
            });
          } else {
            console.error("Failed to retrieve payment data:", paymentDataResponse.error);
            this.setPaymentError("Failed to retrieve booking data. Please contact support.");
          }
        },
        error: (error) => {
          console.error("Error retrieving payment data:", error);
          this.setPaymentError("Failed to retrieve booking data. Please contact support.");
        }
      });
    } else {
      console.error("Missing payment order ID");
      this.setPaymentError("Missing payment information. Please contact support.");
    }
  }
  showPaymentSuccess(paymentStatus, bookingOrderId) {
    this.paymentStatus = paymentStatus;
    this.bookingOrderId = bookingOrderId;
    this.showPaymentSuccessPopup = true;
  }
  closePaymentSuccessPopup() {
    this.showPaymentSuccessPopup = false;
    this.paymentStatus = void 0;
    this.bookingOrderId = void 0;
  }
  // ==================== PAYMENT CANCEL POPUP METHODS ====================
  checkPaymentCancelFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentCancel = urlParams.get("payment_cancel");
    const orderId = urlParams.get("order_id");
    if (paymentCancel === "true" && orderId) {
      const mockPaymentStatus = {
        orderId,
        status: "cancelled",
        amount: 280,
        currency: "QAR"
      };
      this.showPaymentCancel(mockPaymentStatus, orderId);
      this.paymentService.checkPaymentStatus(orderId).subscribe({
        next: (status) => {
          console.log("Payment cancel status check result:", status);
          if (status.status === "cancelled") {
            this.analyticsService.trackEvent("payment_cancelled", {
              order_id: status.orderId,
              amount: status.amount,
              currency: status.currency
            });
            this.paymentStatus = status;
          } else {
            console.error("Payment not cancelled:", status);
          }
        },
        error: (error) => {
          console.error("Error checking payment cancel status:", error);
        }
      });
    }
  }
  showPaymentCancel(paymentStatus, orderId) {
    this.paymentStatus = paymentStatus;
    this.showPaymentCancelPopup = true;
    sessionStorage.removeItem("bookingData");
    sessionStorage.removeItem("paymentOrderId");
    sessionStorage.removeItem("paymentAmount");
  }
  closePaymentCancelPopup() {
    this.showPaymentCancelPopup = false;
    this.paymentStatus = void 0;
  }
  // ==================== PAYMENT FAILED POPUP METHODS ====================
  checkPaymentFailedFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentFailed = urlParams.get("payment_failed");
    const orderId = urlParams.get("order_id");
    if (paymentFailed === "true" && orderId) {
      const mockPaymentStatus = {
        orderId,
        status: "failed",
        amount: 280,
        currency: "QAR"
      };
      this.showPaymentFailed(mockPaymentStatus, orderId);
      this.paymentService.checkPaymentStatus(orderId).subscribe({
        next: (status) => {
          console.log("Payment failed status check result:", status);
          if (status.status === "failed") {
            this.analyticsService.trackEvent("payment_failed", {
              order_id: status.orderId,
              amount: status.amount,
              currency: status.currency
            });
            this.paymentStatus = status;
          } else {
            console.error("Payment not failed:", status);
          }
        },
        error: (error) => {
          console.error("Error checking payment failed status:", error);
        }
      });
    }
  }
  showPaymentFailed(paymentStatus, orderId) {
    this.paymentStatus = paymentStatus;
    this.showPaymentFailedPopup = true;
    sessionStorage.removeItem("bookingData");
    sessionStorage.removeItem("paymentOrderId");
    sessionStorage.removeItem("paymentAmount");
  }
  closePaymentFailedPopup() {
    this.showPaymentFailedPopup = false;
    this.paymentStatus = void 0;
  }
  tryAgain() {
    this.closePaymentCancelPopup();
    this.closePaymentFailedPopup();
    this.router.navigate(["/book-now"]);
  }
  goToHome() {
    this.closePaymentSuccessPopup();
    this.router.navigate(["/"]);
  }
  bookAnother() {
    this.closePaymentSuccessPopup();
    this.resetForm();
  }
  static \u0275fac = function BookNowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookNowComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AnalyticsService), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(BookingService), \u0275\u0275directiveInject(PaymentDataService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookNowComponent, selectors: [["app-book-now"]], viewQuery: function BookNowComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapContainer = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter(), DatePipe]), \u0275\u0275StandaloneFeature], decls: 321, vars: 202, consts: [["picker", ""], [1, "hero"], [1, "hero-img", "flex"], [1, "book-now-form"], [1, "form-container"], [1, "form-desc"], [3, "ngSubmit", "formGroup"], [1, "flex", "flex-wrap", "inputs-holder"], [1, "form-row"], ["appearance", "outline"], ["matPrefix", ""], ["width", "16", "height", "16", "viewBox", "0 0 21 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M17.9246 13.5754C16.781 12.4318 15.4198 11.5852 13.9346 11.0727C15.5253 9.97709 16.5703 8.14357 16.5703 6.07031C16.5703 2.72315 13.8472 0 10.5 0C7.15284 0 4.42969 2.72315 4.42969 6.07031C4.42969 8.14357 5.47472 9.97709 7.06543 11.0727C5.58026 11.5852 4.21903 12.4318 3.07539 13.5754C1.09221 15.5586 0 18.1954 0 21H1.64062C1.64062 16.1149 5.61492 12.1406 10.5 12.1406C15.3851 12.1406 19.3594 16.1149 19.3594 21H21C21 18.1954 19.9078 15.5586 17.9246 13.5754ZM10.5 10.5C8.05748 10.5 6.07031 8.51287 6.07031 6.07031C6.07031 3.62775 8.05748 1.64062 10.5 1.64062C12.9425 1.64062 14.9297 3.62775 14.9297 6.07031C14.9297 8.51287 12.9425 10.5 10.5 10.5Z", "fill", "#00A9FF"], ["matInput", "", "formControlName", "fullName", "required", "", 3, "placeholder"], ["clip-path", "url(#clip0_606_5476)"], ["d", "M20.7376 8.42778L17.6777 5.87784V2.74806C17.6777 2.40828 17.4023 2.13282 17.0625 2.13282H13.1904L10.9029 0.150333C10.6717 -0.0501108 10.3283 -0.0501108 10.0971 0.150333L7.80958 2.13282H3.9375C3.59773 2.13282 3.32227 2.40828 3.32227 2.74806V5.87784L0.262377 8.42778C0.122145 8.54463 0.0410156 8.7178 0.0410156 8.9004V20.3848C0.0410156 20.7245 0.316477 21 0.65625 21H20.3438C20.6835 21 20.959 20.7245 20.959 20.3848V8.9004C20.959 8.7178 20.8779 8.54463 20.7376 8.42778ZM7.03693 14.6426L1.27148 19.1269V10.1583L7.03693 14.6426ZM8.25013 15.2578H12.7498L18.5506 19.7695H2.44937L8.25013 15.2578ZM13.9631 14.6426L19.7285 10.1583V19.1269L13.9631 14.6426ZM19.3629 8.88387L17.6777 10.1946V7.47954L19.3629 8.88387ZM10.5 1.4294L11.3117 2.13282H9.68834L10.5 1.4294ZM16.4473 3.36329V11.1516L12.7499 14.0274H8.25013L4.55273 11.1516V3.36329H16.4473ZM3.32227 10.1946L1.6371 8.88387L3.32227 7.47958V10.1946Z", "fill", "#00A9FF"], ["d", "M7.75138 12.2531C8.50693 12.8417 9.44807 13.1804 10.4015 13.2068C10.4073 13.2069 10.413 13.207 10.4188 13.207C10.7507 13.207 11.0243 12.9427 11.0335 12.6088C11.0429 12.2692 10.7751 11.9862 10.4355 11.9768C8.98927 11.9368 7.7216 10.9294 7.35279 9.52699C6.90863 7.83821 7.86511 6.10013 9.53031 5.57004C10.3751 5.30115 11.272 5.38031 12.0556 5.793C12.8364 6.20419 13.4076 6.89485 13.6649 7.73842C13.8252 8.34692 13.7707 8.91585 13.4833 9.63842C13.4125 9.81651 13.1942 10.2307 12.6977 10.2307C12.6428 10.2307 12.5939 10.1898 12.5697 10.1654C12.4996 10.095 12.4581 9.9903 12.4587 9.88538L12.4756 6.46734C12.4773 6.12757 12.2032 5.85075 11.8634 5.84907C11.8624 5.84907 11.8613 5.84907 11.8603 5.84907C11.5601 5.84907 11.3101 6.06453 11.2563 6.34971C10.9787 6.20374 10.6698 6.12626 10.3448 6.12626C9.7538 6.12626 9.17499 6.39187 8.75675 6.85494C8.33265 7.32453 8.09911 7.96343 8.09911 8.65389C8.09911 9.34127 8.31862 9.98706 8.71717 10.4724C9.13057 10.9757 9.70873 11.2644 10.3034 11.2644C10.7586 11.2644 11.1767 11.1021 11.5215 10.8216C11.574 10.8969 11.6325 10.9681 11.6974 11.0334C11.972 11.3093 12.3272 11.4612 12.6977 11.4612C13.7188 11.4612 14.3637 10.7546 14.6267 10.0932C15.0158 9.11482 15.0851 8.28774 14.8512 7.41165C14.8495 7.40525 14.8477 7.39885 14.8458 7.39253C14.4939 6.22658 13.7066 5.2719 12.6289 4.70433C11.5514 4.13679 10.3183 4.0279 9.15707 4.39761C8.05633 4.74801 7.1407 5.50319 6.57882 6.52407C6.01675 7.54527 5.86897 8.72291 6.16276 9.84002C6.41718 10.8072 6.9665 11.6416 7.75138 12.2531ZM10.3034 10.0339C9.83313 10.0339 9.32962 9.47937 9.32962 8.65389C9.32962 7.84194 9.8458 7.35673 10.3448 7.35673C10.8529 7.35673 11.2126 7.85252 11.2347 8.57124L11.2339 8.72591C11.2047 9.45447 10.7986 10.0339 10.3034 10.0339Z", "fill", "#00A9FF"], ["id", "clip0_606_5476"], ["width", "21", "height", "21", "fill", "white"], ["matInput", "", "formControlName", "email", "required", "", 3, "placeholder"], ["width", "23", "height", "21", "viewBox", "0 0 23 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.5611 20.6282H2.55176C2.37207 20.6282 2.19238 20.4844 2.19238 20.2688V11.1047C2.19238 10.925 2.33613 10.7454 2.55176 10.7454C2.76738 10.7454 2.91113 10.8891 2.91113 11.1047V19.9094H15.5611C15.7408 19.9094 15.9205 20.0532 15.9205 20.2688C15.9205 20.4844 15.7408 20.6282 15.5611 20.6282Z", "fill", "#00A9FF"], ["d", "M1.61719 11.8234C1.18594 11.8234 0.790625 11.6797 0.467187 11.3563C0.179687 11.0688 0 10.6375 0 10.2063C0 9.81094 0.179688 9.41563 0.43125 9.09219L8.66094 0.8625C9.81094 -0.2875 11.6437 -0.2875 12.7937 0.8625L16.3156 4.38438C16.4594 4.52813 16.4594 4.74375 16.3156 4.8875C16.1719 5.03125 15.9563 5.03125 15.8125 4.8875L12.2906 1.36563C11.4281 0.503125 10.0266 0.503125 9.16406 1.36563L0.970313 9.55938C0.826563 9.73906 0.71875 9.99063 0.71875 10.2063C0.71875 10.3859 0.754687 10.6375 0.970313 10.8531C1.32969 11.2125 1.94063 11.2125 2.3 10.8531L10.4938 2.65938C10.6375 2.51563 10.8531 2.51563 10.9969 2.65938L13.9797 5.64219C14.1234 5.78594 14.1234 6.00156 13.9797 6.14531C13.8359 6.28906 13.6203 6.28906 13.4766 6.14531L10.7453 3.41406L2.80313 11.3563C2.47969 11.6797 2.04844 11.8234 1.61719 11.8234Z", "fill", "#00A9FF"], ["d", "M11.8233 20.6281H6.72021C6.54053 20.6281 6.36084 20.4844 6.36084 20.2688V13.7281C6.36084 13.1531 6.82803 12.65 7.43896 12.65H11.1405C11.7155 12.65 12.1827 13.1531 12.1827 13.7281V20.2688C12.1827 20.4485 12.003 20.6281 11.8233 20.6281ZM7.07959 19.9094H11.464V13.7281C11.464 13.5125 11.2843 13.3688 11.1405 13.3688H7.43896C7.22334 13.3688 7.07959 13.5485 7.07959 13.7281V19.9094Z", "fill", "#00A9FF"], ["d", "M17.7889 20.5922C17.3217 20.5922 16.8904 20.3406 16.6389 19.9453C15.3811 17.861 12.542 12.8297 12.542 10.6735C12.542 7.79846 14.8779 5.46252 17.7529 5.46252C20.6279 5.46252 22.9998 7.79846 22.9998 10.6735C22.9998 12.1828 21.6342 15.2735 18.9748 19.9453C18.6873 20.3406 18.2561 20.5922 17.7889 20.5922ZM17.7529 6.18127C15.2732 6.18127 13.2607 8.19377 13.2607 10.6735C13.2607 12.686 16.3154 18.0047 17.2498 19.586C17.3576 19.7656 17.5732 19.9094 17.8248 19.9094C18.0764 19.9094 18.2561 19.8016 18.3998 19.586C21.5982 13.9438 22.2811 11.6078 22.2811 10.6735C22.2811 8.19377 20.2686 6.18127 17.7529 6.18127Z", "fill", "#00A9FF"], ["d", "M17.789 14.0157C15.9562 14.0157 14.4468 12.5063 14.4468 10.6735C14.4468 8.84067 15.9562 7.3313 17.789 7.3313C19.6218 7.3313 21.1312 8.84067 21.1312 10.6735C21.1312 12.5063 19.6218 14.0157 17.789 14.0157ZM17.789 8.05005C16.3515 8.05005 15.1655 9.23599 15.1655 10.6735C15.1655 12.111 16.3515 13.2969 17.789 13.2969C19.2265 13.2969 20.4124 12.111 20.4124 10.6735C20.4124 9.23599 19.2265 8.05005 17.789 8.05005Z", "fill", "#00A9FF"], ["d", "M7.79834 17.2859C7.61865 17.2859 7.43896 17.1422 7.43896 16.9265V16.4594C7.43896 16.2797 7.58271 16.1 7.79834 16.1C8.01396 16.1 8.15771 16.2437 8.15771 16.4594V16.9265C8.15771 17.1062 7.97803 17.2859 7.79834 17.2859Z", "fill", "#00A9FF"], ["matInput", "", "type", "text", "formControlName", "address", "required", "", 3, "placeholder"], ["width", "16", "height", "14", "viewBox", "0 0 22 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1.68598 0.0791016H19.4885C20.3992 0.0791016 21.1368 0.813281 21.1368 1.71973V12.2197C21.1368 13.1262 20.3992 13.8604 19.4885 13.8604H1.68598C0.775247 13.8604 0.0375977 13.1262 0.0375977 12.2197V1.71973C0.0375977 0.813281 0.775247 0.0791016 1.68598 0.0791016Z", "fill", "#8A1538"], ["d", "M6.73413 12.3592L8.51026 13.04L6.73413 13.8604H1.68598C0.775247 13.8604 0.0375977 13.1262 0.0375977 12.2197V1.71973C0.0375977 0.813281 0.775247 0.0791016 1.68598 0.0791016H6.73413L8.45257 0.833789L6.73413 1.58027L8.45257 2.41699L6.73413 3.12246L8.45257 3.95918L6.73413 4.57441L8.45257 5.45625L6.73413 6.16172L8.45257 6.97383L6.73413 7.74492L8.45257 8.49141L6.73413 9.23789L8.45257 10.0295L6.73413 10.8662L8.51026 11.6373L6.73413 12.3592Z", "fill", "#F2F2F2"], ["d", "M20.7618 0.67793C20.4486 0.296484 19.9789 0.0791016 19.4885 0.0791016H1.68598C0.775247 0.0791016 0.0375977 0.813281 0.0375977 1.71973V12.2197C0.0375977 12.6053 0.173589 12.9744 0.420846 13.2697C0.453813 13.3107 0.490902 13.3477 0.52799 13.3887C0.837061 13.6922 1.25328 13.8604 1.68598 13.8604H19.4885C20.3992 13.8604 21.1368 13.1262 21.1368 12.2197V1.71973C21.1368 1.33828 21.005 0.969141 20.7618 0.67793ZM1.68598 12.876C1.58295 12.876 1.47993 12.8514 1.38927 12.8062C1.32745 12.7775 1.27388 12.7365 1.22855 12.6873C1.1008 12.5643 1.03075 12.3961 1.03075 12.2238V1.71563C1.03075 1.35469 1.32333 1.06348 1.68598 1.06348H19.4967C19.7934 1.06758 20.053 1.26445 20.1313 1.55156C19.678 9.22148 14.6093 11.9572 11.8812 12.876H1.68598Z", "fill", "url(#paint0_linear_606_5429)"], ["id", "paint0_linear_606_5429", "x1", "2.33387", "y1", "-1.24529", "x2", "18.7632", "y2", "15.2617", "gradientUnits", "userSpaceOnUse"], ["stop-opacity", "0.05"], ["offset", "1", "stop-opacity", "0.3"], ["matInput", "", "type", "tel", "pattern", "[3-7][0-9]{7}", "formControlName", "phone", "required", "", 3, "placeholder"], ["width", "21", "height", "21", "viewBox", "0 0 21 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_606_5465)"], ["d", "M10.5 0.875C8.59636 0.875 6.73546 1.4395 5.15264 2.4971C3.56982 3.55471 2.33616 5.05793 1.60766 6.81667C0.87917 8.57541 0.688563 10.5107 1.05995 12.3777C1.43133 14.2448 2.34802 15.9598 3.6941 17.3059C5.04018 18.652 6.75519 19.5687 8.62226 19.9401C10.4893 20.3114 12.4246 20.1208 14.1833 19.3923C15.9421 18.6638 17.4453 17.4302 18.5029 15.8474C19.5605 14.2645 20.125 12.4036 20.125 10.5C20.122 7.94822 19.107 5.50181 17.3026 3.69742C15.4982 1.89304 13.0518 0.87801 10.5 0.875ZM10.5 18.375C8.94248 18.375 7.41993 17.9131 6.12489 17.0478C4.82985 16.1825 3.82049 14.9526 3.22445 13.5136C2.62841 12.0747 2.47246 10.4913 2.77632 8.96366C3.08018 7.43606 3.8302 6.03287 4.93154 4.93153C6.03288 3.8302 7.43607 3.08017 8.96367 2.77632C10.4913 2.47246 12.0747 2.62841 13.5136 3.22445C14.9526 3.82049 16.1825 4.82985 17.0478 6.12488C17.9131 7.41992 18.375 8.94247 18.375 10.5C18.3725 12.5878 17.542 14.5894 16.0657 16.0657C14.5894 17.542 12.5878 18.3725 10.5 18.375Z", "fill", "#00A9FF"], ["d", "M11.375 10.1378V5.25C11.375 5.01794 11.2828 4.79538 11.1187 4.63128C10.9546 4.46719 10.7321 4.375 10.5 4.375C10.2679 4.375 10.0454 4.46719 9.88128 4.63128C9.71719 4.79538 9.625 5.01794 9.625 5.25V10.5C9.62505 10.732 9.71727 10.9546 9.88138 11.1186L12.5064 13.7436C12.6714 13.903 12.8924 13.9912 13.1219 13.9892C13.3513 13.9872 13.5707 13.8952 13.733 13.733C13.8952 13.5707 13.9872 13.3513 13.9892 13.1219C13.9912 12.8924 13.903 12.6714 13.7436 12.5064L11.375 10.1378Z", "fill", "#00A9FF"], ["id", "clip0_606_5465"], ["formControlName", "hours", 3, "placeholder"], [3, "value"], ["d", "M17.0625 2.625H15.75C15.75 1.90137 15.1611 1.3125 14.4375 1.3125C13.7139 1.3125 13.125 1.90137 13.125 2.625H7.875C7.875 1.90137 7.28613 1.3125 6.5625 1.3125C5.83888 1.3125 5.25 1.90137 5.25 2.625H3.9375C2.73131 2.625 1.75 3.60631 1.75 4.8125V17.5C1.75 18.7062 2.73131 19.6875 3.9375 19.6875H17.0625C18.2687 19.6875 19.25 18.7062 19.25 17.5V4.8125C19.25 3.60631 18.2687 2.625 17.0625 2.625ZM14 2.625C14 2.38394 14.196 2.1875 14.4375 2.1875C14.679 2.1875 14.875 2.38394 14.875 2.625V3.5C14.875 3.74106 14.679 3.9375 14.4375 3.9375C14.196 3.9375 14 3.74106 14 3.5V2.625ZM6.125 2.625C6.125 2.38394 6.321 2.1875 6.5625 2.1875C6.804 2.1875 7 2.38394 7 2.625V3.5C7 3.74106 6.804 3.9375 6.5625 3.9375C6.321 3.9375 6.125 3.74106 6.125 3.5V2.625ZM2.625 4.8125C2.625 4.08888 3.21388 3.5 3.9375 3.5H5.25C5.25 4.22362 5.83888 4.8125 6.5625 4.8125C7.28613 4.8125 7.875 4.22362 7.875 3.5H13.125C13.125 4.22362 13.7139 4.8125 14.4375 4.8125C15.1611 4.8125 15.75 4.22362 15.75 3.5H17.0625C17.7861 3.5 18.375 4.08888 18.375 4.8125V6.5625H2.625V4.8125ZM18.375 17.5C18.375 18.2236 17.7861 18.8125 17.0625 18.8125H3.9375C3.21388 18.8125 2.625 18.2236 2.625 17.5V7.4375H18.375V17.5Z", "fill", "#00A9FF"], ["d", "M5.25 12.25H6.5625C7.04506 12.25 7.4375 11.8576 7.4375 11.375V10.0625C7.4375 9.57994 7.04506 9.1875 6.5625 9.1875H5.25C4.76744 9.1875 4.375 9.57994 4.375 10.0625V11.375C4.375 11.8576 4.76744 12.25 5.25 12.25ZM5.25 10.0625H6.5625L6.56338 11.375H5.25V10.0625Z", "fill", "#00A9FF"], ["d", "M9.84375 12.25H11.1563C11.6388 12.25 12.0313 11.8576 12.0313 11.375V10.0625C12.0313 9.57994 11.6388 9.1875 11.1563 9.1875H9.84375C9.36119 9.1875 8.96875 9.57994 8.96875 10.0625V11.375C8.96875 11.8576 9.36119 12.25 9.84375 12.25ZM9.84375 10.0625H11.1563L11.1571 11.375H9.84375V10.0625Z", "fill", "#00A9FF"], ["d", "M14.4375 12.25H15.75C16.2326 12.25 16.625 11.8576 16.625 11.375V10.0625C16.625 9.57994 16.2326 9.1875 15.75 9.1875H14.4375C13.9549 9.1875 13.5625 9.57994 13.5625 10.0625V11.375C13.5625 11.8576 13.9549 12.25 14.4375 12.25ZM14.4375 10.0625H15.75L15.7509 11.375H14.4375V10.0625Z", "fill", "#00A9FF"], ["d", "M5.25 17.0625H6.5625C7.04506 17.0625 7.4375 16.6701 7.4375 16.1875V14.875C7.4375 14.3924 7.04506 14 6.5625 14H5.25C4.76744 14 4.375 14.3924 4.375 14.875V16.1875C4.375 16.6701 4.76744 17.0625 5.25 17.0625ZM5.25 14.875H6.5625L6.56338 16.1875H5.25V14.875Z", "fill", "#00A9FF"], ["d", "M9.84375 17.0625H11.1563C11.6388 17.0625 12.0313 16.6701 12.0313 16.1875V14.875C12.0313 14.3924 11.6388 14 11.1563 14H9.84375C9.36119 14 8.96875 14.3924 8.96875 14.875V16.1875C8.96875 16.6701 9.36119 17.0625 9.84375 17.0625ZM9.84375 14.875H11.1563L11.1571 16.1875H9.84375V14.875Z", "fill", "#00A9FF"], ["d", "M14.4375 17.0625H15.75C16.2326 17.0625 16.625 16.6701 16.625 16.1875V14.875C16.625 14.3924 16.2326 14 15.75 14H14.4375C13.9549 14 13.5625 14.3924 13.5625 14.875V16.1875C13.5625 16.6701 13.9549 17.0625 14.4375 17.0625ZM14.4375 14.875H15.75L15.7509 16.1875H14.4375V14.875Z", "fill", "#00A9FF"], ["formControlName", "arrivalTime", 3, "placeholder"], [1, "gray-option", 3, "value", "disabled"], [1, "green-option", 3, "value", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_606_5484)"], ["d", "M12.0203 18.2164C11.8554 18.2575 11.6872 18.294 11.5204 18.3247C11.0841 18.4059 10.7956 18.8255 10.8763 19.2622C10.9162 19.477 11.0382 19.6559 11.2038 19.7727C11.3746 19.8929 11.5918 19.9471 11.8133 19.906C12.012 19.8691 12.2123 19.8257 12.4089 19.7766C12.8397 19.6694 13.1022 19.233 12.9947 18.8023C12.8875 18.3714 12.4514 18.1091 12.0203 18.2164Z", "fill", "#00A9FF"], ["d", "M17.966 7.43966C18.0223 7.60939 18.1298 7.74796 18.2657 7.8437C18.467 7.98553 18.7305 8.03325 18.982 7.95011C19.4036 7.81012 19.632 7.35553 19.4925 6.93416C19.429 6.74207 19.3585 6.54938 19.2834 6.36176C19.1185 5.94946 18.6508 5.74873 18.2383 5.91365C17.8262 6.07848 17.6254 6.54628 17.7904 6.95871C17.8535 7.1164 17.9126 7.27827 17.966 7.43966Z", "fill", "#00A9FF"], ["d", "M14.6327 17.0684C14.4909 17.162 14.3445 17.2527 14.1971 17.3376C13.8123 17.5595 13.6806 18.0513 13.9024 18.4359C13.9626 18.5405 14.0428 18.626 14.1352 18.6913C14.3833 18.8658 14.7201 18.892 15.0005 18.7304C15.1759 18.6293 15.3502 18.5217 15.5191 18.41C15.8895 18.1654 15.9914 17.6665 15.7466 17.296C15.5018 16.9254 15.0032 16.8236 14.6327 17.0684Z", "fill", "#00A9FF"], ["d", "M19.9924 9.68518C19.9749 9.24142 19.6011 8.89602 19.1572 8.91334C18.7139 8.93084 18.3682 9.30475 18.3856 9.74834C18.3923 9.91794 18.394 10.0901 18.3901 10.2595C18.3839 10.5378 18.52 10.7859 18.7315 10.935C18.8575 11.0237 19.0104 11.0774 19.1763 11.0812C19.62 11.091 19.9878 10.7391 19.9976 10.2951C20.0021 10.0926 20.0004 9.88751 19.9924 9.68518Z", "fill", "#00A9FF"], ["d", "M17.8346 14.9534C17.4788 14.6864 16.9753 14.7589 16.7088 15.1141C16.6068 15.2501 16.4993 15.3844 16.3892 15.5138C16.1016 15.8517 16.1422 16.3593 16.4801 16.6471C16.4994 16.6635 16.5189 16.6785 16.5391 16.6926C16.875 16.9294 17.3419 16.875 17.6135 16.5562C17.745 16.4019 17.8731 16.2414 17.9951 16.0789C18.2616 15.7237 18.1895 15.2199 17.8346 14.9534Z", "fill", "#00A9FF"], ["d", "M19.0165 12.0469C18.5928 11.9141 18.1416 12.1499 18.0089 12.5736C17.9581 12.7355 17.9017 12.8981 17.8409 13.0574C17.7074 13.4081 17.8354 13.7939 18.1286 14.0006C18.1823 14.0384 18.2416 14.0704 18.3059 14.0948C18.7208 14.2531 19.1853 14.0449 19.3434 13.6299C19.4156 13.4406 19.4826 13.2471 19.5432 13.0546C19.6758 12.6308 19.4401 12.1798 19.0165 12.0469Z", "fill", "#00A9FF"], ["d", "M8.51241 18.3319C7.79358 18.2029 7.10402 17.9831 6.45016 17.6766C6.44242 17.6725 6.43549 17.6679 6.42737 17.6642C6.27328 17.5917 6.11946 17.514 5.97036 17.4328C5.96985 17.4322 5.9689 17.4319 5.96808 17.4315C5.69452 17.2809 5.42754 17.1142 5.16817 16.9316C1.38605 14.2674 0.476682 9.02283 3.14108 5.24075C3.72045 4.41865 4.42157 3.7328 5.20321 3.18921C5.21284 3.1825 5.22247 3.17583 5.23201 3.16908C7.9864 1.27123 11.7264 1.14333 14.6511 3.09355L14.023 4.00116C13.8483 4.25378 13.9558 4.43787 14.2615 4.41036L16.9901 4.16608C17.2962 4.13856 17.4793 3.87377 17.3969 3.57816L16.6642 0.938174C16.5822 0.642215 16.3722 0.606789 16.1974 0.859369L15.5677 1.76913C13.4214 0.328328 10.8471 -0.22107 8.2919 0.222008C8.03455 0.266548 7.78081 0.321063 7.53055 0.384519C7.52862 0.384863 7.52707 0.385078 7.52552 0.385422C7.51585 0.387787 7.50604 0.390925 7.49663 0.393548C5.29328 0.959369 3.37088 2.24445 1.99912 4.07798C1.98756 4.0917 1.97565 4.10511 1.96473 4.12003C1.91912 4.18147 1.87384 4.24432 1.82952 4.30718C1.75703 4.41019 1.68558 4.51577 1.61722 4.62136C1.60867 4.63409 1.60213 4.64703 1.59465 4.65988C0.462666 6.41401 -0.0833353 8.44196 0.0103018 10.5065C0.0105168 10.5133 0.0101299 10.5202 0.0103018 10.5271C0.0193732 10.7288 0.0353663 10.9333 0.0570774 11.1346C0.0582382 11.1475 0.0611187 11.1598 0.0633113 11.1728C0.0857533 11.3752 0.113913 11.5781 0.14921 11.781C0.507937 13.8505 1.48421 15.7128 2.9471 17.1619C2.9505 17.1653 2.95402 17.169 2.95746 17.1725C2.95867 17.1738 2.96 17.1745 2.96116 17.1757C3.3542 17.5634 3.78171 17.922 4.24203 18.2462C5.44667 19.095 6.78807 19.6561 8.22866 19.9146C8.66576 19.9932 9.0833 19.7022 9.16172 19.2653C9.24009 18.8281 8.94938 18.4102 8.51241 18.3319Z", "fill", "#00A9FF"], ["d", "M9.50649 3.57678C9.14694 3.57678 8.85571 3.86827 8.85571 4.2273V10.7083L14.7831 13.7724C14.8785 13.8218 14.9806 13.845 15.0811 13.845C15.3165 13.845 15.5439 13.7168 15.6595 13.4931C15.8244 13.1739 15.6997 12.7816 15.3804 12.6168L10.1565 9.91608V4.2273C10.1565 3.86827 9.8656 3.57678 9.50649 3.57678Z", "fill", "#00A9FF"], ["id", "clip0_606_5484"], ["width", "20", "height", "20", "fill", "white"], ["readonly", "", "matDatepickerToggleIcon", "", "matInput", "", "placeholder", "MM/DD/YYYY", "formControlName", "arrivalDate", 3, "click", "matDatepicker", "min", "max"], ["d", "M16.4062 12.1406H15.5433L15.7014 11.1562H16.0781C16.1651 11.1562 16.2486 11.1217 16.3101 11.0601C16.3717 10.9986 16.4062 10.9151 16.4062 10.8281V9.51562C16.4062 9.4286 16.3717 9.34514 16.3101 9.28361C16.2486 9.22207 16.1651 9.1875 16.0781 9.1875H15.4219V5.65031C15.5247 5.55877 15.607 5.44658 15.6636 5.32107C15.7201 5.19556 15.7496 5.05953 15.75 4.92188V4.59375H17.0625C17.3236 4.59375 17.574 4.49004 17.7586 4.30543C17.9432 4.12083 18.0469 3.87045 18.0469 3.60938V0.984375C18.0469 0.897351 18.0123 0.813891 17.9508 0.752356C17.8892 0.69082 17.8058 0.65625 17.7188 0.65625H11.1562C11.0692 0.65625 10.9858 0.69082 10.9242 0.752356C10.8627 0.813891 10.8281 0.897351 10.8281 0.984375V3.60938C10.8281 3.87045 10.9318 4.12083 11.1164 4.30543C11.301 4.49004 11.5514 4.59375 11.8125 4.59375H13.125V4.92188C13.1254 5.05953 13.1549 5.19556 13.2114 5.32107C13.268 5.44658 13.3503 5.55877 13.4531 5.65031V8.98669C13.4533 8.88261 13.4287 8.77999 13.3813 8.6873C13.334 8.59461 13.2653 8.5145 13.1809 8.4536C13.0965 8.3927 12.9988 8.35274 12.8959 8.33703C12.793 8.32132 12.6879 8.33031 12.5892 8.36325L12.348 8.44364C12.2132 8.48827 12.0677 8.48827 11.9329 8.44364L11.572 8.32355C11.438 8.27956 11.2979 8.25741 11.1569 8.25792V8.20312C11.1559 7.47711 10.8878 6.77684 10.4037 6.23579C9.91961 5.69474 9.25334 5.35074 8.53191 5.26936V4.59375H9.18816C9.27518 4.59375 9.35864 4.55918 9.42018 4.49764C9.48171 4.43611 9.51628 4.35265 9.51628 4.26562V2.95312C9.51628 2.8661 9.48171 2.78264 9.42018 2.72111C9.35864 2.65957 9.27518 2.625 9.18816 2.625H5.90625C5.81923 2.625 5.73577 2.65957 5.67423 2.72111C5.61269 2.78264 5.57812 2.8661 5.57812 2.95312V4.26562C5.57812 4.35265 5.61269 4.43611 5.67423 4.49764C5.73577 4.55918 5.81923 4.59375 5.90625 4.59375H6.5625V5.25C6.47548 5.25 6.39202 5.28457 6.33048 5.34611C6.26894 5.40764 6.23438 5.4911 6.23438 5.57812V9.1875H4.92188C4.83485 9.1875 4.75139 9.22207 4.68986 9.28361C4.62832 9.34514 4.59375 9.4286 4.59375 9.51562V10.8281C4.59375 10.9151 4.62832 10.9986 4.68986 11.0601C4.75139 11.1217 4.83485 11.1562 4.92188 11.1562H5.29856L5.45672 12.1406H4.59375C4.50673 12.1406 4.42327 12.1752 4.36173 12.2367C4.3002 12.2983 4.26562 12.3817 4.26562 12.4688C4.27439 13.2301 4.44734 13.9805 4.77267 14.6689C5.098 15.3573 5.56804 15.9673 6.1507 16.4574L6.73083 20.0668C6.74301 20.144 6.78232 20.2142 6.84169 20.265C6.90105 20.3158 6.97658 20.3437 7.05469 20.3438H13.9453C14.0233 20.3437 14.0988 20.3159 14.1581 20.2653C14.2175 20.2146 14.2568 20.1445 14.2692 20.0675L14.8493 16.4581C15.432 15.9679 15.9021 15.3578 16.2275 14.6693C16.5528 13.9808 16.7257 13.2302 16.7344 12.4688C16.7344 12.3817 16.6998 12.2983 16.6383 12.2367C16.5767 12.1752 16.4933 12.1406 16.4062 12.1406ZM15.75 10.5H13.4531V9.84375H15.75V10.5ZM17.3906 2.625H16.7344V1.3125H17.3906V2.625ZM15.4219 2.625V1.3125H16.0781V2.625H15.4219ZM14.1094 2.625V1.3125H14.7656V2.625H14.1094ZM12.7969 2.625V1.3125H13.4531V2.625H12.7969ZM11.4844 1.3125H12.1406V2.625H11.4844V1.3125ZM11.4844 3.60938V3.28125H17.3906V3.60938C17.3906 3.6964 17.3561 3.77986 17.2945 3.84139C17.233 3.90293 17.1495 3.9375 17.0625 3.9375H11.8125C11.7255 3.9375 11.642 3.90293 11.5805 3.84139C11.5189 3.77986 11.4844 3.6964 11.4844 3.60938ZM15.0938 4.59375V4.92188C15.0938 5.0089 15.0592 5.09236 14.9976 5.15389C14.9361 5.21543 14.8526 5.25 14.7656 5.25H14.1094C14.0224 5.25 13.9389 5.21543 13.8774 5.15389C13.8158 5.09236 13.7812 5.0089 13.7812 4.92188V4.59375H15.0938ZM14.7656 5.90625V9.1875H14.1094V5.90625H14.7656ZM11.7255 9.06675C11.995 9.15633 12.2862 9.15633 12.5557 9.06675L12.7969 8.98669V13.6365C12.7968 13.7054 12.7751 13.7725 12.7348 13.8283C12.6946 13.8841 12.6377 13.9259 12.5724 13.9476L12.2443 14.0569C12.1769 14.0795 12.104 14.0795 12.0366 14.0569L11.467 13.8669C11.2646 13.7997 11.0459 13.7997 10.8435 13.8669L10.2743 14.0562C10.207 14.0792 10.1341 14.0792 10.0669 14.0562L9.73875 13.9473C9.67374 13.9253 9.61724 13.8835 9.57722 13.8278C9.5372 13.7721 9.51565 13.7052 9.51562 13.6365V8.98636L9.7568 9.06708C10.0264 9.156 10.3174 9.156 10.587 9.06708L10.9479 8.94698C10.9508 8.94698 10.9545 8.94698 10.9574 8.94502C11.0899 8.90188 11.2327 8.90188 11.3653 8.94502L11.7255 9.06675ZM6.23438 3.28125H8.85938V3.9375H8.53125C8.53125 3.85048 8.49668 3.76702 8.43514 3.70548C8.37361 3.64395 8.29015 3.60938 8.20312 3.60938C8.1161 3.60938 8.03264 3.64395 7.97111 3.70548C7.90957 3.76702 7.875 3.85048 7.875 3.9375H7.21875C7.21875 3.85048 7.18418 3.76702 7.12264 3.70548C7.06111 3.64395 6.97765 3.60938 6.89062 3.60938C6.8036 3.60938 6.72014 3.64395 6.65861 3.70548C6.59707 3.76702 6.5625 3.85048 6.5625 3.9375H6.23438V3.28125ZM7.21875 4.59375H7.875V5.25H7.21875V4.59375ZM6.89062 5.90625H8.20312C8.81208 5.90694 9.3959 6.14916 9.82649 6.57976C10.2571 7.01035 10.4993 7.59417 10.5 8.20312V8.40394L10.3796 8.44397C10.2448 8.4886 10.0993 8.4886 9.9645 8.44397L9.723 8.36325C9.62429 8.33037 9.51918 8.32144 9.41634 8.33718C9.3135 8.35292 9.21587 8.39288 9.13151 8.45378C9.04716 8.51467 8.97849 8.59475 8.93117 8.68741C8.88385 8.78007 8.85925 8.88265 8.85938 8.98669V9.1875H6.89062V5.90625ZM5.25 9.84375H8.85938V10.5H5.25V9.84375ZM8.85938 11.1562V13.6365C8.85939 13.8432 8.92443 14.0446 9.04528 14.2122C9.16612 14.3798 9.33665 14.5051 9.53269 14.5704L9.86081 14.6797C10.0631 14.7472 10.2819 14.7472 10.4843 14.6797L11.0535 14.4903C11.1209 14.4677 11.1939 14.4677 11.2613 14.4903L11.8309 14.6803C12.0333 14.7471 12.2519 14.7471 12.4543 14.6803L12.7824 14.571C12.9781 14.5053 13.1481 14.3796 13.2685 14.212C13.3888 14.0443 13.4534 13.843 13.4531 13.6365V11.1562H15.0367L14.2406 16.1129C13.1698 16.9416 11.854 17.3912 10.5 17.3912C9.14596 17.3912 7.83025 16.9416 6.75938 16.1129L5.96302 11.1562H8.85938ZM4.93434 12.7969H5.56237L5.96991 15.3339C5.37194 14.6149 5.01031 13.729 4.93434 12.7969ZM13.6654 19.6875H7.33425L6.90539 17.0182C7.98386 17.6904 9.2292 18.0467 10.5 18.0467C11.7708 18.0467 13.0161 17.6904 14.0946 17.0182L13.6654 19.6875ZM15.0301 15.3343L15.4376 12.7969H16.066C15.9897 13.729 15.628 14.6151 15.0301 15.3343Z", "fill", "#00A9FF"], ["d", "M10.5 9.84375C10.413 9.84375 10.3295 9.87832 10.268 9.93986C10.2064 10.0014 10.1719 10.0849 10.1719 10.1719V12.1406C10.1719 12.2276 10.2064 12.3111 10.268 12.3726C10.3295 12.4342 10.413 12.4688 10.5 12.4688C10.587 12.4688 10.6705 12.4342 10.732 12.3726C10.7936 12.3111 10.8281 12.2276 10.8281 12.1406V10.1719C10.8281 10.0849 10.7936 10.0014 10.732 9.93986C10.6705 9.87832 10.587 9.84375 10.5 9.84375Z", "fill", "#00A9FF"], ["d", "M11.8125 13.4531C11.8995 13.4531 11.983 13.4186 12.0445 13.357C12.1061 13.2955 12.1406 13.212 12.1406 13.125V10.5C12.1406 10.413 12.1061 10.3295 12.0445 10.268C11.983 10.2064 11.8995 10.1719 11.8125 10.1719C11.7255 10.1719 11.642 10.2064 11.5805 10.268C11.5189 10.3295 11.4844 10.413 11.4844 10.5V13.125C11.4844 13.212 11.5189 13.2955 11.5805 13.357C11.642 13.4186 11.7255 13.4531 11.8125 13.4531Z", "fill", "#00A9FF"], ["d", "M19.3594 6.5625C19.1853 6.5625 19.0184 6.49336 18.8953 6.37029C18.7723 6.24722 18.7031 6.0803 18.7031 5.90625C18.7031 5.81923 18.6686 5.73577 18.607 5.67423C18.5455 5.61269 18.462 5.57812 18.375 5.57812C18.288 5.57812 18.2045 5.61269 18.143 5.67423C18.0814 5.73577 18.0469 5.81923 18.0469 5.90625C18.0469 6.0803 17.9777 6.24722 17.8547 6.37029C17.7316 6.49336 17.5647 6.5625 17.3906 6.5625C17.3036 6.5625 17.2201 6.59707 17.1586 6.65861C17.0971 6.72014 17.0625 6.8036 17.0625 6.89062C17.0625 6.97765 17.0971 7.06111 17.1586 7.12264C17.2201 7.18418 17.3036 7.21875 17.3906 7.21875C17.5647 7.21875 17.7316 7.28789 17.8547 7.41096C17.9777 7.53403 18.0469 7.70095 18.0469 7.875C18.0469 7.96202 18.0814 8.04548 18.143 8.10702C18.2045 8.16856 18.288 8.20312 18.375 8.20312C18.462 8.20312 18.5455 8.16856 18.607 8.10702C18.6686 8.04548 18.7031 7.96202 18.7031 7.875C18.7031 7.70095 18.7723 7.53403 18.8953 7.41096C19.0184 7.28789 19.1853 7.21875 19.3594 7.21875C19.4464 7.21875 19.5299 7.18418 19.5914 7.12264C19.6529 7.06111 19.6875 6.97765 19.6875 6.89062C19.6875 6.8036 19.6529 6.72014 19.5914 6.65861C19.5299 6.59707 19.4464 6.5625 19.3594 6.5625ZM18.375 7.00777C18.3386 6.96614 18.2995 6.927 18.2579 6.89062C18.2995 6.85425 18.3386 6.81511 18.375 6.77348C18.4114 6.81511 18.4505 6.85425 18.4921 6.89062C18.4505 6.927 18.4114 6.96614 18.375 7.00777Z", "fill", "#00A9FF"], ["d", "M3.60938 2.29688C3.43533 2.29688 3.26841 2.22773 3.14534 2.10466C3.02227 1.98159 2.95312 1.81467 2.95312 1.64062C2.95312 1.5536 2.91855 1.47014 2.85702 1.40861C2.79548 1.34707 2.71202 1.3125 2.625 1.3125C2.53798 1.3125 2.45452 1.34707 2.39298 1.40861C2.33145 1.47014 2.29688 1.5536 2.29688 1.64062C2.29688 1.81467 2.22773 1.98159 2.10466 2.10466C1.98159 2.22773 1.81467 2.29688 1.64062 2.29688C1.5536 2.29688 1.47014 2.33145 1.40861 2.39298C1.34707 2.45452 1.3125 2.53798 1.3125 2.625C1.3125 2.71202 1.34707 2.79548 1.40861 2.85702C1.47014 2.91855 1.5536 2.95312 1.64062 2.95312C1.81467 2.95312 1.98159 3.02227 2.10466 3.14534C2.22773 3.26841 2.29688 3.43533 2.29688 3.60938C2.29688 3.6964 2.33145 3.77986 2.39298 3.84139C2.45452 3.90293 2.53798 3.9375 2.625 3.9375C2.71202 3.9375 2.79548 3.90293 2.85702 3.84139C2.91855 3.77986 2.95312 3.6964 2.95312 3.60938C2.95312 3.43533 3.02227 3.26841 3.14534 3.14534C3.26841 3.02227 3.43533 2.95312 3.60938 2.95312C3.6964 2.95312 3.77986 2.91855 3.84139 2.85702C3.90293 2.79548 3.9375 2.71202 3.9375 2.625C3.9375 2.53798 3.90293 2.45452 3.84139 2.39298C3.77986 2.33145 3.6964 2.29688 3.60938 2.29688ZM2.625 2.74214C2.58862 2.70051 2.54949 2.66138 2.50786 2.625C2.54949 2.58862 2.58862 2.54949 2.625 2.50786C2.66138 2.54949 2.70051 2.58862 2.74214 2.625C2.70051 2.66138 2.66138 2.70051 2.625 2.74214Z", "fill", "#00A9FF"], ["formControlName", "materials", 3, "placeholder"], ["clip-path", "url(#clip0_606_5468)"], ["d", "M17.6486 14.1094H14.4783V13.3788C16.4191 12.6342 17.8006 10.7514 17.8006 8.5518V6.86122C17.8006 4.01162 15.4822 1.69325 12.6326 1.69325C12.5533 1.69325 12.4745 1.69534 12.396 1.69887C11.8134 0.660352 10.7013 0 9.50515 0C7.67893 0 6.19314 1.48575 6.19314 3.31201C6.19314 4.37132 6.69993 5.35607 7.54066 5.97651C7.49083 6.26407 7.46462 6.55963 7.46462 6.86122V8.5518C7.46462 10.7514 8.84611 12.6342 10.7869 13.3788V14.1094H7.61662C6.8126 14.1094 6.07399 14.3953 5.49587 14.8708V14.6035C5.66518 14.408 5.80587 14.1819 5.91066 13.9294C6.35806 12.8512 6.80558 11.773 7.25347 10.6951C7.33235 10.5052 7.31114 10.2885 7.19703 10.1175C7.08289 9.94649 6.89089 9.84379 6.68528 9.84379H5.70091C4.03797 9.84379 3.35018 10.2026 2.91492 10.6196C2.89934 10.6054 2.88404 10.5912 2.87001 10.5782C2.57371 10.3035 2.07787 9.84383 0.994365 9.84383H0.615011C0.409564 9.84383 0.217693 9.94637 0.103506 10.1172C-0.0106409 10.2879 -0.0320511 10.5045 0.0464939 10.6943C0.430072 11.6213 1.38906 13.9301 1.38906 13.9301C1.49398 14.1828 1.63487 14.409 1.80442 14.6045V20.3847C1.80442 20.7245 2.07988 21 2.41966 21C2.75943 21 3.03489 20.7245 3.03489 20.3847V17.4727H4.26536V17.4734V20.3847V20.3848C4.26536 20.7245 4.54082 21 4.8806 21C5.22037 21 5.49583 20.7245 5.49583 20.3848V20.3847V17.4733C5.49583 16.4953 6.15356 15.6695 7.0472 15.4186C7.02534 15.5681 7.01345 15.7197 7.01345 15.873C7.01345 17.5919 8.41184 18.9902 10.1306 18.9902C10.8384 18.9902 11.532 18.746 12.0836 18.3026C12.2817 18.1434 12.4583 17.9604 12.6108 17.7596C13.1853 18.5179 14.0916 18.9902 15.0943 18.9902C16.8131 18.9902 18.2115 17.5918 18.2115 15.873C18.2115 15.7158 18.1994 15.5602 18.1763 15.4067C19.0912 15.6433 19.7694 16.4801 19.7694 17.4733V20.3848C19.7694 20.7245 20.0448 21 20.3846 21C20.7244 21 20.9998 20.7245 20.9998 20.3848V17.4733C20.9998 15.6184 19.4964 14.1094 17.6486 14.1094ZM2.0335 11.4805C2.2419 11.6737 2.52728 11.9383 2.99318 11.9383C3.36519 11.9383 3.58192 11.7036 3.69832 11.5776C3.86074 11.4017 4.16307 11.0743 5.70091 11.0743H5.76354C5.43361 11.8688 5.10384 12.6633 4.77412 13.4578C4.58356 13.9172 4.17279 14.1914 3.67543 14.1914H3.624C3.12681 14.1914 2.71612 13.9173 2.52544 13.4581C2.52544 13.4581 1.82653 11.7754 1.57211 11.1618C1.77124 11.2373 1.89695 11.3539 2.0335 11.4805ZM3.03493 16.2422V15.3521C3.22365 15.3978 3.42085 15.4219 3.624 15.4219H3.67543C3.87891 15.4219 4.07644 15.3977 4.2654 15.3519V16.2422H3.03493ZM16.4536 5.90961C15.6765 5.73357 14.9647 5.35652 14.3711 4.80231C14.1347 4.58165 13.7679 4.58169 13.5314 4.80231C12.6884 5.58924 11.5889 6.02261 10.4355 6.02261C9.89139 6.02261 9.36147 5.92766 8.85776 5.74075C9.3415 4.11378 10.8506 2.92372 12.6326 2.92372C14.4757 2.92372 16.0268 4.19676 16.4536 5.90961ZM7.42361 3.31201C7.42361 2.16427 8.35741 1.23047 9.50515 1.23047C10.106 1.23047 10.6734 1.49621 11.0642 1.93684C9.6818 2.37813 8.55059 3.38641 7.94491 4.68706C7.61425 4.31234 7.42361 3.8261 7.42361 3.31201ZM8.69509 8.5518V6.98558C9.25573 7.16305 9.83914 7.25316 10.4355 7.25316C11.7169 7.25316 12.9461 6.8323 13.9509 6.05842C14.7179 6.65081 15.6104 7.03389 16.5701 7.18303V8.5518C16.5701 10.723 14.8038 12.4893 12.6326 12.4893C10.4614 12.4893 8.69509 10.7229 8.69509 8.5518ZM12.6326 13.7198C12.8408 13.7198 13.046 13.7071 13.2478 13.683V15.1639C13.2478 15.5032 12.9718 15.7792 12.6326 15.7792C12.2933 15.7792 12.0174 15.5032 12.0174 15.1639V13.683C12.2192 13.707 12.4244 13.7198 12.6326 13.7198ZM10.1306 17.7598C9.09032 17.7598 8.24392 16.9134 8.24392 15.873C8.24392 15.6906 8.27025 15.5123 8.32123 15.3398H10.7955C10.8556 15.9729 11.2368 16.5135 11.774 16.797C11.4452 17.3765 10.8199 17.7598 10.1306 17.7598ZM15.0943 17.7598C14.4032 17.7598 13.7876 17.3889 13.4583 16.8139C14.0128 16.5353 14.4084 15.9857 14.4697 15.3398H16.9037C16.9547 15.5124 16.981 15.6908 16.981 15.873C16.981 16.9134 16.1346 17.7598 15.0943 17.7598Z", "fill", "#00A9FF"], ["id", "clip0_606_5468"], ["formControlName", "cleaners", 3, "placeholder"], ["d", "M18.375 3.5H2.625C1.17525 3.5 0 4.67525 0 6.125V14.875C0 16.3247 1.17525 17.5 2.625 17.5H18.375C19.8247 17.5 21 16.3247 21 14.875V6.125C21 4.67525 19.8247 3.5 18.375 3.5ZM2.625 5.25H18.375C18.7192 5.25 19 5.53075 19 5.875V7H2V5.875C2 5.53075 2.28075 5.25 2.625 5.25ZM18.375 15.75H2.625C2.28075 15.75 2 15.4692 2 15.125V8.75H19V15.125C19 15.4692 18.7192 15.75 18.375 15.75Z", "fill", "#00A9FF"], ["d", "M4.375 10.5C4.375 9.80964 4.93464 9.25 5.625 9.25C6.31536 9.25 6.875 9.80964 6.875 10.5C6.875 11.1904 6.31536 11.75 5.625 11.75C4.93464 11.75 4.375 11.1904 4.375 10.5Z", "fill", "#00A9FF"], ["d", "M8.75 10.5C8.75 9.80964 9.30964 9.25 10 9.25C10.6904 9.25 11.25 9.80964 11.25 10.5C11.25 11.1904 10.6904 11.75 10 11.75C9.30964 11.75 8.75 11.1904 8.75 10.5Z", "fill", "#00A9FF"], ["d", "M13.125 10.5C13.125 9.80964 13.6846 9.25 14.375 9.25C15.0654 9.25 15.625 9.80964 15.625 10.5C15.625 11.1904 15.0654 11.75 14.375 11.75C13.6846 11.75 13.125 11.1904 13.125 10.5Z", "fill", "#00A9FF"], ["formControlName", "paymentOption", 3, "placeholder"], [1, "payment-note"], [1, "warn", "warn-success"], [1, "warn", "warn-error"], [1, "flex", "space-between", "items-end", "form-footer"], [1, "price-section", "flex", "flex-column"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn-primary", 3, "disabled"], [1, "side-info"], [1, "flex", "flex-column", "h-full"], [1, "info"], [1, "flex"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_440_4655)"], ["d", "M20.6061 35.5682H14.5243C13.9943 35.5682 13.5666 35.1344 13.5741 34.6045L14.0072 3.73519C14.031 2.09459 15.3817 0.760498 17.0187 0.760498H18.1128C19.7499 0.760498 21.1006 2.09459 21.1232 3.73519L21.5563 34.6045C21.5637 35.1346 21.1361 35.5682 20.6061 35.5682Z", "fill", "white"], ["d", "M53.7283 35.7821L51.8774 52.523C51.6505 54.5735 49.9244 56.1202 47.8609 56.1202H37.5971C36.9269 56.1202 36.4679 55.4453 36.7137 54.8218C37.2173 53.5442 37.2424 52.0381 36.7153 50.5403C36.2733 49.2846 35.418 48.5267 34.7931 47.9731C34.1754 47.4242 33.7905 47.0833 33.7311 46.0913C34.533 45.2182 35.0224 44.054 35.0224 42.7781V40.4758C35.0224 37.7654 32.8253 35.5682 30.1149 35.5682H29.1411C28.6205 35.5682 28.5703 34.7837 29.0889 34.74C29.1511 34.7348 35.9956 34.7367 52.7921 34.7367C53.3529 34.7367 53.79 35.2237 53.7283 35.7821Z", "fill", "white"], ["d", "M29.1811 55.2874C27.2875 55.9218 25.2026 55.7697 23.4183 54.8645C19.6975 56.4397 15.5111 56.4397 11.7904 54.8645C10.006 55.7709 7.92233 55.9218 6.02751 55.2874C2.98083 57.7163 -1.1266 55.1806 0.287214 51.171C0.810873 49.6827 2.20698 49.3399 2.92903 47.9368C3.09618 47.6119 3.47016 47.4548 3.82489 47.5426C4.59267 47.7326 4.55846 47.6856 9.84032 47.6856C10.5208 47.6856 10.9104 48.502 10.4113 49.0292C9.83818 49.6345 10.2704 50.6342 11.1003 50.6342C11.3521 50.6342 11.6028 50.5356 11.7893 50.3384C12.4125 49.6831 12.9715 48.935 13.4392 48.0958C13.5797 47.8436 13.844 47.6856 14.1327 47.6856H21.0761C21.365 47.6856 21.6291 47.8438 21.7698 48.0961C22.2275 48.9165 22.7844 49.6706 23.4195 50.3384C23.606 50.5356 23.8566 50.6342 24.1085 50.6342C24.9281 50.6342 25.3826 49.6478 24.7858 49.0168C24.3107 48.5145 24.6771 47.6856 25.3685 47.6856C30.3561 47.6856 30.5438 47.74 31.3629 47.525C31.7283 47.4292 32.1069 47.5997 32.2794 47.9358C33.001 49.341 34.3971 49.6838 34.9227 51.1712C36.3332 55.179 32.2321 57.7206 29.1811 55.2874Z", "fill", "white"], ["d", "M48.1473 11.1157C48.7563 11.5641 48.4742 12.5547 47.6875 12.5547C47.2028 12.5547 46.7146 12.4443 46.2596 12.2197C42.9059 10.5744 38.9024 10.5732 35.55 12.2185C35.1821 12.3992 34.793 12.5063 34.4013 12.5407C33.6065 12.6105 33.2362 11.5716 33.8824 11.1036C37.7577 8.29799 44.2934 8.27863 48.1473 11.1157Z", "fill", "white"], ["d", "M55.0648 18.6727L54.7545 22.6996C54.7168 23.1891 54.3094 23.5686 53.8184 23.5689C53.2184 23.5693 52.8184 23.0782 52.8589 22.5546L53.1701 18.5266C54.3517 3.19064 27.6175 3.32072 28.7917 18.5266L29.103 22.5546C29.1452 23.1026 28.7106 23.5698 28.1609 23.5689C27.6248 23.5681 27.2426 23.1679 27.2066 22.6994L26.8969 18.6727C26.5274 13.8804 28.5149 9.89949 32.4934 7.46414C41.1175 2.18454 56.0336 6.12767 55.0648 18.6727Z", "fill", "white"], ["d", "M56.9999 28.4939V29.8125C56.9999 31.4804 55.6444 32.8359 53.9765 32.8359H27.948C26.28 32.8359 24.9246 31.4804 24.9246 29.8125V28.4939C24.9246 26.8259 26.28 25.4705 27.948 25.4705H53.9765C55.6444 25.4705 56.9999 26.8259 56.9999 28.4939Z", "fill", "white"], ["d", "M33.1218 40.4758V42.7781C33.1218 44.4365 31.7734 45.7848 30.115 45.7848H5.00359C3.34518 45.7848 1.99683 44.4365 1.99683 42.7781V40.4758C1.99683 38.8173 3.34518 37.469 5.00359 37.469H30.115C31.7734 37.469 33.1218 38.8173 33.1218 40.4758Z", "fill", "white"], ["id", "clip0_440_4655"], ["width", "57", "height", "57", "fill", "white"], ["width", "50", "height", "57", "viewBox", "0 0 50 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 51.6562C0 54.6064 2.39955 57 5.35714 57H44.6429C47.6004 57 50 54.6064 50 51.6562V21.375H0V51.6562ZM35.7143 29.8359C35.7143 29.1012 36.317 28.5 37.0536 28.5H41.5179C42.2545 28.5 42.8571 29.1012 42.8571 29.8359V34.2891C42.8571 35.0238 42.2545 35.625 41.5179 35.625H37.0536C36.317 35.625 35.7143 35.0238 35.7143 34.2891V29.8359ZM35.7143 44.0859C35.7143 43.3512 36.317 42.75 37.0536 42.75H41.5179C42.2545 42.75 42.8571 43.3512 42.8571 44.0859V48.5391C42.8571 49.2738 42.2545 49.875 41.5179 49.875H37.0536C36.317 49.875 35.7143 49.2738 35.7143 48.5391V44.0859ZM21.4286 29.8359C21.4286 29.1012 22.0312 28.5 22.7679 28.5H27.2321C27.9688 28.5 28.5714 29.1012 28.5714 29.8359V34.2891C28.5714 35.0238 27.9688 35.625 27.2321 35.625H22.7679C22.0312 35.625 21.4286 35.0238 21.4286 34.2891V29.8359ZM21.4286 44.0859C21.4286 43.3512 22.0312 42.75 22.7679 42.75H27.2321C27.9688 42.75 28.5714 43.3512 28.5714 44.0859V48.5391C28.5714 49.2738 27.9688 49.875 27.2321 49.875H22.7679C22.0312 49.875 21.4286 49.2738 21.4286 48.5391V44.0859ZM7.14286 29.8359C7.14286 29.1012 7.74554 28.5 8.48214 28.5H12.9464C13.683 28.5 14.2857 29.1012 14.2857 29.8359V34.2891C14.2857 35.0238 13.683 35.625 12.9464 35.625H8.48214C7.74554 35.625 7.14286 35.0238 7.14286 34.2891V29.8359ZM7.14286 44.0859C7.14286 43.3512 7.74554 42.75 8.48214 42.75H12.9464C13.683 42.75 14.2857 43.3512 14.2857 44.0859V48.5391C14.2857 49.2738 13.683 49.875 12.9464 49.875H8.48214C7.74554 49.875 7.14286 49.2738 7.14286 48.5391V44.0859ZM44.6429 7.125H39.2857V1.78125C39.2857 0.801562 38.4821 0 37.5 0H33.9286C32.9464 0 32.1429 0.801562 32.1429 1.78125V7.125H17.8571V1.78125C17.8571 0.801562 17.0536 0 16.0714 0H12.5C11.5179 0 10.7143 0.801562 10.7143 1.78125V7.125H5.35714C2.39955 7.125 0 9.51855 0 12.4688V17.8125H50V12.4688C50 9.51855 47.6004 7.125 44.6429 7.125Z", "fill", "white"], ["width", "56", "height", "57", "viewBox", "0 0 56 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M26.7083 29.1303C34.5554 29.1303 40.9167 22.769 40.9167 14.922C40.9167 7.07491 34.5554 0.713623 26.7083 0.713623C18.8613 0.713623 12.5 7.07491 12.5 14.922C12.5 22.769 18.8613 29.1303 26.7083 29.1303Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M30.3897 53.703C27.7056 50.82 26.0626 46.9553 26.0626 42.7083C26.0626 38.3606 27.7857 34.4107 30.586 31.507C29.3202 31.4088 28.0259 31.3572 26.7084 31.3572C18.1266 31.3572 10.529 33.5039 5.81183 36.7202C2.21325 39.1743 0.229248 42.2924 0.229248 45.5655V49.3113C0.229248 50.4764 0.691665 51.595 1.51575 52.4165C2.33983 53.2406 3.45583 53.703 4.62091 53.703H30.3897Z", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M42.2085 29.1458C34.722 29.1458 28.646 35.2218 28.646 42.7083C28.646 50.1948 34.722 56.2708 42.2085 56.2708C49.695 56.2708 55.771 50.1948 55.771 42.7083C55.771 35.2218 49.695 29.1458 42.2085 29.1458ZM40.271 42.7083V49.1666C40.271 50.2361 41.139 51.1041 42.2085 51.1041C43.278 51.1041 44.146 50.2361 44.146 49.1666V42.7083C44.146 41.6388 43.278 40.7708 42.2085 40.7708C41.139 40.7708 40.271 41.6388 40.271 42.7083ZM42.2085 34.3124C43.6345 34.3124 44.7918 35.4698 44.7918 36.8958C44.7918 38.3218 43.6345 39.4791 42.2085 39.4791C40.7825 39.4791 39.6252 38.3218 39.6252 36.8958C39.6252 35.4698 40.7825 34.3124 42.2085 34.3124Z", "fill", "white"], ["width", "69", "height", "69", "viewBox", "0 0 69 69", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M38.2073 32.8369H6.96437C5.25925 32.8369 3.87695 31.4546 3.87695 29.7495V19.4161C3.87695 17.711 5.25925 16.3289 6.96437 16.3289H22.2205C24.1298 20.5509 28.3848 23.5003 33.3064 23.5003C38.228 23.5003 42.4815 20.5509 44.3898 16.3289H48.6757C50.3808 16.3289 51.7631 17.711 51.7631 19.4161V29.7495C51.7631 31.3943 50.477 32.7386 48.8556 32.8318V29.0983C48.8556 26.1687 46.464 23.7711 43.5344 23.7711C40.6059 23.7711 38.2073 26.1699 38.2073 29.0983V32.8369ZM9.02368 23.167H21.7007C22.2982 23.167 22.7831 22.682 22.7831 22.0847C22.7831 21.4872 22.2982 21.0023 21.7007 21.0023H9.02368C8.42635 21.0023 7.94132 21.4872 7.94132 22.0847C7.94132 22.682 8.42635 23.167 9.02368 23.167ZM9.02368 28.1635H32.3129C32.9104 28.1635 33.3953 27.6784 33.3953 27.0811C33.3953 26.4838 32.9104 25.9987 32.3129 25.9987H9.02368C8.42635 25.9987 7.94132 26.4838 7.94132 27.0811C7.94132 27.6784 8.42635 28.1635 9.02368 28.1635ZM45.0402 62.6606H24.3873C24.3567 62.5927 24.3231 62.5263 24.2866 62.4615C23.6222 61.2748 23.3136 60.1118 23.3136 58.753V45.5159C23.3136 43.9435 24.6012 42.6618 26.1676 42.6618C27.1051 42.6618 27.9356 43.1128 28.4579 43.8129V43.3383C28.4579 41.7303 29.7691 40.4131 31.377 40.4131C32.5281 40.4131 33.5249 41.0836 34.0055 42.0567C34.0351 40.3123 35.4769 38.9001 37.2214 38.9001C38.764 38.9001 40.0574 39.9919 40.372 41.4455V29.0983C40.372 27.3598 41.796 25.9358 43.5344 25.9358C45.2729 25.9358 46.6909 27.3598 46.6909 29.0983V44.1096L47.7827 44.1392C50.9274 44.2164 53.1227 46.1685 53.1227 49.3132L52.6302 54.8548C52.4463 56.9493 51.1351 58.5632 49.3194 59.6193L46.1094 61.4883C45.6195 61.7739 45.2552 62.1787 45.0402 62.6606ZM24.6131 64.8253H44.816V67.6471H24.6131V64.8253ZM33.3064 21.3356C27.8032 21.3356 23.3136 16.8489 23.3136 11.3458C23.3136 5.84263 27.8032 1.35303 33.3064 1.35303C38.8096 1.35303 43.2961 5.84263 43.2961 11.3458C43.2961 16.8489 38.8096 21.3356 33.3064 21.3356ZM31.9947 12.2253L29.7618 9.99237C29.1834 9.41399 28.2444 9.41399 27.6661 9.99237C27.0877 10.5737 27.0877 11.5098 27.6661 12.0881L30.9484 15.3733C31.5266 15.9517 32.4657 15.9517 33.0441 15.3733C35.0236 13.3938 36.9791 11.3935 38.9497 9.40506C39.5251 8.8237 39.5221 7.88773 38.9437 7.31233C38.3653 6.73692 37.4264 6.7399 36.851 7.31828L31.9947 12.2253Z", "fill", "white"], [1, "secion", "flex", "flex-column", "items-center"], [1, "cleaning-service", "top-title-service"], ["width", "43", "height", "41", "viewBox", "0 0 43 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "cleaner", "cleaner-margin"], ["d", "M22.1839 23.2069C22.0934 23.2065 22.0038 23.1882 21.9204 23.1529C21.837 23.1177 21.7614 23.0662 21.6981 23.0016L19.0222 20.3258C18.8948 20.1975 18.8232 20.0241 18.8232 19.8433C18.8232 19.6625 18.8948 19.489 19.0222 19.3608L38.1841 0.199004C38.3123 0.0715432 38.4857 0 38.6665 0C38.8473 0 39.0208 0.0715432 39.149 0.199004L41.8317 2.88166C41.9591 3.00988 42.0307 3.18333 42.0307 3.36413C42.0307 3.54492 41.9591 3.71837 41.8317 3.84659L22.6356 23.0084C22.515 23.1284 22.3539 23.1992 22.1839 23.2069ZM20.4457 19.7851L22.1566 21.496L40.3808 3.29911L38.67 1.58824L20.4457 19.7851Z", "fill", "#91D6AA"], ["d", "M26.1936 19.1349C26.1036 19.1354 26.0143 19.1182 25.9309 19.0841C25.8475 19.05 25.7717 18.9999 25.7077 18.9364L23.0319 16.2606C22.9678 16.197 22.9169 16.1213 22.8821 16.0379C22.8474 15.9545 22.8295 15.8651 22.8295 15.7747C22.8295 15.6844 22.8474 15.5949 22.8821 15.5116C22.9169 15.4282 22.9678 15.3525 23.0319 15.2888C23.1602 15.1614 23.3336 15.0898 23.5144 15.0898C23.6952 15.0898 23.8686 15.1614 23.9969 15.2888L26.6795 17.9715C26.7737 18.0676 26.8375 18.1893 26.8629 18.3214C26.8882 18.4535 26.8741 18.5902 26.8223 18.7143C26.7704 18.8384 26.6832 18.9445 26.5714 19.0193C26.4595 19.0941 26.3282 19.1343 26.1936 19.1349ZM18.9532 33.6774C18.8631 33.6779 18.7739 33.6606 18.6905 33.6266C18.6071 33.5925 18.5313 33.5423 18.4673 33.4789L8.49632 23.5011C8.4329 23.4371 8.38272 23.3613 8.34866 23.2779C8.3146 23.1945 8.29734 23.1052 8.29786 23.0152C8.29865 22.8316 8.36966 22.6553 8.49632 22.5224L11.747 19.2786C12.285 18.7373 12.9248 18.3078 13.6295 18.0146C14.3342 17.7215 15.0899 17.5706 15.8531 17.5706C16.6163 17.5706 17.372 17.7215 18.0767 18.0146C18.7814 18.3078 19.4211 18.7373 19.9592 19.2786L22.6966 22.016C23.7794 23.1014 24.3875 24.5719 24.3875 26.105C24.3875 27.6381 23.7794 29.1086 22.6966 30.194L19.4459 33.472C19.3141 33.6012 19.1377 33.6747 18.9532 33.6774ZM9.9403 23.0152L18.9532 32.0281L21.6906 29.2907C22.5181 28.4629 22.9829 27.3404 22.9829 26.17C22.9829 24.9996 22.5181 23.8771 21.6906 23.0494L18.9532 20.312C18.1255 19.4845 17.003 19.0197 15.8326 19.0197C14.6622 19.0197 13.5397 19.4845 12.7119 20.312L9.9403 23.0152Z", "fill", "#91D6AA"], ["d", "M21.5402 30.5841C21.4502 30.5846 21.3609 30.5674 21.2775 30.5333C21.1941 30.4993 21.1183 30.4491 21.0544 30.3857L11.5829 20.9143C11.4541 20.7854 11.3817 20.6106 11.3817 20.4284C11.3817 20.2461 11.4541 20.0713 11.5829 19.9425C11.7118 19.8136 11.8866 19.7412 12.0688 19.7412C12.2511 19.7412 12.4259 19.8136 12.5547 19.9425L22.0261 29.4139C22.0903 29.4775 22.1412 29.5532 22.1759 29.6366C22.2107 29.72 22.2286 29.8094 22.2286 29.8998C22.2286 29.9901 22.2107 30.0796 22.1759 30.163C22.1412 30.2464 22.0903 30.322 22.0261 30.3857C21.9622 30.4491 21.8863 30.4993 21.803 30.5333C21.7196 30.5674 21.6303 30.5846 21.5402 30.5841ZM14.9089 40.9999C14.7294 40.9992 14.5573 40.9279 14.4298 40.8015L10.6385 37.0102C10.5517 36.9217 10.4906 36.8113 10.4617 36.6907C10.4328 36.5702 10.4371 36.4441 10.4743 36.3258L11.4598 33.3626L8.49652 34.3344C8.37706 34.3698 8.25018 34.372 8.12958 34.3406C8.00898 34.3093 7.89923 34.2456 7.81217 34.1564L1.16712 27.5388C1.0757 27.4466 1.0124 27.3302 0.984609 27.2034C0.956818 27.0766 0.965684 26.9444 1.01017 26.8225C1.05466 26.7005 1.13294 26.5937 1.23586 26.5145C1.33878 26.4353 1.4621 26.3871 1.59142 26.3754C2.94045 26.2876 4.25342 25.9028 5.43646 25.2486C6.6195 24.5943 7.64339 23.6868 8.43493 22.5909C8.54784 22.4499 8.71193 22.3593 8.89141 22.3387C9.07089 22.3182 9.2512 22.3695 9.39302 22.4814C9.46383 22.5374 9.52286 22.6068 9.56672 22.6857C9.61058 22.7646 9.6384 22.8514 9.64858 22.9411C9.65876 23.0308 9.65109 23.1216 9.62602 23.2083C9.60095 23.295 9.55898 23.3759 9.50251 23.4463C7.96153 25.5738 5.67356 27.0405 3.09699 27.5525L8.49652 32.9041L12.3563 31.6175C12.4763 31.5785 12.6047 31.5735 12.7275 31.6029C12.8502 31.6324 12.9623 31.6952 13.0516 31.7845C13.1408 31.8737 13.2036 31.9859 13.2331 32.1086C13.2626 32.2313 13.2575 32.3598 13.2185 32.4798L11.9183 36.3395L14.4367 38.8648C14.9487 36.2882 16.4153 34.0002 18.5428 32.4592C18.6125 32.3997 18.6935 32.3548 18.7809 32.3272C18.8683 32.2995 18.9603 32.2897 19.0516 32.2984C19.1429 32.307 19.2315 32.3339 19.3121 32.3774C19.3928 32.4209 19.4639 32.4802 19.5212 32.5518C19.5786 32.6233 19.6209 32.7056 19.6458 32.7938C19.6707 32.8821 19.6776 32.9744 19.6662 33.0653C19.6547 33.1563 19.625 33.244 19.579 33.3233C19.533 33.4026 19.4715 33.4718 19.3982 33.5268C18.3026 34.3187 17.3954 35.3427 16.7412 36.5257C16.087 37.7086 15.702 39.0214 15.6138 40.3703C15.6018 40.5003 15.5529 40.6241 15.4729 40.7271C15.3928 40.8302 15.285 40.9082 15.1621 40.952C15.0815 40.9839 14.9956 41.0002 14.9089 40.9999Z", "fill", "#91D6AA"], ["d", "M7.12804 28.6817C6.94654 28.6871 6.77031 28.6202 6.63812 28.4957C6.50593 28.3712 6.4286 28.1993 6.42316 28.0178C6.41771 27.8363 6.48459 27.6601 6.60908 27.5279C6.73357 27.3957 6.90548 27.3184 7.08698 27.313C7.40636 27.2937 7.71451 27.188 7.97849 27.0072C8.24247 26.8264 8.45235 26.5773 8.58571 26.2864C8.63064 26.2082 8.69054 26.1397 8.76197 26.0846C8.83341 26.0296 8.91499 25.9892 9.00205 25.9656C9.08911 25.9421 9.17995 25.936 9.26938 25.9476C9.35881 25.9592 9.44508 25.9883 9.52327 26.0332C9.60146 26.0782 9.67003 26.138 9.72507 26.2095C9.78011 26.2809 9.82054 26.3625 9.84405 26.4496C9.86756 26.5366 9.8737 26.6275 9.8621 26.7169C9.85051 26.8063 9.82141 26.8926 9.77648 26.9708C9.52682 27.457 9.15538 27.8702 8.69841 28.1701C8.24143 28.4699 7.71452 28.6462 7.1691 28.6817H7.12804ZM8.68836 31.4191H8.44199C8.26049 31.4045 8.09219 31.3185 7.97412 31.1799C7.85605 31.0413 7.79787 30.8615 7.81239 30.68C7.82691 30.4985 7.91294 30.3302 8.05155 30.2121C8.19015 30.094 8.36999 30.0358 8.55149 30.0504C9.09213 30.0983 9.18794 29.8861 9.23584 29.7629C9.27359 29.6811 9.32707 29.6076 9.39324 29.5465C9.45941 29.4854 9.53697 29.4379 9.62148 29.4068C9.706 29.3756 9.79583 29.3614 9.88583 29.365C9.97583 29.3686 10.0642 29.3899 10.146 29.4276C10.2278 29.4653 10.3014 29.5188 10.3625 29.585C10.4236 29.6512 10.4711 29.7287 10.5022 29.8132C10.5333 29.8978 10.5475 29.9876 10.5439 30.0776C10.5404 30.1676 10.5191 30.256 10.4814 30.3378C10.3247 30.6765 10.0701 30.9605 9.75056 31.1532C9.43099 31.3459 9.06103 31.4385 8.68836 31.4191ZM13.9715 36.2095C13.8002 36.2102 13.6349 36.1466 13.5082 36.0313C13.3815 35.916 13.3026 35.7574 13.2872 35.5868C13.1722 34.8299 13.2634 34.056 13.5512 33.3466C13.8391 32.6373 14.3129 32.0186 14.9228 31.5559C14.9947 31.5011 15.0767 31.461 15.1641 31.4378C15.2515 31.4147 15.3426 31.409 15.4322 31.4211C15.5218 31.4332 15.6081 31.4628 15.6863 31.5082C15.7645 31.5537 15.8329 31.6141 15.8877 31.686C15.9425 31.7578 15.9827 31.8398 16.0058 31.9272C16.0289 32.0146 16.0346 32.1057 16.0226 32.1953C16.0105 32.285 15.9809 32.3713 15.9354 32.4495C15.89 32.5276 15.8296 32.5961 15.7577 32.6509C15.3341 32.9739 15.0073 33.407 14.813 33.903C14.6187 34.399 14.5644 34.9388 14.6559 35.4636C14.6644 35.5535 14.6549 35.6442 14.6282 35.7305C14.6014 35.8168 14.5578 35.8969 14.4999 35.9663C14.442 36.0356 14.3709 36.0928 14.2908 36.1346C14.2107 36.1763 14.1231 36.2018 14.0331 36.2095H13.9715Z", "fill", "#91D6AA"], [1, "carla-service-text"], [1, "text-primary"], [1, "desc"], [2, "margin", "0"], [2, "font-size", "16px"], [1, "flex", "content-center", "margin-top30"], ["routerLink", "/contact-us", 1, "btn-secondary"], [3, "paymentStatus", "bookingOrderId"], [1, "popup-overlay"], [1, "loading-spinner"], [3, "close", "goHome", "bookAnother", "paymentStatus", "bookingOrderId"], [1, "popup-container"], [1, "popup-content"], [1, "cancel-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "#EF4444", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "payment-details"], [1, "actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "detail-row"], [1, "status-cancelled"], [1, "failed-icon"], ["d", "M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "#EF4444", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "status-failed"]], template: function BookNowComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 6);
      \u0275\u0275listener("ngSubmit", function BookNowComponent_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "mat-form-field", 9)(14, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 11);
      \u0275\u0275element(16, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "mat-label");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 13);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8)(23, "mat-form-field", 9)(24, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 11)(26, "g", 14);
      \u0275\u0275element(27, "path", 15)(28, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "defs")(30, "clipPath", 17);
      \u0275\u0275element(31, "rect", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "mat-label");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 19);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 8)(38, "mat-form-field", 9)(39, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 20);
      \u0275\u0275element(41, "path", 21)(42, "path", 22)(43, "path", 23)(44, "path", 24)(45, "path", 25)(46, "path", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "mat-label");
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 27);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 8)(53, "mat-form-field", 9)(54, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 28);
      \u0275\u0275element(56, "path", 29)(57, "path", 30)(58, "path", 31);
      \u0275\u0275elementStart(59, "defs")(60, "linearGradient", 32);
      \u0275\u0275element(61, "stop", 33)(62, "stop", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275text(63, " +974 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "mat-label");
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 35);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 8)(70, "mat-form-field", 9)(71, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 36)(73, "g", 37);
      \u0275\u0275element(74, "path", 38)(75, "path", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "defs")(77, "clipPath", 40);
      \u0275\u0275element(78, "rect", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(79, "mat-label");
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "mat-select", 41);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementStart(84, "mat-option", 42);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "mat-option", 42);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 8)(91, "mat-form-field", 9)(92, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(93, "svg", 36);
      \u0275\u0275element(94, "path", 43)(95, "path", 44)(96, "path", 45)(97, "path", 46)(98, "path", 47)(99, "path", 48)(100, "path", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(101, "mat-label");
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "mat-select", 50);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementStart(106, "mat-option", 51);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "mat-option", 51);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "mat-option", 51);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "mat-option", 51);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275text(120);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "mat-option", 52);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "mat-option", 52);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(130, "div", 8)(131, "mat-form-field", 9)(132, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(133, "svg", 53)(134, "g", 54);
      \u0275\u0275element(135, "path", 55)(136, "path", 56)(137, "path", 57)(138, "path", 58)(139, "path", 59)(140, "path", 60)(141, "path", 61)(142, "path", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "defs")(144, "clipPath", 63);
      \u0275\u0275element(145, "rect", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(146, "mat-label");
      \u0275\u0275text(147);
      \u0275\u0275pipe(148, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "input", 65);
      \u0275\u0275listener("click", function BookNowComponent_Template_input_click_149_listener() {
        \u0275\u0275restoreView(_r1);
        const picker_r2 = \u0275\u0275reference(151);
        return \u0275\u0275resetView(ctx.openDatePicker(picker_r2));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(150, "mat-datepicker", null, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 8)(153, "mat-form-field", 9)(154, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(155, "svg", 36);
      \u0275\u0275element(156, "path", 66)(157, "path", 67)(158, "path", 68)(159, "path", 69)(160, "path", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(161, "mat-label");
      \u0275\u0275text(162);
      \u0275\u0275pipe(163, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "mat-select", 71);
      \u0275\u0275pipe(165, "translate");
      \u0275\u0275elementStart(166, "mat-option", 42);
      \u0275\u0275text(167);
      \u0275\u0275pipe(168, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "mat-option", 42);
      \u0275\u0275text(170);
      \u0275\u0275pipe(171, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 8)(173, "mat-form-field", 9)(174, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(175, "svg", 36)(176, "g", 72);
      \u0275\u0275element(177, "path", 73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "defs")(179, "clipPath", 74);
      \u0275\u0275element(180, "rect", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(181, "mat-label");
      \u0275\u0275text(182);
      \u0275\u0275pipe(183, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "mat-select", 75);
      \u0275\u0275pipe(185, "translate");
      \u0275\u0275elementStart(186, "mat-option", 42);
      \u0275\u0275text(187);
      \u0275\u0275pipe(188, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "mat-option", 42);
      \u0275\u0275text(190);
      \u0275\u0275pipe(191, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "mat-option", 42);
      \u0275\u0275text(193);
      \u0275\u0275pipe(194, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "mat-option", 42);
      \u0275\u0275text(196);
      \u0275\u0275pipe(197, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(198, "div", 8)(199, "mat-form-field", 9)(200, "mat-icon", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(201, "svg", 36);
      \u0275\u0275element(202, "path", 76)(203, "path", 77)(204, "path", 78)(205, "path", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(206, "mat-label");
      \u0275\u0275text(207);
      \u0275\u0275pipe(208, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "mat-select", 80);
      \u0275\u0275pipe(210, "translate");
      \u0275\u0275elementStart(211, "mat-option", 42);
      \u0275\u0275text(212);
      \u0275\u0275pipe(213, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "mat-option", 42);
      \u0275\u0275text(215);
      \u0275\u0275pipe(216, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(217, "small", 81);
      \u0275\u0275text(218);
      \u0275\u0275pipe(219, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(220, BookNowComponent_Conditional_220_Template, 3, 3, "p", 82)(221, BookNowComponent_Conditional_221_Template, 2, 1, "p", 83);
      \u0275\u0275elementStart(222, "div", 84)(223, "div", 85)(224, "span");
      \u0275\u0275text(225);
      \u0275\u0275pipe(226, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p");
      \u0275\u0275text(228);
      \u0275\u0275elementStart(229, "span");
      \u0275\u0275text(230, "QAR");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "button", 86);
      \u0275\u0275template(232, BookNowComponent_Conditional_232_Template, 3, 3)(233, BookNowComponent_Conditional_233_Template, 2, 3);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(234, "div", 87)(235, "div", 88)(236, "div", 89)(237, "div", 90)(238, "div");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(239, "svg", 91)(240, "g", 92);
      \u0275\u0275element(241, "path", 93)(242, "path", 94)(243, "path", 95)(244, "path", 96)(245, "path", 97)(246, "path", 98)(247, "path", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "defs")(249, "clipPath", 100);
      \u0275\u0275element(250, "rect", 101);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(251, "div")(252, "h3");
      \u0275\u0275text(253);
      \u0275\u0275pipe(254, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "p");
      \u0275\u0275text(256);
      \u0275\u0275pipe(257, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "div", 90)(259, "div");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(260, "svg", 102);
      \u0275\u0275element(261, "path", 103);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(262, "div")(263, "h3");
      \u0275\u0275text(264);
      \u0275\u0275pipe(265, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "p");
      \u0275\u0275text(267);
      \u0275\u0275pipe(268, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(269, "div", 90)(270, "div");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(271, "svg", 104);
      \u0275\u0275element(272, "path", 105)(273, "path", 106)(274, "path", 107);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(275, "div")(276, "h3");
      \u0275\u0275text(277);
      \u0275\u0275pipe(278, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "p");
      \u0275\u0275text(280);
      \u0275\u0275pipe(281, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(282, "div", 90)(283, "div");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(284, "svg", 108);
      \u0275\u0275element(285, "path", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(286, "div")(287, "h3");
      \u0275\u0275text(288);
      \u0275\u0275pipe(289, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "p");
      \u0275\u0275text(291);
      \u0275\u0275pipe(292, "translate");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(293, "div", 110)(294, "div", 111);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(295, "svg", 112);
      \u0275\u0275element(296, "path", 113)(297, "path", 114)(298, "path", 115)(299, "path", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(300, "h3", 117);
      \u0275\u0275text(301);
      \u0275\u0275pipe(302, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "h1", 118);
      \u0275\u0275text(304);
      \u0275\u0275pipe(305, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "div")(307, "div", 119)(308, "h3", 120);
      \u0275\u0275text(309);
      \u0275\u0275pipe(310, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(311, "p", 121);
      \u0275\u0275text(312);
      \u0275\u0275pipe(313, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div", 122)(315, "button", 123);
      \u0275\u0275text(316);
      \u0275\u0275pipe(317, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(318, BookNowComponent_Conditional_318_Template, 1, 2, "app-payment-success-popup", 124)(319, BookNowComponent_Conditional_319_Template, 20, 13, "div", 125)(320, BookNowComponent_Conditional_320_Template, 20, 13, "div", 125);
    }
    if (rf & 2) {
      let tmp_21_0;
      let tmp_24_0;
      let tmp_27_0;
      let tmp_30_0;
      let tmp_33_0;
      let tmp_36_0;
      const picker_r2 = \u0275\u0275reference(151);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 86, "form.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 88, "form.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.bookingForm);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 90, "form.fullName"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(21, 92, "form.fullName"));
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 94, "form.email"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(36, 96, "form.email"));
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 98, "form.address"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(51, 100, "form.address"));
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 102, "form.phone"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(68, 104, "form.phone"));
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 106, "form.hours"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(83, 108, "form.hours"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 110, "form.hourOptions.option1"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 8);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 112, "form.hourOptions.option2"));
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 114, "form.arrivalTime"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(105, 116, "form.arrivalTime"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(107, 118, "form.arrivalTimeOptions.option1"))("disabled", ((tmp_21_0 = ctx.bookingForm.get("hours")) == null ? null : tmp_21_0.value) !== 4);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 120, "form.arrivalTimeOptions.option1"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(111, 122, "form.arrivalTimeOptions.option2"))("disabled", ((tmp_24_0 = ctx.bookingForm.get("hours")) == null ? null : tmp_24_0.value) !== 4);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 124, "form.arrivalTimeOptions.option2"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(115, 126, "form.arrivalTimeOptions.option3"))("disabled", ((tmp_27_0 = ctx.bookingForm.get("hours")) == null ? null : tmp_27_0.value) !== 4);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 128, "form.arrivalTimeOptions.option3"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(119, 130, "form.arrivalTimeOptions.option4"))("disabled", ((tmp_30_0 = ctx.bookingForm.get("hours")) == null ? null : tmp_30_0.value) !== 4);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 132, "form.arrivalTimeOptions.option4"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(123, 134, "form.arrivalTimeOptions.option5"))("disabled", ((tmp_33_0 = ctx.bookingForm.get("hours")) == null ? null : tmp_33_0.value) !== 8);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(125, 136, "form.arrivalTimeOptions.option5"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", \u0275\u0275pipeBind1(127, 138, "form.arrivalTimeOptions.option6"))("disabled", ((tmp_36_0 = ctx.bookingForm.get("hours")) == null ? null : tmp_36_0.value) !== 8);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 140, "form.arrivalTimeOptions.option6"));
      \u0275\u0275advance(19);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 142, "form.arrivalDate"));
      \u0275\u0275advance(2);
      \u0275\u0275property("matDatepicker", picker_r2)("min", ctx.minDate)("max", ctx.maxDate);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(163, 144, "form.materials"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(165, 146, "form.materials"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", true);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(168, 148, "form.materialOptions.option1"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", false);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(171, 150, "form.materialOptions.option2"));
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(183, 152, "form.numberOfCleaners"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(185, 154, "form.numberOfCleaners"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(188, 156, "form.cleanerOptions.option1"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 2);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(191, 158, "form.cleanerOptions.option2"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 3);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(194, 160, "form.cleanerOptions.option3"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(197, 162, "form.cleanerOptions.option4"));
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(208, 164, "form.paymentOption"));
      \u0275\u0275advance(2);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(210, 166, "form.paymentOption"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "pay_now");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(213, 168, "form.paymentOptions.payNow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", "pay_later");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(216, 170, "form.paymentOptions.payLater"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(219, 172, "form.paymentNote"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.sent ? 220 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.paymentError ? 221 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(226, 174, "form.priceLabel"), ": ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.price, " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.bookingForm.invalid || ctx.isProcessingPayment);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isProcessingPayment ? 232 : 233);
      \u0275\u0275advance(21);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(254, 176, "steps.step1.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(257, 178, "steps.step1.description"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(265, 180, "steps.step2.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(268, 182, "steps.step2.description"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(278, 184, "steps.step3.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(281, 186, "steps.step3.description"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(289, 188, "steps.step4.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(292, 190, "steps.step4.description"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(302, 192, "shared.CarlaMaidCleaningServices"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(305, 194, "shared.needsHelp"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(310, 196, "shared.HaveQuestionsBeforeBooking"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(313, 198, "shared.bookNowDesc"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(317, 200, "shared.ContactUsToday"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showPaymentSuccessPopup ? 318 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPaymentCancelPopup ? 319 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPaymentFailedPopup ? 320 : -1);
    }
  }, dependencies: [
    MatSelectModule,
    MatFormField,
    MatLabel,
    MatPrefix,
    MatSelect,
    MatOption,
    TranslateModule,
    TranslatePipe,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    PatternValidator,
    FormGroupDirective,
    FormControlName,
    MatInputModule,
    MatInput,
    RouterLink,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggleIcon,
    PaymentSuccessPopupComponent
  ], styles: ['\n\n.hero-img[_ngcontent-%COMP%] {\n  background-image: url("./media/bookNowHero.png");\n  background-size: cover;\n  background-position: center;\n}\n.side-info[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 2rem;\n}\n.form-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 10px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.book-now-form[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 1.2rem;\n}\n.book-now-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.book-now-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  border-radius: 10px;\n  padding: 1.7rem 1.5rem;\n}\n.book-now-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  width: 48%;\n}\n.book-now-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.book-now-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .payment-note[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n  margin-top: 5px;\n  display: block;\n}\n.book-now-form[_ngcontent-%COMP%]   .inputs-holder[_ngcontent-%COMP%] {\n  gap: 3%;\n}\n.book-now-form[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.book-now-form[_ngcontent-%COMP%]   .price-section[_ngcontent-%COMP%] {\n  display: flex;\n}\n.book-now-form[_ngcontent-%COMP%]   .price-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(158, 158, 158, 0.9333333333);\n}\n.book-now-form[_ngcontent-%COMP%]   .price-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #0346FF;\n  margin: 0;\n}\n.book-now-form[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: _ngcontent-%COMP%_spin 1s ease-in-out infinite;\n  margin-right: 8px;\n}\n.book-now-form[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  margin: 10px 0;\n  font-size: 14px;\n}\n.book-now-form[_ngcontent-%COMP%]   .warn.warn-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.book-now-form[_ngcontent-%COMP%]   .warn.warn-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n  .gray-option {\n  color: #666666 !important;\n}\n  .green-option {\n  color: green !important;\n}\n@media screen and (min-width: 801px) and (max-width: 1283px) {\n    {\n    font-size: 11px !important;\n  }\n}\n.info[_ngcontent-%COMP%] {\n  color: white;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.info[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  gap: 1rem;\n  align-items: center;\n  margin: 10px 0;\n}\n.info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.secion[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n}\n.desc[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: center;\n}\n.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  padding: 15px 0;\n}\n.desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n@media (max-width: 800px) {\n    .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {\n    height: 100% !important;\n    vertical-align: sub !important;\n  }\n  .hero-img[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hero-img[_ngcontent-%COMP%]   .side-info[_ngcontent-%COMP%], \n   .hero-img[_ngcontent-%COMP%]   .book-now-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .book-now-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .inputs-holder[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .book-now-form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .form-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  p.form-desc[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 425px) {\n  .desc[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.popup-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 2rem;\n  max-width: 500px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n}\n.popup-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n}\n.popup-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n}\n.cancel-icon[_ngcontent-%COMP%], \n.failed-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.cancel-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.failed-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.payment-details[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin: 1rem 0;\n}\n.payment-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.payment-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.payment-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n  color: #333;\n}\n.payment-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #666;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  color: #EF4444 !important;\n  font-weight: 600;\n}\n.status-failed[_ngcontent-%COMP%] {\n  color: #EF4444 !important;\n  font-weight: 600;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 5px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #0188FF,\n      #0346FF);\n  color: white;\n  border: none;\n}\n.actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(1, 136, 255, 0.3);\n}\n.actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #666;\n  border: 2px solid #ddd;\n}\n.actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: #999;\n  color: #333;\n}\n@media (max-width: 600px) {\n  .popup-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    width: 95%;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=book-now.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookNowComponent, { className: "BookNowComponent" });
})();
export {
  BookNowComponent
};
//# sourceMappingURL=chunk-RSXA3COP.mjs.map
