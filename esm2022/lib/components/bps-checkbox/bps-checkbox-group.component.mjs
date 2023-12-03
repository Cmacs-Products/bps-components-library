import { __decorate } from "tslib";
import { Component, forwardRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "./bps-checkbox.component";
function BpsCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 1);
    i0.ɵɵlistener("bpsCheckedChange", function BpsCheckboxGroupComponent_label_0_Template_label_bpsCheckedChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r3); const o_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCheckedChange(o_r1, $event)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bpsDisabled", o_r1.disabled || ctx_r0.bpsDisabled)("bpsChecked", o_r1.checked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(o_r1.label);
} }
export class BpsCheckboxGroupComponent {
    trackByOption(_, option) {
        return option.value;
    }
    onCheckedChange(option, checked) {
        option.checked = checked;
        this.onChange(this.options);
    }
    constructor(elementRef, focusMonitor, cdr, directionality) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.directionality = directionality;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.options = [];
        this.bpsDisabled = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
    }
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.options = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = function BpsCheckboxGroupComponent_Factory(t) { return new (t || BpsCheckboxGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsCheckboxGroupComponent, selectors: [["bps-checkbox-group"]], hostAttrs: [1, "ant-checkbox-group"], hostVars: 2, hostBindings: function BpsCheckboxGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-checkbox-group-rtl", ctx.dir === "rtl");
        } }, inputs: { bpsDisabled: "bpsDisabled" }, exportAs: ["bpsCheckboxGroup"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsCheckboxGroupComponent),
                    multi: true
                }
            ])], decls: 1, vars: 2, consts: [["bps-checkbox", "", "class", "ant-checkbox-group-item", 3, "bpsDisabled", "bpsChecked", "bpsCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["bps-checkbox", "", 1, "ant-checkbox-group-item", 3, "bpsDisabled", "bpsChecked", "bpsCheckedChange"]], template: function BpsCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
        } }, dependencies: [i3.NgForOf, i4.BpsCheckboxComponent], encapsulation: 2 }); }
}
__decorate([
    InputBoolean()
], BpsCheckboxGroupComponent.prototype, "bpsDisabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsCheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'bps-checkbox-group',
                exportAs: 'bpsCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: `
    <label
      bps-checkbox
      class="ant-checkbox-group-item"
      *ngFor="let o of options; trackBy: trackByOption"
      [bpsDisabled]="o.disabled || bpsDisabled"
      [bpsChecked]="o.checked!"
      (bpsCheckedChange)="onCheckedChange(o, $event)"
    >
      <span>{{ o.label }}</span>
    </label>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsCheckboxGroupComponent),
                        multi: true
                    }
                ],
                host: {
                    class: 'ant-checkbox-group',
                    '[class.ant-checkbox-group-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { bpsDisabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNoZWNrYm94L2Jwcy1jaGVja2JveC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCxTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFHTCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7O0lBZW5ELGdDQU9DO0lBREMsMlBBQW9CLGVBQUEsb0NBQTBCLENBQUEsSUFBQztJQUUvQyw0QkFBTTtJQUFBLFlBQWE7SUFBQSxpQkFBTyxFQUFBOzs7O0lBSjFCLGlFQUF5Qyw0QkFBQTtJQUluQyxlQUFhO0lBQWIsZ0NBQWE7O0FBZXpCLE1BQU0sT0FBTyx5QkFBeUI7SUFhcEMsYUFBYSxDQUFDLENBQVMsRUFBRSxNQUFpQztRQUN4RCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFpQyxFQUFFLE9BQWdCO1FBQ2pFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxZQUNVLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLEdBQXNCLEVBQ1YsY0FBOEI7UUFIMUMsZUFBVSxH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USxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLENBQUM7d0JBQ3hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsb0JBQW9CO29CQUMzQixnQ0FBZ0MsRUFBRSxlQUFlO2lCQUNsRDthQUNGOztzQkEyQkksUUFBUTt3QkFwQmMsV0FBVztrQkFBbkMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2Uge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtY2hlY2tib3gtZ3JvdXAnLFxuICBleHBvcnRBczogJ2Jwc0NoZWNrYm94R3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGFiZWxcbiAgICAgIGJwcy1jaGVja2JveFxuICAgICAgY2xhc3M9XCJhbnQtY2hlY2tib3gtZ3JvdXAtaXRlbVwiXG4gICAgICAqbmdGb3I9XCJsZXQgbyBvZiBvcHRpb25zOyB0cmFja0J5OiB0cmFja0J5T3B0aW9uXCJcbiAgICAgIFticHNEaXNhYmxlZF09XCJvLmRpc2FibGVkIHx8IGJwc0Rpc2FibGVkXCJcbiAgICAgIFticHNDaGVja2VkXT1cIm8uY2hlY2tlZCFcIlxuICAgICAgKGJwc0NoZWNrZWRDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKG8sICRldmVudClcIlxuICAgID5cbiAgICAgIDxzcGFuPnt7IG8ubGFiZWwgfX08L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCcHNDaGVja2JveEdyb3VwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtY2hlY2tib3gtZ3JvdXAnLFxuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LWdyb3VwLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNDaGVja2JveEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4geyB9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7IH07XG4gIG9wdGlvbnM6IE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGlzTnpEaXNhYmxlRmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHRyYWNrQnlPcHRpb24oXzogbnVtYmVyLCBvcHRpb246IE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2UpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICBvbkNoZWNrZWRDaGFuZ2Uob3B0aW9uOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlLCBjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgb3B0aW9uLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yXG4gICAgICAubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5icHNEaXNhYmxlZCA9ICh0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgJiYgdGhpcy5icHNEaXNhYmxlZCkgfHwgZGlzYWJsZWQ7XG4gICAgdGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==