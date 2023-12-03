import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsListItemMetaComponent } from './bps-list-item-meta.component';
import * as i0 from "@angular/core";
import * as i1 from "./bps-list.component";
import * as i2 from "@angular/common";
import * as i3 from "../core/addon/string_template_outlet";
function BpsListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_0_ul_0_li_1_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "em", 9);
} }
function BpsListItemComponent_ng_template_0_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, BpsListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(2, BpsListItemComponent_ng_template_0_ul_0_li_1_em_2_Template, 1, 0, "em", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const last_r10 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", i_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r10);
} }
function BpsListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, BpsListItemComponent_ng_template_0_ul_0_li_1_Template, 3, 2, "li", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.bpsActions);
} }
function BpsListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsListItemComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r1.bpsActions == null ? null : ctx_r1.bpsActions.length) > 0);
} }
function BpsListItemComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵlistener("click", function BpsListItemComponent_ng_template_2_ng_container_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r15.onDelete()); })("mouseenter", function BpsListItemComponent_ng_template_2_ng_container_2_Template_div_mouseenter_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.onDeleteHover(true)); })("mouseleave", function BpsListItemComponent_ng_template_2_ng_container_2_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.onDeleteHover(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 13)(3, "defs")(4, "style");
    i0.ɵɵtext(5, " .prefix__cls-1 { fill: #fff } ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "g", 14);
    i0.ɵɵelement(7, "rect", 15)(8, "rect", 16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} }
function BpsListItemComponent_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r19.bpsContent);
} }
function BpsListItemComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListItemComponent_ng_template_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r14.bpsContent);
} }
function BpsListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("mouseenter", function BpsListItemComponent_ng_template_2_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.onHover(true)); })("mouseleave", function BpsListItemComponent_ng_template_2_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.onHover(false)); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, BpsListItemComponent_ng_template_2_ng_container_2_Template, 9, 0, "ng-container", 11);
    i0.ɵɵtemplate(3, BpsListItemComponent_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 11);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.bpsDelete);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.bpsContent);
} }
function BpsListItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_4_ng_template_1_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_4_ng_template_2_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsListItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(1, BpsListItemComponent_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(2, BpsListItemComponent_ng_template_4_ng_template_2_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.bpsExtra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function BpsListItemComponent_ng_container_6_ng_template_2_Template(rf, ctx) { }
function BpsListItemComponent_ng_container_6_ng_template_3_Template(rf, ctx) { }
function BpsListItemComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function BpsListItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵtemplate(2, BpsListItemComponent_ng_container_6_ng_template_2_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(3, BpsListItemComponent_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 19);
    i0.ɵɵtemplate(5, BpsListItemComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r6.bpsExtra);
} }
const _c0 = ["*"];
export class BpsListItemComponent {
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.bpsExtra;
    }
    onDeleteHover(event) {
        this._onDeleteHover = event;
        this.ondeletehover.emit(event);
    }
    onHover(event) {
        this.hover.emit(event);
    }
    onDelete() {
        this.ondelete.emit();
    }
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this._onDeleteHover = false;
        this.bpsActions = [];
        this.bpsNoFlex = false;
        this.bpsDelete = false;
        this.ondelete = new EventEmitter();
        this.ondeletehover = new EventEmitter();
        this.hover = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
    static { this.ɵfac = function BpsListItemComponent_Factory(t) { return new (t || BpsListItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BpsListComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsListItemComponent, selectors: [["bps-list-item"], ["", "bps-list-item", ""]], contentQueries: function BpsListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsListItemMetaComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.metas = _t);
        } }, hostVars: 4, hostBindings: function BpsListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("bps-delete-icon-hovered", ctx._onDeleteHover)("ant-list-item-no-flex", ctx.bpsNoFlex);
        } }, inputs: { bpsActions: "bpsActions", bpsContent: "bpsContent", bpsExtra: "bpsExtra", bpsNoFlex: "bpsNoFlex", bpsDelete: "bpsDelete" }, outputs: { ondelete: "ondelete", ondeletehover: "ondeletehover", hover: "hover" }, exportAs: ["bpsListItem"], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["class", "ant-list-item-action", 4, "ngIf"], [1, "ant-list-item-action"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"], [1, "bps-list-item-content", 3, "mouseenter", "mouseleave"], [4, "ngIf"], [1, "bps-delete-list-icon", 3, "click", "mouseenter", "mouseleave"], ["xmlns", "http://www.w3.org/2000/svg", "width", "10.609", "height", "10.609", "viewBox", "0 0 10.609 10.609"], ["id", "prefix__sps_x_icon_deleteglass_white", "transform", "rotate(45 799.93 -996.928)"], ["id", "prefix__Rectangle_1881", "width", "2", "height", "13", "data-name", "Rectangle 1881", "rx", "1", "transform", "translate(945.732 267.142)", 1, "prefix__cls-1"], ["id", "prefix__Rectangle_1882", "width", "2", "height", "13", "data-name", "Rectangle 1882", "rx", "1", "transform", "rotate(-90 607.436 -332.794)", 1, "prefix__cls-1"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [1, "ant-list-item-extra"]], template: function BpsListItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsListItemComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, BpsListItemComponent_ng_template_2_Template, 4, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, BpsListItemComponent_ng_template_4_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, BpsListItemComponent_ng_container_6_Template, 6, 3, "ng-container", 3);
        } if (rf & 2) {
            const _r4 = i0.ɵɵreference(5);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r4);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsListItemComponent.prototype, "bpsNoFlex", void 0);
