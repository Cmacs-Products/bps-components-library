import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
const _c0 = ["inputElement"];
const _c1 = ["mirrorElement"];
function BpsSelectSearchComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3, 4);
} }
export class BpsSelectSearchComponent {
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    onValueChange(value) {
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    }
    clearInputValue() {
        const inputDOM = this.inputElement.nativeElement;
        inputDOM.value = '';
        this.onValueChange('');
    }
    syncMirrorWidth() {
        const mirrorDOM = this.mirrorElement.nativeElement;
        const hostDOM = this.elementRef.nativeElement;
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        this.renderer.setProperty(mirrorDOM, 'textContent', `${inputDOM.value}\u00a0`);
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(elementRef, renderer, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.bpsId = null;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new EventEmitter();
        this.isComposingChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
        // IE11 cannot input value if focused before removing readonly
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
    }
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
    static { this.ɵfac = function BpsSelectSearchComponent_Factory(t) { return new (t || BpsSelectSearchComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.FocusMonitor)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectSearchComponent, selectors: [["bps-select-search"]], viewQuery: function BpsSelectSearchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mirrorElement = _t.first);
        } }, hostAttrs: [1, "ant-select-selection-search"], inputs: { bpsId: "bpsId", disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, features: [i0.ɵɵProvidersFeature([{ provide: COMPOSITION_BUFFER_MODE, useValue: false }]), i0.ɵɵNgOnChangesFeature], decls: 3, vars: 7, consts: [["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModel", "disabled", "ngModelChange", "compositionstart", "compositionend"], ["inputElement", ""], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"], ["mirrorElement", ""]], template: function BpsSelectSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("ngModelChange", function BpsSelectSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onValueChange($event); })("compositionstart", function BpsSelectSearchComponent_Template_input_compositionstart_0_listener() { return ctx.setCompositionState(true); })("compositionend", function BpsSelectSearchComponent_Template_input_compositionend_0_listener() { return ctx.setCompositionState(false); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, BpsSelectSearchComponent_span_2_Template, 2, 0, "span", 2);
        } if (rf & 2) {
            i0.ɵɵstyleProp("opacity", ctx.showInput ? null : 0);
            i0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled);
            i0.ɵɵattribute("id", ctx.bpsId)("autofocus", ctx.autofocus ? "autofocus" : null);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.mirrorSync);
        } }, dependencies: [i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectSearchComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-search',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <input
      #inputElement
      [attr.id]="bpsId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                host: { class: 'ant-select-selection-search' },
                providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }]; }, { bpsId: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mirrorSync: [{
            type: Input
        }], showInput: [{
            type: Input
        }], focusTrigger: [{
            type: Input
        }], value: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], isComposingChange: [{
            type: Output
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], mirrorElement: [{
            type: ViewChild,
            args: ['mirrorElement', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zZWxlY3Qvc2VsZWN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUFvQnJELDZCQUEwRjs7QUFLOUYsTUFBTSxPQUFPLHdCQUF3QjtJQWFuQyxtQkFBbUIsQ0FBQyxXQUFvQjtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNqRCxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWMsQ0FBQyxhQUFhLENBQUM7UUFDcEQsTUFBTSxPQUFPLEdB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Z0I7Ozt1RkFLN0Isd0JBQXdCO2NBdkJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO2dCQUNELElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSw2QkFBNkIsRUFBRTtnQkFDOUMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ25FO2dIQUVVLEtBQUs7a0JBQWIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ2EsV0FBVztrQkFBN0IsTUFBTTtZQUNZLGlCQUFpQjtrQkFBbkMsTUFBTTtZQUNzQyxZQUFZO2tCQUF4RCxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDSSxhQUFhO2tCQUEzRCxTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1zZWFyY2gnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXRcbiAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgIFthdHRyLmlkXT1cImJwc0lkXCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlYXJjaC1pbnB1dFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICBbYXR0ci5hdXRvZm9jdXNdPVwiYXV0b2ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbc3R5bGUub3BhY2l0eV09XCJzaG93SW5wdXQgPyBudWxsIDogMFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZSh0cnVlKVwiXG4gICAgICAoY29tcG9zaXRpb25lbmQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZShmYWxzZSlcIlxuICAgIC8+XG4gICAgPHNwYW4gI21pcnJvckVsZW1lbnQgKm5nSWY9XCJtaXJyb3JTeW5jXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtbWlycm9yXCI+PC9zcGFuPlxuICBgLFxuICBob3N0OiB7IGNsYXNzOiAnYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoJyB9LFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFLCB1c2VWYWx1ZTogZmFsc2UgfV1cbn0pXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYnBzSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBtaXJyb3JTeW5jID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dJbnB1dCA9IHRydWU7XG4gIEBJbnB1dCgpIGZvY3VzVHJpZ2dlciA9IGZhbHNlO1xuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBhdXRvZm9jdXMgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBpc0NvbXBvc2luZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWlycm9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaXJyb3JFbGVtZW50PzogRWxlbWVudFJlZjtcblxuICBzZXRDb21wb3NpdGlvblN0YXRlKGlzQ29tcG9zaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbXBvc2luZ0NoYW5nZS5uZXh0KGlzQ29tcG9zaW5nKTtcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLm5leHQodmFsdWUpO1xuICAgIGlmICh0aGlzLm1pcnJvclN5bmMpIHtcbiAgICAgIHRoaXMuc3luY01pcnJvcldpZHRoKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dFZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0RE9NID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpbnB1dERPTS52YWx1ZSA9ICcnO1xuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgnJyk7XG4gIH1cblxuICBzeW5jTWlycm9yV2lkdGgoKTogdm9pZCB7XG4gICAgY29uc3QgbWlycm9yRE9NID0gdGhpcy5taXJyb3JFbGVtZW50IS5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGhvc3RET00gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShob3N0RE9NLCAnd2lkdGgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KG1pcnJvckRPTSwgJ3RleHRDb250ZW50JywgYCR7aW5wdXRET00udmFsdWV9XFx1MDBhMGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaG9zdERPTSwgJ3dpZHRoJywgYCR7bWlycm9yRE9NLnNjcm9sbFdpZHRofXB4YCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0RE9NID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB7IGZvY3VzVHJpZ2dlciwgc2hvd0lucHV0IH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKHNob3dJbnB1dCkge1xuICAgICAgaWYgKHRoaXMuc2hvd0lucHV0KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGlucHV0RE9NLCAncmVhZG9ubHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0RE9NLCAncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJRTExIGNhbm5vdCBpbnB1dCB2YWx1ZSBpZiBmb2N1c2VkIGJlZm9yZSByZW1vdmluZyByZWFkb25seVxuICAgIGlmIChmb2N1c1RyaWdnZXIgJiYgZm9jdXNUcmlnZ2VyLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSAmJiBmb2N1c1RyaWdnZXIucHJldmlvdXNWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGlucHV0RE9NLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1pcnJvclN5bmMpIHtcbiAgICAgIHRoaXMuc3luY01pcnJvcldpZHRoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9mb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIl19