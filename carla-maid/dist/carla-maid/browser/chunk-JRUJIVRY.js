import {
  WordPressService
} from "./chunk-MSJCIL3J.js";
import {
  SharedService
} from "./chunk-2MG7ITYF.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-2HCKQESM.js";
import {
  CommonModule,
  DatePipe,
  NgIf,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KOFF5M7E.js";

// src/app/view-blogs/view-blogs.component.ts
function ViewBlogsComponent_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "blogs.category"), " ");
  }
}
function ViewBlogsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ViewBlogsComponent_div_7_span_6_Template, 3, 3, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "h1", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, ctx_r0.selectedPost.date, "longDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedPost.categories && ctx_r0.selectedPost.categories.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0._sharedService.sanitizeHtml(ctx_r0.selectedPost.title.rendered), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0._sharedService.sanitizeHtml(ctx_r0.selectedPost.content.rendered), \u0275\u0275sanitizeHtml);
  }
}
function ViewBlogsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
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
var ViewBlogsComponent = class _ViewBlogsComponent {
  translateService;
  _wordPressService;
  _sharedService;
  lang;
  posts;
  blogsPosts;
  selectedPost;
  id = input.required();
  constructor(translateService, _wordPressService, _sharedService) {
    this.translateService = translateService;
    this._wordPressService = _wordPressService;
    this._sharedService = _sharedService;
    this.lang = this.translateService.currentLang || "en";
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || "en";
    });
    this.getPosts();
  }
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    const postsPage = "blogs";
    const categoriesNames = [postsPage, this.lang];
    const params = {
      per_page: 100,
      page: 1
    };
    this._wordPressService.getPosts(params).subscribe({
      next: (value) => {
        this.selectedPost = value.filter((post) => post.id == this.id())[0];
      }
    });
  }
  static \u0275fac = function ViewBlogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewBlogsComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WordPressService), \u0275\u0275directiveInject(SharedService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewBlogsComponent, selectors: [["app-view-blogs"]], inputs: { id: [1, "id"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 8, consts: [[1, "section-1", "center", "flex-column"], [1, "text-align-center", "hero-title"], ["class", "blog-container", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "blog-container"], [1, "blog-header"], [1, "blog-meta"], [1, "blog-date"], ["class", "blog-category", 4, "ngIf"], [1, "blog-title", 3, "innerHTML"], [1, "blog-content", 3, "innerHTML"], [1, "blog-category"], [1, "loading-container"], [1, "loading-spinner"]], template: function ViewBlogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275element(4, "br");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ViewBlogsComponent_div_7_Template, 9, 7, "div", 2)(8, ViewBlogsComponent_div_8_Template, 5, 3, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "shared.BestCleaningCompanyInQatar"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "shared.FindReliableProfessionalCleaningServices"), "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedPost);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedPost);
    }
  }, dependencies: [TranslateModule, TranslatePipe, CommonModule, NgIf, DatePipe], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 30px 50px;\n  line-height: 2;\n}\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-open-header.png");\n  object-fit: cover;\n  background-size: cover;\n  height: 50vh;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\np[lang=ar][_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nh1.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nb[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n}\n.blog-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 3rem 2rem;\n}\n@media (max-width: 768px) {\n  .blog-container[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n.blog-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.blog-header[_ngcontent-%COMP%]   .blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.blog-header[_ngcontent-%COMP%]   .blog-meta[_ngcontent-%COMP%]   .blog-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.blog-header[_ngcontent-%COMP%]   .blog-meta[_ngcontent-%COMP%]   .blog-category[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.blog-header[_ngcontent-%COMP%]   .blog-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  line-height: 1.3;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .blog-header[_ngcontent-%COMP%]   .blog-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.blog-content[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  color: #333;\n}\n.blog-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.blog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.blog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.blog-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.blog-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], \n.blog-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin: 2rem 0 1rem 0;\n  font-weight: 600;\n}\n.blog-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.blog-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.blog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.blog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-size: 1rem;\n}\n.blog-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.blog-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding-left: 2rem;\n}\n.blog-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.blog-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n}\n.blog-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1976d2;\n  text-decoration: none;\n}\n.blog-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.blog-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #1976d2;\n  padding-left: 1rem;\n  margin: 1.5rem 0;\n  font-style: italic;\n  color: #666;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n}\n.loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #1976d2;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=view-blogs.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewBlogsComponent, { className: "ViewBlogsComponent" });
})();
export {
  ViewBlogsComponent
};
//# sourceMappingURL=chunk-JRUJIVRY.js.map
