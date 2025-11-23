import {
  environment
} from "./chunk-76Y5YJ62.js";
import {
  HttpClient
} from "./chunk-46SSZPLE.js";
import {
  catchError,
  map,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Y2VF4S5M.js";

// src/app/shared/services/payment.service.ts
var SKIPCASH_STATUS_MAP = {
  0: "pending",
  // New
  1: "pending",
  // Pending
  2: "completed",
  // Paid
  3: "cancelled",
  // Canceled
  4: "failed",
  // Failed
  5: "failed",
  // Rejected
  6: "completed",
  // Refunded
  7: "pending",
  // Pending refund
  8: "failed"
  // Refund failed
};
var PaymentService = class _PaymentService {
  http;
  backendApiUrl = environment.backendApiUrl;
  validPaymentStatuses = ["pending", "completed", "failed", "cancelled"];
  maxAmount = 1e5;
  // Maximum payment amount in QAR
  constructor(http) {
    this.http = http;
  }
  /**
   * Create a new payment order with SkipCash via backend
   * @param paymentRequest - The payment request details
   * @returns Observable of payment response
   */
  createPayment(paymentRequest) {
    const apiUrl = `${this.backendApiUrl}/skipcash/payment/create`;
    const payload = this.buildPaymentPayload(paymentRequest);
    return this.http.post(apiUrl, payload).pipe(map(this.handlePaymentCreationResponse.bind(this)), catchError(this.handlePaymentError.bind(this)));
  }
  /**
   * Check payment status via backend
   * @param orderId - The order ID to check
   * @returns Observable of payment status
   */
  checkPaymentStatus(orderId) {
    const apiUrl = `${this.backendApiUrl}/payment/status-skip-cash/${orderId}`;
    return this.http.get(apiUrl).pipe(map((response) => this.handleStatusResponse(response, orderId)), catchError(this.handleStatusError.bind(this)));
  }
  /**
   * Map SkipCash StatusId to PaymentStatusType
   * @param statusId - SkipCash StatusId (0-8)
   * @returns PaymentStatusType
   */
  mapSkipCashStatus(statusId) {
    return SKIPCASH_STATUS_MAP[statusId] || "failed";
  }
  /**
   * Process SkipCash webhook payload
   * @param webhookPayload - Raw webhook data from SkipCash
   * @returns Processed payment status
   */
  processWebhookPayload(webhookPayload) {
    const status = this.mapSkipCashStatus(webhookPayload.StatusId);
    const amount = webhookPayload.Amount ? parseFloat(webhookPayload.Amount) : void 0;
    return {
      orderId: webhookPayload.TransactionId || webhookPayload.PaymentId,
      status,
      amount,
      currency: "QAR",
      // SkipCash uses QAR by default
      transactionId: webhookPayload.PaymentId,
      error: status === "failed" ? `SkipCash StatusId: ${webhookPayload.StatusId}` : void 0
    };
  }
  /**
   * Test SkipCash API connectivity
   * @returns Observable of connection test result
   */
  testSkipCashConnection() {
    const apiUrl = `${this.backendApiUrl}/skipcash/health`;
    return this.http.get(apiUrl).pipe(map((response) => ({
      success: response.success,
      message: response.success ? "SkipCash API is accessible" : "SkipCash API is not accessible",
      error: response.success ? void 0 : "SkipCash API is not accessible"
    })), catchError((error) => {
      console.error("SkipCash health check error:", error);
      return throwError(() => new Error("SkipCash API health check failed"));
    }));
  }
  /**
   * Generate a unique order ID
   * @returns Unique order ID string
   */
  generateOrderId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `CARLA_${timestamp}_${random}`.toUpperCase();
  }
  /**
   * Validate payment amount
   * @param amount - Amount to validate
   * @returns True if amount is valid
   */
  validateAmount(amount) {
    return amount > 0 && amount <= this.maxAmount;
  }
  /**
   * Format amount for display
   * @param amount - Amount to format
   * @param currency - Currency code (default: QAR)
   * @returns Formatted amount string
   */
  formatAmount(amount, currency = "QAR") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency
    }).format(amount);
  }
  /**
   * Redirect to payment gateway
   * @param paymentUrl - URL to redirect to
   */
  redirectToPayment(paymentUrl) {
    if (paymentUrl && paymentUrl.trim()) {
      window.location.href = paymentUrl;
    }
  }
  /**
   * Handle payment callback from URL parameters
   * @returns Payment status from URL parameters
   */
  handlePaymentCallbackFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("order_id");
    const status = urlParams.get("status");
    const transactionId = urlParams.get("transaction_id");
    const amount = urlParams.get("amount");
    const currency = urlParams.get("currency");
    if (!orderId || !status) {
      return {
        orderId: "",
        status: "failed",
        error: "Missing required callback parameters"
      };
    }
    const validStatus = this.validatePaymentStatus(status);
    const parsedAmount = amount ? parseFloat(amount) : void 0;
    return {
      orderId,
      status: validStatus,
      amount: parsedAmount,
      currency: currency || "QAR",
      transactionId: transactionId || void 0
    };
  }
  /**
   * Get payment success URL
   * @param orderId - Optional order ID to append
   * @returns Success URL
   */
  getPaymentSuccessUrl(orderId) {
    const baseUrl = environment.skipCash.returnUrl;
    return baseUrl;
  }
  /**
   * Get payment cancel URL
   * @param orderId - Optional order ID to append
   * @returns Cancel URL
   */
  getPaymentCancelUrl(orderId) {
    const baseUrl = environment.skipCash.cancelUrl;
    return baseUrl;
  }
  /**
   * Log payment attempt for analytics
   * @param paymentRequest - Payment request details
   */
  logPaymentAttempt(paymentRequest) {
    console.log("Payment attempt:", {
      orderId: paymentRequest.orderId,
      amount: paymentRequest.amount,
      currency: paymentRequest.currency,
      customerEmail: paymentRequest.customerEmail,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  /**
   * Log payment result for analytics
   * @param orderId - Order ID
   * @param status - Payment status
   * @param error - Optional error message
   */
  logPaymentResult(orderId, status, error) {
    console.log("Payment result:", {
      orderId,
      status,
      error,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  /**
   * Log webhook processing for analytics
   * @param webhookPayload - Webhook data received
   * @param processedStatus - Processed payment status
   */
  logWebhookProcessing(webhookPayload, processedStatus) {
    console.log("Webhook processed:", {
      skipCashPaymentId: webhookPayload.PaymentId,
      orderId: processedStatus.orderId,
      originalStatusId: webhookPayload.StatusId,
      mappedStatus: processedStatus.status,
      amount: processedStatus.amount,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  // Private helper methods
  /**
   * Build payment payload from request
   */
  buildPaymentPayload(paymentRequest) {
    return {
      amount: paymentRequest.amount.toString(),
      currency: paymentRequest.currency,
      customerName: paymentRequest.customerName,
      customerEmail: paymentRequest.customerEmail,
      customerPhone: paymentRequest.customerPhone,
      description: paymentRequest.description,
      returnUrl: paymentRequest.returnUrl,
      cancelUrl: paymentRequest.cancelUrl,
      orderId: paymentRequest.orderId
    };
  }
  /**
   * Handle payment creation response
   */
  handlePaymentCreationResponse(response) {
    console.log("SkipCash payment creation response:", response);
    if (response.success) {
      return {
        success: true,
        data: response.data
      };
    } else {
      return {
        success: false,
        error: response.error || "Payment creation failed"
      };
    }
  }
  /**
   * Handle payment error
   */
  handlePaymentError(error) {
    console.error("Payment creation error:", error);
    return throwError(() => new Error("Failed to create payment"));
  }
  /**
   * Handle status response
   */
  handleStatusResponse(response, orderId) {
    if (response.success && response.data) {
      const status = response.data.status || "pending";
      const validStatus = this.validatePaymentStatus(status);
      return {
        orderId: response.data.order_id || orderId,
        status: validStatus,
        amount: response.data.amount,
        currency: response.data.currency,
        transactionId: response.data.transaction_id
      };
    } else {
      return {
        orderId,
        status: "failed",
        error: response.error || "Failed to check payment status"
      };
    }
  }
  /**
   * Handle status error
   */
  handleStatusError(error) {
    console.error("Payment status check error:", error);
    return throwError(() => new Error("Failed to check payment status"));
  }
  /**
   * Validate payment status
   */
  validatePaymentStatus(status) {
    return this.validPaymentStatuses.includes(status) ? status : "failed";
  }
  static \u0275fac = function PaymentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
};

export {
  PaymentService
};
//# sourceMappingURL=chunk-UDRN73KX.js.map
