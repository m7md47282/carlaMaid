import {
  SharedService,
  WordPressService
} from "./chunk-LOQIJK6D.js";
import {
  Router,
  RouterModule
} from "./chunk-CEWNI52Z.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-7UAYIXGG.js";
import {
  BehaviorSubject,
  CommonModule,
  NgIf,
  SlicePipe,
  __publicField,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7A2U3HSL.js";

// src/app/blogs-list/blogs-list.component.ts
function BlogsListComponent_For_10_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function BlogsListComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "figure", 6);
    \u0275\u0275listener("click", function BlogsListComponent_For_10_Template_figure_click_0_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendPost(post_r2.id));
    });
    \u0275\u0275elementStart(1, "figure", 7)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275template(7, BlogsListComponent_For_10_span_7_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r2.getFirstImage(post_r2.content.rendered) + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2._sharedService.stripHtml(post_r2.title.rendered));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 5, ctx_r2._sharedService.stripHtml(post_r2.content.rendered), 0, 200));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2._sharedService.stripHtml(post_r2.content.rendered).length > 200);
  }
}
var _BlogsListComponent = class _BlogsListComponent {
  // to send the post 
  constructor(translateService, _sharedService, _wordPressService, router) {
    __publicField(this, "translateService");
    __publicField(this, "_sharedService");
    __publicField(this, "_wordPressService");
    __publicField(this, "router");
    __publicField(this, "lang", "en");
    __publicField(this, "posts");
    __publicField(this, "blogsPosts", []);
    __publicField(this, "selectedPost");
    __publicField(this, "selectedPostSource", new BehaviorSubject(null));
    // to send the post 
    __publicField(this, "selectedPost$", this.selectedPostSource.asObservable());
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
    this._sharedService.selectedPost$.subscribe((post) => {
      this.selectedPost = post;
    });
    this.getBlogsPosts();
  }
  getFirstImage(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.src : "../../assets/images/posts/default.png";
  }
  getBlogsPosts() {
    const postsPage = "blogs";
    const categoriesNames = [postsPage, this.lang];
    const params = {
      per_page: 100,
      page: 1
    };
    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value) => {
        this.blogsPosts = value;
        this.posts = value;
      }
    });
  }
  sendPost(postId) {
    this.router.navigate(["/view-blogs", postId]);
  }
};
__publicField(_BlogsListComponent, "\u0275fac", function BlogsListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BlogsListComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SharedService), \u0275\u0275directiveInject(WordPressService), \u0275\u0275directiveInject(Router));
});
__publicField(_BlogsListComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsListComponent, selectors: [["app-blogs-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 6, consts: [[1, "section-1", "center", "flex-column"], [1, "text-align-center", "hero-title"], [1, "section-7", "fade-in", "animation-delay"], [1, "primary-text-color", "center", "title-size"], [1, "gap-30", "flex-wrap", "center", "new-blogs", "fade-in-animation"], [1, "service-item", "center", 2, "background-size", "cover", "background-position", "center", 3, "backgroundImage"], [1, "service-item", "center", 2, "background-size", "cover", "background-position", "center", 3, "click"], [1, "service-content"], [4, "ngIf"]], template: function BlogsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "section", 2)(5, "h1", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275repeaterCreate(9, BlogsListComponent_For_10_Template, 8, 9, "figure", 5, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "shared.BestCleaningCompanyInQatar"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "blogs.latestNewAndBlogs"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.blogsPosts);
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  RouterModule,
  CommonModule,
  NgIf,
  SlicePipe
], styles: ['\n\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-open-header.png");\n  object-fit: cover;\n  background-size: cover;\n  height: 50vh;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\np[lang=ar][_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nh1.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nb[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n}\n.section-7[_ngcontent-%COMP%] {\n  margin-bottom: 10rem;\n  position: relative;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%] {\n  height: 350px;\n  position: relative;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%] {\n  display: none;\n  transition: 0.5s all ease-in-out;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  animation: fadeOut 0.6s ease-out forwards;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]:hover   .more-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  width: 20rem;\n  background-color: rgba(255, 255, 255, 0.93);\n  border-radius: 10px;\n  bottom: -20px;\n  right: 20px;\n  padding: 20px;\n  z-index: 999;\n  animation: slideIn 0.6s ease-out forwards;\n}\n.section-7[_ngcontent-%COMP%]   .img-width[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.section-7[_ngcontent-%COMP%]   .img-width[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 219px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.section-7[_ngcontent-%COMP%]   .img-width[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.service-item[_ngcontent-%COMP%] {\n  min-width: 350px;\n  aspect-ratio: 1/1;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  transition: transform 0.3s ease;\n}\n.service-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.service-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5019607843);\n  z-index: 1;\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%] {\n  z-index: 2;\n  color: #ffffff;\n  margin: 10px 0;\n  padding: 10px 0;\n  width: 350px;\n  margin-top: auto;\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  font-size: 1rem;\n}\n.service-item[_ngcontent-%COMP%]   .service-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  font-size: 0.7rem;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=blogs-list.component.css.map */'] }));
var BlogsListComponent = _BlogsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsListComponent, { className: "BlogsListComponent", filePath: "src\\app\\blogs-list\\blogs-list.component.ts", lineNumber: 23 });
})();
export {
  BlogsListComponent
};
//# sourceMappingURL=chunk-ZCGKACLF.js.map
