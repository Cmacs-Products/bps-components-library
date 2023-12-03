import { ChangeDetectionStrategy, Component, EventEmitter, Host, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { MenuService, NzIsMenuInsideDropDownToken } from 'ng-zorro-antd/menu';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/menu";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/no-animation";
import * as i4 from "@angular/common";
function BpsDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵlistener("@slideMotion.done", function BpsDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onAnimationEvent($event)); })("mouseenter", function BpsDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.setMouseState(true)); })("mouseleave", function BpsDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.setMouseState(false)); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-dropdown-placement-bottomLeft", ctx_r0.bpsPlacement === "bottomLeft")("ant-dropdown-placement-bottomCenter", ctx_r0.bpsPlacement === "bottomCenter")("ant-dropdown-placement-bottomRight", ctx_r0.bpsPlacement === "bottomRight")("ant-dropdown-placement-topLeft", ctx_r0.bpsPlacement === "topLeft")("ant-dropdown-placement-topCenter", ctx_r0.bpsPlacement === "topCenter")("ant-dropdown-placement-topRight", ctx_r0.bpsPlacement === "topRight")("ant-dropdown-placement-rightTop", ctx_r0.bpsPlacement === "rightTop")("ant-dropdown-rtl", ctx_r0.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r0.bpsOverlayClassName)("ngStyle", ctx_r0.bpsOverlayStyle)("@slideMotion", undefined)("@.disabled", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
const _c0 = ["*"];
export class BpsDropdownMenuComponent {
    onAnimationEvent(event) {
        this.animationStateChange$.emit(event);
    }
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.mouseState$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.animationStateChange$ = new EventEmitter();
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsPlacement = '';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function BpsDropdownMenuComponent_Factory(t) { return new (t || BpsDropdownMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsDropdownMenuComponent, selectors: [["bps-dropdown-menu"]], viewQuery: function BpsDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        } }, exportAs: ["bpsDropdownMenu"], features: [i0.ɵɵProvidersFeature([
                MenuService,
                /** menu is inside dropdown-menu component **/
                {
                    provide: NzIsMenuInsideDropDownToken,
                    useValue: true
                }
            ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "ant-dropdown", "bps-dropdown", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function BpsDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsDropdownMenuComponent_ng_template_0_Template, 2, 21, "ng-template");
        } }, dependencies: [i4.NgClass, i4.NgStyle, i3.NzNoAnimationDirective], styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsDropdownMenuComponent, [{
        type: Component,
        args: [{ selector: `bps-dropdown-menu`, exportAs: `bpsDropdownMenu`, animations: [slideMotion], providers: [
                    MenuService,
                    /** menu is inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useValue: true
                    }
                ], template: `
    <ng-template>
      <div
        class="ant-dropdown bps-dropdown"
        [class.ant-dropdown-placement-bottomLeft]="bpsPlacement === 'bottomLeft'"
        [class.ant-dropdown-placement-bottomCenter]="bpsPlacement === 'bottomCenter'"
        [class.ant-dropdown-placement-bottomRight]="bpsPlacement === 'bottomRight'"
        [class.ant-dropdown-placement-topLeft]="bpsPlacement === 'topLeft'"
        [class.ant-dropdown-placement-topCenter]="bpsPlacement === 'topCenter'"
        [class.ant-dropdown-placement-topRight]="bpsPlacement === 'topRight'"
        [class.ant-dropdown-placement-rightTop]="bpsPlacement === 'rightTop'"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="bpsOverlayClassName"
        [ngStyle]="bpsOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1.MenuService }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1kcm9wZG93bi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUdKLFFBQVEsRUFFUixXQUFXLEVBQ1gsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7SUFtQnhFLDhCQWtCQztJQUxDLGlOQUFxQixlQUFBLCtCQUF3QixDQUFBLElBQUMsdUtBR2hDLGVBQUEscUJBQWMsSUFBSSxDQUFDLENBQUEsSUFIYSx1S0FJaEMsZUFBQSxxQkFBYyxLQUFLLENBQUMsQ0FBQSxJQUpZO0lBTTlDLGtCQUF5QjtJQUMzQixpQkFBTTs7O0lBbEJKLHlGQUF5RSwrRUFBQSw2RUFBQSxxRUFBQSx5RUFBQSx1RUFBQSx1RUFBQSwwQ0FBQTtJQVF6RSxvREFBK0IsbUNBQUEsMkJBQUEsd0ZBQUEsdUZBQUE7OztBQWtCdkMsTUFBTSxPQUFPLHdCQUF3QjtJQWNuQyxnQkFBZ0IsQ0FBQyxLQUFxQjtRQUNwQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZ0I7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QyxRQUFROztzQkFDUixJQUFJOztzQkFBSSxRQUFRO3dCQTNCdUIsV0FBVztrQkFBcEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlLCBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xuaW1wb3J0IHsgZ2V0UGxhY2VtZW50TmFtZSB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcclxuXG5leHBvcnQgdHlwZSBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYGJwcy1kcm9wZG93bi1tZW51YCxcbiAgZXhwb3J0QXM6IGBicHNEcm9wZG93bk1lbnVgLFxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxuICBwcm92aWRlcnM6IFtcbiAgICBNZW51U2VydmljZSxcbiAgICAvKiogbWVudSBpcyBpbnNpZGUgZHJvcGRvd24tbWVudSBjb21wb25lbnQgKiovXG4gICAge1xuICAgICAgcHJvdmlkZTogTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuLFxuICAgICAgdXNlVmFsdWU6IHRydWVcbiAgICB9XG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImFudC1kcm9wZG93biBicHMtZHJvcGRvd25cIlxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImJwc1BsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnXCJcbiAgICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tQ2VudGVyXT1cImJwc1BsYWNlbWVudCA9PT0gJ2JvdHRvbUNlbnRlcidcIlxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21SaWdodF09XCJicHNQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCdcIlxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0XT1cImJwc1BsYWNlbWVudCA9PT0gJ3RvcExlZnQnXCJcbiAgICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wQ2VudGVyXT1cImJwc1BsYWNlbWVudCA9PT0gJ3RvcENlbnRlcidcIlxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BSaWdodF09XCJicHNQbGFjZW1lbnQgPT09ICd0b3BSaWdodCdcIlxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1yaWdodFRvcF09XCJicHNQbGFjZW1lbnQgPT09ICdyaWdodFRvcCdcIlxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiYnBzT3ZlcmxheUNsYXNzTmFtZVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImJwc092ZXJsYXlTdHlsZVwiXG4gICAgICAgIEBzbGlkZU1vdGlvblxuICAgICAgICAoQHNsaWRlTW90aW9uLmRvbmUpPVwib25BbmltYXRpb25FdmVudCgkZXZlbnQpXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2V0TW91c2VTdGF0ZSh0cnVlKVwiXG4gICAgICAgIChtb3VzZWxlYXZlKT1cInNldE1vdXNlU3RhdGUoZmFsc2UpXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50LmNzcyddLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xuICBtb3VzZVN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBpc0NoaWxkU3ViTWVudU9wZW4kID0gdGhpcy5uek1lbnVTZXJ2aWNlLmlzQ2hpbGRTdWJNZW51T3BlbiQ7XG4gIGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCA9IHRoaXMubnpNZW51U2VydmljZS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQ7XG4gIGFuaW1hdGlvblN0YXRlQ2hhbmdlJCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG4gIGJwc092ZXJsYXlDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xuICBicHNPdmVybGF5U3R5bGU6IEluZGV4YWJsZU9iamVjdCA9IHt9O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG5cbiAgYnBzUGxhY2VtZW50ID0gJyc7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgb25BbmltYXRpb25FdmVudChldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlJC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNldE1vdXNlU3RhdGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW91c2VTdGF0ZSQubmV4dCh2aXNpYmxlKTtcbiAgfVxuXG4gIHNldFZhbHVlPFQgZXh0ZW5kcyBrZXlvZiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IHRoaXNbVF0pOiB2b2lkIHtcbiAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=