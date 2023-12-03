import { __decorate } from "tslib";
import { DOWN_ARROW, ENTER, ESCAPE, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Host, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, fromEvent, merge, of as observableOf } from 'rxjs';
import { distinctUntilChanged, map, startWith, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { getStatusClassNames, InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { BpsOptionGroupComponent } from './option-group.component';
import { BpsOptionComponent } from './option.component';
import { BpsSelectTopControlComponent } from './select-top-control.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/a11y";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "ng-zorro-antd/core/no-animation";
import * as i7 from "ng-zorro-antd/core/form";
import * as i8 from "@angular/common";
import * as i9 from "@angular/cdk/overlay";
import * as i10 from "ng-zorro-antd/core/overlay";
import * as i11 from "./option-container.component";
import * as i12 from "./select-arrow.component";
import * as i13 from "./select-clear.component";
import * as i14 from "./select-top-control.component";
import * as i15 from "../core/form/feedback";
function BpsSelectComponent_bps_select_arrow_2_ng_template_1_bps_form_item_feedback_icon_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-form-item-feedback-icon", 8);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("status", ctx_r6.status);
} }
function BpsSelectComponent_bps_select_arrow_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSelectComponent_bps_select_arrow_2_ng_template_1_bps_form_item_feedback_icon_0_Template, 1, 1, "bps-form-item-feedback-icon", 7);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r5.hasFeedback && !!ctx_r5.status);
} }
function BpsSelectComponent_bps_select_arrow_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bps-select-arrow", 5);
    i0.ɵɵtemplate(1, BpsSelectComponent_bps_select_arrow_2_ng_template_1_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showArrow", ctx_r1.bpsShowArrow)("loading", ctx_r1.bpsLoading)("search", ctx_r1.bpsOpen && ctx_r1.bpsShowSearch)("suffixIcon", ctx_r1.bpsSuffixIcon)("feedbackIcon", _r4);
} }
function BpsSelectComponent_bps_select_clear_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-select-clear", 9);
    i0.ɵɵlistener("clear", function BpsSelectComponent_bps_select_clear_3_Template_bps_select_clear_clear_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onClearSelection()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("clearIcon", ctx_r2.bpsClearIcon);
} }
function BpsSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-option-container", 10);
    i0.ɵɵlistener("keydown", function BpsSelectComponent_ng_template_4_Template_bps_option_container_keydown_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onKeyDown($event)); })("itemClick", function BpsSelectComponent_ng_template_4_Template_bps_option_container_itemClick_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onItemClick($event)); })("scrollToBottom", function BpsSelectComponent_ng_template_4_Template_bps_option_container_scrollToBottom_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.bpsScrollToBottom.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottomLeft")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "topLeft")("ant-select-dropdown-placement-bottomRight", ctx_r3.dropDownPosition === "bottomRight")("ant-select-dropdown-placement-topRight", ctx_r3.dropDownPosition === "topRight");
    i0.ɵɵproperty("ngStyle", ctx_r3.bpsDropdownStyle)("itemSize", ctx_r3.bpsOptionHeightPx)("maxItemLength", ctx_r3.bpsOptionOverflowSize)("matchWidth", ctx_r3.bpsDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", !!(ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r3.listOfContainerItem)("menuItemSelectedIcon", ctx_r3.bpsMenuItemSelectedIcon)("notFoundContent", ctx_r3.bpsNotFoundContent)("activatedValue", ctx_r3.activatedValue)("listOfSelectedValue", ctx_r3.listOfValue)("dropdownRender", ctx_r3.bpsDropdownRender)("compareWith", ctx_r3.compareWith)("mode", ctx_r3.bpsMode);
} }
const defaultFilterOption = (searchValue, item) => {
    if (item && item.bpsLabel) {
        return item.bpsLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
};
const NZ_CONFIG_MODULE_NAME = 'select';
export class BpsSelectComponent {
    set bpsShowArrow(value) {
        this._bpsShowArrow = value;
    }
    get bpsShowArrow() {
        return this._bpsShowArrow === undefined ? this.bpsMode === 'default' : this._bpsShowArrow;
    }
    generateTagItem(value) {
        return {
            bpsValue: value,
            bpsLabel: value,
            type: 'item'
        };
    }
    onItemClick(value) {
        this.activatedValue = value;
        if (this.bpsMode === 'default') {
            if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                this.updateListOfValue([value]);
            }
            this.setOpenState(false);
        }
        else {
            const targetIndex = this.listOfValue.findIndex(o => this.compareWith(o, value));
            if (targetIndex !== -1) {
                const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
                this.updateListOfValue(listOfValueAfterRemoved);
            }
            else if (this.listOfValue.length < this.bpsMaxMultipleCount) {
                const listOfValueAfterAdded = [...this.listOfValue, value];
                this.updateListOfValue(listOfValueAfterAdded);
            }
            this.focus();
            if (this.bpsAutoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    onItemDelete(item) {
        const listOfSelectedValue = this.listOfValue.filter(v => !this.compareWith(v, item.bpsValue));
        this.updateListOfValue(listOfSelectedValue);
        this.clearInput();
    }
    updateListOfContainerItem() {
        let listOfContainerItem = this.listOfTagAndTemplateItem
            .filter(item => !item.bpsHide)
            .filter(item => {
            if (!this.bpsServerSearch && this.searchValue) {
                return this.bpsFilterOption(this.searchValue, item);
            }
            else {
                return true;
            }
        });
        if (this.bpsMode === 'tags' && this.searchValue) {
            const matchedItem = this.listOfTagAndTemplateItem.find(item => item.bpsLabel === this.searchValue);
            if (!matchedItem) {
                const tagItem = this.generateTagItem(this.searchValue);
                listOfContainerItem = [tagItem, ...listOfContainerItem];
                this.activatedValue = tagItem.bpsValue;
            }
            else {
                this.activatedValue = matchedItem.bpsValue;
            }
        }
        const activatedItem = listOfContainerItem.find(item => item.bpsLabel === this.searchValue) ||
            listOfContainerItem.find(item => this.compareWith(item.bpsValue, this.activatedValue)) ||
            listOfContainerItem.find(item => this.compareWith(item.bpsValue, this.listOfValue[0])) ||
            listOfContainerItem[0];
        this.activatedValue = (activatedItem && activatedItem.bpsValue) || null;
        let listOfGroupLabel = [];
        if (this.isReactiveDriven) {
            listOfGroupLabel = [...new Set(this.bpsOptions.filter(o => o.groupLabel).map(o => o.groupLabel))];
        }
        else {
            if (this.listOfNzOptionGroupComponent) {
                listOfGroupLabel = this.listOfNzOptionGroupComponent.map(o => o.bpsLabel);
            }
        }
        /** insert group item **/
        listOfGroupLabel.forEach(label => {
            const index = listOfContainerItem.findIndex(item => label === item.groupLabel);
            if (index > -1) {
                const groupItem = { groupLabel: label, type: 'group', key: label };
                listOfContainerItem.splice(index, 0, groupItem);
            }
        });
        this.listOfContainerItem = [...listOfContainerItem];
        this.updateCdkConnectedOverlayPositions();
    }
    clearInput() {
        this.bpsSelectTopControlComponent.clearInputValue();
    }
    updateListOfValue(listOfValue) {
        const covertListToModel = (list, mode) => {
            if (mode === 'default') {
                if (list.length > 0) {
                    return list[0];
                }
                else {
                    return null;
                }
            }
            else {
                return list;
            }
        };
        const model = covertListToModel(listOfValue, this.bpsMode);
        if (this.value !== model) {
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.value = model;
            this.onChange(this.value);
        }
    }
    onTokenSeparate(listOfLabel) {
        const listOfMatchedValue = this.listOfTagAndTemplateItem
            .filter(item => listOfLabel.findIndex(label => label === item.bpsLabel) !== -1)
            .map(item => item.bpsValue)
            .filter(item => this.listOfValue.findIndex(v => this.compareWith(v, item)) === -1);
        if (this.bpsMode === 'multiple') {
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
        }
        else if (this.bpsMode === 'tags') {
            const listOfUnMatchedLabel = listOfLabel.filter(label => this.listOfTagAndTemplateItem.findIndex(item => item.bpsLabel === label) === -1);
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        }
        this.clearInput();
    }
    onKeyDown(e) {
        if (this.bpsDisabled) {
            return;
        }
        const listOfFilteredOptionNotDisabled = this.listOfContainerItem
            .filter(item => item.type === 'item')
            .filter(item => !item.bpsDisabled);
        const activatedIndex = listOfFilteredOptionNotDisabled.findIndex(item => this.compareWith(item.bpsValue, this.activatedValue));
        switch (e.keyCode) {
            case UP_ARROW:
                e.preventDefault();
                if (this.bpsOpen && listOfFilteredOptionNotDisabled.length > 0) {
                    const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                    this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].bpsValue;
                }
                break;
            case DOWN_ARROW:
                e.preventDefault();
                if (this.bpsOpen && listOfFilteredOptionNotDisabled.length > 0) {
                    const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].bpsValue;
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.bpsOpen) {
                    if (isNotNil(this.activatedValue) && activatedIndex !== -1) {
                        this.onItemClick(this.activatedValue);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case SPACE:
                if (!this.bpsOpen) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                if (this.bpsSelectOnTab) {
                    if (this.bpsOpen) {
                        e.preventDefault();
                        if (isNotNil(this.activatedValue)) {
                            this.onItemClick(this.activatedValue);
                        }
                    }
                }
                else {
                    this.setOpenState(false);
                }
                break;
            case ESCAPE:
                /**
                 * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                 */
                break;
            default:
                if (!this.bpsOpen) {
                    this.setOpenState(true);
                }
        }
    }
    setOpenState(value) {
        if (this.bpsOpen !== value) {
            this.bpsOpen = value;
            this.bpsOpenChange.emit(value);
            this.onOpenChange();
            this.cdr.markForCheck();
        }
    }
    onOpenChange() {
        this.updateCdkConnectedOverlayStatus();
        this.clearInput();
    }
    onInputValueChange(value) {
        this.searchValue = value;
        this.updateListOfContainerItem();
        this.bpsOnSearch.emit(value);
        this.updateCdkConnectedOverlayPositions();
    }
    onClearSelection() {
        this.updateListOfValue([]);
    }
    onClickOutside(event) {
        if (!this.host.nativeElement.contains(event.target)) {
            this.setOpenState(false);
        }
    }
    focus() {
        this.bpsSelectTopControlComponent.focus();
    }
    blur() {
        this.bpsSelectTopControlComponent.blur();
    }
    onPositionChange(position) {
        const placement = getPlacementName(position);
        this.dropDownPosition = placement;
    }
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser && this.originElement.nativeElement) {
            const triggerWidth = this.triggerWidth;
            cancelRequestAnimationFrame(this.requestId);
            this.requestId = reqAnimFrame(() => {
                // Blink triggers style and layout pipelines anytime the `getBoundingClientRect()` is called, which may cause a
                // frame drop. That's why it's scheduled through the `requestAnimationFrame` to unload the composite thread.
                this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
                if (triggerWidth !== this.triggerWidth) {
                    // The `requestAnimationFrame` will trigger change detection, but we're inside an `OnPush` component which won't have
                    // the `ChecksEnabled` state. Calling `markForCheck()` will allow Angular to run the change detection from the root component
                    // down to the `nz-select`. But we'll trigger only local change detection if the `triggerWidth` has been changed.
                    this.cdr.detectChanges();
                }
            });
        }
    }
    updateCdkConnectedOverlayPositions() {
        reqAnimFrame(() => {
            this.cdkConnectedOverlay?.overlayRef?.updatePosition();
        });
    }
    constructor(ngZone, destroy$, nzConfigService, cdr, host, renderer, platform, focusMonitor, directionality, noAnimation, nzFormStatusService, nzFormNoStatusService) {
        this.ngZone = ngZone;
        this.destroy$ = destroy$;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.host = host;
        this.renderer = renderer;
        this.platform = platform;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.bpsId = null;
        this.bpsSize = 'default';
        this.bpsStatus = '';
        this.bpsOptionHeightPx = 23;
        this.bpsOptionOverflowSize = 8;
        this.bpsDropdownClassName = null;
        this.bpsDropdownMatchSelectWidth = true;
        this.bpsDropdownStyle = null;
        this.bpsNotFoundContent = undefined;
        this.bpsPlaceHolder = null;
        this.bpsPlacement = null;
        this.bpsMaxTagCount = Infinity;
        this.bpsDropdownRender = null;
        this.bpsCustomTemplate = null;
        this.bpsSuffixIcon = null;
        this.bpsClearIcon = null;
        this.bpsRemoveIcon = null;
        this.bpsMenuItemSelectedIcon = null;
        this.bpsTokenSeparators = [];
        this.bpsMaxTagPlaceholder = null;
        this.bpsMaxMultipleCount = Infinity;
        this.bpsMode = 'default';
        this.bpsFilterOption = defaultFilterOption;
        this.compareWith = (o1, o2) => o1 === o2;
        this.bpsAllowClear = false;
        this.bpsBorderless = false;
        this.bpsShowSearch = false;
        this.bpsLoading = false;
        this.bpsAutoFocus = false;
        this.bpsAutoClearSearchValue = true;
        this.bpsServerSearch = false;
        this.bpsDisabled = false;
        this.bpsOpen = false;
        this.bpsSelectOnTab = false;
        this.bpsBackdrop = false;
        this.bpsOptions = [];
        this.bpsOnSearch = new EventEmitter();
        this.bpsScrollToBottom = new EventEmitter();
        this.bpsOpenChange = new EventEmitter();
        this.bpsBlur = new EventEmitter();
        this.bpsFocus = new EventEmitter();
        this.listOfValue$ = new BehaviorSubject([]);
        this.listOfTemplateItem$ = new BehaviorSubject([]);
        this.listOfTagAndTemplateItem = [];
        this.searchValue = '';
        this.isReactiveDriven = false;
        this.requestId = -1;
        this.isNzDisableFirstChange = true;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.dropDownPosition = 'bottomLeft';
        this.triggerWidth = null;
        this.listOfContainerItem = [];
        this.listOfTopItem = [];
        this.activatedValue = null;
        this.listOfValue = [];
        this.focused = false;
        this.dir = 'ltr';
        this.positions = [];
        // status
        this.prefixCls = 'ant-select';
        this.statusCls = {};
        this.status = '';
        this.hasFeedback = false;
    }
    writeValue(modelValue) {
        /** https://github.com/angular/angular/issues/14988 **/
        if (this.value !== modelValue) {
            this.value = modelValue;
            const covertModelToList = (model, mode) => {
                if (model === null || model === undefined) {
                    return [];
                }
                else if (mode === 'default') {
                    return [model];
                }
                else {
                    return model;
                }
            };
            const listOfValue = covertModelToList(modelValue, this.bpsMode);
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.cdr.markForCheck();
        }
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
        if (this.bpsDisabled) {
            this.setOpenState(false);
        }
        this.cdr.markForCheck();
    }
    ngOnChanges(changes) {
        const { bpsOpen, bpsDisabled, bpsOptions, bpsStatus, bpsPlacement } = changes;
        if (bpsOpen) {
            this.onOpenChange();
        }
        if (bpsDisabled && this.bpsDisabled) {
            this.setOpenState(false);
        }
        if (bpsOptions) {
            this.isReactiveDriven = true;
            const listOfOptions = this.bpsOptions || [];
            const listOfTransformedItem = listOfOptions.map(item => {
                return {
                    template: item.label instanceof TemplateRef ? item.label : null,
                    bpsTitle: this.getTitle(item.title, item.label),
                    bpsLabel: typeof item.label === 'string' || typeof item.label === 'number' ? item.label : null,
                    bpsValue: item.value,
                    bpsDisabled: item.disabled || false,
                    bpsHide: item.hide || false,
                    bpsCustomContent: item.label instanceof TemplateRef,
                    groupLabel: item.groupLabel || null,
                    type: 'item',
                    key: item.key === undefined ? item.value : item.key
                };
            });
            this.listOfTemplateItem$.next(listOfTransformedItem);
        }
        if (bpsStatus) {
            this.setStatusStyles(this.bpsStatus, this.hasFeedback);
        }
        if (bpsPlacement) {
            const { currentValue } = bpsPlacement;
            this.dropDownPosition = currentValue;
            const listOfPlacement = ['bottomLeft', 'topLeft', 'bottomRight', 'topRight'];
            if (currentValue && listOfPlacement.includes(currentValue)) {
                this.positions = [POSITION_MAP[currentValue]];
            }
            else {
                this.positions = listOfPlacement.map(e => POSITION_MAP[e]);
            }
        }
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : observableOf(false)), map(([{ status, hasFeedback }, noStatus]) => ({ status: noStatus ? '' : status, hasFeedback })), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        this.focusMonitor
            .monitor(this.host, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                this.bpsBlur.emit();
                Promise.resolve().then(() => {
                    this.onTouched();
                });
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
                this.bpsFocus.emit();
            }
        });
        combineLatest([this.listOfValue$, this.listOfTemplateItem$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
            const listOfTagItem = listOfSelectedValue
                .filter(() => this.bpsMode === 'tags')
                .filter(value => listOfTemplateItem.findIndex(o => this.compareWith(o.bpsValue, value)) === -1)
                .map(value => this.listOfTopItem.find(o => this.compareWith(o.bpsValue, value)) || this.generateTagItem(value));
            this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
            this.listOfTopItem = this.listOfValue
                .map(v => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find(item => this.compareWith(v, item.bpsValue)))
                .filter(item => !!item);
            this.updateListOfContainerItem();
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.nzConfigService
            .getConfigChangeEventForComponent('select')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, 'click')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            if ((this.bpsOpen && this.bpsShowSearch) || this.bpsDisabled) {
                return;
            }
            this.ngZone.run(() => this.setOpenState(!this.bpsOpen));
        }));
        // Caretaker note: we could've added this listener within the template `(overlayKeydown)="..."`,
        // but with this approach, it'll run change detection on each keyboard click, and also it'll run
        // `markForCheck()` internally, which means the whole component tree (starting from the root and
        // going down to the select component) will be re-checked and updated (if needed).
        // This is safe to do that manually since `setOpenState()` calls `markForCheck()` if needed.
        this.cdkConnectedOverlay.overlayKeydown.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (event.keyCode === ESCAPE) {
                this.setOpenState(false);
            }
        });
    }
    ngAfterContentInit() {
        if (!this.isReactiveDriven) {
            merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                .pipe(startWith(true), switchMap(() => merge(...[
                this.listOfNzOptionComponent.changes,
                this.listOfNzOptionGroupComponent.changes,
                ...this.listOfNzOptionComponent.map(option => option.changes),
                ...this.listOfNzOptionGroupComponent.map(option => option.changes)
            ]).pipe(startWith(true))), takeUntil(this.destroy$))
                .subscribe(() => {
                const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map(item => {
                    const { template, bpsLabel, bpsValue, bpsKey, bpsDisabled, bpsHide, bpsCustomContent, groupLabel } = item;
                    return {
                        template,
                        bpsLabel,
                        bpsValue,
                        bpsDisabled,
                        bpsHide,
                        bpsCustomContent,
                        groupLabel,
                        bpsTitle: this.getTitle(item.bpsTitle, item.bpsLabel),
                        type: 'item',
                        key: bpsKey === undefined ? bpsValue : bpsKey
                    };
                });
                this.listOfTemplateItem$.next(listOfOptionInterface);
                this.cdr.markForCheck();
            });
        }
    }
    ngOnDestroy() {
        cancelRequestAnimationFrame(this.requestId);
        this.focusMonitor.stopMonitoring(this.host);
    }
    setStatusStyles(status, hasFeedback) {
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.cdr.markForCheck();
        // render status if nzStatus is set
        this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
        Object.keys(this.statusCls).forEach(status => {
            if (this.statusCls[status]) {
                this.renderer.addClass(this.host.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.host.nativeElement, status);
            }
        });
    }
    getTitle(title, label) {
        let rawTitle = undefined;
        if (title === undefined) {
            if (typeof label === 'string' || typeof label === 'number') {
                rawTitle = label.toString();
            }
        }
        else if (typeof title === 'string' || typeof title === 'number') {
            rawTitle = title.toString();
        }
        return rawTitle;
    }
    static { this.ɵfac = function BpsSelectComponent_Factory(t) { return new (t || BpsSelectComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.NzDestroyService), i0.ɵɵdirectiveInject(i2.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i5.Directionality, 8), i0.ɵɵdirectiveInject(i6.NzNoAnimationDirective, 9), i0.ɵɵdirectiveInject(i7.NzFormStatusService, 8), i0.ɵɵdirectiveInject(i7.NzFormNoStatusService, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectComponent, selectors: [["bps-select"]], contentQueries: function BpsSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsOptionComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, BpsOptionGroupComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
        } }, viewQuery: function BpsSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkOverlayOrigin, 7, ElementRef);
            i0.ɵɵviewQuery(CdkConnectedOverlay, 7);
            i0.ɵɵviewQuery(BpsSelectTopControlComponent, 7);
            i0.ɵɵviewQuery(BpsOptionGroupComponent, 7, ElementRef);
            i0.ɵɵviewQuery(BpsSelectTopControlComponent, 7, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.originElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsSelectTopControlComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsOptionGroupComponentElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsSelectTopControlComponentElement = _t.first);
        } }, hostAttrs: [1, "ant-select"], hostVars: 26, hostBindings: function BpsSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.bpsSize === "large")("ant-select-sm", ctx.bpsSize === "small")("ant-select-show-arrow", ctx.bpsShowArrow)("ant-select-disabled", ctx.bpsDisabled)("ant-select-show-search", (ctx.bpsShowSearch || ctx.bpsMode !== "default") && !ctx.bpsDisabled)("ant-select-allow-clear", ctx.bpsAllowClear)("ant-select-borderless", ctx.bpsBorderless)("ant-select-open", ctx.bpsOpen)("ant-select-focused", ctx.bpsOpen || ctx.focused)("ant-select-single", ctx.bpsMode === "default")("ant-select-multiple", ctx.bpsMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
        } }, inputs: { bpsId: "bpsId", bpsSize: "bpsSize", bpsStatus: "bpsStatus", bpsOptionHeightPx: "bpsOptionHeightPx", bpsOptionOverflowSize: "bpsOptionOverflowSize", bpsDropdownClassName: "bpsDropdownClassName", bpsDropdownMatchSelectWidth: "bpsDropdownMatchSelectWidth", bpsDropdownStyle: "bpsDropdownStyle", bpsNotFoundContent: "bpsNotFoundContent", bpsPlaceHolder: "bpsPlaceHolder", bpsPlacement: "bpsPlacement", bpsMaxTagCount: "bpsMaxTagCount", bpsDropdownRender: "bpsDropdownRender", bpsCustomTemplate: "bpsCustomTemplate", bpsSuffixIcon: "bpsSuffixIcon", bpsClearIcon: "bpsClearIcon", bpsRemoveIcon: "bpsRemoveIcon", bpsMenuItemSelectedIcon: "bpsMenuItemSelectedIcon", bpsTokenSeparators: "bpsTokenSeparators", bpsMaxTagPlaceholder: "bpsMaxTagPlaceholder", bpsMaxMultipleCount: "bpsMaxMultipleCount", bpsMode: "bpsMode", bpsFilterOption: "bpsFilterOption", compareWith: "compareWith", bpsAllowClear: "bpsAllowClear", bpsBorderless: "bpsBorderless", bpsShowSearch: "bpsShowSearch", bpsLoading: "bpsLoading", bpsAutoFocus: "bpsAutoFocus", bpsAutoClearSearchValue: "bpsAutoClearSearchValue", bpsServerSearch: "bpsServerSearch", bpsDisabled: "bpsDisabled", bpsOpen: "bpsOpen", bpsSelectOnTab: "bpsSelectOnTab", bpsBackdrop: "bpsBackdrop", bpsOptions: "bpsOptions", bpsShowArrow: "bpsShowArrow" }, outputs: { bpsOnSearch: "bpsOnSearch", bpsScrollToBottom: "bpsScrollToBottom", bpsOpenChange: "bpsOpenChange", bpsBlur: "bpsBlur", bpsFocus: "bpsFocus" }, exportAs: ["bpsSelect"], features: [i0.ɵɵProvidersFeature([
                NzDestroyService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsSelectComponent),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 25, consts: [["cdkOverlayOrigin", "", 3, "bpsId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "inputValueChange", "tokenize", "deleteItem", "keydown"], ["origin", "cdkOverlayOrigin"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", 4, "ngIf"], [3, "clearIcon", "clear", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "overlayOutsideClick", "detach", "positionChange"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon"], ["feedbackIconTpl", ""], [3, "status", 4, "ngIf"], [3, "status"], [3, "clearIcon", "clear"], [3, "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "keydown", "itemClick", "scrollToBottom"]], template: function BpsSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "bps-select-top-control", 0, 1);
            i0.ɵɵlistener("inputValueChange", function BpsSelectComponent_Template_bps_select_top_control_inputValueChange_0_listener($event) { return ctx.onInputValueChange($event); })("tokenize", function BpsSelectComponent_Template_bps_select_top_control_tokenize_0_listener($event) { return ctx.onTokenSeparate($event); })("deleteItem", function BpsSelectComponent_Template_bps_select_top_control_deleteItem_0_listener($event) { return ctx.onItemDelete($event); })("keydown", function BpsSelectComponent_Template_bps_select_top_control_keydown_0_listener($event) { return ctx.onKeyDown($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, BpsSelectComponent_bps_select_arrow_2_Template, 3, 5, "bps-select-arrow", 2);
            i0.ɵɵtemplate(3, BpsSelectComponent_bps_select_clear_3_Template, 1, 1, "bps-select-clear", 3);
            i0.ɵɵtemplate(4, BpsSelectComponent_ng_template_4_Template, 1, 23, "ng-template", 4);
            i0.ɵɵlistener("overlayOutsideClick", function BpsSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) { return ctx.onClickOutside($event); })("detach", function BpsSelectComponent_Template_ng_template_detach_4_listener() { return ctx.setOpenState(false); })("positionChange", function BpsSelectComponent_Template_ng_template_positionChange_4_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵproperty("bpsId", ctx.bpsId)("open", ctx.bpsOpen)("disabled", ctx.bpsDisabled)("mode", ctx.bpsMode)("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.bpsMaxTagPlaceholder)("removeIcon", ctx.bpsRemoveIcon)("placeHolder", ctx.bpsPlaceHolder)("maxTagCount", ctx.bpsMaxTagCount)("customTemplate", ctx.bpsCustomTemplate)("tokenSeparators", ctx.bpsTokenSeparators)("showSearch", ctx.bpsShowSearch)("autofocus", ctx.bpsAutoFocus)("listOfTopItem", ctx.listOfTopItem);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.bpsShowArrow || ctx.hasFeedback && !!ctx.status);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsAllowClear && !ctx.bpsDisabled && ctx.listOfValue.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.bpsBackdrop)("cdkConnectedOverlayMinWidth", ctx.bpsDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.bpsDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.bpsDropdownClassName)("cdkConnectedOverlayOpen", ctx.bpsOpen)("cdkConnectedOverlayPositions", ctx.positions);
        } }, dependencies: [i8.NgIf, i8.NgStyle, i9.CdkConnectedOverlay, i9.CdkOverlayOrigin, i6.NzNoAnimationDirective, i10.NzConnectedOverlayDirective, i11.BpsOptionContainerComponent, i12.BpsSelectArrowComponent, i13.BpsSelectClearComponent, i14.BpsSelectTopControlComponent, i15.BpsFormItemFeedbackIconComponent], styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 }); }
}
__decorate([
    WithConfig()
], BpsSelectComponent.prototype, "bpsSuffixIcon", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAllowClear", void 0);
__decorate([
    WithConfig(),
    InputBoolean()
], BpsSelectComponent.prototype, "bpsBorderless", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsShowSearch", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAutoFocus", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAutoClearSearchValue", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsServerSearch", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsOpen", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsSelectOnTab", void 0);
__decorate([
    WithConfig(),
    InputBoolean()
], BpsSelectComponent.prototype, "bpsBackdrop", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectComponent, [{
        type: Component,
        args: [{ selector: 'bps-select', exportAs: 'bpsSelect', preserveWhitespaces: false, providers: [
                    NzDestroyService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsSelectComponent),
                        multi: true
                    }
                ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [slideMotion], template: `
    <bps-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [bpsId]="bpsId"
      [open]="bpsOpen"
      [disabled]="bpsDisabled"
      [mode]="bpsMode"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="bpsMaxTagPlaceholder"
      [removeIcon]="bpsRemoveIcon"
      [placeHolder]="bpsPlaceHolder"
      [maxTagCount]="bpsMaxTagCount"
      [customTemplate]="bpsCustomTemplate"
      [tokenSeparators]="bpsTokenSeparators"
      [showSearch]="bpsShowSearch"
      [autofocus]="bpsAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></bps-select-top-control>
    <bps-select-arrow
      *ngIf="bpsShowArrow || (hasFeedback && !!status)"
      [showArrow]="bpsShowArrow"
      [loading]="bpsLoading"
      [search]="bpsOpen && bpsShowSearch"
      [suffixIcon]="bpsSuffixIcon"
      [feedbackIcon]="feedbackIconTpl"
    >
      <ng-template #feedbackIconTpl>
        <bps-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></bps-form-item-feedback-icon>
      </ng-template>
    </bps-select-arrow>

    <bps-select-clear
      *ngIf="bpsAllowClear && !bpsDisabled && listOfValue.length"
      [clearIcon]="bpsClearIcon"
      (clear)="onClearSelection()"
    ></bps-select-clear>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="bpsBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(bpsDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(bpsDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="bpsDropdownClassName!"
      [cdkConnectedOverlayOpen]="bpsOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <bps-option-container
        [ngStyle]="bpsDropdownStyle"
        [itemSize]="bpsOptionHeightPx"
        [maxItemLength]="bpsOptionOverflowSize"
        [matchWidth]="bpsDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropDownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropDownPosition === 'topRight'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="bpsMenuItemSelectedIcon"
        [notFoundContent]="bpsNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="bpsDropdownRender"
        [compareWith]="compareWith"
        [mode]="bpsMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="bpsScrollToBottom.emit()"
      ></bps-option-container>
    </ng-template>
  `, host: {
                    class: 'ant-select',
                    '[class.ant-select-in-form-item]': '!!nzFormStatusService',
                    '[class.ant-select-lg]': 'bpsSize === "large"',
                    '[class.ant-select-sm]': 'bpsSize === "small"',
                    '[class.ant-select-show-arrow]': `bpsShowArrow`,
                    '[class.ant-select-disabled]': 'bpsDisabled',
                    '[class.ant-select-show-search]': `(bpsShowSearch || bpsMode !== 'default') && !bpsDisabled`,
                    '[class.ant-select-allow-clear]': 'bpsAllowClear',
                    '[class.ant-select-borderless]': 'bpsBorderless',
                    '[class.ant-select-open]': 'bpsOpen',
                    '[class.ant-select-focused]': 'bpsOpen || focused',
                    '[class.ant-select-single]': `bpsMode === 'default'`,
                    '[class.ant-select-multiple]': `bpsMode !== 'default'`,
                    '[class.ant-select-rtl]': `dir === 'rtl'`
                }, styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"] }]
    }], function () { return [{ type: i0.NgZone }, { type: i1.NzDestroyService }, { type: i2.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.Platform }, { type: i4.FocusMonitor }, { type: i5.Directionality, decorators: [{
                type: Optional
            }] }, { type: i6.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i7.NzFormStatusService, decorators: [{
                type: Optional
            }] }, { type: i7.NzFormNoStatusService, decorators: [{
                type: Optional
            }] }]; }, { bpsId: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsStatus: [{
            type: Input
        }], bpsOptionHeightPx: [{
            type: Input
        }], bpsOptionOverflowSize: [{
            type: Input
        }], bpsDropdownClassName: [{
            type: Input
        }], bpsDropdownMatchSelectWidth: [{
            type: Input
        }], bpsDropdownStyle: [{
            type: Input
        }], bpsNotFoundContent: [{
            type: Input
        }], bpsPlaceHolder: [{
            type: Input
        }], bpsPlacement: [{
            type: Input
        }], bpsMaxTagCount: [{
            type: Input
        }], bpsDropdownRender: [{
            type: Input
        }], bpsCustomTemplate: [{
            type: Input
        }], bpsSuffixIcon: [{
            type: Input
        }], bpsClearIcon: [{
            type: Input
        }], bpsRemoveIcon: [{
            type: Input
        }], bpsMenuItemSelectedIcon: [{
            type: Input
        }], bpsTokenSeparators: [{
            type: Input
        }], bpsMaxTagPlaceholder: [{
            type: Input
        }], bpsMaxMultipleCount: [{
            type: Input
        }], bpsMode: [{
            type: Input
        }], bpsFilterOption: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], bpsAllowClear: [{
            type: Input
        }], bpsBorderless: [{
            type: Input
        }], bpsShowSearch: [{
            type: Input
        }], bpsLoading: [{
            type: Input
        }], bpsAutoFocus: [{
            type: Input
        }], bpsAutoClearSearchValue: [{
            type: Input
        }], bpsServerSearch: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsOpen: [{
            type: Input
        }], bpsSelectOnTab: [{
            type: Input
        }], bpsBackdrop: [{
            type: Input
        }], bpsOptions: [{
            type: Input
        }], bpsShowArrow: [{
            type: Input
        }], bpsOnSearch: [{
            type: Output
        }], bpsScrollToBottom: [{
            type: Output
        }], bpsOpenChange: [{
            type: Output
        }], bpsBlur: [{
            type: Output
        }], bpsFocus: [{
            type: Output
        }], originElement: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: true, read: ElementRef }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: true }]
        }], bpsSelectTopControlComponent: [{
            type: ViewChild,
            args: [BpsSelectTopControlComponent, { static: true }]
        }], listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [BpsOptionComponent, { descendants: true }]
        }], listOfNzOptionGroupComponent: [{
            type: ContentChildren,
            args: [BpsOptionGroupComponent, { descendants: true }]
        }], bpsOptionGroupComponentElement: [{
            type: ViewChild,
            args: [BpsOptionGroupComponent, { static: true, read: ElementRef }]
        }], bpsSelectTopControlComponentElement: [{
            type: ViewChild,
            args: [BpsSelectTopControlComponent, { static: true, read: ElementRef }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUdqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUtMLFFBQVEsRUFDUixNQUFNLEVBSU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDM0YsT0FBTyxFQUFF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QUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDYixtQkFBbUI7a0JBQXBFLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ1csNEJBQTRCO2tCQUF0RixTQUFTO21CQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNHLHVCQUF1QjtrQkFBbEYsZUFBZTttQkFBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFFMUQsNEJBQTRCO2tCQUQzQixlQUFlO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtZQUVTLDhCQUE4QjtrQkFBckcsU0FBUzttQkFBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUV0RSxtQ0FBbUM7a0JBRGxDLFNBQVM7bUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgU1BBQ0UsIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcbiAgQ2RrT3ZlcmxheU9yaWdpbixcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpGb3JtTm9TdGF0dXNTZXJ2aWNlLCBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgZ2V0UGxhY2VtZW50TmFtZSwgUE9TSVRJT05fTUFQLCBQT1NJVElPTl9UWVBFIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xuaW1wb3J0IHsgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLCByZXFBbmltRnJhbWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcG9seWZpbGwnO1xuaW1wb3J0IHsgTnpEZXN0cm95U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQge1xuICBCb29sZWFuSW5wdXQsXG4gIE5nQ2xhc3NJbnRlcmZhY2UsXG4gIE56U2FmZUFueSxcbiAgTnpTdGF0dXMsXG4gIE56VmFsaWRhdGVTdGF0dXMsXG4gIE9uQ2hhbmdlVHlwZSxcbiAgT25Ub3VjaGVkVHlwZVxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3RhdHVzQ2xhc3NOYW1lcywgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnBzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTnpGaWx0ZXJPcHRpb25UeXBlLFxuICBOelNlbGVjdEl0ZW1JbnRlcmZhY2UsXG4gIE56U2VsZWN0TW9kZVR5cGUsXG4gIE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlLFxuICBOelNlbGVjdFBsYWNlbWVudFR5cGVcbn0gZnJvbSAnLi9zZWxlY3QudHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0RmlsdGVyT3B0aW9uOiBOekZpbHRlck9wdGlvblR5cGUgPSAoc2VhcmNoVmFsdWU6IHN0cmluZywgaXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKTogYm9vbGVhbiA9PiB7XG4gIGlmIChpdGVtICYmIGl0ZW0uYnBzTGFiZWwpIHtcbiAgICByZXR1cm4gaXRlbS5icHNMYWJlbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdzZWxlY3QnO1xuXG5leHBvcnQgdHlwZSBOelNlbGVjdFNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jwcy1zZWxlY3QnLFxuICBleHBvcnRBczogJ2Jwc1NlbGVjdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICBOekRlc3Ryb3lTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXNlbGVjdC5jb21wb25lbnQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJwcy1zZWxlY3QtdG9wLWNvbnRyb2xcbiAgICAgIGNka092ZXJsYXlPcmlnaW5cbiAgICAgICNvcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCJcbiAgICAgIFticHNJZF09XCJicHNJZFwiXG4gICAgICBbb3Blbl09XCJicHNPcGVuXCJcbiAgICAgIFtkaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXG4gICAgICBbbW9kZV09XCJicHNNb2RlXCJcbiAgICAgIFtALmRpc2FibGVkXT1cIiEhbm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgW21heFRhZ1BsYWNlaG9sZGVyXT1cImJwc01heFRhZ1BsYWNlaG9sZGVyXCJcbiAgICAgIFtyZW1vdmVJY29uXT1cImJwc1JlbW92ZUljb25cIlxuICAgICAgW3BsYWNlSG9sZGVyXT1cImJwc1BsYWNlSG9sZGVyXCJcbiAgICAgIFttYXhUYWdDb3VudF09XCJicHNNYXhUYWdDb3VudFwiXG4gICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiYnBzQ3VzdG9tVGVtcGxhdGVcIlxuICAgICAgW3Rva2VuU2VwYXJhdG9yc109XCJicHNUb2tlblNlcGFyYXRvcnNcIlxuICAgICAgW3Nob3dTZWFyY2hdPVwiYnBzU2hvd1NlYXJjaFwiXG4gICAgICBbYXV0b2ZvY3VzXT1cImJwc0F1dG9Gb2N1c1wiXG4gICAgICBbbGlzdE9mVG9wSXRlbV09XCJsaXN0T2ZUb3BJdGVtXCJcbiAgICAgIChpbnB1dFZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICh0b2tlbml6ZSk9XCJvblRva2VuU2VwYXJhdGUoJGV2ZW50KVwiXG4gICAgICAoZGVsZXRlSXRlbSk9XCJvbkl0ZW1EZWxldGUoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgPjwvYnBzLXNlbGVjdC10b3AtY29udHJvbD5cbiAgICA8YnBzLXNlbGVjdC1hcnJvd1xuICAgICAgKm5nSWY9XCJicHNTaG93QXJyb3cgfHwgKGhhc0ZlZWRiYWNrICYmICEhc3RhdHVzKVwiXG4gICAgICBbc2hvd0Fycm93XT1cImJwc1Nob3dBcnJvd1wiXG4gICAgICBbbG9hZGluZ109XCJicHNMb2FkaW5nXCJcbiAgICAgIFtzZWFyY2hdPVwiYnBzT3BlbiAmJiBicHNTaG93U2VhcmNoXCJcbiAgICAgIFtzdWZmaXhJY29uXT1cImJwc1N1ZmZpeEljb25cIlxuICAgICAgW2ZlZWRiYWNrSWNvbl09XCJmZWVkYmFja0ljb25UcGxcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZmVlZGJhY2tJY29uVHBsPlxuICAgICAgICA8YnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uICpuZ0lmPVwiaGFzRmVlZGJhY2sgJiYgISFzdGF0dXNcIiBbc3RhdHVzXT1cInN0YXR1c1wiPjwvYnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Jwcy1zZWxlY3QtYXJyb3c+XG5cbiAgICA8YnBzLXNlbGVjdC1jbGVhclxuICAgICAgKm5nSWY9XCJicHNBbGxvd0NsZWFyICYmICFicHNEaXNhYmxlZCAmJiBsaXN0T2ZWYWx1ZS5sZW5ndGhcIlxuICAgICAgW2NsZWFySWNvbl09XCJicHNDbGVhckljb25cIlxuICAgICAgKGNsZWFyKT1cIm9uQ2xlYXJTZWxlY3Rpb24oKVwiXG4gICAgPjwvYnBzLXNlbGVjdC1jbGVhcj5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJicHNCYWNrZHJvcFwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIiRhbnkoYnBzRHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gbnVsbCA6IHRyaWdnZXJXaWR0aClcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCIkYW55KGJwc0Ryb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA/IHRyaWdnZXJXaWR0aCA6IG51bGwpXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LXNlbGVjdC1kcm9wZG93bidcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQYW5lbENsYXNzXT1cImJwc0Ryb3Bkb3duQ2xhc3NOYW1lIVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiYnBzT3BlblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXG4gICAgICAoZGV0YWNoKT1cInNldE9wZW5TdGF0ZShmYWxzZSlcIlxuICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGJwcy1vcHRpb24tY29udGFpbmVyXG4gICAgICAgIFtuZ1N0eWxlXT1cImJwc0Ryb3Bkb3duU3R5bGVcIlxuICAgICAgICBbaXRlbVNpemVdPVwiYnBzT3B0aW9uSGVpZ2h0UHhcIlxuICAgICAgICBbbWF4SXRlbUxlbmd0aF09XCJicHNPcHRpb25PdmVyZmxvd1NpemVcIlxuICAgICAgICBbbWF0Y2hXaWR0aF09XCJicHNEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tTGVmdF09XCJkcm9wRG93blBvc2l0aW9uID09PSAnYm90dG9tTGVmdCdcIlxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdF09XCJkcm9wRG93blBvc2l0aW9uID09PSAndG9wTGVmdCdcIlxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbVJpZ2h0J1wiXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BSaWdodF09XCJkcm9wRG93blBvc2l0aW9uID09PSAndG9wUmlnaHQnXCJcbiAgICAgICAgW0BzbGlkZU1vdGlvbl09XCInZW50ZXInXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW2xpc3RPZkNvbnRhaW5lckl0ZW1dPVwibGlzdE9mQ29udGFpbmVySXRlbVwiXG4gICAgICAgIFttZW51SXRlbVNlbGVjdGVkSWNvbl09XCJicHNNZW51SXRlbVNlbGVjdGVkSWNvblwiXG4gICAgICAgIFtub3RGb3VuZENvbnRlbnRdPVwiYnBzTm90Rm91bmRDb250ZW50XCJcbiAgICAgICAgW2FjdGl2YXRlZFZhbHVlXT1cImFjdGl2YXRlZFZhbHVlXCJcbiAgICAgICAgW2xpc3RPZlNlbGVjdGVkVmFsdWVdPVwibGlzdE9mVmFsdWVcIlxuICAgICAgICBbZHJvcGRvd25SZW5kZXJdPVwiYnBzRHJvcGRvd25SZW5kZXJcIlxuICAgICAgICBbY29tcGFyZVdpdGhdPVwiY29tcGFyZVdpdGhcIlxuICAgICAgICBbbW9kZV09XCJicHNNb2RlXCJcbiAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAoaXRlbUNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudClcIlxuICAgICAgICAoc2Nyb2xsVG9Cb3R0b20pPVwiYnBzU2Nyb2xsVG9Cb3R0b20uZW1pdCgpXCJcbiAgICAgID48L2Jwcy1vcHRpb24tY29udGFpbmVyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1zZWxlY3QnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pbi1mb3JtLWl0ZW1dJzogJyEhbnpGb3JtU3RhdHVzU2VydmljZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXSc6ICdicHNTaXplID09PSBcImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnYnBzU2l6ZSA9PT0gXCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2hvdy1hcnJvd10nOiBgYnBzU2hvd0Fycm93YCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJzogJ2Jwc0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2hvdy1zZWFyY2hdJzogYChicHNTaG93U2VhcmNoIHx8IGJwc01vZGUgIT09ICdkZWZhdWx0JykgJiYgIWJwc0Rpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2Jwc0FsbG93Q2xlYXInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1ib3JkZXJsZXNzXSc6ICdicHNCb3JkZXJsZXNzJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nOiAnYnBzT3BlbicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWZvY3VzZWRdJzogJ2Jwc09wZW4gfHwgZm9jdXNlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNpbmdsZV0nOiBgYnBzTW9kZSA9PT0gJ2RlZmF1bHQnYCxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbXVsdGlwbGVdJzogYGJwc01vZGUgIT09ICdkZWZhdWx0J2AsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBbGxvd0NsZWFyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNCb3JkZXJsZXNzOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNTaG93U2VhcmNoOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBdXRvRm9jdXM6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0F1dG9DbGVhclNlYXJjaFZhbHVlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNTZXJ2ZXJTZWFyY2g6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNPcGVuOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgYnBzSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNTaXplOiBOelNlbGVjdFNpemVUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBicHNTdGF0dXM6IE56U3RhdHVzID0gJyc7XG4gIEBJbnB1dCgpIGJwc09wdGlvbkhlaWdodFB4ID0gMjM7XG4gIEBJbnB1dCgpIGJwc09wdGlvbk92ZXJmbG93U2l6ZSA9IDg7XG4gIEBJbnB1dCgpIGJwc0Ryb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xuICBASW5wdXQoKSBicHNEcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGJwc05vdEZvdW5kQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgYnBzUGxhY2VIb2xkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYnBzUGxhY2VtZW50OiBOelNlbGVjdFBsYWNlbWVudFR5cGUgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYnBzTWF4VGFnQ291bnQgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgYnBzRHJvcGRvd25SZW5kZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYnBzQ3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UgfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KClcbiAgQFdpdGhDb25maWc8VGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGw+KClcbiAgYnBzU3VmZml4SWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNDbGVhckljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYnBzUmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIGJwc01heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTYWZlQW55W10gfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYnBzTWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBASW5wdXQoKSBicHNNb2RlOiBOelNlbGVjdE1vZGVUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBicHNGaWx0ZXJPcHRpb246IE56RmlsdGVyT3B0aW9uVHlwZSA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gYm9vbGVhbiA9IChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBbGxvd0NsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnPGJvb2xlYW4+KCkgQElucHV0Qm9vbGVhbigpIGJwc0JvcmRlcmxlc3MgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Nob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0F1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VsZWN0T25UYWIgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWc8Ym9vbGVhbj4oKSBASW5wdXRCb29sZWFuKCkgYnBzQmFja2Ryb3AgPSBmYWxzZTtcbiAgQElucHV0KCkgYnBzT3B0aW9uczogTnpTZWxlY3RPcHRpb25JbnRlcmZhY2VbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBicHNTaG93QXJyb3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9icHNTaG93QXJyb3cgPSB2YWx1ZTtcbiAgfVxuICBnZXQgYnBzU2hvd0Fycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9icHNTaG93QXJyb3cgPT09IHVuZGVmaW5lZCA/IHRoaXMuYnBzTW9kZSA9PT0gJ2RlZmF1bHQnIDogdGhpcy5fYnBzU2hvd0Fycm93O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbiwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgb3JpZ2luRWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IHRydWUgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSkgYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCE6IEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50ITogUXVlcnlMaXN0PEJwc09wdGlvbkNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCE6IFF1ZXJ5TGlzdDxCcHNPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGJwc09wdGlvbkdyb3VwQ29tcG9uZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudEVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGxpc3RPZlZhbHVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpTYWZlQW55W10+KFtdKTtcbiAgcHJpdmF0ZSBsaXN0T2ZUZW1wbGF0ZUl0ZW0kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXT4oW10pO1xuICBwcml2YXRlIGxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgaXNSZWFjdGl2ZURyaXZlbiA9IGZhbHNlO1xuICBwcml2YXRlIHZhbHVlOiBOelNhZmVBbnkgfCBOelNhZmVBbnlbXTtcbiAgcHJpdmF0ZSBfYnBzU2hvd0Fycm93OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHJlcXVlc3RJZDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgaXNOekRpc2FibGVGaXJzdENoYW5nZTogYm9vbGVhbiA9IHRydWU7XG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XG4gIGRyb3BEb3duUG9zaXRpb246IE56U2VsZWN0UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgbGlzdE9mQ29udGFpbmVySXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgbGlzdE9mVG9wSXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgYWN0aXZhdGVkVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xuICBsaXN0T2ZWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtdO1xuXG4gIC8vIHN0YXR1c1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtc2VsZWN0JztcbiAgc3RhdHVzQ2xzOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XG4gIHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cyA9ICcnO1xuICBoYXNGZWVkYmFjazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdlbmVyYXRlVGFnSXRlbSh2YWx1ZTogc3RyaW5nKTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnBzVmFsdWU6IHZhbHVlLFxuICAgICAgYnBzTGFiZWw6IHZhbHVlLFxuICAgICAgdHlwZTogJ2l0ZW0nXG4gICAgfTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuYnBzTW9kZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBpZiAodGhpcy5saXN0T2ZWYWx1ZS5sZW5ndGggPT09IDAgfHwgIXRoaXMuY29tcGFyZVdpdGgodGhpcy5saXN0T2ZWYWx1ZVswXSwgdmFsdWUpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoW3ZhbHVlXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5saXN0T2ZWYWx1ZS5maW5kSW5kZXgobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIHZhbHVlKSk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGxpc3RPZlZhbHVlQWZ0ZXJSZW1vdmVkID0gdGhpcy5saXN0T2ZWYWx1ZS5maWx0ZXIoKF8sIGkpID0+IGkgIT09IHRhcmdldEluZGV4KTtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShsaXN0T2ZWYWx1ZUFmdGVyUmVtb3ZlZCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdE9mVmFsdWUubGVuZ3RoIDwgdGhpcy5icHNNYXhNdWx0aXBsZUNvdW50KSB7XG4gICAgICAgIGNvbnN0IGxpc3RPZlZhbHVlQWZ0ZXJBZGRlZCA9IFsuLi50aGlzLmxpc3RPZlZhbHVlLCB2YWx1ZV07XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mVmFsdWVBZnRlckFkZGVkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLmJwc0F1dG9DbGVhclNlYXJjaFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uSXRlbURlbGV0ZShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gdGhpcy5saXN0T2ZWYWx1ZS5maWx0ZXIodiA9PiAhdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtLmJwc1ZhbHVlKSk7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZkNvbnRhaW5lckl0ZW0oKTogdm9pZCB7XG4gICAgbGV0IGxpc3RPZkNvbnRhaW5lckl0ZW0gPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbVxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpdGVtLmJwc0hpZGUpXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoIXRoaXMuYnBzU2VydmVyU2VhcmNoICYmIHRoaXMuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5icHNGaWx0ZXJPcHRpb24odGhpcy5zZWFyY2hWYWx1ZSwgaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGlmICh0aGlzLmJwc01vZGUgPT09ICd0YWdzJyAmJiB0aGlzLnNlYXJjaFZhbHVlKSB7XG4gICAgICBjb25zdCBtYXRjaGVkSXRlbSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmJwc0xhYmVsID09PSB0aGlzLnNlYXJjaFZhbHVlKTtcbiAgICAgIGlmICghbWF0Y2hlZEl0ZW0pIHtcbiAgICAgICAgY29uc3QgdGFnSXRlbSA9IHRoaXMuZ2VuZXJhdGVUYWdJdGVtKHRoaXMuc2VhcmNoVmFsdWUpO1xuICAgICAgICBsaXN0T2ZDb250YWluZXJJdGVtID0gW3RhZ0l0ZW0sIC4uLmxpc3RPZkNvbnRhaW5lckl0ZW1dO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gdGFnSXRlbS5icHNWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSBtYXRjaGVkSXRlbS5icHNWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWN0aXZhdGVkSXRlbSA9XG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmJwc0xhYmVsID09PSB0aGlzLnNlYXJjaFZhbHVlKSB8fFxuICAgICAgbGlzdE9mQ29udGFpbmVySXRlbS5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLmJwc1ZhbHVlLCB0aGlzLmFjdGl2YXRlZFZhbHVlKSkgfHxcbiAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5icHNWYWx1ZSwgdGhpcy5saXN0T2ZWYWx1ZVswXSkpIHx8XG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtWzBdO1xuICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSAoYWN0aXZhdGVkSXRlbSAmJiBhY3RpdmF0ZWRJdGVtLmJwc1ZhbHVlKSB8fCBudWxsO1xuICAgIGxldCBsaXN0T2ZHcm91cExhYmVsOiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbD4gPSBbXTtcbiAgICBpZiAodGhpcy5pc1JlYWN0aXZlRHJpdmVuKSB7XG4gICAgICBsaXN0T2ZHcm91cExhYmVsID0gWy4uLm5ldyBTZXQodGhpcy5icHNPcHRpb25zLmZpbHRlcihvID0+IG8uZ3JvdXBMYWJlbCkubWFwKG8gPT4gby5ncm91cExhYmVsISkpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCkge1xuICAgICAgICBsaXN0T2ZHcm91cExhYmVsID0gdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50Lm1hcChvID0+IG8uYnBzTGFiZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogaW5zZXJ0IGdyb3VwIGl0ZW0gKiovXG4gICAgbGlzdE9mR3JvdXBMYWJlbC5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdE9mQ29udGFpbmVySXRlbS5maW5kSW5kZXgoaXRlbSA9PiBsYWJlbCA9PT0gaXRlbS5ncm91cExhYmVsKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwSXRlbSA9IHsgZ3JvdXBMYWJlbDogbGFiZWwsIHR5cGU6ICdncm91cCcsIGtleTogbGFiZWwgfSBhcyBOelNlbGVjdEl0ZW1JbnRlcmZhY2U7XG4gICAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uc3BsaWNlKGluZGV4LCAwLCBncm91cEl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubGlzdE9mQ29udGFpbmVySXRlbSA9IFsuLi5saXN0T2ZDb250YWluZXJJdGVtXTtcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIGNsZWFySW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5icHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmNsZWFySW5wdXRWYWx1ZSgpO1xuICB9XG5cbiAgdXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mVmFsdWU6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gICAgY29uc3QgY292ZXJ0TGlzdFRvTW9kZWwgPSAobGlzdDogTnpTYWZlQW55W10sIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUpOiBOelNhZmVBbnlbXSB8IE56U2FmZUFueSA9PiB7XG4gICAgICBpZiAobW9kZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gbGlzdFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtb2RlbCA9IGNvdmVydExpc3RUb01vZGVsKGxpc3RPZlZhbHVlLCB0aGlzLmJwc01vZGUpO1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbCkge1xuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSA9IGxpc3RPZlZhbHVlO1xuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSQubmV4dChsaXN0T2ZWYWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlID0gbW9kZWw7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG9rZW5TZXBhcmF0ZShsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZNYXRjaGVkVmFsdWUgPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbVxuICAgICAgLmZpbHRlcihpdGVtID0+IGxpc3RPZkxhYmVsLmZpbmRJbmRleChsYWJlbCA9PiBsYWJlbCA9PT0gaXRlbS5icHNMYWJlbCkgIT09IC0xKVxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0uYnBzVmFsdWUpXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gdGhpcy5saXN0T2ZWYWx1ZS5maW5kSW5kZXgodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0pKSA9PT0gLTEpO1xuICAgIGlmICh0aGlzLmJwc01vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoWy4uLnRoaXMubGlzdE9mVmFsdWUsIC4uLmxpc3RPZk1hdGNoZWRWYWx1ZV0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icHNNb2RlID09PSAndGFncycpIHtcbiAgICAgIGNvbnN0IGxpc3RPZlVuTWF0Y2hlZExhYmVsID0gbGlzdE9mTGFiZWwuZmlsdGVyKFxuICAgICAgICBsYWJlbCA9PiB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmJwc0xhYmVsID09PSBsYWJlbCkgPT09IC0xXG4gICAgICApO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShbLi4udGhpcy5saXN0T2ZWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hlZFZhbHVlLCAuLi5saXN0T2ZVbk1hdGNoZWRMYWJlbF0pO1xuICAgIH1cbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYnBzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZCA9IHRoaXMubGlzdE9mQ29udGFpbmVySXRlbVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ2l0ZW0nKVxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpdGVtLmJwc0Rpc2FibGVkKTtcbiAgICBjb25zdCBhY3RpdmF0ZWRJbmRleCA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWQuZmluZEluZGV4KGl0ZW0gPT5cbiAgICAgIHRoaXMuY29tcGFyZVdpdGgoaXRlbS5icHNWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRWYWx1ZSlcbiAgICApO1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmJwc09wZW4gJiYgbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCAtIDE7XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWRbcHJlSW5kZXhdLmJwc1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmJwc09wZW4gJiYgbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZhdGVkSW5kZXggPCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCAtIDEgPyBhY3RpdmF0ZWRJbmRleCArIDEgOiAwO1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkW25leHRJbmRleF0uYnBzVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmJwc09wZW4pIHtcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5hY3RpdmF0ZWRWYWx1ZSkgJiYgYWN0aXZhdGVkSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm9uSXRlbUNsaWNrKHRoaXMuYWN0aXZhdGVkVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICAgIGlmICghdGhpcy5icHNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUQUI6XG4gICAgICAgIGlmICh0aGlzLmJwc1NlbGVjdE9uVGFiKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYnBzT3Blbikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMuYWN0aXZhdGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2sodGhpcy5hY3RpdmF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICAvKipcbiAgICAgICAgICogU2tpcCB0aGUgRVNDQVBFIHByb2Nlc3NpbmcsIGl0IHdpbGwgYmUgaGFuZGxlZCBpbiB7QGxpbmsgb25PdmVybGF5S2V5RG93bn0uXG4gICAgICAgICAqL1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICghdGhpcy5icHNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRPcGVuU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5icHNPcGVuICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5icHNPcGVuID0gdmFsdWU7XG4gICAgICB0aGlzLmJwc09wZW5DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZSgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25PcGVuQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICB9XG5cbiAgb25JbnB1dFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDb250YWluZXJJdGVtKCk7XG4gICAgdGhpcy5icHNPblNlYXJjaC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIG9uQ2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShbXSk7XG4gIH1cblxuICBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuYmx1cigpO1xuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbik7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcGxhY2VtZW50IGFzIE56U2VsZWN0UGxhY2VtZW50VHlwZTtcbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMub3JpZ2luRWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBjb25zdCB0cmlnZ2VyV2lkdGggPSB0aGlzLnRyaWdnZXJXaWR0aDtcbiAgICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJZCk7XG4gICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vIEJsaW5rIHRyaWdnZXJzIHN0eWxlIGFuZCBsYXlvdXQgcGlwZWxpbmVzIGFueXRpbWUgdGhlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKWAgaXMgY2FsbGVkLCB3aGljaCBtYXkgY2F1c2UgYVxuICAgICAgICAvLyBmcmFtZSBkcm9wLiBUaGF0J3Mgd2h5IGl0J3Mgc2NoZWR1bGVkIHRocm91Z2ggdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRvIHVubG9hZCB0aGUgY29tcG9zaXRlIHRocmVhZC5cbiAgICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLm9yaWdpbkVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgaWYgKHRyaWdnZXJXaWR0aCAhPT0gdGhpcy50cmlnZ2VyV2lkdGgpIHtcbiAgICAgICAgICAvLyBUaGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgd2lsbCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24sIGJ1dCB3ZSdyZSBpbnNpZGUgYW4gYE9uUHVzaGAgY29tcG9uZW50IHdoaWNoIHdvbid0IGhhdmVcbiAgICAgICAgICAvLyB0aGUgYENoZWNrc0VuYWJsZWRgIHN0YXRlLiBDYWxsaW5nIGBtYXJrRm9yQ2hlY2soKWAgd2lsbCBhbGxvdyBBbmd1bGFyIHRvIHJ1biB0aGUgY2hhbmdlIGRldGVjdGlvbiBmcm9tIHRoZSByb290IGNvbXBvbmVudFxuICAgICAgICAgIC8vIGRvd24gdG8gdGhlIGBuei1zZWxlY3RgLiBCdXQgd2UnbGwgdHJpZ2dlciBvbmx5IGxvY2FsIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIGB0cmlnZ2VyV2lkdGhgIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xuICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXk/Lm92ZXJsYXlSZWY/LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZGVzdHJveSQ6IE56RGVzdHJveVNlcnZpY2UsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbnpGb3JtU3RhdHVzU2VydmljZT86IE56Rm9ybVN0YXR1c1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1Ob1N0YXR1c1NlcnZpY2U/OiBOekZvcm1Ob1N0YXR1c1NlcnZpY2VcbiAgKSB7fVxuXG4gIHdyaXRlVmFsdWUobW9kZWxWYWx1ZTogTnpTYWZlQW55IHwgTnpTYWZlQW55W10pOiB2b2lkIHtcbiAgICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTQ5ODggKiovXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IG1vZGVsVmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBtb2RlbFZhbHVlO1xuICAgICAgY29uc3QgY292ZXJ0TW9kZWxUb0xpc3QgPSAobW9kZWw6IE56U2FmZUFueVtdIHwgTnpTYWZlQW55LCBtb2RlOiBOelNlbGVjdE1vZGVUeXBlKTogTnpTYWZlQW55W10gPT4ge1xuICAgICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICByZXR1cm4gW21vZGVsXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBsaXN0T2ZWYWx1ZSA9IGNvdmVydE1vZGVsVG9MaXN0KG1vZGVsVmFsdWUsIHRoaXMuYnBzTW9kZSk7XG4gICAgICB0aGlzLmxpc3RPZlZhbHVlID0gbGlzdE9mVmFsdWU7XG4gICAgICB0aGlzLmxpc3RPZlZhbHVlJC5uZXh0KGxpc3RPZlZhbHVlKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmJwc0Rpc2FibGVkID0gKHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSAmJiB0aGlzLmJwc0Rpc2FibGVkKSB8fCBkaXNhYmxlZDtcbiAgICB0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5icHNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGJwc09wZW4sIGJwc0Rpc2FibGVkLCBicHNPcHRpb25zLCBicHNTdGF0dXMsIGJwc1BsYWNlbWVudCB9ID0gY2hhbmdlcztcbiAgICBpZiAoYnBzT3Blbikge1xuICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UoKTtcbiAgICB9XG4gICAgaWYgKGJwc0Rpc2FibGVkICYmIHRoaXMuYnBzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGJwc09wdGlvbnMpIHtcbiAgICAgIHRoaXMuaXNSZWFjdGl2ZURyaXZlbiA9IHRydWU7XG4gICAgICBjb25zdCBsaXN0T2ZPcHRpb25zID0gdGhpcy5icHNPcHRpb25zIHx8IFtdO1xuICAgICAgY29uc3QgbGlzdE9mVHJhbnNmb3JtZWRJdGVtID0gbGlzdE9mT3B0aW9ucy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGVtcGxhdGU6IGl0ZW0ubGFiZWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGl0ZW0ubGFiZWwgOiBudWxsLFxuICAgICAgICAgIGJwc1RpdGxlOiB0aGlzLmdldFRpdGxlKGl0ZW0udGl0bGUsIGl0ZW0ubGFiZWwpLFxuICAgICAgICAgIGJwc0xhYmVsOiB0eXBlb2YgaXRlbS5sYWJlbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGl0ZW0ubGFiZWwgPT09ICdudW1iZXInID8gaXRlbS5sYWJlbCA6IG51bGwsXG4gICAgICAgICAgYnBzVmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgYnBzRGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQgfHwgZmFsc2UsXG4gICAgICAgICAgYnBzSGlkZTogaXRlbS5oaWRlIHx8IGZhbHNlLFxuICAgICAgICAgIGJwc0N1c3RvbUNvbnRlbnQ6IGl0ZW0ubGFiZWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZixcbiAgICAgICAgICBncm91cExhYmVsOiBpdGVtLmdyb3VwTGFiZWwgfHwgbnVsbCxcbiAgICAgICAgICB0eXBlOiAnaXRlbScsXG4gICAgICAgICAga2V5OiBpdGVtLmtleSA9PT0gdW5kZWZpbmVkID8gaXRlbS52YWx1ZSA6IGl0ZW0ua2V5XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJC5uZXh0KGxpc3RPZlRyYW5zZm9ybWVkSXRlbSk7XG4gICAgfVxuICAgIGlmIChicHNTdGF0dXMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHRoaXMuYnBzU3RhdHVzLCB0aGlzLmhhc0ZlZWRiYWNrKTtcbiAgICB9XG4gICAgaWYgKGJwc1BsYWNlbWVudCkge1xuICAgICAgY29uc3QgeyBjdXJyZW50VmFsdWUgfSA9IGJwc1BsYWNlbWVudDtcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IGN1cnJlbnRWYWx1ZSBhcyBOelNlbGVjdFBsYWNlbWVudFR5cGU7XG4gICAgICBjb25zdCBsaXN0T2ZQbGFjZW1lbnQgPSBbJ2JvdHRvbUxlZnQnLCAndG9wTGVmdCcsICdib3R0b21SaWdodCcsICd0b3BSaWdodCddO1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiBsaXN0T2ZQbGFjZW1lbnQuaW5jbHVkZXMoY3VycmVudFZhbHVlKSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbY3VycmVudFZhbHVlIGFzIFBPU0lUSU9OX1RZUEVdXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gbGlzdE9mUGxhY2VtZW50Lm1hcChlID0+IFBPU0lUSU9OX01BUFtlIGFzIFBPU0lUSU9OX1RZUEVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Rm9ybVN0YXR1c1NlcnZpY2U/LmZvcm1TdGF0dXNDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZSwgY3VyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZS5zdGF0dXMgPT09IGN1ci5zdGF0dXMgJiYgcHJlLmhhc0ZlZWRiYWNrID09PSBjdXIuaGFzRmVlZGJhY2s7XG4gICAgICAgIH0pLFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLm56Rm9ybU5vU3RhdHVzU2VydmljZSA/IHRoaXMubnpGb3JtTm9TdGF0dXNTZXJ2aWNlLm5vRm9ybVN0YXR1cyA6IG9ic2VydmFibGVPZihmYWxzZSkpLFxuICAgICAgICBtYXAoKFt7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSwgbm9TdGF0dXNdKSA9PiAoeyBzdGF0dXM6IG5vU3RhdHVzID8gJycgOiBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0pKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyhzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mb2N1c01vbml0b3JcbiAgICAgIC5tb25pdG9yKHRoaXMuaG9zdCwgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgdGhpcy5icHNCbHVyLmVtaXQoKTtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB0aGlzLmJwc0ZvY3VzLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZWYWx1ZSQsIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJF0pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChbbGlzdE9mU2VsZWN0ZWRWYWx1ZSwgbGlzdE9mVGVtcGxhdGVJdGVtXSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0T2ZUYWdJdGVtID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZVxuICAgICAgICAgIC5maWx0ZXIoKCkgPT4gdGhpcy5icHNNb2RlID09PSAndGFncycpXG4gICAgICAgICAgLmZpbHRlcih2YWx1ZSA9PiBsaXN0T2ZUZW1wbGF0ZUl0ZW0uZmluZEluZGV4KG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLmJwc1ZhbHVlLCB2YWx1ZSkpID09PSAtMSlcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgdmFsdWUgPT4gdGhpcy5saXN0T2ZUb3BJdGVtLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHZhbHVlKSkgfHwgdGhpcy5nZW5lcmF0ZVRhZ0l0ZW0odmFsdWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZUl0ZW0gPSBbLi4ubGlzdE9mVGVtcGxhdGVJdGVtLCAuLi5saXN0T2ZUYWdJdGVtXTtcbiAgICAgICAgdGhpcy5saXN0T2ZUb3BJdGVtID0gdGhpcy5saXN0T2ZWYWx1ZVxuICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICB2ID0+XG4gICAgICAgICAgICAgIFsuLi50aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbSwgLi4udGhpcy5saXN0T2ZUb3BJdGVtXS5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtLmJwc1ZhbHVlKSkhXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZkNvbnRhaW5lckl0ZW0oKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ3NlbGVjdCcpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XG4gICAgICBmcm9tRXZlbnQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKCh0aGlzLmJwc09wZW4gJiYgdGhpcy5icHNTaG93U2VhcmNoKSB8fCB0aGlzLmJwc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuc2V0T3BlblN0YXRlKCF0aGlzLmJwc09wZW4pKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gQ2FyZXRha2VyIG5vdGU6IHdlIGNvdWxkJ3ZlIGFkZGVkIHRoaXMgbGlzdGVuZXIgd2l0aGluIHRoZSB0ZW1wbGF0ZSBgKG92ZXJsYXlLZXlkb3duKT1cIi4uLlwiYCxcbiAgICAvLyBidXQgd2l0aCB0aGlzIGFwcHJvYWNoLCBpdCdsbCBydW4gY2hhbmdlIGRldGVjdGlvbiBvbiBlYWNoIGtleWJvYXJkIGNsaWNrLCBhbmQgYWxzbyBpdCdsbCBydW5cbiAgICAvLyBgbWFya0ZvckNoZWNrKClgIGludGVybmFsbHksIHdoaWNoIG1lYW5zIHRoZSB3aG9sZSBjb21wb25lbnQgdHJlZSAoc3RhcnRpbmcgZnJvbSB0aGUgcm9vdCBhbmRcbiAgICAvLyBnb2luZyBkb3duIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50KSB3aWxsIGJlIHJlLWNoZWNrZWQgYW5kIHVwZGF0ZWQgKGlmIG5lZWRlZCkuXG4gICAgLy8gVGhpcyBpcyBzYWZlIHRvIGRvIHRoYXQgbWFudWFsbHkgc2luY2UgYHNldE9wZW5TdGF0ZSgpYCBjYWxscyBgbWFya0ZvckNoZWNrKClgIGlmIG5lZWRlZC5cbiAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheUtleWRvd24ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFKSB7XG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNSZWFjdGl2ZURyaXZlbikge1xuICAgICAgbWVyZ2UodGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAgIC4uLltcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKSxcbiAgICAgICAgICAgICAgICAuLi50aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubWFwKG9wdGlvbiA9PiBvcHRpb24uY2hhbmdlcylcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpc3RPZk9wdGlvbkludGVyZmFjZSA9IHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGVtcGxhdGUsIGJwc0xhYmVsLCBicHNWYWx1ZSwgYnBzS2V5LCBicHNEaXNhYmxlZCwgYnBzSGlkZSwgYnBzQ3VzdG9tQ29udGVudCwgZ3JvdXBMYWJlbCB9ID0gaXRlbTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICBicHNMYWJlbCxcbiAgICAgICAgICAgICAgYnBzVmFsdWUsXG4gICAgICAgICAgICAgIGJwc0Rpc2FibGVkLFxuICAgICAgICAgICAgICBicHNIaWRlLFxuICAgICAgICAgICAgICBicHNDdXN0b21Db250ZW50LFxuICAgICAgICAgICAgICBncm91cExhYmVsLFxuICAgICAgICAgICAgICBicHNUaXRsZTogdGhpcy5nZXRUaXRsZShpdGVtLmJwc1RpdGxlLCBpdGVtLmJwc0xhYmVsKSxcbiAgICAgICAgICAgICAgdHlwZTogJ2l0ZW0nLFxuICAgICAgICAgICAgICBrZXk6IGJwc0tleSA9PT0gdW5kZWZpbmVkID8gYnBzVmFsdWUgOiBicHNLZXlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5saXN0T2ZUZW1wbGF0ZUl0ZW0kLm5leHQobGlzdE9mT3B0aW9uSW50ZXJmYWNlKTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmhvc3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGF0dXNTdHlsZXMoc3RhdHVzOiBOelZhbGlkYXRlU3RhdHVzLCBoYXNGZWVkYmFjazogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAvLyByZW5kZXIgc3RhdHVzIGlmIG56U3RhdHVzIGlzIHNldFxuICAgIHRoaXMuc3RhdHVzQ2xzID0gZ2V0U3RhdHVzQ2xhc3NOYW1lcyh0aGlzLnByZWZpeENscywgc3RhdHVzLCBoYXNGZWVkYmFjayk7XG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0dXNDbHMpLmZvckVhY2goc3RhdHVzID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXR1c0Nsc1tzdGF0dXNdKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIHN0YXR1cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZSh0aXRsZTogTnpTZWxlY3RPcHRpb25JbnRlcmZhY2VbJ3RpdGxlJ10sIGxhYmVsOiBOelNlbGVjdE9wdGlvbkludGVyZmFjZVsnbGFiZWwnXSk6IHN0cmluZyB7XG4gICAgbGV0IHJhd1RpdGxlOiBzdHJpbmcgPSB1bmRlZmluZWQhO1xuICAgIGlmICh0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbGFiZWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJhd1RpdGxlID0gbGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgcmF3VGl0bGUgPSB0aXRsZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiByYXdUaXRsZTtcbiAgfVxufVxuIl19