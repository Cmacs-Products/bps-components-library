import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/avatar";
function BpsListItemMetaComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nz-avatar", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", ctx_r2.avatarStr);
} }
function BpsListItemMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.avatarStr)("ngIfElse", ctx_r0.avatarTpl);
} }
function BpsListItemMetaComponent_div_1_h4_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.bpsTitle);
} }
function BpsListItemMetaComponent_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 8);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_1_h4_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.bpsTitle);
} }
function BpsListItemMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.bpsDescription);
} }
function BpsListItemMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.bpsDescription);
} }
function BpsListItemMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_1_h4_1_Template, 2, 1, "h4", 6);
    i0.ɵɵtemplate(2, BpsListItemMetaComponent_div_1_div_2_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.bpsTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.bpsDescription);
} }
export class BpsListItemMetaComponent {
    set bpsAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    static { this.ɵfac = function BpsListItemMetaComponent_Factory(t) { return new (t || BpsListItemMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsListItemMetaComponent, selectors: [["bps-list-item-meta"], ["", "bps-list-item-meta", ""]], inputs: { bpsAvatar: "bpsAvatar", bpsTitle: "bpsTitle", bpsDescription: "bpsDescription" }, exportAs: ["bpsListItemMeta"], decls: 2, vars: 2, consts: [["class", "ant-list-item-meta-avatar", 4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [1, "ant-list-item-meta-avatar"], [4, "ngIf", "ngIfElse"], [3, "nzSrc"], [1, "ant-list-item-meta-content"], ["class", "ant-list-item-meta-title", 4, "ngIf"], ["class", "ant-list-item-meta-description", 4, "ngIf"], [1, "ant-list-item-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-meta-description"]], template: function BpsListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsListItemMetaComponent_div_0_Template, 2, 2, "div", 0);
            i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.avatarStr || ctx.avatarTpl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsTitle || ctx.bpsDescription);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzAvatarComponent], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsListItemMetaComponent, [{
        type: Component,
        args: [{ selector: 'bps-list-item-meta, [bps-list-item-meta]', exportAs: 'bpsListItemMeta', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\n  </h4>\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\n  </div>\n</div>\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { bpsAvatar: [{
            type: Input
        }], bpsTitle: [{
            type: Input
        }], bpsDescription: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULEtBQUssRUFFTCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNQckIsNkJBQWdEO0lBQzlDLCtCQUEyQztJQUM3QywwQkFBZTs7O0lBREYsZUFBbUI7SUFBbkIsd0NBQW1COzs7SUFGbEMsOEJBQXNFO0lBQ3BFLGlHQUVlO0lBQ2pCLGlCQUFNOzs7SUFIVyxlQUFpQjtJQUFqQix1Q0FBaUIsOEJBQUE7OztJQU05Qiw2QkFBaUQ7SUFBQSxZQUFjO0lBQUEsMEJBQWU7OztJQUE3QixlQUFjO0lBQWQscUNBQWM7OztJQURqRSw2QkFBc0Q7SUFDcEQsc0dBQThFO0lBQ2hGLGlCQUFLOzs7SUFEWSxlQUFnQztJQUFoQyx3REFBZ0M7OztJQUcvQyw2QkFBdUQ7SUFBQSxZQUFvQjtJQUFBLDBCQUFlOzs7SUFBbkMsZUFBb0I7SUFBcEIsMkNBQW9COzs7SUFEN0UsK0JBQW1FO0lBQ2pFLHVHQUEwRjtJQUM1RixpQkFBTTs7O0lBRFcsZUFBc0M7SUFBdEMsOERBQXNDOzs7SUFMekQsOEJBQTJFO0lBQ3pFLDZFQUVLO0lBQ0wsK0VBRU07SUFDUixpQkFBTTs7O0lBTkMsZUFBYztJQUFkLHNDQUFjO0lBR2IsZUFBb0I7SUFBcEIsNENBQW9COztBRFM1QixNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLElBQ0ksU0FBUyxDQUFDLEtBQWlDO1FBQzdDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBTUQsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWpCdEUsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQWtCYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDekUsQ0FBQzt5RkFwQlUsd0JBQXdCO29FQUF4Qix3QkFBd0I7WUNsQnJDLHlFQUlNO1lBQ04seUVBT007O1lBWkEscURBQTRCO1lBSzVCLGVBQWdDO1lBQWhDLHlEQUFnQzs7O3VGRGF6Qix3QkFBd0I7Y0FScEMsU0FBUzsyQkFDRSwwQ0FBMEMsWUFDMUMsaUJBQWlCLHVCQUVOLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTtxRkFPakMsU0FBUztrQkFEWixLQUFLO1lBVUcsUUFBUTtrQkFBaEIsS0FBSztZQUVHLGNBQWM7a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1saXN0LWl0ZW0tbWV0YSwgW2Jwcy1saXN0LWl0ZW0tbWV0YV0nLFxuICBleHBvcnRBczogJ2Jwc0xpc3RJdGVtTWV0YScsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQnBzTGlzdEl0ZW1NZXRhQ29tcG9uZW50IHtcbiAgYXZhdGFyU3RyID0gJyc7XG4gIGF2YXRhclRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IGJwc0F2YXRhcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5hdmF0YXJTdHIgPSAnJztcbiAgICAgIHRoaXMuYXZhdGFyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgYnBzVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIGJwc0Rlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGlzdC1pdGVtLW1ldGEnKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImF2YXRhclN0ciB8fCBhdmF0YXJUcGxcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1hdmF0YXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF2YXRhclN0cjsgZWxzZSBhdmF0YXJUcGxcIj5cbiAgICA8bnotYXZhdGFyIFtuelNyY109XCJhdmF0YXJTdHJcIj48L256LWF2YXRhcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJicHNUaXRsZSB8fCBicHNEZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLWNvbnRlbnRcIj5cbiAgPGg0ICpuZ0lmPVwiYnBzVGl0bGVcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS10aXRsZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNUaXRsZVwiPnt7IGJwc1RpdGxlIH19PC9uZy1jb250YWluZXI+XG4gIDwvaDQ+XG4gIDxkaXYgKm5nSWY9XCJicHNEZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0Rlc2NyaXB0aW9uXCI+e3sgYnBzRGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==