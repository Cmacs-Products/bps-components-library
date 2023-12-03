import { Directive, Host, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../bps-button/bps-button-group.component";
export class BpsDropdownButtonDirective {
    constructor(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    }
    static { this.ɵfac = function BpsDropdownButtonDirective_Factory(t) { return new (t || BpsDropdownButtonDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BpsButtonGroupComponent, 9), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsDropdownButtonDirective, selectors: [["", "bps-button", "", "bps-dropdown", ""]] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsDropdownButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[bps-button][bps-dropdown]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.BpsButtonGroupComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Ryb3Bkb3duLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsSUFBSSxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2hHLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFDVSxRQUFtQixFQUNDLHNCQUErQyxFQUNuRSxVQUFzQjtRQUZ0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF5QjtRQUNuRSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFDSixlQUFlO1FBQ2IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxhQUFhLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzJGQVhVLDBCQUEwQjtvRUFBMUIsMEJBQTBCOzt1RkFBMUIsMEJBQTBCO2NBSHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDOztzQkFJSSxJQUFJOztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcHNCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Jwcy1idXR0b25dW2Jwcy1kcm9wZG93bl0nXG59KVxuZXhwb3J0IGNsYXNzIEJwc0Ryb3Bkb3duQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDogQnBzQnV0dG9uR3JvdXBDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge31cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGlmICh0aGlzLm56QnV0dG9uR3JvdXBDb21wb25lbnQgJiYgcGFyZW50RWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhwYXJlbnRFbGVtZW50LCAnYW50LWRyb3Bkb3duLWJ1dHRvbicpO1xuICAgIH1cbiAgfVxufVxuIl19