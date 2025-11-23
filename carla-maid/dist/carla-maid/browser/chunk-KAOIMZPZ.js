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

// src/app/event-cleaning/event-cleaning.component.ts
var EventCleaningComponent = class _EventCleaningComponent {
  meta;
  title;
  constructor(meta, title) {
    this.meta = meta;
    this.title = title;
  }
  ngOnInit() {
    this.title.setTitle("Event Cleaning Services in Qatar | Carla Maid");
    this.meta.updateTag({
      name: "description",
      content: "Professional event cleaning services in Qatar. Pre and post-event cleaning for weddings, parties, corporate events. Book Carla Maid today."
    });
  }
  static \u0275fac = function EventCleaningComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventCleaningComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCleaningComponent, selectors: [["app-event-cleaning"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 202, vars: 15, consts: [[1, "service-page", "event-cleaning"], [1, "hero-section"], [1, "hero-content"], [1, "hero-subtitle"], ["routerLink", "/book-now", 1, "cta-button"], [1, "service-details"], [1, "container"], [1, "section-header"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon"], [1, "pi", "pi-calendar-plus"], [1, "pi", "pi-trash"], [1, "pi", "pi-users"], [1, "pi", "pi-clock"], [1, "event-types"], [1, "types-grid"], [1, "type-card"], [1, "pi", "pi-heart"], [1, "pi", "pi-briefcase"], [1, "pi", "pi-star"], [1, "pi", "pi-building"], [1, "pi", "pi-gift"], [1, "pi", "pi-bolt"], [1, "services-included"], [1, "services-row"], [1, "services-column"], [1, "pi", "pi-check"], [1, "why-choose"], [1, "reasons-grid"], [1, "reason-card"], [1, "reason-icon"], [1, "cta-section"], [1, "cta-buttons"], ["routerLink", "/book-now", 1, "btn-primary"], ["routerLink", "/contact-us", 1, "btn-secondary"]], template: function EventCleaningComponent_Template(rf, ctx) {
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
      \u0275\u0275text(16, "Professional Event Cleaning in Qatar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Make your special occasions spotless with our comprehensive pre and post-event cleaning services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "div", 10);
      \u0275\u0275element(22, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h3");
      \u0275\u0275text(24, "Pre-Event Setup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "Prepare your venue for guests with thorough cleaning and sanitization");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 10);
      \u0275\u0275element(29, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "h3");
      \u0275\u0275text(31, "Post-Event Cleanup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p");
      \u0275\u0275text(33, "Complete cleanup service including trash removal and deep cleaning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 10);
      \u0275\u0275element(36, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h3");
      \u0275\u0275text(38, "Trained Staff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Professional cleaning crew experienced in event management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 9)(42, "div", 10);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h3");
      \u0275\u0275text(45, "Flexible Timing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p");
      \u0275\u0275text(47, "Available 24/7 to work around your event schedule");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "section", 15)(49, "div", 6)(50, "h2");
      \u0275\u0275text(51, "Events We Serve");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 16)(53, "div", 17);
      \u0275\u0275element(54, "i", 18);
      \u0275\u0275elementStart(55, "h3");
      \u0275\u0275text(56, "Weddings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58, "Complete venue preparation and post-wedding cleanup services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 17);
      \u0275\u0275element(60, "i", 19);
      \u0275\u0275elementStart(61, "h3");
      \u0275\u0275text(62, "Corporate Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "Professional cleaning for conferences, meetings, and business functions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 17);
      \u0275\u0275element(66, "i", 20);
      \u0275\u0275elementStart(67, "h3");
      \u0275\u0275text(68, "Private Parties");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70, "Birthday parties, anniversaries, and family gatherings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 17);
      \u0275\u0275element(72, "i", 21);
      \u0275\u0275elementStart(73, "h3");
      \u0275\u0275text(74, "Trade Shows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p");
      \u0275\u0275text(76, "Exhibition hall cleaning and booth maintenance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 17);
      \u0275\u0275element(78, "i", 22);
      \u0275\u0275elementStart(79, "h3");
      \u0275\u0275text(80, "Special Occasions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, "Graduations, religious ceremonies, and cultural events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 17);
      \u0275\u0275element(84, "i", 23);
      \u0275\u0275elementStart(85, "h3");
      \u0275\u0275text(86, "Sports Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p");
      \u0275\u0275text(88, "Stadium and sports venue cleaning services");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(89, "section", 24)(90, "div", 6)(91, "div", 25)(92, "div", 26)(93, "h3");
      \u0275\u0275text(94, "Pre-Event Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "ul")(96, "li");
      \u0275\u0275element(97, "i", 27);
      \u0275\u0275text(98, " Venue deep cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "li");
      \u0275\u0275element(100, "i", 27);
      \u0275\u0275text(101, " Floor cleaning and polishing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "li");
      \u0275\u0275element(103, "i", 27);
      \u0275\u0275text(104, " Window and glass cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "li");
      \u0275\u0275element(106, "i", 27);
      \u0275\u0275text(107, " Restroom sanitization");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "li");
      \u0275\u0275element(109, "i", 27);
      \u0275\u0275text(110, " Furniture dusting and arrangement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "li");
      \u0275\u0275element(112, "i", 27);
      \u0275\u0275text(113, " Entrance area preparation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "li");
      \u0275\u0275element(115, "i", 27);
      \u0275\u0275text(116, " Kitchen area cleaning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 26)(118, "h3");
      \u0275\u0275text(119, "Post-Event Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "ul")(121, "li");
      \u0275\u0275element(122, "i", 27);
      \u0275\u0275text(123, " Complete trash removal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "li");
      \u0275\u0275element(125, "i", 27);
      \u0275\u0275text(126, " Floor sweeping and mopping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "li");
      \u0275\u0275element(128, "i", 27);
      \u0275\u0275text(129, " Table and chair cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "li");
      \u0275\u0275element(131, "i", 27);
      \u0275\u0275text(132, " Restroom deep cleaning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "li");
      \u0275\u0275element(134, "i", 27);
      \u0275\u0275text(135, " Spill and stain removal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "li");
      \u0275\u0275element(137, "i", 27);
      \u0275\u0275text(138, " Outdoor area cleanup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "li");
      \u0275\u0275element(140, "i", 27);
      \u0275\u0275text(141, " Final venue inspection");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(142, "section", 28)(143, "div", 6)(144, "h2");
      \u0275\u0275text(145, "Why Choose Our Event Cleaning?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 29)(147, "div", 30)(148, "div", 31);
      \u0275\u0275text(149, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "h4");
      \u0275\u0275text(151, "Fast Response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p");
      \u0275\u0275text(153, "Quick mobilization of cleaning crews for urgent needs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 30)(155, "div", 31);
      \u0275\u0275text(156, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "h4");
      \u0275\u0275text(158, "Professional Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "p");
      \u0275\u0275text(160, "Experienced staff trained in event cleaning protocols");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 30)(162, "div", 31);
      \u0275\u0275text(163, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "h4");
      \u0275\u0275text(165, "Full Equipment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "p");
      \u0275\u0275text(167, "Industrial-grade cleaning equipment for large venues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 30)(169, "div", 31);
      \u0275\u0275text(170, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "h4");
      \u0275\u0275text(172, "Flexible Packages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p");
      \u0275\u0275text(174, "Customizable services to match your event size and budget");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 30)(176, "div", 31);
      \u0275\u0275text(177, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "h4");
      \u0275\u0275text(179, "Quality Assured");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "p");
      \u0275\u0275text(181, "Thorough inspection and satisfaction guarantee");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 30)(183, "div", 31);
      \u0275\u0275text(184, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "h4");
      \u0275\u0275text(186, "Competitive Rates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "p");
      \u0275\u0275text(188, "Transparent pricing with no hidden costs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(189, "section", 32)(190, "div", 6)(191, "h2");
      \u0275\u0275text(192, "Make Your Event Spotless");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "p");
      \u0275\u0275text(194, "Professional event cleaning services in Qatar - Contact us today!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 33)(196, "button", 34);
      \u0275\u0275text(197);
      \u0275\u0275pipe(198, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 35);
      \u0275\u0275text(200);
      \u0275\u0275pipe(201, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "shared.EventCleaning"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "paragraph.SpecializedCleaningServices"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "shared.bookNow"));
      \u0275\u0275advance(187);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(198, 11, "shared.bookNow"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(201, 13, "shared.contactUs"));
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe, RouterLink], styles: ["\n\n.service-page[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: hidden;\n}\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n  padding: 100px 20px 80px;\n  text-align: center;\n  color: white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 30px;\n  opacity: 0.95;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  padding: 15px 40px;\n  font-size: 18px;\n  background: white;\n  color: #fa709a;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.service-details[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.service-details[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.service-details[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 30px;\n  border-radius: 15px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin: 0 auto 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 30px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.service-details[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n}\n.event-types[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f8f9fa;\n}\n.event-types[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.event-types[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 50px;\n}\n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 30px;\n}\n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px 30px;\n  border-radius: 15px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n  background:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n  color: white;\n}\n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], \n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], \n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #fa709a;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #333;\n  margin-bottom: 15px;\n  transition: all 0.3s ease;\n}\n.event-types[_ngcontent-%COMP%]   .types-grid[_ngcontent-%COMP%]   .type-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  transition: all 0.3s ease;\n}\n.services-included[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.services-included[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.services-included[_ngcontent-%COMP%]   .services-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 50px;\n}\n.services-included[_ngcontent-%COMP%]   .services-row[_ngcontent-%COMP%]   .services-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #333;\n  margin-bottom: 30px;\n  padding-bottom: 15px;\n  border-bottom: 3px solid #fa709a;\n}\n.services-included[_ngcontent-%COMP%]   .services-row[_ngcontent-%COMP%]   .services-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.services-included[_ngcontent-%COMP%]   .services-row[_ngcontent-%COMP%]   .services-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 15px 0;\n  font-size: 16px;\n  color: #666;\n  border-bottom: 1px solid #eee;\n}\n.services-included[_ngcontent-%COMP%]   .services-row[_ngcontent-%COMP%]   .services-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.services-included[_ngcontent-%COMP%]   .services-row[_ngcontent-%COMP%]   .services-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fa709a;\n  font-size: 20px;\n}\n.why-choose[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f8f9fa;\n}\n.why-choose[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.why-choose[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 36px;\n  color: #333;\n  margin-bottom: 50px;\n}\n.why-choose[_ngcontent-%COMP%]   .reasons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n}\n.why-choose[_ngcontent-%COMP%]   .reasons-grid[_ngcontent-%COMP%]   .reason-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 15px;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.why-choose[_ngcontent-%COMP%]   .reasons-grid[_ngcontent-%COMP%]   .reason-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.why-choose[_ngcontent-%COMP%]   .reasons-grid[_ngcontent-%COMP%]   .reason-card[_ngcontent-%COMP%]   .reason-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 28px;\n  font-weight: 700;\n}\n.why-choose[_ngcontent-%COMP%]   .reasons-grid[_ngcontent-%COMP%]   .reason-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #333;\n  margin-bottom: 15px;\n}\n.why-choose[_ngcontent-%COMP%]   .reasons-grid[_ngcontent-%COMP%]   .reason-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #fa709a 0%,\n      #fee140 100%);\n  text-align: center;\n  color: white;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 15px;\n}\n.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 30px;\n  opacity: 0.95;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 15px 40px;\n  font-size: 18px;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #fa709a;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #fa709a;\n  transform: translateY(-3px);\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 60px 20px 50px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .service-details[_ngcontent-%COMP%], \n   .event-types[_ngcontent-%COMP%], \n   .services-included[_ngcontent-%COMP%], \n   .why-choose[_ngcontent-%COMP%], \n   .cta-section[_ngcontent-%COMP%] {\n    padding: 50px 20px;\n  }\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .features-grid[_ngcontent-%COMP%], \n   .types-grid[_ngcontent-%COMP%], \n   .reasons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .services-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=event-cleaning.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCleaningComponent, { className: "EventCleaningComponent" });
})();
export {
  EventCleaningComponent
};
//# sourceMappingURL=chunk-KAOIMZPZ.js.map
