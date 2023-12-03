import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = ["bps-input-group-slot", ""];
function BpsInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.icon);
} }
function BpsInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.template);
} }
export class BpsInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
    static { this.ɵfac = function BpsInputGroupSlotComponent_Factory(t) { return new (t || BpsInputGroupSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsInputGroupSlotComponent, selectors: [["", "bps-input-group-slot", ""]], hostVars: 6, hostBindings: function BpsInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
        } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c0, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function BpsInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
            i0.ɵɵtemplate(1, BpsInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.template);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsInputGroupSlotComponent, [{
        type: Component,
        args: [{
                selector: '[bps-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            }]
    }], null, { icon: [{
            type: Input
        }], type: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1pbnB1dC9pbnB1dC1ncm91cC1zbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQVF0Ryx1QkFBNEM7OztJQUFqQyxvQ0FBZTs7O0lBQzFCLDZCQUFpRDtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7QUFRbkUsTUFBTSxPQUFPLDBCQUEwQjtJQWZ2QztRQWdCVyxTQUFJLEdBQW1CLElBQUksQ0FBQztRQUM1QixTQUFJLEdBQXlDLElBQUksQ0FBQztRQUNsRCxhQUFRLEdBQXVDLElBQUksQ0FBQztLQUM5RDsyRkFKWSwwQkFBMEI7b0VBQTFCLDBCQUEwQjs7O1lBVG5DLHVFQUE0QztZQUM1Qyw2RkFBOEU7O1lBRGxELCtCQUFVO1lBQ3ZCLGVBQWdDO1lBQWhDLHFEQUFnQzs7O3VGQVF0QywwQkFBMEI7Y0FmdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osK0JBQStCLEVBQUUsa0JBQWtCO29CQUNuRCwwQkFBMEIsRUFBRSxtQkFBbUI7b0JBQy9DLDBCQUEwQixFQUFFLG1CQUFtQjtpQkFDaEQ7YUFDRjtnQkFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYnBzLWlucHV0LWdyb3VwLXNsb3RdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCIgKm5nSWY9XCJpY29uXCI+PC9pPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPnt7IHRlbXBsYXRlIH19PC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1hZGRvbl0nOiBgdHlwZSA9PT0gJ2FkZG9uJ2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtcHJlZml4XSc6IGB0eXBlID09PSAncHJlZml4J2AsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc3VmZml4XSc6IGB0eXBlID09PSAnc3VmZml4J2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dEdyb3VwU2xvdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdHlwZTogJ2FkZG9uJyB8ICdwcmVmaXgnIHwgJ3N1ZmZpeCcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdGVtcGxhdGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xufVxuIl19