import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Inject, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsRadioButtonDirective } from './radio-button.directive';
import { NzRadioService } from 'ng-zorro-antd/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/form";
import * as i4 from "ng-zorro-antd/radio";
import * as i5 from "./radio-button.directive";
const _c0 = ["inputElement"];
const _c1 = ["bps-radio", ""];
const _c2 = ["*"];
export class BpsRadioComponent {
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(ngZone, elementRef, cdr, renderer, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective, nzFormStatusService) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.nzFormStatusService = nzFormStatusService;
        this.isNgModel = false;
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsValue = null;
        this.bpsDisabled = false;
        this.bpsAutoFocus = false;
        this.bpsRadioButtonType = 'variation1';
        this.dir = 'ltr';
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngOnInit() {
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe(name => {
                this.name = name;
                this.cdr.markForCheck();
            });
            this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe(disabled => {
                this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
                this.isNzDisableFirstChange = false;
                this.cdr.markForCheck();
            });
            this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
                const isChecked = this.isChecked;
                this.isChecked = this.bpsValue === value;
                // We don't have to run `onChange()` on each `nz-radio` button whenever the `selected$` emits.
                // If we have 8 `nz-radio` buttons within the `nz-radio-group` and they're all connected with
                // `ngModel` or `formControl` then `onChange()` will be called 8 times for each `nz-radio` button.
                // We prevent this by checking if `isChecked` has been changed or not.
                if (this.isNgModel &&
                    isChecked !== this.isChecked &&
                    // We're only intereted if `isChecked` has been changed to `false` value to emit `false` to the ascendant form,
                    // since we already emit `true` within the `setupClickListener`.
                    this.isChecked === false) {
                    this.onChange(false);
                }
                this.cdr.markForCheck();
            });
        }
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                if (this.nzRadioService) {
                    this.nzRadioService.touch();
                }
            }
        });
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.setupClickListener();
    }
    ngAfterViewInit() {
        if (this.bpsAutoFocus) {
            this.focus();
        }
        this.renderer.addClass(this.elementRef.nativeElement, `bps-radio-button-${this.bpsRadioButtonType}`);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    setupClickListener() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                /** prevent label click triggered twice. **/
                event.stopPropagation();
                event.preventDefault();
                if (this.bpsDisabled || this.isChecked) {
                    return;
                }
                this.ngZone.run(() => {
                    this.focus();
                    this.nzRadioService?.select(this.bpsValue);
                    if (this.isNgModel) {
                        this.isChecked = true;
                        this.onChange(true);
                    }
                    this.cdr.markForCheck();
                });
            });
        });
    }
    static { this.ɵfac = function BpsRadioComponent_Factory(t) { return new (t || BpsRadioComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(NzRadioService, 8), i0.ɵɵdirectiveInject(BpsRadioButtonDirective, 8), i0.ɵɵdirectiveInject(i3.NzFormStatusService, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsRadioComponent, selectors: [["", "bps-radio", ""], ["", "bps-radio-button", ""]], viewQuery: function BpsRadioComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostVars: 18, hostBindings: function BpsRadioComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.bpsDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.bpsDisabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
        } }, inputs: { bpsValue: "bpsValue", bpsDisabled: "bpsDisabled", bpsAutoFocus: "bpsAutoFocus", bpsRadioButtonType: "bpsRadioButtonType" }, exportAs: ["bpsRadio"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsRadioComponent),
                    multi: true
                }
            ])], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 24, consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""], [1, "bps-custom-content-radio"]], template: function BpsRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelement(1, "input", 0, 1)(3, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 2);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.bpsDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.bpsDisabled && ctx.isRadioButton);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
            i0.ɵɵproperty("disabled", ctx.bpsDisabled)("checked", ctx.isChecked);
            i0.ɵɵattribute("autofocus", ctx.bpsAutoFocus ? "autofocus" : null)("name", ctx.name);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsAutoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsRadioComponent, [{
        type: Component,
        args: [{
                selector: '[bps-radio],[bps-radio-button]',
                exportAs: 'bpsRadio',
                preserveWhitespaces: false,
                template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="bpsDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="bpsDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="bpsDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span class="bps-custom-content-radio"><ng-content></ng-content></span>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsRadioComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-wrapper-in-form-item]': '!!nzFormStatusService',
                    '[class.ant-radio-wrapper]': '!isRadioButton',
                    '[class.ant-radio-button-wrapper]': 'isRadioButton',
                    '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
                    '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
                    '[class.ant-radio-wrapper-disabled]': 'bpsDisabled && !isRadioButton',
                    '[class.ant-radio-button-wrapper-disabled]': 'bpsDisabled && isRadioButton',
                    '[class.ant-radio-wrapper-rtl]': `!isRadioButton && dir === 'rtl'`,
                    '[class.ant-radio-button-wrapper-rtl]': `isRadioButton && dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i4.NzRadioService, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NzRadioService]
            }] }, { type: i5.BpsRadioButtonDirective, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [BpsRadioButtonDirective]
            }] }, { type: i3.NzFormStatusService, decorators: [{
                type: Optional
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], bpsValue: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsAutoFocus: [{
            type: Input
        }], bpsRadioButtonType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXJhZGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXJhZGlvL2Jwcy1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFFUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7OztBQXFEckQsTUFBTSxPQUFPLGlCQUFpQjtJQXFCNUIsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFDVSxNQUFjLEVBQ2QsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsUUFBbUIsRUFDbkIsWUFBMEIsRUFDZCxjQUE4QixFQUNOLGNBQXFDLEVBQzVCLHNCQUFzRCxFQUN4RixtQkFBeUM7UUFScEQsV0FB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cEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osd0NBQXdDLEVBQUUsdUJBQXVCO29CQUNqRSwyQkFBMkIsRUFBRSxnQkFBZ0I7b0JBQzdDLGtDQUFrQyxFQUFFLGVBQWU7b0JBQ25ELG1DQUFtQyxFQUFFLDZCQUE2QjtvQkFDbEUsMENBQTBDLEVBQUUsNEJBQTRCO29CQUN4RSxvQ0FBb0MsRUFBRSwrQkFBK0I7b0JBQ3JFLDJDQUEyQyxFQUFFLDhCQUE4QjtvQkFDM0UsK0JBQStCLEVBQUUsaUNBQWlDO29CQUNsRSxzQ0FBc0MsRUFBRSxnQ0FBZ0M7aUJBQ3pFO2FBQ0Y7O3NCQW9DSSxRQUFROztzQkFDUixRQUFROztzQkFBSSxNQUFNO3VCQUFDLGNBQWM7O3NCQUNqQyxRQUFROztzQkFBSSxNQUFNO3VCQUFDLHVCQUF1Qjs7c0JBQzFDLFFBQVE7d0JBMUJrQyxZQUFZO2tCQUF4RCxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbEMsUUFBUTtrQkFBaEIsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ21CLFlBQVk7a0JBQXBDLEtBQUs7WUFFRyxrQkFBa0I7a0JBQTFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpGb3JtU3RhdHVzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9mb3JtJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBCcHNSYWRpb0J1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcmFkaW8tYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelJhZGlvU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xyXG5cbmV4cG9ydCB0eXBlIEJwc1JhZGlvQnV0dG9uVHlwZSA9ICd2YXJpYXRpb24xJyB8ICd2YXJpYXRpb24yJyB8ICd2YXJpYXRpb24zJyB8ICd2YXJpYXRpb241JyB8ICd2YXJpYXRpb242JyB8ICd2YXJpYXRpb243JyB8ICd2YXJpYXRpb244YSdcbiAgfCAndmFyaWF0aW9uOGInIHwgJ3ZhcmlhdGlvbjhjJyB8ICd2YXJpYXRpb244ZCcgfCAndmFyaWF0aW9uOGUnIHwgJ3ZhcmlhdGlvbjknIHwgJ3ZhcmlhdGlvbjEwJyB8ICd2YXJpYXRpb24xMScgfCAndmFyaWF0aW9uMTInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYnBzLXJhZGlvXSxbYnBzLXJhZGlvLWJ1dHRvbl0nLFxuICBleHBvcnRBczogJ2Jwc1JhZGlvJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW5cbiAgICAgIFtjbGFzcy5hbnQtcmFkaW9dPVwiIWlzUmFkaW9CdXR0b25cIlxuICAgICAgW2NsYXNzLmFudC1yYWRpby1jaGVja2VkXT1cImlzQ2hlY2tlZCAmJiAhaXNSYWRpb0J1dHRvblwiXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWRpc2FibGVkXT1cImJwc0Rpc2FibGVkICYmICFpc1JhZGlvQnV0dG9uXCJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uXT1cImlzUmFkaW9CdXR0b25cIlxuICAgICAgW2NsYXNzLmFudC1yYWRpby1idXR0b24tY2hlY2tlZF09XCJpc0NoZWNrZWQgJiYgaXNSYWRpb0J1dHRvblwiXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZF09XCJicHNEaXNhYmxlZCAmJiBpc1JhZGlvQnV0dG9uXCJcbiAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2lucHV0RWxlbWVudFxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBbYXR0ci5hdXRvZm9jdXNdPVwiYnBzQXV0b0ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcbiAgICAgICAgW2NsYXNzLmFudC1yYWRpby1pbnB1dF09XCIhaXNSYWRpb0J1dHRvblwiXG4gICAgICAgIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLWlucHV0XT1cImlzUmFkaW9CdXR0b25cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxuICAgICAgICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxuICAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIFtjbGFzcy5hbnQtcmFkaW8taW5uZXJdPVwiIWlzUmFkaW9CdXR0b25cIiBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1pbm5lcl09XCJpc1JhZGlvQnV0dG9uXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImJwcy1jdXN0b20tY29udGVudC1yYWRpb1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc1JhZGlvQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1pbi1mb3JtLWl0ZW1dJzogJyEhbnpGb3JtU3RhdHVzU2VydmljZScsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlcl0nOiAnIWlzUmFkaW9CdXR0b24nLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyXSc6ICdpc1JhZGlvQnV0dG9uJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWNoZWNrZWRdJzogJ2lzQ2hlY2tlZCAmJiAhaXNSYWRpb0J1dHRvbicsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZF0nOiAnaXNDaGVja2VkICYmIGlzUmFkaW9CdXR0b24nLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItZGlzYWJsZWRdJzogJ2Jwc0Rpc2FibGVkICYmICFpc1JhZGlvQnV0dG9uJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZF0nOiAnYnBzRGlzYWJsZWQgJiYgaXNSYWRpb0J1dHRvbicsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1ydGxdJzogYCFpc1JhZGlvQnV0dG9uICYmIGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLXJ0bF0nOiBgaXNSYWRpb0J1dHRvbiAmJiBkaXIgPT09ICdydGwnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc1JhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBdXRvRm9jdXM6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGlzTmdNb2RlbCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBpc056RGlzYWJsZUZpcnN0Q2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNDaGVja2VkID0gZmFsc2U7XG4gIG5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBpc1JhZGlvQnV0dG9uID0gISF0aGlzLm56UmFkaW9CdXR0b25EaXJlY3RpdmU7XG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7IH07XG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHsgfTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQElucHV0KCkgYnBzVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0F1dG9Gb2N1cyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGJwc1JhZGlvQnV0dG9uVHlwZTogQnBzUmFkaW9CdXR0b25UeXBlID0gJ3ZhcmlhdGlvbjEnO1xuXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQhLCAna2V5Ym9hcmQnKTtcbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTnpSYWRpb1NlcnZpY2UpIHByaXZhdGUgbnpSYWRpb1NlcnZpY2U6IE56UmFkaW9TZXJ2aWNlIHwgbnVsbCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEJwc1JhZGlvQnV0dG9uRGlyZWN0aXZlKSBwcml2YXRlIG56UmFkaW9CdXR0b25EaXJlY3RpdmU6IEJwc1JhZGlvQnV0dG9uRGlyZWN0aXZlIHwgbnVsbCxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbnpGb3JtU3RhdHVzU2VydmljZT86IE56Rm9ybVN0YXR1c1NlcnZpY2VcbiAgKSB7IH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5icHNEaXNhYmxlZCA9ICh0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgJiYgdGhpcy5icHNEaXNhYmxlZCkgfHwgZGlzYWJsZWQ7XG4gICAgdGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuaXNOZ01vZGVsID0gdHJ1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelJhZGlvU2VydmljZSkge1xuICAgICAgdGhpcy5uelJhZGlvU2VydmljZS5uYW1lJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG5hbWUgPT4ge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5uelJhZGlvU2VydmljZS5kaXNhYmxlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkaXNhYmxlZCA9PiB7XG4gICAgICAgIHRoaXMuYnBzRGlzYWJsZWQgPSAodGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlICYmIHRoaXMuYnBzRGlzYWJsZWQpIHx8IGRpc2FibGVkO1xuICAgICAgICB0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2Uuc2VsZWN0ZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZDtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmJwc1ZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byBydW4gYG9uQ2hhbmdlKClgIG9uIGVhY2ggYG56LXJhZGlvYCBidXR0b24gd2hlbmV2ZXIgdGhlIGBzZWxlY3RlZCRgIGVtaXRzLlxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDggYG56LXJhZGlvYCBidXR0b25zIHdpdGhpbiB0aGUgYG56LXJhZGlvLWdyb3VwYCBhbmQgdGhleSdyZSBhbGwgY29ubmVjdGVkIHdpdGhcbiAgICAgICAgLy8gYG5nTW9kZWxgIG9yIGBmb3JtQ29udHJvbGAgdGhlbiBgb25DaGFuZ2UoKWAgd2lsbCBiZSBjYWxsZWQgOCB0aW1lcyBmb3IgZWFjaCBgbnotcmFkaW9gIGJ1dHRvbi5cbiAgICAgICAgLy8gV2UgcHJldmVudCB0aGlzIGJ5IGNoZWNraW5nIGlmIGBpc0NoZWNrZWRgIGhhcyBiZWVuIGNoYW5nZWQgb3Igbm90LlxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc05nTW9kZWwgJiZcbiAgICAgICAgICBpc0NoZWNrZWQgIT09IHRoaXMuaXNDaGVja2VkICYmXG4gICAgICAgICAgLy8gV2UncmUgb25seSBpbnRlcmV0ZWQgaWYgYGlzQ2hlY2tlZGAgaGFzIGJlZW4gY2hhbmdlZCB0byBgZmFsc2VgIHZhbHVlIHRvIGVtaXQgYGZhbHNlYCB0byB0aGUgYXNjZW5kYW50IGZvcm0sXG4gICAgICAgICAgLy8gc2luY2Ugd2UgYWxyZWFkeSBlbWl0IGB0cnVlYCB3aXRoaW4gdGhlIGBzZXR1cENsaWNrTGlzdGVuZXJgLlxuICAgICAgICAgIHRoaXMuaXNDaGVja2VkID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzTW9uaXRvclxuICAgICAgLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgICAgICAgIGlmICh0aGlzLm56UmFkaW9TZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnRvdWNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcblxuICAgIHRoaXMuc2V0dXBDbGlja0xpc3RlbmVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYnBzQXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBicHMtcmFkaW8tYnV0dG9uLSR7dGhpcy5icHNSYWRpb0J1dHRvblR5cGV9YCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBDbGlja0xpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICAvKiogcHJldmVudCBsYWJlbCBjbGljayB0cmlnZ2VyZWQgdHdpY2UuICoqL1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHRoaXMuYnBzRGlzYWJsZWQgfHwgdGhpcy5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2U/LnNlbGVjdCh0aGlzLmJwc1ZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmdNb2RlbCkge1xuICAgICAgICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==