import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/scrolling";
import * as i3 from "ng-zorro-antd/empty";
import * as i4 from "./option-item.component";
import * as i5 from "./option-item-group.component";
function BpsOptionContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "nz-embed-empty", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("specificContent", ctx_r0.notFoundContent);
} }
function BpsOptionContainerComponent_ng_template_3_bps_option_item_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-option-item-group", 9);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("bpsLabel", item_r3.groupLabel);
} }
function BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-option-item", 10);
    i0.ɵɵlistener("itemHover", function BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template_bps_option_item_itemHover_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.onItemHover($event)); })("itemClick", function BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template_bps_option_item_itemClick_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onItemClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.bpsCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.bpsDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("title", item_r3.bpsTitle)("label", item_r3.bpsLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.bpsValue);
} }
function BpsOptionContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 6);
    i0.ɵɵtemplate(1, BpsOptionContainerComponent_ng_template_3_bps_option_item_group_1_Template, 1, 1, "bps-option-item-group", 7);
    i0.ɵɵtemplate(2, BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template, 1, 12, "bps-option-item", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngSwitch", item_r3.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "group");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "item");
} }
function BpsOptionContainerComponent_ng_template_4_Template(rf, ctx) { }
export class BpsOptionContainerComponent {
    constructor() {
        this.notFoundContent = undefined;
        this.menuItemSelectedIcon = null;
        this.dropdownRender = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.mode = 'default';
        this.matchWidth = true;
        this.itemSize = 23;
        this.maxItemLength = 8;
        this.listOfContainerItem = [];
        this.itemClick = new EventEmitter();
        this.scrollToBottom = new EventEmitter();
        this.scrolledIndex = 0;
    }
    onItemClick(value) {
        this.itemClick.emit(value);
    }
    onItemHover(value) {
        // TODO: keydown.enter won't activate this value
        this.activatedValue = value;
    }
    trackValue(_index, option) {
        return option.key;
    }
    onScrolledIndexChange(index) {
        this.scrolledIndex = index;
        if (index === this.listOfContainerItem.length - this.maxItemLength) {
            this.scrollToBottom.emit();
        }
    }
    scrollToActivatedValue() {
        const index = this.listOfContainerItem.findIndex(item => this.compareWith(item.key, this.activatedValue));
        if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
            this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
        }
    }
    ngOnChanges(changes) {
        const { listOfContainerItem, activatedValue } = changes;
        if (listOfContainerItem || activatedValue) {
            this.scrollToActivatedValue();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => this.scrollToActivatedValue());
    }
    static { this.ɵfac = function BpsOptionContainerComponent_Factory(t) { return new (t || BpsOptionContainerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionContainerComponent, selectors: [["bps-option-container"]], viewQuery: function BpsOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkVirtualScrollViewport, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
        } }, hostAttrs: [1, "ant-select-dropdown"], inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", compareWith: "compareWith", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, exportAs: ["bpsOptionContainer"], features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 14, consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "bpsLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "bpsLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]], template: function BpsOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, BpsOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
            i0.ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 1);
            i0.ɵɵlistener("scrolledIndexChange", function BpsOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
            i0.ɵɵtemplate(3, BpsOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, BpsOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.listOfContainerItem.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
            i0.ɵɵclassProp("full-width", !ctx.matchWidth);
            i0.ɵɵproperty("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.dropdownRender);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i1.NgSwitch, i1.NgSwitchCase, i2.CdkFixedSizeVirtualScroll, i2.CdkVirtualForOf, i2.CdkVirtualScrollViewport, i3.NzEmbedEmptyComponent, i4.BpsOptionItemComponent, i5.BpsOptionItemGroupComponent], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option-container',
                exportAs: 'bpsOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <bps-option-item-group *ngSwitchCase="'group'" [bpsLabel]="item.groupLabel"></bps-option-item-group>
            <bps-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.bpsCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.bpsDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [title]="item.bpsTitle"
              [label]="item.bpsLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.bpsValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></bps-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
                host: { class: 'ant-select-dropdown' }
            }]
    }], function () { return []; }, { notFoundContent: [{
            type: Input
        }], menuItemSelectedIcon: [{
            type: Input
        }], dropdownRender: [{
            type: Input
        }], activatedValue: [{
            type: Input
        }], listOfSelectedValue: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], mode: [{
            type: Input
        }], matchWidth: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], maxItemLength: [{
            type: Input
        }], listOfContainerItem: [{
            type: Input
        }], itemClick: [{
            type: Output
        }], scrollToBottom: [{
            type: Output
        }], cdkVirtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zZWxlY3Qvb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUFjakIsOEJBQTRFO0lBQzFFLG9DQUErRjtJQUNqRyxpQkFBTTs7O0lBRHFDLGVBQW9DO0lBQXBDLHdEQUFvQzs7O0lBbUJ6RSwyQ0FBb0c7OztJQUFyRCw2Q0FBNEI7Ozs7SUFDM0UsMkNBZ0JDO0lBRkMsME5BQWEsZUFBQSwwQkFBbUIsQ0FBQSxJQUFDLDZNQUNwQixlQUFBLDBCQUFtQixDQUFBLElBREM7SUFFbEMsaUJBQWtCOzs7O0lBZGpCLGtEQUE2QiwyQ0FBQSw4QkFBQSxpQ0FBQSxpQ0FBQSxtRUFBQSwyQkFBQSwyQkFBQSxtQ0FBQSx5Q0FBQSxtREFBQSwyQkFBQTs7O0lBSmpDLGdDQUFxQztJQUNuQyw4SEFBb0c7SUFDcEcsbUhBZ0JtQjtJQUNyQiwwQkFBZTs7O0lBbkJELHVDQUFzQjtJQUNWLGVBQXFCO0lBQXJCLHNDQUFxQjtJQUUxQyxlQUFvQjtJQUFwQixxQ0FBb0I7OztBQXdCbkMsTUFBTSxPQUFPLDJCQUEyQjtJQWlCdEM7UUFoQlMsb0JBQWUsR0FBZ0QsU0FBUyxDQUFDO1FBQ3pFLHlCQUFvQixHQUFrQyxJQUFJLENBQUM7UUFDM0QsbUJBQWMsR0FBa0MsSUFBSSxDQUFDO1FBQ3JELG1CQUFjLEdBQXFCLElBQUksQ0FB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Ozs7Ozs7Ozs7Ozs7R0E2Q1Q7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFO2FBQ3ZDO3NDQUVVLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDYSxTQUFTO2tCQUEzQixNQUFNO1lBQ1ksY0FBYztrQkFBaEMsTUFBTTtZQUNnRCx3QkFBd0I7a0JBQTlFLFNBQVM7bUJBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IE56U2VsZWN0SXRlbUludGVyZmFjZSwgTnpTZWxlY3RNb2RlVHlwZSB9IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLW9wdGlvbi1jb250YWluZXInLFxuICBleHBvcnRBczogJ2Jwc09wdGlvbkNvbnRhaW5lcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImxpc3RPZkNvbnRhaW5lckl0ZW0ubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tZW1wdHlcIj5cbiAgICAgICAgPG56LWVtYmVkLWVtcHR5IG56Q29tcG9uZW50TmFtZT1cInNlbGVjdFwiIFtzcGVjaWZpY0NvbnRlbnRdPVwibm90Rm91bmRDb250ZW50IVwiPjwvbnotZW1iZWQtZW1wdHk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnRcbiAgICAgICAgW2NsYXNzLmZ1bGwtd2lkdGhdPVwiIW1hdGNoV2lkdGhcIlxuICAgICAgICBbaXRlbVNpemVdPVwiaXRlbVNpemVcIlxuICAgICAgICBbbWF4QnVmZmVyUHhdPVwiaXRlbVNpemUgKiBtYXhJdGVtTGVuZ3RoXCJcbiAgICAgICAgW21pbkJ1ZmZlclB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXG4gICAgICAgIChzY3JvbGxlZEluZGV4Q2hhbmdlKT1cIm9uU2Nyb2xsZWRJbmRleENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJsaXN0T2ZDb250YWluZXJJdGVtLmxlbmd0aCAqIGl0ZW1TaXplXCJcbiAgICAgICAgW3N0eWxlLm1heC1oZWlnaHQucHhdPVwiaXRlbVNpemUgKiBtYXhJdGVtTGVuZ3RoXCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgY2RrVmlydHVhbEZvclxuICAgICAgICAgIFtjZGtWaXJ0dWFsRm9yT2ZdPVwibGlzdE9mQ29udGFpbmVySXRlbVwiXG4gICAgICAgICAgW2Nka1ZpcnR1YWxGb3JUcmFja0J5XT1cInRyYWNrVmFsdWVcIlxuICAgICAgICAgIFtjZGtWaXJ0dWFsRm9yVGVtcGxhdGVDYWNoZVNpemVdPVwiMFwiXG4gICAgICAgICAgbGV0LWl0ZW1cbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIml0ZW0udHlwZVwiPlxuICAgICAgICAgICAgPGJwcy1vcHRpb24taXRlbS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFticHNMYWJlbF09XCJpdGVtLmdyb3VwTGFiZWxcIj48L2Jwcy1vcHRpb24taXRlbS1ncm91cD5cbiAgICAgICAgICAgIDxicHMtb3B0aW9uLWl0ZW1cbiAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpdGVtJ1wiXG4gICAgICAgICAgICAgIFtpY29uXT1cIm1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcbiAgICAgICAgICAgICAgW2N1c3RvbUNvbnRlbnRdPVwiaXRlbS5icHNDdXN0b21Db250ZW50XCJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbZ3JvdXBlZF09XCIhIWl0ZW0uZ3JvdXBMYWJlbFwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpdGVtLmJwc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgW3Nob3dTdGF0ZV09XCJtb2RlID09PSAndGFncycgfHwgbW9kZSA9PT0gJ211bHRpcGxlJ1wiXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJpdGVtLmJwc1RpdGxlXCJcbiAgICAgICAgICAgICAgW2xhYmVsXT1cIml0ZW0uYnBzTGFiZWxcIlxuICAgICAgICAgICAgICBbY29tcGFyZVdpdGhdPVwiY29tcGFyZVdpdGhcIlxuICAgICAgICAgICAgICBbYWN0aXZhdGVkVmFsdWVdPVwiYWN0aXZhdGVkVmFsdWVcIlxuICAgICAgICAgICAgICBbbGlzdE9mU2VsZWN0ZWRWYWx1ZV09XCJsaXN0T2ZTZWxlY3RlZFZhbHVlXCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0uYnBzVmFsdWVcIlxuICAgICAgICAgICAgICAoaXRlbUhvdmVyKT1cIm9uSXRlbUhvdmVyKCRldmVudClcIlxuICAgICAgICAgICAgICAoaXRlbUNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgPjwvYnBzLW9wdGlvbi1pdGVtPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZHJvcGRvd25SZW5kZXJcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7IGNsYXNzOiAnYW50LXNlbGVjdC1kcm9wZG93bicgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcbiAgQElucHV0KCkgY29tcGFyZVdpdGghOiAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbW9kZTogTnpTZWxlY3RNb2RlVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbWF0Y2hXaWR0aCA9IHRydWU7XG4gIEBJbnB1dCgpIGl0ZW1TaXplID0gMjM7XG4gIEBJbnB1dCgpIG1heEl0ZW1MZW5ndGggPSA4O1xuICBASW5wdXQoKSBsaXN0T2ZDb250YWluZXJJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIHsgc3RhdGljOiB0cnVlIH0pIGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCE6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgcHJpdmF0ZSBzY3JvbGxlZEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25JdGVtQ2xpY2sodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUNsaWNrLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25JdGVtSG92ZXIodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIC8vIFRPRE86IGtleWRvd24uZW50ZXIgd29uJ3QgYWN0aXZhdGUgdGhpcyB2YWx1ZVxuICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gb3B0aW9uLmtleTtcbiAgfVxuXG4gIG9uU2Nyb2xsZWRJbmRleENoYW5nZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxlZEluZGV4ID0gaW5kZXg7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLmxpc3RPZkNvbnRhaW5lckl0ZW0ubGVuZ3RoIC0gdGhpcy5tYXhJdGVtTGVuZ3RoKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvQm90dG9tLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0FjdGl2YXRlZFZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0T2ZDb250YWluZXJJdGVtLmZpbmRJbmRleChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5rZXksIHRoaXMuYWN0aXZhdGVkVmFsdWUpKTtcbiAgICBpZiAoaW5kZXggPCB0aGlzLnNjcm9sbGVkSW5kZXggfHwgaW5kZXggPj0gdGhpcy5zY3JvbGxlZEluZGV4ICsgdGhpcy5tYXhJdGVtTGVuZ3RoKSB7XG4gICAgICB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydC5zY3JvbGxUb0luZGV4KGluZGV4IHx8IDApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGxpc3RPZkNvbnRhaW5lckl0ZW0sIGFjdGl2YXRlZFZhbHVlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChsaXN0T2ZDb250YWluZXJJdGVtIHx8IGFjdGl2YXRlZFZhbHVlKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvQWN0aXZhdGVkVmFsdWUoKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxUb0FjdGl2YXRlZFZhbHVlKCkpO1xuICB9XG59XG4iXX0=