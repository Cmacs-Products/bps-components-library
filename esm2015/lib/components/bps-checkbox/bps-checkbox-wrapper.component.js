import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, Renderer2, ViewEncapsulation } from '@angular/core';
let BpsCheckboxWrapperComponent = class BpsCheckboxWrapperComponent {
    constructor(renderer, elementRef) {
        this.bpsOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    outputValue() {
        const checkedList = this.checkboxList.filter(item => item.bpsChecked);
        return checkedList.map(item => item.bpsValue);
    }
    onChange() {
        this.bpsOnChange.emit(this.outputValue());
    }
};
BpsCheckboxWrapperComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Output()
], BpsCheckboxWrapperComponent.prototype, "bpsOnChange", void 0);
BpsCheckboxWrapperComponent = __decorate([
    Component({
        selector: 'bps-checkbox-wrapper',
        exportAs: 'bpsCheckboxWrapper',
        preserveWhitespaces: false,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        template: "<ng-content></ng-content>"
    })
], BpsCheckboxWrapperComponent);
export { BpsCheckboxWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnBzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnBzLWNoZWNrYm94L2Jwcy1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVl2QixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQXFCdEMsWUFBWSxRQUFtQixFQUFFLFVBQXNCO1FBcEJwQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDdEQsaUJBQVksR0FBMkIsRUFBRSxDQUFDO1FBb0JoRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBbkJELFdBQVcsQ0FBQyxLQUEyQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQTJCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUtGLENBQUE7O1lBSHVCLFNBQVM7WUFBYyxVQUFVOztBQXBCN0M7SUFBVCxNQUFNLEVBQUU7Z0VBQXFEO0FBRG5ELDJCQUEyQjtJQVJ2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsbUJBQW1CLEVBQUUsS0FBSztRQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxxQ0FBb0Q7S0FDckQsQ0FBQztHQUNXLDJCQUEyQixDQXdCdkM7U0F4QlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJwc0NoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9icHMtY2hlY2tib3guY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnBzLWNoZWNrYm94LXdyYXBwZXInLFxuICBleHBvcnRBczogJ2Jwc0NoZWNrYm94V3JhcHBlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCcHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQge1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBwcml2YXRlIGNoZWNrYm94TGlzdDogQnBzQ2hlY2tib3hDb21wb25lbnRbXSA9IFtdO1xuXG4gIGFkZENoZWNrYm94KHZhbHVlOiBCcHNDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hMaXN0LnB1c2godmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2hlY2tib3godmFsdWU6IEJwc0NoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveExpc3Quc3BsaWNlKHRoaXMuY2hlY2tib3hMaXN0LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIG91dHB1dFZhbHVlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHRoaXMuY2hlY2tib3hMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uYnBzQ2hlY2tlZCk7XG4gICAgcmV0dXJuIGNoZWNrZWRMaXN0Lm1hcChpdGVtID0+IGl0ZW0uYnBzVmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5icHNPbkNoYW5nZS5lbWl0KHRoaXMub3V0cHV0VmFsdWUoKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNoZWNrYm94LWdyb3VwJyk7XG4gIH1cbn1cbiJdfQ==