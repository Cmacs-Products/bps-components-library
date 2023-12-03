import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/addon/string_template_outlet";
function BpsSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.placeholder, " ");
} }
export class BpsSelectPlaceholderComponent {
    constructor() {
        this.placeholder = null;
    }
    static { this.ɵfac = function BpsSelectPlaceholderComponent_Factory(t) { return new (t || BpsSelectPlaceholderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectPlaceholderComponent, selectors: [["bps-select-placeholder"]], hostAttrs: [1, "ant-select-selection-placeholder"], inputs: { placeholder: "placeholder" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function BpsSelectPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.placeholder);
        } }, dependencies: [i1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectPlaceholderComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-placeholder',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
                host: { class: 'ant-select-selection-placeholder' }
            }]
    }], function () { return []; }, { placeholder: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBsYWNlaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtcGxhY2Vob2xkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBU3RHLDZCQUFvRDtJQUNsRCxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSxtREFDRjs7QUFJSixNQUFNLE9BQU8sNkJBQTZCO0lBR3hDO1FBRlMsZ0JBQVcsR0FBMkMsSUFBSSxDQUFDO0lBRXJELENBQUM7OEZBSEwsNkJBQTZCO29FQUE3Qiw2QkFBNkI7WUFOdEMsZ0dBRWU7O1lBRkEsd0RBQW1DOzs7dUZBTXpDLDZCQUE2QjtjQVh6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0NBQWtDLEVBQUU7YUFDcEQ7c0NBRVUsV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0LXBsYWNlaG9sZGVyJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInBsYWNlaG9sZGVyXCI+XG4gICAgICB7eyBwbGFjZWhvbGRlciB9fVxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7IGNsYXNzOiAnYW50LXNlbGVjdC1zZWxlY3Rpb24tcGxhY2Vob2xkZXInIH1cbn0pXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0UGxhY2Vob2xkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==