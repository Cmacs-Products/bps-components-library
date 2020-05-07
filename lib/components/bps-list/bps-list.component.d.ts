import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzDirectionVHType, NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Observable } from 'rxjs';
import { NzListGrid } from 'ng-zorro-antd';
export declare type BpsListType = 'variation1' | 'variation2' | 'variation3' | 'variation4' | 'variation5' | 'variation6';
export declare class BpsListComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private updateHostClassService;
    bpsDataSource: any[];
    bpsBordered: boolean;
    bpsDisabled: boolean;
    bpsGrid: NzListGrid;
    bpsListType: BpsListType;
    bpsHeader: string | TemplateRef<void>;
    bpsFooter: string | TemplateRef<void>;
    bpsItemLayout: NzDirectionVHType;
    bpsRenderItem: TemplateRef<void>;
    bpsLoading: boolean;
    bpsLoadMore: TemplateRef<void>;
    bpsPagination: TemplateRef<void>;
    bpsSize: NzSizeLDSType;
    bpsSplit: boolean;
    bpsNoResult: string | TemplateRef<void>;
    private prefixCls;
    private _setClassMap;
    private itemLayoutNotifySource;
    get itemLayoutNotify$(): Observable<NzDirectionVHType>;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}