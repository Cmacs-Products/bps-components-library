import { ChangeDetectionStrategy, Component, ContentChild, Input, isDevMode } from '@angular/core';
import { EMPTY, merge, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { BpsInputDirective } from './bps-input.directive';
import * as i0 from "@angular/core";
const _c0 = [[["textarea", "bps-input", ""]]];
const _c1 = ["textarea[bps-input]"];
export class BpsTextareaCountComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.bpsMaxCharacterCount = 0;
        this.bpsComputeCharacterCount = v => v.length;
        this.bpsFormatter = (c, m) => `${c}${m > 0 ? `/${m}` : ``}`;
        this.configChange$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngAfterContentInit() {
        if (!this.nzInputDirective && isDevMode()) {
            throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
        }
        if (this.nzInputDirective.ngControl) {
            const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
            merge(valueChanges, this.configChange$)
                .pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value))
                .subscribe(value => {
                this.setDataCount(value);
            });
        }
    }
    setDataCount(value) {
        const inputValue = isNotNil(value) ? String(value) : '';
        const currentCount = this.bpsComputeCharacterCount(inputValue);
        const dataCount = this.bpsFormatter(currentCount, this.bpsMaxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function BpsTextareaCountComponent_Factory(t) { return new (t || BpsTextareaCountComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTextareaCountComponent, selectors: [["bps-textarea-count"]], contentQueries: function BpsTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsInputDirective, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
        } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { bpsMaxCharacterCount: "bpsMaxCharacterCount", bpsComputeCharacterCount: "bpsComputeCharacterCount", bpsFormatter: "bpsFormatter" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function BpsTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTextareaCountComponent, [{
        type: Component,
        args: [{
                selector: 'bps-textarea-count',
                template: ` <ng-content select="textarea[bps-input]"></ng-content> `,
                host: {
                    class: 'ant-input-textarea-show-count'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzInputDirective: [{
            type: ContentChild,
            args: [BpsInputDirective, { static: true }]
        }], bpsMaxCharacterCount: [{
            type: Input
        }], bpsComputeCharacterCount: [{
            type: Input
        }], bpsFormatter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtaW5wdXQvdGV4dGFyZWEtY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFFWixLQUFLLEVBQ0wsU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFVMUQsTUFBTSxPQUFPLHlCQUF5QjtJQVNwQyxZQUFvQixRQUFtQixFQUFVLFVBQW1DO1FBQWhFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQVAzRSx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFDakMsNkJBQXdCLEdBQTBCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoRSxpQkFBWSxHQUF5QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTlGLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQUU4QyxDQUFDO0lBRXpGLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztTQUMzRjtRQUVELElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtZQUNuQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUM7WUFDM0UsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNwQyxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQWUsQ0FBQyxDQUMzRDtpQkFDQSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzswRkF6Q1UseUJBQXlCO29FQUF6Qix5QkFBeUI7d0NBQ3RCLGlCQUFpQjs7Ozs7O1lBUG5CLGtCQUFzRDs7O3VGQU12RCx5QkFBeUI7Y0FSckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSwwREFBMEQ7Z0JBQ3BFLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsK0JBQStCO2lCQUN2QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtxRkFFb0QsZ0JBQWdCO2tCQUFsRSxZQUFZO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUN4QyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBpc0Rldk1vZGUsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFTVBUWSwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgQnBzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtdGV4dGFyZWEtY291bnQnLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50IHNlbGVjdD1cInRleHRhcmVhW2Jwcy1pbnB1dF1cIj48L25nLWNvbnRlbnQ+IGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtaW5wdXQtdGV4dGFyZWEtc2hvdy1jb3VudCdcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNUZXh0YXJlYUNvdW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkKEJwc0lucHV0RGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBueklucHV0RGlyZWN0aXZlITogQnBzSW5wdXREaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgYnBzTWF4Q2hhcmFjdGVyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgYnBzQ29tcHV0ZUNoYXJhY3RlckNvdW50OiAodjogc3RyaW5nKSA9PiBudW1iZXIgPSB2ID0+IHYubGVuZ3RoO1xyXG4gIEBJbnB1dCgpIGJwc0Zvcm1hdHRlcjogKGN1cjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gc3RyaW5nID0gKGMsIG0pID0+IGAke2N9JHttID4gMCA/IGAvJHttfWAgOiBgYH1gO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ0NoYW5nZSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHsgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubnpJbnB1dERpcmVjdGl2ZSAmJiBpc0Rldk1vZGUoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tuei10ZXh0YXJlYS1jb3VudF06IENvdWxkIG5vdCBmaW5kIG1hdGNoaW5nIHRleHRhcmVhW256LWlucHV0XSBjaGlsZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5ueklucHV0RGlyZWN0aXZlLm5nQ29udHJvbCkge1xyXG4gICAgICBjb25zdCB2YWx1ZUNoYW5nZXMgPSB0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sLnZhbHVlQ2hhbmdlcyB8fCBFTVBUWTtcclxuICAgICAgbWVyZ2UodmFsdWVDaGFuZ2VzLCB0aGlzLmNvbmZpZ0NoYW5nZSQpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5ueklucHV0RGlyZWN0aXZlLm5nQ29udHJvbC52YWx1ZSksXHJcbiAgICAgICAgICBzdGFydFdpdGgodGhpcy5ueklucHV0RGlyZWN0aXZlLm5nQ29udHJvbC52YWx1ZSBhcyBzdHJpbmcpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhQ291bnQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0YUNvdW50KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpc05vdE5pbCh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogJyc7XHJcbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLmJwc0NvbXB1dGVDaGFyYWN0ZXJDb3VudChpbnB1dFZhbHVlKTtcclxuICAgIGNvbnN0IGRhdGFDb3VudCA9IHRoaXMuYnBzRm9ybWF0dGVyKGN1cnJlbnRDb3VudCwgdGhpcy5icHNNYXhDaGFyYWN0ZXJDb3VudCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2RhdGEtY291bnQnLCBkYXRhQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ0NoYW5nZSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19