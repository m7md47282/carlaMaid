import {
  DomSanitizer,
  HttpClient,
  HttpParams
} from "./chunk-7UAYIXGG.js";
import {
  BehaviorSubject,
  __publicField,
  __spreadValues,
  map,
  of,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7A2U3HSL.js";

// src/app/shared/services/shared.service.ts
var _SharedService = class _SharedService {
  constructor(_sanitizer) {
    __publicField(this, "_sanitizer");
    __publicField(this, "selectedPostSubject", new BehaviorSubject(null));
    __publicField(this, "selectedPost$", this.selectedPostSubject.asObservable());
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
    const text = html.replace(/<[^>]*>/g, "");
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }
  selectPost(post) {
    this.selectedPostSubject.next(post);
  }
};
__publicField(_SharedService, "\u0275fac", function SharedService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedService)(\u0275\u0275inject(DomSanitizer));
});
__publicField(_SharedService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SharedService, factory: _SharedService.\u0275fac, providedIn: "root" }));
var SharedService = _SharedService;

// src/environments/environment.prod.ts
var environment = {
  production: true,
  // Indicates if the environment is production
  // apiUrl: '',
  wordpressApiBaseUrl: "https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2",
  lang: "en",
  // Default language setting
  languages: ["ar", "en"],
  // Supported languages
  direction: "ltr"
  // Text direction, left-to-right
};

// src/app/shared/services/word-press.service.ts
var _WordPressService = class _WordPressService {
  constructor(_http, _sharedService) {
    __publicField(this, "_http");
    __publicField(this, "_sharedService");
    __publicField(this, "wordpressApiBaseUrl", environment.wordpressApiBaseUrl);
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
    return this._http.get(`${this.wordpressApiBaseUrl}/posts`, { params });
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
};
__publicField(_WordPressService, "\u0275fac", function WordPressService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WordPressService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SharedService));
});
__publicField(_WordPressService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WordPressService, factory: _WordPressService.\u0275fac, providedIn: "root" }));
var WordPressService = _WordPressService;

export {
  SharedService,
  WordPressService
};
//# sourceMappingURL=chunk-YWJPX7R2.js.map