__decorate([
    InputBoolean()
], BpsListItemComponent.prototype, "bpsDelete", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsListItemComponent, [{
        type: Component,
        args: [{ selector: 'bps-list-item, [bps-list-item]', exportAs: 'bpsListItem', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    '[class.bps-delete-icon-hovered]': '_onDeleteHover'
                }, template: "<ng-template #actionsTpl>\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #contentTpl>\n  <div class=\"bps-list-item-content\"\r\n       (mouseenter)=\"onHover(true)\"\r\n       (mouseleave)=\"onHover(false)\">\r\n    <ng-content></ng-content>\r\n  </div>\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"onDeleteHover(true)\"\r\n         (mouseleave)=\"onDeleteHover(false)\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\n  <ng-container *ngIf=\"bpsContent\">\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #simpleTpl>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\n  </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.BpsListComponent }, { type: i0.ChangeDetectorRef }]; }, { metas: [{
            type: ContentChildren,
            args: [BpsListItemMetaComponent]
        }], bpsActions: [{
            type: Input
        }], bpsContent: [{
            type: Input
        }], bpsExtra: [{
            type: Input
        }], bpsNoFlex: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-list-item-no-flex']
        }], bpsDelete: [{
            type: Input
        }], ondelete: [{
            type: Output
        }], ondeletehover: [{
            type: Output
        }], hover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1saXN0L2Jwcy1saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtbGlzdC9icHMtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsV0FBVyxFQUNYLEtBQUssRUFLTCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7SUNqQnBFLHdCQUEwRDs7O0lBRjVELDBCQUFpRDtJQUMvQyw2R0FBa0Q7SUFDbEQsMkZBQTBEO0lBQzVELGlCQUFLOzs7O0lBRlUsZUFBc0I7SUFBdEIsdUNBQXNCO0lBQzlCLGVBQVc7SUFBWCxnQ0FBVzs7O0lBSHBCLDZCQUFnRTtJQUM5RCxzRkFHSztJQUNQLGlCQUFLOzs7SUFKZSxlQUFlO0lBQWYsMkNBQWU7OztJQURuQyxpRkFLSzs7O0lBTEEsd0ZBQTRCOzs7O0lBYWpDLDZCQUFnQztJQUM5QiwrQkFHeUM7SUFGcEMsd0xBQVMsZUFBQSxrQkFBVSxDQUFBLElBQUMscUxBQ04sZUFBQSxzQkFBYyxJQUFJLENBQUMsQ0FBQSxJQURiLHFMQUVOLGVBQUEsc0JBQWMsS0FBSyxDQUFDLENBQUEsSUFGZDtJQUd2QixtQkFBbUc7SUFBbkcsK0JBQW1HLFdBQUEsWUFBQTtJQUk3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VSxvQkFBb0I7b0VBQXBCLG9CQUFvQjt3Q0FJZCx3QkFBd0I7Ozs7Ozs7O1lDdkMzQyxzSEFPYztZQUNkLHNIQThCYztZQUNkLHNIQUljO1lBQ2QsdUZBUWU7OztZQVJBLGVBQTBCO1lBQTFCLDZDQUEwQixpQkFBQTs7O0FERGQ7SUFBZixZQUFZLEVBQUU7dURBQXdFO0FBQ3ZFO0lBQWYsWUFBWSxFQUFFO3VEQUFtQjt1RkFUaEMsb0JBQW9CO2NBWGhDLFNBQVM7MkJBQ0UsZ0NBQWdDLFlBQ2hDLGFBQWEsdUJBRUYsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO29CQUNKLGlDQUFpQyxFQUFFLGdCQUFnQjtpQkFDcEQ7b0pBTTBDLEtBQUs7a0JBQS9DLGVBQWU7bUJBQUMsd0JBQXdCO1lBQ2hDLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUMrRCxTQUFTO2tCQUE3RSxLQUFLOztrQkFBb0IsV0FBVzttQkFBQyw2QkFBNkI7WUFDMUMsU0FBUztrQkFBakMsS0FBSztZQUVJLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csS0FBSztrQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56RGlyZWN0aW9uVkhUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IEJwc0xpc3RJdGVtTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9icHMtbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtbGlzdC1pdGVtLCBbYnBzLWxpc3QtaXRlbV0nLFxuICBleHBvcnRBczogJ2Jwc0xpc3RJdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmJwcy1kZWxldGUtaWNvbi1ob3ZlcmVkXSc6ICdfb25EZWxldGVIb3ZlcidcclxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0xpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBfb25EZWxldGVIb3ZlciA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzTGlzdEl0ZW1NZXRhQ29tcG9uZW50KSBtZXRhcyE6IFF1ZXJ5TGlzdDxCcHNMaXN0SXRlbU1ldGFDb21wb25lbnQ+O1xuICBASW5wdXQoKSBicHNBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQElucHV0KCkgYnBzQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0V4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxpc3QtaXRlbS1uby1mbGV4JykgYnBzTm9GbGV4OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEZWxldGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb25kZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbmRlbGV0ZWhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgaG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBpdGVtTGF5b3V0OiBOekRpcmVjdGlvblZIVHlwZTtcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0JDogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBpc1ZlcnRpY2FsQW5kRXh0cmEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiAhIXRoaXMuYnBzRXh0cmE7XG4gIH1cblxuICBvbkRlbGV0ZUhvdmVyKGV2ZW50KSB7XG4gICAgdGhpcy5fb25EZWxldGVIb3ZlciA9IGV2ZW50O1xyXG4gICAgdGhpcy5vbmRlbGV0ZWhvdmVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cblxuICBvbkhvdmVyKGV2ZW50KSB7XHJcbiAgICB0aGlzLmhvdmVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cblxuICBvbkRlbGV0ZSgpIHtcbiAgICB0aGlzLm9uZGVsZXRlLmVtaXQoKTtcclxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFyZW50Q29tcDogQnBzTGlzdENvbXBvbmVudCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbScpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUxheW91dCQgPSB0aGlzLnBhcmVudENvbXAuaXRlbUxheW91dE5vdGlmeSQuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICB0aGlzLml0ZW1MYXlvdXQgPSB2YWw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pdGVtTGF5b3V0JCkge1xuICAgICAgdGhpcy5pdGVtTGF5b3V0JC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICNhY3Rpb25zVHBsPlxuICA8dWwgKm5nSWY9XCJicHNBY3Rpb25zPy5sZW5ndGggPiAwXCIgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLWFjdGlvblwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBicHNBY3Rpb25zOyBsZXQgbGFzdD1sYXN0O1wiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPGVtICpuZ0lmPVwiIWxhc3RcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tYWN0aW9uLXNwbGl0XCI+PC9lbT5cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjY29udGVudFRwbD5cbiAgPGRpdiBjbGFzcz1cImJwcy1saXN0LWl0ZW0tY29udGVudFwiXHJcbiAgICAgICAobW91c2VlbnRlcik9XCJvbkhvdmVyKHRydWUpXCJcclxuICAgICAgIChtb3VzZWxlYXZlKT1cIm9uSG92ZXIoZmFsc2UpXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNEZWxldGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJicHMtZGVsZXRlLWxpc3QtaWNvblwiXHJcbiAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZSgpXCJcclxuICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25EZWxldGVIb3Zlcih0cnVlKVwiXHJcbiAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uRGVsZXRlSG92ZXIoZmFsc2UpXCI+XHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAuNjA5XCIgaGVpZ2h0PVwiMTAuNjA5XCIgdmlld0JveD1cIjAgMCAxMC42MDkgMTAuNjA5XCI+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcblxyXG4gICAgICAgICAgICAucHJlZml4X19jbHMtMSB7XHJcbiAgICAgICAgICAgICAgZmlsbDogI2ZmZlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGVmcz5cclxuICAgICAgICA8ZyBpZD1cInByZWZpeF9fc3BzX3hfaWNvbl9kZWxldGVnbGFzc193aGl0ZVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg0NSA3OTkuOTMgLTk5Ni45MjgpXCI+XHJcbiAgICAgICAgICA8cmVjdCBpZD1cInByZWZpeF9fUmVjdGFuZ2xlXzE4ODFcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxM1wiIGNsYXNzPVwicHJlZml4X19jbHMtMVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxODgxXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk0NS43MzIgMjY3LjE0MilcIiAvPlxyXG4gICAgICAgICAgPHJlY3QgaWQ9XCJwcmVmaXhfX1JlY3RhbmdsZV8xODgyXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTNcIiBjbGFzcz1cInByZWZpeF9fY2xzLTFcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTg4MlwiIHJ4PVwiMVwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtOTAgNjA3LjQzNiAtMzMyLjc5NClcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc0NvbnRlbnRcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzQ29udGVudFwiPnt7IGJwc0NvbnRlbnQgfX08L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNzaW1wbGVUcGw+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc0V4dHJhXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvbnNUcGxcIj48L25nLXRlbXBsYXRlPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1ZlcnRpY2FsQW5kRXh0cmE7IGVsc2Ugc2ltcGxlVHBsXCI+XG4gIDxkaXYgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1haW5cIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRwbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvbnNUcGxcIj48L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tZXh0cmFcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzRXh0cmFcIj48L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19