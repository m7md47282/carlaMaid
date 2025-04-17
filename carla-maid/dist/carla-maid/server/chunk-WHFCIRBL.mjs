import './polyfills.server.mjs';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from "./chunk-ADZJELFU.mjs";
import "./chunk-SABP6HPD.mjs";
import {
  MatIcon,
  MatIconModule
} from "./chunk-AKN435VV.mjs";
import {
  Dir
} from "./chunk-NPJDOPSY.mjs";
import "./chunk-4Q3HI7BM.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-OKUDJCYY.mjs";
import "./chunk-3RL2LK7B.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EEE5GEKV.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/app/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
  openUrl(url) {
    window.open(url, "_blank");
  }
};
__publicField(_FooterComponent, "\u0275fac", function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
});
__publicField(_FooterComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 30, consts: [[1, "app-footer"], [1, "flex-around", "flex-wrap", "gap-30"], [1, "logo"], ["src", "../../assets/images/Logo-En.png", "alt", ""], [1, "social-media-container"], [1, "social-media-item"], ["svgIcon", "instagram", 1, "social-media-icon", "instagram", 3, "click"], ["svgIcon", "facebook", 1, "social-media-icon", "facebook", 3, "click"], ["svgIcon", "linkedin", 1, "social-media-icon", "linkedin", 3, "click"], ["svgIcon", "x", 1, "social-media-icon", "x", 3, "click"], ["svgIcon", "whatsapp", 1, "social-media-icon", "whatsapp", 3, "click"], [1, "gap-10", "our-info"], ["dir", "ltr"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "section", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "mat-icon", 6);
    \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_9_listener() {
      return ctx.openUrl("https://www.instagram.com/carlamaid.qa/");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "mat-icon", 7);
    \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_11_listener() {
      return ctx.openUrl("https://www.facebook.com/carlamaid.qa");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 5)(13, "mat-icon", 8);
    \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_13_listener() {
      return ctx.openUrl("https://www.linkedin.com/company/carlamaid/");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "mat-icon", 9);
    \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_15_listener() {
      return ctx.openUrl("https://x.com/MaidQa84948");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 5)(17, "mat-icon", 10);
    \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_17_listener() {
      return ctx.openUrl("https://wa.me/97471236660");
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "section", 11)(19, "div")(20, "h1");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "h1");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "h1");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 12);
    \u0275\u0275text(50, "+974 7123 6660");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p");
    \u0275\u0275text(52, "Info@carlamaid.qa");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "paragraph.ExperienceConvenient"));
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 12, "shared.Company"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "shared.OurVision"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 16, "shared.OurMission"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 18, "shared.OurValues"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 20, "shared.Services"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 22, "shared.HomeCleaning"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 24, "shared.BusinessCleaning"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 26, "shared.HospitalityStaff"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 28, "shared.ContactUs"));
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  MatFormFieldModule,
  Dir,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatIcon
], styles: ["\n\n.app-footer[_ngcontent-%COMP%] {\n  background-color: rgba(93, 230, 254, 0.1607843137);\n  padding: 2rem;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  min-width: 200px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15rem;\n  max-width: 240px;\n  height: auto;\n}\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.8;\n}\nh1[_ngcontent-%COMP%] {\n  color: #00A9FF;\n}\nhr[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.our-info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px;\n}\n.our-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.form-section[_ngcontent-%COMP%] {\n  width: 55%;\n  max-width: 235px;\n}\n.form-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.Copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 12px;\n  color: gray;\n}\n.social-media-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n@media (max-width: 780px) {\n  .our-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .logo[_ngcontent-%COMP%], \n   .our-info[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px;\n    width: 100%;\n  }\n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .our-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Copyright[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .social-media[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n}\n@media (max-width: 425px) {\n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .logo[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] }));
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\footer\\footer.component.ts", lineNumber: 21 });
})();
export {
  FooterComponent
};
//# sourceMappingURL=chunk-WHFCIRBL.mjs.map
