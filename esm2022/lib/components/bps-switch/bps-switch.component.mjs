import { __decorate } from "tslib";
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
import * as i5 from "../core/addon/string_template_outlet";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/wave";
const _c0 = ["switchElement"];
function BpsSwitchComponent_ng_container_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} }
function BpsSwitchComponent_ng_container_0_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.bpsCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSwitchComponent_ng_container_0_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.bpsCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r8.bpsUnCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSwitchComponent_ng_container_0_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 10);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r6.bpsUnCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 1, 2)(3, "span", 3);
    i0.ɵɵtemplate(4, BpsSwitchComponent_ng_container_0_span_4_Template, 1, 0, "span", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 5);
    i0.ɵɵtemplate(6, BpsSwitchComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(7, BpsSwitchComponent_ng_container_0_ng_template_7_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r5 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-switch-checked", ctx_r0.isChecked)("ant-switch-loading", ctx_r0.bpsLoading)("ant-switch-disabled", ctx_r0.bpsDisabled)("ant-switch-small", ctx_r0.bpsSize === "small")("ant-switch-rtl", ctx_r0.dir === "rtl");
    i0.ɵɵproperty("disabled", ctx_r0.bpsDisabled)("nzWaveExtraNode", true);
    i0.ɵɵattribute("id", ctx_r0.bpsId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsLoading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isChecked)("ngIfElse", _r5);
} }
function BpsSwitchComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12)(2, "div", 13);
    i0.ɵɵlistener("click", function BpsSwitchComponent_ng_container_1_ng_container_3_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.checkNode(ctx_r11.bpsDualValues[0], ctx_r11.bpsDualValues[1])); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵlistener("click", function BpsSwitchComponent_ng_container_1_ng_container_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.checkNode(ctx_r13.bpsDualValues[1], ctx_r13.bpsDualValues[0])); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bps-switch-checked", ctx_r10.bpsDualValues[0].checked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.bpsDualValues[0].title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-switch-checked", ctx_r10.bpsDualValues[1].checked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.bpsDualValues[1].title, " ");
} }
function BpsSwitchComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 11, 2);
    i0.ɵɵlistener("keydown", function BpsSwitchComponent_ng_container_1_Template_button_keydown_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onKeyDown($event)); });
    i0.ɵɵtemplate(3, BpsSwitchComponent_ng_container_1_ng_container_3_Template, 6, 6, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-switch-disabled", ctx_r1.bpsDisabled);
    i0.ɵɵproperty("disabled", ctx_r1.bpsDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.bpsDualValues.length > 1);
} }
const NZ_CONFIG_MODULE_NAME = 'switch';
export class BpsSwitchComponent {
    updateValue(value) {
        if (this.isChecked !== value) {
            this.isChecked = value;
            this.onChange(this.isChecked);
        }
    }
    focus() {
        this.focusMonitor.focusVia(this.switchElement?.nativeElement, 'keyboard');
    }
    blur() {
        this.switchElement?.nativeElement.blur();
    }
    constructor(nzConfigService, host, ngZone, cdr, focusMonitor, directionality) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsLoading = false;
        this.bpsDisabled = false;
        this.bpsControl = false;
        this.bpsCheckedChildren = null;
        this.bpsUnCheckedChildren = null;
        this.bpsSize = 'default';
        this.bpsId = null;
        this.bpsDual = false;
        this.bpsDualValues = [];
        this.bpsDualValuesChange = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
    }
    ngOnInit() {
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.host.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                event.preventDefault();
                if (this.bpsControl || this.bpsDisabled || this.bpsLoading) {
                    return;
                }
                this.ngZone.run(() => {
                    this.updateValue(!this.isChecked);
                    this.cdr.markForCheck();
                });
            });
            if (this.switchElement === null || this.switchElement === undefined)
                return;
            fromEvent(this.switchElement?.nativeElement, 'keydown')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                if (this.bpsControl || this.bpsDisabled || this.bpsLoading) {
                    return;
                }
                const { keyCode } = event;
                if (keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW && keyCode !== SPACE && keyCode !== ENTER) {
                    return;
                }
                event.preventDefault();
                this.ngZone.run(() => {
                    if (keyCode === LEFT_ARROW) {
                        this.updateValue(false);
                    }
                    else if (keyCode === RIGHT_ARROW) {
                        this.updateValue(true);
                    }
                    else if (keyCode === SPACE || keyCode === ENTER) {
                        this.updateValue(!this.isChecked);
                    }
                    this.cdr.markForCheck();
                });
            });
        });
    }
    ngAfterViewInit() {
        if (this.switchElement === null || this.switchElement === undefined)
            return;
        this.focusMonitor
            .monitor(this.switchElement?.nativeElement, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                /** https://github.com/angular/angular/issues/17793 **/
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement?.nativeElement);
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkNode(nodeA, nodeB) {
        if (!this.bpsDisabled) {
            nodeA.checked = true;
            nodeB.checked = false;
            this.bpsDualValuesChange.emit(this.bpsDualValues);
        }
    }
    onKeyDown(e) {
        if (!this.bpsControl && !this.bpsDisabled && !this.bpsLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.isChecked);
                e.preventDefault();
            }
        }
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = function BpsSwitchComponent_Factory(t) { return new (t || BpsSwitchComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i3.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSwitchComponent, selectors: [["bps-switch"]], viewQuery: function BpsSwitchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.switchElement = _t.first);
        } }, inputs: { bpsLoading: "bpsLoading", bpsDisabled: "bpsDisabled", bpsControl: "bpsControl", bpsCheckedChildren: "bpsCheckedChildren", bpsUnCheckedChildren: "bpsUnCheckedChildren", bpsSize: "bpsSize", bpsId: "bpsId", bpsDual: "bpsDual", bpsDualValues: "bpsDualValues" }, outputs: { bpsDualValuesChange: "bpsDualValuesChange" }, exportAs: ["bpsSwitch"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsSwitchComponent),
                    multi: true
                }
            ])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["nz-wave", "", "type", "button", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode"], ["switchElement", ""], [1, "ant-switch-handle"], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf", "ngIfElse"], ["uncheckTemplate", ""], [1, "ant-click-animating-node"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"], ["type", "button", 1, "ant-switch", "bps-switch", 3, "disabled", "keydown"], [1, "bps-switch-inner"], [1, "bps-switch-node", "bps-switch-node-left", 3, "click"], [1, "bps-switch-node", "bps-switch-node-right", 3, "click"]], template: function BpsSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSwitchComponent_ng_container_0_Template, 10, 16, "ng-container", 0);
            i0.ɵɵtemplate(1, BpsSwitchComponent_ng_container_1_Template, 4, 4, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.bpsDual);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsDual);
        } }, dependencies: [i4.NgIf, i5.NzStringTemplateOutletDirective, i6.NzIconDirective, i7.NzWaveDirective], styles: [".ant-switch:after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch-handle:before{top:-5px;background-color:#999!important;width:16px!important;height:16px!important;left:0}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:solid 1px #666666!important;background-color:#363636!important;background-image:none!important}.ant-switch-checked:not(.ant-switch-disabled) .ant-switch-handle:before{border:solid 1px #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked .ant-switch-handle:before{left:100%!important;margin-left:1px!important;transform:translate(calc(-100% + 2px))}.ant-switch:not(.ant-switch-checked) .ant-switch-handle:before{transform:translate(calc(-100% + 14px))}.ant-switch-checked{border:solid 1px #00a2d1!important}.ant-switch-disabled:after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:solid 1px #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch-handle.bps-switch:after{content:\"\"!important;position:relative!important}.bps-switch-node{border-radius:4px;border:solid 1px #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:solid 1px #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}\n", "bps-switch{display:inline-block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsControl", void 0);
