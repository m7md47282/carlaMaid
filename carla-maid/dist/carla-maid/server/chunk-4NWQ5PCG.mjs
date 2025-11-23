import './polyfills.server.mjs';
import {
  SharedService,
  WordPressService
} from "./chunk-PLOGU36X.mjs";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ULFMFSOZ.mjs";
import "./chunk-RTKK4VRH.mjs";
import {
  CommonModule,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
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
} from "./chunk-REGLKICM.mjs";
import "./chunk-LBJNHE26.mjs";

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
var BlogsOpenComponent = class _BlogsOpenComponent {
  translateService;
  _wordPressService;
  _sharedService;
  lang;
  posts;
  blogsPosts;
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
  /**
   * Retrieves posts filtered by multiple category names.
   */
  getPosts() {
    const postsPage = "blogs";
    const categoriesNames = [postsPage, this.lang];
    const params = {
      per_page: 100,
      page: 1
    };
    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value) => {
        this.posts = value;
      }
    });
  }
  /**
   * Extracts the post thumbnail image URL
   * First checks for WordPress featured media, then falls back to content images
   * @param post - The WordPress post object
   * @returns The image URL or default image path
   */
  getPostImage(post) {
    if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]) {
      const featuredMedia = post._embedded["wp:featuredmedia"][0];
      if (featuredMedia.media_details && featuredMedia.media_details.sizes) {
        if (featuredMedia.media_details.sizes.medium_large) {
          return featuredMedia.media_details.sizes.medium_large.source_url;
        }
        if (featuredMedia.media_details.sizes.large) {
          return featuredMedia.media_details.sizes.large.source_url;
        }
        if (featuredMedia.media_details.sizes.medium) {
          return featuredMedia.media_details.sizes.medium.source_url;
        }
        if (featuredMedia.media_details.sizes.thumbnail) {
          return featuredMedia.media_details.sizes.thumbnail.source_url;
        }
      }
      if (featuredMedia.source_url) {
        return featuredMedia.source_url;
      }
    }
    if (post.content && post.content.rendered) {
      const doc = new DOMParser().parseFromString(post.content.rendered, "text/html");
      const img = doc.querySelector("img");
      if (img && img.src) {
        return img.src;
      }
    }
    return "../../assets/images/posts/default.png";
  }
  getBlogsPosts() {
    const postsPage = "blogs";
    const categoriesNames = [postsPage, this.lang];
    const params = {
      per_page: 20,
      page: 1
    };
    this._wordPressService.getPostsByCategoriesNames(postsPage, categoriesNames, params).subscribe({
      next: (value) => {
        this.blogsPosts = value;
      }
    });
  }
  static \u0275fac = function BlogsOpenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogsOpenComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(WordPressService), \u0275\u0275directiveInject(SharedService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsOpenComponent, selectors: [["app-blogs-open"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 13, consts: [[1, "section-1", "center", "flex-column"], [1, "text-align-center", "hero-title"], [1, "section-2", "flex-column", "page-container", 3, "ngClass"], [1, "gray-text-color"], [1, "primary-text-color", "center", "title-size"], [1, "post"], [1, "primary-text-color", 3, "innerHTML"], [1, "gray-text-color", "post-content", 3, "innerHTML"]], template: function BlogsOpenComponent_Template(rf, ctx) {
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
  }, dependencies: [TranslateModule, TranslatePipe, CommonModule, NgClass], styles: ['\n\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-open-header.png");\n  object-fit: cover;\n  background-size: cover;\n  height: 50vh;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\np[lang=ar][_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nh1.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nb[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n}\n.page-container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-inline: auto;\n}\n.section-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.section-2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.section-2.arabic-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.section-2.arabic-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.section-2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  p[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  section.section-2.flex-column.page-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 425px) {\n  .section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n}\n  .post {\n  margin-bottom: 30px;\n}\n  .post:not(:last-child) {\n  border-bottom: 1px solid #636363;\n}\n  .post .post-content {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n  max-width: 100%;\n}\n  .post .post-content .wp-block-image img {\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n/*# sourceMappingURL=blogs-open.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsOpenComponent, { className: "BlogsOpenComponent" });
})();
export {
  BlogsOpenComponent
};
//# sourceMappingURL=chunk-4NWQ5PCG.mjs.map
