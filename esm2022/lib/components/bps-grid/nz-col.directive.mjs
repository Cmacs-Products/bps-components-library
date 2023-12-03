import { Directive, Host, Input, Optional } from '@angular/core';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "./nz-row.directive";
export class NzColDirective {
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan),
            [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder),
            [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset),
            [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull),
            [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush),
            ...this.generateClass()
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    generateClass() {
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    const embedded = this[name];
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach(prefix => {
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`${this.prefixCls}-${sizeName}${prefixClass}${embedded[prefix]}`] =
                            embedded && isNotNil(embedded[prefix]);
                    });
                }
            }
        });
        return listClassMap;
    }
    constructor(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe(actualGutter => {
                this.renderer.setStyle(this.el, 'padding-left', `${actualGutter / 2}px`);
                this.renderer.setStyle(this.el, 'padding-right', `${actualGutter / 2}px`);
            });
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function NzColDirective_Factory(t) { return new (t || NzColDirective)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzRowDirective, 9), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzColDirective, selectors: [["", "nz-col", ""], ["nz-col"]], inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, exportAs: ["nzCol"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzColDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-col],nz-col',
                exportAs: 'nzCol',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.Renderer2 }]; }, { nzSpan: [{
            type: Input
        }], nzOrder: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzPush: [{
            type: Input
        }], nzPull: [{
            type: Input
        }], nzXs: [{
            type: Input
        }], nzSm: [{
            type: Input
        }], nzMd: [{
            type: Input
        }], nzLg: [{
            type: Input
        }], nzXl: [{
            type: Input
        }], nzXXl: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWdyaWQvbnotY29sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFpQnRGLE1BQU0sT0FBTyxjQUFjO0lBaUJ6Qix1R0FBdUc7SUFDdkcsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHO1lBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFNBQVMsSUFBSSxDQUFDLE1BQU0s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WSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUUsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7K0VBckZVLGNBQWM7b0VBQWQsY0FBYyx1U0FGZCxDQUFDLHdCQUF3QixDQUFDOzt1RkFFMUIsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztzQkF5REksUUFBUTs7c0JBQUksSUFBSTtnREFuRFYsTUFBTTtrQkFBZCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzSW50ZXJmYWNlIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcbiAgc3Bhbj86IG51bWJlcjtcbiAgcHVsbD86IG51bWJlcjtcbiAgcHVzaD86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBvcmRlcj86IG51bWJlcjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWNvbF0sbnotY29sJyxcbiAgZXhwb3J0QXM6ICduekNvbCcsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNvbCc7XG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgQElucHV0KCkgbnpTcGFuOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T3JkZXI6IG51bWJlcjtcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpQdXNoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UHVsbDogbnVtYmVyO1xuICBASW5wdXQoKSBuelhzOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelNtOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuek1kOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuekxnOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelhYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTcGFufWBdOiBpc05vdE5pbCh0aGlzLm56U3BhbiksXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW9yZGVyLSR7dGhpcy5uek9yZGVyfWBdOiBpc05vdE5pbCh0aGlzLm56T3JkZXIpLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcHVsbC0ke3RoaXMubnpQdWxsfWBdOiBpc05vdE5pbCh0aGlzLm56UHVsbCksXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXB1c2gtJHt0aGlzLm56UHVzaH1gXTogaXNOb3ROaWwodGhpcy5uelB1c2gpLFxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKCk6IG9iamVjdCB7XG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZTogQXJyYXk8a2V5b2YgTnpDb2xEaXJlY3RpdmU+ID0gWyduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnXTtcbiAgICBjb25zdCBsaXN0Q2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcbiAgICBsaXN0T2ZTaXplSW5wdXROYW1lLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzW25hbWVdKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbmFtZV0gPT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzW25hbWVdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFtgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzW25hbWVdfWBdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlbWJlZGRlZCA9IHRoaXNbbmFtZV0gYXMgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgICAgICAgICBjb25zdCBwcmVmaXhBcnJheTogQXJyYXk8a2V5b2YgRW1iZWRkZWRQcm9wZXJ0eT4gPSBbJ3NwYW4nLCAncHVsbCcsICdwdXNoJywgJ29mZnNldCcsICdvcmRlciddO1xuICAgICAgICAgIHByZWZpeEFycmF5LmZvckVhY2gocHJlZml4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWZpeENsYXNzID0gcHJlZml4ID09PSAnc3BhbicgPyAnLScgOiBgLSR7cHJlZml4fS1gO1xuICAgICAgICAgICAgbGlzdENsYXNzTWFwW2Ake3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfSR7cHJlZml4Q2xhc3N9JHtlbWJlZGRlZFtwcmVmaXhdfWBdID1cbiAgICAgICAgICAgICAgZW1iZWRkZWQgJiYgaXNOb3ROaWwoZW1iZWRkZWRbcHJlZml4XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSb3dEaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMubnpSb3dEaXJlY3RpdmUuYWN0dWFsR3V0dGVyJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgodGhpcy5uelJvd0RpcmVjdGl2ZS5hY3R1YWxHdXR0ZXIpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoYWN0dWFsR3V0dGVyID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCBgJHthY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncGFkZGluZy1yaWdodCcsIGAke2FjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=