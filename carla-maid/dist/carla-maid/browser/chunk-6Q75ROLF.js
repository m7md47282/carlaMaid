import {
  RouterLink
} from "./chunk-5BXBS52F.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-46SSZPLE.js";
import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-Y2VF4S5M.js";

// src/app/home-cleaning/home-cleaning.component.ts
function HomeCleaningComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(service_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
function HomeCleaningComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2);
  }
}
var HomeCleaningComponent = class _HomeCleaningComponent {
  services = [
    { icon: "pi pi-home", title: "Complete Home Care", description: "Every room cleaned to perfection" },
    { icon: "pi pi-clock", title: "Flexible Scheduling", description: "Choose times that work for you" },
    { icon: "pi pi-shield", title: "Trusted Cleaners", description: "Background-checked professionals" },
    { icon: "pi pi-sparkles", title: "Quality Guaranteed", description: "Your satisfaction is our priority" }
  ];
  included = [
    "Kitchen cleaning and sanitization",
    "Bathroom deep cleaning",
    "Bedroom and living area dusting",
    "Floor vacuuming and mopping",
    "Window and mirror cleaning",
    "Furniture polishing",
    "Appliance exterior cleaning",
    "Trash removal"
  ];
  static \u0275fac = function HomeCleaningComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeCleaningComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeCleaningComponent, selectors: [["app-home-cleaning"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 14, consts: [[1, "service-page"], [1, "hero"], [1, "hero-content"], [1, "hero-subtitle"], ["routerLink", "/book-now", 1, "cta-button"], [1, "pi", "pi-calendar"], [1, "hero-overlay"], [1, "services-grid"], [1, "container"], [1, "grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "whats-included"], [1, "included-grid"], ["class", "included-item", 4, "ngFor", "ngForOf"], [1, "pricing"], [1, "pricing-description"], [1, "pricing-features"], [1, "feature"], [1, "pi", "pi-calendar-plus"], [1, "pi", "pi-sync"], [1, "pi", "pi-star"], [1, "cta-section"], ["routerLink", "/book-now", 1, "cta-button", "large"], [1, "pi", "pi-phone"], [1, "service-card"], [1, "icon-wrapper"], [1, "included-item"], [1, "pi", "pi-check-circle"]], template: function HomeCleaningComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275element(10, "span", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "section", 7)(15, "div", 8)(16, "h2");
      \u0275\u0275text(17, "Your Home, Perfectly Clean");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9);
      \u0275\u0275template(19, HomeCleaningComponent_div_19_Template, 7, 4, "div", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "section", 11)(21, "div", 8)(22, "h2");
      \u0275\u0275text(23, "Complete Home Cleaning Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12);
      \u0275\u0275template(25, HomeCleaningComponent_div_25_Template, 4, 1, "div", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "section", 14)(27, "div", 8)(28, "h2");
      \u0275\u0275text(29, "Affordable Home Cleaning Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 15);
      \u0275\u0275text(31, " Choose from our flexible cleaning plans designed to fit your schedule and budget. Weekly, bi-weekly, or monthly options available. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 16)(33, "div", 17);
      \u0275\u0275element(34, "i", 18);
      \u0275\u0275elementStart(35, "h4");
      \u0275\u0275text(36, "One-Time Clean");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Perfect for special occasions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 17);
      \u0275\u0275element(40, "i", 19);
      \u0275\u0275elementStart(41, "h4");
      \u0275\u0275text(42, "Regular Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "Weekly or bi-weekly cleaning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 17);
      \u0275\u0275element(46, "i", 20);
      \u0275\u0275elementStart(47, "h4");
      \u0275\u0275text(48, "Premium Package");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p");
      \u0275\u0275text(50, "Includes all extras");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(51, "section", 21)(52, "div", 8)(53, "h2");
      \u0275\u0275text(54, "Experience a Spotless Home Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Let our professional cleaners transform your home into a pristine sanctuary.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 22);
      \u0275\u0275element(58, "span", 23);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "shared.HomeCleaninginQatar"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "paragraph.theBestHomeCleaning"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "shared.bookNow"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.services);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.included);
      \u0275\u0275advance(34);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 12, "shared.bookNow"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, TranslateModule, TranslatePipe, RouterLink], styles: [`

.service-page[_ngcontent-%COMP%] {
  width: 100%;
  overflow-x: hidden;
}
.hero[_ngcontent-%COMP%] {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #ed6ea0 0%,
      #ec8c69 100%);
  color: white;
  text-align: center;
  padding: 2rem;
  overflow: hidden;
}
.hero[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom;
  background-size: cover;
  opacity: 0.3;
}
.hero-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  max-width: 800px;
}
.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}
.cta-button[_ngcontent-%COMP%] {
  background: white;
  color: #ed6ea0;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.cta-button[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
.cta-button.large[_ngcontent-%COMP%] {
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
}
.services-grid[_ngcontent-%COMP%], 
.whats-included[_ngcontent-%COMP%], 
.pricing[_ngcontent-%COMP%], 
.cta-section[_ngcontent-%COMP%] {
  padding: 4rem 2rem;
}
.container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
}
.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 2.5rem;
  color: #0346FF;
  margin-bottom: 3rem;
}
.grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.service-card[_ngcontent-%COMP%] {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}
.service-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(237, 110, 160, 0.3);
}
.service-card[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background:
    linear-gradient(
      135deg,
      #ed6ea0 0%,
      #ec8c69 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.service-card[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: white;
}
.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: #0346FF;
  margin-bottom: 0.5rem;
}
.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #666;
  line-height: 1.6;
}
.whats-included[_ngcontent-%COMP%] {
  background: #f8f9fa;
}
.included-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.included-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.included-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: #ed6ea0;
  flex-shrink: 0;
}
.included-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: #333;
}
.pricing[_ngcontent-%COMP%]   .pricing-description[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 3rem;
}
.pricing[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.pricing[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {
  text-align: center;
  padding: 2rem;
  background:
    linear-gradient(
      135deg,
      rgba(237, 110, 160, 0.1) 0%,
      rgba(236, 140, 105, 0.1) 100%);
  border-radius: 12px;
  border: 2px solid rgba(237, 110, 160, 0.2);
}
.pricing[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 3rem;
  color: #ed6ea0;
  margin-bottom: 1rem;
}
.pricing[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: #0346FF;
  margin-bottom: 0.5rem;
}
.pricing[_ngcontent-%COMP%]   .pricing-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #666;
  font-size: 1.1rem;
}
.cta-section[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #ed6ea0 0%,
      #ec8c69 100%);
  color: white;
  text-align: center;
}
.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}
.cta-section[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {
  background: white;
  color: #ed6ea0;
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%] {
    height: 50vh;
  }
  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .services-grid[_ngcontent-%COMP%], 
   .whats-included[_ngcontent-%COMP%], 
   .pricing[_ngcontent-%COMP%], 
   .cta-section[_ngcontent-%COMP%] {
    padding: 3rem 1.5rem;
  }
}
/*# sourceMappingURL=home-cleaning.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeCleaningComponent, { className: "HomeCleaningComponent" });
})();
export {
  HomeCleaningComponent
};
//# sourceMappingURL=chunk-6Q75ROLF.js.map
