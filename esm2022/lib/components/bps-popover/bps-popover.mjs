import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsToolTipComponent } from '../bps-tooltip/tooltip';
import { isTooltipEmpty, NzTooltipBaseDirective } from './../bps-tooltip/base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
import * as i5 from "../core/addon/string_template_outlet";
import * as i6 from "@angular/cdk/overlay";
import * as i7 from "ng-zorro-antd/core/overlay";
function BpsPopoverComponent_ng_template_0_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.bpsTitle);
} }
function BpsPopoverComponent_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, BpsPopoverComponent_ng_template_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.bpsTitle);
} }
function BpsPopoverComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.bpsContent);
} }
function BpsPopoverComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div");
    i0.ɵɵelement(3, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4)(5, "div");
    i0.ɵɵtemplate(6, BpsPopoverComponent_ng_template_0_div_6_Template, 2, 1, "div", 5);
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtemplate(8, BpsPopoverComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.bpsOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("ant-popover-arrow bps-popover-arrow-", ctx_r1.bpsPopoverType, "");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-popover-arrow-content bps-popover-inner-", ctx_r1.bpsPopoverType, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.bpsTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-popover-inner-content bps-popover-inner-content-", ctx_r1.bpsPopoverType, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.bpsContent);
} }
const NZ_CONFIG_MODULE_NAME = 'popover';
export class BpsPopoverDirective extends NzTooltipBaseDirective {
    getProxyPropertyMap() {
        return {
            bpsPopoverBackdrop: ['bpsBackdrop', () => this.bpsPopoverBackdrop],
            ...super.getProxyPropertyMap()
        };
    }
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.trigger = 'hover';
        this.placement = 'top';
        this.popoverType = 'variation_1';
        this.bpsPopoverBackdrop = false;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(BpsPopoverComponent);
    }
    static { this.ɵfac = function BpsPopoverDirective_Factory(t) { return new (t || BpsPopoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9), i0.ɵɵdirectiveInject(i2.NzConfigService)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsPopoverDirective, selectors: [["", "bps-popover", ""]], hostVars: 2, hostBindings: function BpsPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-popover-open", ctx.visible);
        } }, inputs: { arrowPointAtCenter: ["bpsPopoverArrowPointAtCenter", "arrowPointAtCenter"], title: ["bpsPopoverTitle", "title"], content: ["bpsPopoverContent", "content"], directiveTitle: ["bps-popover", "directiveTitle"], trigger: ["bpsPopoverTrigger", "trigger"], placement: ["bpsPopoverPlacement", "placement"], origin: ["bpsPopoverOrigin", "origin"], visible: ["bpsPopoverVisible", "visible"], mouseEnterDelay: ["bpsPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["bpsPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["bpsPopoverOverlayClassName", "overlayClassName"], overlayStyle: ["bpsPopoverOverlayStyle", "overlayStyle"], popoverType: ["bpsPopoverType", "popoverType"], bpsPopoverBackdrop: "bpsPopoverBackdrop" }, outputs: { visibleChange: "bpsPopoverVisibleChange" }, exportAs: ["bpsPopover"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
__decorate([
    InputBoolean()
], BpsPopoverDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    WithConfig()
], BpsPopoverDirective.prototype, "bpsPopoverBackdrop", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[bps-popover]',
                exportAs: 'bpsPopover',
                host: {
                    '[class.ant-popover-open]': 'visible'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i2.NzConfigService }]; }, { arrowPointAtCenter: [{
            type: Input,
            args: ['bpsPopoverArrowPointAtCenter']
        }], title: [{
            type: Input,
            args: ['bpsPopoverTitle']
        }], content: [{
            type: Input,
            args: ['bpsPopoverContent']
        }], directiveTitle: [{
            type: Input,
            args: ['bps-popover']
        }], trigger: [{
            type: Input,
            args: ['bpsPopoverTrigger']
        }], placement: [{
            type: Input,
            args: ['bpsPopoverPlacement']
        }], origin: [{
            type: Input,
            args: ['bpsPopoverOrigin']
        }], visible: [{
            type: Input,
            args: ['bpsPopoverVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['bpsPopoverMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['bpsPopoverMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['bpsPopoverOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['bpsPopoverOverlayStyle']
        }], popoverType: [{
            type: Input,
            args: ['bpsPopoverType']
        }], bpsPopoverBackdrop: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['bpsPopoverVisibleChange']
        }] }); })();
