import { BACKSPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BpsSelectSearchComponent } from './select-search.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/common";
import * as i3 from "./select-item.component";
import * as i4 from "./select-placeholder.component";
import * as i5 from "./select-search.component";
function BpsSelectTopControlComponent_ng_container_1_bps_select_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-select-item", 6);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].bpsLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
} }
function BpsSelectTopControlComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bps-select-search", 4);
    i0.ɵɵlistener("isComposingChange", function BpsSelectTopControlComponent_ng_container_1_Template_bps_select_search_isComposingChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.isComposingChange($event)); })("valueChange", function BpsSelectTopControlComponent_ng_container_1_Template_bps_select_search_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onInputValueChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, BpsSelectTopControlComponent_ng_container_1_bps_select_item_2_Template, 1, 6, "bps-select-item", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("bpsId", ctx_r0.bpsId)("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isShowSingleLabel);
} }
function BpsSelectTopControlComponent_ng_container_2_bps_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-select-item", 9);
    i0.ɵɵlistener("delete", function BpsSelectTopControlComponent_ng_container_2_bps_select_item_1_Template_bps_select_item_delete_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r8 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onDeleteItem(item_r8.contentTemplateOutletContext)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("removeIcon", ctx_r7.removeIcon)("label", item_r8.bpsLabel)("disabled", item_r8.bpsDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
} }
function BpsSelectTopControlComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectTopControlComponent_ng_container_2_bps_select_item_1_Template, 1, 6, "bps-select-item", 7);
    i0.ɵɵelementStart(2, "bps-select-search", 8);
    i0.ɵɵlistener("isComposingChange", function BpsSelectTopControlComponent_ng_container_2_Template_bps_select_search_isComposingChange_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.isComposingChange($event)); })("valueChange", function BpsSelectTopControlComponent_ng_container_2_Template_bps_select_search_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onInputValueChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("bpsId", ctx_r1.bpsId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
} }
function BpsSelectTopControlComponent_bps_select_placeholder_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-select-placeholder", 10);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placeholder", ctx_r2.placeHolder);
} }
export class BpsSelectTopControlComponent {
    updateTemplateVariable() {
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    onInputValueChange(value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    }
    tokenSeparate(inputValue, tokenSeparators) {
        const includesSeparators = (str, separators) => {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        const splitBySeparators = (str, separators) => {
            const reg = new RegExp(`[${separators.join()}]`);
            const array = str.split(reg).filter(token => token);
            return [...new Set(array)];
        };
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    trackValue(_index, option) {
        return option.bpsValue;
    }
    onDeleteItem(item) {
        if (!this.disabled && !item.bpsDisabled) {
            this.deleteItem.next(item);
        }
    }
    constructor(elementRef, ngZone, noAnimation) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.bpsId = null;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new EventEmitter();
        this.inputValueChange = new EventEmitter();
        this.deleteItem = new EventEmitter();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(o => ({
                bpsLabel: o.bpsLabel,
                bpsValue: o.bpsValue,
                bpsDisabled: o.bpsDisabled,
                contentTemplateOutlet: this.customTemplate,
                contentTemplateOutletContext: o
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                const listOfSelectedValue = this.listOfTopItem.map(item => item.bpsValue);
                const exceededItem = {
                    bpsLabel: exceededLabel,
                    bpsValue: '$$__nz_exceeded_item',
                    bpsDisabled: true,
                    contentTemplateOutlet: this.maxTagPlaceholder,
                    contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
            }
            this.listOfSlicedItem = listOfSlicedItem;
        }
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                // `HTMLElement.focus()` is a native DOM API which doesn't require Angular to run change detection.
                if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
                    this.nzSelectSearchComponent.focus();
                }
            });
            fromEvent(this.elementRef.nativeElement, 'keydown')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                if (event.target instanceof HTMLInputElement) {
                    const inputValue = event.target.value;
                    if (event.keyCode === BACKSPACE &&
                        this.mode !== 'default' &&
                        !inputValue &&
                        this.listOfTopItem.length > 0) {
                        event.preventDefault();
                        // Run change detection only if the user has pressed the `Backspace` key and the following condition is met.
                        this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    static { this.ɵfac = function BpsSelectTopControlComponent_Factory(t) { return new (t || BpsSelectTopControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectTopControlComponent, selectors: [["bps-select-top-control"]], viewQuery: function BpsSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(BpsSelectSearchComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
        } }, hostAttrs: [1, "ant-select-selector"], inputs: { bpsId: "bpsId", showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", deleteItem: "deleteItem" }, exportAs: ["bpsSelectTopControl"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "bpsId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "bpsId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]], template: function BpsSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, BpsSelectTopControlComponent_ng_container_1_Template, 3, 8, "ng-container", 1);
            i0.ɵɵtemplate(2, BpsSelectTopControlComponent_ng_container_2_Template, 3, 9, "ng-container", 2);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(3, BpsSelectTopControlComponent_bps_select_placeholder_3_Template, 1, 1, "bps-select-placeholder", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.mode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "default");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isShowPlaceholder);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i3.BpsSelectItemComponent, i4.BpsSelectPlaceholderComponent, i5.BpsSelectSearchComponent], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-top-control',
                exportAs: 'bpsSelectTopControl',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
        <bps-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].bpsLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></bps-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <bps-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.bpsLabel"
          [disabled]="item.bpsDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></bps-select-item>
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
      </ng-container>
    </ng-container>
    <bps-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></bps-select-placeholder>
  `,
                host: { class: 'ant-select-selector' }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { bpsId: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], open: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mode: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], maxTagPlaceholder: [{
            type: Input
        }], removeIcon: [{
            type: Input
        }], listOfTopItem: [{
            type: Input
        }], tokenSeparators: [{
            type: Input
        }], tokenize: [{
            type: Output
        }], inputValueChange: [{
            type: Output
        }], deleteItem: [{
            type: Output
        }], nzSelectSearchComponent: [{
            type: ViewChild,
            args: [BpsSelectSearchComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFLTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7OztJQXdCN0QscUNBUW1COzs7SUFOakIsaUNBQW1CLG1CQUFBLGlDQUFBLDJDQUFBLGdEQUFBLHlEQUFBOzs7O0lBZHZCLDZCQUF3QztJQUN0Qyw0Q0FVQztJQUZDLDJOQUFxQixlQUFBLGdDQUF5QixDQUFBLElBQUMsa01BQ2hDLGVBQUEsaUNBQTBCLENBQUEsSUFETTtJQUVoRCxpQkFBb0I7SUFDckIsb0hBUW1CO0lBQ3JCLDBCQUFlOzs7SUFuQlgsZUFBZTtJQUFmLG9DQUFlLDZCQUFBLDRCQUFBLGdDQUFBLHFCQUFBLCtCQUFBLDZCQUFBO0lBV2QsZUFBdUI7SUFBdkIsK0NBQXVCOzs7O0lBVzFCLDBDQVNDO0lBREMsNFFBQVUsZUFBQSx5REFBK0MsQ0FBQSxJQUFDO0lBQzNELGlCQUFrQjs7OztJQVBqQiw4Q0FBeUIsMkJBQUEsb0RBQUEsd0RBQUEsbUJB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QUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1EVDtnQkFDRCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUU7YUFDdkM7O3NCQXlHSSxJQUFJOztzQkFBSSxRQUFRO3dCQXZHVixLQUFLO2tCQUFiLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDYSxRQUFRO2tCQUExQixNQUFNO1lBQ1ksZ0JBQWdCO2tCQUFsQyxNQUFNO1lBQ1ksVUFBVTtrQkFBNUIsTUFBTTtZQUM4Qix1QkFBdUI7a0JBQTNELFNBQVM7bUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBCcHNTZWxlY3RTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IE56U2VsZWN0SXRlbUludGVyZmFjZSwgTnpTZWxlY3RNb2RlVHlwZSwgTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGUgfSBmcm9tICcuL3NlbGVjdC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1zZWxlY3QtdG9wLWNvbnRyb2wnLFxuICBleHBvcnRBczogJ2Jwc1NlbGVjdFRvcENvbnRyb2wnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLXNpbmdsZSBtb2RlLS0+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RlZmF1bHQnXCI+XG4gICAgICAgIDxicHMtc2VsZWN0LXNlYXJjaFxuICAgICAgICAgIFticHNJZF09XCJicHNJZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbdmFsdWVdPVwiaW5wdXRWYWx1ZSFcIlxuICAgICAgICAgIFtzaG93SW5wdXRdPVwic2hvd1NlYXJjaFwiXG4gICAgICAgICAgW21pcnJvclN5bmNdPVwiZmFsc2VcIlxuICAgICAgICAgIFthdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCJcbiAgICAgICAgICBbZm9jdXNUcmlnZ2VyXT1cIm9wZW5cIlxuICAgICAgICAgIChpc0NvbXBvc2luZ0NoYW5nZSk9XCJpc0NvbXBvc2luZ0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9icHMtc2VsZWN0LXNlYXJjaD5cbiAgICAgICAgPGJwcy1zZWxlY3QtaXRlbVxuICAgICAgICAgICpuZ0lmPVwiaXNTaG93U2luZ2xlTGFiZWxcIlxuICAgICAgICAgIFtkZWxldGFibGVdPVwiZmFsc2VcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJmYWxzZVwiXG4gICAgICAgICAgW3JlbW92ZUljb25dPVwicmVtb3ZlSWNvblwiXG4gICAgICAgICAgW2xhYmVsXT1cImxpc3RPZlRvcEl0ZW1bMF0uYnBzTGFiZWxcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGVcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImxpc3RPZlRvcEl0ZW1bMF1cIlxuICAgICAgICA+PC9icHMtc2VsZWN0LWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgPCEtLW11bHRpcGxlIG9yIHRhZ3MgbW9kZS0tPlxuICAgICAgICA8YnBzLXNlbGVjdC1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdE9mU2xpY2VkSXRlbTsgdHJhY2tCeTogdHJhY2tWYWx1ZVwiXG4gICAgICAgICAgW3JlbW92ZUljb25dPVwicmVtb3ZlSWNvblwiXG4gICAgICAgICAgW2xhYmVsXT1cIml0ZW0uYnBzTGFiZWxcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtLmJwc0Rpc2FibGVkIHx8IGRpc2FibGVkXCJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFRlbXBsYXRlT3V0bGV0XCJcbiAgICAgICAgICBbZGVsZXRhYmxlXT1cInRydWVcIlxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIml0ZW0uY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dFwiXG4gICAgICAgICAgKGRlbGV0ZSk9XCJvbkRlbGV0ZUl0ZW0oaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0KVwiXG4gICAgICAgID48L2Jwcy1zZWxlY3QtaXRlbT5cbiAgICAgICAgPGJwcy1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgW2Jwc0lkXT1cImJwc0lkXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFt2YWx1ZV09XCJpbnB1dFZhbHVlIVwiXG4gICAgICAgICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxuICAgICAgICAgIFtzaG93SW5wdXRdPVwidHJ1ZVwiXG4gICAgICAgICAgW21pcnJvclN5bmNdPVwidHJ1ZVwiXG4gICAgICAgICAgW2ZvY3VzVHJpZ2dlcl09XCJvcGVuXCJcbiAgICAgICAgICAoaXNDb21wb3NpbmdDaGFuZ2UpPVwiaXNDb21wb3NpbmdDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvYnBzLXNlbGVjdC1zZWFyY2g+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8YnBzLXNlbGVjdC1wbGFjZWhvbGRlciAqbmdJZj1cImlzU2hvd1BsYWNlaG9sZGVyXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCI+PC9icHMtc2VsZWN0LXBsYWNlaG9sZGVyPlxuICBgLFxuICBob3N0OiB7IGNsYXNzOiAnYW50LXNlbGVjdC1zZWxlY3RvcicgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGJwc0lkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50OiBudW1iZXIgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTZWxlY3RJdGVtSW50ZXJmYWNlIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTYWZlQW55W10gfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBsaXN0T2ZUb3BJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBASW5wdXQoKSB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSB0b2tlbml6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBkZWxldGVJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxOelNlbGVjdEl0ZW1JbnRlcmZhY2U+KCk7XG4gIEBWaWV3Q2hpbGQoQnBzU2VsZWN0U2VhcmNoQ29tcG9uZW50KSBuelNlbGVjdFNlYXJjaENvbXBvbmVudCE6IEJwc1NlbGVjdFNlYXJjaENvbXBvbmVudDtcbiAgbGlzdE9mU2xpY2VkSXRlbTogTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGVbXSA9IFtdO1xuICBpc1Nob3dQbGFjZWhvbGRlciA9IHRydWU7XG4gIGlzU2hvd1NpbmdsZUxhYmVsID0gZmFsc2U7XG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XG4gIGlucHV0VmFsdWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTogdm9pZCB7XG4gICAgY29uc3QgaXNTZWxlY3RlZFZhbHVlRW1wdHkgPSB0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoID09PSAwO1xuICAgIHRoaXMuaXNTaG93UGxhY2Vob2xkZXIgPSBpc1NlbGVjdGVkVmFsdWVFbXB0eSAmJiAhdGhpcy5pc0NvbXBvc2luZyAmJiAhdGhpcy5pbnB1dFZhbHVlO1xuICAgIHRoaXMuaXNTaG93U2luZ2xlTGFiZWwgPSAhaXNTZWxlY3RlZFZhbHVlRW1wdHkgJiYgIXRoaXMuaXNDb21wb3NpbmcgJiYgIXRoaXMuaW5wdXRWYWx1ZTtcbiAgfVxuXG4gIGlzQ29tcG9zaW5nQ2hhbmdlKGlzQ29tcG9zaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbXBvc2luZyA9IGlzQ29tcG9zaW5nO1xuICAgIHRoaXMudXBkYXRlVGVtcGxhdGVWYXJpYWJsZSgpO1xuICB9XG5cbiAgb25JbnB1dFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMudG9rZW5TZXBhcmF0ZSh2YWx1ZSwgdGhpcy50b2tlblNlcGFyYXRvcnMpO1xuICAgIH1cbiAgfVxuXG4gIHRva2VuU2VwYXJhdGUoaW5wdXRWYWx1ZTogc3RyaW5nLCB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgY29uc3QgaW5jbHVkZXNTZXBhcmF0b3JzID0gKHN0cjogc3RyaW5nLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZm9yLW9mXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcGFyYXRvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgY29uc3Qgc3BsaXRCeVNlcGFyYXRvcnMgPSAoc3RyOiBzdHJpbmcsIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xuICAgICAgY29uc3QgYXJyYXkgPSBzdHIuc3BsaXQocmVnKS5maWx0ZXIodG9rZW4gPT4gdG9rZW4pO1xuICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KGFycmF5KV07XG4gICAgfTtcbiAgICBpZiAoXG4gICAgICBpbnB1dFZhbHVlICYmXG4gICAgICBpbnB1dFZhbHVlLmxlbmd0aCAmJlxuICAgICAgdG9rZW5TZXBhcmF0b3JzLmxlbmd0aCAmJlxuICAgICAgdGhpcy5tb2RlICE9PSAnZGVmYXVsdCcgJiZcbiAgICAgIGluY2x1ZGVzU2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpXG4gICAgKSB7XG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHNwbGl0QnlTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycyk7XG4gICAgICB0aGlzLnRva2VuaXplLm5leHQobGlzdE9mTGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5jbGVhcklucHV0VmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGUpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiBvcHRpb24uYnBzVmFsdWU7XG4gIH1cblxuICBvbkRlbGV0ZUl0ZW0oaXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpdGVtLmJwc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmRlbGV0ZUl0ZW0ubmV4dChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb246IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCBudWxsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBsaXN0T2ZUb3BJdGVtLCBtYXhUYWdDb3VudCwgY3VzdG9tVGVtcGxhdGUsIG1heFRhZ1BsYWNlaG9sZGVyIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChsaXN0T2ZUb3BJdGVtKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcbiAgICB9XG4gICAgaWYgKGxpc3RPZlRvcEl0ZW0gfHwgbWF4VGFnQ291bnQgfHwgY3VzdG9tVGVtcGxhdGUgfHwgbWF4VGFnUGxhY2Vob2xkZXIpIHtcbiAgICAgIGNvbnN0IGxpc3RPZlNsaWNlZEl0ZW06IE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlW10gPSB0aGlzLmxpc3RPZlRvcEl0ZW0uc2xpY2UoMCwgdGhpcy5tYXhUYWdDb3VudCkubWFwKG8gPT4gKHtcbiAgICAgICAgYnBzTGFiZWw6IG8uYnBzTGFiZWwsXG4gICAgICAgIGJwc1ZhbHVlOiBvLmJwc1ZhbHVlLFxuICAgICAgICBicHNEaXNhYmxlZDogby5icHNEaXNhYmxlZCxcbiAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0OiB0aGlzLmN1c3RvbVRlbXBsYXRlLFxuICAgICAgICBjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0OiBvXG4gICAgICB9KSk7XG4gICAgICBpZiAodGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCA+IHRoaXMubWF4VGFnQ291bnQpIHtcbiAgICAgICAgY29uc3QgZXhjZWVkZWRMYWJlbCA9IGArICR7dGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCAtIHRoaXMubWF4VGFnQ291bnR9IC4uLmA7XG4gICAgICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlRvcEl0ZW0ubWFwKGl0ZW0gPT4gaXRlbS5icHNWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGV4Y2VlZGVkSXRlbSA9IHtcbiAgICAgICAgICBicHNMYWJlbDogZXhjZWVkZWRMYWJlbCxcbiAgICAgICAgICBicHNWYWx1ZTogJyQkX19uel9leGNlZWRlZF9pdGVtJyxcbiAgICAgICAgICBicHNEaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICBjb250ZW50VGVtcGxhdGVPdXRsZXQ6IHRoaXMubWF4VGFnUGxhY2Vob2xkZXIsXG4gICAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dDogbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zbGljZSh0aGlzLm1heFRhZ0NvdW50KVxuICAgICAgICB9O1xuICAgICAgICBsaXN0T2ZTbGljZWRJdGVtLnB1c2goZXhjZWVkZWRJdGVtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdE9mU2xpY2VkSXRlbSA9IGxpc3RPZlNsaWNlZEl0ZW07XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgIC8vIGBIVE1MRWxlbWVudC5mb2N1cygpYCBpcyBhIG5hdGl2ZSBET00gQVBJIHdoaWNoIGRvZXNuJ3QgcmVxdWlyZSBBbmd1bGFyIHRvIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdrZXlkb3duJylcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBldmVudC5rZXlDb2RlID09PSBCQUNLU1BBQ0UgJiZcbiAgICAgICAgICAgICAgdGhpcy5tb2RlICE9PSAnZGVmYXVsdCcgJiZcbiAgICAgICAgICAgICAgIWlucHV0VmFsdWUgJiZcbiAgICAgICAgICAgICAgdGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBvbmx5IGlmIHRoZSB1c2VyIGhhcyBwcmVzc2VkIHRoZSBgQmFja3NwYWNlYCBrZXkgYW5kIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uIGlzIG1ldC5cbiAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub25EZWxldGVJdGVtKHRoaXMubGlzdE9mVG9wSXRlbVt0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoIC0gMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==