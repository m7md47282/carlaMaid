import {
  SharedService,
  WordPressService
} from "./chunk-YWJPX7R2.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-7UAYIXGG.js";
import {
  CommonModule,
  NgIf,
  __publicField,
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
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7A2U3HSL.js";

// src/app/view-blogs/view-blogs.component.ts
function ViewBlogsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "h2", 4)(2, "p", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0._sharedService.sanitizeHtml(ctx_r0.selectedPost.title.rendered), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0._sharedService.sanitizeHtml(ctx_r0.selectedPost.content.rendered), \u0275\u0275sanitizeHtml);
  }
}
var _ViewBlogsComponent = class _ViewBlogsComponent {
  constructor(translateService, _wordPressService, _sharedService) {
    __publicField(this, "translateService");
    __publicField(this, "_wordPressService");
    __publicField(this, "_sharedService");
    __publicField(this, "lang");
    __publicField(this, "posts");
    __publicField(this, "blogsPosts");
    __publicField(this, "selectedPost");
    __publicField(this, "id", input.required());
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
};
__publicField(_ViewBlogsComponent, "\u0275fac", function ViewBlogsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewBlogsComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WordPressService), \u0275\u0275directiveInject(SharedService));
});
__publicField(_ViewBlogsComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewBlogsComponent, selectors: [["app-view-blogs"]], inputs: { id: [1, "id"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 7, consts: [[1, "section-1", "center", "flex-column"], [1, "text-align-center", "hero-title"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "innerHTML"]], template: function ViewBlogsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ViewBlogsComponent_div_7_Template, 3, 2, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "shared.BestCleaningCompanyInQatar"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "shared.FindReliableProfessionalCleaningServices"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.selectedPost);
  }
}, dependencies: [TranslateModule, TranslatePipe, CommonModule, NgIf], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  padding: 30px 50px;\n  line-height: 2;\n}\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-open-header.png");\n  object-fit: cover;\n  background-size: cover;\n  height: 50vh;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\np[lang=ar][_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nh1.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nb[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n}\n/*# sourceMappingURL=view-blogs.component.css.map */'] }));
var ViewBlogsComponent = _ViewBlogsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewBlogsComponent, { className: "ViewBlogsComponent" });
})();
export {
  ViewBlogsComponent
};
//# sourceMappingURL=chunk-SZPC7LJI.js.map
