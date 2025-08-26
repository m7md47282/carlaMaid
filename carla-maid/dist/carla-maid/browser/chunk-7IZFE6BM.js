import {
  SharedService
} from "./chunk-2MG7ITYF.js";
import {
  RouterLink
} from "./chunk-4ALVWZRA.js";
import {
  TranslateModule,
  TranslatePipe
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KOFF5M7E.js";

// src/app/shared/components/blog-card/blog-card.component.ts
var _c0 = (a0) => ["/view-blogs", a0];
function BlogCardComponent_span_12_Template(rf, ctx) {
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
var BlogCardComponent = class _BlogCardComponent {
  _sharedService;
  blog = input.required();
  constructor(_sharedService) {
    this._sharedService = _sharedService;
  }
  getDefaultImage() {
    return "assets/images/posts/default.png";
  }
  getFirstImage(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.src : this.getDefaultImage();
  }
  stripHtml(html) {
    return this._sharedService.stripHtml(html);
  }
  getExcerpt(content, maxLength = 150) {
    const stripped = this.stripHtml(content);
    if (stripped.length <= maxLength) {
      return stripped;
    }
    return stripped.substring(0, maxLength) + "...";
  }
  onImageError(event) {
    const target = event.target;
    if (target) {
      target.src = this.getDefaultImage();
    }
  }
  static \u0275fac = function BlogCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogCardComponent)(\u0275\u0275directiveInject(SharedService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCardComponent, selectors: [["app-blog-card"]], inputs: { blog: [1, "blog"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 15, consts: [[1, "blog-card", 3, "routerLink"], [1, "blog-image"], [3, "error", "src", "alt"], [1, "blog-content"], [1, "blog-title"], [1, "blog-excerpt"], [1, "blog-meta"], [1, "blog-date"], ["class", "blog-category", 4, "ngIf"], [1, "read-more-overlay"], [1, "read-more-text"], [1, "blog-category"]], template: function BlogCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "img", 2);
      \u0275\u0275listener("error", function BlogCardComponent_Template_img_error_2_listener($event) {
        return ctx.onImageError($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, BlogCardComponent_span_12_Template, 3, 3, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, ctx.blog().id));
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.getFirstImage(ctx.blog().content.rendered), \u0275\u0275sanitizeUrl)("alt", ctx.stripHtml(ctx.blog().title.rendered));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.stripHtml(ctx.blog().title.rendered));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getExcerpt(ctx.blog().content.rendered));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, ctx.blog().date, "mediumDate"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.blog().categories && ctx.blog().categories.length > 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "blogs.readMore"));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    DatePipe,
    RouterLink,
    TranslateModule,
    TranslatePipe
  ], styles: ["\n\n.blog-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n}\n.blog-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.blog-card[_ngcontent-%COMP%]:hover   .read-more-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.blog-card[_ngcontent-%COMP%]:hover   .blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.blog-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.blog-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.blog-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 12px 0;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.blog-excerpt[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  flex: 1;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.8rem;\n  color: #999;\n  margin-top: auto;\n}\n.blog-date[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.blog-category[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n}\n.read-more-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: all 0.3s ease;\n  transform: translateY(10px);\n}\n.read-more-text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 12px 24px;\n  border: 2px solid white;\n  border-radius: 25px;\n  transition: all 0.3s ease;\n}\n.read-more-text[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .blog-card[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .blog-image[_ngcontent-%COMP%] {\n    height: 160px;\n  }\n  .blog-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .blog-excerpt[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n/*# sourceMappingURL=blog-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCardComponent, { className: "BlogCardComponent" });
})();

export {
  BlogCardComponent
};
//# sourceMappingURL=chunk-7IZFE6BM.js.map
