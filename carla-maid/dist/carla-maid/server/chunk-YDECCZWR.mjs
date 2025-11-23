import './polyfills.server.mjs';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from "./chunk-HMINUFFI.mjs";
import "./chunk-WIHOLO77.mjs";
import {
  MatIcon,
  MatIconModule
} from "./chunk-NTGYKGZA.mjs";
import {
  Dir
} from "./chunk-KJD7JTY7.mjs";
import {
  PhoneTrackDirective
} from "./chunk-WIDNTPHZ.mjs";
import {
  AnalyticsService
} from "./chunk-EGVPGVWF.mjs";
import "./chunk-L6APMHKW.mjs";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-ULFMFSOZ.mjs";
import "./chunk-RTKK4VRH.mjs";
import {
  ElementRef,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-REGLKICM.mjs";
import "./chunk-LBJNHE26.mjs";

// src/app/shared/directives/email-track.directive.ts
var EmailTrackDirective = class _EmailTrackDirective {
  emailAddress = "";
  emailSubject = "";
  analyticsService = inject(AnalyticsService);
  element = inject(ElementRef);
  onClick(event) {
    this.analyticsService.trackCustomEvent("email_click", {
      email_address: this.emailAddress,
      subject: this.emailSubject,
      action: "mailto_opened"
    });
    this.analyticsService.trackButtonClick("email_contact", "contact_info");
    this.analyticsService.trackEngagement("click", "contact", "email_contact");
    this.analyticsService.trackFormSubmission("email_contact", "footer_email_link");
  }
  static \u0275fac = function EmailTrackDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailTrackDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _EmailTrackDirective, selectors: [["", "appEmailTrack", ""]], hostBindings: function EmailTrackDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function EmailTrackDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }, inputs: { emailAddress: [0, "appEmailTrack", "emailAddress"], emailSubject: "emailSubject" }, standalone: true });
};

