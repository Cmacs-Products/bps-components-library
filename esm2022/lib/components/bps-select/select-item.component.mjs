import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
function BpsSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.label);
} }
function BpsSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate(ctx_r4.label);
} }
function BpsSelectItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵtemplate(2, BpsSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.deletable)("ngIfElse", _r3);
} }
function BpsSelectItemComponent_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
function BpsSelectItemComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵlistener("click", function BpsSelectItemComponent_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onDelete($event)); });
    i0.ɵɵtemplate(1, BpsSelectItemComponent_span_1_span_1_Template, 1, 0, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.removeIcon)("ngIfElse", ctx_r1.removeIcon);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
export class BpsSelectItemComponent {
    constructor() {
        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this.delete = new EventEmitter();
    }
    onDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.delete.next(e);
        }
    }
    static { this.ɵfac = function BpsSelectItemComponent_Factory(t) { return new (t || BpsSelectItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectItemComponent, selectors: [["bps-select-item"]], hostAttrs: [1, "ant-select-selection-item"], hostVars: 3, hostBindings: function BpsSelectItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("title", ctx.label);
            i0.ɵɵclassProp("ant-select-selection-item-disabled", ctx.disabled);
        } }, inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, decls: 2, vars: 5, consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], ["labelTemplate", ""], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function BpsSelectItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
            i0.ɵɵtemplate(1, BpsSelectItemComponent_span_1_Template, 2, 2, "span", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, ctx.contentTemplateOutletContext));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.deletable && !ctx.disabled);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectItemComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-item',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `,
                host: {
                    class: 'ant-select-selection-item',
                    '[attr.title]': 'label',
                    '[class.ant-select-selection-item-disabled]': 'disabled'
                }
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], label: [{
            type: Input
        }], deletable: [{
            type: Input
        }], removeIcon: [{
            type: Input
        }], contentTemplateOutletContext: [{
            type: Input
        }], contentTemplateOutlet: [{
            type: Input
        }], delete: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L3NlbGVjdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7OztJQVVqQiw4QkFBcUY7SUFBQSxZQUFXO0lBQUEsaUJBQU07OztJQUFqQixlQUFXO0lBQVgsa0NBQVc7OztJQUNwRSxZQUFXOzs7SUFBWCxrQ0FBVzs7O0lBRnpDLDZCQUFvSDtJQUNsSCxzRkFBc0c7SUFDdEcsdUlBQXFEO0lBQ3ZELDBCQUFlOzs7O0lBRm1DLGVBQWlCO0lBQWpCLHVDQUFpQixpQkFBQTs7O0lBSWpFLDBCQUF5RTs7OztJQUQzRSwrQkFBeUc7SUFBM0Isd0tBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDO0lBQ3RHLGdGQUF5RTtJQUMzRSxpQkFBTzs7O0lBRHlCLGVBQW1CO0lBQW5CLHlDQUFtQiwrQkFBQTs7O0FBU3ZELE1BQU0sT0FBTyxzQkFBc0I7SUFTakM7UUFSUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBdUMsSUFBSSxDQUFDO1FBQ2pELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFrQyxJQUFJLENBQUM7UUFDakQsaUNBQTRCLEdBQXFCLElBQUksQ0FBQztRQUN0RCwwQkFBcUIsR0FBMkMsSUFBSSxDQUFDO1FBQzNELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBRTVDLENBQUM7SUFFaEIsUUFBUSxDQUFDLENBQWE7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7dUZBakJVLHNCQUFzQjtvRUFBdEIsc0JBQXNCOzs7O1lBZC9CLHlGQUdlO1lBQ2YseUVBRU87O1lBTlEsa0VBQStDLCtGQUFBO1lBSXZELGVBQTRCO1lBQTVCLHFEQUE0Qjs7O3VGQVUxQixzQkFBc0I7Y0FuQmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLDJCQUEyQjtvQkFDbEMsY0FBYyxFQUFFLE9BQU87b0JBQ3ZCLDRDQUE0QyxFQUFFLFVBQVU7aUJBQ3pEO2FBQ0Y7c0NBRVUsUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csNEJBQTRCO2tCQUFwQyxLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ2EsTUFBTTtrQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0LWl0ZW0nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlT3V0bGV0OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dCB9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1jb250ZW50XCIgKm5nSWY9XCJkZWxldGFibGU7IGVsc2UgbGFiZWxUZW1wbGF0ZVwiPnt7IGxhYmVsIH19PC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2xhYmVsVGVtcGxhdGU+e3sgbGFiZWwgfX08L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxzcGFuICpuZ0lmPVwiZGVsZXRhYmxlICYmICFkaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1yZW1vdmVcIiAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiPlxuICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiICpuZ0lmPVwiIXJlbW92ZUljb247IGVsc2UgcmVtb3ZlSWNvblwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0nLFxuICAgICdbYXR0ci50aXRsZV0nOiAnbGFiZWwnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkID0gbnVsbDtcbiAgQElucHV0KCkgZGVsZXRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dDogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZU91dGxldDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvbkRlbGV0ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRlbGV0ZS5uZXh0KGUpO1xuICAgIH1cbiAgfVxufVxuIl19