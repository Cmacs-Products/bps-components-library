import { ElementRef, EventEmitter, NgZone, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class BpsOptionItemComponent implements OnChanges, OnInit {
    private elementRef;
    private ngZone;
    private destroy$;
    selected: boolean;
    activated: boolean;
    grouped: boolean;
    customContent: boolean;
    template: TemplateRef<NzSafeAny> | null;
    disabled: boolean;
    showState: boolean;
    title?: string | number | null;
    label: string | number | null;
    value: NzSafeAny | null;
    activatedValue: NzSafeAny | null;
    listOfSelectedValue: NzSafeAny[];
    icon: TemplateRef<NzSafeAny> | null;
    compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
    readonly itemClick: EventEmitter<any>;
    readonly itemHover: EventEmitter<any>;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, destroy$: NzDestroyService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionItemComponent, "bps-option-item", never, { "grouped": { "alias": "grouped"; "required": false; }; "customContent": { "alias": "customContent"; "required": false; }; "template": { "alias": "template"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showState": { "alias": "showState"; "required": false; }; "title": { "alias": "title"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "activatedValue": { "alias": "activatedValue"; "required": false; }; "listOfSelectedValue": { "alias": "listOfSelectedValue"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; }, { "itemClick": "itemClick"; "itemHover": "itemHover"; }, never, never, false, never>;
}
