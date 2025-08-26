import {
  SharedService
} from "./chunk-2MG7ITYF.js";
import {
  HttpClient
} from "./chunk-2HCKQESM.js";
import {
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOFF5M7E.js";

// src/environments/environment.prod.ts
var environment = {
  production: true,
  // WordPress API Configuration
  wordpressApiBaseUrl: "https://api.carlamaid.qa/wp/wp-json/wp/v2",
  lang: "en",
  // Default language setting
  languages: ["ar", "en"],
  // Supported languages
  direction: "ltr",
  // Text direction, left-to-right
  // Backend API Configuration
  backendApiUrl: "https://us-central1-carlamaid-9.cloudfunctions.net"
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
    return this.getCategories().pipe(tap((categories) => {
      console.log("categories", categories);
    }));
  }
  /**
   * Fetches a post by its ID from the WordPress API.
   *
   * @param id - The ID of the post to fetch.
   *
   * @returns An observable containing the response data from the API, which is the post with the specified ID.
   */
  getPostById(id) {
    return this._http.get(`${this.wordpressApiBaseUrl}/posts/${id}`);
  }
  static \u0275fac = function WordPressService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WordPressService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SharedService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WordPressService, factory: _WordPressService.\u0275fac, providedIn: "root" });
};

export {
  WordPressService
};
//# sourceMappingURL=chunk-MSJCIL3J.js.map
