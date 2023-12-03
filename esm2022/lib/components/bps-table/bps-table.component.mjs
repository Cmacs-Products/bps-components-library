import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, ChangeDetectionStrategy, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/table";
import * as i5 from "../bps-dropdown/bps-dropdown.directive";
import * as i6 from "../bps-input/bps-input-group.component";
import * as i7 from "../bps-input/bps-input.directive";
function BpsTableComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 9);
    i0.ɵɵlistener("click", function BpsTableComponent_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.preventDefault($event)); })("keyup", function BpsTableComponent_input_1_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.updateSearch($event.target.value)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placeholder", ctx_r0.filterPlaceholder);
} }
function BpsTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 10);
} if (rf & 2) {
    i0.ɵɵproperty("nzWidth", "40px");
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r11.template.ref)("ngTemplateOutletContext", field_r11.template.context);
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵtextInterpolate(field_r11.display);
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r6 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function BpsTableComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 12);
    i0.ɵɵlistener("nzSortOrderChange", function BpsTableComponent_ng_container_7_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r24); const field_r11 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(field_r11.sortOrder = $event); })("nzSortOrderChange", function BpsTableComponent_ng_container_7_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r24); const field_r11 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.sort({ key: field_r11.property, value: $event })); });
    i0.ɵɵtemplate(2, BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 13);
    i0.ɵɵtemplate(3, BpsTableComponent_ng_container_7_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, BpsTableComponent_ng_container_7_ng_container_1_ng_container_5_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r16 = i0.ɵɵreference(4);
    const field_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-column-disabled", field_r11.disabled);
    i0.ɵɵproperty("ngClass", field_r11.ngClass)("nzSortOrder", field_r11.sortOrder)("nzShowSort", field_r11.showSort)("nzWidth", field_r11.width);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r11.template)("ngIfElse", _r16);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", field_r11.showCustomFilter);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", field_r11.template.ref)("ngTemplateOutletContext", field_r11.template.context);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵtextInterpolate(field_r11.display);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r6 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function BpsTableComponent_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 17);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 13);
    i0.ɵɵtemplate(3, BpsTableComponent_ng_container_7_ng_container_2_ng_template_3_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, BpsTableComponent_ng_container_7_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r29 = i0.ɵɵreference(4);
    const field_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-column-disabled", field_r11.disabled);
    i0.ɵɵproperty("ngClass", field_r11.ngClass)("nzWidth", field_r11.width);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r11.template)("ngIfElse", _r29);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", field_r11.showCustomFilter);
} }
function BpsTableComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_container_7_ng_container_1_Template, 6, 9, "ng-container", 11);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_container_7_ng_container_2_Template, 6, 7, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r11.showSort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r11.showSort);
} }
function BpsTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 18);
} if (rf & 2) {
    i0.ɵɵproperty("nzWidth", "70px");
} }
function BpsTableComponent_ng_template_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 21);
    i0.ɵɵlistener("nzExpandChange", function BpsTableComponent_ng_template_10_ng_container_1_Template_td_nzExpandChange_1_listener($event) { i0.ɵɵrestoreView(_r44); const data_r36 = i0.ɵɵnextContext().$implicit; const ctx_r42 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r42.expandRow(data_r36, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r36 = i0.ɵɵnextContext().$implicit;
    const ctx_r38 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzExpand", ctx_r38.mapOfExpandData[data_r36[ctx_r38.config.fieldId]]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r46 = i0.ɵɵnextContext(2).$implicit;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", data_r36[field_r46.property].ref)("ngTemplateOutletContext", data_r36[field_r46.property].context);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r46 = i0.ɵɵnextContext().$implicit;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r36[field_r46.property]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 25);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_ng_container_3_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r63); const data_r36 = i0.ɵɵnextContext(4).$implicit; const ctx_r61 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r61.startEdit(data_r36, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(2);
    const field_r46 = ctx_r65.$implicit;
    const fi_r47 = ctx_r65.index;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", data_r36[field_r46.property], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !fi_r47);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 26);
    i0.ɵɵlistener("ngModelChange", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r68); const field_r46 = i0.ɵɵnextContext(2).$implicit; const data_r36 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r36[field_r46.property] = $event)); })("click", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r70 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r70.preventDefault($event)); })("keyup", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r72 = i0.ɵɵnextContext(3); const i_r37 = ctx_r72.index; const data_r36 = ctx_r72.$implicit; const ctx_r71 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r71.endEditMode($event, i_r37, data_r36)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r46 = i0.ɵɵnextContext(2).$implicit;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngModel", data_r36[field_r46.property]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 13);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 23, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r58 = i0.ɵɵreference(3);
    const data_r36 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r49 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r49.editId !== data_r36[ctx_r49.config.fieldId])("ngIfElse", _r58);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r46 = i0.ɵɵnextContext(2).$implicit;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", data_r36[field_r46.property], " ");
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 26);
    i0.ɵɵlistener("ngModelChange", function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r82); const field_r46 = i0.ɵɵnextContext(2).$implicit; const data_r36 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView((data_r36[field_r46.property] = $event)); })("click", function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r82); const ctx_r84 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r84.preventDefault($event)); })("keyup", function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r82); const ctx_r86 = i0.ɵɵnextContext(3); const i_r37 = ctx_r86.index; const data_r36 = ctx_r86.$implicit; const ctx_r85 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r85.endEditMode($event, i_r37, data_r36)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r46 = i0.ɵɵnextContext(2).$implicit;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    const ctx_r77 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-editable-cell-input-home-table", ctx_r77.tableType === "home");
    i0.ɵɵproperty("ngModel", data_r36[field_r46.property]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 11);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template, 2, 3, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r46 = i0.ɵɵnextContext().$implicit;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    const ctx_r50 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.editId !== data_r36[ctx_r50.config.fieldId] || ctx_r50.editProperty !== field_r46.property);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.editId === data_r36[ctx_r50.config.fieldId] && ctx_r50.editProperty === field_r46.property);
} }
function BpsTableComponent_ng_template_10_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_template_10_td_2_ng_container_2_Template, 4, 2, "ng-container", 11);
    i0.ɵɵtemplate(3, BpsTableComponent_ng_template_10_td_2_ng_container_3_Template, 3, 2, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r46 = ctx.$implicit;
    const fi_r47 = ctx.index;
    const data_r36 = i0.ɵɵnextContext().$implicit;
    const ctx_r39 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r39.getTDClassMap(field_r46, data_r36, fi_r47));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.isCeldTypeTemplateRef(field_r46));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.isCeldTypeDefault(field_r46) && ctx_r39.tableType !== "home");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.isCeldTypeDefault(field_r46) && ctx_r39.tableType === "home");
} }
function BpsTableComponent_ng_template_10_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "i", 27);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_td_3_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r94); const data_r36 = i0.ɵɵnextContext().$implicit; const ctx_r92 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r92.emitBpsEvent(data_r36, "moreBtnClicked")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 28);
    i0.ɵɵlistener("bpsForcedUpdatedPosition", function BpsTableComponent_ng_template_10_td_3_Template_i_bpsForcedUpdatedPosition_2_listener($event) { i0.ɵɵrestoreView(_r94); const ctx_r95 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r95.changeIcon($event)); })("click", function BpsTableComponent_ng_template_10_td_3_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r94); const data_r36 = i0.ɵɵnextContext().$implicit; const ctx_r96 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r96.emitBpsEvent(data_r36, "deleteBtnClicked")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("bpsDropdownMenu", ctx_r40.moreMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bps-table-home-delete-icon-position-updated", ctx_r40.forceUpdate);
    i0.ɵɵproperty("bpsDropdownMenu", ctx_r40.deleteMenu);
} }
const _c0 = function (a0, a1) { return { data: a0, index: a1 }; };
function BpsTableComponent_ng_template_10_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr", 29)(2, "td");
    i0.ɵɵelementContainer(3, 30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r98 = i0.ɵɵnextContext();
    const data_r36 = ctx_r98.$implicit;
    const i_r37 = ctx_r98.index;
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzExpand", ctx_r41.mapOfExpandData[data_r36[ctx_r41.config.fieldId]]);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r41.getFields().length + 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r41.rowExpandTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, data_r36, i_r37));
} }
function BpsTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 19);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_Template_tr_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r100); const data_r36 = restoredCtx.$implicit; const ctx_r99 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r99.clickRow($event, data_r36)); });
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_template_10_td_2_Template, 4, 4, "td", 20);
    i0.ɵɵtemplate(3, BpsTableComponent_ng_template_10_td_3_Template, 3, 4, "td", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BpsTableComponent_ng_template_10_ng_container_4_Template, 4, 7, "ng-container", 11);
} if (rf & 2) {
    const data_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r5.isRowSelected(data_r36))("bps-table4-custom-row", data_r36.bpsTable4CustomRow)("bps-table-home-expanded-row", ctx_r5.mapOfExpandData[data_r36[ctx_r5.config.fieldId]])("bps-table-pair-row", ctx_r5.tableType === "report" && !(i_r37 % 2));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.expandable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.getFields());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.tableType === "home");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.expandable);
} }
function BpsTableComponent_ng_template_11_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 36);
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_11_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 37);
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_11_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 38);
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsTableComponent_ng_template_11_ng_template_4_ng_container_0_Template, 2, 0, "ng-container", 11);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_11_ng_template_4_ng_container_1_Template, 2, 0, "ng-container", 11);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_template_11_ng_template_4_ng_container_2_Template, 2, 0, "ng-container", 11);
} if (rf & 2) {
    const disabled_r104 = ctx.false;
    const ctx_r103 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r103.searchBoxHovered && !disabled_r104);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r103.searchBoxHovered && !disabled_r104);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", disabled_r104);
} }
function BpsTableComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "bps-input-group", 32);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_11_Template_bps_input_group_click_1_listener($event) { i0.ɵɵrestoreView(_r109); const _r101 = i0.ɵɵreference(3); const ctx_r108 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r108.focusInput($event, _r101)); })("mouseenter", function BpsTableComponent_ng_template_11_Template_bps_input_group_mouseenter_1_listener() { i0.ɵɵrestoreView(_r109); const ctx_r110 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r110.searchBoxHovered = true); })("mouseleave", function BpsTableComponent_ng_template_11_Template_bps_input_group_mouseleave_1_listener() { i0.ɵɵrestoreView(_r109); const ctx_r111 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r111.searchBoxHovered = false); });
    i0.ɵɵelementStart(2, "input", 33, 34);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_11_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r112 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r112.preventDefault($event)); })("keyup", function BpsTableComponent_ng_template_11_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r113 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r113.updateSearch($event.target.value)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(4, BpsTableComponent_ng_template_11_ng_template_4_Template, 3, 3, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r102 = i0.ɵɵreference(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("bpsPrefix", _r102);
} }
export var TemplateType = {
    Date: 'Date',
    Select: 'Select',
    Number: 'Number',
    String: 'String',
    Boolean: 'Boolean',
    Time: 'Time',
};
export var CeldType = {
    Default: 'Default',
    TemplateRef: 'TemplateRef'
};
// tslint:disable-next-line no-any
export class BpsTableComponent {
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId !== null && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    }
    sort(sort) {
        const field = this.getFields().filter(item => item.property === sort.key)[0];
        if (field.disabled) {
            return;
        }
        this.sortChange.emit({ sortName: sort.key, sortValue: sort.value });
    }
    emitOnEditEvent() {
        let editedEl = this._data.filter(el => el[this.config.fieldId] === this.editId);
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    }
    focusInput($event, input) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        input.focus();
    }
    endEditMode($event, index, data = null) {
        if ($event.key === ('Enter' || 'enter')) {
            this.emitOnEditEvent();
            this.editId = null;
            this.editProperty = null;
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
            case 'moreBtnClicked':
                this.moreBtnClicked.emit($event);
                break;
            case 'deleteBtnClicked':
                this.deleteBtnClicked.emit($event);
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
        this.editProperty = null;
        this.isExpanded = false;
        this.searchBoxHovered = false;
        this._searchSubject = new Subject();
        this.frontPagination = true;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = true;
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
        this.tableType = 'report';
        this.expandable = false;
        this.searchValueChange = new EventEmitter();
        this.moreBtnClicked = new EventEmitter();
        this.deleteBtnClicked = new EventEmitter();
        this.expandChange = new EventEmitter();
        this.forceUpdate = false;
        this.clicks = 0;
        this._setSearchSubscription();
    }
    _setSearchSubscription() {
        this._searchSubject.pipe(debounceTime(500)).subscribe((searchValue) => {
            this.searchValueChange.emit(searchValue);
        });
    }
    updateSearch(searchTextValue) {
        this._searchSubject.next(searchTextValue);
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
        const temp = [...this.checkboxCache];
        this.checkboxCache.length = 0;
        this._data.forEach(item => {
            const checkItem = temp.filter(e => e.data[this.config.fieldId] === item[this.config.fieldId]);
            this.checkboxCache.push({
                selected: checkItem.length ? checkItem[0].selected : false,
                data: item
            });
        });
    }
    clickRow(event, data) {
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
                if (this.expandable) {
                    const key = this.config.fieldId;
                    this.expandRow(data, !this.mapOfExpandData[data[key]]);
                    this.cdr.detectChanges();
                }
                event.preventDefault();
                event.stopImmediatePropagation();
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
        if (this.inlineEdit && !data.disabled) {
            this.editId = data[this.config.fieldId];
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    editRow(data, property) {
        if (!data.disabled) {
            this.editId = data[this.config.fieldId];
            this.editProperty = property;
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    selectRow(data, selectionOnly = false) {
        if (!data.disabled) {
            if (!selectionOnly) {
                this.onclickRow.emit(data);
            }
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = true;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
            this.cdr.detectChanges();
        }
    }
    expandRow(data, $event) {
        this.mapOfExpandData = {};
        this.mapOfExpandData[data[this.config.fieldId]] = $event;
        this.expandChange.emit(this.mapOfExpandData);
    }
    changeIcon($event) {
        this.forceUpdate = $event;
        this.cdr.detectChanges();
    }
    static { this.ɵfac = function BpsTableComponent_Factory(t) { return new (t || BpsTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTableComponent, selectors: [["bps-table"]], viewQuery: function BpsTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(BpsInputDirective, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostBindings: function BpsTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseup", function BpsTableComponent_mouseup_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { data: "data", frontPagination: "frontPagination", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", showPagination: "showPagination", paginationPosition: "paginationPosition", bordered: "bordered", widthConfig: "widthConfig", loading: "loading", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", scroll: "scroll", title: "title", footer: "footer", noResult: "noResult", pageSizeOptions: "pageSizeOptions", showQuickJumper: "showQuickJumper", showSizeChanger: "showSizeChanger", showTotal: "showTotal", hideOnSinglePage: "hideOnSinglePage", simple: "simple", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", inlineEdit: "inlineEdit", singleSort: "singleSort", config: "config", gridID: "gridID", filterPlaceholder: "filterPlaceholder", tableType: "tableType", expandable: "expandable", moreMenu: "moreMenu", deleteMenu: "deleteMenu", rowExpandTemplate: "rowExpandTemplate" }, outputs: { pageIndexChange: "pageIndexChange", currentPageDataChange: "currentPageDataChange", queryParamsChange: "queryParamsChange", pageSizeChange: "pageSizeChange", onclickRow: "onclickRow", ondblclickRow: "ondblclickRow", selectionChange: "selectionChange", sortChange: "sortChange", configChange: "configChange", onedit: "onedit", searchValueChange: "searchValueChange", moreBtnClicked: "moreBtnClicked", deleteBtnClicked: "deleteBtnClicked", expandChange: "expandChange" }, exportAs: ["bpsTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 13, vars: 35, consts: [[3, "id"], ["bps-input", "", "class", "bps-table-glass-filter", 3, "placeholder", "click", "keyup", 4, "ngIf"], [1, "bps-table", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzShowPagination", "nzPaginationPosition", "nzBordered", "nzWidthConfig", "nzLoading", "nzLoadingIndicator", "nzLoadingDelay", "nzScroll", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzShowQuickJumper", "nzShowSizeChanger", "nzShowTotal", "nzHideOnSinglePage", "nzSimple", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzPageIndexChange", "nzCurrentPageDataChange", "nzQueryParams", "nzPageSizeChange"], ["gridComponent", ""], ["nzShowExpand", "", 3, "nzWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzWidth", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["customFilter", ""], ["bps-input", "", 1, "bps-table-glass-filter", 3, "placeholder", "click", "keyup"], ["nzShowExpand", "", 3, "nzWidth"], [4, "ngIf"], ["nzCustomFilter", "", 3, "ngClass", "nzSortOrder", "nzShowSort", "nzWidth", "nzSortOrderChange"], [4, "ngIf", "ngIfElse"], ["cellValue", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"], ["nzCustomFilter", "", 3, "ngClass", "nzWidth"], [3, "nzWidth"], [3, "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["nzShowExpand", "", 2, "border-bottom", "none !important", 3, "nzExpand", "nzExpandChange"], [3, "ngClass"], ["editTpl", ""], [1, "bps-table-td-content"], [1, "bps-report-table-menu-pencil", 3, "click"], ["bps-input", "", 1, "bps-editable-cell-input", 3, "ngModel", "ngModelChange", "click", "keyup"], ["bps-dropdown", "", "bpsTrigger", "click", "bpsPlacement", "rightTop", 1, "bps-table-home-more-icon", 3, "bpsDropdownMenu", "click"], ["bps-dropdown", "", "bpsTrigger", "click", "bpsPlacement", "rightTop", 1, "bps-table-home-delete-icon", 3, "bpsDropdownMenu", "bpsForcedUpdatedPosition", "click"], [3, "nzExpand"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "bps-table-filter-icon"], [1, "bps-table-custom-filter", 3, "bpsPrefix", "click", "mouseenter", "mouseleave"], ["bps-input", "", "nz-th-extra", "", "nzTableFilter", "", 1, "bps-table-filter-custom-input", 3, "click", "keyup"], ["searchInput", ""], ["searchPrefixIcon", ""], ["src", "/assets/bps-icons/sps_search_icon_home_enabled.svg", 1, "bps-custom-filter-img"], ["src", "/assets/bps-icons/sps_search_icon_home_hover_activated.svg", 1, "bps-custom-filter-img"], ["src", "/assets/bps-icons/sps_search_icon_home_disabled.svg", 1, "bps-custom-filter-img"]], template: function BpsTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, BpsTableComponent_input_1_Template, 1, 1, "input", 1);
            i0.ɵɵelementStart(2, "nz-table", 2, 3);
            i0.ɵɵlistener("nzPageIndexChange", function BpsTableComponent_Template_nz_table_nzPageIndexChange_2_listener($event) { return ctx.emitBpsEvent($event, "pageIndex"); })("nzCurrentPageDataChange", function BpsTableComponent_Template_nz_table_nzCurrentPageDataChange_2_listener($event) { return ctx.emitBpsEvent($event, "currentPageData"); })("nzQueryParams", function BpsTableComponent_Template_nz_table_nzQueryParams_2_listener($event) { return ctx.emitBpsEvent($event, "queryParams"); })("nzPageSizeChange", function BpsTableComponent_Template_nz_table_nzPageSizeChange_2_listener($event) { return ctx.emitBpsEvent($event, "pageSize"); });
            i0.ɵɵelementStart(4, "thead")(5, "tr");
            i0.ɵɵtemplate(6, BpsTableComponent_th_6_Template, 1, 1, "th", 4);
            i0.ɵɵtemplate(7, BpsTableComponent_ng_container_7_Template, 3, 2, "ng-container", 5);
            i0.ɵɵtemplate(8, BpsTableComponent_th_8_Template, 1, 1, "th", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "tbody");
            i0.ɵɵtemplate(10, BpsTableComponent_ng_template_10_Template, 5, 12, "ng-template", 7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(11, BpsTableComponent_ng_template_11_Template, 6, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(3);
            i0.ɵɵclassMapInterpolate1("bps-table-", ctx.tableType, "");
            i0.ɵɵpropertyInterpolate("id", ctx.gridID);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.tableType === "glass_profile");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzData", ctx._data)("nzFrontPagination", ctx.frontPagination)("nzTotal", ctx.total)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzShowPagination", ctx.showPagination)("nzPaginationPosition", ctx.paginationPosition)("nzBordered", ctx.bordered)("nzWidthConfig", ctx.widthConfig)("nzLoading", ctx.loading)("nzLoadingIndicator", ctx.loadingIndicator)("nzLoadingDelay", ctx.loadingDelay)("nzScroll", ctx.scroll)("nzTitle", ctx.title)("nzFooter", ctx.footer)("nzNoResult", ctx.noResult)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowQuickJumper", ctx.showQuickJumper)("nzShowSizeChanger", ctx.showSizeChanger)("nzShowTotal", ctx.showTotal)("nzHideOnSinglePage", ctx.hideOnSinglePage)("nzSimple", ctx.simple)("nzVirtualItemSize", ctx.virtualItemSize)("nzVirtualMaxBufferPx", ctx.virtualMaxBufferPx)("nzVirtualMinBufferPx", ctx.virtualMinBufferPx)("nzVirtualForTrackBy", ctx.virtualForTrackBy);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.expandable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.getFields());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.tableType === "home");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r1.data);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NzTableComponent, i4.NzThAddOnComponent, i4.NzTableCellDirective, i4.NzThMeasureDirective, i4.NzTdAddOnComponent, i4.NzTheadComponent, i4.NzTbodyComponent, i4.NzTrDirective, i4.NzTrExpandDirective, i4.NzTableFixedRowComponent, i5.BpsDropDownDirective, i6.BpsInputGroupComponent, i7.BpsInputDirective], styles: [".bps-table .ant-table-thead>tr>th,   .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}  .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}  .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}  .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}  .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}  .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}  .bps-table .ant-table-thead>tr>th{padding:10px;border-bottom:none!important;border-radius:0!important}  .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}  .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled){background:#313b3f!important}  .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled) .bps-table-td-content{width:calc(100% - 18px)!important}  .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}  .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}  .bps-table .ant-table-body{background-color:#262626!important}  .bps-table-home .bps-table .ant-table-body{margin-top:2px!important}  .bps-table-report .bps-table .ant-table-body{margin-top:3px!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-track,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-track,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-corner,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-corner,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}  .bps-table-home .bps-table .ant-table-header.ant-table-hide-scrollbar,   .bps-table-report .bps-table .ant-table-header.ant-table-hide-scrollbar,   .bps-table-glass_profile .bps-table .ant-table-header.ant-table-hide-scrollbar{background-color:#262626!important;margin-bottom:unset!important;overflow-x:hidden!important;border-bottom:none!important}  .bps-table-report .bps-table .ant-table-header{box-shadow:-6px 3px 8px #000!important;z-index:2!important;position:relative!important;padding-bottom:0!important;overflow-y:hidden!important;overflow-x:hidden!important;margin-right:15px!important;border-top:1px solid #363636!important}  .bps-table-report .ant-table table{padding-right:6px}  .bps-table .ant-table{background-color:transparent}  .bps-table-glass_profile .bps-table .ant-table-header{box-shadow:-1px 4px 5px #000!important;z-index:2!important;position:relative!important}  .bps-table-home .bps-table .ant-table-header{box-shadow:-15px 2px 8px #000!important;z-index:2!important;position:relative!important}  .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column[_ngcontent-%COMP%]{padding-left:20px!important;position:relative}.bps-editable-cell-input[_ngcontent-%COMP%]{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding[_ngcontent-%COMP%]{padding:0!important}  .bps-table .ant-table-expand-icon-th,   .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}  .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}  .bps-table .ant-table-row-expand-icon-expanded:after,   .bps-table-home .bps-table .ant-table-tbody>tr .ant-table-row-expand-icon-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg);transform:rotate(0);top:-10px;background-color:transparent}  .bps-table .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg);top:-10px;background:transparent}  .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel),   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}  .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-selected-row) .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}  .bps-table .anticon svg{display:none!important}  .anticon.ant-table-column-sorter-up.anticon-caret-up:not(.active)+.anticon.ant-table-column-sorter-down.anticon-caret-down:not(.active){content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}  .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:-2px}  .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}  .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,   .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after,   .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}  .bps-table .ant-table-measure-now{display:none}  .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}  .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}  .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}  .bps-table .ant-table-column-title{position:unset;z-index:1}  .bps-table .ant-table-header{overflow:hidden!important}.bps-table-filter-icon[_ngcontent-%COMP%]{position:absolute;top:10px;right:55px;width:270px;transition:all .3s;display:inline-block}  .bps-table .bps-table-custom-filter .ant-input-prefix{padding:5px;background-color:#3d3d3d;border-radius:100px;left:1.4px!important;top:calc(50% + .8px);left:12.2px!important;position:absolute;z-index:3;top:5.2px}.bps-custom-filter-img[_ngcontent-%COMP%]{background:#3d3d3d;transition:all .3s}.bps-table-filter-custom-input[_ngcontent-%COMP%]{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input[_ngcontent-%COMP%]:hover{border:solid 1px #535353!important}.bps-table-home-more-icon[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_right.svg);position:relative;left:1px}.bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_bottom.svg)}.bps-table-home-more-icon[_ngcontent-%COMP%]{margin-right:11px}.bps-table-home-delete-icon[_ngcontent-%COMP%]{padding:4px 9px;position:relative;background-color:#363636;border-radius:100px}.bps-table-home-more-icon[_ngcontent-%COMP%]{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-more-icon[_ngcontent-%COMP%]:hover, .bps-table-home-delete-icon[_ngcontent-%COMP%]:hover{cursor:pointer}  .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon:after,   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}  .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon:after,   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_right.svg)}  .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after,   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_bottom.svg)}  .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){font-size:11px!important}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{padding:7px!important}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer}  .bps-table .ant-table-column-sorters{display:inline-flex}  .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important;top:0;position:relative}  .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}  .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter[_ngcontent-%COMP%]{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter[_ngcontent-%COMP%]::placeholder{color:#666;font-size:10px}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #445c67 inset,0 1px #445c67 inset,0 -1px #445c67 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset,-1px 0 #445c67 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:all .3s}.bps-td-disabled[_ngcontent-%COMP%]{cursor:not-allowed}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #00a2d1 inset,0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset,-1px 0 #00a2d1 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td{background-color:#253d47!important}  .ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar{border:none!important}  .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-expanded-row>td{padding:0!important;border-bottom:none!important}  .bps-table-home .bps-table .ant-table-tbody>tr.bps-table-home-expanded-row>td{border-bottom:none!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}.bps-editable-cell-input-home-table[_ngcontent-%COMP%]{padding-left:4px!important;border-radius:4px!important;width:95%!important}.bps-report-table-menu-pencil[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:5px;right:5px}  .bps-table-report .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-report-table-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg);transform:scale(.95)}td[_ngcontent-%COMP%]:not(.bps-td-disabled)   .bps-report-table-menu-pencil[_ngcontent-%COMP%]:hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}"], changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "simple", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualMinBufferPx", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "inlineEdit", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "expandable", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTableComponent, [{
        type: Component,
        args: [{ selector: 'bps-table', exportAs: 'bpsTable', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div id=\"{{gridID}}\"\r\n     class=\"bps-table-{{tableType}}\">\r\n  <input bps-input\r\n         *ngIf=\"tableType === 'glass_profile'\"\r\n         class=\"bps-table-glass-filter\"\r\n         [placeholder]=\"filterPlaceholder\"\r\n         (click)=\"preventDefault($event)\"\r\n         (keyup)=\"updateSearch($event.target.value)\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead>\r\n      <tr>\r\n\r\n        <th *ngIf=\"expandable\"\r\n            [nzWidth]=\"'40px'\"\r\n            nzShowExpand>\r\n        </th>\r\n\r\n        <ng-container *ngFor=\"let field of getFields(); index as th\">\r\n          <ng-container *ngIf=\"field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                [(nzSortOrder)]=\"field.sortOrder\"\r\n\r\n                [nzShowSort]=\"field.showSort\"\r\n                (nzSortOrderChange)=\"sort({key: field.property, value: $event})\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"!field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n        </ng-container>     \r\n\r\n        <th *ngIf=\"tableType === 'home'\"\r\n            [nzWidth]=\"'70px'\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n        <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n            [class.bps-table4-custom-row]=\"data.bpsTable4CustomRow\"\r\n            [class.bps-table-home-expanded-row]=\"mapOfExpandData[data[config.fieldId]]\"\r\n            (click)=\"clickRow($event, data)\"\r\n            [class.bps-table-pair-row]=\"tableType === 'report' && !(i % 2)\">\r\n\r\n          <ng-container *ngIf=\"expandable\">\r\n            <td nzShowExpand\r\n                style=\"border-bottom: none !important\"\r\n                (nzExpandChange)=\"expandRow(data, $event)\"\r\n                [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\"></td>\r\n          </ng-container>\r\n\r\n          <td *ngFor=\"let field of getFields(); index as fi\"\r\n              [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType !== 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div class=\"bps-table-td-content\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n                <ng-container *ngIf=\"!fi\">\r\n                  <span class=\"bps-report-table-menu-pencil\" (click)=\"startEdit(data, $event)\"></span>\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType === 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId] || editProperty !== field.property\">\r\n                <div>\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"editId === data[config.fieldId] && editProperty === field.property\">\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       [class.bps-editable-cell-input-home-table]=\"tableType === 'home'\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-container>\r\n\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td *ngIf=\"tableType === 'home'\">\r\n            <i class=\"bps-table-home-more-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'moreBtnClicked')\"\r\n               [bpsDropdownMenu]=\"moreMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n            <i class=\"bps-table-home-delete-icon\"\r\n               [class.bps-table-home-delete-icon-position-updated]=\"forceUpdate\"\r\n               bps-dropdown\r\n               (bpsForcedUpdatedPosition)=\"changeIcon($event)\"\r\n               (click)=\"emitBpsEvent(data, 'deleteBtnClicked')\"\r\n               [bpsDropdownMenu]=\"deleteMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <ng-container *ngIf=\"expandable\">\r\n          <tr [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\">\r\n            <td [attr.colspan]=\"getFields().length + 2\">\r\n              <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{data: data, index: i}\"></ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #customFilter>\r\n  <div class=\"bps-table-filter-icon\">\r\n    <bps-input-group [bpsPrefix]=\"searchPrefixIcon\"\r\n                     (click)=\"focusInput($event, searchInput)\"\r\n                     (mouseenter)=\"searchBoxHovered = true;\"\r\n                     (mouseleave)=\"searchBoxHovered = false;\"\r\n                     class=\"bps-table-custom-filter\">\r\n      <input bps-input\r\n             #searchInput\r\n             nz-th-extra\r\n             class=\"bps-table-filter-custom-input\"\r\n             (click)=\"preventDefault($event)\"\r\n             (keyup)=\"updateSearch($event.target.value)\"\r\n             nzTableFilter>\r\n    </bps-input-group>\r\n  </div>\r\n  \r\n  <ng-template #searchPrefixIcon let-disabled=\"false\">\r\n    <ng-container *ngIf=\"!searchBoxHovered  && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_enabled.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"searchBoxHovered && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_hover_activated.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_disabled.svg\" />\r\n    </ng-container>\r\n  </ng-template>\r\n</ng-template>\r\n", styles: ["::ng-deep .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}::ng-deep .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:10px;border-bottom:none!important;border-radius:0!important}::ng-deep .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled) .bps-table-td-content{width:calc(100% - 18px)!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body{margin-top:2px!important}::ng-deep .bps-table-report .bps-table .ant-table-body{margin-top:3px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-header.ant-table-hide-scrollbar{background-color:#262626!important;margin-bottom:unset!important;overflow-x:hidden!important;border-bottom:none!important}::ng-deep .bps-table-report .bps-table .ant-table-header{box-shadow:-6px 3px 8px #000!important;z-index:2!important;position:relative!important;padding-bottom:0!important;overflow-y:hidden!important;overflow-x:hidden!important;margin-right:15px!important;border-top:1px solid #363636!important}::ng-deep .bps-table-report .ant-table table{padding-right:6px}::ng-deep .bps-table .ant-table{background-color:transparent}::ng-deep .bps-table-glass_profile .bps-table .ant-table-header{box-shadow:-1px 4px 5px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table-home .bps-table .ant-table-header{box-shadow:-15px 2px 8px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column{padding-left:20px!important;position:relative}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table .ant-table-expand-icon-th,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table .ant-table-row-expand-icon-expanded:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr .ant-table-row-expand-icon-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg);transform:rotate(0);top:-10px;background-color:transparent}::ng-deep .bps-table .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg);top:-10px;background:transparent}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-selected-row) .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}::ng-deep .bps-table .anticon svg{display:none!important}::ng-deep .anticon.ant-table-column-sorter-up.anticon-caret-up:not(.active)+.anticon.ant-table-column-sorter-down.anticon-caret-down:not(.active){content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:-2px}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .ant-table-measure-now{display:none}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}::ng-deep .bps-table .ant-table-column-title{position:unset;z-index:1}::ng-deep .bps-table .ant-table-header{overflow:hidden!important}.bps-table-filter-icon{position:absolute;top:10px;right:55px;width:270px;transition:all .3s;display:inline-block}::ng-deep .bps-table .bps-table-custom-filter .ant-input-prefix{padding:5px;background-color:#3d3d3d;border-radius:100px;left:1.4px!important;top:calc(50% + .8px);left:12.2px!important;position:absolute;z-index:3;top:5.2px}.bps-custom-filter-img{background:#3d3d3d;transition:all .3s}.bps-table-filter-custom-input{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input:hover{border:solid 1px #535353!important}.bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_right.svg);position:relative;left:1px}.bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_bottom.svg)}.bps-table-home-more-icon{margin-right:11px}.bps-table-home-delete-icon{padding:4px 9px;position:relative;background-color:#363636;border-radius:100px}.bps-table-home-more-icon{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-more-icon:hover,.bps-table-home-delete-icon:hover{cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_right.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_bottom.svg)}::ng-deep .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){font-size:11px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{padding:7px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer}::ng-deep .bps-table .ant-table-column-sorters{display:inline-flex}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important;top:0;position:relative}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #445c67 inset,0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset,-1px 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:all .3s}.bps-td-disabled{cursor:not-allowed}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #00a2d1 inset,0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset,-1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td{background-color:#253d47!important}::ng-deep .ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar{border:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-expanded-row>td{padding:0!important;border-bottom:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.bps-table-home-expanded-row>td{border-bottom:none!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}.bps-editable-cell-input-home-table{padding-left:4px!important;border-radius:4px!important;width:95%!important}.bps-report-table-menu-pencil:after{content:\"\";position:absolute;top:5px;right:5px}::ng-deep .bps-table-report .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-report-table-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg);transform:scale(.95)}td:not(.bps-td-disabled) .bps-report-table-menu-pencil:hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}\n"] }]
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
        }], filterPlaceholder: [{
            type: Input
        }], onedit: [{
            type: Output
        }], tableType: [{
            type: Input
        }], expandable: [{
            type: Input
        }], searchValueChange: [{
            type: Output
        }], moreBtnClicked: [{
            type: Output
        }], deleteBtnClicked: [{
            type: Output
        }], expandChange: [{
            type: Output
        }], moreMenu: [{
            type: Input
        }], deleteMenu: [{
            type: Input
        }], rowExpandTemplate: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: [BpsInputDirective, { static: false, read: ElementRef }]
        }], handleClick: [{
            type: HostListener,
            args: ['window:mouseup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRhYmxlL2Jwcy10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10YWJsZS9icHMtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04sU0FBUyxFQUlULFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQVUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztJQ3RCbEUsZ0NBS21EO0lBRDVDLHFLQUFTLGVBQUEsNkJBQXNCLENBQUEsSUFBQyx5SkFDdkIsZUFBQSx5Q0FBaUMsQ0FBQSxJQURWO0lBSnZDLGlCQUttRDs7O0lBRjVDLHNEQUFpQzs7O0lBc0NsQyx5QkFHSzs7SUFGRCxnQ0FBa0I7OztJQWVkLHdCQUFxRzs7O0lBRHZHLDZCQUFxRDtJQUNuRCxrSUFBcUc7SUFDdkcsMEJBQWU7OztJQURFLGVBQXNDO0lBQXRDLHlEQUFzQyx1REFBQTs7O0lBRS9CLFlBQWlCOzs7SUFBakIsdUNBQWlCOzs7SUFFekMsNkJBQTZDO0lBQzNDLDRCQUErRDtJQUNqRSwwQkFB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LE1BQU07WUFDRyxxQkFBcUI7a0JBQTlCLE1BQU07WUFDRyxpQkFBaUI7a0JBQTFCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxlQUFlO2tCQUF4QixNQUFNO1lBR0UsVUFBVTtrQkFBbEIsS0FBSztZQUNJLFVBQVU7a0JBQW5CLE1BQU07WUFHRSxNQUFNO2tCQUFkLEtBQUs7WUFDSSxZQUFZO2tCQUFyQixNQUFNO1lBQ0UsTUFBTTtrQkFBZCxLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksTUFBTTtrQkFBZixNQUFNO1lBQ0UsU0FBUztrQkFBakIsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ0ksaUJBQWlCO2tCQUExQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLGdCQUFnQjtrQkFBekIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFDRSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUU2RCxZQUFZO2tCQUE5RSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBSWpFLFdBQVc7a0JBRFYsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIGNvbmZpZyB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBUYWJsZUNvbmZpZywgRmllbGQgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1pbnB1dC9icHMtaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCB0eXBlIEJwc1RhYmxlVHlwZSA9ICdyZXBvcnQnIHwgJ2hvbWUnIHwgJ2dsYXNzX3Byb2ZpbGUnO1xyXG5cclxuZXhwb3J0IHZhciBUZW1wbGF0ZVR5cGUgPSB7XHJcbiAgRGF0ZTogJ0RhdGUnLFxyXG4gIFNlbGVjdDogJ1NlbGVjdCcsXHJcbiAgTnVtYmVyOiAnTnVtYmVyJyxcclxuICBTdHJpbmc6ICdTdHJpbmcnLFxyXG4gIEJvb2xlYW46ICdCb29sZWFuJyxcclxuICBUaW1lOiAnVGltZScsXHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgQ2VsZFR5cGUgPSB7XHJcbiAgRGVmYXVsdDogJ0RlZmF1bHQnLFxyXG4gIFRlbXBsYXRlUmVmOiAnVGVtcGxhdGVSZWYnXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdicHMtdGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnYnBzVGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy10YWJsZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5leHBvcnQgY2xhc3MgQnBzVGFibGVDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBsb2NhbGU6IGFueSA9IHt9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGNoZWNrYm94Q2FjaGU6IENoZWNrYm94U2VsZWN0W10gPSBbXTtcclxuICBtYXBPZkV4cGFuZERhdGE6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbiAgX2RhdGEgPSBbXTtcclxuICBlZGl0SWQgPSBudWxsO1xyXG4gIGVkaXRQcm9wZXJ0eSA9IG51bGw7XHJcbiAgaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gIHNlYXJjaEJveEhvdmVyZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zZWFyY2hTdWJqZWN0OiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiBUYWJsZSBBUEkgKi8gXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy51cGRhdGVDaGVja2JveENhY2hlKCk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmcm9udFBhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRvdGFsID0gMDtcclxuICBASW5wdXQoKSBwYWdlSW5kZXggPSAxO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwYWdpbmF0aW9uUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCcgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdEZWxheSA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTBdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyOyByYW5nZTogW251bWJlciwgbnVtYmVyXSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaW1wbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XHJcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwYWdlSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY3VycmVudFBhZ2VEYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHF1ZXJ5UGFyYW1zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHBhZ2VTaXplQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25kYmxjbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbi8qIFRoZWFkIEFQSSAqL1xyXG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgLyogQlBTIEFQSSAqLyBcclxuICBASW5wdXQoKSBjb25maWc6IFRhYmxlQ29uZmlnO1xyXG4gIEBPdXRwdXQoKSBjb25maWdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJsZUNvbmZpZz4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPigpO1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHRhYmxlVHlwZTogQnBzVGFibGVUeXBlID0gJ3JlcG9ydCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc2VhcmNoVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIG1vcmVCdG5DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBkZWxldGVCdG5DbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBleHBhbmRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgbW9yZU1lbnU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgZGVsZXRlTWVudTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKSByb3dFeHBhbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZChCcHNJbnB1dERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBmb3JjZVVwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZWRpdElkICE9PSBudWxsICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuZW1pdE9uRWRpdEV2ZW50KCk7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNvcnQoc29ydDogeyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XHJcbiAgICBjb25zdCBmaWVsZDogYW55ID0gdGhpcy5nZXRGaWVsZHMoKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnByb3BlcnR5ID09PSBzb3J0LmtleSlbMF07XHJcbiAgICBpZiAoZmllbGQuZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoeyBzb3J0TmFtZTogc29ydC5rZXksIHNvcnRWYWx1ZTogc29ydC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGVtaXRPbkVkaXRFdmVudCgpIHtcclxuICAgIGxldCBlZGl0ZWRFbCA9IHRoaXMuX2RhdGEuZmlsdGVyKGVsID0+IGVsW3RoaXMuY29uZmlnLmZpZWxkSWRdID09PSB0aGlzLmVkaXRJZCk7XHJcbiAgICBpZiAoZWRpdGVkRWwubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMub25lZGl0LmVtaXQoZWRpdGVkRWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNJbnB1dCgkZXZlbnQ6IEV2ZW50LCBpbnB1dDogYW55KSB7XHJcblxyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZW5kRWRpdE1vZGUoJGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsKSB7XHJcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gKCdFbnRlcicgfHwgJ2VudGVyJykpIHtcclxuICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmVkaXRQcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZW1pdEJwc0V2ZW50KCRldmVudCwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAncGFnZUluZGV4JzpcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1cnJlbnRQYWdlRGF0YSc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdxdWVyeVBhcmFtcyc6XHJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtc0NoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BhZ2VTaXplJzpcclxuICAgICAgICB0aGlzLnBhZ2VTaXplQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbW9yZUJ0bkNsaWNrZWQnOlxyXG4gICAgICAgIHRoaXMubW9yZUJ0bkNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkZWxldGVCdG5DbGlja2VkJzpcclxuICAgICAgICB0aGlzLmRlbGV0ZUJ0bkNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuX3NldFNlYXJjaFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0U2VhcmNoU3Vic2NyaXB0aW9uKCkge1xyXG4gICAgdGhpcy5fc2VhcmNoU3ViamVjdC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKVxyXG4gICAgKS5zdWJzY3JpYmUoKHNlYXJjaFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHNlYXJjaFZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVNlYXJjaChzZWFyY2hUZXh0VmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoU3ViamVjdC5uZXh0KHNlYXJjaFRleHRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX3NlYXJjaFN1YmplY3QudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGdldFREQ2xhc3NNYXAoZmllbGQ6IEZpZWxkLCBkYXRhLCBmaSA9IDk5OTkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmZpZWxkLm5nQ2xhc3MsXHJcbiAgICAgIFsnYnBzLXRkLWRpc2FibGVkJ106IGRhdGEuZGlzYWJsZWQsXHJcbiAgICAgIFsnYnBzLXRkLW5vLXBhZGRpbmcnXTogZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gdGhpcy5lZGl0SWQsXHJcbiAgICAgIFsnYnBzLWZzdC1jb2x1bW4nXTogIWZpLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgcmV0dXJuIGRhdGFTZWxlY3RlZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLnRoaXMuY2hlY2tib3hDYWNoZV07XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tJdGVtID0gdGVtcC5maWx0ZXIoZSA9PiBlLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrSXRlbS5sZW5ndGggPyBjaGVja0l0ZW1bMF0uc2VsZWN0ZWQgOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja3MgPSAwO1xyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kUm93KGRhdGEsICF0aGlzLm1hcE9mRXhwYW5kRGF0YVtkYXRhW2tleV1dKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNsaWNrcyA9PT0gMil7XHJcbiAgICAgICAgdGhpcy5vbmRibGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChkYXRhOiBhbnksIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0ICYmICFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlZGl0Um93KGRhdGEsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAoIWRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdO1xyXG4gICAgICB0aGlzLmVkaXRQcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhkYXRhOiBhbnksIHNlbGVjdGlvbk9ubHkgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICghc2VsZWN0aW9uT25seSkge1xyXG4gICAgICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIHtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbiAgZXhwYW5kUm93KGRhdGEsICRldmVudCkge1xyXG4gICAgdGhpcy5tYXBPZkV4cGFuZERhdGEgPSB7fTtcclxuICAgIHRoaXMubWFwT2ZFeHBhbmREYXRhW2RhdGFbdGhpcy5jb25maWcuZmllbGRJZF1dID0gJGV2ZW50O1xyXG4gICAgdGhpcy5leHBhbmRDaGFuZ2UuZW1pdCh0aGlzLm1hcE9mRXhwYW5kRGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJY29uKCRldmVudCkge1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICRldmVudDtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94U2VsZWN0IHtcclxuICBkYXRhOiBhbnk7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiPGRpdiBpZD1cInt7Z3JpZElEfX1cIlxyXG4gICAgIGNsYXNzPVwiYnBzLXRhYmxlLXt7dGFibGVUeXBlfX1cIj5cclxuICA8aW5wdXQgYnBzLWlucHV0XHJcbiAgICAgICAgICpuZ0lmPVwidGFibGVUeXBlID09PSAnZ2xhc3NfcHJvZmlsZSdcIlxyXG4gICAgICAgICBjbGFzcz1cImJwcy10YWJsZS1nbGFzcy1maWx0ZXJcIlxyXG4gICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmlsdGVyUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgIChrZXl1cCk9XCJ1cGRhdGVTZWFyY2goJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuICA8bnotdGFibGUgI2dyaWRDb21wb25lbnRcclxuICAgICAgICAgICAgY2xhc3M9XCJicHMtdGFibGVcIlxyXG4gICAgICAgICAgICBbbnpEYXRhXT1cIl9kYXRhXCJcclxuICAgICAgICAgICAgW256RnJvbnRQYWdpbmF0aW9uXT1cImZyb250UGFnaW5hdGlvblwiXHJcbiAgICAgICAgICAgIFtuelRvdGFsXT1cInRvdGFsXCJcclxuICAgICAgICAgICAgW256UGFnZUluZGV4XT1cInBhZ2VJbmRleFwiXHJcbiAgICAgICAgICAgIFtuelBhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgICAgICAgICAgW256U2hvd1BhZ2luYXRpb25dPVwic2hvd1BhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICBbbnpQYWdpbmF0aW9uUG9zaXRpb25dPVwicGFnaW5hdGlvblBvc2l0aW9uXCJcclxuICAgICAgICAgICAgW256Qm9yZGVyZWRdPVwiYm9yZGVyZWRcIlxyXG4gICAgICAgICAgICBbbnpXaWR0aENvbmZpZ109XCJ3aWR0aENvbmZpZ1wiXHJcbiAgICAgICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgIFtuekxvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXHJcbiAgICAgICAgICAgIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIlxyXG4gICAgICAgICAgICBbbnpTY3JvbGxdPVwic2Nyb2xsXCJcclxuICAgICAgICAgICAgW256VGl0bGVdPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBbbnpGb290ZXJdPVwiZm9vdGVyXCJcclxuICAgICAgICAgICAgW256Tm9SZXN1bHRdPVwibm9SZXN1bHRcIlxyXG4gICAgICAgICAgICBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgICAgICAgICAgW256U2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXHJcbiAgICAgICAgICAgIFtuelNob3dTaXplQ2hhbmdlcl09XCJzaG93U2l6ZUNoYW5nZXJcIlxyXG4gICAgICAgICAgICBbbnpTaG93VG90YWxdPVwic2hvd1RvdGFsXCJcclxuICAgICAgICAgICAgW256SGlkZU9uU2luZ2xlUGFnZV09XCJoaWRlT25TaW5nbGVQYWdlXCJcclxuICAgICAgICAgICAgW256U2ltcGxlXT1cInNpbXBsZVwiXHJcbiAgICAgICAgICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIlxyXG4gICAgICAgICAgICBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgICAgICAgICAgW256VmlydHVhbE1pbkJ1ZmZlclB4XT1cInZpcnR1YWxNaW5CdWZmZXJQeFwiXHJcbiAgICAgICAgICAgIFtuelZpcnR1YWxGb3JUcmFja0J5XT1cInZpcnR1YWxGb3JUcmFja0J5XCJcclxuICAgICAgICAgICAgKG56UGFnZUluZGV4Q2hhbmdlKT1cImVtaXRCcHNFdmVudCgkZXZlbnQsICdwYWdlSW5kZXgnKVwiXHJcbiAgICAgICAgICAgIChuekN1cnJlbnRQYWdlRGF0YUNoYW5nZSk9XCJlbWl0QnBzRXZlbnQoJGV2ZW50LCAnY3VycmVudFBhZ2VEYXRhJylcIlxyXG4gICAgICAgICAgICAobnpRdWVyeVBhcmFtcyk9XCJlbWl0QnBzRXZlbnQoJGV2ZW50LCAncXVlcnlQYXJhbXMnKVwiXHJcbiAgICAgICAgICAgIChuelBhZ2VTaXplQ2hhbmdlKT1cImVtaXRCcHNFdmVudCgkZXZlbnQsICdwYWdlU2l6ZScpXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwiZXhwYW5kYWJsZVwiXHJcbiAgICAgICAgICAgIFtueldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgIG56U2hvd0V4cGFuZD5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgdGhcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5zaG93U29ydFwiPlxyXG4gICAgICAgICAgICA8dGggW25nQ2xhc3NdPVwiZmllbGQubmdDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYnBzLWNvbHVtbi1kaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBbKG56U29ydE9yZGVyKV09XCJmaWVsZC5zb3J0T3JkZXJcIlxyXG5cclxuICAgICAgICAgICAgICAgIFtuelNob3dTb3J0XT1cImZpZWxkLnNob3dTb3J0XCJcclxuICAgICAgICAgICAgICAgIChuelNvcnRPcmRlckNoYW5nZSk9XCJzb3J0KHtrZXk6IGZpZWxkLnByb3BlcnR5LCB2YWx1ZTogJGV2ZW50fSlcIlxyXG4gICAgICAgICAgICAgICAgbnpDdXN0b21GaWx0ZXJcclxuICAgICAgICAgICAgICAgIFtueldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnRlbXBsYXRlOyBlbHNlIGNlbGxWYWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpZWxkLnRlbXBsYXRlLnJlZjsgY29udGV4dDogZmllbGQudGVtcGxhdGUuY29udGV4dFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2VsbFZhbHVlPnt7ZmllbGQuZGlzcGxheX19PC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnNob3dDdXN0b21GaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tRmlsdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnNob3dTb3J0XCI+XHJcbiAgICAgICAgICAgIDx0aCBbbmdDbGFzc109XCJmaWVsZC5uZ0NsYXNzXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5icHMtY29sdW1uLWRpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIG56Q3VzdG9tRmlsdGVyXHJcbiAgICAgICAgICAgICAgICBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50ZW1wbGF0ZTsgZWxzZSBjZWxsVmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWVsZC50ZW1wbGF0ZS5yZWY7IGNvbnRleHQ6IGZpZWxkLnRlbXBsYXRlLmNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NlbGxWYWx1ZT57e2ZpZWxkLmRpc3BsYXl9fTwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5zaG93Q3VzdG9tRmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUZpbHRlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+ICAgICBcclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwidGFibGVUeXBlID09PSAnaG9tZSdcIlxyXG4gICAgICAgICAgICBbbnpXaWR0aF09XCInNzBweCdcIj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuXHJcbiAgICA8dGJvZHk+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtZGF0YSBbbmdGb3JPZl09XCJncmlkQ29tcG9uZW50LmRhdGFcIiBsZXQtaT1cImluZGV4XCI+XHJcbiAgICAgICAgPHRyIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImlzUm93U2VsZWN0ZWQoZGF0YSlcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYnBzLXRhYmxlNC1jdXN0b20tcm93XT1cImRhdGEuYnBzVGFibGU0Q3VzdG9tUm93XCJcclxuICAgICAgICAgICAgW2NsYXNzLmJwcy10YWJsZS1ob21lLWV4cGFuZGVkLXJvd109XCJtYXBPZkV4cGFuZERhdGFbZGF0YVtjb25maWcuZmllbGRJZF1dXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrUm93KCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYnBzLXRhYmxlLXBhaXItcm93XT1cInRhYmxlVHlwZSA9PT0gJ3JlcG9ydCcgJiYgIShpICUgMilcIj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGQgbnpTaG93RXhwYW5kXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiZXhwYW5kUm93KGRhdGEsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgW256RXhwYW5kXT1cIm1hcE9mRXhwYW5kRGF0YVtkYXRhW2NvbmZpZy5maWVsZElkXV1cIj48L3RkPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgZmlcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldFREQ2xhc3NNYXAoZmllbGQsIGRhdGEsIGZpKVwiPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkYXRhW2ZpZWxkLnByb3BlcnR5XS5yZWY7IGNvbnRleHQ6IGRhdGFbZmllbGQucHJvcGVydHldLmNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDZWxkVHlwZURlZmF1bHQoZmllbGQpICYmIHRhYmxlVHlwZSAhPT0gJ2hvbWUnXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRJZCAhPT0gZGF0YVtjb25maWcuZmllbGRJZF07IGVsc2UgZWRpdFRwbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJwcy10YWJsZS10ZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJicHMtcmVwb3J0LXRhYmxlLW1lbnUtcGVuY2lsXCIgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhLCAkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlZGl0VHBsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGJwcy1pbnB1dCBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJwcy1lZGl0YWJsZS1jZWxsLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkKSAmJiB0YWJsZVR5cGUgPT09ICdob21lJ1wiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0SWQgIT09IGRhdGFbY29uZmlnLmZpZWxkSWRdIHx8IGVkaXRQcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBlZGl0UHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgYnBzLWlucHV0IFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnBzLWVkaXRhYmxlLWNlbGwtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5icHMtZWRpdGFibGUtY2VsbC1pbnB1dC1ob21lLXRhYmxlXT1cInRhYmxlVHlwZSA9PT0gJ2hvbWUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgIDx0ZCAqbmdJZj1cInRhYmxlVHlwZSA9PT0gJ2hvbWUnXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnBzLXRhYmxlLWhvbWUtbW9yZS1pY29uXCJcclxuICAgICAgICAgICAgICAgYnBzLWRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJlbWl0QnBzRXZlbnQoZGF0YSwgJ21vcmVCdG5DbGlja2VkJylcIlxyXG4gICAgICAgICAgICAgICBbYnBzRHJvcGRvd25NZW51XT1cIm1vcmVNZW51XCJcclxuICAgICAgICAgICAgICAgYnBzVHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICAgICAgICAgYnBzUGxhY2VtZW50PVwicmlnaHRUb3BcIj48L2k+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnBzLXRhYmxlLWhvbWUtZGVsZXRlLWljb25cIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuYnBzLXRhYmxlLWhvbWUtZGVsZXRlLWljb24tcG9zaXRpb24tdXBkYXRlZF09XCJmb3JjZVVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgIGJwcy1kcm9wZG93blxyXG4gICAgICAgICAgICAgICAoYnBzRm9yY2VkVXBkYXRlZFBvc2l0aW9uKT1cImNoYW5nZUljb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJlbWl0QnBzRXZlbnQoZGF0YSwgJ2RlbGV0ZUJ0bkNsaWNrZWQnKVwiXHJcbiAgICAgICAgICAgICAgIFticHNEcm9wZG93bk1lbnVdPVwiZGVsZXRlTWVudVwiXHJcbiAgICAgICAgICAgICAgIGJwc1RyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgICAgICAgIGJwc1BsYWNlbWVudD1cInJpZ2h0VG9wXCI+PC9pPlxyXG4gICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGVcIj5cclxuICAgICAgICAgIDx0ciBbbnpFeHBhbmRdPVwibWFwT2ZFeHBhbmREYXRhW2RhdGFbY29uZmlnLmZpZWxkSWRdXVwiPlxyXG4gICAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJnZXRGaWVsZHMoKS5sZW5ndGggKyAyXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJyb3dFeHBhbmRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGF0YTogZGF0YSwgaW5kZXg6IGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC9uei10YWJsZT5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2N1c3RvbUZpbHRlcj5cclxuICA8ZGl2IGNsYXNzPVwiYnBzLXRhYmxlLWZpbHRlci1pY29uXCI+XHJcbiAgICA8YnBzLWlucHV0LWdyb3VwIFticHNQcmVmaXhdPVwic2VhcmNoUHJlZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmb2N1c0lucHV0KCRldmVudCwgc2VhcmNoSW5wdXQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VhcmNoQm94SG92ZXJlZCA9IHRydWU7XCJcclxuICAgICAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwic2VhcmNoQm94SG92ZXJlZCA9IGZhbHNlO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnBzLXRhYmxlLWN1c3RvbS1maWx0ZXJcIj5cclxuICAgICAgPGlucHV0IGJwcy1pbnB1dFxyXG4gICAgICAgICAgICAgI3NlYXJjaElucHV0XHJcbiAgICAgICAgICAgICBuei10aC1leHRyYVxyXG4gICAgICAgICAgICAgY2xhc3M9XCJicHMtdGFibGUtZmlsdGVyLWN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAoa2V5dXApPVwidXBkYXRlU2VhcmNoKCRldmVudC50YXJnZXQudmFsdWUpXCJcclxuICAgICAgICAgICAgIG56VGFibGVGaWx0ZXI+XHJcbiAgICA8L2Jwcy1pbnB1dC1ncm91cD5cclxuICA8L2Rpdj5cclxuICBcclxuICA8bmctdGVtcGxhdGUgI3NlYXJjaFByZWZpeEljb24gbGV0LWRpc2FibGVkPVwiZmFsc2VcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2VhcmNoQm94SG92ZXJlZCAgJiYgIWRpc2FibGVkXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJicHMtY3VzdG9tLWZpbHRlci1pbWdcIiBzcmM9XCIvYXNzZXRzL2Jwcy1pY29ucy9zcHNfc2VhcmNoX2ljb25faG9tZV9lbmFibGVkLnN2Z1wiIC8+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWFyY2hCb3hIb3ZlcmVkICYmICFkaXNhYmxlZFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiYnBzLWN1c3RvbS1maWx0ZXItaW1nXCIgc3JjPVwiL2Fzc2V0cy9icHMtaWNvbnMvc3BzX3NlYXJjaF9pY29uX2hvbWVfaG92ZXJfYWN0aXZhdGVkLnN2Z1wiIC8+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkaXNhYmxlZFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiYnBzLWN1c3RvbS1maWx0ZXItaW1nXCIgc3JjPVwiL2Fzc2V0cy9icHMtaWNvbnMvc3BzX3NlYXJjaF9pY29uX2hvbWVfZGlzYWJsZWQuc3ZnXCIgLz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==