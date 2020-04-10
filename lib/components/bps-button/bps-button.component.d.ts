import { ContentObserver } from '@angular/cdk/observers';
import { AfterContentInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { NzConfigService, NzSizeLDSType, NzUpdateHostClassService, NzWaveConfig, NzWaveDirective } from 'ng-zorro-antd/core';
export declare type NzButtonType = 'primary' | 'dashed' | 'danger' | 'default' | 'link' | 'variation-1' | 'variation-2' | 'variation-3' | 'variation-4' | 'variation-5' | 'variation-6' | 'variation-7' | 'variation-8' | 'variation-9' | 'variation-10' | 'variation-11' | 'variation-12' | 'variation-13' | 'variation-14' | 'variation-15' | 'variation-16' | 'variation-17' | 'variation-18' | 'variation-19' | 'variation-20';
export declare type NzButtonShape = 'circle' | 'round' | null;
export declare class BpsButtonComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {
    private elementRef;
    private cdr;
    private renderer;
    private contentObserver;
    private nzUpdateHostClassService;
    private ngZone;
    nzConfigService: NzConfigService;
    private waveConfig;
    private animationType;
    contentElement: ElementRef;
    listOfIconElement: QueryList<ElementRef>;
    nzWave: NzWaveDirective;
    bpsBlock: boolean;
    bpsGhost: boolean;
    bpsSearch: boolean;
    bpsLoading: boolean;
    bpsType: NzButtonType;
    bpsShape: NzButtonShape;
    bpsSize: NzSizeLDSType;
    readonly el: HTMLElement;
    isInDropdown: boolean;
    private iconElement;
    private iconOnly;
    private destroy$;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap(): void;
    updateIconDisplay(value: boolean): void;
    checkContent(): void;
    moveIcon(): void;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, contentObserver: ContentObserver, nzUpdateHostClassService: NzUpdateHostClassService, ngZone: NgZone, nzConfigService: NzConfigService, waveConfig: NzWaveConfig, animationType: string);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
