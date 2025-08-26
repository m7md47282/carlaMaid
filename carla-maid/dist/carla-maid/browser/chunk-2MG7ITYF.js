import {
  DomSanitizer,
  HttpParams
} from "./chunk-2HCKQESM.js";
import {
  BehaviorSubject,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOFF5M7E.js";

// src/app/shared/services/shared.service.ts
var SharedService = class _SharedService {
  _sanitizer;
  selectedPostSubject = new BehaviorSubject(null);
  selectedPost$ = this.selectedPostSubject.asObservable();
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  /**
   * Prepares the query parameters for HTTP requests.
   * @param {Object} params - The parameters to be processed.
   * @param {Options} [options] - Optional settings for null values.
   * @returns {HttpParams} The processed HTTP parameters.
   */
  prepareParams({ params, options }) {
    let httpParams = new HttpParams();
    if (params) {
      if (!options?.allowNull) {
        params = Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== null && value !== void 0 && value !== ""));
      }
      for (const [key, value] of Object.entries(params)) {
        if (Array.isArray(value)) {
          value.forEach((val, index) => {
            httpParams = httpParams.append(`${key}[${index}]`, String(val));
          });
        } else {
          httpParams = httpParams.set(key, String(value));
        }
      }
    }
    return httpParams;
  }
  /**
   * Sanitizes HTML content for safe usage in the application.
   * @param {string} content - The HTML content to sanitize.
   * @returns {SafeHtml} The sanitized HTML content.
   */
  sanitizeHtml(content) {
    return this._sanitizer.bypassSecurityTrustHtml(content);
  }
  /**
   * Removes all HTML tags and decodes HTML entities from a given string.
   *
   * @param {string} html - The input HTML string containing HTML content.
   * @returns {string} The plain text content without HTML tags and with decoded entities.
   */
  stripHtml(html) {
    if (!html || typeof html !== "string") {
      return "";
    }
    try {
      const text = html.replace(/<[^>]*>/g, "");
      const textarea = document.createElement("textarea");
      textarea.innerHTML = text;
      return textarea.value;
    } catch (error) {
      console.error("Error stripping HTML:", error);
      return "";
    }
  }
  selectPost(post) {
    this.selectedPostSubject.next(post);
  }
  static \u0275fac = function SharedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedService)(\u0275\u0275inject(DomSanitizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SharedService, factory: _SharedService.\u0275fac, providedIn: "root" });
};

export {
  SharedService
};
//# sourceMappingURL=chunk-2MG7ITYF.js.map
