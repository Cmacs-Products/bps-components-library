import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Directive, Input, Optional, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzFormNoStatusService } from 'ng-zorro-antd/core/form';
import { getStatusClassNames, InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsInputDirective } from './bps-input.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/form";
import * as i4 from "@angular/common";
import * as i5 from "./input-group-slot.component";
import * as i6 from "../core/form/feedback";
function BpsInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r7.bpsAddOnBeforeIcon)("template", ctx_r7.bpsAddOnBefore);
} }
function BpsInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function BpsInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵclassProp("ant-input-affix-wrapper-disabled", ctx_r8.disabled)("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge)("ant-input-affix-wrapper-focused", ctx_r8.focused);
    i0.ɵɵproperty("ngClass", ctx_r8.affixInGroupStatusCls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function BpsInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r9.bpsAddOnAfterIcon)("template", ctx_r9.bpsAddOnAfter);
} }
function BpsInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    i0.ɵɵtemplate(2, BpsInputGroupComponent_span_0_span_2_Template, 2, 10, "span", 6);
    i0.ɵɵtemplate(3, BpsInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsAddOnBefore || ctx_r0.bpsAddOnBeforeIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isAffix || ctx_r0.hasFeedback)("ngIfElse", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsAddOnAfter || ctx_r0.bpsAddOnAfterIcon);
} }
function BpsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function BpsInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function BpsInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
} }
function BpsInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r13.bpsPrefixIcon)("template", ctx_r13.bpsPrefix);
} }
function BpsInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function BpsInputGroupComponent_ng_template_3_span_2_bps_form_item_feedback_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-form-item-feedback-icon", 16);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("status", ctx_r16.status);
} }
function BpsInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_ng_template_3_span_2_bps_form_item_feedback_icon_1_Template, 1, 1, "bps-form-item-feedback-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r15.bpsSuffixIcon)("template", ctx_r15.bpsSuffix);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.isFeedback);
} }
function BpsInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵtemplate(2, BpsInputGroupComponent_ng_template_3_span_2_Template, 2, 3, "span", 12);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r4.bpsPrefix || ctx_r4.bpsPrefixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.bpsSuffix || ctx_r4.bpsSuffixIcon || ctx_r4.isFeedback);
} }
function BpsInputGroupComponent_ng_template_5_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "bps-form-item-feedback-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("status", ctx_r17.status);
} }
function BpsInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_ng_template_5_span_1_Template, 2, 1, "span", 17);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.isAddOn && !ctx_r6.isAffix && ctx_r6.isFeedback);
} }
const _c0 = ["*"];
export class NzInputGroupWhitSuffixOrPrefixDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    static { this.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) { return new (t || NzInputGroupWhitSuffixOrPrefixDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzInputGroupWhitSuffixOrPrefixDirective, selectors: [["bps-input-group", "bpsSuffix", ""], ["bps-input-group", "bpsPrefix", ""]] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzInputGroupWhitSuffixOrPrefixDirective, [{
        type: Directive,
        args: [{
                selector: `bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]`
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
export class BpsInputGroupComponent {
    constructor(focusMonitor, elementRef, renderer, cdr, directionality, nzFormStatusService, nzFormNoStatusService) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this.bpsAddOnBeforeIcon = null;
        this.bpsAddOnAfterIcon = null;
        this.bpsPrefixIcon = null;
        this.bpsSuffixIcon = null;
        this.bpsStatus = '';
        this.bpsSize = 'default';
        this.bpsSearch = false;
        this.bpsCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.isFeedback = false;
        this.focused = false;
        this.disabled = false;
        this.dir = 'ltr';
        // status
        this.prefixCls = 'ant-input';
        this.affixStatusCls = {};
        this.groupStatusCls = {};
        this.affixInGroupStatusCls = {};
        this.status = '';
        this.hasFeedback = false;
        this.destroy$ = new Subject();
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.size = this.bpsSize));
        }
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap(list => merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)])), mergeMap(() => listOfInputChange$), map(list => list.some((input) => input.disabled)), takeUntil(this.destroy$))
            .subscribe(disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { bpsSize, bpsSuffix, bpsPrefix, bpsPrefixIcon, bpsSuffixIcon, bpsAddOnAfter, bpsAddOnBefore, bpsAddOnAfterIcon, bpsAddOnBeforeIcon, bpsStatus } = changes;
        if (bpsSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.bpsSize === 'large';
            this.isSmall = this.bpsSize === 'small';
        }
        if (bpsSuffix || bpsPrefix || bpsPrefixIcon || bpsSuffixIcon) {
            this.isAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        }
        if (bpsAddOnAfter || bpsAddOnBefore || bpsAddOnAfterIcon || bpsAddOnBeforeIcon) {
            this.isAddOn = !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
            this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn);
        }
        if (bpsStatus) {
            this.setStatusStyles(this.bpsStatus, this.hasFeedback);
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusStyles(status, hasFeedback) {
        // set inner status
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.isFeedback = !!status && hasFeedback;
        const baseAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        this.isAffix = baseAffix || (!this.isAddOn && hasFeedback);
        this.affixInGroupStatusCls =
            this.isAffix || this.isFeedback
                ? (this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, status, hasFeedback))
                : {};
        this.cdr.markForCheck();
        // render status if nzStatus is set
        this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, this.isAddOn ? '' : status, this.isAddOn ? false : hasFeedback);
        this.groupStatusCls = getStatusClassNames(`${this.prefixCls}-group-wrapper`, this.isAddOn ? status : '', this.isAddOn ? hasFeedback : false);
        const statusCls = {
            ...this.affixStatusCls,
            ...this.groupStatusCls
        };
        Object.keys(statusCls).forEach(status => {
            if (statusCls[status]) {
                this.renderer.addClass(this.elementRef.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, status);
            }
        });
    }
    static { this.ɵfac = function BpsInputGroupComponent_Factory(t) { return new (t || BpsInputGroupComponent)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzFormStatusService, 8), i0.ɵɵdirectiveInject(i3.NzFormNoStatusService, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsInputGroupComponent, selectors: [["bps-input-group"]], contentQueries: function BpsInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsInputDirective, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
        } }, hostVars: 40, hostBindings: function BpsInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-input-group-compact", ctx.bpsCompact)("ant-input-search-enter-button", ctx.bpsSearch)("ant-input-search", ctx.bpsSearch)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.bpsSearch && ctx.isSmall)("ant-input-search-large", ctx.bpsSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
        } }, inputs: { bpsAddOnBeforeIcon: "bpsAddOnBeforeIcon", bpsAddOnAfterIcon: "bpsAddOnAfterIcon", bpsPrefixIcon: "bpsPrefixIcon", bpsSuffixIcon: "bpsSuffixIcon", bpsAddOnBefore: "bpsAddOnBefore", bpsAddOnAfter: "bpsAddOnAfter", bpsPrefix: "bpsPrefix", bpsStatus: "bpsStatus", bpsSuffix: "bpsSuffix", bpsSize: "bpsSize", bpsSearch: "bpsSearch", bpsCompact: "bpsCompact" }, exportAs: ["bpsInputGroup"], features: [i0.ɵɵProvidersFeature([NzFormNoStatusService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["bps-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-disabled", "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", "ant-input-affix-wrapper-focused", "ngClass", 4, "ngIf", "ngIfElse"], ["bps-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper", 3, "ngClass"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["bps-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["bps-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["bps-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["bps-input-group-slot", "", "type", "suffix", 3, "icon", "template"], [3, "status", 4, "ngIf"], [3, "status"], ["bps-input-group-slot", "", "type", "suffix", 4, "ngIf"], ["bps-input-group-slot", "", "type", "suffix"]], template: function BpsInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsInputGroupComponent_span_0_Template, 4, 4, "span", 0);
            i0.ɵɵtemplate(1, BpsInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, BpsInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, BpsInputGroupComponent_ng_template_5_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", _r1);
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgTemplateOutlet, i5.BpsInputGroupSlotComponent, i6.BpsFormItemFeedbackIconComponent], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsSearch", void 0);
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsCompact", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsInputGroupComponent, [{
        type: Component,
        args: [{
                selector: 'bps-input-group',
                exportAs: 'bpsInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzFormNoStatusService],
                template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="bpsAddOnBefore || bpsAddOnBeforeIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnBeforeIcon"
        [template]="bpsAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix || hasFeedback; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-disabled]="disabled"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
        [class.ant-input-affix-wrapper-focused]="focused"
        [ngClass]="affixInGroupStatusCls"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="bpsAddOnAfter || bpsAddOnAfterIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnAfterIcon"
        [template]="bpsAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span
        *ngIf="bpsPrefix || bpsPrefixIcon"
        bps-input-group-slot
        type="prefix"
        [icon]="bpsPrefixIcon"
        [template]="bpsPrefix"
      ></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span
        *ngIf="bpsSuffix || bpsSuffixIcon || isFeedback"
        bps-input-group-slot
        type="suffix"
        [icon]="bpsSuffixIcon"
        [template]="bpsSuffix"
      >
        <bps-form-item-feedback-icon *ngIf="isFeedback" [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      <span *ngIf="!isAddOn && !isAffix && isFeedback" bps-input-group-slot type="suffix">
        <bps-form-item-feedback-icon [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
  `,
                host: {
                    '[class.ant-input-group-compact]': `bpsCompact`,
                    '[class.ant-input-search-enter-button]': `bpsSearch`,
                    '[class.ant-input-search]': `bpsSearch`,
                    '[class.ant-input-search-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-search-sm]': `bpsSearch && isSmall`,
                    '[class.ant-input-search-large]': `bpsSearch && isLarge`,
                    '[class.ant-input-group-wrapper]': `isAddOn`,
                    '[class.ant-input-group-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                    '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                    '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                    '[class.ant-input-affix-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                    '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                    '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                    '[class.ant-input-group]': `!isAffix && !isAddOn`,
                    '[class.ant-input-group-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                }
            }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.NzFormStatusService, decorators: [{
                type: Optional
            }] }, { type: i3.NzFormNoStatusService, decorators: [{
                type: Optional
            }] }]; }, { listOfNzInputDirective: [{
            type: ContentChildren,
            args: [BpsInputDirective]
        }], bpsAddOnBeforeIcon: [{
            type: Input
        }], bpsAddOnAfterIcon: [{
            type: Input
        }], bpsPrefixIcon: [{
            type: Input
        }], bpsSuffixIcon: [{
            type: Input
        }], bpsAddOnBefore: [{
            type: Input
        }], bpsAddOnAfter: [{
            type: Input
        }], bpsPrefix: [{
            type: Input
        }], bpsStatus: [{
            type: Input
        }], bpsSuffix: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsSearch: [{
            type: Input
        }], bpsCompact: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUlMLFFBQVEsRUFLUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUscUJBQXFCLEVBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7SUFrQnBELDBCQU1ROzs7SUFGTixnREFBMkIsbUNBQUE7Ozs7SUFHN0IsK0JBUUM7SUFDQyxxR0FBOEQ7SUFDaEUsaUJBQU87Ozs7SUFQTCxtRUFBbUQsOENBQUEsOENBQUEsbURBQUE7SUFJbkQsc0RBQWlDO0lBRXBCLGVBQWtDO0lBQWxDLHNDQUFrQzs7O0lBRWpELDBCQU1ROzs7SUFGTiwrQ0FBMEIsa0NBQUE7OztJQXZCOUIsK0JBQXNGO0lBQ3BGLGdGQU1RO0lBQ1IsaUZBVU87SUFDUCxnRkFNUTtJQUNWLGlCQUFPOzs7O0lBeEJGLGVBQTBDO0lBQTFDLHlFQUEwQztJQU8xQyxlQUE4QjtJQUE5Qiwy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O1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIG1lcmdlTWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekZvcm1Ob1N0YXR1c1NlcnZpY2UsIE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUsIE56U3RhdHVzLCBOelZhbGlkYXRlU3RhdHVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGdldFN0YXR1c0NsYXNzTmFtZXMsIElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgQnBzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBicHMtaW5wdXQtZ3JvdXBbYnBzU3VmZml4XSwgYnBzLWlucHV0LWdyb3VwW2Jwc1ByZWZpeF1gXG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXRHcm91cFdoaXRTdWZmaXhPclByZWZpeERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWlucHV0LWdyb3VwJyxcbiAgZXhwb3J0QXM6ICdicHNJbnB1dEdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOekZvcm1Ob1N0YXR1c1NlcnZpY2VdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWlucHV0LXdyYXBwZXIgYW50LWlucHV0LWdyb3VwXCIgKm5nSWY9XCJpc0FkZE9uOyBlbHNlIG5vQWRkT25UZW1wbGF0ZVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nSWY9XCJicHNBZGRPbkJlZm9yZSB8fCBicHNBZGRPbkJlZm9yZUljb25cIlxuICAgICAgICBicHMtaW5wdXQtZ3JvdXAtc2xvdFxuICAgICAgICB0eXBlPVwiYWRkb25cIlxuICAgICAgICBbaWNvbl09XCJicHNBZGRPbkJlZm9yZUljb25cIlxuICAgICAgICBbdGVtcGxhdGVdPVwiYnBzQWRkT25CZWZvcmVcIlxuICAgICAgPjwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiaXNBZmZpeCB8fCBoYXNGZWVkYmFjazsgZWxzZSBjb250ZW50VGVtcGxhdGVcIlxuICAgICAgICBjbGFzcz1cImFudC1pbnB1dC1hZmZpeC13cmFwcGVyXCJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXT1cImlzU21hbGxcIlxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddPVwiaXNMYXJnZVwiXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1mb2N1c2VkXT1cImZvY3VzZWRcIlxuICAgICAgICBbbmdDbGFzc109XCJhZmZpeEluR3JvdXBTdGF0dXNDbHNcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cImJwc0FkZE9uQWZ0ZXIgfHwgYnBzQWRkT25BZnRlckljb25cIlxuICAgICAgICBicHMtaW5wdXQtZ3JvdXAtc2xvdFxuICAgICAgICB0eXBlPVwiYWRkb25cIlxuICAgICAgICBbaWNvbl09XCJicHNBZGRPbkFmdGVySWNvblwiXG4gICAgICAgIFt0ZW1wbGF0ZV09XCJicHNBZGRPbkFmdGVyXCJcbiAgICAgID48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxuZy10ZW1wbGF0ZSAjbm9BZGRPblRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzQWZmaXhcIiBbbmdJZkVsc2VdPVwiY29udGVudFRlbXBsYXRlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhZmZpeFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2FmZml4VGVtcGxhdGU+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cImJwc1ByZWZpeCB8fCBicHNQcmVmaXhJY29uXCJcbiAgICAgICAgYnBzLWlucHV0LWdyb3VwLXNsb3RcbiAgICAgICAgdHlwZT1cInByZWZpeFwiXG4gICAgICAgIFtpY29uXT1cImJwc1ByZWZpeEljb25cIlxuICAgICAgICBbdGVtcGxhdGVdPVwiYnBzUHJlZml4XCJcbiAgICAgID48L3NwYW4+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiYnBzU3VmZml4IHx8IGJwc1N1ZmZpeEljb24gfHwgaXNGZWVkYmFja1wiXG4gICAgICAgIGJwcy1pbnB1dC1ncm91cC1zbG90XG4gICAgICAgIHR5cGU9XCJzdWZmaXhcIlxuICAgICAgICBbaWNvbl09XCJicHNTdWZmaXhJY29uXCJcbiAgICAgICAgW3RlbXBsYXRlXT1cImJwc1N1ZmZpeFwiXG4gICAgICA+XG4gICAgICAgIDxicHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24gKm5nSWY9XCJpc0ZlZWRiYWNrXCIgW3N0YXR1c109XCJzdGF0dXNcIj48L2Jwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPHNwYW4gKm5nSWY9XCIhaXNBZGRPbiAmJiAhaXNBZmZpeCAmJiBpc0ZlZWRiYWNrXCIgYnBzLWlucHV0LWdyb3VwLXNsb3QgdHlwZT1cInN1ZmZpeFwiPlxuICAgICAgICA8YnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uIFtzdGF0dXNdPVwic3RhdHVzXCI+PC9icHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogYGJwc0NvbXBhY3RgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b25dJzogYGJwc1NlYXJjaGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoXSc6IGBicHNTZWFyY2hgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiBgYnBzU2VhcmNoICYmIGlzU21hbGxgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1sYXJnZV0nOiBgYnBzU2VhcmNoICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXJdJzogYGlzQWRkT25gLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6IGBpc0FkZE9uICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogYGlzQWRkT24gJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbmAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZm9jdXNlZF0nOiBgaXNBZmZpeCAmJiBmb2N1c2VkYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWRpc2FibGVkXSc6IGBpc0FmZml4ICYmIGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6IGBpc0FmZml4ICYmICFpc0FkZE9uICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21dJzogYGlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXBdJzogYCFpc0FmZml4ICYmICFpc0FkZE9uYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6IGAhaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc0xhcmdlYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNTZWFyY2g6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0NvbXBhY3Q6IEJvb2xlYW5JbnB1dDtcblxuICBAQ29udGVudENoaWxkcmVuKEJwc0lucHV0RGlyZWN0aXZlKSBsaXN0T2ZOeklucHV0RGlyZWN0aXZlITogUXVlcnlMaXN0PEJwc0lucHV0RGlyZWN0aXZlPjtcbiAgQElucHV0KCkgYnBzQWRkT25CZWZvcmVJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGJwc0FkZE9uQWZ0ZXJJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGJwc1ByZWZpeEljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYnBzU3VmZml4SWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNBZGRPbkJlZm9yZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBicHNBZGRPbkFmdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJwc1ByZWZpeD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBicHNTdGF0dXM6IE56U3RhdHVzID0gJyc7XG4gIEBJbnB1dCgpIGJwc1N1ZmZpeD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBicHNTaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDb21wYWN0ID0gZmFsc2U7XG4gIGlzTGFyZ2UgPSBmYWxzZTtcbiAgaXNTbWFsbCA9IGZhbHNlO1xuICBpc0FmZml4ID0gZmFsc2U7XG4gIGlzQWRkT24gPSBmYWxzZTtcbiAgaXNGZWVkYmFjayA9IGZhbHNlO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIC8vIHN0YXR1c1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtaW5wdXQnO1xuICBhZmZpeFN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xuICBncm91cFN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xuICBhZmZpeEluR3JvdXBTdGF0dXNDbHM6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcbiAgc3RhdHVzOiBOelZhbGlkYXRlU3RhdHVzID0gJyc7XG4gIGhhc0ZlZWRiYWNrOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1TdGF0dXNTZXJ2aWNlPzogTnpGb3JtU3RhdHVzU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56Rm9ybU5vU3RhdHVzU2VydmljZT86IE56Rm9ybU5vU3RhdHVzU2VydmljZVxuICApIHsgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uc2l6ZSA9IHRoaXMuYnBzU2l6ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpGb3JtU3RhdHVzU2VydmljZT8uZm9ybVN0YXR1c0NoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJlLCBjdXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJlLnN0YXR1cyA9PT0gY3VyLnN0YXR1cyAmJiBwcmUuaGFzRmVlZGJhY2sgPT09IGN1ci5oYXNGZWVkYmFjaztcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNTdHlsZXMoc3RhdHVzLCBoYXNGZWVkYmFjayk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZm9jdXNNb25pdG9yXG4gICAgICAubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gISFmb2N1c09yaWdpbjtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgICBjb25zdCBsaXN0T2ZJbnB1dENoYW5nZSQgPSB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpKTtcbiAgICBsaXN0T2ZJbnB1dENoYW5nZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiBtZXJnZSguLi5bbGlzdE9mSW5wdXRDaGFuZ2UkLCAuLi5saXN0Lm1hcCgoaW5wdXQ6IEJwc0lucHV0RGlyZWN0aXZlKSA9PiBpbnB1dC5kaXNhYmxlZCQpXSkpLFxuICAgICAgICBtZXJnZU1hcCgoKSA9PiBsaXN0T2ZJbnB1dENoYW5nZSQpLFxuICAgICAgICBtYXAobGlzdCA9PiBsaXN0LnNvbWUoKGlucHV0OiBCcHNJbnB1dERpcmVjdGl2ZSkgPT4gaW5wdXQuZGlzYWJsZWQpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGRpc2FibGVkID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBicHNTaXplLFxuICAgICAgYnBzU3VmZml4LFxuICAgICAgYnBzUHJlZml4LFxuICAgICAgYnBzUHJlZml4SWNvbixcbiAgICAgIGJwc1N1ZmZpeEljb24sXG4gICAgICBicHNBZGRPbkFmdGVyLFxuICAgICAgYnBzQWRkT25CZWZvcmUsXG4gICAgICBicHNBZGRPbkFmdGVySWNvbixcbiAgICAgIGJwc0FkZE9uQmVmb3JlSWNvbixcbiAgICAgIGJwc1N0YXR1c1xuICAgIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChicHNTaXplKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XG4gICAgICB0aGlzLmlzTGFyZ2UgPSB0aGlzLmJwc1NpemUgPT09ICdsYXJnZSc7XG4gICAgICB0aGlzLmlzU21hbGwgPSB0aGlzLmJwc1NpemUgPT09ICdzbWFsbCc7XG4gICAgfVxuICAgIGlmIChicHNTdWZmaXggfHwgYnBzUHJlZml4IHx8IGJwc1ByZWZpeEljb24gfHwgYnBzU3VmZml4SWNvbikge1xuICAgICAgdGhpcy5pc0FmZml4ID0gISEodGhpcy5icHNTdWZmaXggfHwgdGhpcy5icHNQcmVmaXggfHwgdGhpcy5icHNQcmVmaXhJY29uIHx8IHRoaXMuYnBzU3VmZml4SWNvbik7XG4gICAgfVxuICAgIGlmIChicHNBZGRPbkFmdGVyIHx8IGJwc0FkZE9uQmVmb3JlIHx8IGJwc0FkZE9uQWZ0ZXJJY29uIHx8IGJwc0FkZE9uQmVmb3JlSWNvbikge1xuICAgICAgdGhpcy5pc0FkZE9uID0gISEodGhpcy5icHNBZGRPbkFmdGVyIHx8IHRoaXMuYnBzQWRkT25CZWZvcmUgfHwgdGhpcy5icHNBZGRPbkFmdGVySWNvbiB8fCB0aGlzLmJwc0FkZE9uQmVmb3JlSWNvbik7XG4gICAgICB0aGlzLm56Rm9ybU5vU3RhdHVzU2VydmljZT8ubm9Gb3JtU3RhdHVzPy5uZXh0KHRoaXMuaXNBZGRPbik7XG4gICAgfVxuICAgIGlmIChicHNTdGF0dXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHRoaXMuYnBzU3RhdHVzLCB0aGlzLmhhc0ZlZWRiYWNrKTtcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0YXR1c1N0eWxlcyhzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMsIGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gc2V0IGlubmVyIHN0YXR1c1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcbiAgICB0aGlzLmlzRmVlZGJhY2sgPSAhIXN0YXR1cyAmJiBoYXNGZWVkYmFjaztcbiAgICBjb25zdCBiYXNlQWZmaXggPSAhISh0aGlzLmJwc1N1ZmZpeCB8fCB0aGlzLmJwc1ByZWZpeCB8fCB0aGlzLmJwc1ByZWZpeEljb24gfHwgdGhpcy5icHNTdWZmaXhJY29uKTtcbiAgICB0aGlzLmlzQWZmaXggPSBiYXNlQWZmaXggfHwgKCF0aGlzLmlzQWRkT24gJiYgaGFzRmVlZGJhY2spO1xuICAgIHRoaXMuYWZmaXhJbkdyb3VwU3RhdHVzQ2xzID1cbiAgICAgIHRoaXMuaXNBZmZpeCB8fCB0aGlzLmlzRmVlZGJhY2tcbiAgICAgICAgPyAodGhpcy5hZmZpeFN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXMoYCR7dGhpcy5wcmVmaXhDbHN9LWFmZml4LXdyYXBwZXJgLCBzdGF0dXMsIGhhc0ZlZWRiYWNrKSlcbiAgICAgICAgOiB7fTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAvLyByZW5kZXIgc3RhdHVzIGlmIG56U3RhdHVzIGlzIHNldFxuICAgIHRoaXMuYWZmaXhTdGF0dXNDbHMgPSBnZXRTdGF0dXNDbGFzc05hbWVzKFxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LWFmZml4LXdyYXBwZXJgLFxuICAgICAgdGhpcy5pc0FkZE9uID8gJycgOiBzdGF0dXMsXG4gICAgICB0aGlzLmlzQWRkT24gPyBmYWxzZSA6IGhhc0ZlZWRiYWNrXG4gICAgKTtcbiAgICB0aGlzLmdyb3VwU3RhdHVzQ2xzID0gZ2V0U3RhdHVzQ2xhc3NOYW1lcyhcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1ncm91cC13cmFwcGVyYCxcbiAgICAgIHRoaXMuaXNBZGRPbiA/IHN0YXR1cyA6ICcnLFxuICAgICAgdGhpcy5pc0FkZE9uID8gaGFzRmVlZGJhY2sgOiBmYWxzZVxuICAgICk7XG4gICAgY29uc3Qgc3RhdHVzQ2xzID0ge1xuICAgICAgLi4udGhpcy5hZmZpeFN0YXR1c0NscyxcbiAgICAgIC4uLnRoaXMuZ3JvdXBTdGF0dXNDbHNcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHN0YXR1c0NscykuZm9yRWFjaChzdGF0dXMgPT4ge1xuICAgICAgaWYgKHN0YXR1c0Nsc1tzdGF0dXNdKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0YXR1cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=