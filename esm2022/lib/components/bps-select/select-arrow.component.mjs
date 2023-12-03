import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
function BpsSelectArrowComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3);
} }
function BpsSelectArrowComponent_ng_template_1_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 8);
} }
function BpsSelectArrowComponent_ng_template_1_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} }
function BpsSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectArrowComponent_ng_template_1_ng_container_0_span_1_Template, 1, 0, "span", 6);
    i0.ɵɵtemplate(2, BpsSelectArrowComponent_ng_template_1_ng_container_0_span_2_Template, 1, 0, "span", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.search);
} }
function BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const suffixIcon_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("nzType", suffixIcon_r10);
} }
function BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_span_1_Template, 1, 1, "span", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suffixIcon_r10);
} }
function BpsSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 2);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r6.suffixIcon);
} }
function BpsSelectArrowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 4);
    i0.ɵɵtemplate(1, BpsSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r5 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.showArrow && !ctx_r2.suffixIcon)("ngIfElse", _r5);
} }
function BpsSelectArrowComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.feedbackIcon);
} }
export class BpsSelectArrowComponent {
    constructor() {
        this.loading = false;
        this.search = false;
        this.showArrow = false;
        this.suffixIcon = null;
        this.feedbackIcon = null;
    }
    static { this.ɵfac = function BpsSelectArrowComponent_Factory(t) { return new (t || BpsSelectArrowComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectArrowComponent, selectors: [["bps-select-arrow"]], hostAttrs: [1, "ant-select-arrow"], hostVars: 2, hostBindings: function BpsSelectArrowComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-select-arrow-loading", ctx.loading);
        } }, inputs: { loading: "loading", search: "search", showArrow: "showArrow", suffixIcon: "suffixIcon", feedbackIcon: "feedbackIcon" }, decls: 4, vars: 3, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function BpsSelectArrowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectArrowComponent_span_0_Template, 1, 0, "span", 0);
            i0.ɵɵtemplate(1, BpsSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, BpsSelectArrowComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.loading)("ngIfElse", _r1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.feedbackIcon);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectArrowComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-arrow',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
                host: {
                    class: 'ant-select-arrow',
                    '[class.ant-select-arrow-loading]': 'loading'
                }
            }]
    }], function () { return []; }, { loading: [{
            type: Input
        }], search: [{
            type: Input
        }], showArrow: [{
            type: Input
        }], suffixIcon: [{
            type: Input
        }], feedbackIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFycm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtYXJyb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFTdEcsMEJBQXlFOzs7SUFHckUsMEJBQW1EOzs7SUFDbkQsMEJBQW9EOzs7SUFGdEQsNkJBQW9FO0lBQ2xFLHVHQUFtRDtJQUNuRCx1R0FBb0Q7SUFDdEQsMEJBQWU7OztJQUZnQixlQUFhO0lBQWIscUNBQWE7SUFDWCxlQUFZO0lBQVosb0NBQVk7OztJQUl6QywyQkFBOEQ7OztJQUE3Qix1Q0FBcUI7OztJQUR4RCw2QkFBbUU7SUFDakUsc0hBQThEO0lBQ2hFLDBCQUFlOzs7SUFETixlQUFnQjtJQUFoQixxQ0FBZ0I7OztJQUR6QixzSEFFZTs7O0lBRkEsMERBQW9DOzs7SUFMckQsd0dBR2U7SUFDZix1SUFJYzs7OztJQVJDLDZEQUFnQyxpQkFBQTs7O0lBVWpELDZCQUFxRDtJQUFBLFlBQWtCO0lBQUEsMEJBQWU7OztJQUFqQyxlQUFrQjtJQUFsQix5Q0FBa0I7O0FBTzNFLE1BQU0sT0FBTyx1QkFBdUI7SUFPbEM7UUFOUyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBMkMsSUFBSSxDQUFDO1FBQzFELGlCQUFZLEdBQTJDLElBQUksQ0FBQztJQUV0RCxDQUFDO3dGQVBMLHVCQUF1QjtvRUFBdkIsdUJBQXVCOzs7WUFuQmhDLDBFQUF5RTtZQUN6RSx5SEFVYztZQUNkLDBGQUFzRjs7O1lBWnRELGtDQUFlLGlCQUFBO1lBWWhDLGVBQW9DO1lBQXBDLHlEQUFvQzs7O3VGQU8xQyx1QkFBdUI7Y0F4Qm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsa0NBQWtDLEVBQUUsU0FBUztpQkFDOUM7YUFDRjtzQ0FFVSxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1hcnJvdycsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiICpuZ0lmPVwibG9hZGluZzsgZWxzZSBkZWZhdWx0QXJyb3dcIj48L3NwYW4+XG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0QXJyb3c+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0Fycm93ICYmICFzdWZmaXhJY29uOyBlbHNlIHN1ZmZpeFRlbXBsYXRlXCI+XG4gICAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwiZG93blwiICpuZ0lmPVwiIXNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJzZWFyY2hcIiAqbmdJZj1cInNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNzdWZmaXhUZW1wbGF0ZT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1ZmZpeEljb247IGxldCBzdWZmaXhJY29uXCI+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJzdWZmaXhJY29uXCIgbnotaWNvbiBbbnpUeXBlXT1cInN1ZmZpeEljb25cIj48L3NwYW4+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJmZWVkYmFja0ljb25cIj57eyBmZWVkYmFja0ljb24gfX08L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1hcnJvdycsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFycm93LWxvYWRpbmddJzogJ2xvYWRpbmcnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0QXJyb3dDb21wb25lbnQge1xuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93QXJyb3cgPSBmYWxzZTtcbiAgQElucHV0KCkgc3VmZml4SWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBmZWVkYmFja0ljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=