import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Output, ViewEncapsulation } from '@angular/core';
import { collapseMotion } from 'ng-zorro-antd/core/animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { WithConfig } from '../bps-tree/tree/config.service';
import * as i0 from "@angular/core";
import * as i1 from "../bps-tree/tree/config.service";
import * as i2 from "./bps-collapse.component";
import * as i3 from "@angular/common";
import * as i4 from "../core/addon/string_template_outlet";
function BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 9)(1, "defs")(2, "style");
    i0.ɵɵtext(3, " .prefix__cls-1 { fill: #fff } ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "g", 10);
    i0.ɵɵelement(5, "rect", 11)(6, "rect", 12);
    i0.ɵɵelementEnd()();
} }
function BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 9)(1, "defs")(2, "style");
    i0.ɵɵtext(3, " .prefix__cls-d1 { fill: #666 } ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "g", 13);
    i0.ɵɵelement(5, "rect", 14)(6, "rect", 15);
    i0.ɵɵelementEnd()();
} }
function BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 16);
    i0.ɵɵelement(1, "rect", 17);
    i0.ɵɵelementEnd();
} }
function BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 16);
    i0.ɵɵelement(1, "rect", 18);
    i0.ɵɵelementEnd();
} }
function BpsCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵtemplate(2, BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_2_Template, 7, 0, "svg", 7);
    i0.ɵɵtemplate(3, BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_3_Template, 7, 0, "svg", 7);
    i0.ɵɵtemplate(4, BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_4_Template, 2, 0, "svg", 8);
    i0.ɵɵtemplate(5, BpsCollapsePanelComponent_ng_container_1_ng_container_1__svg_svg_5_Template, 2, 0, "svg", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-collapse-panel-invalid", ctx_r3.bpsValid !== null && !ctx_r3.bpsValid)("bps-collapse-panel-valid", ctx_r3.bpsValid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.bpsActive && !ctx_r3.bpsDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.bpsActive && ctx_r3.bpsDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.bpsActive && !ctx_r3.bpsDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.bpsActive && ctx_r3.bpsDisabled);
} }
function BpsCollapsePanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsCollapsePanelComponent_ng_container_1_ng_container_1_Template, 6, 8, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsExpandedIcon);
} }
function BpsCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.bpsHeader);
} }
function BpsCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r8.bpsExtra);
} }
function BpsCollapsePanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, BpsCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.bpsExtra);
} }
const _c0 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'collapsePanel';
export class BpsCollapsePanelComponent {
    clickHeader() {
        if (!this.bpsDisabled) {
            this.bpsCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    constructor(nzConfigService, cdr, bpsCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.bpsCollapseComponent = bpsCollapseComponent;
        this.bpsActive = false;
        this.bpsDisabled = false;
        this.bpsValid = null;
        this.bpsActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    ngOnInit() {
        this.bpsCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.bpsCollapseComponent.removePanel(this);
    }
    static { this.ɵfac = function BpsCollapsePanelComponent_Factory(t) { return new (t || BpsCollapsePanelComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.BpsCollapseComponent, 1), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsCollapsePanelComponent, selectors: [["bps-collapse-panel"]], hostVars: 6, hostBindings: function BpsCollapsePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-collapse-no-arrow", !ctx.bpsShowArrow)("ant-collapse-item-active", ctx.bpsActive)("ant-collapse-item-disabled", ctx.bpsDisabled);
        } }, inputs: { bpsActive: "bpsActive", bpsDisabled: "bpsDisabled", bpsValid: "bpsValid", bpsShowArrow: "bpsShowArrow", bpsExtra: "bpsExtra", bpsHeader: "bpsHeader", bpsExpandedIcon: "bpsExpandedIcon" }, outputs: { bpsActiveChange: "bpsActiveChange" }, exportAs: ["bpsCollapsePanel"], ngContentSelectors: _c0, decls: 7, vars: 7, consts: [["role", "tab", 1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], [1, "ant-collapse-arrow", "bps-status-indicator"], ["class", "ant-collapse-arrow", "xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 12 12", 4, "ngIf"], ["class", "ant-collapse-arrow", "xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "2.25", "viewBox", "0 0 12 2.25", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "12", "viewBox", "0 0 12 12", 1, "ant-collapse-arrow"], ["id", "prefix__sps_plus_icon_enabled", "transform", "translate(-955 -253)"], ["id", "prefix__Rectangle_411", "width", "2.25", "height", "12", "data-name", "Rectangle 411", "rx", "1.125", "transform", "translate(959.875 253)", 1, "prefix__cls-1"], ["id", "prefix__Rectangle_412", "width", "2.25", "height", "12", "data-name", "Rectangle 412", "rx", "1.125", "transform", "rotate(90 354.563 612.438)", 1, "prefix__cls-1"], ["id", "prefix__sps_plus_icon_disabled", "transform", "translate(-955 -253)"], ["id", "prefix__Rectangle_411", "width", "2.25", "height", "12", "data-name", "Rectangle 411", "rx", "1.125", "transform", "translate(959.875 253)", 1, "prefix__cls-d1"], ["id", "prefix__Rectangle_412", "width", "2.25", "height", "12", "data-name", "Rectangle 412", "rx", "1.125", "transform", "rotate(90 354.563 612.438)", 1, "prefix__cls-d1"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "2.25", "viewBox", "0 0 12 2.25", 1, "ant-collapse-arrow"], ["id", "prefix__sps_minus_icon_enabled", "width", "2.25", "height", "12", "rx", "1.125", "transform", "rotate(90 6 6)", 2, "fill", "#fff"], ["id", "prefix__sps_minus_icon_disabled", "width", "2.25", "height", "12", "rx", "1.125", "transform", "rotate(90 6 6)", 2, "fill", "#666"], [1, "ant-collapse-extra"]], template: function BpsCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function BpsCollapsePanelComponent_Template_div_click_0_listener() { return ctx.clickHeader(); });
            i0.ɵɵtemplate(1, BpsCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, BpsCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, BpsCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵattribute("aria-expanded", ctx.bpsActive);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsShowArrow);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.bpsHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsExtra);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-collapse-content-active", ctx.bpsActive);
            i0.ɵɵproperty("@collapseMotion", ctx.bpsActive ? "expanded" : "hidden");
        } }, dependencies: [i3.NgIf, i4.NzStringTemplateOutletDirective], styles: [".ant-collapse>.ant-collapse-item{border-bottom:unset!important;background-color:transparent!important;margin-bottom:unset!important;border-radius:unset!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{margin-right:0}.ant-collapse>.ant-collapse-item>.ant-collapse-header{padding:0 15px!important;color:#fff!important;line-height:20px!important;font-size:12px!important;background-color:#363636!important;border-radius:10px!important;margin-bottom:10px!important}.ant-collapse-content{color:#fff!important;font-size:12px!important;background-color:transparent!important;border-top:unset!important}.ant-collapse-content>.ant-collapse-content-box{padding:0 15px 8px!important}.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:10px!important}.ant-collapse-arrow.bps-status-indicator{width:4px!important;height:4px!important;background-color:#666!important;border-radius:100px!important;right:45px!important;left:unset!important;top:8px;position:absolute}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-valid{background-color:#00a2d1!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-invalid{background-color:#f18700!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:not(.bps-status-indicator){right:15px!important;left:unset!important;position:absolute;top:50%;transform:translateY(-50%)}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:hover{background-color:#474747!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:focus{box-shadow:0 0 8px #00a2d1!important}.ant-collapse>.ant-collapse-item.ant-collapse-item-disabled>.ant-collapse-header{color:#666!important}\n", "bps-collapse-panel{display:block}\n"], encapsulation: 2, data: { animation: [collapseMotion] }, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsActive", void 0);
__decorate([
    InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsDisabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsShowArrow", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsCollapsePanelComponent, [{
        type: Component,
        args: [{ selector: 'bps-collapse-panel', exportAs: 'bpsCollapsePanel', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [collapseMotion], host: {
                    '[class.ant-collapse-no-arrow]': '!bpsShowArrow',
                    '[class.ant-collapse-item-active]': 'bpsActive',
                    '[class.ant-collapse-item-disabled]': 'bpsDisabled'
                }, template: "<div role=\"tab\" [attr.aria-expanded]=\"bpsActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <ng-container *ngIf=\"bpsShowArrow\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExpandedIcon\">\r\n      <div class=\"ant-collapse-arrow bps-status-indicator\"\r\n           [class.bps-collapse-panel-invalid]=\"bpsValid !== null && !bpsValid\"\r\n           [class.bps-collapse-panel-valid]=\"bpsValid\"></div>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_enabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-d1 {\r\n              fill: #666\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_disabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_enabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#fff\" />\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_disabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#666\" />\r\n      </svg>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\"\r\n  [class.ant-collapse-content-active]=\"bpsActive\"\r\n  [@collapseMotion]=\"bpsActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [".ant-collapse>.ant-collapse-item{border-bottom:unset!important;background-color:transparent!important;margin-bottom:unset!important;border-radius:unset!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{margin-right:0}.ant-collapse>.ant-collapse-item>.ant-collapse-header{padding:0 15px!important;color:#fff!important;line-height:20px!important;font-size:12px!important;background-color:#363636!important;border-radius:10px!important;margin-bottom:10px!important}.ant-collapse-content{color:#fff!important;font-size:12px!important;background-color:transparent!important;border-top:unset!important}.ant-collapse-content>.ant-collapse-content-box{padding:0 15px 8px!important}.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:10px!important}.ant-collapse-arrow.bps-status-indicator{width:4px!important;height:4px!important;background-color:#666!important;border-radius:100px!important;right:45px!important;left:unset!important;top:8px;position:absolute}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-valid{background-color:#00a2d1!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-invalid{background-color:#f18700!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:not(.bps-status-indicator){right:15px!important;left:unset!important;position:absolute;top:50%;transform:translateY(-50%)}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:hover{background-color:#474747!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:focus{box-shadow:0 0 8px #00a2d1!important}.ant-collapse>.ant-collapse-item.ant-collapse-item-disabled>.ant-collapse-header{color:#666!important}\n", "bps-collapse-panel{display:block}\n"] }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i2.BpsCollapseComponent, decorators: [{
                type: Host
            }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { bpsActive: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsValid: [{
            type: Input
        }], bpsShowArrow: [{
            type: Input
        }], bpsExtra: [{
            type: Input
        }], bpsHeader: [{
            type: Input
        }], bpsExpandedIcon: [{
            type: Input
        }], bpsActiveChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNvbGxhcHNlL2Jwcy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0lDWHhFLG1CQUFpSjtJQUFqSiw4QkFBaUosV0FBQSxZQUFBO0lBSTNJLCtDQUdGO0lBQUEsaUJBQVEsRUFBQTtJQUVWLDZCQUF1RTtJQUNyRSwyQkFBMEosZUFBQTtJQUU1SixpQkFBSSxFQUFBOzs7SUFFTixtQkFBZ0o7SUFBaEosOEJBQWdKLFdBQUEsWUFBQTtJQUkxSSxnREFHRjtJQUFBLGlCQUFRLEVBQUE7SUFFViw2QkFBd0U7SUFDdEUsMkJBQTJKLGVBQUE7SUFFN0osaUJBQUksRUFBQTs7O0lBRU4sbUJBQW9KO0lBQXBKLCtCQUFvSjtJQUNsSiwyQkFBNkg7SUFDL0gsaUJBQU07OztJQUNOLG1CQUFtSjtJQUFuSiwrQkFBbUo7SUFDakosMkJBQThIO0lBQ2hJLGlCQUFNOzs7SUFyQ1IsNkJBQXdEO0lBQ3RELHlCQUV1RDtJQUN2RCw2R0FhTTtJQUNOLDZHQWFNO0lBQ04sNkdBRU07SUFDTiw2R0FFTTtJQUNSLDBCQUFlOzs7SUFwQ1IsZUFBbUU7SUFBbkUsMEZBQW1FLDZDQUFBO0lBRXZDLGVBQWdDO0lBQWhDLCtEQUFnQztJQWNoQyxlQUErQjtJQUEvQiw4REFBK0I7SUFjL0IsZUFBK0I7SUFBL0IsOERBQStCO0lBRy9CLGVBQThCO0lBQTlCLDZEQUE4Qjs7O0lBcENuRSw2QkFBbUM7SUFDakMsMkdBc0NlO0lBQ2pCLDBCQUFlOzs7SUF2Q0UsZUFBdUM7SUFBdkMsK0RBQXVDOzs7SUF3Q3hELDZCQUFrRDtJQUFBLFlBQWU7SUFBQSwwQkFBZTs7O0lBQTlCLGVBQWU7SUFBZixzQ0FBZTs7O0lBRS9ELDZCQUFpRDtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7O0lBRGpFLCtCQUFpRDtJQUMvQyxrR0FBOEU7SUFDaEYsaUJBQU07OztJQURXLGVBQWdDO0lBQWhDLHdEQUFnQzs7O0FEdkJuRCxNQUFNLHdCQUF3QixHQUFHLGVBQWUsQ0FBQztBQXVCakQsTUFBTSxPQUFPLHlCQUF5QjtJQVVwQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFDUyxlQUFnQyxFQUMvQixHQUFzQixFQUNkLG9CQUEwQyxFQUMxRCxVQUFzQixFQUN0QixRQUFtQjtRQUpaLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUF0Qm5DLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUtOLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQW1CL0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzBGQXBDVSx5QkFBeUI7b0VBQXpCLHlCQUF5Qjs7OztZQzVDdEMsOEJBQXFHO1lBQXhCLG1HQUFTLGlCQUFhLElBQUM7WUFDbEcsNEZBd0NlO1lBQ2YsNEZBQWdGO1lBQ2hGLDBFQUVNO1lBQ1IsaUJBQU07WUFDTiw4QkFFeUQsYUFBQTtZQUVyRCxrQkFBeUI7WUFDM0IsaUJBQU0sRUFBQTs7WUFwRFEsOENBQWdDO1lBQy9CLGVBQWtCO1lBQWxCLHVDQUFrQjtZQXlDbEIsZUFBaUM7WUFBakMsc0RBQWlDO1lBQ2YsZUFBYztZQUFkLG1DQUFjO1lBSy9DLGVBQStDO1lBQS9DLDREQUErQztZQUMvQyx1RUFBc0Q7aXFFRHBCMUMsQ0FBQyxjQUFjLENBQUM7O0FBZ0JIO0lBQWYsWUFBWSxFQUFFOzREQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTs4REFBcUI7QUFFd0I7SUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztJQUFFLFlBQVksRUFBRTsrREFBdUI7dUZBSmhGLHlCQUF5QjtjQXJCckMsU0FBUzsyQkFDRSxvQkFBb0IsWUFDcEIsa0JBQWtCLG1CQUVYLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FDekIsQ0FBQyxjQUFjLENBQUMsUUFTdEI7b0JBQ0osK0JBQStCLEVBQUUsZUFBZTtvQkFDaEQsa0NBQWtDLEVBQUUsV0FBVztvQkFDL0Msb0NBQW9DLEVBQUUsYUFBYTtpQkFDcEQ7O3NCQXlCRSxJQUFJO3lFQXRCa0IsU0FBUztrQkFBakMsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUMrRCxZQUFZO2tCQUFoRixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ2EsZUFBZTtrQkFBakMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbGxhcHNlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnLi4vYnBzLXRyZWUvdHJlZS9jb25maWcuc2VydmljZSc7XHJcblxuaW1wb3J0IHsgQnBzQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY29sbGFwc2VQYW5lbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1jb2xsYXBzZS1wYW5lbCcsXG4gIGV4cG9ydEFzOiAnYnBzQ29sbGFwc2VQYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlTW90aW9uXSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYnBzLWNvbGxhcHNlLXBhbmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBzdHlsZVVybHM6IFsnLi9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmNzcyddLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2Utbm8tYXJyb3ddJzogJyFicHNTaG93QXJyb3cnLFxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tYWN0aXZlXSc6ICdicHNBY3RpdmUnLFxuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tZGlzYWJsZWRdJzogJ2Jwc0Rpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJwc1ZhbGlkID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0Fycm93OiBib29sZWFuO1xuICBASW5wdXQoKSBicHNFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0hlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc0V4cGFuZGVkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2xpY2tIZWFkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJwc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmJwc0NvbGxhcHNlQ29tcG9uZW50LmNsaWNrKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIGJwc0NvbGxhcHNlQ29tcG9uZW50OiBCcHNDb2xsYXBzZUNvbXBvbmVudCxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNvbGxhcHNlLWl0ZW0nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnBzQ29sbGFwc2VDb21wb25lbnQuYWRkUGFuZWwodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmJwc0NvbGxhcHNlQ29tcG9uZW50LnJlbW92ZVBhbmVsKHRoaXMpO1xuICB9XG59XG4iLCI8ZGl2IHJvbGU9XCJ0YWJcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImJwc0FjdGl2ZVwiIGNsYXNzPVwiYW50LWNvbGxhcHNlLWhlYWRlclwiIChjbGljayk9XCJjbGlja0hlYWRlcigpXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc1Nob3dBcnJvd1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0V4cGFuZGVkSWNvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbGxhcHNlLWFycm93IGJwcy1zdGF0dXMtaW5kaWNhdG9yXCJcclxuICAgICAgICAgICBbY2xhc3MuYnBzLWNvbGxhcHNlLXBhbmVsLWludmFsaWRdPVwiYnBzVmFsaWQgIT09IG51bGwgJiYgIWJwc1ZhbGlkXCJcclxuICAgICAgICAgICBbY2xhc3MuYnBzLWNvbGxhcHNlLXBhbmVsLXZhbGlkXT1cImJwc1ZhbGlkXCI+PC9kaXY+XHJcbiAgICAgIDxzdmcgY2xhc3M9XCJhbnQtY29sbGFwc2UtYXJyb3dcIiAqbmdJZj1cIiFicHNBY3RpdmUgJiYgIWJwc0Rpc2FibGVkXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIj5cclxuICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgIDxzdHlsZT5cclxuXHJcbiAgICAgICAgICAgIC5wcmVmaXhfX2Nscy0xIHtcclxuICAgICAgICAgICAgICBmaWxsOiAjZmZmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgIDxnIGlkPVwicHJlZml4X19zcHNfcGx1c19pY29uX2VuYWJsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTk1NSAtMjUzKVwiPlxyXG4gICAgICAgICAgPHJlY3QgaWQ9XCJwcmVmaXhfX1JlY3RhbmdsZV80MTFcIiB3aWR0aD1cIjIuMjVcIiBoZWlnaHQ9XCIxMlwiIGNsYXNzPVwicHJlZml4X19jbHMtMVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSA0MTFcIiByeD1cIjEuMTI1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk1OS44NzUgMjUzKVwiIC8+XHJcbiAgICAgICAgICA8cmVjdCBpZD1cInByZWZpeF9fUmVjdGFuZ2xlXzQxMlwiIHdpZHRoPVwiMi4yNVwiIGhlaWdodD1cIjEyXCIgY2xhc3M9XCJwcmVmaXhfX2Nscy0xXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDQxMlwiIHJ4PVwiMS4xMjVcIiB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgMzU0LjU2MyA2MTIuNDM4KVwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICAgPHN2ZyBjbGFzcz1cImFudC1jb2xsYXBzZS1hcnJvd1wiICpuZ0lmPVwiIWJwc0FjdGl2ZSAmJiBicHNEaXNhYmxlZFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCI+XHJcbiAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICA8c3R5bGU+XHJcblxyXG4gICAgICAgICAgICAucHJlZml4X19jbHMtZDEge1xyXG4gICAgICAgICAgICAgIGZpbGw6ICM2NjZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgPGcgaWQ9XCJwcmVmaXhfX3Nwc19wbHVzX2ljb25fZGlzYWJsZWRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTk1NSAtMjUzKVwiPlxyXG4gICAgICAgICAgPHJlY3QgaWQ9XCJwcmVmaXhfX1JlY3RhbmdsZV80MTFcIiB3aWR0aD1cIjIuMjVcIiBoZWlnaHQ9XCIxMlwiIGNsYXNzPVwicHJlZml4X19jbHMtZDFcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNDExXCIgcng9XCIxLjEyNVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NTkuODc1IDI1MylcIiAvPlxyXG4gICAgICAgICAgPHJlY3QgaWQ9XCJwcmVmaXhfX1JlY3RhbmdsZV80MTJcIiB3aWR0aD1cIjIuMjVcIiBoZWlnaHQ9XCIxMlwiIGNsYXNzPVwicHJlZml4X19jbHMtZDFcIiBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgNDEyXCIgcng9XCIxLjEyNVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCAzNTQuNTYzIDYxMi40MzgpXCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8c3ZnIGNsYXNzPVwiYW50LWNvbGxhcHNlLWFycm93XCIgKm5nSWY9XCJicHNBY3RpdmUgJiYgIWJwc0Rpc2FibGVkXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyLjI1XCIgdmlld0JveD1cIjAgMCAxMiAyLjI1XCI+XHJcbiAgICAgICAgPHJlY3QgaWQ9XCJwcmVmaXhfX3Nwc19taW51c19pY29uX2VuYWJsZWRcIiB3aWR0aD1cIjIuMjVcIiBoZWlnaHQ9XCIxMlwiIHJ4PVwiMS4xMjVcIiB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgNiA2KVwiIHN0eWxlPVwiZmlsbDojZmZmXCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgIDxzdmcgY2xhc3M9XCJhbnQtY29sbGFwc2UtYXJyb3dcIiAqbmdJZj1cImJwc0FjdGl2ZSAmJiBicHNEaXNhYmxlZFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMi4yNVwiIHZpZXdCb3g9XCIwIDAgMTIgMi4yNVwiPlxyXG4gICAgICAgIDxyZWN0IGlkPVwicHJlZml4X19zcHNfbWludXNfaWNvbl9kaXNhYmxlZFwiIHdpZHRoPVwiMi4yNVwiIGhlaWdodD1cIjEyXCIgcng9XCIxLjEyNVwiIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA2IDYpXCIgc3R5bGU9XCJmaWxsOiM2NjZcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNIZWFkZXJcIj57eyBicHNIZWFkZXIgfX08L25nLWNvbnRhaW5lcj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWNvbGxhcHNlLWV4dHJhXCIgKm5nSWY9XCJicHNFeHRyYVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0V4dHJhXCI+e3sgYnBzRXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJhbnQtY29sbGFwc2UtY29udGVudFwiXHJcbiAgW2NsYXNzLmFudC1jb2xsYXBzZS1jb250ZW50LWFjdGl2ZV09XCJicHNBY3RpdmVcIlxyXG4gIFtAY29sbGFwc2VNb3Rpb25dPVwiYnBzQWN0aXZlID8gJ2V4cGFuZGVkJyA6ICdoaWRkZW4nIFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtY29sbGFwc2UtY29udGVudC1ib3hcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==