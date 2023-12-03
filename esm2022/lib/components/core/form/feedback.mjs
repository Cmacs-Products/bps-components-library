import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
function BpsFormItemFeedbackIconComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.iconType);
} }
const iconTypeMap = {
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill'
};
export class BpsFormItemFeedbackIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.status = '';
        this.iconType = null;
    }
    ngOnChanges(_changes) {
        this.updateIcon();
    }
    updateIcon() {
        this.iconType = this.status ? iconTypeMap[this.status] : null;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = function BpsFormItemFeedbackIconComponent_Factory(t) { return new (t || BpsFormItemFeedbackIconComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormItemFeedbackIconComponent, selectors: [["bps-form-item-feedback-icon"]], hostAttrs: [1, "ant-form-item-feedback-icon"], hostVars: 8, hostBindings: function BpsFormItemFeedbackIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-form-item-feedback-icon-error", ctx.status === "error")("ant-form-item-feedback-icon-warning", ctx.status === "warning")("ant-form-item-feedback-icon-success", ctx.status === "success")("ant-form-item-feedback-icon-validating", ctx.status === "validating");
        } }, inputs: { status: "status" }, exportAs: ["bpsFormFeedbackIcon"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function BpsFormItemFeedbackIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsFormItemFeedbackIconComponent_span_0_Template, 1, 1, "span", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.iconType);
        } }, dependencies: [i1.NgIf, i2.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormItemFeedbackIconComponent, [{
        type: Component,
        args: [{
                selector: 'bps-form-item-feedback-icon',
                exportAs: 'bpsFormFeedbackIcon',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <span *ngIf="iconType" nz-icon [nzType]="iconType"></span> `,
                host: {
                    class: 'ant-form-item-feedback-icon',
                    '[class.ant-form-item-feedback-icon-error]': 'status==="error"',
                    '[class.ant-form-item-feedback-icon-warning]': 'status==="warning"',
                    '[class.ant-form-item-feedback-icon-success]': 'status==="success"',
                    '[class.ant-form-item-feedback-icon-validating]': 'status==="validating"'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { status: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvcmUvZm9ybS9mZWVkYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7OztJQWlCVCwwQkFBMEQ7OztJQUEzQix3Q0FBbUI7O0FBYmhFLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsVUFBVSxFQUFFLFNBQVM7SUFDckIsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixPQUFPLEVBQUUseUJBQXlCO0NBQzFCLENBQUM7QUFpQlgsTUFBTSxPQUFPLGdDQUFnQztJQUUzQyxZQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQURoQyxXQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxhQUFRLEdBQXdELElBQUksQ0FBQztJQUZ4QixDQUFDO0lBSTlDLFdBQVcsQ0FBQyxRQUF1QjtRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7aUdBYlUsZ0NBQWdDO29FQUFoQyxnQ0FBZ0M7OztZQVQvQixtRkFBMEQ7O1lBQW5ELG1DQUFjOzs7dUZBU3RCLGdDQUFnQztjQWY1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsOERBQThEO2dCQUN4RSxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLDZCQUE2QjtvQkFDcEMsMkNBQTJDLEVBQUUsa0JBQWtCO29CQUMvRCw2Q0FBNkMsRUFBRSxvQkFBb0I7b0JBQ25FLDZDQUE2QyxFQUFFLG9CQUFvQjtvQkFDbkUsZ0RBQWdELEVBQUUsdUJBQXVCO2lCQUMxRTthQUNGO29FQUVVLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpWYWxpZGF0ZVN0YXR1cyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmNvbnN0IGljb25UeXBlTWFwID0ge1xuICBlcnJvcjogJ2Nsb3NlLWNpcmNsZS1maWxsJyxcbiAgdmFsaWRhdGluZzogJ2xvYWRpbmcnLFxuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlLWZpbGwnLFxuICB3YXJuaW5nOiAnZXhjbGFtYXRpb24tY2lyY2xlLWZpbGwnXG59IGFzIGNvbnN0O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24nLFxuICBleHBvcnRBczogJ2Jwc0Zvcm1GZWVkYmFja0ljb24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgIDxzcGFuICpuZ0lmPVwiaWNvblR5cGVcIiBuei1pY29uIFtuelR5cGVdPVwiaWNvblR5cGVcIj48L3NwYW4+IGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbicsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24tZXJyb3JdJzogJ3N0YXR1cz09PVwiZXJyb3JcIicsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24td2FybmluZ10nOiAnc3RhdHVzPT09XCJ3YXJuaW5nXCInLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1mZWVkYmFjay1pY29uLXN1Y2Nlc3NdJzogJ3N0YXR1cz09PVwic3VjY2Vzc1wiJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbi12YWxpZGF0aW5nXSc6ICdzdGF0dXM9PT1cInZhbGlkYXRpbmdcIidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNGb3JtSXRlbUZlZWRiYWNrSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cyA9ICcnO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgaWNvblR5cGU6IHR5cGVvZiBpY29uVHlwZU1hcFtrZXlvZiB0eXBlb2YgaWNvblR5cGVNYXBdIHwgbnVsbCA9IG51bGw7XG5cbiAgbmdPbkNoYW5nZXMoX2NoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgfVxuXG4gIHVwZGF0ZUljb24oKTogdm9pZCB7XG4gICAgdGhpcy5pY29uVHlwZSA9IHRoaXMuc3RhdHVzID8gaWNvblR5cGVNYXBbdGhpcy5zdGF0dXNdIDogbnVsbDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19