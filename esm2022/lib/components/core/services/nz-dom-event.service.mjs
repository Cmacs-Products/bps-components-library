/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class NzDomEventService {
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    registerResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: () => {
                    this.resizeSource.next();
                },
                countOfListeners: 0
            });
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    }
    unregisterResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStopListener(listener);
    }
    tryToStartListener(l, name) {
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular(() => {
            if (l.countOfListeners === 1) {
                l.unsubscribe = this.renderer.listen('window', name, l.handler);
            }
        });
    }
    tryToStopListener(l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            l.unsubscribe();
            l.unsubscribe = undefined;
        }
    }
    static { this.ɵfac = function NzDomEventService_Factory(t) { return new (t || NzDomEventService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NzDomEventService, factory: NzDomEventService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzDomEventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvcmUvc2VydmljZXMvbnotZG9tLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBVzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsWUFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo3RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFJL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNuQyxPQUFPLEVBQUUsR0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUNELGdCQUFnQixFQUFFLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLE9BQU87U0FDUjtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxDQUFXLEVBQUUsSUFBWTtRQUNsRCxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQixDQUFDLENBQVc7UUFDbkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDNUIsQ0FBQyxDQUFDLFdBQVksRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztrRkFqRFUsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNOzt1RkFFUCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBMaXN0ZW5lciB7XG4gIGhhbmRsZXIoZTogRXZlbnQpOiB2b2lkO1xuICB1bnN1YnNjcmliZT8oKTogdm9pZDtcbiAgY291bnRPZkxpc3RlbmVyczogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekRvbUV2ZW50U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzaXplU291cmNlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb21FdmVudExpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBMaXN0ZW5lcj4oKTtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeTIuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICByZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XG4gICAgICB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLnNldCgncmVzaXplJywge1xuICAgICAgICBoYW5kbGVyOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNpemVTb3VyY2UubmV4dCgpO1xuICAgICAgICB9LFxuICAgICAgICBjb3VudE9mTGlzdGVuZXJzOiAwXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XG4gICAgdGhpcy50cnlUb1N0YXJ0TGlzdGVuZXIobGlzdGVuZXIsICdyZXNpemUnKTtcblxuICAgIHJldHVybiB0aGlzLnJlc2l6ZVNvdXJjZS5waXBlKGF1ZGl0VGltZSgxNikpO1xuICB9XG5cbiAgdW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmdldCgncmVzaXplJykhO1xuICAgIHRoaXMudHJ5VG9TdG9wTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlUb1N0YXJ0TGlzdGVuZXIobDogTGlzdGVuZXIsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGwuY291bnRPZkxpc3RlbmVycyArPSAxO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDEpIHtcbiAgICAgICAgbC51bnN1YnNjcmliZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCBuYW1lLCBsLmhhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlUb1N0b3BMaXN0ZW5lcihsOiBMaXN0ZW5lcik6IHZvaWQge1xuICAgIGwuY291bnRPZkxpc3RlbmVycyAtPSAxO1xuICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDApIHtcbiAgICAgIGwudW5zdWJzY3JpYmUhKCk7XG4gICAgICBsLnVuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19