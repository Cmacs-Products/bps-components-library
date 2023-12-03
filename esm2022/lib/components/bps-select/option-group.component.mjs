import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class BpsOptionGroupComponent {
    constructor() {
        this.bpsLabel = null;
        this.changes = new Subject();
    }
    ngOnChanges() {
        this.changes.next();
    }
    static { this.ɵfac = function BpsOptionGroupComponent_Factory(t) { return new (t || BpsOptionGroupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionGroupComponent, selectors: [["bps-option-group"]], inputs: { bpsLabel: "bpsLabel" }, exportAs: ["bpsOptionGroup"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option-group',
                exportAs: 'bpsOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], null, { bpsLabel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9vcHRpb24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFXL0IsTUFBTSxPQUFPLHVCQUF1QjtJQVBwQztRQVFXLGFBQVEsR0FBb0QsSUFBSSxDQUFDO1FBQzFFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0tBSS9CO0lBSEMsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzt3RkFMVSx1QkFBdUI7b0VBQXZCLHVCQUF1Qjs7WUFGdEIsa0JBQXlCOzs7dUZBRTFCLHVCQUF1QjtjQVBuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDO2dCQUVVLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLW9wdGlvbi1ncm91cCcsXG4gIGV4cG9ydEFzOiAnYnBzT3B0aW9uR3JvdXAnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgXG59KVxuZXhwb3J0IGNsYXNzIEJwc09wdGlvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYnBzTGFiZWw6IHN0cmluZyB8IG51bWJlciB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlcy5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==