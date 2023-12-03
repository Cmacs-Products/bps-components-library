import { __decorate } from "tslib";
import { Directive, Input, Optional, Self } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { NzFormItemFeedbackIconComponent } from 'ng-zorro-antd/core/form';
import { InputBoolean, getStatusClassNames } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/form";
export class BpsInputDirective {
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value != null && `${value}` !== 'false';
    }
    constructor(ngControl, renderer, elementRef, hostView, directionality, nzFormStatusService, nzFormNoStatusService) {
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.directionality = directionality;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this.borderless = false;
        this.size = 'default';
        this.nzStepperless = true;
        this.nzStatus = '';
        this.opened = false;
        this._disabled = false;
        this.disabled$ = new Subject();
        this.dir = 'ltr';
        // status
        this.prefixCls = 'ant-input';
        this.status = '';
        this.statusCls = {};
        this.hasFeedback = false;
        this.feedbackRef = null;
        this.components = [];
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        if (this.ngControl) {
            this.ngControl.statusChanges
                ?.pipe(filter(() => this.ngControl.disabled !== null), takeUntil(this.destroy$))
                .subscribe(() => {
                this.disabled$.next(this.ngControl.disabled);
            });
        }
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { disabled, nzStatus } = changes;
        if (disabled) {
            this.disabled$.next(this.disabled);
        }
        if (nzStatus) {
            this.setStatusStyles(this.nzStatus, this.hasFeedback);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusStyles(status, hasFeedback) {
        // set inner status
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.renderFeedbackIcon();
        // render status if nzStatus is set
        this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
        Object.keys(this.statusCls).forEach(status => {
            if (this.statusCls[status]) {
                this.renderer.addClass(this.elementRef.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, status);
            }
        });
    }
    renderFeedbackIcon() {
        if (!this.status || !this.hasFeedback || !!this.nzFormNoStatusService) {
            // remove feedback
            this.hostView.clear();
            this.feedbackRef = null;
            return;
        }
        this.feedbackRef = this.feedbackRef || this.hostView.createComponent(NzFormItemFeedbackIconComponent);
        this.feedbackRef.location.nativeElement.classList.add('ant-input-suffix');
        this.feedbackRef.instance.status = this.status;
        this.feedbackRef.instance.updateIcon();
    }
    static { this.ɵfac = function BpsInputDirective_Factory(t) { return new (t || BpsInputDirective)(i0.ɵɵdirectiveInject(i1.NgControl, 10), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzFormStatusService, 8), i0.ɵɵdirectiveInject(i3.NzFormNoStatusService, 8)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsInputDirective, selectors: [["input", "bps-input", ""], ["textarea", "bps-input", ""]], hostAttrs: [1, "ant-input"], hostVars: 15, hostBindings: function BpsInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("disabled", ctx.disabled || null);
            i0.ɵɵclassProp("bps-input-opened", ctx.opened)("ant-input-disabled", ctx.disabled)("ant-input-borderless", ctx.borderless)("ant-input-lg", ctx.size === "large")("ant-input-sm", ctx.size === "small")("ant-input-rtl", ctx.dir === "rtl")("ant-input-stepperless", ctx.nzStepperless);
        } }, inputs: { borderless: "borderless", size: "size", nzStepperless: "nzStepperless", nzStatus: "nzStatus", opened: "opened", disabled: "disabled" }, exportAs: ["bpsInput"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
__decorate([
    InputBoolean()
], BpsInputDirective.prototype, "borderless", void 0);
__decorate([
    InputBoolean()
], BpsInputDirective.prototype, "nzStepperless", void 0);
__decorate([
    InputBoolean()
], BpsInputDirective.prototype, "opened", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsInputDirective, [{
        type: Directive,
        args: [{
                selector: 'input[bps-input],textarea[bps-input]',
                exportAs: 'bpsInput',
                host: {
                    class: 'ant-input',
                    '[class.bps-input-opened]': 'opened',
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-borderless]': 'borderless',
                    '[class.ant-input-lg]': `size === 'large'`,
                    '[class.ant-input-sm]': `size === 'small'`,
                    '[attr.disabled]': 'disabled || null',
                    '[class.ant-input-rtl]': `dir=== 'rtl'`,
                    '[class.ant-input-stepperless]': `nzStepperless`
                }
            }]
    }], function () { return [{ type: i1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.NzFormStatusService, decorators: [{
                type: Optional
            }] }, { type: i3.NzFormNoStatusService, decorators: [{
                type: Optional
            }] }]; }, { borderless: [{
            type: Input
        }], size: [{
            type: Input
        }], nzStepperless: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], opened: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFFBQVEsRUFFUixJQUFJLEVBR0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSwrQkFBK0IsRUFBOEMsTUFBTSx5QkFBeUIsQ0FBQztBQUV0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBaUI1RSxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLElBQ0ksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQWFELFlBQzZCLFNBQW9CLEVBQ3ZDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3BCLFFBQTBCLEVBQ2hCLGNBQThCLEVBQzlCLG1CQUF5QyxFQUMxQyxxQkFBNkM7UUFOckMsY0FBUyxHQUFULFNBQVMs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TUFBTTtrQkFBOUIsS0FBSztZQUVGLFFBQVE7a0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56Rm9ybUl0ZW1GZWVkYmFja0ljb25Db21wb25lbnQsIE56Rm9ybU5vU3RhdHVzU2VydmljZSwgTnpGb3JtU3RhdHVzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9mb3JtJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc0ludGVyZmFjZSwgTnpTaXplTERTVHlwZSwgTnpTdGF0dXMsIE56VmFsaWRhdGVTdGF0dXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBnZXRTdGF0dXNDbGFzc05hbWVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFticHMtaW5wdXRdLHRleHRhcmVhW2Jwcy1pbnB1dF0nLFxuICBleHBvcnRBczogJ2Jwc0lucHV0JyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWlucHV0JyxcbiAgICAnW2NsYXNzLmJwcy1pbnB1dC1vcGVuZWRdJzogJ29wZW5lZCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ib3JkZXJsZXNzXSc6ICdib3JkZXJsZXNzJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1sZ10nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc21dJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtcnRsXSc6IGBkaXI9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXN0ZXBwZXJsZXNzXSc6IGBuelN0ZXBwZXJsZXNzYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0lucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVybGVzczogQm9vbGVhbklucHV0O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVybGVzcyA9IGZhbHNlO1xuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTdGVwcGVybGVzczogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelN0YXR1cyA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xuICB9XG4gIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBkaXNhYmxlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICAvLyBzdGF0dXNcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWlucHV0JztcbiAgc3RhdHVzOiBOelZhbGlkYXRlU3RhdHVzID0gJyc7XG4gIHN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xuICBoYXNGZWVkYmFjazogYm9vbGVhbiA9IGZhbHNlO1xuICBmZWVkYmFja1JlZjogQ29tcG9uZW50UmVmPE56Rm9ybUl0ZW1GZWVkYmFja0ljb25Db21wb25lbnQ+IHwgbnVsbCA9IG51bGw7XG4gIGNvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudFJlZjxOekZvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50Pj4gPSBbXTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1TdGF0dXNTZXJ2aWNlPzogTnpGb3JtU3RhdHVzU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbnpGb3JtTm9TdGF0dXNTZXJ2aWNlPzogTnpGb3JtTm9TdGF0dXNTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekZvcm1TdGF0dXNTZXJ2aWNlPy5mb3JtU3RhdHVzQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmUsIGN1cikgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmUuc3RhdHVzID09PSBjdXIuc3RhdHVzICYmIHByZS5oYXNGZWVkYmFjayA9PT0gY3VyLmhhc0ZlZWRiYWNrO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyhzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzXG4gICAgICAgID8ucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQkLm5leHQodGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgbnpTdGF0dXMgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGVkJC5uZXh0KHRoaXMuZGlzYWJsZWQpO1xuICAgIH1cbiAgICBpZiAobnpTdGF0dXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHRoaXMubnpTdGF0dXMsIHRoaXMuaGFzRmVlZGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3RhdHVzU3R5bGVzKHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cywgaGFzRmVlZGJhY2s6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBzZXQgaW5uZXIgc3RhdHVzXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5oYXNGZWVkYmFjayA9IGhhc0ZlZWRiYWNrO1xuICAgIHRoaXMucmVuZGVyRmVlZGJhY2tJY29uKCk7XG4gICAgLy8gcmVuZGVyIHN0YXR1cyBpZiBuelN0YXR1cyBpcyBzZXRcbiAgICB0aGlzLnN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXModGhpcy5wcmVmaXhDbHMsIHN0YXR1cywgaGFzRmVlZGJhY2spO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdHVzQ2xzKS5mb3JFYWNoKHN0YXR1cyA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0dXNDbHNbc3RhdHVzXSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRmVlZGJhY2tJY29uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0dXMgfHwgIXRoaXMuaGFzRmVlZGJhY2sgfHwgISF0aGlzLm56Rm9ybU5vU3RhdHVzU2VydmljZSkge1xuICAgICAgLy8gcmVtb3ZlIGZlZWRiYWNrXG4gICAgICB0aGlzLmhvc3RWaWV3LmNsZWFyKCk7XG4gICAgICB0aGlzLmZlZWRiYWNrUmVmID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZlZWRiYWNrUmVmID0gdGhpcy5mZWVkYmFja1JlZiB8fCB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudChOekZvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50KTtcbiAgICB0aGlzLmZlZWRiYWNrUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWlucHV0LXN1ZmZpeCcpO1xuICAgIHRoaXMuZmVlZGJhY2tSZWYuaW5zdGFuY2Uuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgdGhpcy5mZWVkYmFja1JlZi5pbnN0YW5jZS51cGRhdGVJY29uKCk7XG4gIH1cbn1cbiJdfQ==