// src/app/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  translate;
  constructor(translate) {
    this.translate = translate;
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
  makePhoneCall(phoneNumber) {
    window.open(`tel:${phoneNumber}`, "_self");
  }
  sendEmail() {
    const subject = this.translate.instant("shared.emailSubject");
    const body = this.translate.instant("shared.emailBody");
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:info@carlamaid.qa?subject=${encodedSubject}&body=${encodedBody}`;
    window.open(mailtoLink, "_self");
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 36, consts: [[1, "app-footer"], [1, "flex-around", "flex-wrap", "gap-30"], [1, "logo"], ["src", "../../assets/images/Logo-En.png", "alt", ""], [1, "social-media-container"], [1, "social-media-item"], ["svgIcon", "phone", 1, "social-media-icon", "phone", 3, "click"], ["svgIcon", "instagram", 1, "social-media-icon", "instagram", 3, "click"], ["svgIcon", "facebook", 1, "social-media-icon", "facebook", 3, "click"], ["svgIcon", "linkedin", 1, "social-media-icon", "linkedin", 3, "click"], ["svgIcon", "x", 1, "social-media-icon", "x", 3, "click"], ["svgIcon", "whatsapp", 1, "social-media-icon", "whatsapp", 3, "click"], [1, "gap-10", "our-info"], ["href", "tel:+97471236660", "dir", "ltr", "appPhoneTrack", "+974 7123 6660", 1, "phone-link"], ["appEmailTrack", "info@carlamaid.qa", 1, "email-link", 3, "click", "emailSubject", "title"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "section", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "mat-icon", 6);
      \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_9_listener() {
        return ctx.makePhoneCall("+97471236660");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "mat-icon", 7);
      \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_11_listener() {
        return ctx.openUrl("https://www.instagram.com/carlamaid.qa/");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "mat-icon", 8);
      \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_13_listener() {
        return ctx.openUrl("https://www.facebook.com/carlamaid.qa");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5)(15, "mat-icon", 9);
      \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_15_listener() {
        return ctx.openUrl("https://www.linkedin.com/company/carlamaid/");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5)(17, "mat-icon", 10);
      \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_17_listener() {
        return ctx.openUrl("https://x.com/MaidQa84948");
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 5)(19, "mat-icon", 11);
      \u0275\u0275listener("click", function FooterComponent_Template_mat_icon_click_19_listener() {
        return ctx.openUrl("https://wa.me/97471236660");
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "section", 12)(21, "div")(22, "h1");
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div")(35, "h1");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div")(48, "h1");
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 13);
      \u0275\u0275text(52, "+974 7123 6660");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 14);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275listener("click", function FooterComponent_Template_a_click_53_listener() {
        return ctx.sendEmail();
      });
      \u0275\u0275text(56, "Info@carlamaid.qa");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "paragraph.ExperienceConvenient"));
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 14, "shared.Company"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 16, "shared.OurVision"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 18, "shared.OurMission"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 20, "shared.OurValues"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 22, "shared.Services"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 24, "shared.HomeCleaning"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 26, "shared.BusinessCleaning"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 28, "shared.HospitalityStaff"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 30, "shared.ContactUs"));
      \u0275\u0275advance(4);
      \u0275\u0275property("emailSubject", \u0275\u0275pipeBind1(54, 32, "shared.emailSubject"))("title", \u0275\u0275pipeBind1(55, 34, "shared.emailForQuote"));
    }
  }, dependencies: [
    TranslateModule,
    TranslatePipe,
    MatFormFieldModule,
    Dir,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatIcon,
    PhoneTrackDirective,
    EmailTrackDirective
  ], styles: ['@charset "UTF-8";\n\n\n\n.app-footer[_ngcontent-%COMP%] {\n  background-color: rgba(93, 230, 254, 0.1607843137);\n  padding: 2rem;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  min-width: 200px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15rem;\n  max-width: 240px;\n  height: auto;\n}\n.logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.8;\n}\nh1[_ngcontent-%COMP%] {\n  color: #00A9FF;\n}\nhr[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.our-info[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px;\n}\n.our-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.phone-link[_ngcontent-%COMP%] {\n  display: block;\n  color: #333;\n  text-decoration: none;\n  font-size: 13px;\n  padding: 4px 0;\n  transition: color 0.3s ease;\n  cursor: pointer;\n}\n.phone-link[_ngcontent-%COMP%]:hover {\n  color: #00A9FF;\n  text-decoration: underline;\n}\n.email-link[_ngcontent-%COMP%] {\n  display: block;\n  color: #333;\n  text-decoration: none;\n  font-size: 13px;\n  padding: 4px 0;\n  transition: color 0.3s ease;\n  cursor: pointer;\n}\n.email-link[_ngcontent-%COMP%]:hover {\n  color: #00A9FF;\n  text-decoration: underline;\n}\n.email-link[_ngcontent-%COMP%]:before {\n  content: "\\2709  ";\n  font-size: 12px;\n  margin-right: 4px;\n}\n.form-section[_ngcontent-%COMP%] {\n  width: 55%;\n  max-width: 235px;\n}\n.form-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.Copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: 12px;\n  color: gray;\n}\n.social-media-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n  .social-media-icon {\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n  .social-media-icon:hover {\n  transform: scale(1.5);\n}\n  .x path {\n  fill: #000000;\n}\n  .x:hover path {\n  fill: #000000;\n}\n  .facebook path {\n  fill: #3275e2;\n}\n  .facebook:hover path {\n  fill: #3275e2;\n}\n  .linkedin path {\n  fill: #0a0ae1;\n}\n  .linkedin:hover path {\n  fill: #0a0ae1;\n}\n  .whatsapp path {\n  fill: #25d366;\n}\n  .whatsapp:hover path {\n  fill: #25d366;\n}\n  .instagram path {\n  fill: #e1306c;\n}\n  .instagram:hover path {\n  fill: #e1306c;\n}\n  .phone path {\n  fill: #25d366;\n}\n  .phone:hover path {\n  fill: #25d366;\n}\n@media (max-width: 780px) {\n  .our-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .logo[_ngcontent-%COMP%], \n   .our-info[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px;\n    width: 100%;\n  }\n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .our-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .Copyright[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .social-media[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n}\n@media (max-width: 425px) {\n  .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .logo[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();
export {
  FooterComponent
};
//# sourceMappingURL=chunk-YDECCZWR.mjs.map
