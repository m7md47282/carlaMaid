import './polyfills.server.mjs';
import {
  MatButtonModule,
  MatDatepickerModule
} from "./chunk-IFWTQF5K.mjs";
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  UniqueSelectionDispatcher
} from "./chunk-HMINUFFI.mjs";
import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WIHOLO77.mjs";
import {
  MatIconModule
} from "./chunk-NTGYKGZA.mjs";
import {
  FocusMonitor,
  MatCommonModule,
  MatNativeDateModule,
  MatRipple,
  MatRippleModule,
  _MatInternalFormField
} from "./chunk-KJD7JTY7.mjs";
import {
  environment
} from "./chunk-XB3OBPTA.mjs";
import "./chunk-VAXAWVT6.mjs";
import "./chunk-L6APMHKW.mjs";
import {
  TranslateModule
} from "./chunk-ULFMFSOZ.mjs";
import {
  HttpClient
} from "./chunk-RTKK4VRH.mjs";
import {
  ANIMATION_MODULE_TYPE,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  finalize,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-REGLKICM.mjs";
import "./chunk-LBJNHE26.mjs";

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c0 = ["input"];
var _c1 = ["label"];
var _c2 = ["*"];
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatCheckbox),
  multi: true
};
var MatCheckboxChange = class {
};
var nextUniqueId = 0;
var defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
var MatCheckbox = class _MatCheckbox {
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  /** Creates the change event that will be emitted by the checkbox. */
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  /** Gets the element on which to add the animation CSS classes. */
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(_elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    this._animationClasses = {
      uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
      uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
      checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
      checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
      indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
      indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
    };
    this.ariaLabel = "";
    this.ariaLabelledby = null;
    this.labelPosition = "after";
    this.name = null;
    this.change = new EventEmitter();
    this.indeterminateChange = new EventEmitter();
    this._onTouched = () => {
    };
    this._currentAnimationClass = "";
    this._currentCheckState = TransitionCheckState.Init;
    this._controlValueAccessorChangeFn = () => {
    };
    this._validatorChangeFn = () => {
    };
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this._uniqueId = `mat-mdc-checkbox-${++nextUniqueId}`;
    this.disabledInteractive = _options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the checkbox is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = value;
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Implemented as a part of Validator.
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  // Implemented as a part of Validator.
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationMode === "NoopAnimations") {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static {
    this.\u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatCheckbox)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatCheckbox,
      selectors: [["mat-checkbox"]],
      viewQuery: function MatCheckbox_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
          \u0275\u0275viewQuery(_c1, 5);
          \u0275\u0275viewQuery(MatRipple, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ripple = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-checkbox"],
      hostVars: 16,
      hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
          \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
          \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
          \u0275\u0275classProp("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
        }
      },
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        id: "id",
        required: [2, "required", "required", booleanAttribute],
        labelPosition: "labelPosition",
        name: "name",
        value: "value",
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
        checked: [2, "checked", "checked", booleanAttribute],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
      },
      outputs: {
        change: "change",
        indeterminateChange: "indeterminateChange"
      },
      exportAs: ["matCheckbox"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: _MatCheckbox,
        multi: true
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c2,
      decls: 15,
      vars: 20,
      consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
      template: function MatCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 3);
          \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._preventBubblingFromLabel($event));
          });
          \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
          \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onTouchTargetClick());
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "input", 6, 1);
          \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onBlur());
          })("click", function MatCheckbox_Template_input_click_4_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInputClick());
          })("change", function MatCheckbox_Template_input_change_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInteractionEvent($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275element(6, "div", 7);
          \u0275\u0275elementStart(7, "div", 8);
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(8, "svg", 9);
          \u0275\u0275element(9, "path", 10);
          \u0275\u0275elementEnd();
          \u0275\u0275namespaceHTML();
          \u0275\u0275element(10, "div", 11);
          \u0275\u0275elementEnd();
          \u0275\u0275element(11, "div", 12);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(12, "label", 13, 2);
          \u0275\u0275projection(14);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          const checkbox_r2 = \u0275\u0275reference(2);
          \u0275\u0275property("labelPosition", ctx.labelPosition);
          \u0275\u0275advance(4);
          \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
          \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
          \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("name", ctx.name)("value", ctx.value);
          \u0275\u0275advance(7);
          \u0275\u0275property("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
          \u0275\u0275advance();
          \u0275\u0275property("for", ctx.inputId);
        }
      },
      dependencies: [MatRipple, _MatInternalFormField],
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": `_animationMode === 'NoopAnimations'`,
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-mdc-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
    }]
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatCheckboxRequiredValidator),
  multi: true
};
var MatCheckboxRequiredValidator = class _MatCheckboxRequiredValidator extends CheckboxRequiredValidator {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatCheckboxRequiredValidator_BaseFactory;
      return function MatCheckboxRequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275MatCheckboxRequiredValidator_BaseFactory || (\u0275MatCheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MatCheckboxRequiredValidator)))(__ngFactoryType__ || _MatCheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatCheckboxRequiredValidator,
      selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR],
      standalone: true
    }]
  }], null, null);
})();
var _MatCheckboxRequiredValidatorModule = class __MatCheckboxRequiredValidatorModule {
  static {
    this.\u0275fac = function _MatCheckboxRequiredValidatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __MatCheckboxRequiredValidatorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: __MatCheckboxRequiredValidatorModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatCheckboxRequiredValidatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckboxRequiredValidator],
      exports: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static {
    this.\u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatCheckboxModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatCheckboxModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCheckbox, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox, MatCommonModule],
      exports: [MatCheckbox, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/radio.mjs
var _c02 = ["input"];
var _c12 = ["formField"];
var _c22 = ["*"];
var nextUniqueId2 = 0;
var MatRadioChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var MatRadioGroup = class _MatRadioGroup {
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    this._value = null;
    this._name = `mat-radio-group-${nextUniqueId2++}`;
    this._selected = null;
    this._isInitialized = false;
    this._labelPosition = "after";
    this._disabled = false;
    this._required = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this.onTouched = () => {
    };
    this.change = new EventEmitter();
    this._disabledInteractive = false;
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static {
    this.\u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioGroup)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatRadioGroup,
      selectors: [["mat-radio-group"]],
      contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
        }
      },
      hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
      inputs: {
        color: "color",
        name: "name",
        labelPosition: "labelPosition",
        value: "value",
        selected: "selected",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: _MatRadioGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** Whether the radio button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor(radioGroup, _elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _defaultOptions, tabIndex) {
    this._elementRef = _elementRef;
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._defaultOptions = _defaultOptions;
    this._ngZone = inject(NgZone);
    this._uniqueId = `mat-radio-${++nextUniqueId2}`;
    this.id = this._uniqueId;
    this.disableRipple = false;
    this.tabIndex = 0;
    this.change = new EventEmitter();
    this._checked = false;
    this._value = null;
    this._removeUniqueSelectionListener = () => {
    };
    this._injector = inject(Injector);
    this._onInputClick = (event) => {
      if (this.disabled && this.disabledInteractive) {
        event.preventDefault();
      }
    };
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._disabledInteractive = _defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._inputElement.nativeElement.addEventListener("click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._inputElement?.nativeElement.removeEventListener("click", this._onInputClick);
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static {
    this.\u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioButton)(\u0275\u0275directiveInject(MAT_RADIO_GROUP, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(UniqueSelectionDispatcher), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_RADIO_DEFAULT_OPTIONS, 8), \u0275\u0275injectAttribute("tabindex"));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatRadioButton,
      selectors: [["mat-radio-button"]],
      viewQuery: function MatRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c02, 5);
          \u0275\u0275viewQuery(_c12, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
        }
      },
      hostAttrs: [1, "mat-mdc-radio-button"],
      hostVars: 19,
      hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
            return ctx._inputElement.nativeElement.focus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
        }
      },
      inputs: {
        id: "id",
        name: "name",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
        checked: [2, "checked", "checked", booleanAttribute],
        value: "value",
        labelPosition: "labelPosition",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        required: [2, "required", "required", booleanAttribute],
        color: "color",
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matRadioButton"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c22,
      decls: 13,
      vars: 17,
      consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
      template: function MatRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
          \u0275\u0275listener("click", function MatRadioButton_Template_div_click_3_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onTouchTargetClick($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(4, "input", 5, 1);
          \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onInputInteraction($event));
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "div", 6);
          \u0275\u0275element(7, "div", 7)(8, "div", 8);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "div", 9);
          \u0275\u0275element(10, "div", 10);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(11, "label", 11);
          \u0275\u0275projection(12);
          \u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          \u0275\u0275property("labelPosition", ctx.labelPosition);
          \u0275\u0275advance(2);
          \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
          \u0275\u0275advance(2);
          \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
          \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          \u0275\u0275advance(5);
          \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
          \u0275\u0275advance(2);
          \u0275\u0275property("for", ctx.inputId);
        }
      },
      dependencies: [MatRipple, _MatInternalFormField],
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" #formField>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>
    <input #input class="mdc-radio__native-control" type="radio"
           [id]="inputId"
           [checked]="checked"
           [disabled]="disabled && !disabledInteractive"
           [attr.name]="name"
           [attr.value]="value"
           [required]="required"
           [attr.aria-label]="ariaLabel"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
           (change)="_onInputInteraction($event)">
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div mat-ripple class="mat-radio-ripple mat-mdc-focus-indicator"
         [matRippleTrigger]="_rippleTrigger.nativeElement"
         [matRippleDisabled]="_isRippleDisabled()"
         [matRippleCentered]="true">
      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>
    </div>
  </div>
  <label class="mdc-label" [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}']
    }]
  }], () => [{
    type: MatRadioGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_GROUP]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: UniqueSelectionDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RADIO_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static {
    this.\u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRadioModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatRadioModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// src/app/shared/services/quotation-request.service.ts
var QuotationRequestService = class _QuotationRequestService {
  http;
  endpoint = `${environment.backendApiUrl}/quotation-request/email`;
  constructor(http) {
    this.http = http;
  }
  submitQuotationRequest(payload) {
    return this.http.post(this.endpoint, payload);
  }
  static \u0275fac = function QuotationRequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuotationRequestService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuotationRequestService, factory: _QuotationRequestService.\u0275fac, providedIn: "root" });
};

