import { __decorate } from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BpsGridComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵlistener("mouseenter", function BpsGridComponent_ng_container_4_ng_container_2_Template_div_mouseenter_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const j_r5 = restoredCtx.index; const i_r2 = i0.ɵɵnextContext().index; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.previewSelection(i_r2, j_r5)); })("mouseleave", function BpsGridComponent_ng_container_4_ng_container_2_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.endPreviewSelection()); })("click", function BpsGridComponent_ng_container_4_ng_container_2_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const j_r5 = restoredCtx.index; const i_r2 = i0.ɵɵnextContext().index; const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onSelectionChange(i_r2, j_r5)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r5 = ctx.index;
    const i_r2 = i0.ɵɵnextContext().index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-grid-selected-square-top", ctx_r3.isSelected(i_r2, j_r5) && !i_r2)("bps-grid-selected-square-bottom", ctx_r3.isSelected(i_r2, j_r5) && i_r2 === ctx_r3.selection[0])("bps-grid-selected-square-left", ctx_r3.isSelected(i_r2, j_r5) && !j_r5)("bps-grid-selected-square-right", ctx_r3.isSelected(i_r2, j_r5) && j_r5 === ctx_r3.selection[1])("bps-grid-first-square-in-row", !j_r5)("bps-grid-left-top-corner", i_r2 === j_r5 && !i_r2)("bps-grid-left-bottom-corner", i_r2 === ctx_r3._rows.length - 1 && !j_r5)("bps-grid-right-bottom-corner", i_r2 === ctx_r3._rows.length - 1 && j_r5 === ctx_r3._columns.length - 1)("bps-grid-right-top-corner", !i_r2 && j_r5 === ctx_r3._columns.length - 1);
} }
function BpsGridComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, BpsGridComponent_ng_container_4_ng_container_2_Template, 2, 18, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-grid-row-first", i_r2 === 0)("bps-grid-row-last", i_r2 === ctx_r0._rows.length - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0._columns);
} }
export class BpsGridComponent {
    set columns(value) {
        if (value >= 1) {
            this._columns = new Array(value);
        }
    }
    set rows(value) {
        if (value >= 1) {
            this._rows = new Array(value);
        }
    }
    set selection(value) {
        this._selection = value;
        this._latestSelection = value;
    }
    get selection() {
        return this._selection;
    }
    constructor() {
        this._columns = [];
        this._rows = [];
        this._selection = [1, 2];
        this._latestSelection = [1, 2];
        this.disabled = false;
        this.selectionChange = new EventEmitter();
    }
    onSelectionChange(row, column) {
        this.selection = [row, column];
        this._latestSelection = [row, column];
        this.selectionChange.emit(this.selection);
    }
    isSelected(row, column) {
        return (row <= this.selection[0] && !column) || (!row && column <= this.selection[1]) || (row <= this.selection[0] && column === this.selection[1]) || (row === this.selection[0] && column <= this.selection[1]);
    }
    previewSelection(row, column) {
        const newSel = [row, column];
        this._selection = [...newSel];
    }
    endPreviewSelection() {
        this._selection = this._latestSelection;
    }
    static { this.ɵfac = function BpsGridComponent_Factory(t) { return new (t || BpsGridComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsGridComponent, selectors: [["bps-grid"]], inputs: { disabled: "disabled", columns: "columns", rows: "rows", selection: "selection" }, outputs: { selectionChange: "selectionChange" }, decls: 5, vars: 3, consts: [[1, "bps-grid-selected-value-wrapper"], [1, "bps-grid-wrapper"], [4, "ngFor", "ngForOf"], [1, "bps-grid-row"], [1, "bps-grid-square", 3, "mouseenter", "mouseleave", "click"]], template: function BpsGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵtemplate(4, BpsGridComponent_ng_container_4_Template, 3, 5, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.selection[0] + 1, " x ", ctx.selection[1] + 1, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx._rows);
        } }, dependencies: [i1.NgForOf], styles: [".bps-grid-square{width:25px;height:25px;transition:all .3s}.bps-grid-row .bps-grid-square{display:inline-flex;border:1px solid #707070;border-top:none;border-left:none}.bps-grid-row{height:25px}.bps-grid-row-first .bps-grid-square{border-top:1px solid #707070}.bps-grid-left-top-corner{border-radius:8px 0 0}.bps-grid-left-bottom-corner{border-radius:0 0 0 8px}.bps-grid-right-bottom-corner{border-radius:0 0 8px}.bps-grid-right-top-corner{border-radius:0 8px 0 0}.bps-grid-first-square-in-row{border-left:1px solid #707070!important}.bps-grid-selected-square-top{border-top:2px solid #00a2d1!important}.bps-grid-selected-square-bottom{border-bottom:2px solid #00a2d1!important}.bps-grid-selected-square-left{border-left:2px solid #00a2d1!important}.bps-grid-selected-square-right{border-right:2px solid #00a2d1!important}.bps-grid-selected-value-wrapper{display:inline-block;font-family:UniversForSchueco-530Med;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left;color:#fff;width:50px;padding-top:2px;vertical-align:top}.bps-grid-wrapper{display:inline-block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsGridComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsGridComponent, [{
        type: Component,
        args: [{ selector: 'bps-grid', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-grid-selected-value-wrapper\">\n  <span>{{selection[0] + 1}} x {{selection[1] + 1}}</span>\n</div>\n\n<div class=\"bps-grid-wrapper\">\r\n  <ng-container *ngFor=\"let row of _rows; index as i\">\r\n    <div class=\"bps-grid-row\" [class.bps-grid-row-first]=\"i === 0\" [class.bps-grid-row-last]=\"i === _rows.length - 1\">\r\n      <ng-container *ngFor=\"let column of _columns; index as j\">\r\n        <div class=\"bps-grid-square\"\r\n             (mouseenter)=\"previewSelection(i, j)\"\r\n             (mouseleave)=\"endPreviewSelection()\"\r\n             [class.bps-grid-selected-square-top]=\"isSelected(i, j) && !i\"\r\n             [class.bps-grid-selected-square-bottom]=\"isSelected(i, j) && i === selection[0]\"\r\n             [class.bps-grid-selected-square-left]=\"isSelected(i, j) && !j\"\r\n             [class.bps-grid-selected-square-right]=\"isSelected(i, j) && j === selection[1]\"\r\n             [class.bps-grid-first-square-in-row]=\"!j\"\r\n             [class.bps-grid-left-top-corner]=\"i === j && !i\"\r\n             [class.bps-grid-left-bottom-corner]=\"i === _rows.length - 1 && !j\"\r\n             [class.bps-grid-right-bottom-corner]=\"i === _rows.length - 1 && j === _columns.length - 1\"\r\n             [class.bps-grid-right-top-corner]=\"!i && j === _columns.length - 1\"\r\n             (click)=\"onSelectionChange(i, j)\">\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>\n", styles: [".bps-grid-square{width:25px;height:25px;transition:all .3s}.bps-grid-row .bps-grid-square{display:inline-flex;border:1px solid #707070;border-top:none;border-left:none}.bps-grid-row{height:25px}.bps-grid-row-first .bps-grid-square{border-top:1px solid #707070}.bps-grid-left-top-corner{border-radius:8px 0 0}.bps-grid-left-bottom-corner{border-radius:0 0 0 8px}.bps-grid-right-bottom-corner{border-radius:0 0 8px}.bps-grid-right-top-corner{border-radius:0 8px 0 0}.bps-grid-first-square-in-row{border-left:1px solid #707070!important}.bps-grid-selected-square-top{border-top:2px solid #00a2d1!important}.bps-grid-selected-square-bottom{border-bottom:2px solid #00a2d1!important}.bps-grid-selected-square-left{border-left:2px solid #00a2d1!important}.bps-grid-selected-square-right{border-right:2px solid #00a2d1!important}.bps-grid-selected-value-wrapper{display:inline-block;font-family:UniversForSchueco-530Med;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left;color:#fff;width:50px;padding-top:2px;vertical-align:top}.bps-grid-wrapper{display:inline-block}\n"] }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], columns: [{
            type: Input
        }], rows: [{
            type: Input
        }], selection: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZ3JpZC9icHMtZ3JpZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1ncmlkL2Jwcy1ncmlkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7SUNNakQsNkJBQTBEO0lBQ3hELDhCQVl1QztJQVhsQyx1UkFBYyxlQUFBLG1DQUFzQixDQUFBLElBQUMsZ0xBQ3ZCLGVBQUEsNEJBQXFCLENBQUEsSUFERSxpUUFXNUIsZUFBQSxxQ0FBdUIsQ0FBQSxJQVhLO0lBWTFDLGlCQUFNO0lBQ1IsMEJBQWU7Ozs7O0lBWFIsZUFBNkQ7SUFBN0Qsc0ZBQTZELGtHQUFBLHlFQUFBLGlHQUFBLHVDQUFBLG9EQUFBLDBFQUFBLHlHQUFBLDJFQUFBOzs7SUFOeEUsNkJBQW9EO0lBQ2xELDhCQUFrSDtJQUNoSCxtR0FlZTtJQUNqQixpQkFBTTtJQUNSLDBCQUFlOzs7O0lBbEJhLGVBQW9DO0lBQXBDLGdEQUFvQyx1REFBQTtJQUMzQixlQUFhO0lBQWIseUNBQWE7O0FER3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFTM0IsSUFDSSxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FB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ZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Jwcy1ncmlkLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCcHNHcmlkQ29tcG9uZW50IHtcblxuICBfY29sdW1uczogYW55W10gPSBbXTtcbiAgX3Jvd3M6IGFueVtdID0gW107XG4gIF9zZWxlY3Rpb246IG51bWJlcltdID0gWzEsIDJdO1xuICBfbGF0ZXN0U2VsZWN0aW9uOiBudW1iZXJbXSA9IFsxLCAyXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbHVtbnModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA+PSAxKSB7XHJcbiAgICAgIHRoaXMuX2NvbHVtbnMgPSBuZXcgQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcm93cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgdGhpcy5fcm93cyA9IG5ldyBBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3Rpb24odmFsdWU6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gdmFsdWU7XHJcbiAgICB0aGlzLl9sYXRlc3RTZWxlY3Rpb24gPSB2YWx1ZTtcclxuICB9XG5cbiAgZ2V0IHNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uO1xyXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKHJvdywgY29sdW1uKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbcm93LCBjb2x1bW5dO1xyXG4gICAgdGhpcy5fbGF0ZXN0U2VsZWN0aW9uID0gW3JvdywgY29sdW1uXTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xyXG4gIH1cblxuICBpc1NlbGVjdGVkKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlcikge1xuICAgIHJldHVybiAocm93IDw9IHRoaXMuc2VsZWN0aW9uWzBdICYmICFjb2x1bW4pIHx8ICghcm93ICYmIGNvbHVtbiA8PSB0aGlzLnNlbGVjdGlvblsxXSkgfHwgKHJvdyA8PSB0aGlzLnNlbGVjdGlvblswXSAmJiBjb2x1bW4gPT09IHRoaXMuc2VsZWN0aW9uWzFdKSB8fCAocm93ID09PSB0aGlzLnNlbGVjdGlvblswXSAmJiBjb2x1bW4gPD0gdGhpcy5zZWxlY3Rpb25bMV0pOyBcclxuICB9XG5cbiAgcHJldmlld1NlbGVjdGlvbihyb3csIGNvbHVtbikge1xyXG4gICAgY29uc3QgbmV3U2VsID0gW3JvdywgY29sdW1uXTtcclxuICAgIHRoaXMuX3NlbGVjdGlvbiA9IFsuLi5uZXdTZWxdO1xyXG4gIH1cclxuXHJcbiAgZW5kUHJldmlld1NlbGVjdGlvbigpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLl9sYXRlc3RTZWxlY3Rpb247XHJcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYnBzLWdyaWQtc2VsZWN0ZWQtdmFsdWUtd3JhcHBlclwiPlxuICA8c3Bhbj57e3NlbGVjdGlvblswXSArIDF9fSB4IHt7c2VsZWN0aW9uWzFdICsgMX19PC9zcGFuPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJicHMtZ3JpZC13cmFwcGVyXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIF9yb3dzOyBpbmRleCBhcyBpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnBzLWdyaWQtcm93XCIgW2NsYXNzLmJwcy1ncmlkLXJvdy1maXJzdF09XCJpID09PSAwXCIgW2NsYXNzLmJwcy1ncmlkLXJvdy1sYXN0XT1cImkgPT09IF9yb3dzLmxlbmd0aCAtIDFcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIF9jb2x1bW5zOyBpbmRleCBhcyBqXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJwcy1ncmlkLXNxdWFyZVwiXHJcbiAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJwcmV2aWV3U2VsZWN0aW9uKGksIGopXCJcclxuICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImVuZFByZXZpZXdTZWxlY3Rpb24oKVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuYnBzLWdyaWQtc2VsZWN0ZWQtc3F1YXJlLXRvcF09XCJpc1NlbGVjdGVkKGksIGopICYmICFpXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtZ3JpZC1zZWxlY3RlZC1zcXVhcmUtYm90dG9tXT1cImlzU2VsZWN0ZWQoaSwgaikgJiYgaSA9PT0gc2VsZWN0aW9uWzBdXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtZ3JpZC1zZWxlY3RlZC1zcXVhcmUtbGVmdF09XCJpc1NlbGVjdGVkKGksIGopICYmICFqXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtZ3JpZC1zZWxlY3RlZC1zcXVhcmUtcmlnaHRdPVwiaXNTZWxlY3RlZChpLCBqKSAmJiBqID09PSBzZWxlY3Rpb25bMV1cIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1ncmlkLWZpcnN0LXNxdWFyZS1pbi1yb3ddPVwiIWpcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1ncmlkLWxlZnQtdG9wLWNvcm5lcl09XCJpID09PSBqICYmICFpXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtZ3JpZC1sZWZ0LWJvdHRvbS1jb3JuZXJdPVwiaSA9PT0gX3Jvd3MubGVuZ3RoIC0gMSAmJiAhalwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuYnBzLWdyaWQtcmlnaHQtYm90dG9tLWNvcm5lcl09XCJpID09PSBfcm93cy5sZW5ndGggLSAxICYmIGogPT09IF9jb2x1bW5zLmxlbmd0aCAtIDFcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1ncmlkLXJpZ2h0LXRvcC1jb3JuZXJdPVwiIWkgJiYgaiA9PT0gX2NvbHVtbnMubGVuZ3RoIC0gMVwiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3Rpb25DaGFuZ2UoaSwgailcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XG4iXX0=