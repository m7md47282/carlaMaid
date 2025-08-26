import {
  environment
} from "./chunk-I7HUYMRS.js";
import {
  HttpClient
} from "./chunk-2HCKQESM.js";
import {
  catchError,
  map,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOFF5M7E.js";

// src/app/shared/services/payment.service.ts
var SKIPCASH_STATUS_MAP = {
  0: "pending",
  // new
  1: "pending",
  // pending
  2: "completed",
  // paid - triggers booking update
  3: "cancelled",
  // canceled
  4: "failed",
  // failed
  5: "failed",
  // rejected
  6: "completed",
  // refunded - treated as successful completion
  7: "pending",
  // pending refund
  8: "failed"
  // refund failed
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
    const apiUrl = `${this.backendApiUrl}/book`;
    const payload = {
      order_id: paymentRequest?.orderId || "",
      transaction_id: paymentRequest?.orderId || "",
      customer_name: paymentRequest.customerName,
      customer_email: paymentRequest.customerEmail,
      customer_phone: paymentRequest.customerPhone,
      address: paymentRequest.address || "",
      service_type: paymentRequest.serviceType || "Cleaning Service",
      cleaners: paymentRequest.cleaners || 1,
      hours: paymentRequest.hours || 4,
      materials: paymentRequest.materials || false,
      total: paymentRequest.amount,
      payment_method: "pay_now",
      scheduled_date: paymentRequest.scheduledDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      scheduled_time: paymentRequest.scheduledTime || "10:00"
    };
    console.log("Sending payload to Firebase functions:", payload);
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
   * Extract payment URL from API response
   * @param response - API response object
   * @returns Payment URL or null if not found
   */
  extractPaymentUrl(response) {
    const paymentUrl = response.redirectUrl || response.data?.paymentUrl || response.data?.payUrl || response.payUrl;
    return paymentUrl || null;
  }
  /**
   * Validate payment URL format
   * @param url - URL to validate
   * @returns true if URL is valid
   */
  validatePaymentUrl(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === "https:" || urlObj.protocol === "http:";
    } catch {
      return false;
    }
  }
  /**
   * Redirect to payment gateway
   * @param paymentUrl - URL to redirect to
   */
  redirectToPayment(paymentUrl) {
    if (paymentUrl && paymentUrl.trim()) {
      if (this.validatePaymentUrl(paymentUrl)) {
        console.log("Redirecting to payment gateway:", paymentUrl);
        window.location.href = paymentUrl;
      } else {
        console.error("Invalid payment URL format:", paymentUrl);
        throw new Error("Invalid payment URL format");
      }
    } else {
      console.error("Empty or missing payment URL");
      throw new Error("Payment URL is required");
    }
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
  savePayment({ orderId, transactionId, statusId, bookingInfo }) {
    if (orderId && transactionId && statusId) {
      const apiUrl = `${this.backendApiUrl}/saveBooking`;
      return this.http.post(apiUrl, { orderId, transactionId, statusId, bookingInfo });
    } else {
      return throwError(() => new Error("Invalid payment data"));
    }
  }
  static \u0275fac = function PaymentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
};

export {
  PaymentService
};
//# sourceMappingURL=chunk-S7R6PJGY.js.map
