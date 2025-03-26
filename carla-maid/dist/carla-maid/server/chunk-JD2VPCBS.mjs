import './polyfills.server.mjs';
import {
  DomSanitizer,
  HttpClient,
  HttpParams
} from "./chunk-VWANEM7D.mjs";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-OXPP6M56.mjs";
import {
  CommonModule,
  NgClass,
  map,
  of,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WSWL4PGO.mjs";
import {
  __publicField,
  __spreadValues
} from "./chunk-CU4POASJ.mjs";

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

// src/app/shared/services/shared.service.ts
var _SharedService = class _SharedService {
  constructor(_sanitizer) {
    __publicField(this, "_sanitizer");
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
};
__publicField(_SharedService, "\u0275fac", function SharedService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedService)(\u0275\u0275inject(DomSanitizer));
});
__publicField(_SharedService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SharedService, factory: _SharedService.\u0275fac, providedIn: "root" }));
var SharedService = _SharedService;

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

// src/app/blogs-open/blogs-open.component.ts
var _c0 = (a0) => ({ "arabic-text": a0 });
function BlogsOpenComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "h1", 6)(2, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", $index_r2 + 1 + ". " + post_r1.title.rendered, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2._sharedService.sanitizeHtml(post_r1.content.rendered), \u0275\u0275sanitizeHtml);
  }
}
function BlogsOpenComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BlogsOpenComponent_Conditional_11_For_1_Template, 3, 2, "div", 5, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.posts);
  }
}
function BlogsOpenComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "blogs.noPosts"));
  }
}
var _BlogsOpenComponent = class _BlogsOpenComponent {
  constructor(translateService, _wordPressService, _sharedService) {
    __publicField(this, "translateService");
    __publicField(this, "_wordPressService");
    __publicField(this, "_sharedService");
    __publicField(this, "lang");
    __publicField(this, "posts");
    this.translateService = translateService;
    this._wordPressService = _wordPressService;
    this._sharedService = _sharedService;
    this.lang = this.translateService.currentLang || "en";
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || "en";
    });
    this.getPosts();
  }
  /**
   * Retrieves posts filtered by multiple category names.
   */
  getPosts() {
    const postsPage = "blogs";
    const categoriesNames = [postsPage, this.lang];
    const params = {
      per_page: 100,
      page: 1,
      orderby: "date",
      order: "asc"
    };
    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value) => {
        this.posts = value;
      }
    });
  }
};
__publicField(_BlogsOpenComponent, "\u0275fac", function BlogsOpenComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BlogsOpenComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WordPressService), \u0275\u0275directiveInject(SharedService));
});
__publicField(_BlogsOpenComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsOpenComponent, selectors: [["app-blogs-open"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 13, consts: [[1, "section-1", "center", "flex-column"], [1, "text-align-center", "hero-title"], [1, "section-2", "flex-column", "page-container", 3, "ngClass"], [1, "gray-text-color"], [1, "primary-text-color", "center", "title-size"], [1, "post"], [1, "primary-text-color", 3, "innerHTML"], [1, "gray-text-color", "post-content", 3, "innerHTML"]], template: function BlogsOpenComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "section", 2)(8, "p", 3);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BlogsOpenComponent_Conditional_11_Template, 2, 0)(12, BlogsOpenComponent_Conditional_12_Template, 3, 3, "h1", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 5, "shared.BestCleaningCompanyInQatar"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "shared.FindReliableProfessionalCleaningServices"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx.lang === "ar"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "paragraph.KeepingACleanAndOrganizedSpace"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.posts.length > 0 ? 11 : 12);
  }
}, dependencies: [TranslateModule, TranslatePipe, CommonModule, NgClass], styles: ['\n\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-open-header.png");\n  object-fit: cover;\n  background-size: cover;\n  height: 50vh;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\np[lang=ar][_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nh1.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nb[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n}\n.page-container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-inline: auto;\n}\n.section-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.section-2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.section-2.arabic-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.section-2.arabic-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.section-2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  p[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  section.section-2.flex-column.page-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 425px) {\n  .section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n}\n  .post {\n  margin-bottom: 20px;\n}\n  .post .post-content .wp-block-image img {\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n/*# sourceMappingURL=blogs-open.component.css.map */'] }));
var BlogsOpenComponent = _BlogsOpenComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsOpenComponent, { className: "BlogsOpenComponent" });
})();
export {
  BlogsOpenComponent
};
//# sourceMappingURL=chunk-JD2VPCBS.mjs.map
