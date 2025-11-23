import './polyfills.server.mjs';
import {
  RouterLink
} from "./chunk-VAXAWVT6.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ULFMFSOZ.mjs";
import {
  Meta,
  Title
} from "./chunk-RTKK4VRH.mjs";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-REGLKICM.mjs";
import "./chunk-LBJNHE26.mjs";

// src/app/maid-services/maid-services.component.ts
var MaidServicesComponent = class _MaidServicesComponent {
  meta;
  title;
  constructor(meta, title) {
    this.meta = meta;
    this.title = title;
  }
  ngOnInit() {
    this.title.setTitle("Professional Maid Services in Qatar | Carla Maid");
    this.meta.updateTag({
      name: "description",
      content: "Professional maid services in Qatar. Flexible, reliable, and trained housekeeping staff for your home. Book hourly or full-time maids with Carla Maid."
    });
  }
  static \u0275fac = function MaidServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaidServicesComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaidServicesComponent, selectors: [["app-maid-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 147, vars: 15, consts: [[1, "service-page"], [1, "hero-section"], [1, "hero-content"], [1, "hero-subtitle"], ["routerLink", "/book-now", 1, "cta-button"], [1, "service-details"], [1, "container"], [1, "section-header"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], [1, "pi", "pi-clock"], [1, "pi", "pi-users"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-shield"], [1, "whats-included"], [1, "included-grid"], [1, "included-item"], [1, "pi", "pi-check"], [1, "pricing-section"], [1, "pricing-grid"], [1, "pricing-card"], [1, "price"], [1, "pricing-card", "featured"], [1, "badge"], [1, "cta-section"], [1, "cta-buttons"], ["routerLink", "/book-now", 1, "btn-primary"], ["routerLink", "/contact-us", 1, "btn-secondary"]], template: function MaidServicesComponent_Template(rf, ctx) {
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
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "section", 5)(13, "div", 6)(14, "div", 7)(15, "h2");
      \u0275\u0275text(16, "Professional Maid Services in Qatar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Our trained and experienced maids provide flexible cleaning solutions tailored to your home's needs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "div", 10);
      \u0275\u0275element(22, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h3");
      \u0275\u0275text(24, "Flexible Hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "Choose from hourly, daily, weekly, or monthly maid services that fit your schedule and budget");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 10);
      \u0275\u0275element(29, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h3");
      \u0275\u0275text(31, "Trained Professionals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "All our maids are thoroughly trained, background-checked, and experienced in household management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 10);
      \u0275\u0275element(36, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h3");
      \u0275\u0275text(38, "Quality Guaranteed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "100% satisfaction guaranteed with supervision and quality control on every service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 9)(42, "div", 10);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h3");
      \u0275\u0275text(45, "Insured & Reliable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p");
      \u0275\u0275text(47, "Fully insured services with reliable staff you can trust in your home");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "section", 15)(49, "div", 6)(50, "h2");
      \u0275\u0275text(51, "What's Included in Our Maid Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 16)(53, "div", 17);
      \u0275\u0275element(54, "i", 18);
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "General house cleaning and tidying");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 17);
      \u0275\u0275element(58, "i", 18);
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Kitchen cleaning and dishwashing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 17);
      \u0275\u0275element(62, "i", 18);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Bathroom cleaning and sanitization");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 17);
      \u0275\u0275element(66, "i", 18);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Bedroom cleaning and bed making");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 17);
      \u0275\u0275element(70, "i", 18);
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Laundry and ironing services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 17);
      \u0275\u0275element(74, "i", 18);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Floor mopping and vacuuming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 17);
      \u0275\u0275element(78, "i", 18);
      \u0275\u0275elementStart(79, "span");
      \u0275\u0275text(80, "Dusting and surface wiping");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 17);
      \u0275\u0275element(82, "i", 18);
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84, "Organizing and arranging");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "section", 19)(86, "div", 6)(87, "h2");
      \u0275\u0275text(88, "Flexible Service Options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 20)(90, "div", 21)(91, "h3");
      \u0275\u0275text(92, "Hourly Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 22);
      \u0275\u0275text(94, "Starting from ");
      \u0275\u0275elementStart(95, "strong");
      \u0275\u0275text(96, "35 QAR/hour");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "ul")(98, "li");
      \u0275\u0275text(99, "Minimum 4 hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "li");
      \u0275\u0275text(101, "Perfect for occasional help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "li");
      \u0275\u0275text(103, "Same-day availability");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 23)(105, "div", 24);
      \u0275\u0275text(106, "Most Popular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "h3");
      \u0275\u0275text(108, "Full-Time Maid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 22);
      \u0275\u0275text(110, "Competitive ");
      \u0275\u0275elementStart(111, "strong");
      \u0275\u0275text(112, "Monthly Rates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "ul")(114, "li");
      \u0275\u0275text(115, "8 hours per day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "li");
      \u0275\u0275text(117, "6 days per week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "li");
      \u0275\u0275text(119, "Dedicated maid for your home");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(120, "div", 21)(121, "h3");
      \u0275\u0275text(122, "Part-Time Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p", 22);
      \u0275\u0275text(124, "Flexible ");
      \u0275\u0275elementStart(125, "strong");
      \u0275\u0275text(126, "Daily/Weekly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "ul")(128, "li");
      \u0275\u0275text(129, "Choose your schedule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "li");
      \u0275\u0275text(131, "Regular weekly visits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "li");
      \u0275\u0275text(133, "Consistent quality");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(134, "section", 25)(135, "div", 6)(136, "h2");
      \u0275\u0275text(137, "Ready to Book Your Maid Service?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p");
      \u0275\u0275text(139, "Get professional, reliable maid services in Qatar today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 26)(141, "button", 27);
      \u0275\u0275text(142);
      \u0275\u0275pipe(143, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "button", 28);
      \u0275\u0275text(145);
      \u0275\u0275pipe(146, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "shared.MaidServices"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "paragraph.OurMaidServicesOffer"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "shared.bookNow"));
      \u0275\u0275advance(132);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(143, 11, "shared.bookNow"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(146, 13, "shared.contactUs"));
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe, RouterLink], styles: ["\n\n.service-page[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: hidden;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 100px 20px 80px;\n  text-align: center;\n  color: white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 30px;\n  opacity: 0.95;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease 0.2s;\n  animation-fill-mode: both;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  padding: 15px 40px;\n  font-size: 18px;\n  background: white;\n  color: #667eea;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease 0.4s;\n  animation-fill-mode: both;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.service-details[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.service-details[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 30px;\n  border-radius: 15px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 30px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n}\n.whats-included[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f8f9fa;\n}\n.whats-included[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.whats-included[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 50px;\n}\n.whats-included[_ngcontent-%COMP%]   .included-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.whats-included[_ngcontent-%COMP%]   .included-grid[_ngcontent-%COMP%]   .included-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  background: white;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.whats-included[_ngcontent-%COMP%]   .included-grid[_ngcontent-%COMP%]   .included-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(10px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n.whats-included[_ngcontent-%COMP%]   .included-grid[_ngcontent-%COMP%]   .included-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 24px;\n}\n.whats-included[_ngcontent-%COMP%]   .included-grid[_ngcontent-%COMP%]   .included-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333;\n}\n.pricing-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.pricing-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.pricing-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 50px;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 30px;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 40px 30px;\n  border-radius: 15px;\n  text-align: center;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.featured[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  transform: scale(1.05);\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.featured[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.featured[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], \n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.featured[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.featured[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #ffd700;\n  color: #333;\n  padding: 5px 20px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 15px;\n  color: #333;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 25px;\n  color: #666;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #667eea;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  color: #666;\n}\n.pricing-section[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  text-align: center;\n  color: white;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 15px;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 30px;\n  opacity: 0.95;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px 40px;\n  font-size: 18px;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #667eea;\n  transform: translateY(-3px);\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 60px 20px 50px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .service-details[_ngcontent-%COMP%], \n   .whats-included[_ngcontent-%COMP%], \n   .pricing-section[_ngcontent-%COMP%], \n   .cta-section[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .features-grid[_ngcontent-%COMP%], \n   .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=maid-services.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaidServicesComponent, { className: "MaidServicesComponent" });
})();
export {
  MaidServicesComponent
};
//# sourceMappingURL=chunk-X67W2WAV.mjs.map
