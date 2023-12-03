import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, ChangeDetectionStrategy, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
import { CeldType } from '../bps-table/bps-table.component';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { NzTableComponent } from 'ng-zorro-antd/table';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/table";
import * as i5 from "../bps-input/bps-input.directive";
const _c0 = ["gridComponent"];
const _c1 = ["bpsExpandablePanel"];
function BpsTableExpandablePanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 12);
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    i0.ɵɵproperty("nzWidth", field_r4.width);
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r9 = i0.ɵɵnextContext(2).$implicit;
    const data_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r6[field_r9.property].ref)("ngTemplateOutletContext", data_r6[field_r9.property].context);
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r9 = i0.ɵɵnextContext().$implicit;
    const data_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r6[field_r9.property]);
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r9 = i0.ɵɵnextContext(2).$implicit;
    const data_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", data_r6[field_r9.property], " ");
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 21, 22);
    i0.ɵɵlistener("ngModelChange", function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r28); const field_r9 = i0.ɵɵnextContext(2).$implicit; const data_r6 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r6[field_r9.property] = $event)); })("click", function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_ng_template_2_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r30.preventDefault($event)); })("keyup", function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_ng_template_2_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r32 = i0.ɵɵnextContext(3); const i_r7 = ctx_r32.index; const data_r6 = ctx_r32.$implicit; const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.endEditMode($event, i_r7, data_r6)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r9 = i0.ɵɵnextContext(2).$implicit;
    const data_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r6[field_r9.property]);
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 18);
    i0.ɵɵtemplate(2, BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_ng_template_2_Template, 2, 1, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r21 = i0.ɵɵreference(3);
    const data_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.editId !== data_r6[ctx_r12.config.fieldId])("ngIfElse", _r21);
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 23);
    i0.ɵɵlistener("click", function BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_3_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r38); const data_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.startEdit(data_r6, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-table-expandable-panel-menu-pencil-disabled", !ctx_r13.isNull(data_r6.editable) && !data_r6.editable);
} }
function BpsTableExpandablePanelComponent_ng_template_12_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵtemplate(1, BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_1_Template, 2, 1, "ng-container", 16);
    i0.ɵɵtemplate(2, BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_2_Template, 4, 2, "ng-container", 16);
    i0.ɵɵtemplate(3, BpsTableExpandablePanelComponent_ng_template_12_td_1_ng_container_3_Template, 2, 2, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const fi_r10 = ctx.index;
    const data_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r8.getTDClassMap(field_r9, data_r6, fi_r10));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isCeldTypeTemplateRef(field_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isCeldTypeDefault(field_r9));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !fi_r10);
} }
function BpsTableExpandablePanelComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 13);
    i0.ɵɵlistener("click", function BpsTableExpandablePanelComponent_ng_template_12_Template_tr_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r42); const data_r6 = restoredCtx.$implicit; const ctx_r41 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r41.clickRow($event, data_r6)); });
    i0.ɵɵtemplate(1, BpsTableExpandablePanelComponent_ng_template_12_td_1_Template, 4, 4, "td", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r3.isRowSelected(data_r6));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.getFields());
} }
// tslint:disable-next-line no-any
export class BpsTableExpandablePanelComponent {
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId !== null && this.inputElement && !this.inputElement.nativeElement.isEqualNode(e.target)) {
            this.emitOnEditEvent();
            this.editId = null;
            this.cdr.detectChanges();
        }
    }
    emitOnEditEvent() {
        let editedEl = this._data.filter(el => el[this.config.fieldId] === this.editId);
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    }
    endEditMode($event, index, data = null) {
        if ($event.key === ('Enter' || 'enter')) {
            this.emitOnEditEvent();
            this.editId = null;
            this.cdr.detectChanges();
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    emitBpsEvent($event, type) {
        switch (type) {
            case 'pageIndex':
                this.pageIndexChange.emit($event);
                break;
            case 'currentPageData':
                this.currentPageDataChange.emit($event);
                break;
            case 'queryParams':
                this.queryParamsChange.emit($event);
                break;
            case 'pageSize':
                this.pageSizeChange.emit($event);
                break;
        }
    }
    getFields() {
        return this.config ? this.config.fields.filter(item => item.hidden === undefined || !item.hidden) : [];
    }
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.locale = {}; // tslint:disable-line:no-any
        this.destroy$ = new Subject();
        this.checkboxCache = [];
        this.mapOfExpandData = {};
        this._data = [];
        this.editId = null;
        this.isExpanded = false;
        this.searchBoxHovered = false;
        this._searchSubject = new Subject();
        this.frontPagination = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = false;
        this.paginationPosition = 'bottom';
        this.bordered = false;
        this.widthConfig = [];
        this.loading = false;
        this.loadingDelay = 0;
        this.scroll = { x: null, y: null };
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.showQuickJumper = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.simple = false;
        this.virtualScroll = false;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.inlineEdit = false;
        this.pageIndexChange = new EventEmitter();
        this.currentPageDataChange = new EventEmitter();
        this.queryParamsChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.ondblclickRow = new EventEmitter();
        this.selectionChange = new EventEmitter();
        /* Thead API */
        this.singleSort = true;
        this.sortChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.onedit = new EventEmitter();
        this.clicks = 0;
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            this.updateCheckboxCache();
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this._searchSubject.unsubscribe();
    }
    isCeldTypeTemplateRef(field) {
        return field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeDefault(field) {
        return field.celdType === CeldType.Default;
    }
    getTDClassMap(field, data, fi = 9999) {
        return {
            ...field.ngClass,
            ['bps-td-expandable-panel']: true,
            ['bps-td-disabled']: data.disabled,
            ['bps-td-no-padding']: data[this.config.fieldId] === this.editId,
            ['bps-fst-column']: !fi,
        };
    }
    isRowSelected(data) {
        if (this.config) {
            const dataSelected = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
            return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    }
    updateCheckboxCache() {
        this.checkboxCache.length = 0;
        this._data.forEach(item => {
            this.checkboxCache.push({
                selected: item.selected ? item.selected : false,
                data: item
            });
        });
    }
    clickRow(event, data) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
            }
            else if (this.clicks === 2) {
                this.ondblclickRow.emit(data);
            }
            this.clicks = 0;
        }, 300);
    }
    startEdit(data, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.inlineEdit && !data.disabled && (this.isNull(data.editable) || data.editable)) {
            this.editId = data[this.config.fieldId];
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    isNull(value) {
        return value === null || value === undefined;
    }
    selectText($event) {
        $event.target.select();
    }
    selectRow(data) {
        if (!data.disabled) {
            this.onclickRow.emit(data);
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = true;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
        }
    }
    static { this.ɵfac = function BpsTableExpandablePanelComponent_Factory(t) { return new (t || BpsTableExpandablePanelComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTableExpandablePanelComponent, selectors: [["bps-table-expandable-panel"]], viewQuery: function BpsTableExpandablePanelComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(BpsInputDirective, 5, ElementRef);
            i0.ɵɵviewQuery(_c0, 5, NzTableComponent);
            i0.ɵɵviewQuery(_c1, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gridComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.panel = _t.first);
        } }, hostBindings: function BpsTableExpandablePanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseup", function BpsTableExpandablePanelComponent_mouseup_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { data: "data", frontPagination: "frontPagination", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", showPagination: "showPagination", paginationPosition: "paginationPosition", bordered: "bordered", widthConfig: "widthConfig", loading: "loading", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", scroll: "scroll", title: "title", footer: "footer", noResult: "noResult", pageSizeOptions: "pageSizeOptions", showQuickJumper: "showQuickJumper", showSizeChanger: "showSizeChanger", showTotal: "showTotal", hideOnSinglePage: "hideOnSinglePage", simple: "simple", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", inlineEdit: "inlineEdit", singleSort: "singleSort", config: "config", gridID: "gridID", menuTemplate: "menuTemplate", currentPreviewTemplate: "currentPreviewTemplate" }, outputs: { pageIndexChange: "pageIndexChange", currentPageDataChange: "currentPageDataChange", queryParamsChange: "queryParamsChange", pageSizeChange: "pageSizeChange", onclickRow: "onclickRow", ondblclickRow: "ondblclickRow", selectionChange: "selectionChange", sortChange: "sortChange", configChange: "configChange", onedit: "onedit" }, exportAs: ["bpsTableExpandablePanel"], features: [i0.ɵɵNgOnChangesFeature], decls: 16, vars: 30, consts: [[1, "bps-table-expandable-panel-wrapper"], [1, "bps-table-expandable-panel-menu"], [1, "bps-table-expandable-panel-menu-inner"], [3, "ngTemplateOutlet"], [1, "bps-table-report", "bps-table-expandable-panel", "bps-table-expandable-panel-table-wrapper"], ["bpsExpandablePanel", ""], [1, "bps-table-expandable-panel", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzShowPagination", "nzPaginationPosition", "nzBordered", "nzWidthConfig", "nzLoading", "nzLoadingIndicator", "nzLoadingDelay", "nzScroll", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzShowQuickJumper", "nzShowSizeChanger", "nzShowTotal", "nzHideOnSinglePage", "nzSimple", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzPageIndexChange", "nzCurrentPageDataChange", "nzQueryParams", "nzPageSizeChange"], ["gridComponent", ""], ["style", "display: none;", 3, "nzWidth", 4, "ngFor", "ngForOf"], ["ngFor", "", 3, "ngForOf"], [1, "bps-table-expandable-panel-preview-wrapper"], [1, "bps-table-expandable-panel-preview"], [2, "display", "none", 3, "nzWidth"], [3, "click"], ["style", "position: relative", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "position", "relative", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], ["editTpl", ""], [1, "expandable-table-td-content"], ["bps-input", "", 1, "bps-editable-cell-input", 3, "ngModel", "ngModelChange", "click", "keyup"], ["inputElement", ""], [1, "bps-table-expandable-panel-menu-pencil", 3, "click"]], template: function BpsTableExpandablePanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelementContainer(3, 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4, 5)(6, "nz-table", 6, 7);
            i0.ɵɵlistener("nzPageIndexChange", function BpsTableExpandablePanelComponent_Template_nz_table_nzPageIndexChange_6_listener($event) { return ctx.emitBpsEvent($event, "pageIndex"); })("nzCurrentPageDataChange", function BpsTableExpandablePanelComponent_Template_nz_table_nzCurrentPageDataChange_6_listener($event) { return ctx.emitBpsEvent($event, "currentPageData"); })("nzQueryParams", function BpsTableExpandablePanelComponent_Template_nz_table_nzQueryParams_6_listener($event) { return ctx.emitBpsEvent($event, "queryParams"); })("nzPageSizeChange", function BpsTableExpandablePanelComponent_Template_nz_table_nzPageSizeChange_6_listener($event) { return ctx.emitBpsEvent($event, "pageSize"); });
            i0.ɵɵelementStart(8, "thead")(9, "tr");
            i0.ɵɵtemplate(10, BpsTableExpandablePanelComponent_th_10_Template, 1, 1, "th", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "tbody");
            i0.ɵɵtemplate(12, BpsTableExpandablePanelComponent_ng_template_12_Template, 2, 3, "ng-template", 9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "div", 10)(14, "div", 11);
            i0.ɵɵelementContainer(15, 3);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(7);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.menuTemplate);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzData", ctx._data)("nzFrontPagination", ctx.frontPagination)("nzTotal", ctx.total)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzShowPagination", ctx.showPagination)("nzPaginationPosition", ctx.paginationPosition)("nzBordered", ctx.bordered)("nzWidthConfig", ctx.widthConfig)("nzLoading", ctx.loading)("nzLoadingIndicator", ctx.loadingIndicator)("nzLoadingDelay", ctx.loadingDelay)("nzScroll", ctx.scroll)("nzTitle", ctx.title)("nzFooter", ctx.footer)("nzNoResult", ctx.noResult)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowQuickJumper", ctx.showQuickJumper)("nzShowSizeChanger", ctx.showSizeChanger)("nzShowTotal", ctx.showTotal)("nzHideOnSinglePage", ctx.hideOnSinglePage)("nzSimple", ctx.simple)("nzVirtualItemSize", ctx.virtualItemSize)("nzVirtualMaxBufferPx", ctx.virtualMaxBufferPx)("nzVirtualMinBufferPx", ctx.virtualMinBufferPx)("nzVirtualForTrackBy", ctx.virtualForTrackBy);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.getFields());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r1.data);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.currentPreviewTemplate);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NzTableComponent, i4.NzTableCellDirective, i4.NzThMeasureDirective, i4.NzTheadComponent, i4.NzTbodyComponent, i4.NzTrDirective, i5.BpsInputDirective], styles: [".bps-table-expandable-panel .ant-table-thead>tr>th,   .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}.bps-invisible[_ngcontent-%COMP%]{display:none}.bps-table-expandable-panel-table-wrapper[_ngcontent-%COMP%]{background-color:#313131!important}.bps-table-expandable-panel[_ngcontent-%COMP%]:not(.bps-table-expandable-panel-table-wrapper){margin:8px 0 8px 10px!important;background-color:#313131!important}  .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{border-bottom:none!important;background-color:#313131!important;border-right:none!important}  .bps-table-expandable-panel .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}  .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}  .bps-table-expandable-panel .ant-table-tbody>tr>td:last-child{border-right:unset!important}  .bps-table-expandable-panel .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}  .bps-table-expandable-panel .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-disabled){background:#313b3f!important}  .bps-table-expandable-panel .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}  .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}  .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}  .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}  .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}  .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}  .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}  .bps-table-expandable-panel .ant-table-header.ant-table-hide-scrollbar{margin-bottom:0!important;background-color:#262626!important;overflow-x:hidden!important}  .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column[_ngcontent-%COMP%]{padding-left:10px!important}.bps-table-expandable-panel[_ngcontent-%COMP%]   .bps-editable-cell-input[_ngcontent-%COMP%]{border-radius:0!important;border-color:#00a2d1!important;padding-left:10px!important;z-index:2}.bps-td-no-padding[_ngcontent-%COMP%]{padding:0!important}  .bps-table-expandable-panel .ant-table-expand-icon-th{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}  .bps-table-expandable-panel .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}  .bps-table-expandable-panel .ant-table-row-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}  .bps-table-expandable-panel .ant-table-row-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}  .bps-table-expandable-panel .anticon svg{display:none!important}  .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}  .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}  .bps-table-expandable-panel .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after{content:\"\"}  .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}  .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,   .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after,   .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}  .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}  .bps-table-expandable-panel .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}  .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon[_ngcontent-%COMP%]{position:absolute;top:14px;right:75px;width:270px;transition:all .3s}  .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img[_ngcontent-%COMP%]{border-radius:100px;background:#3d3d3d;padding:5px;transition:all .3s}.bps-table-filter-custom-input[_ngcontent-%COMP%]{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input[_ngcontent-%COMP%]:hover{border:solid 1px #535353!important}  .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}  .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}  .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter[_ngcontent-%COMP%]{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}  .bps-table-glass_profile .bps-table-expandable-panel .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter[_ngcontent-%COMP%]::placeholder{color:#666;font-size:10px}.bps-table-expandable-panel-wrapper[_ngcontent-%COMP%]{width:100%!important;height:100%!important;display:table!important;table-layout:fixed!important;background-color:#313131!important}.bps-table-expandable-panel-preview[_ngcontent-%COMP%]{border-left:1.3px solid #363636;height:100%;min-height:100%;padding:0 10px}.bps-table-expandable-panel-menu[_ngcontent-%COMP%]{display:table-cell;width:30px;background-color:#262626;top:0;vertical-align:top}.bps-table-expandable-panel-inner-panel[_ngcontent-%COMP%]{width:calc(50% - 15px)!important;display:table-cell!important;padding:4px 0;background-color:#313131;vertical-align:top}  .bps-table-expandable-panel-menu-inner img,   .bps-table-expandable-panel-menu-inner svg{background-color:#363636;border-radius:100px;margin-bottom:5px;padding:6px;cursor:pointer}.bps-table-expandable-panel-menu-inner[_ngcontent-%COMP%]{background-color:#3e3e3e;padding:5px 3px 0;border-radius:9px 0 0 9px}.bps-table-expandable-panel-menu-pencil[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:5px;right:5px}  .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}td[_ngcontent-%COMP%]:not(.bps-td-disabled)   .bps-table-expandable-panel-menu-pencil[_ngcontent-%COMP%]:not(.bps-table-expandable-panel-menu-pencil-disabled):hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}.bps-table-expandable-panel-preview-wrapper[_ngcontent-%COMP%]{padding:8px 0!important;background-color:#313131!important;width:calc(50% - 15px);height:100%;min-height:100%;display:table-cell;position:relative;vertical-align:top}  .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .expandable-table-td-content{width:calc(100% - 20px)}  .bps-table-expandable-panel .ant-table-fixed{padding-right:4px!important;background-color:#313131}"], changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "simple", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "virtualScroll", void 0);
__decorate([
    InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualMinBufferPx", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "inlineEdit", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTableExpandablePanelComponent, [{
        type: Component,
        args: [{ selector: 'bps-table-expandable-panel', exportAs: 'bpsTableExpandablePanel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-table-expandable-panel-wrapper\">\r\n  <div class=\"bps-table-expandable-panel-menu\">\r\n    <div class=\"bps-table-expandable-panel-menu-inner\">\r\n      <ng-container [ngTemplateOutlet]=\"menuTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div #bpsExpandablePanel class=\"bps-table-report bps-table-expandable-panel bps-table-expandable-panel-table-wrapper\">\r\n    <nz-table #gridComponent\r\n              class=\"bps-table-expandable-panel\"\r\n              [nzData]=\"_data\"\r\n              [nzFrontPagination]=\"frontPagination\"\r\n              [nzTotal]=\"total\"\r\n              [nzPageIndex]=\"pageIndex\"\r\n              [nzPageSize]=\"pageSize\"\r\n              [nzShowPagination]=\"showPagination\"\r\n              [nzPaginationPosition]=\"paginationPosition\"\r\n              [nzBordered]=\"bordered\"\r\n              [nzWidthConfig]=\"widthConfig\"\r\n              [nzLoading]=\"loading\"\r\n              [nzLoadingIndicator]=\"loadingIndicator\"\r\n              [nzLoadingDelay]=\"loadingDelay\"\r\n              [nzScroll]=\"scroll\"\r\n              [nzTitle]=\"title\"\r\n              [nzFooter]=\"footer\"\r\n              [nzNoResult]=\"noResult\"\r\n              [nzPageSizeOptions]=\"pageSizeOptions\"\r\n              [nzShowQuickJumper]=\"showQuickJumper\"\r\n              [nzShowSizeChanger]=\"showSizeChanger\"\r\n              [nzShowTotal]=\"showTotal\"\r\n              [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n              [nzSimple]=\"simple\"\r\n              [nzVirtualItemSize]=\"virtualItemSize\"\r\n              [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n              [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n              [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n              (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n              (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n              (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n              (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let field of getFields(); index as hi\"\r\n              style=\"display: none;\"\r\n              [nzWidth]=\"field.width\">\r\n          </th>\r\n        </tr>  \r\n      </thead>\r\n      <tbody>\r\n        <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n          <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              (click)=\"clickRow($event, data)\">\r\n\r\n            <td *ngFor=\"let field of getFields(); index as fi\"\r\n                style=\"position: relative\"\r\n                [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n              <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n                <ng-container *ngIf=\"data[field.property]\">\r\n                  <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n                </ng-container>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n                <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                  <div class=\"expandable-table-td-content\">\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                </ng-container>\r\n                <ng-template #editTpl>\r\n                  <input bps-input\r\n                         #inputElement\r\n                         [(ngModel)]=\"data[field.property]\"\r\n                         class=\"bps-editable-cell-input\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (keyup)=\"endEditMode($event, i, data)\" />\r\n                </ng-template>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"!fi\">\r\n                <span class=\"bps-table-expandable-panel-menu-pencil\"\r\n                      [class.bps-table-expandable-panel-menu-pencil-disabled]=\"!isNull(data.editable) && !data.editable\"\r\n                      (click)=\"startEdit(data, $event)\"></span>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n\r\n  <div class=\"bps-table-expandable-panel-preview-wrapper\">\r\n    <div class=\"bps-table-expandable-panel-preview\">\r\n      <ng-container [ngTemplateOutlet]=\"currentPreviewTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n", styles: ["::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th,::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}.bps-invisible{display:none}.bps-table-expandable-panel-table-wrapper{background-color:#313131!important}.bps-table-expandable-panel:not(.bps-table-expandable-panel-table-wrapper){margin:8px 0 8px 10px!important;background-color:#313131!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{border-bottom:none!important;background-color:#313131!important;border-right:none!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-header.ant-table-hide-scrollbar{margin-bottom:0!important;background-color:#262626!important;overflow-x:hidden!important}::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:10px!important}.bps-table-expandable-panel .bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:10px!important;z-index:2}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table-expandable-panel .ant-table-expand-icon-th{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table-expandable-panel .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-row-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table-expandable-panel .ant-table-row-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-expandable-panel .anticon svg{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table-expandable-panel .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after{content:\"\"}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:all .3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;padding:5px;transition:all .3s}.bps-table-filter-custom-input{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input:hover{border:solid 1px #535353!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table-expandable-panel .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}.bps-table-expandable-panel-wrapper{width:100%!important;height:100%!important;display:table!important;table-layout:fixed!important;background-color:#313131!important}.bps-table-expandable-panel-preview{border-left:1.3px solid #363636;height:100%;min-height:100%;padding:0 10px}.bps-table-expandable-panel-menu{display:table-cell;width:30px;background-color:#262626;top:0;vertical-align:top}.bps-table-expandable-panel-inner-panel{width:calc(50% - 15px)!important;display:table-cell!important;padding:4px 0;background-color:#313131;vertical-align:top}::ng-deep .bps-table-expandable-panel-menu-inner img,::ng-deep .bps-table-expandable-panel-menu-inner svg{background-color:#363636;border-radius:100px;margin-bottom:5px;padding:6px;cursor:pointer}.bps-table-expandable-panel-menu-inner{background-color:#3e3e3e;padding:5px 3px 0;border-radius:9px 0 0 9px}.bps-table-expandable-panel-menu-pencil:after{content:\"\";position:absolute;top:5px;right:5px}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:not(.bps-table-expandable-panel-menu-pencil-disabled):hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}.bps-table-expandable-panel-preview-wrapper{padding:8px 0!important;background-color:#313131!important;width:calc(50% - 15px);height:100%;min-height:100%;display:table-cell;position:relative;vertical-align:top}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .expandable-table-td-content{width:calc(100% - 20px)}::ng-deep .bps-table-expandable-panel .ant-table-fixed{padding-right:4px!important;background-color:#313131}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }]; }, { data: [{
            type: Input
        }], frontPagination: [{
            type: Input
        }], total: [{
            type: Input
        }], pageIndex: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], showPagination: [{
            type: Input
        }], paginationPosition: [{
            type: Input
        }], bordered: [{
            type: Input
        }], widthConfig: [{
            type: Input
        }], loading: [{
            type: Input
        }], loadingDelay: [{
            type: Input
        }], loadingIndicator: [{
            type: Input
        }], scroll: [{
            type: Input
        }], title: [{
            type: Input
        }], footer: [{
            type: Input
        }], noResult: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], showQuickJumper: [{
            type: Input
        }], showSizeChanger: [{
            type: Input
        }], showTotal: [{
            type: Input
        }], hideOnSinglePage: [{
            type: Input
        }], simple: [{
            type: Input
        }], virtualScroll: [{
            type: Input
        }], virtualItemSize: [{
            type: Input
        }], virtualMaxBufferPx: [{
            type: Input
        }], virtualMinBufferPx: [{
            type: Input
        }], virtualForTrackBy: [{
            type: Input
        }], inlineEdit: [{
            type: Input
        }], pageIndexChange: [{
            type: Output
        }], currentPageDataChange: [{
            type: Output
        }], queryParamsChange: [{
            type: Output
        }], pageSizeChange: [{
            type: Output
        }], onclickRow: [{
            type: Output
        }], ondblclickRow: [{
            type: Output
        }], selectionChange: [{
            type: Output
        }], singleSort: [{
            type: Input
        }], sortChange: [{
            type: Output
        }], config: [{
            type: Input
        }], configChange: [{
            type: Output
        }], gridID: [{
            type: Input
        }], onedit: [{
            type: Output
        }], menuTemplate: [{
            type: Input
        }], currentPreviewTemplate: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: [BpsInputDirective, { static: false, read: ElementRef }]
        }], gridComponent: [{
            type: ViewChild,
            args: ['gridComponent', { read: NzTableComponent, static: false }]
        }], panel: [{
            type: ViewChild,
            args: ['bpsExpandablePanel', { read: ElementRef, static: false }]
        }], handleClick: [{
            type: HostListener,
            args: ['window:mouseup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC9icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsL2Jwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLFNBQVMsRUFJVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxnQkFBZ0IsQ0FBQztBQUluRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFrQixNQUFNLGtDQUFrQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7SUNnQjdDLHlCQUdLOzs7SUFERCx3Q0FBdUI7OztJQWVuQix3QkFBaUg7OztJQURuSCw2QkFBMkM7SUFDekMsc0pBQWlIO0lBQ25ILDBCQUFlOzs7O0lBREUsZUFBNEM7SUFBNUMsaUVBQTRDLCtEQUFBOzs7SUFGL0Qs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O1lBQ0ksVUFBVTtrQkFBbkIsTUFBTTtZQUdFLE1BQU07a0JBQWQsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU07WUFDRSxNQUFNO2tCQUFkLEtBQUs7WUFDSSxNQUFNO2tCQUFmLE1BQU07WUFDRSxZQUFZO2tCQUFwQixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBRTZELFlBQVk7a0JBQTlFLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDTSxhQUFhO2tCQUFuRixTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0MsS0FBSztrQkFBMUUsU0FBUzttQkFBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUdwRSxXQUFXO2tCQURWLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgd2luZG93IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFRhYmxlQ29uZmlnLCBGaWVsZCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSwgQ2hlY2tib3hTZWxlY3QgfSBmcm9tICcuLi9icHMtdGFibGUvYnBzLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdicHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdicHNUYWJsZUV4cGFuZGFibGVQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5leHBvcnQgY2xhc3MgQnBzVGFibGVFeHBhbmRhYmxlUGFuZWxDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBsb2NhbGU6IGFueSA9IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBtYXBPZkV4cGFuZERhdGE6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgX2RhdGEgPSBbXTtcclxuICBlZGl0SWQgPSBudWxsO1xyXG4gIGlzRXhwYW5kZWQgPSBmYWxzZTtcclxuICBzZWFyY2hCb3hIb3ZlcmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc2VhcmNoU3ViamVjdDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLyogVGFibGUgQVBJICovIFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gIH1cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZnJvbnRQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcclxuICBASW5wdXQoKSB2aXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjdXJyZW50UGFnZURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcXVlcnlQYXJhbXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmRibGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuLyogVGhlYWQgQVBJICovXHJcbiAgQElucHV0KCkgc2luZ2xlU29ydCA9IHRydWU7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBcclxuICAvKiBCUFMgQVBJICovIFxyXG4gIEBJbnB1dCgpIGNvbmZpZzogVGFibGVDb25maWc7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFibGVDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIG1lbnVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgY3VycmVudFByZXZpZXdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBWaWV3Q2hpbGQoQnBzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZ3JpZENvbXBvbmVudCcsIHsgcmVhZDogTnpUYWJsZUNvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KSBncmlkQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50PGFueT47XHJcbiAgQFZpZXdDaGlsZCgnYnBzRXhwYW5kYWJsZVBhbmVsJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIHBhbmVsOiBFbGVtZW50UmVmO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmICF0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmlzRXF1YWxOb2RlKGUudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLmVtaXRPbkVkaXRFdmVudCgpO1xyXG4gICAgICB0aGlzLmVkaXRJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtaXRPbkVkaXRFdmVudCgpIHtcclxuICAgIGxldCBlZGl0ZWRFbCA9IHRoaXMuX2RhdGEuZmlsdGVyKGVsID0+IGVsW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSB0aGlzLmVkaXRJZCk7XHJcbiAgICBpZiAoZWRpdGVkRWwubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQoZWRpdGVkRWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZW1pdEJwc0V2ZW50KCRldmVudCwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAncGFnZUluZGV4JzpcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1cnJlbnRQYWdlRGF0YSc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdxdWVyeVBhcmFtcyc6XHJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtc0NoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BhZ2VTaXplJzpcclxuICAgICAgICB0aGlzLnBhZ2VTaXplQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZpZWxkcygpOiBGaWVsZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnLmZpZWxkcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkIHx8ICFpdGVtLmhpZGRlbikgOiBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlXHJcbiAgKSB7ICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5fc2VhcmNoU3ViamVjdC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNDZWxkVHlwZVRlbXBsYXRlUmVmKGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5UZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkOiBGaWVsZCkge1xyXG4gICAgcmV0dXJuIGZpZWxkLmNlbGRUeXBlID09PSBDZWxkVHlwZS5EZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VERDbGFzc01hcChmaWVsZDogRmllbGQsIGRhdGEsIGZpID0gOTk5OSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZmllbGQubmdDbGFzcyxcclxuICAgICAgWydicHMtdGQtZXhwYW5kYWJsZS1wYW5lbCddOiB0cnVlLFxyXG4gICAgICBbJ2Jwcy10ZC1kaXNhYmxlZCddOiBkYXRhLmRpc2FibGVkLFxyXG4gICAgICBbJ2Jwcy10ZC1uby1wYWRkaW5nJ106IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IHRoaXMuZWRpdElkLFxyXG4gICAgICBbJ2Jwcy1mc3QtY29sdW1uJ106ICFmaSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzUm93U2VsZWN0ZWQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgY29uc3QgZGF0YVNlbGVjdGVkID0gdGhpcy5jaGVja2JveENhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpLm1hcChpdGVtID0+IGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSk7XHJcbiAgICAgIHJldHVybiBkYXRhU2VsZWN0ZWQuaW5kZXhPZihkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveENhY2hlLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLl9kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5wdXNoKHtcclxuICAgICAgICBzZWxlY3RlZDogaXRlbS5zZWxlY3RlZCA/IGl0ZW0uc2VsZWN0ZWQgOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja3MgPSAwO1xyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZGF0YSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jbGlja3MgPT09IDIpIHtcclxuICAgICAgICB0aGlzLm9uZGJsY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0KGRhdGE6IGFueSwgZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmlubGluZUVkaXQgJiYgIWRhdGEuZGlzYWJsZWQgJiYgKHRoaXMuaXNOdWxsKGRhdGEuZWRpdGFibGUpIHx8IGRhdGEuZWRpdGFibGUpKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc051bGwodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RUZXh0KCRldmVudCkge1xyXG4gICAgJGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhkYXRhOiBhbnkpIHtcclxuICAgIGlmICghZGF0YS5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm9uY2xpY2tSb3cuZW1pdChkYXRhKTtcclxuICAgICAgdGhpcy5jaGVja2JveENhY2hlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSkge1xyXG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImJwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsLXdyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwtbWVudVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsLW1lbnUtaW5uZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJtZW51VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICNicHNFeHBhbmRhYmxlUGFuZWwgY2xhc3M9XCJicHMtdGFibGUtcmVwb3J0IGJwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsIGJwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsLXRhYmxlLXdyYXBwZXJcIj5cclxuICAgIDxuei10YWJsZSAjZ3JpZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWxcIlxyXG4gICAgICAgICAgICAgIFtuekRhdGFdPVwiX2RhdGFcIlxyXG4gICAgICAgICAgICAgIFtuekZyb250UGFnaW5hdGlvbl09XCJmcm9udFBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgIFtuelRvdGFsXT1cInRvdGFsXCJcclxuICAgICAgICAgICAgICBbbnpQYWdlSW5kZXhdPVwicGFnZUluZGV4XCJcclxuICAgICAgICAgICAgICBbbnpQYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXHJcbiAgICAgICAgICAgICAgW256U2hvd1BhZ2luYXRpb25dPVwic2hvd1BhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgIFtuelBhZ2luYXRpb25Qb3NpdGlvbl09XCJwYWdpbmF0aW9uUG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgIFtuekJvcmRlcmVkXT1cImJvcmRlcmVkXCJcclxuICAgICAgICAgICAgICBbbnpXaWR0aENvbmZpZ109XCJ3aWR0aENvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgICBbbnpMb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIlxyXG4gICAgICAgICAgICAgIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIlxyXG4gICAgICAgICAgICAgIFtuelNjcm9sbF09XCJzY3JvbGxcIlxyXG4gICAgICAgICAgICAgIFtuelRpdGxlXT1cInRpdGxlXCJcclxuICAgICAgICAgICAgICBbbnpGb290ZXJdPVwiZm9vdGVyXCJcclxuICAgICAgICAgICAgICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdFwiXHJcbiAgICAgICAgICAgICAgW256UGFnZVNpemVPcHRpb25zXT1cInBhZ2VTaXplT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgW256U2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXHJcbiAgICAgICAgICAgICAgW256U2hvd1NpemVDaGFuZ2VyXT1cInNob3dTaXplQ2hhbmdlclwiXHJcbiAgICAgICAgICAgICAgW256U2hvd1RvdGFsXT1cInNob3dUb3RhbFwiXHJcbiAgICAgICAgICAgICAgW256SGlkZU9uU2luZ2xlUGFnZV09XCJoaWRlT25TaW5nbGVQYWdlXCJcclxuICAgICAgICAgICAgICBbbnpTaW1wbGVdPVwic2ltcGxlXCJcclxuICAgICAgICAgICAgICBbbnpWaXJ0dWFsSXRlbVNpemVdPVwidmlydHVhbEl0ZW1TaXplXCJcclxuICAgICAgICAgICAgICBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgICAgICAgICAgICBbbnpWaXJ0dWFsTWluQnVmZmVyUHhdPVwidmlydHVhbE1pbkJ1ZmZlclB4XCJcclxuICAgICAgICAgICAgICBbbnpWaXJ0dWFsRm9yVHJhY2tCeV09XCJ2aXJ0dWFsRm9yVHJhY2tCeVwiXHJcbiAgICAgICAgICAgICAgKG56UGFnZUluZGV4Q2hhbmdlKT1cImVtaXRCcHNFdmVudCgkZXZlbnQsICdwYWdlSW5kZXgnKVwiXHJcbiAgICAgICAgICAgICAgKG56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlKT1cImVtaXRCcHNFdmVudCgkZXZlbnQsICdjdXJyZW50UGFnZURhdGEnKVwiXHJcbiAgICAgICAgICAgICAgKG56UXVlcnlQYXJhbXMpPVwiZW1pdEJwc0V2ZW50KCRldmVudCwgJ3F1ZXJ5UGFyYW1zJylcIlxyXG4gICAgICAgICAgICAgIChuelBhZ2VTaXplQ2hhbmdlKT1cImVtaXRCcHNFdmVudCgkZXZlbnQsICdwYWdlU2l6ZScpXCI+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGZpZWxkIG9mIGdldEZpZWxkcygpOyBpbmRleCBhcyBoaVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXHJcbiAgICAgICAgICAgICAgW256V2lkdGhdPVwiZmllbGQud2lkdGhcIj5cclxuICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgPC90cj4gIFxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1kYXRhIFtuZ0Zvck9mXT1cImdyaWRDb21wb25lbnQuZGF0YVwiIGxldC1pPVwiaW5kZXhcIj5cclxuICAgICAgICAgIDx0ciBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGVkLXJvd109XCJpc1Jvd1NlbGVjdGVkKGRhdGEpXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tSb3coJGV2ZW50LCBkYXRhKVwiPlxyXG5cclxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgZmlcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZ2V0VERDbGFzc01hcChmaWVsZCwgZGF0YSwgZmkpXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NlbGRUeXBlVGVtcGxhdGVSZWYoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRhdGFbZmllbGQucHJvcGVydHldLnJlZjsgY29udGV4dDogZGF0YVtmaWVsZC5wcm9wZXJ0eV0uY29udGV4dFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NlbGRUeXBlRGVmYXVsdChmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0SWQgIT09IGRhdGFbY29uZmlnLmZpZWxkSWRdOyBlbHNlIGVkaXRUcGxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4cGFuZGFibGUtdGFibGUtdGQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2VkaXRUcGw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBicHMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICNpbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJicHMtZWRpdGFibGUtY2VsbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50LCBpLCBkYXRhKVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJwcy10YWJsZS1leHBhbmRhYmxlLXBhbmVsLW1lbnUtcGVuY2lsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5icHMtdGFibGUtZXhwYW5kYWJsZS1wYW5lbC1tZW51LXBlbmNpbC1kaXNhYmxlZF09XCIhaXNOdWxsKGRhdGEuZWRpdGFibGUpICYmICFkYXRhLmVkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzdGFydEVkaXQoZGF0YSwgJGV2ZW50KVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L256LXRhYmxlPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwtcHJldmlldy13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnBzLXRhYmxlLWV4cGFuZGFibGUtcGFuZWwtcHJldmlld1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1cnJlbnRQcmV2aWV3VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==