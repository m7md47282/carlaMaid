import {
  PaymentService
} from "./chunk-S7R6PJGY.js";
import "./chunk-I7HUYMRS.js";
import {
  AnalyticsService
} from "./chunk-2EP7Z334.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-4ALVWZRA.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-2HCKQESM.js";
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
  ɵɵtextInterpolate1
} from "./chunk-KOFF5M7E.js";

// src/app/book-now/payment-cancel/payment-cancel.component.ts
function PaymentCancelComponent_Conditional_11_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 4, "payment.orderId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentStatus.orderId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 6, "payment.status"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "payment.status.cancelled"));
  }
}
var PaymentCancelComponent = class _PaymentCancelComponent {
  route;
  router;
  paymentService;
  analyticsService;
  paymentStatus;
  orderId;
  constructor(route, router, paymentService, analyticsService) {
    this.route = route;
    this.router = router;
    this.paymentService = paymentService;
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
          this.analyticsService.trackEvent("payment_cancelled", {
            order_id: status.orderId,
            amount: status.amount,
            currency: status.currency
          });
          sessionStorage.removeItem("bookingData");
          sessionStorage.removeItem("paymentOrderId");
          sessionStorage.removeItem("paymentAmount");
        },
        error: (error) => {
          console.error("Error checking payment status:", error);
        }
      });
    }
  }
  tryAgain() {
    this.router.navigate(["/book-now"]);
  }
  goToHome() {
    this.router.navigate(["/"]);
  }
  static \u0275fac = function PaymentCancelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentCancelComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(AnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentCancelComponent, selectors: [["app-payment-cancel"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 13, consts: [[1, "payment-cancel-container"], [1, "cancel-card"], [1, "cancel-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "#EF4444", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "payment-details"], [1, "actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "detail-row"], [1, "status-cancelled"]], template: function PaymentCancelComponent_Template(rf, ctx) {
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
      \u0275\u0275template(11, PaymentCancelComponent_Conditional_11_Template, 14, 10, "div", 5);
      \u0275\u0275elementStart(12, "div", 6)(13, "button", 7);
      \u0275\u0275listener("click", function PaymentCancelComponent_Template_button_click_13_listener() {
        return ctx.tryAgain();
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 8);
      \u0275\u0275listener("click", function PaymentCancelComponent_Template_button_click_16_listener() {
        return ctx.goToHome();
      });
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "payment.cancel.title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "payment.cancel.message"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.paymentStatus ? 11 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, "payment.tryAgain"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "payment.backToHome"), " ");
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.payment-cancel-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 20px;\n}\n.cancel-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n  max-width: 500px;\n  width: 100%;\n}\n.cancel-icon[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  color: #EF4444;\n  margin-bottom: 15px;\n  font-size: 28px;\n}\np[_ngcontent-%COMP%] {\n  color: #6B7280;\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n.payment-details[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n  text-align: left;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  color: #EF4444;\n  font-weight: 600;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #EF4444;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #DC2626;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  color: #374151;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #E5E7EB;\n}\n@media (max-width: 600px) {\n  .cancel-card[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=payment-cancel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentCancelComponent, { className: "PaymentCancelComponent" });
})();
export {
  PaymentCancelComponent
};
//# sourceMappingURL=chunk-RJCKLXL6.js.map
