import { AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeLDSType } from 'ng-zorro-antd/core';
import { BpsInputDirective } from './bps-input.directive';
export declare class BpsInputGroupComponent implements AfterContentInit {
    listOfNzInputDirective: QueryList<BpsInputDirective>;
    private _size;
    bpsAddOnBeforeIcon: NgClassType;
    bpsAddOnAfterIcon: NgClassType;
    bpsPrefixIcon: NgClassType;
    bpsSuffixIcon: NgClassType;
    bpsAddOnBefore: string | TemplateRef<void>;
    bpsAddOnAfter: string | TemplateRef<void>;
    bpsPrefix: string | TemplateRef<void>;
    bpsSuffix: string | TemplateRef<void>;
    bpsSearch: boolean;
    bpsCompact: boolean;
    set bpsSize(value: NzSizeLDSType);
    get bpsSize(): NzSizeLDSType;
    get isLarge(): boolean;
    get isSmall(): boolean;
    get isAffix(): boolean;
    get isAddOn(): boolean;
    get isAffixWrapper(): boolean;
    get isGroup(): boolean;
    get isLargeGroup(): boolean;
    get isLargeGroupWrapper(): boolean;
    get isLargeAffix(): boolean;
    get isLargeSearch(): boolean;
    get isSmallGroup(): boolean;
    get isSmallAffix(): boolean;
    get isSmallGroupWrapper(): boolean;
    get isSmallSearch(): boolean;
    updateChildrenInputSize(): void;
    ngAfterContentInit(): void;
}
