import './polyfills.server.mjs';
import {
  provideServerRendering
} from "./chunk-H5UGRJJ6.mjs";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-NGGOJZDC.mjs";
import {
  ConfigService,
  environment
} from "./chunk-2BMABIRG.mjs";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
  provideRouter
} from "./chunk-NU7KL24N.mjs";
import {
  DomRendererFactory2,
  HttpClient,
  HttpClientModule,
  bootstrapApplication,
  provideClientHydration,
  provideHttpClient,
  withFetch
} from "./chunk-A4ZW5M3M.mjs";
import {
  TranslateLoader,
  TranslateModule
} from "./chunk-3Y7MHHCZ.mjs";
import {
  DOCUMENT
} from "./chunk-FZPKIXOD.mjs";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Injectable,
  InjectionToken,
  NgZone,
  RendererFactory2,
  RuntimeError,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
  mergeApplicationConfig,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefer,
  ɵɵdeferOnTimer,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinvalidFactory,
  ɵɵtemplate
} from "./chunk-S6S6V7ZK.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/app/app.component.ts
var AppComponent_Defer_2_DepsFn = () => [import("./chunk-ETMOPQWE.mjs").then((m) => m.HeaderComponent), import("./chunk-XFGCSF5K.mjs").then((m) => m.FooterComponent), RouterOutlet];
function AppComponent_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header")(1, "router-outlet")(2, "app-footer");
  }
}
function AppComponent_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementEnd();
  }
}
var _AppComponent = class _AppComponent {
  constructor(_configService, router) {
    __publicField(this, "_configService");
    __publicField(this, "router");
    __publicField(this, "title", "carla-maid");
    __publicField(this, "isLoading", false);
    __publicField(this, "lang", environment.lang);
    this._configService = _configService;
    this.router = router;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isLoading = false;
      }
    });
  }
  ngOnInit() {
    this.setLang();
  }
  setLang() {
    if (this._configService.isBrowser()) {
      let lang = localStorage.getItem("lang") || environment.lang;
      this._configService.setLang(lang);
      this.lang = this._configService.getLang();
    }
  }
};
__publicField(_AppComponent, "\u0275fac", function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(Router));
});
__publicField(_AppComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "loader"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_Defer_0_Template, 3, 0)(1, AppComponent_DeferPlaceholder_1_Template, 2, 0);
    \u0275\u0275defer(2, 0, AppComponent_Defer_2_DepsFn, null, 1);
    \u0275\u0275deferOnTimer(1e3);
  }
}, dependencies: [
  TranslateModule,
  RouterModule,
  MatProgressSpinnerModule,
  MatProgressSpinner
], styles: ["\n\n.loader[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-YMBDRJ3Q.mjs").then((m) => m.LandingComponent)
  },
  {
    path: "our-services",
    loadComponent: () => import("./chunk-GFL2OJMR.mjs").then((m) => m.OurServicesComponent)
  },
  {
    path: "blogs",
    loadComponent: () => import("./chunk-57EGTWL7.mjs").then((m) => m.BlogsComponent)
  },
  {
    path: "about-us",
    loadComponent: () => import("./chunk-TQZ4PJIT.mjs").then((m) => m.AboutUSComponent)
  },
  {
    path: "blogs-open",
    loadComponent: () => import("./chunk-LQKCQW6A.mjs").then((m) => m.BlogsOpenComponent)
  },
  {
    path: "book-now",
    loadComponent: () => import("./chunk-YYCOGGOU.mjs").then((m) => m.BookNowComponent)
  },
  {
    path: "contact-us",
    loadComponent: () => import("./chunk-EOEZSKSM.mjs").then((m) => m.ContactUsComponent)
  }
];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
    this.loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-LOBWABNV.mjs").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@ngx-translate/http-loader/dist/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class {
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    __publicField(this, "http");
    __publicField(this, "prefix");
    __publicField(this, "suffix");
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
};

// src/app/app.config.ts
function createTranslateLoader(http) {
  return new TranslateHttpLoader(http, "/i18n/", ".json");
}
var provideTranslation = () => ({
  defaultLanguage: "en",
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient]
  }
});
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation())
    ]),
    provideClientHydration()
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v18.2.13
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-ZTCMPZUR.mjs.map
