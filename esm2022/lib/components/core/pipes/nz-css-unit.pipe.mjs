import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NzToCssUnitPipe {
    transform(value, defaultUnit = 'px') {
        const formatted = +value; // force convert
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
    static { this.ɵfac = function NzToCssUnitPipe_Factory(t) { return new (t || NzToCssUnitPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "nzToCssUnit", type: NzToCssUnitPipe, pure: true }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzToCssUnitPipe, [{
        type: Pipe,
        args: [{
                name: 'nzToCssUnit'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29yZS9waXBlcy9uei1jc3MtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsS0FBc0IsRUFBRSxjQUFzQixJQUFJO1FBQzFELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCO1FBQzFDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxXQUFXLEVBQUUsQ0FBQztJQUN0RSxDQUFDO2dGQUpVLGVBQWU7cUZBQWYsZUFBZTs7dUZBQWYsZUFBZTtjQUgzQixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ256VG9Dc3NVbml0J1xufSlcbmV4cG9ydCBjbGFzcyBOelRvQ3NzVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGRlZmF1bHRVbml0OiBzdHJpbmcgPSAncHgnKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSArdmFsdWU7IC8vIGZvcmNlIGNvbnZlcnRcbiAgICByZXR1cm4gaXNOYU4oZm9ybWF0dGVkKSA/IGAke3ZhbHVlfWAgOiBgJHtmb3JtYXR0ZWR9JHtkZWZhdWx0VW5pdH1gO1xuICB9XG59XG4iXX0=