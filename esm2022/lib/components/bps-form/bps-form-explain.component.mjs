import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @deprecated Use `[bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip]` in `bpsFormControlComponent` instead, will remove in 9.0.0.
 */
export class BpsFormExplainComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation(`'bps-form-explain' is going to be removed in 9.0.0. Use [bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip] in bps-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
    static { this.ɵfac = function BpsFormExplainComponent_Factory(t) { return new (t || BpsFormExplainComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormExplainComponent, selectors: [["bps-form-explain"]], exportAs: ["bpsFormExplain"], ngContentSelectors: _c0, decls: 2, vars: 1, template: function BpsFormExplainComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("@helpMotion", undefined);
        } }, styles: ["bps-form-explain{display:block}\n"], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormExplainComponent, [{
        type: Component,
        args: [{ selector: 'bps-form-explain', exportAs: 'bpsFormExplain', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [helpMotion], template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>", styles: ["bps-form-explain{display:block}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tZXhwbGFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWV4cGxhaW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQWtCNUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxlQUFlLENBQ2IsMk1BQTJNLENBQzVNLENBQUM7SUFDSixDQUFDO3dGQU5VLHVCQUF1QjtvRUFBdkIsdUJBQXVCOztZQ3ZCcEMsMkJBQW1CO1lBQ2pCLGtCQUF5QjtZQUMzQixpQkFBTTs7WUFGRCx1Q0FBYTtpR0RVSixDQUFDLFVBQVUsQ0FBQzs7dUZBYWIsdUJBQXVCO2NBbkJuQyxTQUFTOzJCQUNFLGtCQUFrQixZQUNsQixnQkFBZ0IsdUJBQ0wsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLENBQUMsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtZm9ybS1leHBsYWluJyxcclxuICBleHBvcnRBczogJ2Jwc0Zvcm1FeHBsYWluJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWZvcm0tZXhwbGFpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGJwcy1mb3JtLWV4cGxhaW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVXNlIGBbYnBzU3VjY2Vzc1RpcF0gfCBbYnBzV2FybmluZ1RpcF0gfCBbYnBzRXJyb3JUaXBdIHwgW2Jwc1ZhbGlkYXRpbmdUaXBdYCBpbiBgYnBzRm9ybUNvbnRyb2xDb21wb25lbnRgIGluc3RlYWQsIHdpbGwgcmVtb3ZlIGluIDkuMC4wLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJwc0Zvcm1FeHBsYWluQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0tZXhwbGFpbicpO1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICBgJ2Jwcy1mb3JtLWV4cGxhaW4nIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFVzZSBbYnBzU3VjY2Vzc1RpcF0gfCBbYnBzV2FybmluZ1RpcF0gfCBbYnBzRXJyb3JUaXBdIHwgW2Jwc1ZhbGlkYXRpbmdUaXBdIGluIGJwcy1mb3JtLWNvbnRyb2wgaW5zdGVhZC4gUmVhZCBodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9mb3JtL2VuYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbQGhlbHBNb3Rpb25dPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+Il19