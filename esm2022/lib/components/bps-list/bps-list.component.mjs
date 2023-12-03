import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "@angular/common";
import * as i3 from "../core/addon/string_template_outlet";
import * as i4 from "ng-zorro-antd/empty";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "ng-zorro-antd/spin";
function BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const index_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r9.bpsRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, item_r10, index_r11));
} }
function BpsListComponent_ng_container_0_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_Template, 2, 5, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.bpsDataSource);
} }
function BpsListComponent_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsListComponent_ng_container_0_ng_template_1_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r2.bpsDataSource.length > 0);
} }
function BpsListComponent_ng_container_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.bpsHeader);
} }
function BpsListComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.bpsHeader);
} }
function BpsListComponent_ng_container_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    i0.ɵɵstyleProp("min-height", 53, "px");
} }
function BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_ng_template_1_Template(rf, ctx) { }
function BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzSpan", ctx_r17.bpsGrid.span)("nzXs", ctx_r17.bpsGrid.xs)("nzSm", ctx_r17.bpsGrid.sm)("nzMd", ctx_r17.bpsGrid.md)("nzLg", ctx_r17.bpsGrid.lg)("nzXl", ctx_r17.bpsGrid.xl)("nzXXl", ctx_r17.bpsGrid.xxl);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r17.bpsRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(9, _c0, item_r18, index_r19));
} }
function BpsListComponent_ng_container_0_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_Template, 2, 12, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzGutter", ctx_r15.bpsGrid.gutter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.bpsDataSource);
} }
function BpsListComponent_ng_container_0_ng_container_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "nz-embed-empty", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzComponentName", "list")("specificContent", ctx_r16.bpsNoResult);
} }
function BpsListComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_container_5_div_1_Template, 1, 2, "div", 13);
    i0.ɵɵtemplate(2, BpsListComponent_ng_container_0_ng_container_5_div_2_Template, 2, 2, "div", 14);
    i0.ɵɵtemplate(3, BpsListComponent_ng_container_0_ng_container_5_div_3_Template, 2, 2, "div", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.bpsLoading && ctx_r4.bpsDataSource.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.bpsGrid)("ngIfElse", _r1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.bpsLoading && ctx_r4.bpsDataSource.length === 0);
} }
function BpsListComponent_ng_container_0_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r21.bpsFooter);
} }
function BpsListComponent_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.bpsFooter);
} }
function BpsListComponent_ng_container_0_ng_template_8_Template(rf, ctx) { }
function BpsListComponent_ng_container_0_div_9_ng_template_1_Template(rf, ctx) { }
function BpsListComponent_ng_container_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_div_9_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.bpsPagination);
} }
function BpsListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, BpsListComponent_ng_container_0_div_3_Template, 2, 1, "div", 2);
    i0.ɵɵelementStart(4, "nz-spin", 3);
    i0.ɵɵtemplate(5, BpsListComponent_ng_container_0_ng_container_5_Template, 4, 4, "ng-container", 0);
    i0.ɵɵprojection(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BpsListComponent_ng_container_0_div_7_Template, 2, 1, "div", 4);
    i0.ɵɵtemplate(8, BpsListComponent_ng_container_0_ng_template_8_Template, 0, 0, "ng-template", 5);
    i0.ɵɵtemplate(9, BpsListComponent_ng_container_0_div_9_Template, 2, 1, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsHeader);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpinning", ctx_r0.bpsLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsDataSource);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsFooter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.bpsLoadMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsPagination);
} }
const _c1 = ["*"];
export class BpsListComponent {
    _setClassMap() {
        const classMap = {
            ['bps-cmacs-custom-scrollbar']: true,
            [this.prefixCls]: true,
            [`bps-list-type-${this.bpsListType}`]: true,
            [`${this.prefixCls}-vertical`]: this.bpsItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.bpsSize === 'large',
            [`${this.prefixCls}-sm`]: this.bpsSize === 'small',
            [`${this.prefixCls}-split`]: this.bpsSplit,
            [`${this.prefixCls}-bordered`]: this.bpsBordered,
            [`${this.prefixCls}-loading`]: this.bpsLoading,
            [`${this.prefixCls}-grid`]: this.bpsGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.bpsLoadMore || this.bpsPagination || this.bpsFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.bpsBordered = false;
        this.bpsDisabled = false;
        this.bpsListType = 'variation1';
        this.bpsItemLayout = 'horizontal';
        this.bpsLoading = false;
        this.bpsSize = 'default';
        this.bpsSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.bpsItemLayout);
    }
    ngOnInit() {
        this._setClassMap();
    }
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.bpsItemLayout) {
            this.itemLayoutNotifySource.next(this.bpsItemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
    static { this.ɵfac = function BpsListComponent_Factory(t) { return new (t || BpsListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsListComponent, selectors: [["bps-list"], ["", "bps-list", ""]], inputs: { bpsDataSource: "bpsDataSource", bpsBordered: "bpsBordered", bpsDisabled: "bpsDisabled", bpsGrid: "bpsGrid", bpsListType: "bpsListType", bpsHeader: "bpsHeader", bpsFooter: "bpsFooter", bpsItemLayout: "bpsItemLayout", bpsRenderItem: "bpsRenderItem", bpsLoading: "bpsLoading", bpsLoadMore: "bpsLoadMore", bpsPagination: "bpsPagination", bpsSize: "bpsSize", bpsSplit: "bpsSplit", bpsNoResult: "bpsNoResult" }, exportAs: ["bpsList"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 1, vars: 1, consts: [[4, "ngIf"], ["itemsTpl", ""], ["class", "ant-list-header", 4, "ngIf"], [3, "nzSpinning"], ["class", "ant-list-footer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["class", "ant-list-pagination", 4, "ngIf"], ["class", "ant-list-items", 4, "ngIf"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-list-header"], [4, "nzStringTemplateOutlet"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], ["class", "ant-list-empty-text", 4, "ngIf"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [1, "ant-list-empty-text"], [3, "nzComponentName", "specificContent"], [1, "ant-list-footer"], [1, "ant-list-pagination"]], template: function BpsListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsListComponent_ng_container_0_Template, 10, 6, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.bpsDisabled);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzStringTemplateOutletDirective, i4.NzEmbedEmptyComponent, i5.NzColDirective, i5.NzRowDirective, i6.NzSpinComponent], styles: [".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:solid 1px #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}\n", "bps-list,bps-list nz-spin{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsBordered", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsSplit", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsListComponent, [{
        type: Component,
        args: [{ selector: 'bps-list, [bps-list]', exportAs: 'bpsList', providers: [NzUpdateHostClassService], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"!bpsDisabled\">\r\n  <ng-template #itemsTpl>\r\n    <div class=\"ant-list-items\" *ngIf=\"bpsDataSource.length > 0\">\r\n      <ng-container *ngFor=\"let item of bpsDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"bpsHeader\" class=\"ant-list-header\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  </div>\r\n  <nz-spin [nzSpinning]=\"bpsLoading\">\r\n    <ng-container *ngIf=\"bpsDataSource\">\r\n      <div *ngIf=\"bpsLoading && bpsDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n      <div *ngIf=\"bpsGrid; else itemsTpl\" nz-row [nzGutter]=\"bpsGrid.gutter\">\r\n        <div nz-col [nzSpan]=\"bpsGrid.span\" [nzXs]=\"bpsGrid.xs\" [nzSm]=\"bpsGrid.sm\" [nzMd]=\"bpsGrid.md\" [nzLg]=\"bpsGrid.lg\" [nzXl]=\"bpsGrid.xl\"\r\n             [nzXXl]=\"bpsGrid.xxl\" *ngFor=\"let item of bpsDataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!bpsLoading && bpsDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n        <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"bpsNoResult\"></nz-embed-empty>\r\n      </div>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </nz-spin>\r\n  <div *ngIf=\"bpsFooter\" class=\"ant-list-footer\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsFooter\">{{ bpsFooter }}</ng-container>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"bpsLoadMore\"></ng-template>\r\n  <div *ngIf=\"bpsPagination\" class=\"ant-list-pagination\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsPagination\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n", styles: [".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:solid 1px #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}\n", "bps-list,bps-list nz-spin{display:block}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }]; }, { bpsDataSource: [{
            type: Input
        }], bpsBordered: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsGrid: [{
            type: Input
        }], bpsListType: [{
            type: Input
        }], bpsHeader: [{
            type: Input
        }], bpsFooter: [{
            type: Input
        }], bpsItemLayout: [{
            type: Input
        }], bpsRenderItem: [{
            type: Input
        }], bpsLoading: [{
            type: Input
        }], bpsLoadMore: [{
            type: Input
        }], bpsPagination: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsSplit: [{
            type: Input
        }], bpsNoResult: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtbGlzdC9icHMtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1saXN0L2Jwcy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxLQUFLLEVBTUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7Ozs7OztJQ2JoRiw2QkFBb0U7SUFDbEUsb0lBQTRIO0lBQzlILDBCQUFlOzs7OztJQURBLGVBQWtDO0lBQWxDLHVEQUFrQyw0RUFBQTs7O0lBRm5ELDhCQUE2RDtJQUMzRCxzSEFFZTtJQUNqQixpQkFBTTs7O0lBSDJCLGVBQWtCO0lBQWxCLDhDQUFrQjs7O0lBRG5ELDhGQUlNOzs7SUFKdUIsc0RBQThCOzs7SUFPM0QsNkJBQWtEO0lBQUEsWUFBZTtJQUFBLDBCQUFlOzs7SUFBOUIsZUFBZTtJQUFmLHVDQUFlOzs7SUFEbkUsK0JBQStDO0lBQzdDLHlHQUFnRjtJQUNsRixpQkFBTTs7O0lBRFcsZUFBaUM7SUFBakMseURBQWlDOzs7SUFJOUMsc0JBQXVGOztJQUFqQyxzQ0FBMEI7Ozs7SUFFOUUsK0JBQ2lGO0lBQy9FLDRIQUE0SDtJQUM5SCxpQkFBTTs7Ozs7SUFITSw2Q0FBdUIsNEJBQUEsNEJBQUEs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QkFBd0IsQ0FBQyx1QkFDaEIsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO29HQWN0QyxhQUFhO2tCQUFyQixLQUFLO1lBRW1CLFdBQVc7a0JBQW5DLEtBQUs7WUFFbUIsV0FBVztrQkFBbkMsS0FBSztZQUVHLE9BQU87a0JBQWYsS0FBSztZQUVHLFdBQVc7a0JBQW5CLEtBQUs7WUFFRyxTQUFTO2tCQUFqQixLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUVHLGFBQWE7a0JBQXJCLEtBQUs7WUFFRyxhQUFhO2tCQUFyQixLQUFLO1lBRW1CLFVBQVU7a0JBQWxDLEtBQUs7WUFFRyxXQUFXO2tCQUFuQixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUVHLE9BQU87a0JBQWYsS0FBSztZQUVtQixRQUFRO2tCQUFoQyxLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpMaXN0R3JpZCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbGlzdCc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE56RGlyZWN0aW9uVkhUeXBlLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBCcHNMaXN0VHlwZSA9ICd2YXJpYXRpb24xJyB8ICd2YXJpYXRpb24yJyB8ICd2YXJpYXRpb24zJyB8ICd2YXJpYXRpb240JyB8ICd2YXJpYXRpb241JyB8ICd2YXJpYXRpb242JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWxpc3QsIFticHMtbGlzdF0nLFxyXG4gIGV4cG9ydEFzOiAnYnBzTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGJwcy1saXN0LFxyXG4gICAgICBicHMtbGlzdCBuei1zcGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgYnBzRGF0YVNvdXJjZTogYW55W107XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNCb3JkZXJlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYnBzR3JpZDogTnpMaXN0R3JpZDtcclxuXHJcbiAgQElucHV0KCkgYnBzTGlzdFR5cGU6IEJwc0xpc3RUeXBlID0gJ3ZhcmlhdGlvbjEnO1xyXG5cclxuICBASW5wdXQoKSBicHNIZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBicHNGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBicHNJdGVtTGF5b3V0OiBOekRpcmVjdGlvblZIVHlwZSA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgQElucHV0KCkgYnBzUmVuZGVySXRlbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGJwc0xvYWRNb3JlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgYnBzUGFnaW5hdGlvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGJwc1NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTcGxpdCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIGJwc05vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHN0eWxlc1xyXG5cclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtbGlzdCc7XHJcblxyXG4gIHByaXZhdGUgX3NldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFsnYnBzLWNtYWNzLWN1c3RvbS1zY3JvbGxiYXInXTogdHJ1ZSxcclxuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcclxuICAgICAgW2BicHMtbGlzdC10eXBlLSR7dGhpcy5icHNMaXN0VHlwZX1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGBdOiB0aGlzLmJwc0l0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGdgXTogdGhpcy5icHNTaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNtYF06IHRoaXMuYnBzU2l6ZSA9PT0gJ3NtYWxsJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zcGxpdGBdOiB0aGlzLmJwc1NwbGl0LFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJvcmRlcmVkYF06IHRoaXMuYnBzQm9yZGVyZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLmJwc0xvYWRpbmcsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZ3JpZGBdOiB0aGlzLmJwc0dyaWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc29tZXRoaW5nLWFmdGVyLWxhc3QtaXRlbWBdOiAhISh0aGlzLmJwc0xvYWRNb3JlIHx8IHRoaXMuYnBzUGFnaW5hdGlvbiB8fCB0aGlzLmJwc0Zvb3RlcilcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBwcml2YXRlIGl0ZW1MYXlvdXROb3RpZnlTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RGlyZWN0aW9uVkhUeXBlPih0aGlzLmJwc0l0ZW1MYXlvdXQpO1xyXG5cclxuICBnZXQgaXRlbUxheW91dE5vdGlmeSQoKTogT2JzZXJ2YWJsZTxOekRpcmVjdGlvblZIVHlwZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xyXG4gICAgaWYgKGNoYW5nZXMuYnBzSXRlbUxheW91dCkge1xyXG4gICAgICB0aGlzLml0ZW1MYXlvdXROb3RpZnlTb3VyY2UubmV4dCh0aGlzLmJwc0l0ZW1MYXlvdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1MYXlvdXROb3RpZnlTb3VyY2UudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFicHNEaXNhYmxlZFwiPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaXRlbXNUcGw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWxpc3QtaXRlbXNcIiAqbmdJZj1cImJwc0RhdGFTb3VyY2UubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGJwc0RhdGFTb3VyY2U7IGxldCBpbmRleCA9IGluZGV4XCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc1JlbmRlckl0ZW1cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpbmRleCB9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxkaXYgKm5nSWY9XCJicHNIZWFkZXJcIiBjbGFzcz1cImFudC1saXN0LWhlYWRlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0hlYWRlclwiPnt7IGJwc0hlYWRlciB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxuei1zcGluIFtuelNwaW5uaW5nXT1cImJwc0xvYWRpbmdcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNEYXRhU291cmNlXCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJicHNMb2FkaW5nICYmIGJwc0RhdGFTb3VyY2UubGVuZ3RoID09PSAwXCIgW3N0eWxlLm1pbi1oZWlnaHQucHhdPVwiNTNcIj48L2Rpdj5cclxuICAgICAgPGRpdiAqbmdJZj1cImJwc0dyaWQ7IGVsc2UgaXRlbXNUcGxcIiBuei1yb3cgW256R3V0dGVyXT1cImJwc0dyaWQuZ3V0dGVyXCI+XHJcbiAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCJicHNHcmlkLnNwYW5cIiBbbnpYc109XCJicHNHcmlkLnhzXCIgW256U21dPVwiYnBzR3JpZC5zbVwiIFtuek1kXT1cImJwc0dyaWQubWRcIiBbbnpMZ109XCJicHNHcmlkLmxnXCIgW256WGxdPVwiYnBzR3JpZC54bFwiXHJcbiAgICAgICAgICAgICBbbnpYWGxdPVwiYnBzR3JpZC54eGxcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBicHNEYXRhU291cmNlOyBsZXQgaW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc1JlbmRlckl0ZW1cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0sIGluZGV4OiBpbmRleCB9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCIhYnBzTG9hZGluZyAmJiBicHNEYXRhU291cmNlLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiYW50LWxpc3QtZW1wdHktdGV4dFwiPlxyXG4gICAgICAgIDxuei1lbWJlZC1lbXB0eSBbbnpDb21wb25lbnROYW1lXT1cIidsaXN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwiYnBzTm9SZXN1bHRcIj48L256LWVtYmVkLWVtcHR5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvbnotc3Bpbj5cclxuICA8ZGl2ICpuZ0lmPVwiYnBzRm9vdGVyXCIgY2xhc3M9XCJhbnQtbGlzdC1mb290ZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNGb290ZXJcIj57eyBicHNGb290ZXIgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzTG9hZE1vcmVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDxkaXYgKm5nSWY9XCJicHNQYWdpbmF0aW9uXCIgY2xhc3M9XCJhbnQtbGlzdC1wYWdpbmF0aW9uXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzUGFnaW5hdGlvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=