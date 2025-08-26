import {
  BookingService,
  PaymentDataService
} from "./chunk-7IEIF3PV.js";
import {
  PaymentService
} from "./chunk-S7R6PJGY.js";
import "./chunk-I7HUYMRS.js";
import {
  AnalyticsService
} from "./chunk-2EP7Z334.js";
import {
  ActivatedRoute,
  NavigationEnd,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KOFF5M7E.js";

// src/app/book-now/payment-success/payment-success.component.ts
function PaymentSuccessComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275element(6, "div", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "payment.processing.progressText"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.getProgressPercentage(), "%");
  }
}
function PaymentSuccessComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8);
    \u0275\u0275element(2, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12);
    \u0275\u0275text(11, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 13);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "div", 16);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15)(23, "div", 16);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "payment.processing.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 17, "payment.processing.message"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 19, "payment.processing.warning"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.isSavingPayment)("completed", ctx_r0.paymentSaved);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.paymentSaved ? "\u2713" : ctx_r0.isSavingPayment ? "\u27F3" : "1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 21, "payment.processing.savingPayment"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.isCreatingBooking)("completed", ctx_r0.bookingCreated);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.bookingCreated ? "\u2713" : ctx_r0.isCreatingBooking ? "\u27F3" : "2");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 23, "payment.processing.creatingBooking"));
  }
}
function PaymentSuccessComponent_Conditional_4_Conditional_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "payment.transactionId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentStatus.transactionId);
  }
}
function PaymentSuccessComponent_Conditional_4_Conditional_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "booking.orderId"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.bookingOrderId);
  }
}
function PaymentSuccessComponent_Conditional_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 28)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 28)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, PaymentSuccessComponent_Conditional_4_Conditional_16_Conditional_13_Template, 6, 4, "div", 28)(14, PaymentSuccessComponent_Conditional_4_Conditional_16_Conditional_14_Template, 6, 4, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
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
function PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span");
    \u0275\u0275text(2, "SkipCash ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.skipCashId);
  }
}
function PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span");
    \u0275\u0275text(2, "Payment Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.skipCashStatus);
  }
}
function PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span");
    \u0275\u0275text(2, "Transaction ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.skipCashTransId);
  }
}
function PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span");
    \u0275\u0275text(2, "Service:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.skipCashCustom1);
  }
}
function PaymentSuccessComponent_Conditional_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h3");
    \u0275\u0275text(2, "SkipCash Payment Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_3_Template, 5, 1, "div", 28)(4, PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_4_Template, 5, 1, "div", 28)(5, PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_5_Template, 5, 1, "div", 28)(6, PaymentSuccessComponent_Conditional_4_Conditional_17_Conditional_6_Template, 5, 1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.skipCashId ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.skipCashStatus ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.skipCashTransId ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.skipCashCustom1 ? 6 : -1);
  }
}
function PaymentSuccessComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 19);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 21)(11, "span", 22);
    \u0275\u0275text(12, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, PaymentSuccessComponent_Conditional_4_Conditional_16_Template, 15, 11, "div", 23)(17, PaymentSuccessComponent_Conditional_4_Conditional_17_Template, 7, 4, "div", 24);
    \u0275\u0275elementStart(18, "div", 25)(19, "button", 26);
    \u0275\u0275listener("click", function PaymentSuccessComponent_Conditional_4_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToHome());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 27);
    \u0275\u0275listener("click", function PaymentSuccessComponent_Conditional_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bookAnother());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "payment.success.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "payment.success.message"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "payment.processing.completed"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.paymentStatus ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.skipCashId || ctx_r0.skipCashStatus || ctx_r0.skipCashTransId ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "payment.backToHome"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 15, "payment.bookAnother"), " ");
  }
}
var PaymentSuccessComponent = class _PaymentSuccessComponent {
  route;
  router;
  paymentService;
  bookingService;
  paymentDataService;
  analyticsService;
  // Payment status and order information
  paymentStatus;
  orderId;
  bookingOrderId;
  // Processing states
  isProcessing = true;
  isSavingPayment = false;
  isCreatingBooking = false;
  paymentSaved = false;
  bookingCreated = false;
  // Prevention of double processing
  PROCESSING_KEY = "payment_processing_completed";
  PROCESSING_TIMEOUT = 3e4;
  // 30 seconds timeout
  // SkipCash payment parameters
  skipCashId;
  skipCashStatusId;
  skipCashStatus;
  skipCashTransId;
  skipCashCustom1;
  constructor(route, router, paymentService, bookingService, paymentDataService, analyticsService) {
    this.route = route;
    this.router = router;
    this.paymentService = paymentService;
    this.bookingService = bookingService;
    this.paymentDataService = paymentDataService;
    this.analyticsService = analyticsService;
  }
  ngOnInit() {
    if (this.isPaymentAlreadyProcessed()) {
      this.showAlreadyProcessedState();
      return;
    }
    this.initializePaymentData();
    this.handlePaymentFlow();
    this.setupPageUnloadWarning();
    this.setupRouterEvents();
  }
  /**
   * Setup warning when user tries to close/refresh the page during processing
   */
  setupPageUnloadWarning() {
    window.addEventListener("beforeunload", this.handleBeforeUnload);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  /**
   * Cleanup event listeners when component is destroyed
   */
  ngOnDestroy() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }
  /**
   * Handle beforeunload event
   */
  handleBeforeUnload = (event) => {
    if (this.isProcessing) {
      event.preventDefault();
      event.returnValue = "\u26A0\uFE0F Please do not close this page until your booking is complete. Your payment is being processed.";
      return event.returnValue;
    }
  };
  /**
   * Handle visibility change event to detect page refresh
   */
  handleVisibilityChange = () => {
    if (document.visibilityState === "visible" && this.isPaymentAlreadyProcessed()) {
      console.log("Page refreshed after payment was already processed");
      this.showAlreadyProcessedState();
    }
  };
  /**
   * Setup router events to handle navigation
   */
  setupRouterEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes("payment-success") && this.isPaymentAlreadyProcessed()) {
          this.showAlreadyProcessedState();
        }
      }
    });
  }
  /**
   * Calculate progress percentage based on current state
   */
  getProgressPercentage() {
    let progress = 0;
    if (this.paymentSaved)
      progress += 50;
    if (this.bookingCreated)
      progress += 50;
    return progress;
  }
  /**
   * Initialize payment data from various sources
   */
  initializePaymentData() {
    const urlOrderId = this.route.snapshot.queryParams["order_id"] || "";
    this.orderId = urlOrderId;
    this.extractSkipCashParameters();
  }
  /**
   * Extract SkipCash specific parameters from URL
   */
  extractSkipCashParameters() {
    this.skipCashId = this.route.snapshot.queryParams["id"];
    this.skipCashStatusId = this.route.snapshot.queryParams["statusId"];
    this.skipCashStatus = this.route.snapshot.queryParams["status"];
    this.skipCashTransId = this.route.snapshot.queryParams["transId"];
    this.skipCashCustom1 = this.route.snapshot.queryParams["custom1"];
  }
  /**
   * Handle the payment flow based on available data
   */
  handlePaymentFlow() {
    if (!this.hasValidPaymentData()) {
      console.warn("No valid payment data found, redirecting to home");
      this.router.navigate(["/"]);
      return;
    }
    if (this.orderId) {
      this.savePayment();
    } else if (this.isSkipCashSuccessRedirect()) {
      this.createMinimalPaymentStatus();
      this.completeProcessing();
    }
  }
  /**
   * Check if we have valid payment data to process
   */
  hasValidPaymentData() {
    if (this.arePaymentParametersExpired()) {
      console.warn("Payment parameters are expired");
      return false;
    }
    return !!(this.orderId || this.skipCashId && this.skipCashStatus === "Paid");
  }
  /**
   * Check if payment parameters are expired (older than 1 hour)
   */
  arePaymentParametersExpired() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const timestamp = urlParams.get("timestamp");
      if (!timestamp)
        return false;
      const paramTime = parseInt(timestamp);
      const now = Date.now();
      const oneHour = 60 * 60 * 1e3;
      return now - paramTime > oneHour;
    } catch (error) {
      console.error("Error checking payment parameter expiration:", error);
      return false;
    }
  }
  /**
   * Check if user came directly from SkipCash success redirect
   */
  isSkipCashSuccessRedirect() {
    return !!(this.skipCashId && this.skipCashStatus === "Paid");
  }
  /**
   * Create minimal payment status for SkipCash redirects
   */
  createMinimalPaymentStatus() {
    this.paymentStatus = {
      orderId: this.orderId || "Unknown",
      status: "completed",
      amount: 0,
      // Will be updated when actual data is retrieved
      currency: "QAR"
    };
  }
  /**
   * Save payment information to backend
   */
  savePayment() {
    this.isSavingPayment = true;
    this.paymentService.savePayment({
      orderId: this.orderId || "",
      transactionId: this.skipCashTransId || "",
      statusId: this.skipCashStatusId || "",
      bookingInfo: this.bookingOrderId || ""
    }).subscribe({
      next: () => {
        console.log("Payment saved successfully");
        this.paymentSaved = true;
        this.isSavingPayment = false;
        this.createBookingWithPayment();
      },
      error: (error) => {
        console.error("Failed to save payment:", error);
        this.isSavingPayment = false;
        this.completeProcessing();
      }
    });
  }
  /**
   * Create booking with payment information
   */
  createBookingWithPayment() {
    if (!this.orderId) {
      this.completeProcessing();
      return;
    }
    this.isCreatingBooking = true;
    this.retrievePaymentDataAndCreateBooking(this.orderId);
  }
  /**
   * Retrieve payment data and create booking
   */
  retrievePaymentDataAndCreateBooking(paymentOrderId) {
    this.paymentDataService.getPaymentDataFromMultipleSources(paymentOrderId).subscribe({
      next: (paymentDataResponse) => {
        if (paymentDataResponse.success && paymentDataResponse.data) {
          this.processPaymentDataAndCreateBooking(paymentDataResponse.data, paymentOrderId);
        } else {
          this.handlePaymentDataError();
        }
      },
      error: () => {
        this.handlePaymentDataError();
      }
    });
  }
  /**
   * Process payment data and create booking
   */
  processPaymentDataAndCreateBooking(paymentData, paymentOrderId) {
    const { bookingData, paymentAmount } = paymentData;
    sessionStorage.setItem("paymentAmount", paymentAmount.toString());
    this.createBooking(bookingData, paymentOrderId);
  }
  /**
   * Create the actual booking
   */
  createBooking(bookingData, paymentOrderId) {
    this.bookingService.createBookingWithPayment(bookingData, paymentOrderId, "completed").subscribe({
      next: (response) => {
        if (response.success && response.orderId) {
          this.handleSuccessfulBooking(response.orderId, paymentOrderId);
        }
        this.bookingCreated = true;
        this.isCreatingBooking = false;
        this.completeProcessing();
      },
      error: () => {
        this.isCreatingBooking = false;
        this.completeProcessing();
      }
    });
  }
  /**
   * Handle successful booking creation
   */
  handleSuccessfulBooking(bookingOrderId, paymentOrderId) {
    this.bookingOrderId = bookingOrderId;
    this.cleanupSessionStorage();
    this.cleanupPaymentData(paymentOrderId);
    this.markPaymentProcessingCompleted();
  }
  /**
   * Complete the processing and show success state
   */
  completeProcessing() {
    setTimeout(() => {
      this.isProcessing = false;
      this.markPaymentProcessingCompleted();
      this.removeUrlParameters();
    }, 1e3);
  }
  /**
   * Clean up session storage after successful booking
   */
  cleanupSessionStorage() {
    sessionStorage.removeItem("paymentOrderId");
    sessionStorage.removeItem("paymentAmount");
    sessionStorage.removeItem("bookingData");
    this.paymentDataService.clearPaymentDataFromSessionStorage();
  }
  /**
   * Clean up payment data from backend
   */
  cleanupPaymentData(paymentOrderId) {
    this.paymentDataService.cleanupPaymentData(paymentOrderId).subscribe({
      next: (cleanupResponse) => {
        if (!cleanupResponse.success) {
        }
      },
      error: () => {
      }
    });
  }
  /**
   * Check if payment has already been processed to prevent double saving
   */
  isPaymentAlreadyProcessed() {
    const processingData = sessionStorage.getItem(this.PROCESSING_KEY);
    if (!processingData)
      return false;
    try {
      const data = JSON.parse(processingData);
      const now = Date.now();
      if (data.completed && now - data.timestamp < this.PROCESSING_TIMEOUT) {
        return true;
      }
      sessionStorage.removeItem(this.PROCESSING_KEY);
      return false;
    } catch (error) {
      console.error("Error parsing processing data:", error);
      sessionStorage.removeItem(this.PROCESSING_KEY);
      return false;
    }
  }
  /**
   * Show state when payment has already been processed
   */
  showAlreadyProcessedState() {
    this.isProcessing = false;
    this.paymentSaved = true;
    this.bookingCreated = true;
    this.restoreProcessedData();
    this.removeUrlParameters();
  }
  /**
   * Restore processed data from session storage
   */
  restoreProcessedData() {
    try {
      const processingData = sessionStorage.getItem(this.PROCESSING_KEY);
      if (processingData) {
        const data = JSON.parse(processingData);
        if (data.paymentStatus) {
          this.paymentStatus = data.paymentStatus;
        }
        if (data.bookingOrderId) {
          this.bookingOrderId = data.bookingOrderId;
        }
        if (data.orderId) {
          this.orderId = data.orderId;
        }
      }
    } catch (error) {
      console.error("Error restoring processed data:", error);
    }
  }
  /**
   * Mark payment processing as completed
   */
  markPaymentProcessingCompleted() {
    const processingData = {
      completed: true,
      timestamp: Date.now(),
      paymentStatus: this.paymentStatus,
      bookingOrderId: this.bookingOrderId,
      orderId: this.orderId
    };
    sessionStorage.setItem(this.PROCESSING_KEY, JSON.stringify(processingData));
  }
  /**
   * Remove URL parameters after successful processing
   */
  removeUrlParameters() {
    try {
      const url = new URL(window.location.href);
      const cleanUrl = url.origin + url.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
      console.log("URL parameters removed after successful processing");
    } catch (error) {
      console.error("Error removing URL parameters:", error);
    }
  }
  /**
   * Handle payment data retrieval errors
   */
  handlePaymentDataError() {
    this.isCreatingBooking = false;
    this.completeProcessing();
  }
  /**
   * Navigate to home page
   */
  goToHome() {
    this.router.navigate(["/"]);
  }
  /**
   * Navigate to book now page
   */
  bookAnother() {
    this.router.navigate(["/book-now"]);
  }
  static \u0275fac = function PaymentSuccessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentSuccessComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(BookingService), \u0275\u0275directiveInject(PaymentDataService), \u0275\u0275directiveInject(AnalyticsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentSuccessComponent, selectors: [["app-payment-success"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [[1, "top-progress-bar"], [1, "payment-success-container"], [1, "success-card"], [1, "processing-state"], [1, "progress-container"], [1, "progress-text"], [1, "progress-bar"], [1, "progress-fill"], [1, "loading-spinner"], [1, "spinner"], [1, "processing-message"], [1, "warning-box"], [1, "warning-icon"], [1, "warning-text"], [1, "progress-steps"], [1, "step"], [1, "step-icon"], [1, "completion-message"], [1, "success-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "completion-badge"], [1, "badge-icon"], [1, "payment-details"], [1, "skipcash-details"], [1, "actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "detail-row"]], template: function PaymentSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PaymentSuccessComponent_Conditional_0_Template, 7, 5, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, PaymentSuccessComponent_Conditional_3_Template, 28, 25, "div", 3)(4, PaymentSuccessComponent_Conditional_4_Template, 25, 17);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isProcessing ? 0 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isProcessing ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isProcessing ? 4 : -1);
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.top-progress-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #ffffff;\n  border-bottom: 1px solid #e9ecef;\n  z-index: 1000;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.top-progress-bar[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n}\n.top-progress-bar[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  color: #0346FF;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  text-align: center;\n}\n.top-progress-bar[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e9ecef;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.top-progress-bar[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #2196f3,\n      #4caf50);\n  border-radius: 3px;\n  transition: width 0.5s ease;\n  width: 0%;\n}\n.payment-success-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  padding: 20px;\n  margin-top: 80px;\n}\n.processing-state[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.processing-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.processing-state[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 4px solid #e3e3e3;\n  border-top: 4px solid #0346FF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto;\n}\n.processing-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0346FF;\n  margin-bottom: 15px;\n  font-size: 28px;\n}\n.processing-state[_ngcontent-%COMP%]   .processing-message[_ngcontent-%COMP%] {\n  color: #4D4D4D;\n  margin-bottom: 25px;\n  font-size: 16px;\n}\n.processing-state[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 25px 0;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n.processing-state[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.processing-state[_ngcontent-%COMP%]   .warning-box[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%] {\n  color: #856404;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: left;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n  padding: 15px;\n  border-radius: 8px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-color: #2196f3;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step.active[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: white;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step.completed[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  border-color: #4caf50;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step.completed[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: white;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #6c757d;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.processing-state[_ngcontent-%COMP%]   .progress-steps[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0346FF;\n  font-size: 16px;\n  font-weight: 500;\n}\n.completion-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.completion-message[_ngcontent-%COMP%]   .completion-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #e8f5e8;\n  color: #2e7d32;\n  padding: 8px 16px;\n  border-radius: 20px;\n  margin: 20px 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.completion-message[_ngcontent-%COMP%]   .completion-badge[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.success-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 15px;\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);\n  max-width: 500px;\n  width: 100%;\n}\n.success-icon[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  color: #0346FF;\n}\nh1[_ngcontent-%COMP%] {\n  color: #0346FF;\n  margin-bottom: 15px;\n  font-size: 28px;\n}\np[_ngcontent-%COMP%] {\n  color: #4D4D4D;\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n.payment-details[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n  text-align: left;\n  border: 1px solid #E5E7EB;\n}\n.skipcash-details[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n  text-align: left;\n  border: 1px solid #DEE2E6;\n}\n.skipcash-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0346FF;\n  margin-bottom: 15px;\n  font-size: 18px;\n  text-align: center;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 10px;\n}\n@media (max-width: 600px) {\n  .success-card[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=payment-success.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentSuccessComponent, { className: "PaymentSuccessComponent" });
})();
export {
  PaymentSuccessComponent
};
//# sourceMappingURL=chunk-S6KD5P6D.js.map
