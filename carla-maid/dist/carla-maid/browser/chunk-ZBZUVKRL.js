import {
  MatIconModule
} from "./chunk-KYGEZR56.js";
import {
  ConfigService
} from "./chunk-XCSS5RMK.js";
import "./chunk-GRKFXX47.js";
import "./chunk-I7HUYMRS.js";
import {
  Router,
  RouterLink
} from "./chunk-4ALVWZRA.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-2HCKQESM.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KOFF5M7E.js";

// src/app/header/header.component.ts
var _forTrack0 = ($index, $item) => $item.link;
var _c0 = (a0) => ({ "ar": a0 });
function HeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
}
function HeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
function HeaderComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function HeaderComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 14);
    \u0275\u0275element(2, "path", 18);
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10)(1, "a", 19);
    \u0275\u0275listener("click", function HeaderComponent_For_13_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275element(2, "span");
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r4.link);
    \u0275\u0275advance();
    \u0275\u0275classMap(item_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
var HeaderComponent = class _HeaderComponent {
  translate;
  configService;
  router;
  items = [];
  langChangeSubscription;
  isMobileMenuOpen = false;
  constructor(translate, configService, router) {
    this.translate = translate;
    this.configService = configService;
    this.router = router;
  }
  ngOnInit() {
    if (this.configService.isBrowser()) {
      const savedLang = localStorage.getItem("currentLang") || "en";
    }
    this.updateNavigationItems();
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event) => {
      this.updateNavigationItems();
    });
  }
  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
  onResize(event) {
    if (event.target.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".nav-container") && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  updateNavigationItems() {
    this.items = [
      {
        label: this.translate.instant("header.home"),
        icon: "pi pi-home",
        link: "/"
      },
      {
        label: this.translate.instant("header.ourServices"),
        icon: "pi pi-star",
        link: "/our-services"
      },
      {
        label: this.translate.instant("shared.aboutUs"),
        icon: "pi pi-envelope",
        link: "/about-us"
      },
      {
        label: this.translate.instant("header.blog"),
        icon: "pi pi-envelope",
        link: "/blogs-list"
      },
      {
        label: this.translate.instant("header.bookNow"),
        icon: "pi pi-envelope",
        link: "/book-now"
      }
    ];
    console.log("Navigation items updated:", this.items);
  }
  // Test method to manually navigate
  navigateToBookNow() {
    console.log("Navigating to book-now...");
    this.router.navigate(["/book-now"]).then((success) => {
      console.log("Navigation successful:", success);
    }).catch((error) => {
      console.error("Navigation failed:", error);
    });
  }
  switchLanguage() {
    this.configService.toggleLang();
  }
  getLang() {
    return this.configService.getLang();
  }
  direction() {
    return this.configService.getDirection();
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function HeaderComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, \u0275\u0275resolveWindow)("click", function HeaderComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 12, consts: [[3, "ngClass"], [1, "nav"], [1, "nav-container"], [1, "logo"], ["src", "../../assets/images/carla-en.png", "alt", "logo"], ["src", "../../assets/images/carla-ar.png", "alt", "logo-ar"], [1, "mobile-menu-toggle", 3, "click"], [1, "hamburger-line"], [1, "nav-menu"], ["class", "mobile-close-btn", 3, "click", 4, "ngIf"], [1, "nav-item"], [1, "nav-end"], ["routerLink", "/contact-us", 1, "clickable", "contact-link"], [1, "translation-button", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "Navigation / Globe"], ["id", "Vector", "d", "M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21", "stroke", "gray", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "mobile-close-btn", 3, "click"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "nav-link", 3, "click", "routerLink"], [1, "ml-2"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275template(4, HeaderComponent_Conditional_4_Template, 1, 0, "img", 4)(5, HeaderComponent_Conditional_5_Template, 1, 0, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_6_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275element(7, "span", 7)(8, "span", 7)(9, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 8);
      \u0275\u0275template(11, HeaderComponent_button_11_Template, 3, 0, "button", 9);
      \u0275\u0275repeaterCreate(12, HeaderComponent_For_13_Template, 5, 4, "li", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "span", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 13);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_18_listener() {
        return ctx.switchLanguage();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 14)(20, "g", 15);
      \u0275\u0275element(21, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, ctx.direction() == "rtl"));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.getLang() == "en" ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.isMobileMenuOpen);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("mobile-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.items);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, "shared.contactUs"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.getLang() === "en" ? "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "English", " ");
    }
  }, dependencies: [
    TranslateModule,
    TranslatePipe,
    MatIconModule,
    CommonModule,
    NgClass,
    NgIf,
    RouterLink
  ], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 0 20px;\n  background-color: #f5f5f5;\n}\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: auto;\n  object-fit: cover;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  z-index: 1000;\n  transition: all 0.3s ease;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 3px;\n  background-color: #333;\n  margin: 3px 0;\n  transition: 0.3s;\n  border-radius: 2px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(-45deg) translate(-5px, 6px);\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mobile-menu-toggle.active[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(45deg) translate(-5px, -6px);\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 20px;\n  align-items: center;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .mobile-close-btn[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  z-index: 1001;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .mobile-close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: inherit;\n  padding: 10px;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-end[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-end[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {\n  display: block;\n}\nheader[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nheader[_ngcontent-%COMP%]   .translation-button[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0;\n  background-color: rgba(255, 255, 255, 0);\n  color: gray;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.3s ease;\n}\nheader[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\nheader.ar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\nheader.ar[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  header[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.9);\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease-in-out;\n    z-index: 999;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .mobile-close-btn[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 0;\n    animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out 0.2s forwards;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    opacity: 0;\n    animation: _ngcontent-%COMP%_slideInUp 0.4s ease-in-out 0.3s forwards;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:nth-child(2) {\n    animation-delay: 0.4s;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:nth-child(3) {\n    animation-delay: 0.5s;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:nth-child(4) {\n    animation-delay: 0.6s;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:nth-child(5) {\n    animation-delay: 0.7s;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:nth-child(6) {\n    animation-delay: 0.8s;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 18px;\n    padding: 15px 20px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 12px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-end[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-end[_ngcontent-%COMP%]   .translation-button[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n@media (max-width: 480px) {\n  header[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 12px 15px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-end[_ngcontent-%COMP%]   .translation-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    gap: 5px;\n  }\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-end[_ngcontent-%COMP%]   .translation-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();
export {
  HeaderComponent
};
//# sourceMappingURL=chunk-ZBZUVKRL.js.map
