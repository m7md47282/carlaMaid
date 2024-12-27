import './polyfills.server.mjs';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from "./chunk-MMPH2BH2.mjs";
import "./chunk-S7HLCUA6.mjs";
import {
  Dir
} from "./chunk-CDEIDZOX.mjs";
import "./chunk-RLAMK7QY.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-TUQAKRBG.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-J4UFSZJR.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/app/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
  openInstagram() {
    window.open("https://www.instagram.com/carlamaid.qa/profilecard/?igsh=ZjZhNXg0OWpoY2Zp", "_blank");
  }
  openFacebook() {
    window.open("https://www.facebook.com/share/15JXvgi56G/?mibextid=wwXIfr", "_blank");
  }
};
__publicField(_FooterComponent, "\u0275fac", function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
});
__publicField(_FooterComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 30, consts: [[1, "app-footer"], [1, "flex-around", "flex-wrap", "gap-30"], [1, "logo"], ["src", "../../assets/images/Logo-En.png", "alt", ""], [1, "flex", "gap-1", "social-media"], [1, "clickable", 3, "click"], ["width", "28", "height", "29", "viewBox", "0 0 28 29", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.7853 28.5002C6.4439 28.5002 0.523438 22.1611 0.523438 14.3006C0.523438 6.44015 6.4439 0.101074 13.7853 0.101074C21.1266 0.101074 27.0471 6.44015 27.0471 14.3006C27.0471 22.1611 21.1266 28.5002 13.7853 28.5002ZM13.7853 1.11533C6.91754 1.11533 1.47071 7.07406 1.47071 14.3006C1.47071 21.6539 7.03594 27.4859 13.7853 27.4859C20.653 27.4859 26.0998 21.5272 26.0998 14.3006C26.0998 6.94728 20.5346 1.11533 13.7853 1.11533Z", "fill", "#00A9FF"], ["d", "M13.7862 8.84936C15.4439 8.84936 15.6807 8.84936 16.2728 8.84936C16.8648 8.84936 17.2201 8.97614 17.4569 9.10292C17.6937 9.2297 17.9305 9.35649 18.1673 9.61005C18.4042 9.86361 18.5226 10.1172 18.641 10.3707C18.7594 10.6243 18.8778 11.0046 18.8778 11.6386C18.8778 12.3992 18.8778 12.526 18.8778 14.301C18.8778 16.0759 18.8778 16.3295 18.8778 16.9634C18.8778 17.5973 18.7594 17.9776 18.641 18.2312C18.5226 18.4848 18.4042 18.7383 18.1673 18.9919C17.9305 19.2455 17.6937 19.3722 17.4569 19.499C17.2201 19.6258 16.8648 19.7526 16.2728 19.7526C15.5623 19.7526 15.4439 19.7526 13.7862 19.7526C12.1285 19.7526 11.8916 19.7526 11.2996 19.7526C10.7075 19.7526 10.3523 19.6258 10.1155 19.499C9.87868 19.3722 9.64187 19.2455 9.40505 18.9919C9.16823 18.7383 9.04982 18.4848 8.93141 18.2312C8.813 17.9776 8.69459 17.5973 8.69459 16.9634C8.69459 16.2027 8.69459 16.0759 8.69459 14.301C8.69459 12.526 8.69459 12.2725 8.69459 11.6386C8.69459 11.0046 8.813 10.6243 8.93141 10.3707C9.04982 10.1172 9.16823 9.86361 9.40505 9.61005C9.64187 9.35649 9.87868 9.2297 10.1155 9.10292C10.3523 8.97614 10.7075 8.84936 11.2996 8.84936C11.8916 8.84936 12.1285 8.84936 13.7862 8.84936ZM13.7862 7.58154C12.1285 7.58154 11.8916 7.58154 11.1812 7.58154C10.4707 7.58154 10.1155 7.70832 9.64187 7.83511C9.28664 7.96189 8.93141 8.21545 8.57618 8.5958C8.22095 8.97614 7.98414 9.35649 7.86573 9.73683C7.74732 10.3707 7.62891 10.8779 7.62891 11.5118C7.62891 12.2725 7.62891 12.3992 7.62891 14.301C7.62891 16.2027 7.62891 16.3295 7.62891 17.0902C7.62891 17.8509 7.74732 18.2312 7.86573 18.7383C7.98414 19.1187 8.22095 19.499 8.57618 19.8794C8.93141 20.2597 9.28664 20.5133 9.64187 20.6401C9.99709 20.7668 10.4707 20.8936 11.1812 20.8936C11.8916 20.8936 12.01 20.8936 13.7862 20.8936C15.5623 20.8936 15.6807 20.8936 16.3912 20.8936C17.1017 20.8936 17.4569 20.7668 17.9305 20.6401C18.2857 20.5133 18.641 20.2597 18.9962 19.8794C19.3514 19.499 19.5882 19.1187 19.7067 18.7383C19.8251 18.358 19.9435 17.8509 19.9435 17.0902C19.9435 16.3295 19.9435 16.2027 19.9435 14.301C19.9435 12.3992 19.9435 12.2725 19.9435 11.5118C19.9435 10.7511 19.8251 10.3707 19.7067 9.86361C19.5882 9.48327 19.3514 9.10292 18.9962 8.72258C18.641 8.34223 18.2857 8.08867 17.9305 7.96189C17.4569 7.83511 16.9832 7.70832 16.3912 7.70832C15.6807 7.58154 15.4439 7.58154 13.7862 7.58154Z", "fill", "#00A9FF"], ["d", "M13.7849 10.8779C12.0088 10.8779 10.5879 12.3993 10.5879 14.301C10.5879 16.2028 12.0088 17.7242 13.7849 17.7242C15.561 17.7242 16.9819 16.2028 16.9819 14.301C16.9819 12.3993 15.561 10.8779 13.7849 10.8779ZM13.7849 16.4563C12.6008 16.4563 11.6536 15.4421 11.6536 14.1743C11.6536 12.9064 12.6008 11.8922 13.7849 11.8922C14.969 11.8922 15.9163 12.9064 15.9163 14.1743C15.7979 15.5689 14.969 16.4563 13.7849 16.4563Z", "fill", "#00A9FF"], ["d", "M17.8135 10.7511C17.8135 11.1314 17.4583 11.5117 17.103 11.5117C16.7478 11.5117 16.3926 11.1314 16.3926 10.7511C16.3926 10.3707 16.7478 9.99039 17.103 9.99039C17.4583 9.86361 17.8135 10.244 17.8135 10.7511Z", "fill", "#00A9FF"], ["width", "27", "height", "29", "viewBox", "0 0 27 29", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.3087 28.5002C5.96734 28.5002 0.046875 22.1611 0.046875 14.3006C0.046875 6.44015 5.96734 0.101074 13.3087 0.101074C20.6501 0.101074 26.5706 6.44015 26.5706 14.3006C26.5706 22.1611 20.6501 28.5002 13.3087 28.5002ZM13.3087 1.11533C6.44098 1.11533 0.994148 7.07406 0.994148 14.3006C0.994148 21.6539 6.55939 27.4859 13.3087 27.4859C20.058 27.4859 25.6233 21.5272 25.6233 14.3006C25.6233 6.94728 20.058 1.11533 13.3087 1.11533Z", "fill", "#00A9FF"], ["d", "M11.5322 21.6541H14.2556V14.3008H16.1501L16.387 11.7651H14.2556C14.2556 11.7651 14.2556 10.8777 14.2556 10.3705C14.2556 9.73663 14.374 9.60985 14.8477 9.60985C15.3213 9.60985 16.387 9.60985 16.387 9.60985V7.07422C16.387 7.07422 14.8477 7.07422 14.4924 7.07422C12.4795 7.07422 11.5322 8.08847 11.5322 9.86342C11.5322 11.5116 11.5322 11.8919 11.5322 11.8919H10.1113V14.4276H11.5322V21.6541Z", "fill", "#00A9FF"], [1, "gap-10", "our-info"], ["dir", "ltr"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "section", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "span", 5);
    \u0275\u0275listener("click", function FooterComponent_Template_span_click_8_listener() {
      return ctx.openInstagram();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 6);
    \u0275\u0275element(10, "path", 7)(11, "path", 8)(12, "path", 9)(13, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 5);
    \u0275\u0275listener("click", function FooterComponent_Template_span_click_14_listener() {
      return ctx.openFacebook();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 11);
    \u0275\u0275element(16, "path", 12)(17, "path", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "section", 14)(19, "div")(20, "h1");
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
    \u0275\u0275elementStart(49, "p", 15);
    \u0275\u0275text(50, "+97 9937 398 38");
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
  MatSelectModule
], styles: ["\n\n.app-footer[_ngcontent-%COMP%] {\n  background-color: rgba(93, 230, 254, 0.1607843137);\n  padding: 2rem;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  min-width: 200px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15rem;\n  max-width: 240px;\n  height: auto;\n}\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.8;\n}\nh1[_ngcontent-%COMP%] {\n  color: #00A9FF;\n}\nhr[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.our-info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px;\n}\n.our-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.form-section[_ngcontent-%COMP%] {\n  width: 55%;\n  max-width: 235px;\n}\n.form-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.Copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 12px;\n  color: gray;\n}\n@media (max-width: 780px) {\n  .our-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .logo[_ngcontent-%COMP%], \n   .our-info[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px;\n    width: 100%;\n  }\n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .our-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Copyright[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .social-media[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n}\n@media (max-width: 425px) {\n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .logo[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] }));
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();
export {
  FooterComponent
};
//# sourceMappingURL=chunk-HIMHRCPB.mjs.map
