import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/addon/string_template_outlet";
function BpsOptionItemGroupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.bpsLabel);
} }
export class BpsOptionItemGroupComponent {
    constructor() {
        this.bpsLabel = null;
    }
    static { this.ɵfac = function BpsOptionItemGroupComponent_Factory(t) { return new (t || BpsOptionItemGroupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionItemGroupComponent, selectors: [["bps-option-item-group"]], hostAttrs: [1, "ant-select-item", "ant-select-item-group"], inputs: { bpsLabel: "bpsLabel" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function BpsOptionItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.bpsLabel);
        } }, dependencies: [i1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionItemGroupComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option-item-group',
                template: ` <ng-container *nzStringTemplateOutlet="bpsLabel">{{ bpsLabel }}</ng-container> `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-select-item ant-select-item-group'
                }
            }]
    }], function () { return []; }, { bpsLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L29wdGlvbi1pdGVtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQU01Riw2QkFBaUQ7SUFBQSxZQUFjO0lBQUEsMEJBQWU7OztJQUE3QixlQUFjO0lBQWQscUNBQWM7O0FBTzdFLE1BQU0sT0FBTywyQkFBMkI7SUFHdEM7UUFGUyxhQUFRLEdBQW9ELElBQUksQ0FBQztJQUUzRCxDQUFDOzRGQUhMLDJCQUEyQjtvRUFBM0IsMkJBQTJCO1lBUDFCLDhGQUE4RTs7WUFBL0QscURBQWdDOzs7dUZBT2hELDJCQUEyQjtjQVR2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLGtGQUFrRjtnQkFDNUYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHVDQUF1QztpQkFDL0M7YUFDRjtzQ0FFVSxRQUFRO2tCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtb3B0aW9uLWl0ZW0tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzTGFiZWxcIj57eyBicHNMYWJlbCB9fTwvbmctY29udGFpbmVyPiBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1pdGVtIGFudC1zZWxlY3QtaXRlbS1ncm91cCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25JdGVtR3JvdXBDb21wb25lbnQge1xuICBASW5wdXQoKSBicHNMYWJlbDogc3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==