import './polyfills.server.mjs';
import {
  RouterLink,
  RouterModule
} from "./chunk-TUACC6OU.mjs";
import "./chunk-X5FQEDHK.mjs";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-7EHWLWZR.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OA426OFB.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/app/blogs/blogs.component.ts
var _BlogsComponent = class _BlogsComponent {
};
__publicField(_BlogsComponent, "\u0275fac", function BlogsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BlogsComponent)();
});
__publicField(_BlogsComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["app-blogs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 15, consts: [[1, "section-1"], [1, "carla-blogs-title", "flex-column"], ["width", "42", "height", "41", "viewBox", "0 0 42 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M21.2147 23.2069C21.1242 23.2065 21.0346 23.1882 20.9512 23.1529C20.8678 23.1177 20.7922 23.0662 20.7288 23.0016L18.053 20.3258C17.9255 20.1975 17.854 20.0241 17.854 19.8433C17.854 19.6625 17.9255 19.489 18.053 19.3608L37.2148 0.199004C37.3431 0.0715432 37.5165 0 37.6973 0C37.8781 0 38.0515 0.0715432 38.1798 0.199004L40.8624 2.88166C40.9899 3.00988 41.0614 3.18333 41.0614 3.36413C41.0614 3.54492 40.9899 3.71837 40.8624 3.84659L21.6664 23.0084C21.5457 23.1284 21.3847 23.1992 21.2147 23.2069ZM19.4765 19.7851L21.1873 21.496L39.4116 3.29911L37.7007 1.58824L19.4765 19.7851Z", "fill", "#91D6AA"], ["d", "M25.2251 19.135C25.1351 19.1355 25.0458 19.1182 24.9624 19.0842C24.879 19.0501 24.8032 18.9999 24.7392 18.9365L22.0634 16.2607C21.9993 16.1971 21.9484 16.1214 21.9136 16.038C21.8789 15.9546 21.861 15.8651 21.861 15.7748C21.861 15.6845 21.8789 15.595 21.9136 15.5116C21.9484 15.4282 21.9993 15.3525 22.0634 15.2889C22.1917 15.1614 22.3651 15.0899 22.5459 15.0899C22.7267 15.0899 22.9001 15.1614 23.0284 15.2889L25.711 17.9716C25.8052 18.0676 25.869 18.1893 25.8943 18.3214C25.9197 18.4536 25.9056 18.5902 25.8538 18.7144C25.8019 18.8385 25.7147 18.9446 25.6028 19.0194C25.491 19.0942 25.3597 19.1344 25.2251 19.135ZM17.9847 33.6774C17.8946 33.6779 17.8054 33.6607 17.722 33.6266C17.6386 33.5926 17.5628 33.5424 17.4988 33.479L7.52782 23.5011C7.46439 23.4372 7.41421 23.3613 7.38016 23.278C7.3461 23.1946 7.32884 23.1053 7.32936 23.0152C7.33015 22.8317 7.40116 22.6554 7.52782 22.5225L10.7785 19.2787C11.3165 18.7374 11.9563 18.3078 12.661 18.0147C13.3657 17.7216 14.1214 17.5707 14.8846 17.5707C15.6478 17.5707 16.4035 17.7216 17.1082 18.0147C17.8129 18.3078 18.4526 18.7374 18.9907 19.2787L21.7281 22.0161C22.8109 23.1014 23.419 24.572 23.419 26.1051C23.419 27.6382 22.8109 29.1087 21.7281 30.1941L18.4774 33.4721C18.3456 33.6013 18.1692 33.6748 17.9847 33.6774ZM8.9718 23.0152L17.9847 32.0281L20.7221 29.2907C21.5495 28.463 22.0144 27.3405 22.0144 26.1701C22.0144 24.9997 21.5495 23.8772 20.7221 23.0494L17.9847 20.312C17.1569 19.4846 16.0345 19.0198 14.8641 19.0198C13.6937 19.0198 12.5712 19.4846 11.7434 20.312L8.9718 23.0152Z", "fill", "#91D6AA"], ["d", "M20.5715 30.5842C20.4814 30.5847 20.3921 30.5674 20.3088 30.5334C20.2254 30.4993 20.1496 30.4492 20.0856 30.3857L10.6142 20.9143C10.4853 20.7854 10.4129 20.6107 10.4129 20.4284C10.4129 20.2462 10.4853 20.0714 10.6142 19.9425C10.7431 19.8137 10.9178 19.7413 11.1001 19.7413C11.2823 19.7413 11.4571 19.8137 11.586 19.9425L21.0574 29.4139C21.1215 29.4776 21.1724 29.5533 21.2072 29.6367C21.2419 29.72 21.2598 29.8095 21.2598 29.8998C21.2598 29.9902 21.2419 30.0796 21.2072 30.163C21.1724 30.2464 21.1215 30.3221 21.0574 30.3857C20.9934 30.4492 20.9176 30.4993 20.8342 30.5334C20.7508 30.5674 20.6616 30.5847 20.5715 30.5842ZM13.9401 41C13.7606 40.9992 13.5886 40.928 13.4611 40.8015L9.66979 37.0102C9.583 36.9217 9.52188 36.8113 9.49295 36.6908C9.46402 36.5703 9.46838 36.4441 9.50554 36.3259L10.491 33.3626L7.52777 34.3344C7.40831 34.3699 7.28143 34.3721 7.16083 34.3407C7.04023 34.3093 6.93048 34.2457 6.84342 34.1565L0.198372 27.5388C0.106951 27.4466 0.0436496 27.3303 0.0158586 27.2035C-0.0119325 27.0766 -0.00306574 26.9445 0.0414236 26.8225C0.0859129 26.7005 0.164189 26.5937 0.26711 26.5146C0.370032 26.4354 0.493352 26.3871 0.62267 26.3754C1.9717 26.2876 3.28467 25.9028 4.46771 25.2486C5.65075 24.5944 6.67464 23.6869 7.46618 22.591C7.57909 22.45 7.74318 22.3593 7.92266 22.3388C8.10214 22.3183 8.28245 22.3696 8.42427 22.4815C8.49508 22.5375 8.55411 22.6069 8.59797 22.6858C8.64183 22.7647 8.66965 22.8515 8.67983 22.9412C8.69001 23.0308 8.68234 23.1217 8.65727 23.2084C8.6322 23.2951 8.59023 23.376 8.53376 23.4464C6.99278 25.5739 4.70481 27.0405 2.12824 27.5525L7.52777 32.9041L11.3875 31.6176C11.5075 31.5786 11.636 31.5735 11.7587 31.603C11.8814 31.6325 11.9936 31.6953 12.0828 31.7845C12.1721 31.8738 12.2349 31.9859 12.2643 32.1086C12.2938 32.2313 12.2888 32.3598 12.2498 32.4798L10.9495 36.3396L13.4679 38.8648C13.9799 36.2883 15.4465 34.0003 17.574 32.4593C17.6437 32.3998 17.7247 32.3549 17.8121 32.3272C17.8995 32.2996 17.9916 32.2898 18.0828 32.2984C18.1741 32.3071 18.2627 32.3339 18.3434 32.3775C18.4241 32.421 18.4952 32.4803 18.5525 32.5518C18.6098 32.6233 18.6522 32.7057 18.6771 32.7939C18.702 32.8821 18.7089 32.9744 18.6974 33.0654C18.6859 33.1563 18.6563 33.2441 18.6103 33.3233C18.5643 33.4026 18.5028 33.4718 18.4295 33.5269C17.3339 34.3188 16.4266 35.3427 15.7724 36.5257C15.1183 37.7087 14.7333 39.0215 14.645 40.3704C14.633 40.5003 14.5841 40.6241 14.5041 40.7272C14.4241 40.8303 14.3163 40.9083 14.1933 40.9521C14.1127 40.984 14.0268 41.0002 13.9401 41Z", "fill", "#91D6AA"], ["d", "M6.15905 28.6817C5.97755 28.6871 5.80132 28.6202 5.66912 28.4957C5.53693 28.3712 5.45961 28.1993 5.45417 28.0178C5.44872 27.8363 5.5156 27.6601 5.64009 27.5279C5.76458 27.3957 5.93648 27.3184 6.11799 27.313C6.43737 27.2937 6.74552 27.188 7.00949 27.0072C7.27347 26.8264 7.48336 26.5773 7.61671 26.2864C7.66165 26.2082 7.72154 26.1397 7.79298 26.0846C7.86441 26.0296 7.94599 25.9892 8.03305 25.9656C8.12011 25.9421 8.21095 25.936 8.30038 25.9476C8.38982 25.9592 8.47609 25.9883 8.55427 26.0332C8.63246 26.0782 8.70103 26.138 8.75607 26.2095C8.81111 26.2809 8.85154 26.3625 8.87505 26.4496C8.89857 26.5366 8.9047 26.6275 8.89311 26.7169C8.88151 26.8063 8.85242 26.8926 8.80748 26.9708C8.55783 27.457 8.18639 27.8702 7.72941 28.1701C7.27243 28.4699 6.74553 28.6462 6.20011 28.6817H6.15905ZM7.71937 31.4191H7.473C7.2915 31.4045 7.1232 31.3185 7.00513 31.1799C6.88705 31.0413 6.82888 30.8615 6.8434 30.68C6.85792 30.4985 6.94394 30.3302 7.08255 30.2121C7.22116 30.094 7.40099 30.0358 7.5825 30.0504C8.12313 30.0983 8.21894 29.8861 8.26685 29.7629C8.30459 29.6811 8.35808 29.6076 8.42425 29.5465C8.49041 29.4854 8.56797 29.4379 8.65249 29.4068C8.73701 29.3756 8.82683 29.3614 8.91683 29.365C9.00684 29.3686 9.09525 29.3899 9.17703 29.4276C9.25882 29.4653 9.33236 29.5188 9.39347 29.585C9.45459 29.6512 9.50207 29.7287 9.53321 29.8132C9.56434 29.8978 9.57853 29.9876 9.57495 30.0776C9.57138 30.1676 9.55011 30.256 9.51236 30.3378C9.35567 30.6765 9.10114 30.9605 8.78157 31.1532C8.462 31.3459 8.09204 31.4385 7.71937 31.4191ZM13.0026 36.2095C12.8312 36.2102 12.6659 36.1466 12.5392 36.0313C12.4125 35.916 12.3336 35.7574 12.3182 35.5868C12.2032 34.8299 12.2944 34.056 12.5822 33.3466C12.8701 32.6373 13.3439 32.0186 13.9538 31.5559C14.0257 31.5011 14.1077 31.461 14.1951 31.4378C14.2825 31.4147 14.3736 31.409 14.4632 31.4211C14.5528 31.4332 14.6391 31.4628 14.7173 31.5082C14.7955 31.5537 14.8639 31.6141 14.9187 31.686C14.9736 31.7578 15.0137 31.8398 15.0368 31.9272C15.0599 32.0146 15.0656 32.1057 15.0536 32.1953C15.0415 32.285 15.0119 32.3713 14.9664 32.4495C14.921 32.5276 14.8606 32.5961 14.7887 32.6509C14.3651 32.9739 14.0383 33.407 13.844 33.903C13.6497 34.399 13.5954 34.9388 13.6869 35.4636C13.6954 35.5535 13.6859 35.6442 13.6592 35.7305C13.6324 35.8168 13.5888 35.8969 13.5309 35.9663C13.473 36.0356 13.402 36.0928 13.3218 36.1346C13.2417 36.1763 13.1542 36.2018 13.0641 36.2095H13.0026Z", "fill", "#91D6AA"], [1, "section-2"], [1, "section-2-content", "flex-column", "center"], [1, "primary-text-color"], [1, "gray-text-color", "text-align-center"], [1, "section-7"], [1, "primary-text-color", "center", "title-size"], [1, "gap-30", "flex-wrap", "center", "new-blogs"], [1, "img-width", "blog-card"], ["src", "../../assets/images/latest-new/latest-new-1.png", "alt", "", 1, "relative"], [1, "text-border", "blog-card-text"], [1, "title"], [1, "more-info"], [1, "btn-secondary", "btn-hover"], ["src", "../../assets/images/latest-new/latest-new-2.png", "alt", "", 1, "relative"], ["src", "../../assets/images/latest-new/latest-new-3.png", "alt", "", 1, "relative"], ["routerLink", "BlogsOpen"]], template: function BlogsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 2);
    \u0275\u0275element(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 7)(14, "figure", 8)(15, "h1", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "section", 11)(22, "h1", 12);
    \u0275\u0275text(23, "Latest New & Blogs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 13)(25, "div", 14);
    \u0275\u0275element(26, "img", 15);
    \u0275\u0275elementStart(27, "div", 16)(28, "p", 17);
    \u0275\u0275text(29, "Cleaning Companies in Qatar: A Comprehensive Guide to Professional Cleaning Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18)(31, "p");
    \u0275\u0275text(32, " Cleaning Companies in Qatar: A Comprehensive Guide to Professional Cleaning Services, Keeping a clean and organized space is essential for comfort, health, and productivity. Whether you\u2019re looking to maintain your home ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 19)(34, "span", 9);
    \u0275\u0275text(35, "Read More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "div", 14);
    \u0275\u0275element(37, "img", 20);
    \u0275\u0275elementStart(38, "div", 16)(39, "p", 17);
    \u0275\u0275text(40, "Cleaning Companies in Qatar: A Comprehensive Guide to Professional Cleaning Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "p");
    \u0275\u0275text(43, " Cleaning Companies in Qatar: A Comprehensive Guide to Professional Cleaning Services, Keeping a clean and organized space is essential for comfort, health, and productivity. Whether you\u2019re looking to maintain your home ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 19)(45, "span", 9);
    \u0275\u0275text(46, "Read More");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 14);
    \u0275\u0275element(48, "img", 21);
    \u0275\u0275elementStart(49, "div", 16)(50, "p", 17);
    \u0275\u0275text(51, "Cleaning Companies in Qatar: A Comprehensive Guide to Professional Cleaning Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 18)(53, "p");
    \u0275\u0275text(54, " Cleaning Companies in Qatar: A Comprehensive Guide to Professional Cleaning Services, Keeping a clean and organized space is essential for comfort, health, and productivity. Whether you\u2019re looking to maintain your home ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 19)(56, "span", 9);
    \u0275\u0275text(57, "Read More");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(58, "a", 22);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "shared.CarlaMaidBlogs"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "shared.CleaningTips"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 9, "shared.blogs"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 11, "paragraph.WelcomeToTheCarlaMaid"));
    \u0275\u0275advance(40);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 13, "shared.ReadMore"));
  }
}, dependencies: [TranslateModule, TranslatePipe, RouterModule, RouterLink], styles: ['\n\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-header-img.png");\n  background-size: cover;\n  width: 100%;\n  height: auto;\n}\n.section-1[_ngcontent-%COMP%]   .carla-blogs-title[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  display: flex;\n  flex-direction: column;\n}\n.section-1[_ngcontent-%COMP%]   .carla-blogs-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n  color: #91D6AA;\n}\n.section-1[_ngcontent-%COMP%]   .carla-blogs-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-left: 9vw;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  color: #ffffff;\n  font-size: 1rem;\n  width: 37%;\n  padding-bottom: 12vh;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-content[_ngcontent-%COMP%] {\n  margin-top: 7vw;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5vw;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 70%;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%] {\n  gap: 9vw;\n  position: relative;\n  margin-bottom: 25vh;\n  margin-top: 7vh;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  min-width: 20vw;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1vw;\n  width: 20vw;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%]   .text-border[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%]   .text-border[_ngcontent-%COMP%]   .more-txt[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 0.8rem;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%]   .text-border[_ngcontent-%COMP%]:hover {\n  border: 1px solid #279327;\n  z-index: 9999;\n  transition: 0.25s ease-in-out;\n}\n.section-2[_ngcontent-%COMP%]   .section-2-imgs[_ngcontent-%COMP%]   .text-border[_ngcontent-%COMP%]:hover   .more-txt[_ngcontent-%COMP%] {\n  display: block;\n}\n.section-7[_ngcontent-%COMP%] {\n  margin-bottom: 10rem;\n  position: relative;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%] {\n  height: 350px;\n  position: relative;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%] {\n  display: none;\n  transition: 0.5s all ease-in-out;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  animation: fadeOut 0.6s ease-out forwards;\n}\n.section-7[_ngcontent-%COMP%]   .blog-card[_ngcontent-%COMP%]:hover   .more-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  width: 20rem;\n  background-color: rgba(222, 221, 221, 0.768627451);\n  border-radius: 10px;\n  bottom: -20px;\n  right: 20px;\n  padding: 20px;\n  z-index: 999;\n  animation: slideIn 0.6s ease-out forwards;\n}\n.section-7[_ngcontent-%COMP%]   .img-width[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.section-7[_ngcontent-%COMP%]   .img-width[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.section-7[_ngcontent-%COMP%]   .img-width[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=blogs.component.css.map */'] }));
var BlogsComponent = _BlogsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent" });
})();
export {
  BlogsComponent
};
//# sourceMappingURL=chunk-7VPQQXI5.mjs.map
