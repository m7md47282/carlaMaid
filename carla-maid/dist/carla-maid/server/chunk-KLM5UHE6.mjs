import './polyfills.server.mjs';
import {
  BookingService,
  PaymentDataService
} from "./chunk-SVHP6IXP.mjs";
import {
  PaymentService
} from "./chunk-BCMXJ4SR.mjs";
import "./chunk-XB3OBPTA.mjs";
import {
  ActivatedRoute,
  Router
} from "./chunk-VAXAWVT6.mjs";
import {
  AnalyticsService
} from "./chunk-EGVPGVWF.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ULFMFSOZ.mjs";
import "./chunk-RTKK4VRH.mjs";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-REGLKICM.mjs";
import "./chunk-LBJNHE26.mjs";

// src/app/book-now/payment-success/payment-success.component.ts
function PaymentSuccessComponent_Conditional_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
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
function PaymentSuccessComponent_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
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
function PaymentSuccessComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 9)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, PaymentSuccessComponent_Conditional_11_Conditional_13_Template, 6, 4, "div", 9)(14, PaymentSuccessComponent_Conditional_11_Conditional_14_Template, 6, 4, "div", 9);
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
var PaymentSuccessComponent = class _PaymentSuccessComponent {
  route;
  router;
  paymentService;
  bookingService;
  paymentDataService;
  analyticsService;
  paymentStatus;
  orderId;
  bookingOrderId;
  isCreatingBooking = false;
  constructor(route, router, paymentService, bookingService, paymentDataService, analyticsService) {
    this.route = route;
    this.router = router;
    this.paymentService = paymentService;
    this.bookingService = bookingService;
    this.paymentDataService = paymentDataService;
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    const storedOrderId = sessionStorage.getItem("paymentOrderId");
    this.orderId = storedOrderId || this.route.snapshot.queryParams["orderId"];
    if (this.orderId) {
      this.checkPaymentStatus();
    }
  }
  checkPaymentStatus() {
    if (this.orderId) {
      this.paymentService.checkPaymentStatus(this.orderId).subscribe({
        next: (status) => {
          this.paymentStatus = status;
          if (status.status === "completed") {
            this.analyticsService.trackSkipCashPaymentSuccess(status.orderId, status.amount || 0, status.currency || "QAR", "cleaning_service");
            this.createBookingWithPayment(status);
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
      this.isCreatingBooking = true;
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
                  sessionStorage.removeItem("paymentOrderId");
                  sessionStorage.removeItem("paymentAmount");
                  sessionStorage.removeItem("bookingData");
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
                } else {
                  console.error("Failed to create booking with payment:", response.error);
                }
                this.isCreatingBooking = false;
              },
              error: (error) => {
                console.error("Error creating booking with payment:", error);
                this.isCreatingBooking = false;
              }
            });
          } else {
            console.error("Failed to retrieve payment data:", paymentDataResponse.error);
            this.isCreatingBooking = false;
          }
        },
        error: (error) => {
          console.error("Error retrieving payment data:", error);
          this.isCreatingBooking = false;
        }
      });
    } else {
      console.error("Missing payment order ID");
      this.isCreatingBooking = false;
    }
  }
  goToHome() {
    this.router.navigate(["/"]);
  }
  bookAnother() {
    this.router.navigate(["/book-now"]);
  }
  static \u0275fac = function PaymentSuccessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentSuccessComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(BookingService), \u0275\u0275directiveInject(PaymentDataService), \u0275\u0275directiveInject(AnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentSuccessComponent, selectors: [["app-payment-success"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 13, consts: [[1, "payment-success-container"], [1, "success-card"], [1, "success-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "payment-details"], [1, "actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "detail-row"]], template: function PaymentSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, PaymentSuccessComponent_Conditional_11_Template, 15, 11, "div", 5);
      \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
      \u0275\u0275listener("click", function PaymentSuccessComponent_Template_button_click_13_listener() {
        return ctx.goToHome();
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 8);
      \u0275\u0275listener("click", function PaymentSuccessComponent_Template_button_click_16_listener() {
        return ctx.bookAnother();
      });
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "payment.success.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "payment.success.message"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.paymentStatus ? 11 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, "payment.backToHome"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "payment.bookAnother"), " ");
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.payment-success-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  padding: 20px;\n}\n.success-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);\n  max-width: 500px;\n  width: 100%;\n}\n.success-icon[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #0346FF;\n}\nh1[_ngcontent-%COMP%] {\n  color: #0346FF;\n  margin-bottom: 15px;\n  font-size: 28px;\n}\np[_ngcontent-%COMP%] {\n  color: #4D4D4D;\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n.payment-details[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n  text-align: left;\n  border: 1px solid #E5E7EB;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 10px;\n}\n@media (max-width: 600px) {\n  .success-card[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=payment-success.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentSuccessComponent, { className: "PaymentSuccessComponent" });
})();
export {
  PaymentSuccessComponent
};
//# sourceMappingURL=chunk-KLM5UHE6.mjs.map
