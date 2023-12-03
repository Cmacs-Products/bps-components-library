import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { isPresetColor } from 'ng-zorro-antd/core/color';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { isTooltipEmpty, NzTooltipBaseComponent, NzTooltipBaseDirective } from './base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "../core/addon/string_template_outlet";
import * as i5 from "@angular/cdk/overlay";
import * as i6 from "ng-zorro-antd/core/overlay";
function BpsToolTipComponent_ng_template_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.bpsTitle);
} }
function BpsToolTipComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵelement(3, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtemplate(5, BpsToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-tooltip-rtl", ctx_r1.dir === "rtl")("bps-tooltip-disabled", ctx_r1.bpsTooltipDisabled);
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.bpsOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("ant-tooltip-arrow-content bps-tooltip-arrow-", ctx_r1.bpsTooltipType, "");
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-tooltip-inner bps-tooltip-inner-", ctx_r1.bpsTooltipType, "");
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.bpsTitle)("nzStringTemplateOutletContext", ctx_r1.bpsTitleContext);
} }
export class BpsTooltipDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.titleContext = null;
        this.trigger = 'hover';
        this.placement = 'top';
        this.popoverType = 'variation_8a';
        this.tooltipType = 'variation_8a';
        this.tooltipDisabled = false;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(BpsToolTipComponent);
    }
    getProxyPropertyMap() {
        return {
            ...super.getProxyPropertyMap(),
            bpsTooltipColor: ['bpsColor', () => this.bpsTooltipColor],
            bpsTooltipTitleContext: ['bpsTitleContext', () => this.titleContext]
        };
    }
    static { this.ɵfac = function BpsTooltipDirective_Factory(t) { return new (t || BpsTooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsTooltipDirective, selectors: [["", "bps-tooltip", ""]], hostVars: 4, hostBindings: function BpsTooltipDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-tooltip-open", ctx.visible)("bps-tooltip-disabled", ctx.tooltipDisabled);
        } }, inputs: { title: ["bpsTooltipTitle", "title"], titleContext: ["bpsTooltipTitleContext", "titleContext"], directiveTitle: ["bps-tooltip", "directiveTitle"], trigger: ["bpsTooltipTrigger", "trigger"], placement: ["bpsTooltipPlacement", "placement"], origin: ["bpsTooltipOrigin", "origin"], visible: ["bpsTooltipVisible", "visible"], mouseEnterDelay: ["bpsTooltipMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["bpsTooltipMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["bpsTooltipOverlayClassName", "overlayClassName"], overlayStyle: ["bpsTooltipOverlayStyle", "overlayStyle"], arrowPointAtCenter: ["bpsTooltipArrowPointAtCenter", "arrowPointAtCenter"], bpsTooltipColor: "bpsTooltipColor", popoverType: ["bpsPopoverType", "popoverType"], tooltipType: ["bpsTooltipType", "tooltipType"], tooltipDisabled: ["bpsTooltipDisabled", "tooltipDisabled"] }, outputs: { visibleChange: "bpsTooltipVisibleChange" }, exportAs: ["bpsTooltip"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "tooltipDisabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[bps-tooltip]',
                exportAs: 'bpsTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'visible',
                    '[class.bps-tooltip-disabled]': 'tooltipDisabled'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { title: [{
            type: Input,
            args: ['bpsTooltipTitle']
        }], titleContext: [{
            type: Input,
            args: ['bpsTooltipTitleContext']
        }], directiveTitle: [{
            type: Input,
            args: ['bps-tooltip']
        }], trigger: [{
            type: Input,
            args: ['bpsTooltipTrigger']
        }], placement: [{
            type: Input,
            args: ['bpsTooltipPlacement']
        }], origin: [{
            type: Input,
            args: ['bpsTooltipOrigin']
        }], visible: [{
            type: Input,
            args: ['bpsTooltipVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['bpsTooltipMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['bpsTooltipMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['bpsTooltipOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['bpsTooltipOverlayStyle']
        }], arrowPointAtCenter: [{
            type: Input,
            args: ['bpsTooltipArrowPointAtCenter']
        }], bpsTooltipColor: [{
            type: Input
        }], popoverType: [{
            type: Input,
            args: ['bpsPopoverType']
        }], tooltipType: [{
            type: Input,
            args: ['bpsTooltipType']
        }], tooltipDisabled: [{
            type: Input,
            args: ['bpsTooltipDisabled']
        }], visibleChange: [{
            type: Output,
            args: ['bpsTooltipVisibleChange']
        }] }); })();
export class BpsToolTipComponent extends NzTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.bpsTitle = null;
        this.bpsTooltipType = 'variation_8a';
        this.bpsPopoverType = 'variation_8a';
        this.bpsTooltipDisabled = false;
        this.bpsTitleContext = null;
        this._contentStyleMap = {};
    }
    isEmpty() {
        return isTooltipEmpty(this.bpsTitle);
    }
    updateStyles() {
        const isColorPreset = this.bpsColor && isPresetColor(this.bpsColor);
        this._classMap = {
            [this.bpsOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
            [`${this._prefix}-${this.bpsColor}`]: isColorPreset
        };
        this._contentStyleMap = {
            backgroundColor: !!this.bpsColor && !isColorPreset ? this.bpsColor : null
        };
    }
    static { this.ɵfac = function BpsToolTipComponent_Factory(t) { return new (t || BpsToolTipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsToolTipComponent, selectors: [["bps-tooltip"]], exportAs: ["bpsTooltipComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]], template: function BpsToolTipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsToolTipComponent_ng_template_0_Template, 6, 19, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("overlayOutsideClick", function BpsToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function BpsToolTipComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function BpsToolTipComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.bpsArrowPointAtCenter);
        } }, dependencies: [i3.NgClass, i3.NgStyle, i4.NzStringTemplateOutletDirective, i5.CdkConnectedOverlay, i1.NzNoAnimationDirective, i6.NzConnectedOverlayDirective], styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsToolTipComponent, [{
        type: Component,
        args: [{ selector: 'bps-tooltip', exportAs: 'bpsTooltipComponent', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [zoomBigMotion], template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [class.bps-tooltip-disabled]="bpsTooltipDisabled"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content bps-tooltip-arrow-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner bps-tooltip-inner-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="bpsTitle; context: bpsTitleContext">{{ bpsTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `, preserveWhitespaces: false, styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvdG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd2RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixzQkFBc0IsRUFHdkIsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7OztJQTBGSiw2QkFBMkU7SUFBQSxZQUFjO0lBQUEsMEJBQWU7OztJQUE3QixlQUFjO0lBQWQscUNBQWM7OztJQWYvRiw4QkFTQyxhQUFBLGFBQUE7SUFHSywwQkFBaUg7SUFDbkgsaUJBQU07SUFDTiw4QkFBaUc7SUFDL0Ysb0dBQXdHO0lBQzFHLGlCQUFNLEVBQUEsRUFBQTs7O0lBZFIsdURBQXVDLG1EQUFBO0lBRXZDLDBDQUFxQixtQ0FBQSx3RkFBQSx1RkFBQSw0QkFBQTtJQVFYLGVBQXNFO0lBQXRFLG9HQUFzRTtJQUFDLGlEQUE0QjtJQUV0RyxlQUE4RDtJQUE5RCw0RkFBOEQ7SUFBQyxpREFBNEI7SUFDL0UsZUFBa0M7SUFBbEMsd0RBQWtDLHlEQUFBOztBQWhGN0QsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHNCQUFzQjtJQXlCN0QsWUFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxF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ZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgaXNQcmVzZXRDb2xvciwgTnpQcmVzZXRDb2xvciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb2xvcic7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgQnBzUG9wb3ZlclR5cGUgfSBmcm9tICcuLi9icHMtcG9wb3Zlci9icHMtcG9wb3Zlcic7XHJcblxuaW1wb3J0IHtcbiAgaXNUb29sdGlwRW1wdHksXG4gIE56VG9vbHRpcEJhc2VDb21wb25lbnQsXG4gIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsXG4gIE56VG9vbHRpcFRyaWdnZXIsXG4gIFByb3BlcnR5TWFwcGluZ1xufSBmcm9tICcuL2Jhc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYnBzLXRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdicHNUb29sdGlwJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRvb2x0aXAtb3Blbl0nOiAndmlzaWJsZScsXG4gICAgJ1tjbGFzcy5icHMtdG9vbHRpcC1kaXNhYmxlZF0nOiAndG9vbHRpcERpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1Rvb2x0aXBBcnJvd1BvaW50QXRDZW50ZXI6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBUaXRsZScpIG92ZXJyaWRlIHRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBASW5wdXQoJ2Jwc1Rvb2x0aXBUaXRsZUNvbnRleHQnKSB0aXRsZUNvbnRleHQ/OiBPYmplY3QgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCdicHMtdG9vbHRpcCcpIG92ZXJyaWRlIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBASW5wdXQoJ2Jwc1Rvb2x0aXBUcmlnZ2VyJykgb3ZlcnJpZGUgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xuICBASW5wdXQoJ2Jwc1Rvb2x0aXBQbGFjZW1lbnQnKSBvdmVycmlkZSBwbGFjZW1lbnQ/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICd0b3AnO1xuICBASW5wdXQoJ2Jwc1Rvb2x0aXBPcmlnaW4nKSBvdmVycmlkZSBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQElucHV0KCdicHNUb29sdGlwVmlzaWJsZScpIG92ZXJyaWRlIHZpc2libGU/OiBib29sZWFuO1xuICBASW5wdXQoJ2Jwc1Rvb2x0aXBNb3VzZUVudGVyRGVsYXknKSBvdmVycmlkZSBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgnYnBzVG9vbHRpcE1vdXNlTGVhdmVEZWxheScpIG92ZXJyaWRlIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCdicHNUb29sdGlwT3ZlcmxheUNsYXNzTmFtZScpIG92ZXJyaWRlIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgnYnBzVG9vbHRpcE92ZXJsYXlTdHlsZScpIG92ZXJyaWRlIG92ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XG4gIEBJbnB1dCgnYnBzVG9vbHRpcEFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBicHNUb29sdGlwQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgnYnBzUG9wb3ZlclR5cGUnKSBwb3BvdmVyVHlwZTogQnBzUG9wb3ZlclR5cGUgPSAndmFyaWF0aW9uXzhhJztcbiAgQElucHV0KCdicHNUb29sdGlwVHlwZScpIHRvb2x0aXBUeXBlOiBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fOGEnO1xuICBASW5wdXQoJ2Jwc1Rvb2x0aXBEaXNhYmxlZCcpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwRGlzYWJsZWQgPSBmYWxzZTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgnYnBzVG9vbHRpcFZpc2libGVDaGFuZ2UnKSBvdmVycmlkZSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIG92ZXJyaWRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEJwc1Rvb2xUaXBDb21wb25lbnQ+ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoQnBzVG9vbFRpcENvbXBvbmVudCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0UHJveHlQcm9wZXJ0eU1hcCgpLFxuICAgICAgYnBzVG9vbHRpcENvbG9yOiBbJ2Jwc0NvbG9yJywgKCkgPT4gdGhpcy5icHNUb29sdGlwQ29sb3JdLFxuICAgICAgYnBzVG9vbHRpcFRpdGxlQ29udGV4dDogWydicHNUaXRsZUNvbnRleHQnLCAoKSA9PiB0aGlzLnRpdGxlQ29udGV4dF1cbiAgICB9O1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy10b29sdGlwJyxcbiAgZXhwb3J0QXM6ICdicHNUb29sdGlwQ29tcG9uZW50JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogWycuL2Jwcy10b29sdGlwLmNvbXBvbmVudC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJfdmlzaWJsZVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UHVzaF09XCJ0cnVlXCJcbiAgICAgIFtuekFycm93UG9pbnRBdENlbnRlcl09XCJicHNBcnJvd1BvaW50QXRDZW50ZXJcIlxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LXRvb2x0aXBcIlxuICAgICAgICBbY2xhc3MuYW50LXRvb2x0aXAtcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgICBbY2xhc3MuYnBzLXRvb2x0aXAtZGlzYWJsZWRdPVwiYnBzVG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCJcbiAgICAgICAgW25nU3R5bGVdPVwiYnBzT3ZlcmxheVN0eWxlXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtYXJyb3dcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRvb2x0aXAtYXJyb3ctY29udGVudCBicHMtdG9vbHRpcC1hcnJvdy17e2Jwc1Rvb2x0aXBUeXBlfX1cIiBbbmdTdHlsZV09XCJfY29udGVudFN0eWxlTWFwXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1pbm5lciBicHMtdG9vbHRpcC1pbm5lci17e2Jwc1Rvb2x0aXBUeXBlfX1cIiBbbmdTdHlsZV09XCJfY29udGVudFN0eWxlTWFwXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzVGl0bGU7IGNvbnRleHQ6IGJwc1RpdGxlQ29udGV4dFwiPnt7IGJwc1RpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQnBzVG9vbFRpcENvbXBvbmVudCBleHRlbmRzIE56VG9vbHRpcEJhc2VDb21wb25lbnQge1xuICBvdmVycmlkZSBicHNUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcbiAgb3ZlcnJpZGUgYnBzVG9vbHRpcFR5cGU6IHN0cmluZyA9ICd2YXJpYXRpb25fOGEnO1xuICBvdmVycmlkZSBicHNQb3BvdmVyVHlwZTogc3RyaW5nID0gJ3ZhcmlhdGlvbl84YSc7XG4gIG92ZXJyaWRlIGJwc1Rvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBicHNUaXRsZUNvbnRleHQ6IE9iamVjdCB8IG51bGwgPSBudWxsO1xuXG4gIGJwc0NvbG9yPzogc3RyaW5nIHwgTnpQcmVzZXRDb2xvcjtcblxuICBfY29udGVudFN0eWxlTWFwOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoY2RyLCBkaXJlY3Rpb25hbGl0eSwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzVG9vbHRpcEVtcHR5KHRoaXMuYnBzVGl0bGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHVwZGF0ZVN0eWxlcygpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NvbG9yUHJlc2V0ID0gdGhpcy5icHNDb2xvciAmJiBpc1ByZXNldENvbG9yKHRoaXMuYnBzQ29sb3IpO1xuXG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LXBsYWNlbWVudC0ke3RoaXMucHJlZmVycmVkUGxhY2VtZW50fWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tJHt0aGlzLmJwc0NvbG9yfWBdOiBpc0NvbG9yUHJlc2V0XG4gICAgfTtcblxuICAgIHRoaXMuX2NvbnRlbnRTdHlsZU1hcCA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogISF0aGlzLmJwc0NvbG9yICYmICFpc0NvbG9yUHJlc2V0ID8gdGhpcy5icHNDb2xvciA6IG51bGxcbiAgICB9O1xuICB9XG59XG4iXX0=