export class BpsPopoverComponent extends BpsToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this._prefix = 'ant-popover';
    }
    get hasBackdrop() {
        return this.bpsTrigger === 'click' ? this.bpsBackdrop : false;
    }
    isEmpty() {
        return isTooltipEmpty(this.bpsTitle) && isTooltipEmpty(this.bpsContent);
    }
    static { this.ɵfac = function BpsPopoverComponent_Factory(t) { return new (t || BpsPopoverComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsPopoverComponent, selectors: [["bps-popover"]], exportAs: ["nzPopoverComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 6, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function BpsPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsPopoverComponent_ng_template_0_Template, 9, 18, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("overlayOutsideClick", function BpsPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function BpsPopoverComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function BpsPopoverComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.bpsArrowPointAtCenter);
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.NzStringTemplateOutletDirective, i6.CdkConnectedOverlay, i1.NzNoAnimationDirective, i7.NzConnectedOverlayDirective], styles: [".ant-popover-placement-right .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow-content:before{top:-12.31px;left:-12.31px}.ant-popover-arrow-content{background-color:#00a2d1}.ant-popover-arrow-content:before{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-variation_7a{border:solid 1px #7bc053!important}.ant-popover-placement-right .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}\n"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsPopoverComponent, [{
        type: Component,
        args: [{ selector: 'bps-popover', exportAs: 'nzPopoverComponent', animations: [zoomBigMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow bps-popover-arrow-{{bpsPopoverType}}">
            <span class="ant-popover-arrow-content bps-popover-inner-{{bpsPopoverType}}"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="bpsTitle">
                <ng-container *nzStringTemplateOutlet="bpsTitle">{{ bpsTitle }}</ng-container>
              </div> 
              <div class="ant-popover-inner-content bps-popover-inner-content-{{bpsPopoverType}}">
                <ng-container *nzStringTemplateOutlet="bpsContent">{{ bpsContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `, styles: [".ant-popover-placement-right .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow-content:before{top:-12.31px;left:-12.31px}.ant-popover-arrow-content{background-color:#00a2d1}.ant-popover-arrow-content:before{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-variation_7a{border:solid 1px #7bc053!important}.ant-popover-placement-right .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXBvcG92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1wb3BvdmVyL2Jwcy1wb3BvdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFHVCxTQUFTLEVBRVQsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsc0JBQXNCLEVBR3ZCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7SUFrR2YsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHFDQUFjOzs7SUFEakUsOEJBQWdEO0lBQzlDLDBHQUE4RTtJQUNoRixpQkFBTTs7O0lBRFcsZUFBZ0M7SUFBaEMsd0RBQWdDOzs7SUFHL0MsNkJBQW1EO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBbkI3RSw4QkFRQyxhQUFBLFVBQUE7SUFHSyx1QkFBb0Y7SUFDdEYsaUJBQU07SUFDTiw4QkFBOEMsVUFBQTtJQUUxQyxrRkFFTTtJQUNOLDJCQUFvRjtJQUNsRixvR0FBa0Y7SUFDcEYsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTs7O0lBbEJaLHVEQUF1QztJQUN2QywwQ0FBcUIs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QyxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBRWtCLE9BQU87UUFDeEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsQ0FBQztvRkFqQlUsbUJBQW1CO29FQUFuQixtQkFBbUI7WUExQzVCLG1IQXVDYztZQTdCWix1SUFBdUIsMEJBQXNCLElBQUMsMEZBQ3BDLFVBQU0sSUFEOEIsZ0hBRTVCLDRCQUF3QixJQUZJOztZQU45QyxnRUFBOEMseUNBQUEsZ0RBQUEseUNBQUEsaUNBQUEsbURBQUE7NGpIQVZ0QyxDQUFDLGFBQWEsQ0FBQzs7dUZBZ0RoQixtQkFBbUI7Y0FuRC9CLFNBQVM7MkJBQ0UsYUFBYSxZQUNiLG9CQUFvQixjQUNsQixDQUFDLGFBQWEsQ0FBQyxtQkFDVix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLHVCQUNoQixLQUFLLFlBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlDVDs7c0JBT0UsUUFBUTs7c0JBQ1IsSUFBSTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHpvb21CaWdNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgQnBzVG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy10b29sdGlwL3Rvb2x0aXAnO1xyXG5pbXBvcnQge1xuICBpc1Rvb2x0aXBFbXB0eSxcbiAgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSxcbiAgTnpUb29sdGlwVHJpZ2dlcixcbiAgUHJvcGVydHlNYXBwaW5nXG59IGZyb20gJy4vLi4vYnBzLXRvb2x0aXAvYmFzZSc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAncG9wb3Zlcic7XG5cbmV4cG9ydCB0eXBlIEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl8xJyB8ICd2YXJpYXRpb25fMicgfCAndmFyaWF0aW9uXzMnIHwgJ3ZhcmlhdGlvbl80JyB8ICd2YXJpYXRpb25fNScgfCAndmFyaWF0aW9uXzYnIHwgJ3ZhcmlhdGlvbl83YScgfFxuICAndmFyaWF0aW9uXzdiJyB8ICd2YXJpYXRpb25fOGEnIHwgJ3ZhcmlhdGlvbl84YicgfCAndmFyaWF0aW9uXzlhJyB8ICd2YXJpYXRpb25fOWInIHwgJ3ZhcmlhdGlvbl8xMCcgfCAndmFyaWF0aW9uXzExJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Jwcy1wb3BvdmVyXScsXG4gIGV4cG9ydEFzOiAnYnBzUG9wb3ZlcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ3Zpc2libGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnBzUG9wb3ZlckRpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzUG9wb3ZlckFycm93UG9pbnRBdENlbnRlcjogQm9vbGVhbklucHV0O1xuXG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuXG4gIEBJbnB1dCgnYnBzUG9wb3ZlckFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xuICBASW5wdXQoJ2Jwc1BvcG92ZXJUaXRsZScpIG92ZXJyaWRlIHRpdGxlPzogTnpUU1R5cGU7XG4gIEBJbnB1dCgnYnBzUG9wb3ZlckNvbnRlbnQnKSBvdmVycmlkZSBjb250ZW50PzogTnpUU1R5cGU7XG4gIEBJbnB1dCgnYnBzLXBvcG92ZXInKSBvdmVycmlkZSBkaXJlY3RpdmVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCdicHNQb3BvdmVyVHJpZ2dlcicpIG92ZXJyaWRlIHRyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcbiAgQElucHV0KCdicHNQb3BvdmVyUGxhY2VtZW50Jykgb3ZlcnJpZGUgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gPSAndG9wJztcbiAgQElucHV0KCdicHNQb3BvdmVyT3JpZ2luJykgb3ZlcnJpZGUgb3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBJbnB1dCgnYnBzUG9wb3ZlclZpc2libGUnKSBvdmVycmlkZSB2aXNpYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCdicHNQb3BvdmVyTW91c2VFbnRlckRlbGF5Jykgb3ZlcnJpZGUgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ2Jwc1BvcG92ZXJNb3VzZUxlYXZlRGVsYXknKSBvdmVycmlkZSBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgnYnBzUG9wb3Zlck92ZXJsYXlDbGFzc05hbWUnKSBvdmVycmlkZSBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoJ2Jwc1BvcG92ZXJPdmVybGF5U3R5bGUnKSBvdmVycmlkZSBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBASW5wdXQoJ2Jwc1BvcG92ZXJUeXBlJykgcG9wb3ZlclR5cGU6IEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl8xJztcblxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGJwc1BvcG92ZXJCYWNrZHJvcD86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgnYnBzUG9wb3ZlclZpc2libGVDaGFuZ2UnKSBvdmVycmlkZSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIG92ZXJyaWRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEJwc1BvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoQnBzUG9wb3ZlckNvbXBvbmVudCk7XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnBzUG9wb3ZlckJhY2tkcm9wOiBbJ2Jwc0JhY2tkcm9wJywgKCkgPT4gdGhpcy5icHNQb3BvdmVyQmFja2Ryb3BdLFxuICAgICAgLi4uc3VwZXIuZ2V0UHJveHlQcm9wZXJ0eU1hcCgpXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxuICAgIG56Q29uZmlnU2VydmljZT86IE56Q29uZmlnU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbiwgbnpDb25maWdTZXJ2aWNlKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtcG9wb3ZlcicsXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyQ29tcG9uZW50JyxcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHN0eWxlVXJsczogWydicHMtcG9wb3Zlci5jb21wb25lbnQuY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjb3ZlcmxheT1cImNka0Nvbm5lY3RlZE92ZXJsYXlcIlxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cImhhc0JhY2tkcm9wXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJfdmlzaWJsZVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXG4gICAgICBbbnpBcnJvd1BvaW50QXRDZW50ZXJdPVwiYnBzQXJyb3dQb2ludEF0Q2VudGVyXCJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxuICAgICAgKGRldGFjaCk9XCJoaWRlKClcIlxuICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImFudC1wb3BvdmVyXCJcbiAgICAgICAgW2NsYXNzLmFudC1wb3BvdmVyLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCJcbiAgICAgICAgW25nU3R5bGVdPVwiYnBzT3ZlcmxheVN0eWxlXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3cgYnBzLXBvcG92ZXItYXJyb3cte3ticHNQb3BvdmVyVHlwZX19XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1wb3BvdmVyLWFycm93LWNvbnRlbnQgYnBzLXBvcG92ZXItaW5uZXIte3ticHNQb3BvdmVyVHlwZX19XCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lclwiIHJvbGU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItdGl0bGVcIiAqbmdJZj1cImJwc1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc1RpdGxlXCI+e3sgYnBzVGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXItY29udGVudCBicHMtcG9wb3Zlci1pbm5lci1jb250ZW50LXt7YnBzUG9wb3ZlclR5cGV9fVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNDb250ZW50XCI+e3sgYnBzQ29udGVudCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnBzUG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIEJwc1Rvb2xUaXBDb21wb25lbnQge1xuICBvdmVycmlkZSBfcHJlZml4ID0gJ2FudC1wb3BvdmVyJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihjZHIsIGRpcmVjdGlvbmFsaXR5LCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBnZXQgaGFzQmFja2Ryb3AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYnBzVHJpZ2dlciA9PT0gJ2NsaWNrJyA/IHRoaXMuYnBzQmFja2Ryb3AgOiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1Rvb2x0aXBFbXB0eSh0aGlzLmJwc1RpdGxlKSAmJiBpc1Rvb2x0aXBFbXB0eSh0aGlzLmJwc0NvbnRlbnQpO1xuICB9XG59XG4iXX0=