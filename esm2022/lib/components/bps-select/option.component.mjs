import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./option-group.component";
import * as i2 from "ng-zorro-antd/core/services";
function BpsOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class BpsOptionComponent {
    constructor(nzOptionGroupComponent, destroy$) {
        this.nzOptionGroupComponent = nzOptionGroupComponent;
        this.destroy$ = destroy$;
        this.changes = new Subject();
        this.groupLabel = null;
        this.bpsLabel = null;
        this.bpsValue = null;
        this.bpsDisabled = false;
        this.bpsHide = false;
        this.bpsCustomContent = false;
    }
    ngOnInit() {
        if (this.nzOptionGroupComponent) {
            this.nzOptionGroupComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
                this.groupLabel = this.nzOptionGroupComponent.bpsLabel;
            });
        }
    }
    ngOnChanges() {
        this.changes.next();
    }
    static { this.ɵfac = function BpsOptionComponent_Factory(t) { return new (t || BpsOptionComponent)(i0.ɵɵdirectiveInject(i1.BpsOptionGroupComponent, 8), i0.ɵɵdirectiveInject(i2.NzDestroyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionComponent, selectors: [["bps-option"]], viewQuery: function BpsOptionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, inputs: { bpsTitle: "bpsTitle", bpsLabel: "bpsLabel", bpsValue: "bpsValue", bpsKey: "bpsKey", bpsDisabled: "bpsDisabled", bpsHide: "bpsHide", bpsCustomContent: "bpsCustomContent" }, exportAs: ["bpsOption"], features: [i0.ɵɵProvidersFeature([NzDestroyService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsHide", void 0);
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsCustomContent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option',
                exportAs: 'bpsOption',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzDestroyService],
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
            }]
    }], function () { return [{ type: i1.BpsOptionGroupComponent, decorators: [{
                type: Optional
            }] }, { type: i2.NzDestroyService }]; }, { template: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], bpsTitle: [{
            type: Input
        }], bpsLabel: [{
            type: Input
        }], bpsValue: [{
            type: Input
        }], bpsKey: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsHide: [{
            type: Input
        }], bpsCustomContent: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBR0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0lBWWpELGtCQUF5Qjs7O0FBSS9CLE1BQU0sT0FBTyxrQkFBa0I7SUFnQjdCLFlBQWdDLHNCQUErQyxFQUFVLFFBQTBCO1FBQW5GLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBeUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQVhuSCxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM5QixlQUFVLEdBQW9ELElBQUksQ0FBQztRQUcxRCxhQUFRLEdBQTJCLElBQUksQ0FBQztRQUN4QyxhQUFRLEdBQXFCLElBQUksQ0FBQztRQUVsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQUVvRSxDQUFDO0lBRXZILFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7bUZBNUJVLGtCQUFrQjtvRUFBbEIsa0JBQWtCOzJCQU9sQixXQUFXOzs7OzZQQWRYLENBQUMsZ0JBQWdCLENBQUM7O1lBRTNCLGdGQUVjOzs7QUFlUztJQUFmLFlBQVksRUFBRTt1REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7bURBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFOzREQUEwQjt1RkFkdkMsa0JBQWtCO2NBWjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdCLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7O3NCQWlCYyxRQUFRO3VEQVRxQixRQUFRO2tCQUFqRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDL0IsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNtQixnQkFBZ0I7a0JBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekRlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicHMtb3B0aW9uJyxcbiAgZXhwb3J0QXM6ICdicHNPcHRpb24nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTnpEZXN0cm95U2VydmljZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnBzT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0hpZGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0N1c3RvbUNvbnRlbnQ6IEJvb2xlYW5JbnB1dDtcblxuICBjaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZ3JvdXBMYWJlbDogc3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIEBJbnB1dCgpIGJwc1RpdGxlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgYnBzTGFiZWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBicHNWYWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGJwc0tleT86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNIaWRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDdXN0b21Db250ZW50ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBuek9wdGlvbkdyb3VwQ29tcG9uZW50OiBCcHNPcHRpb25Hcm91cENvbXBvbmVudCwgcHJpdmF0ZSBkZXN0cm95JDogTnpEZXN0cm95U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek9wdGlvbkdyb3VwQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0cnVlKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmdyb3VwTGFiZWwgPSB0aGlzLm56T3B0aW9uR3JvdXBDb21wb25lbnQuYnBzTGFiZWw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xuICB9XG59XG4iXX0=