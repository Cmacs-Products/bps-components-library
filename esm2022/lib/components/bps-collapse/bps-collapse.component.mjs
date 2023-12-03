import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { WithConfig } from '../bps-tree/tree/config.service';
import * as i0 from "@angular/core";
import * as i1 from "../bps-tree/tree/config.service";
const _c0 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'collapse';
export class BpsCollapseComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.bpsAccordion && !collapse.bpsActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.bpsActive) {
                    item.bpsActive = false;
                    item.bpsActiveChange.emit(item.bpsActive);
                    item.markForCheck();
                }
            });
        }
        collapse.bpsActive = !collapse.bpsActive;
        collapse.bpsActiveChange.emit(collapse.bpsActive);
    }
    static { this.ɵfac = function BpsCollapseComponent_Factory(t) { return new (t || BpsCollapseComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsCollapseComponent, selectors: [["bps-collapse"]], inputs: { bpsAccordion: "bpsAccordion", bpsBordered: "bpsBordered" }, exportAs: ["bpsCollapse"], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "ant-collapse"]], template: function BpsCollapseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-collapse-borderless", !ctx.bpsBordered);
        } }, styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsBordered", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsCollapseComponent, [{
        type: Component,
        args: [{ selector: 'bps-collapse', exportAs: 'bpsCollapse', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\n  <ng-content></ng-content>\n</div>\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"] }]
    }], function () { return [{ type: i1.NzConfigService }]; }, { bpsAccordion: [{
            type: Input
        }], bpsBordered: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNvbGxhcHNlL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBSTlFLE1BQU0sd0JBQXdCLEdBQUcsVUFBVSxDQUFDO0FBaUI1QyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUozQyxtQ0FBOEIsR0FBZ0MsRUFBRSxDQUFDO0lBSWxCLENBQUM7SUFFeEQsUUFBUSxDQUFDLEtBQWdDO1FBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFnQztRQUMxQyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFtQztRQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVDLElBQUksQ0FBQyw4QkFBOEI7aUJBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7aUJBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDekMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7cUZBN0JVLG9CQUFvQjtvRUFBcEIsb0JBQW9COztZQ3ZCakMsOEJBQXlFO1lBQ3ZFLGtCQUF5QjtZQUMzQixpQkFBTTs7WUFGb0IsMkRBQThDOzs7QUR5QkE7SUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQztJQUFFLFlBQVksRUFBRTswREFBdUI7QUFDdkI7SUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztJQUFFLFlBQVksRUFBRTt5REFBc0I7dUZBSC9FLG9CQUFvQjtjQWZoQyxTQUFTOzJCQUNFLGNBQWMsWUFDZCxhQUFhLG1CQUVOLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7a0VBWWlDLFlBQVk7a0JBQWpGLEtBQUs7WUFDK0QsV0FBVztrQkFBL0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICcuLi9icHMtdHJlZS90cmVlL2NvbmZpZy5zZXJ2aWNlJztcclxuXG5pbXBvcnQgeyBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvbGxhcHNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWNvbGxhcHNlJyxcbiAgZXhwb3J0QXM6ICdicHNDb2xsYXBzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgYnBzLWNvbGxhcHNlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBzdHlsZVVybHM6IFsnLi9icHMtY29sbGFwc2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJwc0NvbGxhcHNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBsaXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQ6IEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgYnBzQWNjb3JkaW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBicHNCb3JkZXJlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHsgfVxuXG4gIGFkZFBhbmVsKHZhbHVlOiBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVQYW5lbCh2YWx1ZTogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LnNwbGljZSh0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5pbmRleE9mKHZhbHVlKSwgMSk7XG4gIH1cblxuICBjbGljayhjb2xsYXBzZTogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJwc0FjY29yZGlvbiAmJiAhY29sbGFwc2UuYnBzQWN0aXZlKSB7XG4gICAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudFxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gY29sbGFwc2UpXG4gICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmJwc0FjdGl2ZSkge1xuICAgICAgICAgICAgaXRlbS5icHNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW0uYnBzQWN0aXZlQ2hhbmdlLmVtaXQoaXRlbS5icHNBY3RpdmUpO1xuICAgICAgICAgICAgaXRlbS5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb2xsYXBzZS5icHNBY3RpdmUgPSAhY29sbGFwc2UuYnBzQWN0aXZlO1xuICAgIGNvbGxhcHNlLmJwc0FjdGl2ZUNoYW5nZS5lbWl0KGNvbGxhcHNlLmJwc0FjdGl2ZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbnQtY29sbGFwc2VcIiBbY2xhc3MuYW50LWNvbGxhcHNlLWJvcmRlcmxlc3NdPVwiIWJwc0JvcmRlcmVkXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19