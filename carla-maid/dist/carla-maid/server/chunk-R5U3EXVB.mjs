import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-SABP6HPD.mjs";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-OKUDJCYY.mjs";
import {
  DomSanitizer
} from "./chunk-3RL2LK7B.mjs";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EEE5GEKV.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/app/contact-us/contact-us.component.ts
function ContactUsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "shared.contactYouSoon"), " ");
  }
}
function ContactUsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "span", 23);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", contact_r2.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r2.info);
  }
}
var _ContactUsComponent = class _ContactUsComponent {
  constructor() {
    __publicField(this, "_translate", inject(TranslateService));
    __publicField(this, "sanitizer", inject(DomSanitizer));
    __publicField(this, "email", "info@carlamaid.qa");
    __publicField(this, "sent", false);
    __publicField(this, "formData", {
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    __publicField(this, "contacts", [
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="41" height="65" viewBox="0 0 41 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.1913 0.883301H6.30801C3.00931 0.883301 0.333008 3.5596 0.333008 6.8583V58.6416C0.333008 61.9403 3.00931 64.6166 6.30801 64.6166H34.1913C37.49 64.6166 40.1663 61.9403 40.1663 58.6416V6.8583C40.1663 3.5596 37.49 0.883301 34.1913 0.883301ZM20.2497 60.6333C18.0464 60.6333 16.2663 58.8532 16.2663 56.65C16.2663 54.4467 18.0464 52.6666 20.2497 52.6666C22.453 52.6666 24.233 54.4467 24.233 56.65C24.233 58.8532 22.453 60.6333 20.2497 60.6333ZM34.1913 47.1896C34.1913 48.0111 33.5192 48.6833 32.6976 48.6833H7.80176C6.9802 48.6833 6.30801 48.0111 6.30801 47.1896V8.35205C6.30801 7.53049 6.9802 6.8583 7.80176 6.8583H32.6976C33.5192 6.8583 34.1913 7.53049 34.1913 8.35205V47.1896Z" fill="url(#paint0_linear_446_5383)"/>
            <defs>
            <linearGradient id="paint0_linear_446_5383" x1="25.4133" y1="-36.2945" x2="-51.3369" y2="16.7673" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0188FF"/>
            <stop offset="1" stop-color="#0346FF"/>
            </linearGradient>
            </defs>
            </svg>
            `),
        title: this._translate.instant("contact.info.callUs"),
        info: "974-71236660"
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63.2835 57.4383C63.2835 60.6695 60.6642 63.2889 57.433 63.2889H6.72845C3.49726 63.2889 0.87793 60.6695 0.87793 57.4383V25.3487C0.87794 24.4616 1.07971 23.586 1.46798 22.7883C1.85624 21.9906 2.42084 21.2917 3.11904 20.7444C6.15559 18.3641 8.66497 16.4339 23.1327 5.9339C25.1834 4.43873 29.2526 0.841025 32.0807 0.883685C34.9082 0.840538 38.979 4.43934 41.0287 5.93378C55.495 16.4327 58.0078 18.3655 61.0424 20.7444C61.7406 21.2917 62.3052 21.9906 62.6934 22.7883C63.0817 23.586 63.2835 24.4616 63.2835 25.3487V57.4383ZM55.2797 33.475C54.9673 33.0206 54.3412 32.9149 53.8977 33.2425C51.1132 35.2991 47.1376 38.2039 41.0287 42.6374C38.978 44.1324 34.9088 47.7299 32.0807 47.6871C29.2516 47.729 25.187 44.135 23.1327 42.6374C17.0245 38.2044 13.0486 35.2994 10.2637 33.2425C9.82021 32.9149 9.19408 33.0206 8.88169 33.475L7.77594 35.0834C7.63261 35.2917 7.57587 35.5476 7.61769 35.7971C7.65952 36.0465 7.79663 36.2699 8.00009 36.4201C10.7897 38.4798 14.7591 41.3796 20.835 45.7892C23.3061 47.5908 27.7245 51.6169 32.0807 51.5877C36.435 51.6172 40.8517 47.5934 43.3263 45.7892C49.4023 41.3795 53.3719 38.4797 56.1612 36.4201C56.3647 36.2699 56.5018 36.0465 56.5436 35.7971C56.5854 35.5476 56.5287 35.2917 56.3854 35.0834L55.2797 33.475Z" fill="url(#paint0_linear_446_5388)"/>
      <defs>
      <linearGradient id="paint0_linear_446_5388" x1="40.1703" y1="-35.5199" x2="-39.751" y2="52.8869" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0188FF"/>
      <stop offset="1" stop-color="#0346FF"/>
      </linearGradient>
      </defs>
      </svg>
      `),
        title: this._translate.instant("contact.info.support"),
        info: this.email
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="66" height="58" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.2469 0.883301C25.3864 0.883301 19.0147 7.17373 19.0147 14.9339C19.0147 21.2076 28.3165 32.6421 31.8801 36.7926C32.6019 37.6334 33.893 37.6334 34.6136 36.7926C38.1773 32.6421 47.479 21.2076 47.479 14.9339C47.479 7.17373 41.1073 0.883301 33.2469 0.883301ZM33.2469 19.6174C30.6263 19.6174 28.5028 17.521 28.5028 14.9339C28.5028 12.3468 30.6263 10.2504 33.2469 10.2504C35.8674 10.2504 37.9909 12.3468 37.9909 14.9339C37.9909 17.521 35.8674 19.6174 33.2469 19.6174ZM2.98893 24.9644C2.31819 25.2293 1.7432 25.6865 1.33813 26.277C0.933053 26.8675 0.716469 27.5643 0.716309 28.2775L0.716309 56.1913C0.716309 57.4536 2.00737 58.3167 3.1945 57.8484L18.7888 50.8409V24.8496C17.7903 23.0676 16.9737 21.3325 16.3886 19.6732L2.98893 24.9644ZM33.2469 40.991C31.6576 40.991 30.1542 40.3019 29.1229 39.0998C26.9023 36.5127 24.5404 33.5665 22.4033 30.5445V50.8398L44.0904 57.9766V30.5456C41.9533 33.5665 39.5926 36.5138 37.3708 39.1009C36.3395 40.3019 34.8361 40.991 33.2469 40.991ZM63.2992 18.8547L47.7049 25.8621V57.9777L63.5048 51.7386C64.1756 51.4739 64.7507 51.0168 65.1558 50.4262C65.5609 49.8357 65.7774 49.1388 65.7774 48.4256V20.5117C65.7774 19.2494 64.4864 18.3863 63.2992 18.8547Z" fill="url(#paint0_linear_446_5393)"/>
      <defs>
      <linearGradient id="paint0_linear_446_5393" x1="41.6807" y1="-32.4218" x2="-29.8847" y2="57.788" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0188FF"/>
      <stop offset="1" stop-color="#0346FF"/>
      </linearGradient>
      </defs>
      </svg>
      `),
        title: this._translate.instant("contact.info.address"),
        info: this._translate.instant("contact.info.location")
      },
      {
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="55" height="57" viewBox="0 0 55 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.9217 20.7149C41.2744 27.2292 41.1872 37.6734 34.96 44.0878C34.9483 44.1009 34.9345 44.1151 34.9217 44.1281L27.7766 51.4475C21.4747 57.9031 11.2218 57.9022 4.92079 51.4475C-1.38115 44.9929 -1.38115 34.4888 4.92079 28.0342L8.86612 23.9927C9.91237 22.9209 11.7142 23.6333 11.7682 25.1479C11.8371 27.0782 12.175 29.0175 12.7985 30.8902C13.0096 31.5243 12.8588 32.2258 12.3963 32.6996L11.0048 34.125C8.02487 37.1776 7.93141 42.148 10.882 45.2304C13.8616 48.3432 18.7592 48.3617 21.7618 45.2859L28.9069 37.9677C31.9043 34.8971 31.8918 29.9341 28.9069 26.8764C28.5134 26.4741 28.117 26.1615 27.8073 25.9431C27.5883 25.789 27.4075 25.5846 27.2792 25.3463C27.151 25.1079 27.0789 24.8421 27.0687 24.5701C27.0266 23.4191 27.4247 22.2331 28.3125 21.3236L30.5511 19.0303C31.1381 18.429 32.059 18.3552 32.7397 18.8418C33.5193 19.3994 34.2494 20.0262 34.9217 20.7149ZM49.9068 5.36361C43.6058 -1.09115 33.3529 -1.09202 27.0509 5.36361L19.9058 12.683C19.8931 12.696 19.8793 12.7102 19.8676 12.7233C13.6405 19.1377 13.5532 29.5819 19.9058 36.0962C20.5781 36.7849 21.3082 37.4116 22.0878 37.9692C22.7685 38.4558 23.6895 38.3819 24.2764 37.7807L26.515 35.4874C27.4028 34.5779 27.8009 33.3919 27.7588 32.2409C27.7486 31.9689 27.6765 31.7031 27.5483 31.4647C27.42 31.2264 27.2392 31.022 27.0201 30.8679C26.7105 30.6495 26.3141 30.3369 25.9206 29.9346C22.9357 26.8769 22.9232 21.9139 25.9206 18.8433L33.0657 11.5251C36.0682 8.44929 40.9657 8.46781 43.9455 11.5806C46.8961 14.663 46.8027 19.6334 43.8227 22.686L42.4312 24.1114C41.9687 24.5852 41.8178 25.2867 42.029 25.9208C42.6525 27.7935 42.9904 29.7328 43.0593 31.6631C43.1134 33.1777 44.9151 33.8901 45.9613 32.8183L49.9067 28.7767C56.2087 22.3223 56.2087 11.8182 49.9068 5.36361Z" fill="url(#paint0_linear_446_5398)"/>
      <defs>
      <linearGradient id="paint0_linear_446_5398" x1="34.4707" y1="-32.0083" x2="-37.1011" y2="45.2774" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0188FF"/>
      <stop offset="1" stop-color="#0346FF"/>
      </linearGradient>
      </defs>
      </svg>
      `),
        title: this._translate.instant("contact.info.website"),
        info: "www.carlamaid.qa"
      }
    ]);
  }
  resetForm() {
    this.formData = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }
  // Google Form submission URL
  // Method to submit the form data
  onSubmit() {
    const formData = new FormData();
    formData.append("entry.1423087057", this.formData.name);
    formData.append("entry.999466525", this.formData.email);
    formData.append("entry.14756651", this.formData.phone);
    formData.append("entry.588313379", this.formData.message);
    let googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2VwYd5oymDq589hsQdhHP3LMDfkByzpEL_FmWk8KMiZii5A/formResponse";
    this.submitGoogleFrom({ formURl: googleFormUrl, formData });
  }
  submitGoogleFrom({ formURl, formData }) {
    fetch(formURl, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    }).then((res) => {
      this.sent = true;
      this.resetForm();
      setTimeout(() => {
        this.sent = false;
      }, 3e3);
    }).catch(() => console.log("There was an error submitting the form."));
  }
};
__publicField(_ContactUsComponent, "\u0275fac", function ContactUsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactUsComponent)();
});
__publicField(_ContactUsComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 30, consts: [["contactForm", "ngForm"], [1, "contact-container"], [1, "cleaning-service", "top-title-service"], ["width", "43", "height", "41", "viewBox", "0 0 43 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "cleaner", "cleaner-margin"], ["d", "M22.1839 23.2069C22.0934 23.2065 22.0038 23.1882 21.9204 23.1529C21.837 23.1177 21.7614 23.0662 21.6981 23.0016L19.0222 20.3258C18.8948 20.1975 18.8232 20.0241 18.8232 19.8433C18.8232 19.6625 18.8948 19.489 19.0222 19.3608L38.1841 0.199004C38.3123 0.0715432 38.4857 0 38.6665 0C38.8473 0 39.0208 0.0715432 39.149 0.199004L41.8317 2.88166C41.9591 3.00988 42.0307 3.18333 42.0307 3.36413C42.0307 3.54492 41.9591 3.71837 41.8317 3.84659L22.6356 23.0084C22.515 23.1284 22.3539 23.1992 22.1839 23.2069ZM20.4457 19.7851L22.1566 21.496L40.3808 3.29911L38.67 1.58824L20.4457 19.7851Z", "fill", "#91D6AA"], ["d", "M26.1936 19.1349C26.1036 19.1354 26.0143 19.1182 25.9309 19.0841C25.8475 19.05 25.7717 18.9999 25.7077 18.9364L23.0319 16.2606C22.9678 16.197 22.9169 16.1213 22.8821 16.0379C22.8474 15.9545 22.8295 15.8651 22.8295 15.7747C22.8295 15.6844 22.8474 15.5949 22.8821 15.5116C22.9169 15.4282 22.9678 15.3525 23.0319 15.2888C23.1602 15.1614 23.3336 15.0898 23.5144 15.0898C23.6952 15.0898 23.8686 15.1614 23.9969 15.2888L26.6795 17.9715C26.7737 18.0676 26.8375 18.1893 26.8629 18.3214C26.8882 18.4535 26.8741 18.5902 26.8223 18.7143C26.7704 18.8384 26.6832 18.9445 26.5714 19.0193C26.4595 19.0941 26.3282 19.1343 26.1936 19.1349ZM18.9532 33.6774C18.8631 33.6779 18.7739 33.6606 18.6905 33.6266C18.6071 33.5925 18.5313 33.5423 18.4673 33.4789L8.49632 23.5011C8.4329 23.4371 8.38272 23.3613 8.34866 23.2779C8.3146 23.1945 8.29734 23.1052 8.29786 23.0152C8.29865 22.8316 8.36966 22.6553 8.49632 22.5224L11.747 19.2786C12.285 18.7373 12.9248 18.3078 13.6295 18.0146C14.3342 17.7215 15.0899 17.5706 15.8531 17.5706C16.6163 17.5706 17.372 17.7215 18.0767 18.0146C18.7814 18.3078 19.4211 18.7373 19.9592 19.2786L22.6966 22.016C23.7794 23.1014 24.3875 24.5719 24.3875 26.105C24.3875 27.6381 23.7794 29.1086 22.6966 30.194L19.4459 33.472C19.3141 33.6012 19.1377 33.6747 18.9532 33.6774ZM9.9403 23.0152L18.9532 32.0281L21.6906 29.2907C22.5181 28.4629 22.9829 27.3404 22.9829 26.17C22.9829 24.9996 22.5181 23.8771 21.6906 23.0494L18.9532 20.312C18.1255 19.4845 17.003 19.0197 15.8326 19.0197C14.6622 19.0197 13.5397 19.4845 12.7119 20.312L9.9403 23.0152Z", "fill", "#91D6AA"], ["d", "M21.5402 30.5841C21.4502 30.5846 21.3609 30.5674 21.2775 30.5333C21.1941 30.4993 21.1183 30.4491 21.0544 30.3857L11.5829 20.9143C11.4541 20.7854 11.3817 20.6106 11.3817 20.4284C11.3817 20.2461 11.4541 20.0713 11.5829 19.9425C11.7118 19.8136 11.8866 19.7412 12.0688 19.7412C12.2511 19.7412 12.4259 19.8136 12.5547 19.9425L22.0261 29.4139C22.0903 29.4775 22.1412 29.5532 22.1759 29.6366C22.2107 29.72 22.2286 29.8094 22.2286 29.8998C22.2286 29.9901 22.2107 30.0796 22.1759 30.163C22.1412 30.2464 22.0903 30.322 22.0261 30.3857C21.9622 30.4491 21.8863 30.4993 21.803 30.5333C21.7196 30.5674 21.6303 30.5846 21.5402 30.5841ZM14.9089 40.9999C14.7294 40.9992 14.5573 40.9279 14.4298 40.8015L10.6385 37.0102C10.5517 36.9217 10.4906 36.8113 10.4617 36.6907C10.4328 36.5702 10.4371 36.4441 10.4743 36.3258L11.4598 33.3626L8.49652 34.3344C8.37706 34.3698 8.25018 34.372 8.12958 34.3406C8.00898 34.3093 7.89923 34.2456 7.81217 34.1564L1.16712 27.5388C1.0757 27.4466 1.0124 27.3302 0.984609 27.2034C0.956818 27.0766 0.965684 26.9444 1.01017 26.8225C1.05466 26.7005 1.13294 26.5937 1.23586 26.5145C1.33878 26.4353 1.4621 26.3871 1.59142 26.3754C2.94045 26.2876 4.25342 25.9028 5.43646 25.2486C6.6195 24.5943 7.64339 23.6868 8.43493 22.5909C8.54784 22.4499 8.71193 22.3593 8.89141 22.3387C9.07089 22.3182 9.2512 22.3695 9.39302 22.4814C9.46383 22.5374 9.52286 22.6068 9.56672 22.6857C9.61058 22.7646 9.6384 22.8514 9.64858 22.9411C9.65876 23.0308 9.65109 23.1216 9.62602 23.2083C9.60095 23.295 9.55898 23.3759 9.50251 23.4463C7.96153 25.5738 5.67356 27.0405 3.09699 27.5525L8.49652 32.9041L12.3563 31.6175C12.4763 31.5785 12.6047 31.5735 12.7275 31.6029C12.8502 31.6324 12.9623 31.6952 13.0516 31.7845C13.1408 31.8737 13.2036 31.9859 13.2331 32.1086C13.2626 32.2313 13.2575 32.3598 13.2185 32.4798L11.9183 36.3395L14.4367 38.8648C14.9487 36.2882 16.4153 34.0002 18.5428 32.4592C18.6125 32.3997 18.6935 32.3548 18.7809 32.3272C18.8683 32.2995 18.9603 32.2897 19.0516 32.2984C19.1429 32.307 19.2315 32.3339 19.3121 32.3774C19.3928 32.4209 19.4639 32.4802 19.5212 32.5518C19.5786 32.6233 19.6209 32.7056 19.6458 32.7938C19.6707 32.8821 19.6776 32.9744 19.6662 33.0653C19.6547 33.1563 19.625 33.244 19.579 33.3233C19.533 33.4026 19.4715 33.4718 19.3982 33.5268C18.3026 34.3187 17.3954 35.3427 16.7412 36.5257C16.087 37.7086 15.702 39.0214 15.6138 40.3703C15.6018 40.5003 15.5529 40.6241 15.4729 40.7271C15.3928 40.8302 15.285 40.9082 15.1621 40.952C15.0815 40.9839 14.9956 41.0002 14.9089 40.9999Z", "fill", "#91D6AA"], ["d", "M7.12804 28.6817C6.94654 28.6871 6.77031 28.6202 6.63812 28.4957C6.50593 28.3712 6.4286 28.1993 6.42316 28.0178C6.41771 27.8363 6.48459 27.6601 6.60908 27.5279C6.73357 27.3957 6.90548 27.3184 7.08698 27.313C7.40636 27.2937 7.71451 27.188 7.97849 27.0072C8.24247 26.8264 8.45235 26.5773 8.58571 26.2864C8.63064 26.2082 8.69054 26.1397 8.76197 26.0846C8.83341 26.0296 8.91499 25.9892 9.00205 25.9656C9.08911 25.9421 9.17995 25.936 9.26938 25.9476C9.35881 25.9592 9.44508 25.9883 9.52327 26.0332C9.60146 26.0782 9.67003 26.138 9.72507 26.2095C9.78011 26.2809 9.82054 26.3625 9.84405 26.4496C9.86756 26.5366 9.8737 26.6275 9.8621 26.7169C9.85051 26.8063 9.82141 26.8926 9.77648 26.9708C9.52682 27.457 9.15538 27.8702 8.69841 28.1701C8.24143 28.4699 7.71452 28.6462 7.1691 28.6817H7.12804ZM8.68836 31.4191H8.44199C8.26049 31.4045 8.09219 31.3185 7.97412 31.1799C7.85605 31.0413 7.79787 30.8615 7.81239 30.68C7.82691 30.4985 7.91294 30.3302 8.05155 30.2121C8.19015 30.094 8.36999 30.0358 8.55149 30.0504C9.09213 30.0983 9.18794 29.8861 9.23584 29.7629C9.27359 29.6811 9.32707 29.6076 9.39324 29.5465C9.45941 29.4854 9.53697 29.4379 9.62148 29.4068C9.706 29.3756 9.79583 29.3614 9.88583 29.365C9.97583 29.3686 10.0642 29.3899 10.146 29.4276C10.2278 29.4653 10.3014 29.5188 10.3625 29.585C10.4236 29.6512 10.4711 29.7287 10.5022 29.8132C10.5333 29.8978 10.5475 29.9876 10.5439 30.0776C10.5404 30.1676 10.5191 30.256 10.4814 30.3378C10.3247 30.6765 10.0701 30.9605 9.75056 31.1532C9.43099 31.3459 9.06103 31.4385 8.68836 31.4191ZM13.9715 36.2095C13.8002 36.2102 13.6349 36.1466 13.5082 36.0313C13.3815 35.916 13.3026 35.7574 13.2872 35.5868C13.1722 34.8299 13.2634 34.056 13.5512 33.3466C13.8391 32.6373 14.3129 32.0186 14.9228 31.5559C14.9947 31.5011 15.0767 31.461 15.1641 31.4378C15.2515 31.4147 15.3426 31.409 15.4322 31.4211C15.5218 31.4332 15.6081 31.4628 15.6863 31.5082C15.7645 31.5537 15.8329 31.6141 15.8877 31.686C15.9425 31.7578 15.9827 31.8398 16.0058 31.9272C16.0289 32.0146 16.0346 32.1057 16.0226 32.1953C16.0105 32.285 15.9809 32.3713 15.9354 32.4495C15.89 32.5276 15.8296 32.5961 15.7577 32.6509C15.3341 32.9739 15.0073 33.407 14.813 33.903C14.6187 34.399 14.5644 34.9388 14.6559 35.4636C14.6644 35.5535 14.6549 35.6442 14.6282 35.7305C14.6014 35.8168 14.5578 35.8969 14.4999 35.9663C14.442 36.0356 14.3709 36.0928 14.2908 36.1346C14.2107 36.1763 14.1231 36.2018 14.0331 36.2095H13.9715Z", "fill", "#91D6AA"], [1, "carla-service-text"], [1, "contact-form", "flex"], ["src", "assets/images/contact-us.png", "alt", "contact-us"], [1, "primary-form", 3, "ngSubmit"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "email", "id", "email", "name", "email", "required", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "phone-number"], ["type", "number", "id", "phone", "name", "phone", 3, "ngModelChange", "placeholder", "ngModel"], ["id", "message", "name", "message", "required", "", 3, "ngModelChange", "placeholder", "ngModel"], [1, "warn", "warn-success"], ["type", "submit", 1, "btn-secondary", 3, "disabled"], [1, "contact-info"], [1, "contacts"], [1, "map"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.943751944281!2d51.51585411501076!3d25.371265283803413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c53c71b0a453%3A0x1aa2e6712a7f9c29!2sLusail%20Marina!5e0!3m2!1sen!2sqa!4v1689439999999!5m2!1sen!2sqa`, "width", "100%", "height", "400", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [3, "innerHTML"]], template: function ContactUsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header")(2, "div", 2);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 3);
    \u0275\u0275element(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h1");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "section", 9);
    \u0275\u0275element(18, "img", 10);
    \u0275\u0275elementStart(19, "form", 11, 0);
    \u0275\u0275listener("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSubmit());
    });
    \u0275\u0275elementStart(21, "input", 12);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.name, $event) || (ctx.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 13);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.email, $event) || (ctx.formData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 14)(26, "span");
    \u0275\u0275text(27, " +974 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 15);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.phone, $event) || (ctx.formData.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "textarea", 16);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactUsComponent_Template_textarea_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.formData.message, $event) || (ctx.formData.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ContactUsComponent_Conditional_32_Template, 4, 3, "div", 17);
    \u0275\u0275elementStart(33, "button", 18);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "section", 19);
    \u0275\u0275repeaterCreate(37, ContactUsComponent_For_38_Template, 6, 3, "div", 20, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "section", 21);
    \u0275\u0275element(40, "iframe", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contactForm_r3 = \u0275\u0275reference(20);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "shared.CarlaMaidCleaningServices"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "contact.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "contact.subheading"));
    \u0275\u0275advance(6);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(22, 20, "contact.form.name"));
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.name);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(24, 22, "contact.form.email"));
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.email);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(29, 24, "contact.form.phone"));
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.phone);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(31, 26, "contact.form.message"));
    \u0275\u0275twoWayProperty("ngModel", ctx.formData.message);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.sent ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", contactForm_r3.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 28, "shared.contactUs"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.contacts);
  }
}, dependencies: [CommonModule, TranslateModule, TranslatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 20px;\n  color: #0346FF;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 65%;\n  font-size: 0.9rem;\n  font-weight: 300;\n}\n.contact-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.contact-form[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n.contact-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 400px;\n  height: auto;\n}\n.contact-form[_ngcontent-%COMP%]   form.primary-form[_ngcontent-%COMP%] {\n  width: 31%;\n  min-width: 30rem;\n  max-width: 500px;\n  min-height: 35rem;\n  background-color: #c4ebff;\n  padding: 30px;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.contact-form[_ngcontent-%COMP%]   form.primary-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  min-height: 100px;\n}\nheader[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 40px;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1rem;\n  border: none;\n  height: 48px;\n  border-radius: 10px;\n}\n.contact-info[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  display: flex;\n  justify-content: center;\n  gap: 1.2rem;\n  flex-wrap: wrap;\n}\n.contacts[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  box-shadow: 0px 0px 13px 0 #dddddd;\n  border-radius: 20px;\n}\n.contacts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gary;\n  font-size: 0.7rem;\n}\n.phone-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border-radius: 10px;\n  background: white;\n  padding-inline-start: 10px;\n}\n.phone-number[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.phone-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: gray;\n}\n@media (max-width: 768px) {\n  .contact-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contact-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .contacts[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n  header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=contact-us.component.css.map */"] }));
var ContactUsComponent = _ContactUsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\contact-us\\contact-us.component.ts", lineNumber: 14 });
})();
export {
  ContactUsComponent
};
//# sourceMappingURL=chunk-R5U3EXVB.mjs.map
