import { Directive, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NzStringTemplateOutletDirective {
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    recreateView() {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    }
    // tslint:disable-next-line:no-any
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            this.inputViewRef.context[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    ngOnChanges(changes) {
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    }
    static { this.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzStringTemplateOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, { nzStringTemplateOutletContext: [{
            type: Input
        }], nzStringTemplateOutlet: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29yZS9hZGRvbi9zdHJpbmdfdGVtcGxhdGVfb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQzs7QUFNdkIsTUFBTSxPQUFPLCtCQUErQjtJQVUxQyxJQUVJLHNCQUFzQixDQUFDLEtBQWdDO1FBQ3pELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3pELElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyw2QkFBNkIsQ0FDbkMsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7YUFBTTtZQUNMLG9EQUFvRDtZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3ZELElBQUksQ0FBQyxhQUFhLEVBQ2xC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LENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDMUI7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQztnR0EvR1UsK0JBQStCO29FQUEvQiwrQkFBK0I7O3VGQUEvQiwrQkFBK0I7Y0FKM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7NkZBU1UsNkJBQTZCO2tCQUFyQyxLQUFLO1lBSUYsc0JBQXNCO2tCQUZ6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuelN0cmluZ1RlbXBsYXRlT3V0bGV0XScsXG4gIGV4cG9ydEFzOiAnbnpTdHJpbmdUZW1wbGF0ZU91dGxldCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgaXNUZW1wbGF0ZTogYm9vbGVhbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBpbnB1dFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlZmF1bHRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0OiBhbnkgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0VGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVjcmVhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1RlbXBsYXRlKSB7XG4gICAgICAvKiogdXNlIGRlZmF1bHQgdGVtcGxhdGUgd2hlbiBpbnB1dCBpcyBzdHJpbmcgKiovXG4gICAgICBpZiAoIXRoaXMuZGVmYXVsdFZpZXdSZWYpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFRlbXBsYXRlKSB7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiB1c2UgaW5wdXQgdGVtcGxhdGUgd2hlbiBpbnB1dCBpcyB0ZW1wbGF0ZVJlZiAqKi9cbiAgICAgIGlmICghdGhpcy5pbnB1dFZpZXdSZWYpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZW1wbGF0ZSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGdldFR5cGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pOiAndGVtcGxhdGUnIHwgJ3N0cmluZycge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICByZXR1cm4gJ3RlbXBsYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmVjcmVhdGVWaWV3KGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0LCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0IH0gPSBjaGFuZ2VzO1xuICAgIGxldCBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IGZhbHNlO1xuICAgIGlmIChuelN0cmluZ1RlbXBsYXRlT3V0bGV0KSB7XG4gICAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5maXJzdENoYW5nZSkge1xuICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmV2aW91c091dGxldFR5cGUgPSB0aGlzLmdldFR5cGUobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgY29uc3QgY3VycmVudE91dGxldFR5cGUgPSB0aGlzLmdldFR5cGUobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5jdXJyZW50VmFsdWUpO1xuICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9ICEocHJldmlvdXNPdXRsZXRUeXBlID09PSAnc3RyaW5nJyAmJiBjdXJyZW50T3V0bGV0VHlwZSA9PT0gJ3N0cmluZycpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRDb250ZXh0UmVjcmVhdGUgPVxuICAgICAgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQgJiYgdGhpcy5oYXNDb250ZXh0U2hhcGVDaGFuZ2VkKG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcbiAgICByZXR1cm4gc2hvdWxkQ29udGV4dFJlY3JlYXRlIHx8IHNob3VsZE91dGxldFJlY3JlYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNDb250ZXh0U2hhcGVDaGFuZ2VkKGN0eENoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcHJldkN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UucHJldmlvdXNWYWx1ZSB8fCB7fSk7XG4gICAgY29uc3QgY3VyckN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UuY3VycmVudFZhbHVlIHx8IHt9KTtcblxuICAgIGlmIChwcmV2Q3R4S2V5cy5sZW5ndGggPT09IGN1cnJDdHhLZXlzLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBjdXJyQ3R4S2V5cykge1xuICAgICAgICBpZiAocHJldkN0eEtleXMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIHVwZGF0ZUV4aXN0aW5nQ29udGV4dChjdHg6IGFueSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY3R4KSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHRoaXMuaW5wdXRWaWV3UmVmIS5jb250ZXh0IGFzIGFueSlbcHJvcE5hbWVdID0gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFtwcm9wTmFtZV07XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGRlZmF1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHJlY3JlYXRlVmlldyA9IHRoaXMuc2hvdWxkUmVjcmVhdGVWaWV3KGNoYW5nZXMpO1xuICAgIGlmIChyZWNyZWF0ZVZpZXcpIHtcbiAgICAgIGlmICh0aGlzLnZpZXdDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSBudWxsO1xuICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnJlY3JlYXRlVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pbnB1dFZpZXdSZWYgJiYgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUV4aXN0aW5nQ29udGV4dCh0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==