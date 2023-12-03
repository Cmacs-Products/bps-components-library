import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { NzFormNoStatusService, NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { BooleanInput, NgClassInterface, NzSafeAny, NzStatus, NzValidateStatus, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { BpsOptionGroupComponent } from './option-group.component';
import { BpsOptionComponent } from './option.component';
import { BpsSelectTopControlComponent } from './select-top-control.component';
import { NzFilterOptionType, NzSelectItemInterface, NzSelectModeType, NzSelectOptionInterface, NzSelectPlacementType } from './select.types';
import * as i0 from "@angular/core";
export type NzSelectSizeType = 'large' | 'default' | 'small';
export declare class BpsSelectComponent implements ControlValueAccessor, OnInit, AfterContentInit, OnChanges, OnDestroy {
    private ngZone;
    private destroy$;
    nzConfigService: NzConfigService;
    private cdr;
    private host;
    private renderer;
    private platform;
    private focusMonitor;
    private directionality;
    noAnimation?: NzNoAnimationDirective;
    nzFormStatusService?: NzFormStatusService;
    private nzFormNoStatusService?;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_bpsAllowClear: BooleanInput;
    static ngAcceptInputType_bpsBorderless: BooleanInput;
    static ngAcceptInputType_bpsShowSearch: BooleanInput;
    static ngAcceptInputType_bpsLoading: BooleanInput;
    static ngAcceptInputType_bpsAutoFocus: BooleanInput;
    static ngAcceptInputType_bpsAutoClearSearchValue: BooleanInput;
    static ngAcceptInputType_bpsServerSearch: BooleanInput;
    static ngAcceptInputType_bpsDisabled: BooleanInput;
    static ngAcceptInputType_bpsOpen: BooleanInput;
    bpsId: string | null;
    bpsSize: NzSelectSizeType;
    bpsStatus: NzStatus;
    bpsOptionHeightPx: number;
    bpsOptionOverflowSize: number;
    bpsDropdownClassName: string[] | string | null;
    bpsDropdownMatchSelectWidth: boolean;
    bpsDropdownStyle: {
        [key: string]: string;
    } | null;
    bpsNotFoundContent: string | TemplateRef<NzSafeAny> | undefined;
    bpsPlaceHolder: string | TemplateRef<NzSafeAny> | null;
    bpsPlacement: NzSelectPlacementType | null;
    bpsMaxTagCount: number;
    bpsDropdownRender: TemplateRef<NzSafeAny> | null;
    bpsCustomTemplate: TemplateRef<{
        $implicit: NzSelectItemInterface;
    }> | null;
    bpsSuffixIcon: TemplateRef<NzSafeAny> | string | null;
    bpsClearIcon: TemplateRef<NzSafeAny> | null;
    bpsRemoveIcon: TemplateRef<NzSafeAny> | null;
    bpsMenuItemSelectedIcon: TemplateRef<NzSafeAny> | null;
    bpsTokenSeparators: string[];
    bpsMaxTagPlaceholder: TemplateRef<{
        $implicit: NzSafeAny[];
    }> | null;
    bpsMaxMultipleCount: number;
    bpsMode: NzSelectModeType;
    bpsFilterOption: NzFilterOptionType;
    compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
    bpsAllowClear: boolean;
    bpsBorderless: boolean;
    bpsShowSearch: boolean;
    bpsLoading: boolean;
    bpsAutoFocus: boolean;
    bpsAutoClearSearchValue: boolean;
    bpsServerSearch: boolean;
    bpsDisabled: boolean;
    bpsOpen: boolean;
    bpsSelectOnTab: boolean;
    bpsBackdrop: boolean;
    bpsOptions: NzSelectOptionInterface[];
    set bpsShowArrow(value: boolean);
    get bpsShowArrow(): boolean;
    readonly bpsOnSearch: EventEmitter<string>;
    readonly bpsScrollToBottom: EventEmitter<void>;
    readonly bpsOpenChange: EventEmitter<boolean>;
    readonly bpsBlur: EventEmitter<void>;
    readonly bpsFocus: EventEmitter<void>;
    originElement: ElementRef;
    cdkConnectedOverlay: CdkConnectedOverlay;
    bpsSelectTopControlComponent: BpsSelectTopControlComponent;
    listOfNzOptionComponent: QueryList<BpsOptionComponent>;
    listOfNzOptionGroupComponent: QueryList<BpsOptionGroupComponent>;
    bpsOptionGroupComponentElement: ElementRef;
    bpsSelectTopControlComponentElement: ElementRef;
    private listOfValue$;
    private listOfTemplateItem$;
    private listOfTagAndTemplateItem;
    private searchValue;
    private isReactiveDriven;
    private value;
    private _bpsShowArrow;
    private requestId;
    private isNzDisableFirstChange;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    dropDownPosition: NzSelectPlacementType;
    triggerWidth: number | null;
    listOfContainerItem: NzSelectItemInterface[];
    listOfTopItem: NzSelectItemInterface[];
    activatedValue: NzSafeAny | null;
    listOfValue: NzSafeAny[];
    focused: boolean;
    dir: Direction;
    positions: ConnectionPositionPair[];
    prefixCls: string;
    statusCls: NgClassInterface;
    status: NzValidateStatus;
    hasFeedback: boolean;
    generateTagItem(value: string): NzSelectItemInterface;
    onItemClick(value: NzSafeAny): void;
    onItemDelete(item: any): void;
    updateListOfContainerItem(): void;
    clearInput(): void;
    updateListOfValue(listOfValue: NzSafeAny[]): void;
    onTokenSeparate(listOfLabel: string[]): void;
    onKeyDown(e: KeyboardEvent): void;
    setOpenState(value: boolean): void;
    onOpenChange(): void;
    onInputValueChange(value: string): void;
    onClearSelection(): void;
    onClickOutside(event: MouseEvent): void;
    focus(): void;
    blur(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    constructor(ngZone: NgZone, destroy$: NzDestroyService, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, host: ElementRef<HTMLElement>, renderer: Renderer2, platform: Platform, focusMonitor: FocusMonitor, directionality: Directionality, noAnimation?: NzNoAnimationDirective, nzFormStatusService?: NzFormStatusService, nzFormNoStatusService?: NzFormNoStatusService);
    writeValue(modelValue: NzSafeAny | NzSafeAny[]): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private setStatusStyles;
    private getTitle;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectComponent, [null, null, null, null, null, null, null, null, { optional: true; }, { optional: true; host: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectComponent, "bps-select", ["bpsSelect"], { "bpsId": { "alias": "bpsId"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsStatus": { "alias": "bpsStatus"; "required": false; }; "bpsOptionHeightPx": { "alias": "bpsOptionHeightPx"; "required": false; }; "bpsOptionOverflowSize": { "alias": "bpsOptionOverflowSize"; "required": false; }; "bpsDropdownClassName": { "alias": "bpsDropdownClassName"; "required": false; }; "bpsDropdownMatchSelectWidth": { "alias": "bpsDropdownMatchSelectWidth"; "required": false; }; "bpsDropdownStyle": { "alias": "bpsDropdownStyle"; "required": false; }; "bpsNotFoundContent": { "alias": "bpsNotFoundContent"; "required": false; }; "bpsPlaceHolder": { "alias": "bpsPlaceHolder"; "required": false; }; "bpsPlacement": { "alias": "bpsPlacement"; "required": false; }; "bpsMaxTagCount": { "alias": "bpsMaxTagCount"; "required": false; }; "bpsDropdownRender": { "alias": "bpsDropdownRender"; "required": false; }; "bpsCustomTemplate": { "alias": "bpsCustomTemplate"; "required": false; }; "bpsSuffixIcon": { "alias": "bpsSuffixIcon"; "required": false; }; "bpsClearIcon": { "alias": "bpsClearIcon"; "required": false; }; "bpsRemoveIcon": { "alias": "bpsRemoveIcon"; "required": false; }; "bpsMenuItemSelectedIcon": { "alias": "bpsMenuItemSelectedIcon"; "required": false; }; "bpsTokenSeparators": { "alias": "bpsTokenSeparators"; "required": false; }; "bpsMaxTagPlaceholder": { "alias": "bpsMaxTagPlaceholder"; "required": false; }; "bpsMaxMultipleCount": { "alias": "bpsMaxMultipleCount"; "required": false; }; "bpsMode": { "alias": "bpsMode"; "required": false; }; "bpsFilterOption": { "alias": "bpsFilterOption"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "bpsAllowClear": { "alias": "bpsAllowClear"; "required": false; }; "bpsBorderless": { "alias": "bpsBorderless"; "required": false; }; "bpsShowSearch": { "alias": "bpsShowSearch"; "required": false; }; "bpsLoading": { "alias": "bpsLoading"; "required": false; }; "bpsAutoFocus": { "alias": "bpsAutoFocus"; "required": false; }; "bpsAutoClearSearchValue": { "alias": "bpsAutoClearSearchValue"; "required": false; }; "bpsServerSearch": { "alias": "bpsServerSearch"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsOpen": { "alias": "bpsOpen"; "required": false; }; "bpsSelectOnTab": { "alias": "bpsSelectOnTab"; "required": false; }; "bpsBackdrop": { "alias": "bpsBackdrop"; "required": false; }; "bpsOptions": { "alias": "bpsOptions"; "required": false; }; "bpsShowArrow": { "alias": "bpsShowArrow"; "required": false; }; }, { "bpsOnSearch": "bpsOnSearch"; "bpsScrollToBottom": "bpsScrollToBottom"; "bpsOpenChange": "bpsOpenChange"; "bpsBlur": "bpsBlur"; "bpsFocus": "bpsFocus"; }, ["listOfNzOptionComponent", "listOfNzOptionGroupComponent"], never, false, never>;
}