__decorate([
    WithConfig()
], BpsSwitchComponent.prototype, "bpsSize", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsDual", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSwitchComponent, [{
        type: Component,
        args: [{ selector: 'bps-switch', exportAs: 'bpsSwitch', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsSwitchComponent),
                        multi: true
                    }
                ], template: `
<ng-container *ngIf="!bpsDual">
  <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [attr.id]="bpsId"
      [disabled]="bpsDisabled"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="bpsLoading"
      [class.ant-switch-disabled]="bpsDisabled"
      [class.ant-switch-small]="bpsSize === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
    >
      <span class="ant-switch-handle">
        <span *ngIf="bpsLoading" nz-icon nzType="loading" class="ant-switch-loading-icon"></span>
      </span>
      <span class="ant-switch-inner">
        <ng-container *ngIf="isChecked; else uncheckTemplate">
          <ng-container *nzStringTemplateOutlet="bpsCheckedChildren">{{ bpsCheckedChildren }}</ng-container>
        </ng-container>
        <ng-template #uncheckTemplate>
          <ng-container *nzStringTemplateOutlet="bpsUnCheckedChildren">{{ bpsUnCheckedChildren }}</ng-container>
        </ng-template>
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
</ng-container>
<ng-container *ngIf="bpsDual">
  <button type="button" #switchElement
          class="ant-switch bps-switch"
          [disabled]="bpsDisabled"
          [class.bps-switch-disabled]="bpsDisabled"
          (keydown)="onKeyDown($event)">
    <ng-container *ngIf="bpsDualValues.length > 1">
      <div class="bps-switch-inner">
        <div class="bps-switch-node bps-switch-node-left"
             (click)="checkNode(bpsDualValues[0], bpsDualValues[1])"
             [class.bps-switch-checked]="bpsDualValues[0].checked">
          {{ bpsDualValues[0].title }}
        </div>
        <div class="bps-switch-node bps-switch-node-right"
             (click)="checkNode(bpsDualValues[1], bpsDualValues[0])"
             [class.bps-switch-checked]="bpsDualValues[1].checked">
          {{ bpsDualValues[1].title }}
        </div>
      </div>  
    </ng-container>
  </button>
</ng-container>
  `, styles: [".ant-switch:after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch-handle:before{top:-5px;background-color:#999!important;width:16px!important;height:16px!important;left:0}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:solid 1px #666666!important;background-color:#363636!important;background-image:none!important}.ant-switch-checked:not(.ant-switch-disabled) .ant-switch-handle:before{border:solid 1px #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked .ant-switch-handle:before{left:100%!important;margin-left:1px!important;transform:translate(calc(-100% + 2px))}.ant-switch:not(.ant-switch-checked) .ant-switch-handle:before{transform:translate(calc(-100% + 14px))}.ant-switch-checked{border:solid 1px #00a2d1!important}.ant-switch-disabled:after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:solid 1px #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch-handle.bps-switch:after{content:\"\"!important;position:relative!important}.bps-switch-node{border-radius:4px;border:solid 1px #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:solid 1px #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}\n", "bps-switch{display:inline-block}\n"] }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { switchElement: [{
            type: ViewChild,
            args: ['switchElement', { static: true }]
        }], bpsLoading: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsControl: [{
            type: Input
        }], bpsCheckedChildren: [{
            type: Input
        }], bpsUnCheckedChildren: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsId: [{
            type: Input
        }], bpsDual: [{
            type: Input
        }], bpsDualValues: [{
            type: Input
        }], bpsDualValuesChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zd2l0Y2gvYnBzLXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7SUEwQy9DLDBCQUF5Rjs7O0lBSXZGLDZCQUEyRDtJQUFBLFlBQXdCO0lBQUEsMEJBQWU7OztJQUF2QyxlQUF3QjtJQUF4QiwrQ0FBd0I7OztJQURyRiw2QkFBc0Q7SUFDcEQsb0hBQWtHO0lBQ3BHLDBCQUFlOzs7SUFERSxlQUEwQztJQUExQyxrRUFBMEM7OztJQUd6RCw2QkFBNkQ7SUFBQSxZQUEwQjtJQUFBLDBCQUFlOzs7SUFBekMsZUFBMEI7SUFBMUIsaURBQTBCOzs7SUFBdkYsbUhBQXNHOzs7SUFBdkYsb0VBQTRDOzs7SUF2QnJFLDZCQUErQjtJQUM3QixvQ0Fh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a0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IEVOVEVSLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTaXplRFNUeXBlLCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3N3aXRjaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1zd2l0Y2gnLFxyXG4gIGV4cG9ydEFzOiAnYnBzU3dpdGNoJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzU3dpdGNoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy1zd2l0Y2guY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBicHMtc3dpdGNoIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCIhYnBzRHVhbFwiPlxyXG4gIDxidXR0b25cclxuICAgICAgbnotd2F2ZVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgY2xhc3M9XCJhbnQtc3dpdGNoXCJcclxuICAgICAgI3N3aXRjaEVsZW1lbnRcclxuICAgICAgW2F0dHIuaWRdPVwiYnBzSWRcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1jaGVja2VkXT1cImlzQ2hlY2tlZFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLWxvYWRpbmddPVwiYnBzTG9hZGluZ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLWRpc2FibGVkXT1cImJwc0Rpc2FibGVkXCJcclxuICAgICAgW2NsYXNzLmFudC1zd2l0Y2gtc21hbGxdPVwiYnBzU2l6ZSA9PT0gJ3NtYWxsJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgW256V2F2ZUV4dHJhTm9kZV09XCJ0cnVlXCJcclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3dpdGNoLWhhbmRsZVwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiYnBzTG9hZGluZ1wiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiIGNsYXNzPVwiYW50LXN3aXRjaC1sb2FkaW5nLWljb25cIj48L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3dpdGNoLWlubmVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ2hlY2tlZDsgZWxzZSB1bmNoZWNrVGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNDaGVja2VkQ2hpbGRyZW5cIj57eyBicHNDaGVja2VkQ2hpbGRyZW4gfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3VuY2hlY2tUZW1wbGF0ZT5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNVbkNoZWNrZWRDaGlsZHJlblwiPnt7IGJwc1VuQ2hlY2tlZENoaWxkcmVuIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNsaWNrLWFuaW1hdGluZy1ub2RlXCI+PC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJicHNEdWFsXCI+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgI3N3aXRjaEVsZW1lbnRcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXN3aXRjaCBicHMtc3dpdGNoXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXHJcbiAgICAgICAgICBbY2xhc3MuYnBzLXN3aXRjaC1kaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXHJcbiAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc0R1YWxWYWx1ZXMubGVuZ3RoID4gMVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnBzLXN3aXRjaC1pbm5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJicHMtc3dpdGNoLW5vZGUgYnBzLXN3aXRjaC1ub2RlLWxlZnRcIlxyXG4gICAgICAgICAgICAgKGNsaWNrKT1cImNoZWNrTm9kZShicHNEdWFsVmFsdWVzWzBdLCBicHNEdWFsVmFsdWVzWzFdKVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuYnBzLXN3aXRjaC1jaGVja2VkXT1cImJwc0R1YWxWYWx1ZXNbMF0uY2hlY2tlZFwiPlxyXG4gICAgICAgICAge3sgYnBzRHVhbFZhbHVlc1swXS50aXRsZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJicHMtc3dpdGNoLW5vZGUgYnBzLXN3aXRjaC1ub2RlLXJpZ2h0XCJcclxuICAgICAgICAgICAgIChjbGljayk9XCJjaGVja05vZGUoYnBzRHVhbFZhbHVlc1sxXSwgYnBzRHVhbFZhbHVlc1swXSlcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1zd2l0Y2gtY2hlY2tlZF09XCJicHNEdWFsVmFsdWVzWzFdLmNoZWNrZWRcIj5cclxuICAgICAgICAgIHt7IGJwc0R1YWxWYWx1ZXNbMV0udGl0bGUgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvYnV0dG9uPlxyXG48L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xyXG5cclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzTG9hZGluZzogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNEaXNhYmxlZDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNDb250cm9sOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7IH07XHJcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4geyB9O1xyXG4gIEBWaWV3Q2hpbGQoJ3N3aXRjaEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzd2l0Y2hFbGVtZW50ITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ29udHJvbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc0NoZWNrZWRDaGlsZHJlbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNVbkNoZWNrZWRDaGlsZHJlbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGJwc1NpemU6IE56U2l6ZURTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBicHNJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEdWFsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnBzRHVhbFZhbHVlczogeyB0aXRsZTogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuIH1bXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBicHNEdWFsVmFsdWVzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyB0aXRsZTogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuIH1bXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgaXNOekRpc2FibGVGaXJzdENoYW5nZSA9IHRydWU7XHJcblxyXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0NoZWNrZWQgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5pc0NoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnN3aXRjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuc3dpdGNoRWxlbWVudD8ubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG5cclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgZnJvbUV2ZW50KHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuYnBzQ29udHJvbCB8fCB0aGlzLmJwc0Rpc2FibGVkIHx8IHRoaXMuYnBzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5pc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3dpdGNoRWxlbWVudCA9PT0gbnVsbCB8fCB0aGlzLnN3aXRjaEVsZW1lbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50LCAna2V5ZG93bicpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYnBzQ29udHJvbCB8fCB0aGlzLmJwc0Rpc2FibGVkIHx8IHRoaXMuYnBzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcclxuICAgICAgICAgIGlmIChrZXlDb2RlICE9PSBMRUZUX0FSUk9XICYmIGtleUNvZGUgIT09IFJJR0hUX0FSUk9XICYmIGtleUNvZGUgIT09IFNQQUNFICYmIGtleUNvZGUgIT09IEVOVEVSKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5pc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zd2l0Y2hFbGVtZW50ID09PSBudWxsIHx8IHRoaXMuc3dpdGNoRWxlbWVudCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvclxyXG4gICAgICAubW9uaXRvcih0aGlzLnN3aXRjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQsIHRydWUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3NzkzICoqL1xyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLnN3aXRjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja05vZGUobm9kZUE6IHsgdGl0bGU6IHN0cmluZzsgY2hlY2tlZDogYm9vbGVhbiB9LCBub2RlQjogeyB0aXRsZTogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuIH0pIHtcclxuICAgIGlmICghdGhpcy5icHNEaXNhYmxlZCkge1xyXG4gICAgICBub2RlQS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgbm9kZUIuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJwc0R1YWxWYWx1ZXNDaGFuZ2UuZW1pdCh0aGlzLmJwc0R1YWxWYWx1ZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5icHNDb250cm9sICYmICF0aGlzLmJwc0Rpc2FibGVkICYmICF0aGlzLmJwc0xvYWRpbmcpIHtcclxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBTUEFDRSB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5pc0NoZWNrZWQpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzRGlzYWJsZWQgPSAodGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlICYmIHRoaXMuYnBzRGlzYWJsZWQpIHx8IGRpc2FibGVkO1xyXG4gICAgdGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19