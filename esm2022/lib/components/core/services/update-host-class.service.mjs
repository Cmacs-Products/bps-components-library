/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NzUpdateHostClassService {
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = { ...classMap };
        this.addClass(el, this.classMap, this.renderer);
    }
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
    constructor(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    static { this.ɵfac = function NzUpdateHostClassService_Factory(t) { return new (t || NzUpdateHostClassService)(i0.ɵɵinject(i0.RendererFactory2)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NzUpdateHostClassService, factory: NzUpdateHostClassService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzUpdateHostClassService, [{
        type: Injectable
    }], function () { return [{ type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQStCLE1BQU0sZUFBZSxDQUFDOztBQUt4RSxNQUFNLE9BQU8sd0JBQXdCO0lBSW5DLGVBQWUsQ0FBQyxFQUFlLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLFdBQVcsQ0FBQyxFQUFlLEVBQUUsUUFBMEIsRUFBRSxRQUFtQjtRQUNsRixLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sUUFBUSxDQUFDLEVBQWUsRUFBRSxRQUEwQixFQUFFLFFBQW1CO1FBQy9FLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsWUFBWSxnQkFBa0M7UUF6QnRDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUEwQnBCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO3lGQTVCVSx3QkFBd0I7dUVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0I7O3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdDbGFzc0ludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL25nLWNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB7XG4gIHByaXZhdGUgY2xhc3NNYXAgPSB7fTtcbiAgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICB1cGRhdGVIb3N0Q2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgICB0aGlzLmFkZENsYXNzKGVsLCB0aGlzLmNsYXNzTWFwLCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgICAgaWYgKGNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICAgIGlmIChjbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSAmJiBjbGFzc01hcFtpXSkge1xuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG59XG4iXX0=