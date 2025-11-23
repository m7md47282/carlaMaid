import {
  RouterLink
} from "./chunk-5BXBS52F.js";
import {
  Meta,
  Title,
  TranslateModule,
  TranslatePipe
} from "./chunk-46SSZPLE.js";
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
} from "./chunk-Y2VF4S5M.js";

// src/app/carpet-cleaning/carpet-cleaning.component.ts
var CarpetCleaningComponent = class _CarpetCleaningComponent {
  meta;
  title;
  constructor(meta, title) {
    this.meta = meta;
    this.title = title;
  }
  ngOnInit() {
    this.title.setTitle("Professional Carpet Cleaning in Qatar | Carla Maid");
    this.meta.updateTag({
      name: "description",
      content: "Expert carpet cleaning services in Qatar. Steam cleaning, stain removal, and deep sanitization for all carpet types. Book Carla Maid today."
    });
  }
  static \u0275fac = function CarpetCleaningComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarpetCleaningComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarpetCleaningComponent, selectors: [["app-carpet-cleaning"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 156, vars: 15, consts: [[1, "service-page", "carpet-cleaning"], [1, "hero-section"], [1, "hero-content"], [1, "hero-subtitle"], ["routerLink", "/book-now", 1, "cta-button"], [1, "service-details"], [1, "container"], [1, "section-header"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], [1, "pi", "pi-sun"], [1, "pi", "pi-bolt"], [1, "pi", "pi-clock"], [1, "pi", "pi-heart"], [1, "cleaning-methods"], [1, "methods-grid"], [1, "method-card"], [1, "method-number"], [1, "what-we-clean"], [1, "clean-grid"], [1, "clean-item"], [1, "pi", "pi-check-circle"], [1, "benefits-section"], [1, "benefits-grid"], [1, "benefit-card"], [1, "pi", "pi-heart-fill"], [1, "pi", "pi-eye"], [1, "pi", "pi-shield"], [1, "cta-section"], [1, "cta-buttons"], ["routerLink", "/book-now", 1, "btn-primary"], ["routerLink", "/contact-us", 1, "btn-secondary"]], template: function CarpetCleaningComponent_Template(rf, ctx) {
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
      \u0275\u0275text(16, "Professional Carpet Cleaning in Qatar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Restore your carpets to like-new condition with our advanced cleaning techniques");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "div", 10);
      \u0275\u0275element(22, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h3");
      \u0275\u0275text(24, "Steam Cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "Hot water extraction removes deep-seated dirt and allergens effectively");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 10);
      \u0275\u0275element(29, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h3");
      \u0275\u0275text(31, "Stain Removal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "Specialized treatments for tough stains including wine, coffee, and pet accidents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 10);
      \u0275\u0275element(36, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h3");
      \u0275\u0275text(38, "Fast Drying");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Advanced equipment ensures carpets dry quickly, usually within 2-4 hours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 9)(42, "div", 10);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h3");
      \u0275\u0275text(45, "Eco-Friendly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p");
      \u0275\u0275text(47, "Safe, non-toxic cleaning solutions perfect for homes with children and pets");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "section", 15)(49, "div", 6)(50, "h2");
      \u0275\u0275text(51, "Our Carpet Cleaning Methods");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 16)(53, "div", 17)(54, "div", 18);
      \u0275\u0275text(55, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "h3");
      \u0275\u0275text(57, "Hot Water Extraction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "Deep steam cleaning that penetrates carpet fibers to remove embedded dirt and bacteria. Perfect for heavily soiled carpets.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 17)(61, "div", 18);
      \u0275\u0275text(62, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h3");
      \u0275\u0275text(64, "Dry Cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p");
      \u0275\u0275text(66, "Low-moisture cleaning method ideal for delicate carpets. Quick drying time makes it perfect for commercial spaces.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 17)(68, "div", 18);
      \u0275\u0275text(69, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "h3");
      \u0275\u0275text(71, "Bonnet Cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p");
      \u0275\u0275text(73, "Surface cleaning method that refreshes carpet appearance quickly. Great for regular maintenance between deep cleans.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 17)(75, "div", 18);
      \u0275\u0275text(76, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h3");
      \u0275\u0275text(78, "Stain Protection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p");
      \u0275\u0275text(80, "Apply protective coating after cleaning to repel spills and stains, extending the life of your carpet.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "section", 19)(82, "div", 6)(83, "h2");
      \u0275\u0275text(84, "What We Clean");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 20)(86, "div", 21);
      \u0275\u0275element(87, "i", 22);
      \u0275\u0275elementStart(88, "div")(89, "h4");
      \u0275\u0275text(90, "All Carpet Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92, "Persian, Oriental, Wool, Synthetic, Berber");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "div", 21);
      \u0275\u0275element(94, "i", 22);
      \u0275\u0275elementStart(95, "div")(96, "h4");
      \u0275\u0275text(97, "Area Rugs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p");
      \u0275\u0275text(99, "All sizes and materials, including delicate rugs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 21);
      \u0275\u0275element(101, "i", 22);
      \u0275\u0275elementStart(102, "div")(103, "h4");
      \u0275\u0275text(104, "Upholstery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "Sofas, chairs, mattresses, and curtains");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 21);
      \u0275\u0275element(108, "i", 22);
      \u0275\u0275elementStart(109, "div")(110, "h4");
      \u0275\u0275text(111, "Car Interiors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p");
      \u0275\u0275text(113, "Vehicle carpets and upholstery cleaning");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(114, "section", 23)(115, "div", 6)(116, "h2");
      \u0275\u0275text(117, "Benefits of Professional Carpet Cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 24)(119, "div", 25);
      \u0275\u0275element(120, "i", 26);
      \u0275\u0275elementStart(121, "h3");
      \u0275\u0275text(122, "Healthier Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "p");
      \u0275\u0275text(124, "Removes allergens, dust mites, and bacteria");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 25);
      \u0275\u0275element(126, "i", 13);
      \u0275\u0275elementStart(127, "h3");
      \u0275\u0275text(128, "Extended Lifespan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p");
      \u0275\u0275text(130, "Regular cleaning protects your investment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 25);
      \u0275\u0275element(132, "i", 27);
      \u0275\u0275elementStart(133, "h3");
      \u0275\u0275text(134, "Improved Appearance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "p");
      \u0275\u0275text(136, "Restores color and texture to like-new");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 25);
      \u0275\u0275element(138, "i", 28);
      \u0275\u0275elementStart(139, "h3");
      \u0275\u0275text(140, "Odor Removal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p");
      \u0275\u0275text(142, "Eliminates pet odors and musty smells");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(143, "section", 29)(144, "div", 6)(145, "h2");
      \u0275\u0275text(146, "Refresh Your Carpets Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p");
      \u0275\u0275text(148, "Professional carpet cleaning services in Qatar - Book now!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 30)(150, "button", 31);
      \u0275\u0275text(151);
      \u0275\u0275pipe(152, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "button", 32);
      \u0275\u0275text(154);
      \u0275\u0275pipe(155, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "shared.CarpetCleaning"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "paragraph.BreatheNewLife"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "shared.bookNow"));
      \u0275\u0275advance(141);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(152, 11, "shared.bookNow"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(155, 13, "shared.contactUs"));
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe, RouterLink], styles: ["\n\n.service-page[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: hidden;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  padding: 100px 20px 80px;\n  text-align: center;\n  color: white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 30px;\n  opacity: 0.95;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  padding: 15px 40px;\n  font-size: 18px;\n  background: white;\n  color: #f5576c;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.service-details[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.service-details[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 30px;\n  border-radius: 15px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 30px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n}\n.cleaning-methods[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f8f9fa;\n}\n.cleaning-methods[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.cleaning-methods[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 50px;\n}\n.cleaning-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 30px;\n}\n.cleaning-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 15px;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.cleaning-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n}\n.cleaning-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%]   .method-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  right: 20px;\n  font-size: 80px;\n  font-weight: 700;\n  color: rgba(245, 87, 108, 0.1);\n}\n.cleaning-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  margin-bottom: 15px;\n  position: relative;\n}\n.cleaning-methods[_ngcontent-%COMP%]   .methods-grid[_ngcontent-%COMP%]   .method-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  position: relative;\n}\n.what-we-clean[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.what-we-clean[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.what-we-clean[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 50px;\n}\n.what-we-clean[_ngcontent-%COMP%]   .clean-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n}\n.what-we-clean[_ngcontent-%COMP%]   .clean-grid[_ngcontent-%COMP%]   .clean-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 25px;\n  background: #f8f9fa;\n  border-radius: 15px;\n  transition: all 0.3s ease;\n}\n.what-we-clean[_ngcontent-%COMP%]   .clean-grid[_ngcontent-%COMP%]   .clean-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(10px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n.what-we-clean[_ngcontent-%COMP%]   .clean-grid[_ngcontent-%COMP%]   .clean-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f5576c;\n  font-size: 32px;\n  margin-top: 5px;\n}\n.what-we-clean[_ngcontent-%COMP%]   .clean-grid[_ngcontent-%COMP%]   .clean-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333;\n  margin-bottom: 8px;\n}\n.what-we-clean[_ngcontent-%COMP%]   .clean-grid[_ngcontent-%COMP%]   .clean-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n.benefits-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.benefits-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.benefits-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n  margin-bottom: 50px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 15px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: scale(1.05);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 15px;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.95;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n  text-align: center;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin-bottom: 30px;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px 40px;\n  font-size: 18px;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n  color: white;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(245, 87, 108, 0.3);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #f5576c;\n  border: 2px solid #f5576c;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f5576c;\n  color: white;\n  transform: translateY(-3px);\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 60px 20px 50px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .service-details[_ngcontent-%COMP%], \n   .cleaning-methods[_ngcontent-%COMP%], \n   .what-we-clean[_ngcontent-%COMP%], \n   .benefits-section[_ngcontent-%COMP%], \n   .cta-section[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .features-grid[_ngcontent-%COMP%], \n   .methods-grid[_ngcontent-%COMP%], \n   .benefits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=carpet-cleaning.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarpetCleaningComponent, { className: "CarpetCleaningComponent" });
})();
export {
  CarpetCleaningComponent
};
//# sourceMappingURL=chunk-GWA7VDP2.js.map
