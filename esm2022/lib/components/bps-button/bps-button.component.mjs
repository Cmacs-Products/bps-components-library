import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Inject, Input, Optional, ViewChild, ViewEncapsulation, HostListener, Output, EventEmitter } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NZ_WAVE_GLOBAL_CONFIG } from 'ng-zorro-antd/core/wave';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
import { WithConfig } from '../bps-tree/tree/config.service';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isEmpty } from '../core/util/check';
import { findFirstNotEmptyNode, findLastNotEmptyNode } from '../core/util/dom';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/observers";
import * as i2 from "../core/services/update-host-class.service";
import * as i3 from "../bps-tree/tree/config.service";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "@angular/forms";
import * as i7 from "../bps-tooltip/tooltip";
import * as i8 from "../bps-input/bps-input.directive";
const _c0 = ["contentElement"];
const _c1 = ["bps-button", ""];
function BpsButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} }
function BpsButtonComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7, 8);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} }
function BpsButtonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7, 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.bpsValue);
} }
function BpsButtonComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function BpsButtonComponent_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.startEditionMode($event)); });
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("bps-editable-btn-edit-icon-wrapper-disabled", !ctx_r4.bpsEditionEnabled);
    i0.ɵɵproperty("bpsTooltipType", ctx_r4.bpsEditTooltipType)("bpsTooltipTitle", ctx_r4.bpsEditTooltipTitle ? ctx_r4.bpsEditTooltipTitle : "Edit")("bpsTooltipPlacement", ctx_r4.bpsEditTooltipPlacement);
} }
function BpsButtonComponent_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 14);
} }
function BpsButtonComponent_div_6_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} }
function BpsButtonComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, BpsButtonComponent_div_6_img_1_Template, 1, 0, "img", 12);
    i0.ɵɵtemplate(2, BpsButtonComponent_div_6_img_2_Template, 1, 0, "img", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bpsTooltipType", ctx_r5.bpsComputedTooltipType)("bpsTooltipTitle", ctx_r5.bpsComputedTooltipTitle ? ctx_r5.bpsComputedTooltipTitle : ctx_r5.bpsComputed ? "Computed" : "Not Computed")("bpsTooltipPlacement", ctx_r5.bpsComputedTooltipPlacement);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.bpsComputed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.bpsComputed);
} }
const _c2 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'button';
export class BpsButtonComponent {
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap() {
        const prefixCls = 'ant-btn';
        const sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.bpsType}`]: this.bpsType,
            [`${prefixCls}-${this.bpsShape}`]: this.bpsShape,
            [`${prefixCls}-${sizeMap[this.bpsSize]}`]: sizeMap[this.bpsSize],
            [`${prefixCls}-loading`]: this.bpsLoading,
            [`${prefixCls}-icon-only`]: this.iconOnly && !this.bpsSearch && !this.isInDropdown,
            [`${prefixCls}-background-ghost`]: this.bpsGhost,
            [`${prefixCls}-block`]: this.bpsBlock,
            [`ant-input-search-button`]: this.bpsSearch
        });
    }
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    checkContent() {
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.bpsLoading);
        if (!this.cdr.destroyed) {
            this.cdr.detectChanges();
        }
    }
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = firstChildElement;
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    handleClick(e) {
        if (this.bpsType !== 'editable') {
            return;
        }
        if (this.showEditionMode && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    endEditMode($event) {
        this.preventDefault($event);
        if ($event.key === ('Enter' || 'enter')) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    onClick(event) {
        if (this.bpsType !== 'editable') {
            return;
        }
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.isSelected = !this.isSelected;
                this.isSelectedChange.emit(this.isSelected);
            }
            this.clicks = 0;
        }, 300);
    }
    startEditionMode($event) {
        $event.stopImmediatePropagation();
        $event.stopPropagation();
        if (!this.bpsEditionEnabled)
            return;
        this.showEditionMode = true;
        this.cdr.detectChanges();
        this.inputElement.nativeElement.focus();
        this.inputElement.nativeElement.select();
    }
    constructor(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.isSelected = false;
        this.isSelectedChange = new EventEmitter();
        this.showEditionMode = false;
        /*@HostBinding('attr.nz-wave') nzWave = new NzWaveDirective(
          this.ngZone,
          this.elementRef,
          this.waveConfig,
          this.animationType
        );*/
        this.bpsBlock = false;
        this.bpsGhost = false;
        this.bpsSearch = false;
        this.bpsComputed = false;
        this.bpsLoading = false;
        this.bpsEditionEnabled = true;
        this.bpsType = 'default';
        this.bpsValue = '';
        this.bpsComputedTooltipType = 'variation_11';
        this.bpsComputedTooltipPlacement = 'top';
        this.bpsComputedTooltipTitle = null;
        this.bpsEditTooltipType = 'variation_11';
        this.bpsEditTooltipPlacement = 'top';
        this.bpsEditTooltipTitle = null;
        this.bpsValueChange = new EventEmitter();
        this.bpsShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.clicks = 0;
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        if (!this.contentElement) {
            return;
        }
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then(() => this.checkContent());
        });
    }
    ngOnInit() {
        this.setClassMap();
        //this.nzWave.ngOnInit();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        //this.nzWave.ngOnDestroy();
    }
    ngOnChanges(changes) {
        if (changes.bpsBlock ||
            changes.bpsGhost ||
            changes.bpsSearch ||
            changes.bpsType ||
            changes.bpsShape ||
            changes.bpsSize ||
            changes.bpsLoading) {
            this.setClassMap();
        }
        if (changes.bpsLoading) {
            this.updateIconDisplay(this.bpsLoading);
        }
        /*if (changes.bpsType && changes.bpsType.currentValue === 'link') {
          this.nzWave.disable();
        } else {
          this.nzWave.enable();
        }*/
    }
    static { this.ɵfac = function BpsButtonComponent_Factory(t) { return new (t || BpsButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.ContentObserver), i0.ɵɵdirectiveInject(i2.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.NzConfigService), i0.ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsButtonComponent, selectors: [["", "bps-button", ""]], contentQueries: function BpsButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzIconDirective, 4, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfIconElement = _t);
        } }, viewQuery: function BpsButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(BpsInputDirective, 7, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostVars: 4, hostBindings: function BpsButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseup", function BpsButtonComponent_mouseup_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow)("click", function BpsButtonComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("bps-button-editable-selected", ctx.isSelected)("bps-button-editable-onedition", ctx.showEditionMode);
        } }, inputs: { isSelected: "isSelected", bpsBlock: "bpsBlock", bpsGhost: "bpsGhost", bpsSearch: "bpsSearch", bpsComputed: "bpsComputed", bpsLoading: "bpsLoading", bpsEditionEnabled: "bpsEditionEnabled", bpsType: "bpsType", bpsValue: "bpsValue", bpsComputedTooltipType: "bpsComputedTooltipType", bpsComputedTooltipPlacement: "bpsComputedTooltipPlacement", bpsComputedTooltipTitle: "bpsComputedTooltipTitle", bpsEditTooltipType: "bpsEditTooltipType", bpsEditTooltipPlacement: "bpsEditTooltipPlacement", bpsEditTooltipTitle: "bpsEditTooltipTitle", bpsShape: "bpsShape", bpsSize: "bpsSize" }, outputs: { isSelectedChange: "isSelectedChange", bpsValueChange: "bpsValueChange" }, exportAs: ["bpsButton"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature], attrs: _c1, ngContentSelectors: _c2, decls: 7, vars: 8, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["class", "bps-custom-content", 4, "ngIf"], ["bps-input", "", "autofocus", "", 1, "bps-button-editable-input", 3, "ngModel", "focus", "click", "dblclick", "keyup", "ngModelChange"], ["inputElement", ""], ["class", "bps-editable-btn-edit-icon-wrapper", "bps-tooltip", "", 3, "bps-editable-btn-edit-icon-wrapper-disabled", "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement", "click", 4, "ngIf"], ["class", "bps-computed-icon", "bps-tooltip", "", 3, "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"], [1, "bps-custom-content"], ["contentElement", ""], ["bps-tooltip", "", 1, "bps-editable-btn-edit-icon-wrapper", 3, "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement", "click"], [1, "bps-editable-btn-edit-icon"], ["bps-tooltip", "", 1, "bps-computed-icon", 3, "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement"], ["src", "/assets/bps-icons/sps_green_dot_icon_computed.svg", 4, "ngIf"], ["src", "/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg", 4, "ngIf"], ["src", "/assets/bps-icons/sps_green_dot_icon_computed.svg"], ["src", "/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg"]], template: function BpsButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsButtonComponent_i_0_Template, 1, 0, "i", 0);
            i0.ɵɵtemplate(1, BpsButtonComponent_span_1_Template, 3, 0, "span", 1);
            i0.ɵɵtemplate(2, BpsButtonComponent_span_2_Template, 3, 1, "span", 1);
            i0.ɵɵelementStart(3, "input", 2, 3);
            i0.ɵɵlistener("focus", function BpsButtonComponent_Template_input_focus_3_listener($event) { return $event.target.select(); })("click", function BpsButtonComponent_Template_input_click_3_listener($event) { return ctx.preventDefault($event); })("dblclick", function BpsButtonComponent_Template_input_dblclick_3_listener($event) { return ctx.preventDefault($event); })("keyup", function BpsButtonComponent_Template_input_keyup_3_listener($event) { return ctx.endEditMode($event); })("ngModelChange", function BpsButtonComponent_Template_input_ngModelChange_3_listener($event) { return ctx.bpsValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, BpsButtonComponent_div_5_Template, 2, 5, "div", 4);
            i0.ɵɵtemplate(6, BpsButtonComponent_div_6_Template, 3, 5, "div", 5);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.bpsLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsType !== "editable");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsType === "editable" && !ctx.showEditionMode);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("bps-invisible", !ctx.showEditionMode);
            i0.ɵɵproperty("ngModel", ctx.bpsValue);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.bpsType === "editable" && !ctx.showEditionMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsType === "editable");
        } }, dependencies: [i4.NgIf, i5.NzIconDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.BpsTooltipDirective, i8.BpsInputDirective], styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:solid 2px #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.bps-editable-btn-edit-icon-wrapper-disabled{cursor:initial!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1:focus,.ant-btn-variation-1.active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{color:#00a2d1!important;border:solid 2px #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:solid 2px #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2:focus,.ant-btn-variation-2.active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-7,.ant-btn-variation-8,.ant-btn-editable,.ant-btn-variation-6{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important;padding-top:0}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.ant-btn-editable.bps-button-editable-selected .bps-custom-content{max-width:calc(100% - 35px)}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-4[disabled],.ant-btn-variation-5[disabled],.ant-btn-variation-6[disabled],.ant-btn-variation-7[disabled],.ant-btn-variation-8[disabled],.ant-btn-editable[disabled],.ant-btn-variation-9[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-8[disabled]:hover,.ant-btn-editable[disabled]:hover,.ant-btn-variation-9[disabled]:hover,.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-3[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover{border:1px solid #363636!important}.ant-btn-variation-3:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover,.ant-btn-variation-4:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important;border:1px solid #262626}.ant-btn-editable[disabled]:hover{background-color:#363636!important;border:1px solid #363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus,.ant-btn-variation-3.active,.ant-btn-variation-5.active,.ant-btn-variation-4.active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9:focus,.ant-btn-variation-9.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7:focus,.ant-btn-variation-7.active{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6:focus,.ant-btn-variation-6.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8:focus,.ant-btn-variation-8.active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-5:active,.ant-btn-variation-4:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-11,.ant-btn-variation-13,.ant-btn-variation-13:hover,.ant-btn-variation-11:hover,.ant-btn-variation-10:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11:hover,.ant-btn-variation-11{background-color:#253d47!important}.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-13[disabled],.ant-btn-variation-15[disabled],.ant-btn-variation-16[disabled],.ant-btn-variation-20[disabled],.ant-btn-variation-14[disabled],.ant-btn-variation-10[disabled]{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-16[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-10[disabled] svg{opacity:.2!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-13.active,.ant-btn-variation-10.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:active{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:solid 2px #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled]:hover svg,.ant-btn-variation-12[disabled] svg{opacity:.2!important}.ant-btn-variation-12:focus,.ant-btn-variation-12.active{background-color:#00a2d1!important}.ant-btn-variation-12:active{background-color:#253d47!important}.ant-btn-variation-15,.ant-btn-variation-16,.ant-btn-variation-14{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14:focus,.ant-btn-variation-14.active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16:focus,.ant-btn-variation-16.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15:focus,.ant-btn-variation-15.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active,.ant-btn-variation-13:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-17:hover,.ant-btn-variation-17{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:solid 2px #ffffff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17:focus,.ant-btn-variation-17.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{background-color:#888!important}.ant-btn-variation-17[disabled]:hover,.ant-btn-variation-17[disabled]{border:solid 2px #666666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18:hover,.ant-btn-variation-19:hover,.ant-btn-variation-19,.ant-btn-variation-18{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19:hover,.ant-btn-variation-19{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-18.active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{background-color:#262626!important}.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-18[disabled]{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-18[disabled] svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20:focus,.ant-btn-variation-20.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;border:none!important}.bps-button-editable-selected:hover,.bps-button-editable-selected{border:solid 1px #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}.bps-editable-btn-edit-icon-wrapper{position:absolute!important;top:1px;right:33px;transform:scale(.85)}.bps-editable-btn-edit-icon:after{content:\"\"}.bps-button-editable-selected .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}.bps-button-editable-selected .bps-editable-btn-edit-icon-wrapper:not(.bps-editable-btn-edit-icon-wrapper-disabled):hover .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)}.ant-btn.disabled,.ant-btn[disabled]{cursor:initial!important}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "isSelected", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsBlock", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsGhost", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsSearch", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsComputed", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsEditionEnabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default')
], BpsButtonComponent.prototype, "bpsSize", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsButtonComponent, [{
        type: Component,
        args: [{ selector: '[bps-button]', exportAs: 'bpsButton', providers: [NzUpdateHostClassService], preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    '[class.bps-button-editable-selected]': 'isSelected',
                    '[class.bps-button-editable-onedition]': 'showEditionMode'
                }, template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\n<span *ngIf=\"bpsType !== 'editable'\" class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\n\n<span *ngIf=\"bpsType === 'editable' && !showEditionMode\" class=\"bps-custom-content\" #contentElement>{{bpsValue}}</span>\n<input #inputElement bps-input\n       autofocus\n       (focus)=\"$event.target.select()\"\n       [class.bps-invisible]=\"!showEditionMode\"\n       (click)=\"preventDefault($event)\"\n       (dblclick)=\"preventDefault($event)\"\n       (keyup)=\"endEditMode($event)\"\n       class=\"bps-button-editable-input\"\n       [(ngModel)]=\"bpsValue\"\n/>\n\n<div class=\"bps-editable-btn-edit-icon-wrapper\"\r\n      [class.bps-editable-btn-edit-icon-wrapper-disabled]=\"!bpsEditionEnabled\"\r\n      (click)=\"startEditionMode($event)\"\r\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsEditTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsEditTooltipTitle ? bpsEditTooltipTitle : 'Edit'\"\r\n      [bpsTooltipPlacement]=\"bpsEditTooltipPlacement\"\r\n      *ngIf=\"bpsType === 'editable' && !showEditionMode\">\r\n  <div class=\"bps-editable-btn-edit-icon\"></div>\r\n</div>\n\n<div  class=\"bps-computed-icon\"\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsComputedTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsComputedTooltipTitle ? bpsComputedTooltipTitle : bpsComputed ? 'Computed' : 'Not Computed'\"\r\n      [bpsTooltipPlacement]=\"bpsComputedTooltipPlacement\"\n      *ngIf=\"bpsType === 'editable'\">\n  <img *ngIf=\"bpsComputed\"     \n       src=\"/assets/bps-icons/sps_green_dot_icon_computed.svg\" />\n  <img *ngIf=\"!bpsComputed\"\n       src=\"/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg\" />\n</div>\n", styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:solid 2px #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.bps-editable-btn-edit-icon-wrapper-disabled{cursor:initial!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1:focus,.ant-btn-variation-1.active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{color:#00a2d1!important;border:solid 2px #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:solid 2px #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2:focus,.ant-btn-variation-2.active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-7,.ant-btn-variation-8,.ant-btn-editable,.ant-btn-variation-6{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important;padding-top:0}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.ant-btn-editable.bps-button-editable-selected .bps-custom-content{max-width:calc(100% - 35px)}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-4[disabled],.ant-btn-variation-5[disabled],.ant-btn-variation-6[disabled],.ant-btn-variation-7[disabled],.ant-btn-variation-8[disabled],.ant-btn-editable[disabled],.ant-btn-variation-9[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-8[disabled]:hover,.ant-btn-editable[disabled]:hover,.ant-btn-variation-9[disabled]:hover,.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-3[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover{border:1px solid #363636!important}.ant-btn-variation-3:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover,.ant-btn-variation-4:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important;border:1px solid #262626}.ant-btn-editable[disabled]:hover{background-color:#363636!important;border:1px solid #363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus,.ant-btn-variation-3.active,.ant-btn-variation-5.active,.ant-btn-variation-4.active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9:focus,.ant-btn-variation-9.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7:focus,.ant-btn-variation-7.active{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6:focus,.ant-btn-variation-6.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8:focus,.ant-btn-variation-8.active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-5:active,.ant-btn-variation-4:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-11,.ant-btn-variation-13,.ant-btn-variation-13:hover,.ant-btn-variation-11:hover,.ant-btn-variation-10:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11:hover,.ant-btn-variation-11{background-color:#253d47!important}.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-13[disabled],.ant-btn-variation-15[disabled],.ant-btn-variation-16[disabled],.ant-btn-variation-20[disabled],.ant-btn-variation-14[disabled],.ant-btn-variation-10[disabled]{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-16[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-10[disabled] svg{opacity:.2!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-13.active,.ant-btn-variation-10.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:active{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:solid 2px #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled]:hover svg,.ant-btn-variation-12[disabled] svg{opacity:.2!important}.ant-btn-variation-12:focus,.ant-btn-variation-12.active{background-color:#00a2d1!important}.ant-btn-variation-12:active{background-color:#253d47!important}.ant-btn-variation-15,.ant-btn-variation-16,.ant-btn-variation-14{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14:focus,.ant-btn-variation-14.active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16:focus,.ant-btn-variation-16.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15:focus,.ant-btn-variation-15.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active,.ant-btn-variation-13:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-17:hover,.ant-btn-variation-17{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:solid 2px #ffffff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17:focus,.ant-btn-variation-17.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{background-color:#888!important}.ant-btn-variation-17[disabled]:hover,.ant-btn-variation-17[disabled]{border:solid 2px #666666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18:hover,.ant-btn-variation-19:hover,.ant-btn-variation-19,.ant-btn-variation-18{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19:hover,.ant-btn-variation-19{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-18.active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{background-color:#262626!important}.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-18[disabled]{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-18[disabled] svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20:focus,.ant-btn-variation-20.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;border:none!important}.bps-button-editable-selected:hover,.bps-button-editable-selected{border:solid 1px #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}.bps-editable-btn-edit-icon-wrapper{position:absolute!important;top:1px;right:33px;transform:scale(.85)}.bps-editable-btn-edit-icon:after{content:\"\"}.bps-button-editable-selected .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}.bps-button-editable-selected .bps-editable-btn-edit-icon-wrapper:not(.bps-editable-btn-edit-icon-wrapper-disabled):hover .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)}.ant-btn.disabled,.ant-btn[disabled]{cursor:initial!important}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.ContentObserver }, { type: i2.NzUpdateHostClassService }, { type: i0.NgZone }, { type: i3.NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { isSelected: [{
            type: Input
        }], isSelectedChange: [{
            type: Output
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: true }]
        }], listOfIconElement: [{
            type: ContentChildren,
            args: [NzIconDirective, { read: ElementRef }]
        }], bpsBlock: [{
            type: Input
        }], bpsGhost: [{
            type: Input
        }], bpsSearch: [{
            type: Input
        }], bpsComputed: [{
            type: Input
        }], bpsLoading: [{
            type: Input
        }], bpsEditionEnabled: [{
            type: Input
        }], bpsType: [{
            type: Input
        }], bpsValue: [{
            type: Input
        }], bpsComputedTooltipType: [{
            type: Input
        }], bpsComputedTooltipPlacement: [{
            type: Input
        }], bpsComputedTooltipTitle: [{
            type: Input
        }], bpsEditTooltipType: [{
            type: Input
        }], bpsEditTooltipPlacement: [{
            type: Input
        }], bpsEditTooltipTitle: [{
            type: Input
        }], bpsValueChange: [{
            type: Output
        }], bpsShape: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: [BpsInputDirective, { static: true, read: ElementRef }]
        }], handleClick: [{
            type: HostListener,
            args: ['window:mouseup', ['$event']]
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUtMLFFBQVEsRUFJUixTQUFTLEVBQ1QsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFB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LFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFZpZXdSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOeldhdmVDb25maWcsIE5aX1dBVkVfR0xPQkFMX0NPTkZJRyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS93YXZlJztcclxuXHJcbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICcuLi9icHMtdHJlZS90cmVlL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSwgTnpTaXplTWFwIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyBmaW5kRmlyc3ROb3RFbXB0eU5vZGUsIGZpbmRMYXN0Tm90RW1wdHlOb2RlIH0gZnJvbSAnLi4vY29yZS91dGlsL2RvbSc7XHJcblxyXG5leHBvcnQgdHlwZSBOekJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnIHwgJ2xpbmsnIHwgJ3ZhcmlhdGlvbi0xJyB8ICd2YXJpYXRpb24tMicgfCAndmFyaWF0aW9uLTMnXHJcbiAgfCAndmFyaWF0aW9uLTQnIHwgJ3ZhcmlhdGlvbi01JyB8ICd2YXJpYXRpb24tNicgfCAndmFyaWF0aW9uLTcnIHwgJ3ZhcmlhdGlvbi04JyB8ICd2YXJpYXRpb24tOScgfCAndmFyaWF0aW9uLTEwJyB8ICd2YXJpYXRpb24tMTEnXHJcbiAgfCAndmFyaWF0aW9uLTEyJyAgfCAndmFyaWF0aW9uLTEzJyB8ICd2YXJpYXRpb24tMTQnIHwgJ3ZhcmlhdGlvbi0xNScgfCAndmFyaWF0aW9uLTE2JyB8ICd2YXJpYXRpb24tMTcnIHwgJ3ZhcmlhdGlvbi0xOCcgfCAndmFyaWF0aW9uLTE5JyB8ICd2YXJpYXRpb24tMjAnIHwgJ2VkaXRhYmxlJztcclxuZXhwb3J0IHR5cGUgTnpCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYnV0dG9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1idXR0b25dJyxcclxuICBleHBvcnRBczogJ2Jwc0J1dHRvbicsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmJwcy1idXR0b24tZWRpdGFibGUtc2VsZWN0ZWRdJzogJ2lzU2VsZWN0ZWQnLFxyXG4gICAgJ1tjbGFzcy5icHMtYnV0dG9uLWVkaXRhYmxlLW9uZWRpdGlvbl0nOiAnc2hvd0VkaXRpb25Nb2RlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGlzU2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekljb25EaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBsaXN0T2ZJY29uRWxlbWVudDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIC8qQEhvc3RCaW5kaW5nKCdhdHRyLm56LXdhdmUnKSBueldhdmUgPSBuZXcgTnpXYXZlRGlyZWN0aXZlKFxyXG4gICAgdGhpcy5uZ1pvbmUsXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYsXHJcbiAgICB0aGlzLndhdmVDb25maWcsXHJcbiAgICB0aGlzLmFuaW1hdGlvblR5cGVcclxuICApOyovXHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNHaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ29tcHV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNFZGl0aW9uRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgYnBzVHlwZTogTnpCdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGJwc1ZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBicHNDb21wdXRlZFRvb2x0aXBUeXBlOiBzdHJpbmcgPSAndmFyaWF0aW9uXzExJztcclxuICBASW5wdXQoKSBicHNDb21wdXRlZFRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIGJwc0NvbXB1dGVkVG9vbHRpcFRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNFZGl0VG9vbHRpcFR5cGU6IHN0cmluZyA9ICd2YXJpYXRpb25fMTEnO1xyXG4gIEBJbnB1dCgpIGJwc0VkaXRUb29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuICBASW5wdXQoKSBicHNFZGl0VG9vbHRpcFRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBAT3V0cHV0KCkgYnBzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgYnBzU2hhcGU6IE56QnV0dG9uU2hhcGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBicHNTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gIEBWaWV3Q2hpbGQoQnBzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpY29uRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpY29uT25seSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSAqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4nO1xyXG4gICAgY29uc3Qgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5icHNUeXBlfWBdOiB0aGlzLmJwc1R5cGUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5icHNTaGFwZX1gXTogdGhpcy5icHNTaGFwZSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tJHtzaXplTWFwW3RoaXMuYnBzU2l6ZV19YF06IHNpemVNYXBbdGhpcy5icHNTaXplXSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLmJwc0xvYWRpbmcsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWljb24tb25seWBdOiB0aGlzLmljb25Pbmx5ICYmICF0aGlzLmJwc1NlYXJjaCAmJiAhdGhpcy5pc0luRHJvcGRvd24sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogdGhpcy5icHNHaG9zdCxcclxuICAgICAgW2Ake3ByZWZpeENsc30tYmxvY2tgXTogdGhpcy5icHNCbG9jayxcclxuICAgICAgW2BhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmBdOiB0aGlzLmJwc1NlYXJjaFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uRGlzcGxheSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmljb25FbGVtZW50LCAnZGlzcGxheScsIHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XHJcbiAgICBpZiAoaGFzSWNvbikge1xyXG4gICAgICB0aGlzLm1vdmVJY29uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMCAqKi9cclxuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgdGhpcy5pY29uT25seSA9ICEhaGFzSWNvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgICB0aGlzLmljb25Pbmx5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMuYnBzTG9hZGluZyk7XHJcbiAgICBpZiAoISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZUljb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gZmluZExhc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIGZpcnN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50LmZpcnN0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiBsYXN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCwgbGFzdENoaWxkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVHlwZSAhPT0gJ2VkaXRhYmxlJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd0VkaXRpb25Nb2RlICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICgnRW50ZXInIHx8ICdlbnRlcicpKSB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWNrcyA9IDA7XHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmJwc1R5cGUgIT09ICdlZGl0YWJsZScpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGlja3MrKztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jbGlja3MgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSAhdGhpcy5pc1NlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuaXNTZWxlY3RlZCk7XHJcbiAgICAgIH0gXHJcbiAgICAgIHRoaXMuY2xpY2tzID0gMDtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXRpb25Nb2RlKCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5icHNFZGl0aW9uRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5zaG93RWRpdGlvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlcixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9XQVZFX0dMT0JBTF9DT05GSUcpIHByaXZhdGUgd2F2ZUNvbmZpZzogTnpXYXZlQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHByaXZhdGUgYW5pbWF0aW9uVHlwZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1idG4nKTtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jb250ZW50RWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRlbnRPYnNlcnZlclxyXG4gICAgICAub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbGVtZW50KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzMwNzlcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2hlY2tDb250ZW50KCkpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgLy90aGlzLm56V2F2ZS5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIC8vdGhpcy5ueldhdmUubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgY2hhbmdlcy5icHNCbG9jayB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc0dob3N0IHx8XHJcbiAgICAgIGNoYW5nZXMuYnBzU2VhcmNoIHx8XHJcbiAgICAgIGNoYW5nZXMuYnBzVHlwZSB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc1NoYXBlIHx8XHJcbiAgICAgIGNoYW5nZXMuYnBzU2l6ZSB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc0xvYWRpbmdcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5icHNMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5icHNMb2FkaW5nKTtcclxuICAgIH1cclxuICAgIC8qaWYgKGNoYW5nZXMuYnBzVHlwZSAmJiBjaGFuZ2VzLmJwc1R5cGUuY3VycmVudFZhbHVlID09PSAnbGluaycpIHtcclxuICAgICAgdGhpcy5ueldhdmUuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ueldhdmUuZW5hYmxlKCk7XHJcbiAgICB9Ki9cclxuICB9XHJcbn1cclxuIiwiPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJicHNMb2FkaW5nXCI+PC9pPlxuPHNwYW4gKm5nSWY9XCJicHNUeXBlICE9PSAnZWRpdGFibGUnXCIgY2xhc3M9XCJicHMtY3VzdG9tLWNvbnRlbnRcIiAjY29udGVudEVsZW1lbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cblxuPHNwYW4gKm5nSWY9XCJicHNUeXBlID09PSAnZWRpdGFibGUnICYmICFzaG93RWRpdGlvbk1vZGVcIiBjbGFzcz1cImJwcy1jdXN0b20tY29udGVudFwiICNjb250ZW50RWxlbWVudD57e2Jwc1ZhbHVlfX08L3NwYW4+XG48aW5wdXQgI2lucHV0RWxlbWVudCBicHMtaW5wdXRcbiAgICAgICBhdXRvZm9jdXNcbiAgICAgICAoZm9jdXMpPVwiJGV2ZW50LnRhcmdldC5zZWxlY3QoKVwiXG4gICAgICAgW2NsYXNzLmJwcy1pbnZpc2libGVdPVwiIXNob3dFZGl0aW9uTW9kZVwiXG4gICAgICAgKGNsaWNrKT1cInByZXZlbnREZWZhdWx0KCRldmVudClcIlxuICAgICAgIChkYmxjbGljayk9XCJwcmV2ZW50RGVmYXVsdCgkZXZlbnQpXCJcbiAgICAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50KVwiXG4gICAgICAgY2xhc3M9XCJicHMtYnV0dG9uLWVkaXRhYmxlLWlucHV0XCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImJwc1ZhbHVlXCJcbi8+XG5cbjxkaXYgY2xhc3M9XCJicHMtZWRpdGFibGUtYnRuLWVkaXQtaWNvbi13cmFwcGVyXCJcclxuICAgICAgW2NsYXNzLmJwcy1lZGl0YWJsZS1idG4tZWRpdC1pY29uLXdyYXBwZXItZGlzYWJsZWRdPVwiIWJwc0VkaXRpb25FbmFibGVkXCJcclxuICAgICAgKGNsaWNrKT1cInN0YXJ0RWRpdGlvbk1vZGUoJGV2ZW50KVwiXHJcbiAgICAgIGJwcy10b29sdGlwXHJcbiAgICAgIFticHNUb29sdGlwVHlwZV09XCJicHNFZGl0VG9vbHRpcFR5cGVcIlxyXG4gICAgICBbYnBzVG9vbHRpcFRpdGxlXT1cImJwc0VkaXRUb29sdGlwVGl0bGUgPyBicHNFZGl0VG9vbHRpcFRpdGxlIDogJ0VkaXQnXCJcclxuICAgICAgW2Jwc1Rvb2x0aXBQbGFjZW1lbnRdPVwiYnBzRWRpdFRvb2x0aXBQbGFjZW1lbnRcIlxyXG4gICAgICAqbmdJZj1cImJwc1R5cGUgPT09ICdlZGl0YWJsZScgJiYgIXNob3dFZGl0aW9uTW9kZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJicHMtZWRpdGFibGUtYnRuLWVkaXQtaWNvblwiPjwvZGl2PlxyXG48L2Rpdj5cblxuPGRpdiAgY2xhc3M9XCJicHMtY29tcHV0ZWQtaWNvblwiXG4gICAgICBicHMtdG9vbHRpcFxyXG4gICAgICBbYnBzVG9vbHRpcFR5cGVdPVwiYnBzQ29tcHV0ZWRUb29sdGlwVHlwZVwiXHJcbiAgICAgIFticHNUb29sdGlwVGl0bGVdPVwiYnBzQ29tcHV0ZWRUb29sdGlwVGl0bGUgPyBicHNDb21wdXRlZFRvb2x0aXBUaXRsZSA6IGJwc0NvbXB1dGVkID8gJ0NvbXB1dGVkJyA6ICdOb3QgQ29tcHV0ZWQnXCJcclxuICAgICAgW2Jwc1Rvb2x0aXBQbGFjZW1lbnRdPVwiYnBzQ29tcHV0ZWRUb29sdGlwUGxhY2VtZW50XCJcbiAgICAgICpuZ0lmPVwiYnBzVHlwZSA9PT0gJ2VkaXRhYmxlJ1wiPlxuICA8aW1nICpuZ0lmPVwiYnBzQ29tcHV0ZWRcIiAgICAgXG4gICAgICAgc3JjPVwiL2Fzc2V0cy9icHMtaWNvbnMvc3BzX2dyZWVuX2RvdF9pY29uX2NvbXB1dGVkLnN2Z1wiIC8+XG4gIDxpbWcgKm5nSWY9XCIhYnBzQ29tcHV0ZWRcIlxuICAgICAgIHNyYz1cIi9hc3NldHMvYnBzLWljb25zL3Nwc19ncmV5X2RvdF9pY29uX25vdGNvbXB1dGVkLnN2Z1wiIC8+XG48L2Rpdj5cbiJdfQ==