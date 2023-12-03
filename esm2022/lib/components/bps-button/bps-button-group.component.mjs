import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
const _c0 = ["*"];
export class BpsButtonGroupComponent {
    get bpsSize() {
        return this._size;
    }
    set bpsSize(value) {
        this._size = value;
        this.setClassMap();
    }
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    setClassMap() {
        const prefixCls = 'ant-btn-group';
        const classMap = {
            [prefixCls]: true,
            [`ant-dropdown-button`]: this.isInDropdown,
            [`${prefixCls}-lg`]: this.bpsSize === 'large',
            [`${prefixCls}-sm`]: this.bpsSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    ngOnInit() {
        this.setClassMap();
    }
    static { this.ɵfac = function BpsButtonGroupComponent_Factory(t) { return new (t || BpsButtonGroupComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsButtonGroupComponent, selectors: [["bps-button-group"]], inputs: { bpsSize: "bpsSize" }, exportAs: ["bpsButtonGroup"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'bps-button-group', exportAs: 'bpsButtonGroup', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, providers: [NzUpdateHostClassService], template: "<ng-content></ng-content>\n" }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }]; }, { bpsSize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7OztBQVl0RixNQUFNLE9BQU8sdUJBQXVCO0lBSWxDLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVp0RyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQVlvRixDQUFDO0lBRTFHLFdBQVc7UUFDVCxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDbEMsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUk7WUFDakIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzFDLENBQUMsR0FBRyxTQUFTLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTztZQUM3QyxDQUFDLEdBQUcsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU87U0FDOUMsQ0FBQztRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzt3RkE3QlUsdUJBQXVCO29FQUF2Qix1QkFBdUIsb0lBSHZCLENBQUMsd0JBQXdCLENBQUM7O1lDWHZDLGtCQUF5Qjs7O3VGRGNaLHVCQUF1QjtjQVRuQyxTQUFTOzJCQUNFLGtCQUFrQixZQUNsQixnQkFBZ0IsbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSyxhQUNmLENBQUMsd0JBQXdCLENBQUM7b0dBUWpDLE9BQU87a0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtYnV0dG9uLWdyb3VwJyxcbiAgZXhwb3J0QXM6ICdicHNCdXR0b25Hcm91cCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJwc0J1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZTtcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGJwc1NpemUoKTogTnpTaXplTERTVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBzZXQgYnBzU2l6ZSh2YWx1ZTogTnpTaXplTERTVHlwZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4tZ3JvdXAnO1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW3ByZWZpeENsc106IHRydWUsXG4gICAgICBbYGFudC1kcm9wZG93bi1idXR0b25gXTogdGhpcy5pc0luRHJvcGRvd24sXG4gICAgICBbYCR7cHJlZml4Q2xzfS1sZ2BdOiB0aGlzLmJwc1NpemUgPT09ICdsYXJnZScsXG4gICAgICBbYCR7cHJlZml4Q2xzfS1zbWBdOiB0aGlzLmJwc1NpemUgPT09ICdzbWFsbCdcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=