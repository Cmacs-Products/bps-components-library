import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
function BpsOptionItemComponent_ng_template_1_ng_template_0_Template(rf, ctx) { }
function BpsOptionItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsOptionItemComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
} }
function BpsOptionItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(ctx_r2.label);
} }
function BpsOptionItemComponent_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
function BpsOptionItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, BpsOptionItemComponent_div_4_span_1_Template, 1, 0, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.icon)("ngIfElse", ctx_r3.icon);
} }
export class BpsOptionItemComponent {
    constructor(elementRef, ngZone, destroy$) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.destroy$ = destroy$;
        this.selected = false;
        this.activated = false;
        this.grouped = false;
        this.customContent = false;
        this.template = null;
        this.disabled = false;
        this.showState = false;
        this.label = null;
        this.value = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.icon = null;
        this.itemClick = new EventEmitter();
        this.itemHover = new EventEmitter();
    }
    ngOnChanges(changes) {
        const { value, activatedValue, listOfSelectedValue } = changes;
        if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some(v => this.compareWith(v, this.value));
        }
        if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
        }
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                if (!this.disabled) {
                    this.ngZone.run(() => this.itemClick.emit(this.value));
                }
            });
            fromEvent(this.elementRef.nativeElement, 'mouseenter')
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                if (!this.disabled) {
                    this.ngZone.run(() => this.itemHover.emit(this.value));
                }
            });
        });
    }
    static { this.ɵfac = function BpsOptionItemComponent_Factory(t) { return new (t || BpsOptionItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.NzDestroyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionItemComponent, selectors: [["bps-option-item"]], hostAttrs: [1, "ant-select-item", "ant-select-item-option"], hostVars: 9, hostBindings: function BpsOptionItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("title", ctx.title);
            i0.ɵɵclassProp("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
        } }, inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", title: "title", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, features: [i0.ɵɵProvidersFeature([NzDestroyService]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 3, consts: [[1, "ant-select-item-option-content"], [3, "ngIf", "ngIfElse"], ["noCustomContent", ""], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function BpsOptionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, BpsOptionItemComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
            i0.ɵɵtemplate(2, BpsOptionItemComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, BpsOptionItemComponent_div_4_Template, 2, 2, "div", 3);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.customContent)("ngIfElse", _r1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.showState && ctx.selected);
        } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionItemComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option-item',
                template: `
    <div class="ant-select-item-option-content">
      <ng-template [ngIf]="customContent" [ngIfElse]="noCustomContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-template>
      <ng-template #noCustomContent>{{ label }}</ng-template>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <span nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></span>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-select-item ant-select-item-option',
                    '[attr.title]': 'title',
                    '[class.ant-select-item-option-grouped]': 'grouped',
                    '[class.ant-select-item-option-selected]': 'selected && !disabled',
                    '[class.ant-select-item-option-disabled]': 'disabled',
                    '[class.ant-select-item-option-active]': 'activated && !disabled'
                },
                providers: [NzDestroyService]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NzDestroyService }]; }, { grouped: [{
            type: Input
        }], customContent: [{
            type: Input
        }], template: [{
            type: Input
        }], disabled: [{
            type: Input
        }], showState: [{
            type: Input
        }], title: [{
            type: Input
        }], label: [{
            type: Input
        }], value: [{
            type: Input
        }], activatedValue: [{
            type: Input
        }], listOfSelectedValue: [{
            type: Input
        }], icon: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], itemClick: [{
            type: Output
        }], itemHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L29wdGlvbi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7SUFRdkQscUdBQXlEOzs7SUFBNUMsa0RBQTZCOzs7SUFFZCxZQUFXOzs7SUFBWCxrQ0FBVzs7O0lBR3pDLDBCQUE4Rjs7O0lBRGhHLDhCQUFvSDtJQUNsSCwrRUFBOEY7SUFDaEcsaUJBQU07OztJQUQyRCxlQUFhO0lBQWIsbUNBQWEseUJBQUE7O0FBZWxGLE1BQU0sT0FBTyxzQkFBc0I7SUFrQmpDLFlBQ1UsVUFBbUMsRUFDbkMsTUFBYyxFQUNkLFFBQTBCO1FBRjFCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQXBCcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixhQUFRLEdBQWtDLElBQUksQ0FBQztRQUMvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFF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QUFFLHdCQUF3QjtpQkFDbEU7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7aUhBSVUsT0FBTztrQkFBZixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ2EsU0FBUztrQkFBM0IsTUFBTTtZQUNZLFNBQVM7a0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekRlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1vcHRpb24taXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImN1c3RvbUNvbnRlbnRcIiBbbmdJZkVsc2VdPVwibm9DdXN0b21Db250ZW50XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNub0N1c3RvbUNvbnRlbnQ+e3sgbGFiZWwgfX08L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJzaG93U3RhdGUgJiYgc2VsZWN0ZWRcIiBjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tc3RhdGVcIiBzdHlsZT1cInVzZXItc2VsZWN0OiBub25lXCIgdW5zZWxlY3RhYmxlPVwib25cIj5cbiAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvblwiICpuZ0lmPVwiIWljb247IGVsc2UgaWNvblwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1zZWxlY3QtaXRlbSBhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uJyxcbiAgICAnW2F0dHIudGl0bGVdJzogJ3RpdGxlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tZ3JvdXBlZF0nOiAnZ3JvdXBlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1hY3RpdmVdJzogJ2FjdGl2YXRlZCAmJiAhZGlzYWJsZWQnXG4gIH0sXG4gIHByb3ZpZGVyczogW056RGVzdHJveVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEJwc09wdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG4gIGFjdGl2YXRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBncm91cGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRlbnQgPSBmYWxzZTtcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd1N0YXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB2YWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcbiAgQElucHV0KCkgaWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb21wYXJlV2l0aCE6IChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogTnpEZXN0cm95U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgdmFsdWUsIGFjdGl2YXRlZFZhbHVlLCBsaXN0T2ZTZWxlY3RlZFZhbHVlIH0gPSBjaGFuZ2VzO1xuICAgIGlmICh2YWx1ZSB8fCBsaXN0T2ZTZWxlY3RlZFZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLnNvbWUodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHRoaXMudmFsdWUpKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIHx8IGFjdGl2YXRlZFZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZCA9IHRoaXMuY29tcGFyZVdpdGgodGhpcy5hY3RpdmF0ZWRWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuaXRlbUNsaWNrLmVtaXQodGhpcy52YWx1ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuaXRlbUhvdmVyLmVtaXQodGhpcy52YWx1ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==