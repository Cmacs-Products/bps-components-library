import { __decorate } from "tslib";
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, EMPTY, Subject, combineLatest, fromEvent, merge } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/platform";
const NZ_CONFIG_MODULE_NAME = 'dropDown';
const listOfPositions = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topRight,
    POSITION_MAP.topLeft
];
export class BpsDropDownDirective {
    setDropdownMenuValue(key, value) {
        if (this.bpsDropdownMenu) {
            this.bpsDropdownMenu.setValue(key, value);
        }
    }
    constructor(nzConfigService, elementRef, overlay, renderer, viewContainerRef, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withLockedPosition()
            .withTransformOriginOn('.ant-dropdown');
        this.inputVisible$ = new BehaviorSubject(false);
        this.bpsTrigger$ = new BehaviorSubject('hover');
        this.overlayClose$ = new Subject();
        this.bpsDropdownMenu = null;
        this.bpsTrigger = 'hover';
        this.bpsMatchWidthElement = null;
        this.bpsBackdrop = false;
        this.bpsClickHide = true;
        this.bpsDisabled = false;
        this.bpsVisible = false;
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsPlacement = 'bottomLeft';
        this.bpsVisibleChange = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.bpsDropdownMenu) {
            const nativeElement = this.elementRef.nativeElement;
            this.bpsDropdownMenu.bpsPlacement = this.bpsPlacement;
            /** host mouse state **/
            const hostMouseState$ = merge(fromEvent(nativeElement, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement, 'mouseleave').pipe(mapTo(false)));
            /** menu mouse state **/
            const menuMouseState$ = this.bpsDropdownMenu.mouseState$;
            /** merged mouse state **/
            const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
            /** host click state **/
            const hostClickState$ = fromEvent(nativeElement, 'click').pipe(map(() => !this.bpsVisible));
            /** visible state switch by bpsTrigger **/
            const visibleStateByTrigger$ = this.bpsTrigger$.pipe(switchMap(trigger => {
                if (trigger === 'hover') {
                    return mergedMouseState$;
                }
                else if (trigger === 'click') {
                    return hostClickState$;
                }
                else {
                    return EMPTY;
                }
            }));
            const descendantMenuItemClick$ = this.bpsDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.bpsClickHide), mapTo(false));
            const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.bpsDisabled));
            const visible$ = merge(this.inputVisible$, domTriggerVisible$);
            combineLatest([visible$, this.bpsDropdownMenu.isChildSubMenuOpen$])
                .pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$))
                .subscribe((visible) => {
                const element = this.bpsMatchWidthElement ? this.bpsMatchWidthElement.nativeElement : nativeElement;
                const triggerWidth = element.getBoundingClientRect().width;
                if (this.bpsVisible !== visible) {
                    this.bpsVisibleChange.emit(visible);
                }
                this.bpsVisible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!this.overlayRef) {
                        /** new overlay **/
                        this.overlayRef = this.overlay.create({
                            positionStrategy: this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: this.bpsBackdrop && this.bpsTrigger === 'click',
                            scrollStrategy: this.overlay.scrollStrategies.reposition()
                        });
                        merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef
                            .outsidePointerEvents()
                            .pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter(e => e.keyCode === ESCAPE && !hasModifierKey(e))))
                            .pipe(takeUntil(this.destroy$))
                            .subscribe(() => {
                            this.overlayClose$.next(false);
                        });
                    }
                    else {
                        /** update overlay config **/
                        const overlayConfig = this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                    }
                    /** open dropdown with animation **/
                    this.positionStrategy.withPositions([POSITION_MAP[this.bpsPlacement], ...listOfPositions]);
                    /** reset portal if needed **/
                    if (!this.portal || this.portal.templateRef !== this.bpsDropdownMenu.templateRef) {
                        this.portal = new TemplatePortal(this.bpsDropdownMenu.templateRef, this.viewContainerRef);
                    }
                    this.overlayRef.attach(this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (this.overlayRef) {
                        this.overlayRef.detach();
                    }
                }
            });
            this.bpsDropdownMenu.animationStateChange$.pipe(takeUntil(this.destroy$)).subscribe(event => {
                if (event.toState === 'void') {
                    if (this.overlayRef) {
                        this.overlayRef.dispose();
                    }
                    this.overlayRef = null;
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    ngOnChanges(changes) {
        const { bpsVisible, bpsDisabled, bpsOverlayClassName, bpsOverlayStyle, bpsTrigger } = changes;
        if (bpsTrigger) {
            this.bpsTrigger$.next(this.bpsTrigger);
        }
        if (bpsVisible) {
            this.inputVisible$.next(this.bpsVisible);
        }
        if (bpsDisabled) {
            const nativeElement = this.elementRef.nativeElement;
            if (this.bpsDisabled) {
                this.renderer.setAttribute(nativeElement, 'disabled', '');
                this.inputVisible$.next(false);
            }
            else {
                this.renderer.removeAttribute(nativeElement, 'disabled');
            }
        }
        if (bpsOverlayClassName) {
            this.setDropdownMenuValue('bpsOverlayClassName', this.bpsOverlayClassName);
        }
        if (bpsOverlayStyle) {
            this.setDropdownMenuValue('bpsOverlayStyle', this.bpsOverlayStyle);
        }
    }
    static { this.ɵfac = function BpsDropDownDirective_Factory(t) { return new (t || BpsDropDownDirective)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i3.Platform)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsDropDownDirective, selectors: [["", "bps-dropdown", ""]], hostAttrs: [1, "ant-dropdown-trigger"], inputs: { bpsDropdownMenu: "bpsDropdownMenu", bpsTrigger: "bpsTrigger", bpsMatchWidthElement: "bpsMatchWidthElement", bpsBackdrop: "bpsBackdrop", bpsClickHide: "bpsClickHide", bpsDisabled: "bpsDisabled", bpsVisible: "bpsVisible", bpsOverlayClassName: "bpsOverlayClassName", bpsOverlayStyle: "bpsOverlayStyle", bpsPlacement: "bpsPlacement" }, outputs: { bpsVisibleChange: "bpsVisibleChange" }, exportAs: ["bpsDropdown"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
__decorate([
    WithConfig(),
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsBackdrop", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsClickHide", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsVisible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsDropDownDirective, [{
        type: Directive,
        args: [{
                selector: '[bps-dropdown]',
                exportAs: 'bpsDropdown',
                host: {
                    class: 'ant-dropdown-trigger'
                }
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i2.Overlay }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i3.Platform }]; }, { bpsDropdownMenu: [{
            type: Input
        }], bpsTrigger: [{
            type: Input
        }], bpsMatchWidthElement: [{
            type: Input
        }], bpsBackdrop: [{
            type: Input
        }], bpsClickHide: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsVisible: [{
            type: Input
        }], bpsOverlayClassName: [{
            type: Input
        }], bpsOverlayStyle: [{
            type: Input
        }], bpsPlacement: [{
            type: Input
        }], bpsVisibleChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Jwcy1kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNHLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFJdkQsTUFBTSxxQkFBcUIsR0FBZ0IsVUFBVSxDQUFDO0FBRXRELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxXQUFXO0lBQ3hCLFlBQVksQ0FBQyxRQUFRO0lBQ3JCLFlBQVksQ0FBQyxPQUFPO0NBQ3JCLENBQUM7QUFTRixNQUFNLE9BQU8sb0JBQW9CO0lBK0IvQixvQkFBb0IsQ0FBMkMsR0FBTSxF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QUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDYSxnQkFBZ0I7a0JBQWxDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFU0NBUEUsIGhhc01vZGlmaWVyS2V5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIEVNUFRZLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgbWFwVG8sIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudCwgTnpQbGFjZW1lbnRUeXBlIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnZHJvcERvd24nO1xuXG5jb25zdCBsaXN0T2ZQb3NpdGlvbnMgPSBbXG4gIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LFxuICBQT1NJVElPTl9NQVAuYm90dG9tUmlnaHQsXG4gIFBPU0lUSU9OX01BUC50b3BSaWdodCxcbiAgUE9TSVRJT05fTUFQLnRvcExlZnRcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ticHMtZHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICdicHNEcm9wZG93bicsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1kcm9wZG93bi10cmlnZ2VyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc0Ryb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQmFja2Ryb3A6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0NsaWNrSGlkZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1Zpc2libGU6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIHBvcnRhbD86IFRlbXBsYXRlUG9ydGFsO1xuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgIC5wb3NpdGlvbigpXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXG4gICAgLndpdGhMb2NrZWRQb3NpdGlvbigpXG4gICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLmFudC1kcm9wZG93bicpO1xuICBwcml2YXRlIGlucHV0VmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHJpdmF0ZSBicHNUcmlnZ2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2NsaWNrJyB8ICdob3Zlcic+KCdob3ZlcicpO1xuICBwcml2YXRlIG92ZXJsYXlDbG9zZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBASW5wdXQoKSBicHNEcm9wZG93bk1lbnU6IEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XG4gIEBJbnB1dCgpIGJwc01hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnPGJvb2xlYW4+KCkgQElucHV0Qm9vbGVhbigpIGJwc0JhY2tkcm9wID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDbGlja0hpZGUgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Zpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgYnBzT3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGJwc092ZXJsYXlTdHlsZTogSW5kZXhhYmxlT2JqZWN0ID0ge307XG4gIEBJbnB1dCgpIGJwc1BsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzVmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHNldERyb3Bkb3duTWVudVZhbHVlPFQgZXh0ZW5kcyBrZXlvZiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudFtUXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJwc0Ryb3Bkb3duTWVudSkge1xuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJwc0Ryb3Bkb3duTWVudSkge1xuICAgICAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuYnBzUGxhY2VtZW50ID0gdGhpcy5icHNQbGFjZW1lbnQ7XG5cbiAgICAgIC8qKiBob3N0IG1vdXNlIHN0YXRlICoqL1xuICAgICAgY29uc3QgaG9zdE1vdXNlU3RhdGUkID0gbWVyZ2UoXG4gICAgICAgIGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8odHJ1ZSkpLFxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcbiAgICAgICk7XG4gICAgICAvKiogbWVudSBtb3VzZSBzdGF0ZSAqKi9cbiAgICAgIGNvbnN0IG1lbnVNb3VzZVN0YXRlJCA9IHRoaXMuYnBzRHJvcGRvd25NZW51Lm1vdXNlU3RhdGUkO1xuICAgICAgLyoqIG1lcmdlZCBtb3VzZSBzdGF0ZSAqKi9cbiAgICAgIGNvbnN0IG1lcmdlZE1vdXNlU3RhdGUkID0gbWVyZ2UobWVudU1vdXNlU3RhdGUkLCBob3N0TW91c2VTdGF0ZSQpO1xuICAgICAgLyoqIGhvc3QgY2xpY2sgc3RhdGUgKiovXG4gICAgICBjb25zdCBob3N0Q2xpY2tTdGF0ZSQgPSBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZShtYXAoKCkgPT4gIXRoaXMuYnBzVmlzaWJsZSkpO1xuICAgICAgLyoqIHZpc2libGUgc3RhdGUgc3dpdGNoIGJ5IGJwc1RyaWdnZXIgKiovXG4gICAgICBjb25zdCB2aXNpYmxlU3RhdGVCeVRyaWdnZXIkID0gdGhpcy5icHNUcmlnZ2VyJC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAodHJpZ2dlciA9PiB7XG4gICAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRNb3VzZVN0YXRlJDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHJldHVybiBob3N0Q2xpY2tTdGF0ZSQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgY29uc3QgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gdGhpcy5icHNEcm9wZG93bk1lbnUuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmJwc0NsaWNrSGlkZSksXG4gICAgICAgIG1hcFRvKGZhbHNlKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRvbVRyaWdnZXJWaXNpYmxlJCA9IG1lcmdlKHZpc2libGVTdGF0ZUJ5VHJpZ2dlciQsIGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCwgdGhpcy5vdmVybGF5Q2xvc2UkKS5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuYnBzRGlzYWJsZWQpXG4gICAgICApO1xuICAgICAgY29uc3QgdmlzaWJsZSQgPSBtZXJnZSh0aGlzLmlucHV0VmlzaWJsZSQsIGRvbVRyaWdnZXJWaXNpYmxlJCk7XG4gICAgICBjb21iaW5lTGF0ZXN0KFt2aXNpYmxlJCwgdGhpcy5icHNEcm9wZG93bk1lbnUuaXNDaGlsZFN1Yk1lbnVPcGVuJF0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoW3Zpc2libGUsIHN1Yl0pID0+IHZpc2libGUgfHwgc3ViKSxcbiAgICAgICAgICBhdWRpdFRpbWUoMTUwKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJwc01hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5icHNNYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbmF0aXZlRWxlbWVudDtcbiAgICAgICAgICBjb25zdCB0cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAgIGlmICh0aGlzLmJwc1Zpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnBzVmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmJwc1Zpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICAvKiogc2V0IHVwIG92ZXJsYXlSZWYgKiovXG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICAgICAgICAvKiogbmV3IG92ZXJsYXkgKiovXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdHJpZ2dlcldpZHRoLFxuICAgICAgICAgICAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzQmFja2Ryb3A6IHRoaXMuYnBzQmFja2Ryb3AgJiYgdGhpcy5icHNUcmlnZ2VyID09PSAnY2xpY2snLFxuICAgICAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCksXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmXG4gICAgICAgICAgICAgICAgICAub3V0c2lkZVBvaW50ZXJFdmVudHMoKVxuICAgICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyKChlOiBNb3VzZUV2ZW50KSA9PiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSksXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShlKSkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlDbG9zZSQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvKiogdXBkYXRlIG92ZXJsYXkgY29uZmlnICoqL1xuICAgICAgICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpO1xuICAgICAgICAgICAgICBvdmVybGF5Q29uZmlnLm1pbldpZHRoID0gdHJpZ2dlcldpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIG9wZW4gZHJvcGRvd24gd2l0aCBhbmltYXRpb24gKiovXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbUE9TSVRJT05fTUFQW3RoaXMuYnBzUGxhY2VtZW50XSwgLi4ubGlzdE9mUG9zaXRpb25zXSk7XG4gICAgICAgICAgICAvKiogcmVzZXQgcG9ydGFsIGlmIG5lZWRlZCAqKi9cbiAgICAgICAgICAgIGlmICghdGhpcy5wb3J0YWwgfHwgdGhpcy5wb3J0YWwudGVtcGxhdGVSZWYgIT09IHRoaXMuYnBzRHJvcGRvd25NZW51IS50ZW1wbGF0ZVJlZikge1xuICAgICAgICAgICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmJwc0Ryb3Bkb3duTWVudSEudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqIGRldGFjaCBvdmVybGF5UmVmIGlmIG5lZWRlZCAqKi9cbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51IS5hbmltYXRpb25TdGF0ZUNoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgICAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IGJwc1Zpc2libGUsIGJwc0Rpc2FibGVkLCBicHNPdmVybGF5Q2xhc3NOYW1lLCBicHNPdmVybGF5U3R5bGUsIGJwc1RyaWdnZXIgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGJwc1RyaWdnZXIpIHtcbiAgICAgIHRoaXMuYnBzVHJpZ2dlciQubmV4dCh0aGlzLmJwc1RyaWdnZXIpO1xuICAgIH1cbiAgICBpZiAoYnBzVmlzaWJsZSkge1xuICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQodGhpcy5icHNWaXNpYmxlKTtcbiAgICB9XG4gICAgaWYgKGJwc0Rpc2FibGVkKSB7XG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5icHNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgIHRoaXMuaW5wdXRWaXNpYmxlJC5uZXh0KGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYnBzT3ZlcmxheUNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnYnBzT3ZlcmxheUNsYXNzTmFtZScsIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmIChicHNPdmVybGF5U3R5bGUpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25NZW51VmFsdWUoJ2Jwc092ZXJsYXlTdHlsZScsIHRoaXMuYnBzT3ZlcmxheVN0eWxlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==