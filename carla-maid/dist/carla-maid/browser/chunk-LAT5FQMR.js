import {
  BlogCardComponent
} from "./chunk-7IZFE6BM.js";
import {
  WordPressService
} from "./chunk-MSJCIL3J.js";
import {
  SharedService
} from "./chunk-2MG7ITYF.js";
import {
  Router,
  RouterModule
} from "./chunk-4ALVWZRA.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-KOFF5M7E.js";

// src/app/blogs-list/blogs-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BlogsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "blogs.loading"));
  }
}
function BlogsListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function BlogsListComponent_Conditional_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoading());
    });
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "blogs.retry"));
  }
}
function BlogsListComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-blog-card", 16);
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    \u0275\u0275property("blog", post_r3);
  }
}
function BlogsListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, BlogsListComponent_Conditional_14_For_2_Template, 1, 1, "app-blog-card", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.blogsPosts);
  }
}
function BlogsListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 17);
    \u0275\u0275listener("click", function BlogsListComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadMoreBlogs());
    });
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "blogs.loadMore"));
  }
}
function BlogsListComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "blogs.loadingMore"));
  }
}
function BlogsListComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "blogs.noPosts"));
  }
}
var BlogsListComponent = class _BlogsListComponent {
  translateService;
  _sharedService;
  _wordPressService;
  router;
  lang = "en";
  blogsPosts = [];
  isLoadingBlogs = false;
  totalBlogs = 0;
  currentPage = 1;
  blogsPerPage = 20;
  hasMoreBlogs = true;
  errorMessage = "";
  constructor(translateService, _sharedService, _wordPressService, router) {
    this.translateService = translateService;
    this._sharedService = _sharedService;
    this._wordPressService = _wordPressService;
    this.router = router;
    this.lang = this.translateService.currentLang || "en";
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || "en";
    });
  }
  ngOnInit() {
    this.getBlogsPosts();
  }
  getBlogsPosts() {
    this.isLoadingBlogs = true;
    this.errorMessage = "";
    const params = {
      per_page: this.blogsPerPage,
      page: this.currentPage
    };
    const timeout = setTimeout(() => {
      this.isLoadingBlogs = false;
      if (!this.blogsPosts || this.blogsPosts.length === 0) {
        this.errorMessage = "Request timeout. Please try again.";
      }
    }, 1e4);
    this._wordPressService.getPosts(params).subscribe({
      next: (value) => {
        clearTimeout(timeout);
        if (this.currentPage === 1) {
          this.blogsPosts = value || [];
        } else {
          this.blogsPosts = [...this.blogsPosts, ...value || []];
        }
        this.totalBlogs = this.blogsPosts.length;
        this.hasMoreBlogs = value && value.length === this.blogsPerPage;
        this.isLoadingBlogs = false;
      },
      error: (error) => {
        clearTimeout(timeout);
        console.error("Error fetching blog posts:", error);
        this.errorMessage = "Failed to load blogs. Please try again.";
        this.blogsPosts = [];
        this.isLoadingBlogs = false;
      }
    });
  }
  loadMoreBlogs() {
    if (!this.isLoadingBlogs && this.hasMoreBlogs) {
      this.currentPage++;
      this.getBlogsPosts();
    }
  }
  retryLoading() {
    this.currentPage = 1;
    this.getBlogsPosts();
  }
  static \u0275fac = function BlogsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogsListComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SharedService), \u0275\u0275directiveInject(WordPressService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsListComponent, selectors: [["app-blogs-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 16, consts: [[1, "section-1", "center", "flex-column"], [1, "text-align-center", "hero-title"], [1, "section-7", "fade-in", "animation-delay"], [1, "primary-text-color", "center", "title-size"], [1, "blog-stats"], [1, "blog-count"], [1, "loading-container"], [1, "error-container"], [1, "blogs-grid"], [1, "load-more-container"], [1, "loading-more-container"], [1, "no-blogs-container"], [1, "loading-spinner"], [1, "error-message"], [1, "btn-secondary", "retry-btn", 3, "click"], [1, "primary-text-color", "font-weight-700"], [3, "blog"], [1, "btn-secondary", "load-more-btn", 3, "click"]], template: function BlogsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "section", 2)(5, "h1", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "p", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, BlogsListComponent_Conditional_12_Template, 5, 3, "div", 6)(13, BlogsListComponent_Conditional_13_Template, 7, 4, "div", 7)(14, BlogsListComponent_Conditional_14_Template, 3, 0, "div", 8)(15, BlogsListComponent_Conditional_15_Template, 5, 3, "div", 9)(16, BlogsListComponent_Conditional_16_Template, 5, 3, "div", 10)(17, BlogsListComponent_Conditional_17_Template, 4, 3, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "shared.BestCleaningCompanyInQatar"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "blogs.latestNewAndBlogs"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(11, 14, "blogs.totalBlogs"), ": ", ctx.totalBlogs, "");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoadingBlogs && ctx.currentPage === 1 ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage && !ctx.isLoadingBlogs ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoadingBlogs || ctx.currentPage > 1 ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasMoreBlogs && !ctx.isLoadingBlogs && !ctx.errorMessage ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoadingBlogs && ctx.currentPage > 1 ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoadingBlogs && ctx.blogsPosts.length === 0 && !ctx.errorMessage ? 17 : -1);
    }
  }, dependencies: [
    TranslateModule,
    TranslatePipe,
    RouterModule,
    CommonModule,
    BlogCardComponent
  ], styles: ['\n\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-open-header.png");\n  object-fit: cover;\n  background-size: cover;\n  height: 50vh;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\np[lang=ar][_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nh1.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nb[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n}\n.section-7[_ngcontent-%COMP%] {\n  margin-bottom: 10rem;\n  position: relative;\n}\n.section-7[_ngcontent-%COMP%]   .blog-stats[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.section-7[_ngcontent-%COMP%]   .blog-stats[_ngcontent-%COMP%]   .blog-count[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.section-7[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.section-7[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #1976d2;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.section-7[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1rem;\n}\n.section-7[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  text-align: center;\n}\n.section-7[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: 1.1rem;\n  margin-bottom: 1.5rem;\n}\n.section-7[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #d32f2f;\n  color: #d32f2f;\n  padding: 10px 25px;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.section-7[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .retry-btn[_ngcontent-%COMP%]:hover {\n  background: #d32f2f;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);\n}\n.section-7[_ngcontent-%COMP%]   .blogs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto 3rem auto;\n  padding: 0 1rem;\n}\n@media (max-width: 768px) {\n  .section-7[_ngcontent-%COMP%]   .blogs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding: 0 0.5rem;\n  }\n}\n.section-7[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2rem 0;\n}\n.section-7[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid #1976d2;\n  color: #1976d2;\n  padding: 12px 30px;\n  border-radius: 25px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.section-7[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%]:hover {\n  background: #1976d2;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(25, 118, 210, 0.3);\n}\n.section-7[_ngcontent-%COMP%]   .loading-more-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n.section-7[_ngcontent-%COMP%]   .loading-more-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #1976d2;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.section-7[_ngcontent-%COMP%]   .loading-more-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n}\n.section-7[_ngcontent-%COMP%]   .no-blogs-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.section-7[_ngcontent-%COMP%]   .no-blogs-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=blogs-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsListComponent, { className: "BlogsListComponent" });
})();
export {
  BlogsListComponent
};
//# sourceMappingURL=chunk-LAT5FQMR.js.map
