import './polyfills.server.mjs';
import {
  provideServerRendering
} from "./chunk-CHQJYM7W.mjs";
import {
  MatIcon,
  MatIconModule,
  MatIconRegistry
} from "./chunk-AKN435VV.mjs";
import {
  ConfigService,
  environment
} from "./chunk-GAEUWEXE.mjs";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule,
  RouterOutlet,
  provideRouter,
  withComponentInputBinding
} from "./chunk-UFOZR5SN.mjs";
import {
  TranslateLoader,
  TranslateModule
} from "./chunk-OKUDJCYY.mjs";
import {
  DomRendererFactory2,
  DomSanitizer,
  HttpClient,
  HttpClientModule,
  Meta,
  Title,
  bootstrapApplication,
  provideClientHydration,
  provideHttpClient,
  withFetch
} from "./chunk-3RL2LK7B.mjs";
import {
  ANIMATION_MODULE_TYPE,
  APP_INITIALIZER,
  ApplicationRef,
  ChangeDetectionScheduler,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  NEVER,
  NgModule,
  NgZone,
  PLATFORM_ID,
  RendererFactory2,
  RuntimeError,
  Subject,
  concat,
  defer,
  delay,
  filter,
  from,
  fromEvent,
  importProvidersFrom,
  inject,
  isPlatformBrowser,
  makeEnvironmentProviders,
  map,
  merge,
  mergeApplicationConfig,
  of,
  performanceMarkFeature,
  provideZoneChangeDetection,
  publish,
  setClassMetadata,
  switchMap,
  take,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefer,
  ɵɵdeferOnTimer,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-EEE5GEKV.mjs";
import {
  __publicField,
  __spreadValues
} from "./chunk-CU4POASJ.mjs";

// src/app/app.component.ts
var AppComponent_Defer_2_DepsFn = () => [import("./chunk-JWOSLUNI.mjs").then((m) => m.HeaderComponent), import("./chunk-WHFCIRBL.mjs").then((m) => m.FooterComponent), RouterOutlet, MatIcon];
function AppComponent_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header")(1, "router-outlet")(2, "app-footer");
    \u0275\u0275elementStart(3, "div", 0)(4, "div", 1)(5, "mat-icon", 2);
    \u0275\u0275listener("click", function AppComponent_Defer_0_Template_mat_icon_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl("https://www.instagram.com/carlamaid.qa/"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 1)(7, "mat-icon", 3);
    \u0275\u0275listener("click", function AppComponent_Defer_0_Template_mat_icon_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl("https://www.facebook.com/carlamaid.qa"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "mat-icon", 4);
    \u0275\u0275listener("click", function AppComponent_Defer_0_Template_mat_icon_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl("https://www.linkedin.com/company/carlamaid/"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 1)(11, "mat-icon", 5);
    \u0275\u0275listener("click", function AppComponent_Defer_0_Template_mat_icon_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl("https://x.com/MaidQa84948"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 1)(13, "mat-icon", 6);
    \u0275\u0275listener("click", function AppComponent_Defer_0_Template_mat_icon_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl("https://wa.me/97471236660"));
    });
    \u0275\u0275elementEnd()()();
  }
}
function AppComponent_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementEnd()();
  }
}
var _AppComponent = class _AppComponent {
  constructor(_configService, router, iconRegistry, sanitizer) {
    __publicField(this, "_configService");
    __publicField(this, "router");
    __publicField(this, "iconRegistry");
    __publicField(this, "sanitizer");
    __publicField(this, "title", "carla-maid");
    __publicField(this, "isLoading", false);
    __publicField(this, "lang", environment.lang);
    this._configService = _configService;
    this.router = router;
    this.iconRegistry = iconRegistry;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.setLang();
    this.isLoading = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isLoading = false;
        if (this._configService.isBrowser()) {
          window.scrollTo(0, 0);
        }
      }
    });
    this.iconRegistry.addSvgIcon("instagram", this.sanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/instagram.svg"));
    this.iconRegistry.addSvgIcon("x", this.sanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/x.svg"));
    this.iconRegistry.addSvgIcon("facebook", this.sanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/facebook.svg"));
    this.iconRegistry.addSvgIcon("linkedin", this.sanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/linkedin.svg"));
    this.iconRegistry.addSvgIcon("whatsapp", this.sanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/whatsapp.svg"));
  }
  setLang() {
    if (this._configService.isBrowser()) {
      let lang = localStorage.getItem("lang") || environment.lang;
      this._configService.setLang(lang);
      this.lang = this._configService.getLang();
    }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
};
__publicField(_AppComponent, "\u0275fac", function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(ConfigService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatIconRegistry), \u0275\u0275directiveInject(DomSanitizer));
});
__publicField(_AppComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "social-media-container"], [1, "social-media-item"], ["svgIcon", "instagram", 1, "social-media-icon", "instagram", 3, "click"], ["svgIcon", "facebook", 1, "social-media-icon", "facebook", 3, "click"], ["svgIcon", "linkedin", 1, "social-media-icon", "linkedin", 3, "click"], ["svgIcon", "x", 1, "social-media-icon", "x", 3, "click"], ["svgIcon", "whatsapp", 1, "social-media-icon", "whatsapp", 3, "click"], [1, "loader-container"], [1, "loader"], ["src", "../assets/images/Logo-En.png", "alt", ""]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AppComponent_Defer_0_Template, 14, 0)(1, AppComponent_DeferPlaceholder_1_Template, 3, 0);
    \u0275\u0275defer(2, 0, AppComponent_Defer_2_DepsFn, null, 1);
    \u0275\u0275deferOnTimer(1e3);
  }
}, dependencies: [
  TranslateModule,
  RouterModule,
  MatIconModule
], styles: ["\n\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: 40%;\n}\n.loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n  animation-duration: 2s;\n}\n.social-media-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-radius: 11px;\n  background: rgba(0, 0, 0, 0.0823529412);\n  margin: 5px;\n}\n  .social-media-icon {\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n}\n  .x:hover path {\n  fill: #000000;\n}\n  .facebook:hover path {\n  fill: #3275e2;\n}\n  .linkedin:hover path {\n  fill: #0a0ae1;\n}\n  .whatsapp:hover path {\n  fill: #25d366;\n}\n  .instagram:hover path {\n  fill: #e1306c;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] }));
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 28 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-UZZHDSYO.mjs").then((m) => m.LandingComponent)
  },
  {
    path: "our-services",
    loadComponent: () => import("./chunk-M7K5XUXU.mjs").then((m) => m.OurServicesComponent)
  },
  {
    path: "blogs",
    loadComponent: () => import("./chunk-L4OIIHRP.mjs").then((m) => m.BlogsComponent)
  },
  {
    path: "about-us",
    loadComponent: () => import("./chunk-NJFIS3W5.mjs").then((m) => m.AboutUSComponent)
  },
  {
    path: "blogs-open",
    loadComponent: () => import("./chunk-FQROS7F2.mjs").then((m) => m.BlogsOpenComponent)
  },
  {
    path: "book-now",
    loadComponent: () => import("./chunk-3Y5KUWKS.mjs").then((m) => m.BookNowComponent)
  },
  {
    path: "contact-us",
    loadComponent: () => import("./chunk-R5U3EXVB.mjs").then((m) => m.ContactUsComponent)
  },
  {
    path: "blogs-list",
    loadComponent: () => import("./chunk-X3KYB7Q5.mjs").then((m) => m.BlogsListComponent)
  },
  {
    path: "view-blogs/:id",
    loadComponent: () => import("./chunk-IDLFREFX.mjs").then((m) => m.ViewBlogsComponent)
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
    const loadFn = () => this.moduleImpl ?? import("./chunk-2WPW3X6G.mjs").then((m) => m);
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

// node_modules/@angular/service-worker/fesm2022/service-worker.mjs
var ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
function errorObservable(message) {
  return defer(() => throwError(new Error(message)));
}
var NgswCommChannel = class {
  constructor(serviceWorker) {
    this.serviceWorker = serviceWorker;
    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      const controllerChangeEvents = fromEvent(serviceWorker, "controllerchange");
      const controllerChanges = controllerChangeEvents.pipe(map(() => serviceWorker.controller));
      const currentController = defer(() => of(serviceWorker.controller));
      const controllerWithChanges = concat(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe(filter((c) => !!c));
      this.registration = this.worker.pipe(switchMap(() => serviceWorker.getRegistration()));
      const rawEvents = fromEvent(serviceWorker, "message");
      const rawEventPayload = rawEvents.pipe(map((event) => event.data));
      const eventsUnconnected = rawEventPayload.pipe(filter((event) => event && event.type));
      const events = eventsUnconnected.pipe(publish());
      events.connect();
      this.events = events;
    }
  }
  postMessage(action, payload) {
    return this.worker.pipe(take(1), tap((sw) => {
      sw.postMessage(__spreadValues({
        action
      }, payload));
    })).toPromise().then(() => void 0);
  }
  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }
  generateNonce() {
    return Math.round(Math.random() * 1e7);
  }
  eventsOfType(type) {
    let filterFn;
    if (typeof type === "string") {
      filterFn = (event) => event.type === type;
    } else {
      filterFn = (event) => type.includes(event.type);
    }
    return this.events.pipe(filter(filterFn));
  }
  nextEventOfType(type) {
    return this.eventsOfType(type).pipe(take(1));
  }
  waitForOperationCompleted(nonce) {
    return this.eventsOfType("OPERATION_COMPLETED").pipe(filter((event) => event.nonce === nonce), take(1), map((event) => {
      if (event.result !== void 0) {
        return event.result;
      }
      throw new Error(event.error);
    })).toPromise();
  }
  get isEnabled() {
    return !!this.serviceWorker;
  }
};
var _SwPush = class _SwPush {
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    this.pushManager = null;
    this.subscriptionChanges = new Subject();
    if (!sw.isEnabled) {
      this.messages = NEVER;
      this.notificationClicks = NEVER;
      this.subscription = NEVER;
      return;
    }
    this.messages = this.sw.eventsOfType("PUSH").pipe(map((message) => message.data));
    this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(map((message) => message.data));
    this.pushManager = this.sw.registration.pipe(map((registration) => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe(switchMap((pm) => pm.getSubscription()));
    this.subscription = merge(workerDrivenSubscriptions, this.subscriptionChanges);
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */
  requestSubscription(options) {
    if (!this.sw.isEnabled || this.pushManager === null) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+"));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }
    pushOptions.applicationServerKey = applicationServerKey;
    return this.pushManager.pipe(switchMap((pm) => pm.subscribe(pushOptions)), take(1)).toPromise().then((sub) => {
      this.subscriptionChanges.next(sub);
      return sub;
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */
  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const doUnsubscribe = (sub) => {
      if (sub === null) {
        throw new Error("Not subscribed to push notifications.");
      }
      return sub.unsubscribe().then((success) => {
        if (!success) {
          throw new Error("Unsubscribe failed!");
        }
        this.subscriptionChanges.next(null);
      });
    };
    return this.subscription.pipe(take(1), switchMap(doUnsubscribe)).toPromise();
  }
  decodeBase64(input) {
    return atob(input);
  }
};
_SwPush.\u0275fac = function SwPush_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SwPush)(\u0275\u0275inject(NgswCommChannel));
};
_SwPush.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SwPush,
  factory: _SwPush.\u0275fac
});
var SwPush = _SwPush;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwPush, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var _SwUpdate = class _SwUpdate {
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */
  get isEnabled() {
    return this.sw.isEnabled;
  }
  constructor(sw) {
    this.sw = sw;
    if (!sw.isEnabled) {
      this.versionUpdates = NEVER;
      this.unrecoverable = NEVER;
      return;
    }
    this.versionUpdates = this.sw.eventsOfType(["VERSION_DETECTED", "VERSION_INSTALLATION_FAILED", "VERSION_READY", "NO_NEW_VERSION_DETECTED"]);
    this.unrecoverable = this.sw.eventsOfType("UNRECOVERABLE_STATE");
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */
  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES", {
      nonce
    }, nonce);
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * In most cases, you should not use this method and instead should update a client by reloading
   * the page.
   *
   * <div class="alert is-important">
   *
   * Updating a client without reloading can easily result in a broken application due to a version
   * mismatch between the application shell and other page resources,
   * such as lazy-loaded chunks, whose filenames may change between
   * versions.
   *
   * Only use this method, if you are certain it is safe for your specific use case.
   *
   * </div>
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */
  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }
    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation("ACTIVATE_UPDATE", {
      nonce
    }, nonce);
  }
};
_SwUpdate.\u0275fac = function SwUpdate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SwUpdate)(\u0275\u0275inject(NgswCommChannel));
};
_SwUpdate.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SwUpdate,
  factory: _SwUpdate.\u0275fac
});
var SwUpdate = _SwUpdate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwUpdate, [{
    type: Injectable
  }], () => [{
    type: NgswCommChannel
  }], null);
})();
var SCRIPT = new InjectionToken(ngDevMode ? "NGSW_REGISTER_SCRIPT" : "");
function ngswAppInitializer(injector, script, options, platformId) {
  return () => {
    if (!(isPlatformBrowser(platformId) && "serviceWorker" in navigator && options.enabled !== false)) {
      return;
    }
    const ngZone = injector.get(NgZone);
    const appRef = injector.get(ApplicationRef);
    ngZone.runOutsideAngular(() => {
      const sw = navigator.serviceWorker;
      const onControllerChange = () => sw.controller?.postMessage({
        action: "INITIALIZE"
      });
      sw.addEventListener("controllerchange", onControllerChange);
      appRef.onDestroy(() => {
        sw.removeEventListener("controllerchange", onControllerChange);
      });
    });
    let readyToRegister$;
    if (typeof options.registrationStrategy === "function") {
      readyToRegister$ = options.registrationStrategy();
    } else {
      const [strategy, ...args] = (options.registrationStrategy || "registerWhenStable:30000").split(":");
      switch (strategy) {
        case "registerImmediately":
          readyToRegister$ = of(null);
          break;
        case "registerWithDelay":
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;
        case "registerWhenStable":
          const whenStable$ = from(injector.get(ApplicationRef).whenStable());
          readyToRegister$ = !args[0] ? whenStable$ : merge(whenStable$, delayWithTimeout(+args[0]));
          break;
        default:
          throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    }
    ngZone.runOutsideAngular(() => readyToRegister$.pipe(take(1)).subscribe(() => navigator.serviceWorker.register(script, {
      scope: options.scope
    }).catch((err) => console.error("Service worker registration failed with:", err))));
  };
}
function delayWithTimeout(timeout) {
  return of(null).pipe(delay(timeout));
}
function ngswCommChannelFactory(opts, platformId) {
  return new NgswCommChannel(isPlatformBrowser(platformId) && opts.enabled !== false ? navigator.serviceWorker : void 0);
}
var SwRegistrationOptions = class {
};
function provideServiceWorker(script, options = {}) {
  return makeEnvironmentProviders([SwPush, SwUpdate, {
    provide: SCRIPT,
    useValue: script
  }, {
    provide: SwRegistrationOptions,
    useValue: options
  }, {
    provide: NgswCommChannel,
    useFactory: ngswCommChannelFactory,
    deps: [SwRegistrationOptions, PLATFORM_ID]
  }, {
    provide: APP_INITIALIZER,
    useFactory: ngswAppInitializer,
    deps: [Injector, SCRIPT, SwRegistrationOptions, PLATFORM_ID],
    multi: true
  }]);
}
var _ServiceWorkerModule = class _ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, options = {}) {
    return {
      ngModule: _ServiceWorkerModule,
      providers: [provideServiceWorker(script, options)]
    };
  }
};
_ServiceWorkerModule.\u0275fac = function ServiceWorkerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServiceWorkerModule)();
};
_ServiceWorkerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ServiceWorkerModule
});
_ServiceWorkerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [SwPush, SwUpdate]
});
var ServiceWorkerModule = _ServiceWorkerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceWorkerModule, [{
    type: NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();

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
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation())
    ]),
    provideClientHydration(),
    provideServiceWorker("ngsw-worker.js", {
      enabled: environment.production,
      registrationStrategy: "registerWhenStable:30000"
    }),
    Meta,
    Title
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

@angular/service-worker/fesm2022/service-worker.mjs:
  (**
   * @license Angular v18.2.13
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=chunk-KP5OGO7U.mjs.map