// src/app/quotation-request/quotation-request.component.ts
function QuotationRequestComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275element(2, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Quotation Request Submitted!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Thank you for your interest. Our team will contact you within 24 hours with a detailed quotation.");
    \u0275\u0275elementEnd()();
  }
}
function QuotationRequestComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5, "Submission Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.submissionError);
  }
}
function QuotationRequestComponent_form_27_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("companyName"), " ");
  }
}
function QuotationRequestComponent_form_27_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("contactPerson"), " ");
  }
}
function QuotationRequestComponent_form_27_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("contactNumber"), " ");
  }
}
function QuotationRequestComponent_form_27_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("email"), " ");
  }
}
function QuotationRequestComponent_form_27_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("location"), " ");
  }
}
function QuotationRequestComponent_form_27_option_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r3.label);
  }
}
function QuotationRequestComponent_form_27_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("propertyType"), " ");
  }
}
function QuotationRequestComponent_form_27_option_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    \u0275\u0275property("value", service_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r4.label);
  }
}
function QuotationRequestComponent_form_27_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("cleaningService"), " ");
  }
}
function QuotationRequestComponent_form_27_option_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const duration_r5 = ctx.$implicit;
    \u0275\u0275property("value", duration_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(duration_r5.label);
  }
}
function QuotationRequestComponent_form_27_span_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("contractDuration"), " ");
  }
}
function QuotationRequestComponent_form_27_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "label");
    \u0275\u0275text(2, "Custom Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275element(4, "i", 9)(5, "input", 87);
    \u0275\u0275elementEnd()();
  }
}
function QuotationRequestComponent_form_27_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("startDate"), " ");
  }
}
function QuotationRequestComponent_form_27_label_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 88)(1, "input", 89);
    \u0275\u0275listener("change", function QuotationRequestComponent_form_27_label_122_Template_input_change_1_listener($event) {
      const day_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onWorkingDayChange(day_r7.value, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 75);
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isDaySelected(day_r7.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r7.label);
  }
}
function QuotationRequestComponent_form_27_span_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1, " Please select at least one working day ");
    \u0275\u0275elementEnd();
  }
}
function QuotationRequestComponent_form_27_span_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("startTime"), " ");
  }
}
function QuotationRequestComponent_form_27_span_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("endTime"), " ");
  }
}
function QuotationRequestComponent_form_27_span_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("numberOfCleaners"), " ");
  }
}
function QuotationRequestComponent_form_27_span_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2, " Submit Quotation Request ");
    \u0275\u0275elementEnd();
  }
}
function QuotationRequestComponent_form_27_span_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2, " Processing... ");
    \u0275\u0275elementEnd();
  }
}
function QuotationRequestComponent_form_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 28);
    \u0275\u0275listener("ngSubmit", function QuotationRequestComponent_form_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "div", 30);
    \u0275\u0275element(3, "i", 31);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Company Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "div", 33)(8, "label");
    \u0275\u0275text(9, "Company Name ");
    \u0275\u0275elementStart(10, "span", 34);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35);
    \u0275\u0275element(13, "i", 31)(14, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, QuotationRequestComponent_form_27_span_15_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 38)(17, "label");
    \u0275\u0275text(18, "Contact Person ");
    \u0275\u0275elementStart(19, "span", 34);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 35);
    \u0275\u0275element(22, "i", 39)(23, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, QuotationRequestComponent_form_27_span_24_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 38)(26, "label");
    \u0275\u0275text(27, "Contact Number ");
    \u0275\u0275elementStart(28, "span", 34);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 35);
    \u0275\u0275element(31, "i", 41)(32, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, QuotationRequestComponent_form_27_span_33_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 38)(35, "label");
    \u0275\u0275text(36, "Email Address ");
    \u0275\u0275elementStart(37, "span", 34);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 35);
    \u0275\u0275element(40, "i", 43)(41, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, QuotationRequestComponent_form_27_span_42_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 33)(44, "label");
    \u0275\u0275text(45, "Location/Address of Service ");
    \u0275\u0275elementStart(46, "span", 34);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 35);
    \u0275\u0275element(49, "i", 45)(50, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, QuotationRequestComponent_form_27_span_51_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 29)(53, "div", 30);
    \u0275\u0275element(54, "i", 47);
    \u0275\u0275elementStart(55, "h3");
    \u0275\u0275text(56, "Service Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 32)(58, "div", 38)(59, "label");
    \u0275\u0275text(60, "Type of Property ");
    \u0275\u0275elementStart(61, "span", 34);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 48);
    \u0275\u0275element(64, "i", 49);
    \u0275\u0275elementStart(65, "select", 50)(66, "option", 51);
    \u0275\u0275text(67, "Select property type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(68, QuotationRequestComponent_form_27_option_68_Template, 2, 2, "option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, QuotationRequestComponent_form_27_span_69_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 38)(71, "label");
    \u0275\u0275text(72, "Property Size (sq ft)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 35);
    \u0275\u0275element(74, "i", 53)(75, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 38)(77, "label");
    \u0275\u0275text(78, "Type of Cleaning Service ");
    \u0275\u0275elementStart(79, "span", 34);
    \u0275\u0275text(80, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 48);
    \u0275\u0275element(82, "i", 55);
    \u0275\u0275elementStart(83, "select", 56)(84, "option", 51);
    \u0275\u0275text(85, "Select service type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(86, QuotationRequestComponent_form_27_option_86_Template, 2, 2, "option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(87, QuotationRequestComponent_form_27_span_87_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 38)(89, "label");
    \u0275\u0275text(90, "Contract Duration ");
    \u0275\u0275elementStart(91, "span", 34);
    \u0275\u0275text(92, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 48);
    \u0275\u0275element(94, "i", 57);
    \u0275\u0275elementStart(95, "select", 58)(96, "option", 51);
    \u0275\u0275text(97, "Select duration");
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, QuotationRequestComponent_form_27_option_98_Template, 2, 2, "option", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(99, QuotationRequestComponent_form_27_span_99_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(100, QuotationRequestComponent_form_27_div_100_Template, 6, 0, "div", 59);
    \u0275\u0275elementStart(101, "div", 38)(102, "label");
    \u0275\u0275text(103, "Start Date ");
    \u0275\u0275elementStart(104, "span", 34);
    \u0275\u0275text(105, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 35);
    \u0275\u0275element(107, "i", 57)(108, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(109, QuotationRequestComponent_form_27_span_109_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "div", 29)(111, "div", 30);
    \u0275\u0275element(112, "i", 9);
    \u0275\u0275elementStart(113, "h3");
    \u0275\u0275text(114, "Schedule & Requirements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 32)(116, "div", 33)(117, "label");
    \u0275\u0275text(118, "Working Days ");
    \u0275\u0275elementStart(119, "span", 34);
    \u0275\u0275text(120, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 61);
    \u0275\u0275template(122, QuotationRequestComponent_form_27_label_122_Template, 5, 2, "label", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(123, QuotationRequestComponent_form_27_span_123_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "div", 38)(125, "label");
    \u0275\u0275text(126, "Start Time ");
    \u0275\u0275elementStart(127, "span", 34);
    \u0275\u0275text(128, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 35);
    \u0275\u0275element(130, "i", 9)(131, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(132, QuotationRequestComponent_form_27_span_132_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 38)(134, "label");
    \u0275\u0275text(135, "End Time ");
    \u0275\u0275elementStart(136, "span", 34);
    \u0275\u0275text(137, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div", 35);
    \u0275\u0275element(139, "i", 9)(140, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(141, QuotationRequestComponent_form_27_span_141_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 38)(143, "label");
    \u0275\u0275text(144, "Number of Cleaners ");
    \u0275\u0275elementStart(145, "span", 34);
    \u0275\u0275text(146, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 35);
    \u0275\u0275element(148, "i", 65)(149, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(150, QuotationRequestComponent_form_27_span_150_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div", 38)(152, "label");
    \u0275\u0275text(153, "Cleaning Materials ");
    \u0275\u0275elementStart(154, "span", 34);
    \u0275\u0275text(155, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 67)(157, "label", 68);
    \u0275\u0275element(158, "input", 69)(159, "span", 70);
    \u0275\u0275elementStart(160, "span", 71);
    \u0275\u0275text(161, "With Materials");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "label", 68);
    \u0275\u0275element(163, "input", 72)(164, "span", 70);
    \u0275\u0275elementStart(165, "span", 71);
    \u0275\u0275text(166, "Without Materials");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(167, "div", 33)(168, "label", 73);
    \u0275\u0275element(169, "input", 74)(170, "span", 75);
    \u0275\u0275elementStart(171, "span", 71);
    \u0275\u0275text(172, "Need a Supervisor for the cleaners?");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(173, "div", 38)(174, "label");
    \u0275\u0275text(175, "Estimated Budget (QAR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "div", 35);
    \u0275\u0275element(177, "i", 10)(178, "input", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(179, "div", 33)(180, "label");
    \u0275\u0275text(181, "Additional Notes / Special Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "div", 77);
    \u0275\u0275element(183, "i", 78)(184, "textarea", 79);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(185, "div", 80)(186, "button", 81);
    \u0275\u0275template(187, QuotationRequestComponent_form_27_span_187_Template, 3, 0, "span", 82)(188, QuotationRequestComponent_form_27_span_188_Template, 3, 0, "span", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "p", 83);
    \u0275\u0275element(190, "i", 84);
    \u0275\u0275text(191, " We'll review your request and send you a detailed quotation within 24 hours. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.quotationForm);
    \u0275\u0275advance(14);
    \u0275\u0275classProp("error", ((tmp_2_0 = ctx_r0.quotationForm.get("companyName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.quotationForm.get("companyName")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.quotationForm.get("companyName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.quotationForm.get("companyName")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.quotationForm.get("contactPerson")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.quotationForm.get("contactPerson")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.quotationForm.get("contactPerson")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.quotationForm.get("contactPerson")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_6_0 = ctx_r0.quotationForm.get("contactNumber")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.quotationForm.get("contactNumber")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r0.quotationForm.get("contactNumber")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.quotationForm.get("contactNumber")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_8_0 = ctx_r0.quotationForm.get("email")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.quotationForm.get("email")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r0.quotationForm.get("email")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.quotationForm.get("email")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_10_0 = ctx_r0.quotationForm.get("location")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.quotationForm.get("location")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r0.quotationForm.get("location")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r0.quotationForm.get("location")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("error", ((tmp_12_0 = ctx_r0.quotationForm.get("propertyType")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.quotationForm.get("propertyType")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.propertyTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r0.quotationForm.get("propertyType")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r0.quotationForm.get("propertyType")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("error", ((tmp_15_0 = ctx_r0.quotationForm.get("cleaningService")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r0.quotationForm.get("cleaningService")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.cleaningServices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_17_0 = ctx_r0.quotationForm.get("cleaningService")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r0.quotationForm.get("cleaningService")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_18_0 = ctx_r0.quotationForm.get("contractDuration")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r0.quotationForm.get("contractDuration")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.contractDurations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_20_0 = ctx_r0.quotationForm.get("contractDuration")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx_r0.quotationForm.get("contractDuration")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_21_0 = ctx_r0.quotationForm.get("contractDuration")) == null ? null : tmp_21_0.value) === "custom");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_22_0 = ctx_r0.quotationForm.get("startDate")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r0.quotationForm.get("startDate")) == null ? null : tmp_22_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_23_0 = ctx_r0.quotationForm.get("startDate")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r0.quotationForm.get("startDate")) == null ? null : tmp_23_0.touched));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.workingDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_25_0 = ctx_r0.quotationForm.get("workingDays")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx_r0.quotationForm.get("workingDays")) == null ? null : tmp_25_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_26_0 = ctx_r0.quotationForm.get("startTime")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = ctx_r0.quotationForm.get("startTime")) == null ? null : tmp_26_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_27_0 = ctx_r0.quotationForm.get("startTime")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx_r0.quotationForm.get("startTime")) == null ? null : tmp_27_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_28_0 = ctx_r0.quotationForm.get("endTime")) == null ? null : tmp_28_0.invalid) && ((tmp_28_0 = ctx_r0.quotationForm.get("endTime")) == null ? null : tmp_28_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_29_0 = ctx_r0.quotationForm.get("endTime")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx_r0.quotationForm.get("endTime")) == null ? null : tmp_29_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("error", ((tmp_30_0 = ctx_r0.quotationForm.get("numberOfCleaners")) == null ? null : tmp_30_0.invalid) && ((tmp_30_0 = ctx_r0.quotationForm.get("numberOfCleaners")) == null ? null : tmp_30_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_31_0 = ctx_r0.quotationForm.get("numberOfCleaners")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx_r0.quotationForm.get("numberOfCleaners")) == null ? null : tmp_31_0.touched));
    \u0275\u0275advance(36);
    \u0275\u0275property("disabled", ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSubmitting);
  }
}
var QuotationRequestComponent = class _QuotationRequestComponent {
  fb;
  quotationRequestService;
  quotationForm;
  isSubmitting = false;
  isSuccess = false;
  submissionError = "";
  successTimer;
  propertyTypes = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "office", label: "Office" },
    { value: "retail", label: "Retail" },
    { value: "hospitality", label: "Hospitality" },
    { value: "other", label: "Other" }
  ];
  cleaningServices = [
    { value: "general", label: "General Cleaning" },
    { value: "deep", label: "Deep Cleaning" },
    { value: "carpet", label: "Carpet Cleaning" },
    { value: "event", label: "Event Cleaning" },
    { value: "office", label: "Office Cleaning" },
    { value: "maid", label: "Maid Services" },
    { value: "housekeeping", label: "Housekeeping" },
    { value: "eco", label: "Eco-Friendly Cleaning" }
  ];
  contractDurations = [
    { value: "1month", label: "1 Month" },
    { value: "3months", label: "3 Months" },
    { value: "6months", label: "6 Months" },
    { value: "1year", label: "1 Year" },
    { value: "2years", label: "2 Years" },
    { value: "custom", label: "Custom Duration" }
  ];
  workingDays = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" }
  ];
  constructor(fb, quotationRequestService) {
    this.fb = fb;
    this.quotationRequestService = quotationRequestService;
  }
  ngOnInit() {
    this.initForm();
  }
  ngOnDestroy() {
    if (this.successTimer) {
      clearTimeout(this.successTimer);
    }
  }
  initForm() {
    this.quotationForm = this.fb.group({
      companyName: ["", [Validators.required, Validators.minLength(2)]],
      contactPerson: ["", [Validators.required, Validators.minLength(2)]],
      contactNumber: ["", [Validators.required, Validators.pattern(/^[0-9]{8,15}$/)]],
      email: ["", [Validators.required, Validators.email]],
      location: ["", [Validators.required, Validators.minLength(5)]],
      propertyType: ["", Validators.required],
      contractDuration: ["", Validators.required],
      customDuration: [""],
      startDate: ["", Validators.required],
      cleaningService: ["", Validators.required],
      workingDays: [[], Validators.required],
      startTime: ["", Validators.required],
      endTime: ["", Validators.required],
      cleaningMaterials: ["withMaterials", Validators.required],
      numberOfCleaners: ["", [Validators.required, Validators.min(1)]],
      needSupervisor: [false],
      additionalNotes: [""],
      propertySize: [""],
      budget: [""]
    });
  }
  onWorkingDayChange(day, checked) {
    if (checked === void 0)
      return;
    const workingDays = this.quotationForm.get("workingDays")?.value || [];
    if (checked) {
      this.quotationForm.patchValue({
        workingDays: [...workingDays, day]
      });
    } else {
      this.quotationForm.patchValue({
        workingDays: workingDays.filter((d) => d !== day)
      });
    }
  }
  isDaySelected(day) {
    const workingDays = this.quotationForm.get("workingDays")?.value || [];
    return workingDays.includes(day);
  }
  onSubmit() {
    if (this.quotationForm.invalid) {
      Object.keys(this.quotationForm.controls).forEach((key) => {
        this.quotationForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.submissionError = "";
    this.isSubmitting = true;
    const payload = this.buildRequestPayload();
    this.quotationRequestService.submitQuotationRequest(payload).pipe(finalize(() => {
      this.isSubmitting = false;
    })).subscribe({
      next: () => this.handleSuccessfulSubmission(),
      error: (error) => this.handleSubmissionError(error)
    });
  }
  getErrorMessage(fieldName) {
    const control = this.quotationForm.get(fieldName);
    if (control?.hasError("required")) {
      return "This field is required";
    }
    if (control?.hasError("email")) {
      return "Please enter a valid email";
    }
    if (control?.hasError("pattern")) {
      return "Please enter a valid phone number";
    }
    if (control?.hasError("minLength")) {
      return "Input is too short";
    }
    if (control?.hasError("min")) {
      return "Value must be at least 1";
    }
    return "";
  }
  buildRequestPayload() {
    const formValue = this.quotationForm.value;
    return {
      companyName: (formValue.companyName || "").trim(),
      contactPerson: (formValue.contactPerson || "").trim(),
      contactNumber: formValue.contactNumber,
      email: formValue.email,
      location: formValue.location,
      propertyType: formValue.propertyType,
      contractDuration: formValue.contractDuration,
      customDuration: formValue.contractDuration === "custom" ? formValue.customDuration : "",
      startDate: this.formatDateValue(formValue.startDate),
      cleaningService: formValue.cleaningService,
      workingDays: [...formValue.workingDays || []],
      startTime: formValue.startTime,
      endTime: formValue.endTime,
      cleaningMaterials: formValue.cleaningMaterials,
      numberOfCleaners: Number(formValue.numberOfCleaners),
      needSupervisor: !!formValue.needSupervisor,
      propertySize: formValue.propertySize,
      budget: formValue.budget,
      additionalNotes: formValue.additionalNotes
    };
  }
  formatDateValue(value) {
    if (!value) {
      return "";
    }
    if (value instanceof Date && !isNaN(value.getTime())) {
      return value.toISOString().split("T")[0];
    }
    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString().split("T")[0];
    }
    return value;
  }
  handleSuccessfulSubmission() {
    if (this.successTimer) {
      clearTimeout(this.successTimer);
    }
    this.isSuccess = true;
    this.submissionError = "";
    this.quotationForm.reset();
    this.initForm();
    this.successTimer = setTimeout(() => {
      this.isSuccess = false;
    }, 5e3);
  }
  handleSubmissionError(error) {
    console.error("Quotation request submission error:", error);
    const serverMessage = error?.error?.error || error?.message;
    this.submissionError = serverMessage || "Failed to submit quotation request. Please try again later.";
  }
  static \u0275fac = function QuotationRequestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuotationRequestComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(QuotationRequestService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuotationRequestComponent, selectors: [["app-quotation-request"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 3, consts: [[1, "quotation-page"], [1, "hero"], [1, "hero-overlay"], [1, "hero-content"], [1, "icon-badge"], [1, "pi", "pi-file-edit"], [1, "hero-subtitle"], [1, "hero-stats"], [1, "stat"], [1, "pi", "pi-clock"], [1, "pi", "pi-dollar"], [1, "pi", "pi-check-circle"], [1, "form-section"], [1, "container"], ["class", "success-message", 4, "ngIf"], ["class", "global-error", 4, "ngIf"], ["class", "quotation-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "benefits-section"], [1, "benefits-grid"], [1, "benefit-card"], [1, "benefit-icon"], [1, "pi", "pi-shield"], [1, "pi", "pi-star"], [1, "success-message"], [1, "success-icon"], [1, "global-error"], [1, "error-icon"], [1, "pi", "pi-exclamation-triangle"], [1, "quotation-form", 3, "ngSubmit", "formGroup"], [1, "form-section-card"], [1, "section-header"], [1, "pi", "pi-building"], [1, "form-grid"], [1, "form-field", "full-width"], [1, "required"], [1, "input-wrapper"], ["type", "text", "formControlName", "companyName", "placeholder", "Enter your company name"], ["class", "error-message", 4, "ngIf"], [1, "form-field"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "contactPerson", "placeholder", "Full name"], [1, "pi", "pi-phone"], ["type", "tel", "formControlName", "contactNumber", "placeholder", "+974 XXXX XXXX"], [1, "pi", "pi-envelope"], ["type", "email", "formControlName", "email", "placeholder", "company@example.com"], [1, "pi", "pi-map-marker"], ["type", "text", "formControlName", "location", "placeholder", "Full address of service location"], [1, "pi", "pi-cog"], [1, "select-wrapper"], [1, "pi", "pi-home"], ["formControlName", "propertyType"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "pi", "pi-arrows-alt"], ["type", "number", "formControlName", "propertySize", "placeholder", "e.g., 2000"], [1, "pi", "pi-sparkles"], ["formControlName", "cleaningService"], [1, "pi", "pi-calendar"], ["formControlName", "contractDuration"], ["class", "form-field", 4, "ngIf"], ["type", "date", "formControlName", "startDate"], [1, "checkbox-group"], ["class", "checkbox-item", 4, "ngFor", "ngForOf"], ["type", "time", "formControlName", "startTime"], ["type", "time", "formControlName", "endTime"], [1, "pi", "pi-users"], ["type", "number", "formControlName", "numberOfCleaners", "placeholder", "e.g., 3", "min", "1"], [1, "radio-group"], [1, "radio-item"], ["type", "radio", "formControlName", "cleaningMaterials", "value", "withMaterials"], [1, "radio-checkmark"], [1, "label-text"], ["type", "radio", "formControlName", "cleaningMaterials", "value", "withoutMaterials"], [1, "checkbox-item", "supervisor-checkbox"], ["type", "checkbox", "formControlName", "needSupervisor"], [1, "checkmark"], ["type", "number", "formControlName", "budget", "placeholder", "Optional"], [1, "textarea-wrapper"], [1, "pi", "pi-comment"], ["formControlName", "additionalNotes", "rows", "4", "placeholder", "Please provide any additional information or special requirements..."], [1, "submit-section"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [4, "ngIf"], [1, "submit-note"], [1, "pi", "pi-info-circle"], [1, "error-message"], [3, "value"], ["type", "text", "formControlName", "customDuration", "placeholder", "Specify duration"], [1, "checkbox-item"], ["type", "checkbox", 3, "change", "checked"], [1, "pi", "pi-send"], [1, "pi", "pi-spin", "pi-spinner"]], template: function QuotationRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Request a Quotation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Get a customized cleaning solution for your business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Quick Response");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275element(16, "i", 10);
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "Best Prices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8);
      \u0275\u0275element(20, "i", 11);
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "Trusted Service");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(23, "section", 12)(24, "div", 13);
      \u0275\u0275template(25, QuotationRequestComponent_div_25_Template, 7, 0, "div", 14)(26, QuotationRequestComponent_div_26_Template, 8, 1, "div", 15)(27, QuotationRequestComponent_form_27_Template, 192, 46, "form", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 17)(29, "div", 13)(30, "h2");
      \u0275\u0275text(31, "Why Choose Our Services?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "div", 20);
      \u0275\u0275element(35, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h3");
      \u0275\u0275text(37, "Licensed & Insured");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "All our staff are fully licensed and insured for your peace of mind");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 19)(41, "div", 20);
      \u0275\u0275element(42, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h3");
      \u0275\u0275text(44, "Quality Guaranteed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p");
      \u0275\u0275text(46, "We ensure the highest standards of cleaning excellence");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 19)(48, "div", 20);
      \u0275\u0275element(49, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "h3");
      \u0275\u0275text(51, "Flexible Scheduling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53, "Services tailored to fit your business hours and needs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 19)(55, "div", 20);
      \u0275\u0275element(56, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h3");
      \u0275\u0275text(58, "Competitive Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p");
      \u0275\u0275text(60, "Best value for professional cleaning services in Qatar");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275property("ngIf", ctx.isSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submissionError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSuccess);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
    FormGroupDirective,
    FormControlName,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule
  ], styles: [`@charset "UTF-8";



.quotation-page[_ngcontent-%COMP%] {
  width: 100%;
  overflow-x: hidden;
  background: #f5f7fa;
}
.hero[_ngcontent-%COMP%] {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      135deg,
      #91d6aa 0%,
      #5fb894 100%);
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
  opacity: 0.5;
}
.hero-content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  max-width: 800px;
}
.hero-content[_ngcontent-%COMP%]   .icon-badge[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;
}
.hero-content[_ngcontent-%COMP%]   .icon-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  color: white;
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
.hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
.hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-weight: 500;
}
@keyframes _ngcontent-%COMP%_float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.form-section[_ngcontent-%COMP%] {
  padding: 4rem 2rem;
  margin-top: -50px;
  position: relative;
  z-index: 3;
}
.container[_ngcontent-%COMP%] {
  max-width: 1000px;
  margin: 0 auto;
}
.success-message[_ngcontent-%COMP%] {
  background: white;
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  animation: _ngcontent-%COMP%_slideUp 0.5s ease;
}
.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  background:
    linear-gradient(
      135deg,
      #11998e 0%,
      #38ef7d 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: _ngcontent-%COMP%_scaleIn 0.6s ease;
}
.success-message[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 3rem;
  color: white;
}
.success-message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: #0346FF;
  margin-bottom: 1rem;
}
.success-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: #666;
}
.global-error[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #feb2b2;
  background: #fff5f5;
  color: #c53030;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(229, 62, 62, 0.1);
}
.global-error[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0 0 0.25rem;
  font-size: 1.2rem;
}
.global-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: #9b2c2c;
}
.global-error[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fed7d7;
  display: flex;
  align-items: center;
  justify-content: center;
}
.global-error[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #c53030;
  font-size: 1.5rem;
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes _ngcontent-%COMP%_scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.quotation-form[_ngcontent-%COMP%] {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.form-section-card[_ngcontent-%COMP%] {
  padding: 2.5rem;
  border-bottom: 1px solid #e0e7ff;
}
.form-section-card[_ngcontent-%COMP%]:last-of-type {
  border-bottom: none;
}
.form-section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #91d6aa;
}
.form-section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: #91d6aa;
}
.form-section-card[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  color: #0346FF;
  margin: 0;
}
.form-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.form-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 600;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {
  color: #e53e3e;
  font-size: 1.2rem;
}
.input-wrapper[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
}
.input-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  position: absolute;
  left: 1rem;
  color: #91d6aa;
  font-size: 1.1rem;
  z-index: 1;
}
.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.9rem 1rem 0.9rem 3rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: #2d3748;
  font-family: inherit;
}
.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, 
.select-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.select-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, 
.textarea-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, 
.textarea-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, 
.textarea-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #91d6aa;
  box-shadow: 0 0 0 3px rgba(145, 214, 170, 0.1);
}
.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, 
.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, 
.select-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, 
.select-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, 
.textarea-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, 
.textarea-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, 
.textarea-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {
  color: #a0aec0;
}
.input-wrapper[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], 
.input-wrapper[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%], 
.input-wrapper[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%] {
  border-color: #e53e3e;
  background: #fff5f5;
}
.input-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2391d6aa' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
}
.input-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], 
.select-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], 
.textarea-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 100px;
  padding-top: 1rem;
  line-height: 1.6;
}
.error-message[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #e53e3e;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: -0.3rem;
}
.error-message[_ngcontent-%COMP%]::before {
  content: "\\26a0";
  font-size: 0.9rem;
}
.checkbox-group[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
.checkbox-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1rem;
  background: #f7fafc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
}
.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {
  display: none;
}
.checkbox-item[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  border: 2px solid #cbd5e0;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  flex-shrink: 0;
}
.checkbox-item[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 2px;
  transition: transform 0.2s ease;
}
.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {
  background: #91d6aa;
  border-color: #91d6aa;
}
.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]::after {
  transform: translate(-50%, -50%) scale(1);
}
.checkbox-item[_ngcontent-%COMP%]:hover {
  background: #edf2f7;
  border-color: #91d6aa;
}
.checkbox-item[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  color: #4a5568;
  font-weight: 500;
}
.supervisor-checkbox[_ngcontent-%COMP%] {
  padding: 1.2rem 1.5rem;
  background:
    linear-gradient(
      135deg,
      rgba(145, 214, 170, 0.05) 0%,
      rgba(95, 184, 148, 0.05) 100%);
  border: 2px dashed #91d6aa;
}
.radio-group[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
}
.radio-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1.5rem;
  background: #f7fafc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  flex: 1;
}
.radio-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {
  display: none;
}
.radio-item[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%] {
  width: 20px;
  height: 20px;
  border: 2px solid #cbd5e0;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  flex-shrink: 0;
}
.radio-item[_ngcontent-%COMP%]   .radio-checkmark[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s ease;
}
.radio-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%] {
  background: #91d6aa;
  border-color: #91d6aa;
}
.radio-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    ~ .radio-checkmark[_ngcontent-%COMP%]::after {
  transform: translate(-50%, -50%) scale(1);
}
.radio-item[_ngcontent-%COMP%]:hover {
  background: #edf2f7;
  border-color: #91d6aa;
}
.radio-item[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  color: #4a5568;
  font-weight: 500;
}
.submit-section[_ngcontent-%COMP%] {
  padding: 2.5rem;
  background:
    linear-gradient(
      135deg,
      rgba(145, 214, 170, 0.05) 0%,
      rgba(95, 184, 148, 0.05) 100%);
  text-align: center;
}
.submit-btn[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #91d6aa 0%,
      #5fb894 100%);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0 4px 15px rgba(145, 214, 170, 0.4);
  min-width: 280px;
  justify-content: center;
}
.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(145, 214, 170, 0.5);
}
.submit-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.submit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
.submit-note[_ngcontent-%COMP%] {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #718096;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.submit-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #91d6aa;
}
.benefits-section[_ngcontent-%COMP%] {
  padding: 4rem 2rem;
  background: white;
}
.benefits-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 2.5rem;
  color: #0346FF;
  margin-bottom: 3rem;
}
.benefits-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.benefit-card[_ngcontent-%COMP%] {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background:
    linear-gradient(
      135deg,
      rgba(145, 214, 170, 0.05) 0%,
      rgba(95, 184, 148, 0.05) 100%);
  transition: all 0.3s ease;
}
.benefit-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(145, 214, 170, 0.15);
}
.benefit-card[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%] {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  background:
    linear-gradient(
      135deg,
      #91d6aa 0%,
      #5fb894 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.benefit-card[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 2rem;
  color: white;
}
.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  color: #0346FF;
  margin-bottom: 0.7rem;
}
.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #718096;
  line-height: 1.6;
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%] {
    height: 40vh;
    min-height: 300px;
  }
  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .hero[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {
    gap: 1rem;
  }
  .hero[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  .form-section[_ngcontent-%COMP%] {
    padding: 2rem 1rem;
    margin-top: -30px;
  }
  .form-section-card[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
  .form-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .checkbox-group[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .radio-group[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .submit-btn[_ngcontent-%COMP%] {
    width: 100%;
    min-width: unset;
  }
  .benefits-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
/*# sourceMappingURL=quotation-request.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuotationRequestComponent, { className: "QuotationRequestComponent" });
})();
export {
  QuotationRequestComponent
};
//# sourceMappingURL=chunk-MOQARGH6.mjs.map
