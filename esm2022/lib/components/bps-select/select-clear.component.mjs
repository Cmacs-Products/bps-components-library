import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
function BpsSelectClearComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 1);
} }
export class BpsSelectClearComponent {
    constructor() {
        this.clearIcon = null;
        this.clear = new EventEmitter();
    }
    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.clear.emit(e);
    }
    static { this.ɵfac = function BpsSelectClearComponent_Factory(t) { return new (t || BpsSelectClearComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectClearComponent, selectors: [["bps-select-clear"]], hostAttrs: [1, "ant-select-clear"], hostBindings: function BpsSelectClearComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function BpsSelectClearComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { clearIcon: "clearIcon" }, outputs: { clear: "clear" }, decls: 1, vars: 2, consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]], template: function BpsSelectClearComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectClearComponent_span_0_Template, 1, 0, "span", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
        } }, dependencies: [i1.NgIf, i2.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectClearComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-clear',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span
      nz-icon
      nzType="close-circle"
      nzTheme="fill"
      *ngIf="!clearIcon; else clearIcon"
      class="ant-select-close-icon"
    ></span>
  `,
                host: {
                    class: 'ant-select-clear',
                    '(click)': 'onClick($event)'
                }
            }]
    }], function () { return []; }, { clearIcon: [{
            type: Input
        }], clear: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNsZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtY2xlYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFTbkIsMEJBTVE7O0FBT1osTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUhTLGNBQVMsR0FBa0MsSUFBSSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBRTNDLENBQUM7SUFFaEIsT0FBTyxDQUFDLENBQWE7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO3dGQVZVLHVCQUF1QjtvRUFBdkIsdUJBQXVCOzhHQUF2QixtQkFBZTs7WUFieEIsMEVBTVE7O1lBRkwscUNBQWtCLDJCQUFBOzs7dUZBU1osdUJBQXVCO2NBbEJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLFNBQVMsRUFBRSxpQkFBaUI7aUJBQzdCO2FBQ0Y7c0NBRVUsU0FBUztrQkFBakIsS0FBSztZQUNhLEtBQUs7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1jbGVhcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICBuei1pY29uXG4gICAgICBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIlxuICAgICAgbnpUaGVtZT1cImZpbGxcIlxuICAgICAgKm5nSWY9XCIhY2xlYXJJY29uOyBlbHNlIGNsZWFySWNvblwiXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3QtY2xvc2UtaWNvblwiXG4gICAgPjwvc3Bhbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1jbGVhcicsXG4gICAgJyhjbGljayknOiAnb25DbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJwc1NlbGVjdENsZWFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2xlYXJJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jbGVhci5lbWl0KGUpO1xuICB9XG59XG4iXX0=