import {
  DomSanitizer,
  HttpClient,
  HttpParams
} from "./chunk-46SSZPLE.js";
import {
  BehaviorSubject,
  __spreadProps,
  __spreadValues,
  map,
  of,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-Y2VF4S5M.js";

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

// src/environments/environment.prod.ts
var environment = {
  production: true,
  // Indicates if the environment is production
  // apiUrl: '',
  wordpressApiBaseUrl: "https://carlamaid.qa/wordpress/wp-json/wp/v2",
  lang: "en",
  // Default language setting
  languages: ["ar", "en"],
  // Supported languages
  direction: "ltr",
  // Text direction, left-to-right
  // Backend API Configuration
  backendApiUrl: "https://api.carlamaid.qa/api",
  // Skip Cash Payment Gateway Configuration
  skipCash: {
    apiUrl: "https://api.skipcash.app",
    clientId: "7242ee4f-ca43-44bb-804c-4f0c621bb54d",
    returnUrl: "https://carlamaid.qa/book-now/success",
    cancelUrl: "https://carlamaid.qa/book-now/cancel",
    callbackUrl: "https://carlamaid.qa/api/payment/callback",
    webhookKey: "a43ef9131-140e-4871-8586-94b8f69f32b2",
    webhookUrl: "https://carlamaid.qa/api/skipcash/webhook"
  }
};

// src/app/shared/services/word-press.service.ts
var WordPressService = class _WordPressService {
  _http;
  _sharedService;
  wordpressApiBaseUrl = environment.wordpressApiBaseUrl;
  constructor(_http, _sharedService) {
    this._http = _http;
    this._sharedService = _sharedService;
  }
  /**
   * Fetches posts from the WordPress API with the provided parameters.
   *
   * @param params - The query parameters to be sent with the HTTP request. This can include filters like
   *                 `orderby`, `order`, `per_page`, and others.
   *
   * @returns An observable containing the response data from the API, which is an array of posts.
   */
  getPosts(params) {
    const paramsWithEmbed = __spreadProps(__spreadValues({}, params), { _embed: true });
    return this._http.get(`${this.wordpressApiBaseUrl}/posts`, { params: paramsWithEmbed });
  }
  /**
   * Fetches all categories from the WordPress API.
   *
   * @returns An observable containing the response data from the API, which is an array of categories.
   */
  getCategories() {
    return this._http.get(`${this.wordpressApiBaseUrl}/categories`);
  }
  /**
   * Fetches posts from specific categories, identified by their names, with the provided parameters.
   *
   * @param categoryNames - An array of category names for which to fetch posts.
   * @param postsParams - Additional query parameters for fetching posts (e.g., `orderby`, `order`, `per_page`).
   *
   * @returns An observable containing an array of posts belonging to the specified categories.
   *
   * @throws {Error} If none of the categories are found, an error will be thrown.
   */
  getPostsByCategoriesNames(postsPage, categoryNames, postsParams) {
    return this.getCategories().pipe(switchMap((categories) => {
      const categoryIds = categories.filter((cat) => categoryNames.some((name) => cat.name.toLowerCase() === name.toLowerCase())).map((cat) => cat.id);
      const postsPageCategoryId = categories.find((cat) => cat.name.toLowerCase() === postsPage.toLowerCase())?.id;
      if (categoryIds.length !== categoryNames.length) {
        return of([]);
      }
      const preparedParams = this._sharedService.prepareParams({
        params: __spreadValues(__spreadValues({}, postsParams), { categories: postsPageCategoryId })
      });
      return this.getPosts(preparedParams).pipe(map((posts) => posts.filter((post) => categoryIds.every((catId) => post.categories.includes(catId)))));
    }));
  }
  static \u0275fac = function WordPressService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WordPressService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SharedService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WordPressService, factory: _WordPressService.\u0275fac, providedIn: "root" });
};

export {
  SharedService,
  WordPressService
};
//# sourceMappingURL=chunk-CZFAJQYZ.js.map
