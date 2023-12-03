import { Directive, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./nz-modal-ref.class";
export class BpsModalFooterDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
    static { this.ɵfac = function BpsModalFooterDirective_Factory(t) { return new (t || BpsModalFooterDirective)(i0.ɵɵdirectiveInject(i1.NzModalRef, 8), i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsModalFooterDirective, selectors: [["", "bpsModalFooter", ""]], exportAs: ["bpsModalFooter"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[bpsModalFooter]',
                exportAs: 'bpsModalFooter'
            }]
    }], function () { return [{ type: i1.NzModalRef, decorators: [{
                type: Optional
            }] }, { type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLWZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1tb2RhbC9icHMtbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2pFLE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBZ0MsVUFBc0IsRUFBUyxXQUE0QjtRQUEzRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQ3pGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7d0ZBTFUsdUJBQXVCO29FQUF2Qix1QkFBdUI7O3VGQUF2Qix1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7O3NCQUVjLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ticHNNb2RhbEZvb3Rlcl0nLFxuICBleHBvcnRBczogJ2Jwc01vZGFsRm9vdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBCcHNNb2RhbEZvb3RlckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbnpNb2RhbFJlZjogTnpNb2RhbFJlZiwgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcbiAgICBpZiAodGhpcy5uek1vZGFsUmVmKSB7XG4gICAgICB0aGlzLm56TW9kYWxSZWYuZ2V0SW5zdGFuY2UoKS5zZXRGb290ZXJXaXRoVGVtcGxhdGUodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG59XG4iXX0=