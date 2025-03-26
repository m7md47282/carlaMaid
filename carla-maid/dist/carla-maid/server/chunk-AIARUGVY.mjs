import './polyfills.server.mjs';
import {
  TranslateService
} from "./chunk-OXPP6M56.mjs";
import {
  PLATFORM_ID,
  isPlatformBrowser,
  isPlatformServer,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WSWL4PGO.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/environments/environment.ts
var environment = {
  production: false,
  // Indicates if the environment is production
  // apiUrl: '',
  wordpressApiBaseUrl: "https://carlamaid.qa/wordpress/index.php/wp-json/wp/v2",
  lang: "en",
  // Default language setting
  languages: ["ar", "en"],
  // Supported languages
  direction: "ltr"
  // Text direction, left-to-right
};

// src/app/shared/config/config.service.ts
var _ConfigService = class _ConfigService {
  constructor(translate, platformId) {
    __publicField(this, "translate");
    __publicField(this, "platformId");
    this.translate = translate;
    this.platformId = platformId;
  }
  /**
   * Determines the current language setting from local storage or falls back to the default language.
   * @returns {Languages} lang The current language code ex. 'ar' | 'en'.
   */
  getLang() {
    if (this.isBrowser())
      return localStorage?.getItem("lang") || environment.lang;
    return environment.lang || "en";
  }
  /**
   * Sets the language in local storage, updates the document's language attribute, and updates the translation service.
   * Also sets the text direction ('ltr' or 'rtl') based on the language.
   * @param {string} lang - The language code to set.
   */
  setLang(lang) {
    if (this.isBrowser()) {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
      environment.lang = lang;
      this.translate.use(environment.lang);
      environment.direction = lang == "ar" ? "rtl" : "ltr";
      document.documentElement.dir = environment.direction;
      localStorage.setItem("direction", environment.direction);
    }
  }
  toggleLang() {
    this.setLang(this.getLang() === "ar" ? "en" : "ar");
    location.reload();
  }
  /**
   * Retrieves the text direction from local storage or falls back to the default direction.
   * @returns {Direction} The current text direction ('ltr' or 'rtl').
   */
  getDirection() {
    if (this.isBrowser())
      return localStorage?.getItem("direction") || environment.direction;
    return environment.direction || "ltr";
  }
  /**
   * Checks if the current platform is a browser.
   * @returns {boolean} True if the platform is a browser, false otherwise.
   */
  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  /**
   * Checks if the current platform is a server.
   * @returns {boolean} True if the platform is a server, false otherwise.
   */
  isServer() {
    return isPlatformServer(this.platformId);
  }
};
__publicField(_ConfigService, "\u0275fac", function ConfigService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfigService)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(PLATFORM_ID));
});
__publicField(_ConfigService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfigService, factory: _ConfigService.\u0275fac, providedIn: "root" }));
var ConfigService = _ConfigService;

export {
  environment,
  ConfigService
};
//# sourceMappingURL=chunk-AIARUGVY.mjs.map
