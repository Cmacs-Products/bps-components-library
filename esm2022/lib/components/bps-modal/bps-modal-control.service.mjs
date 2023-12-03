import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalControlServiceModule } from './nz-modal-control.service.module';
import * as i0 from "@angular/core";
export class BpsModalControlService {
    // Track singleton afterAllClose through over the injection tree
    get afterAllClose() {
        return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
    }
    // Track singleton openModals array through over the injection tree
    get openModals() {
        return this.parentService ? this.parentService.openModals : this.rootOpenModals;
    }
    get registeredMetaMap() {
        // Registered modal for later usage
        return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
    }
    constructor(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    // Register a modal to listen its open/close
    registerModal(modalRef) {
        if (!this.hasRegistered(modalRef)) {
            const afterOpenSubscription = modalRef.afterOpen.subscribe(() => this.openModals.push(modalRef));
            const afterCloseSubscription = modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
            this.registeredMetaMap.set(modalRef, { modalRef, afterOpenSubscription, afterCloseSubscription });
        }
    }
    // deregister modals
    deregisterModal(modalRef) {
        const registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    }
    hasRegistered(modalRef) {
        return this.registeredMetaMap.has(modalRef);
    }
    // Close all registered opened modals
    closeAll() {
        let i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    }
    static { this.ɵfac = function BpsModalControlService_Factory(t) { return new (t || BpsModalControlService)(i0.ɵɵinject(BpsModalControlService, 12)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BpsModalControlService, factory: BpsModalControlService.ɵfac, providedIn: NzModalControlServiceModule }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsModalControlService, [{
        type: Injectable,
        args: [{
                providedIn: NzModalControlServiceModule
            }]
    }], function () { return [{ type: BpsModalControlService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLWNvbnRyb2wuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLW1vZGFsL2Jwcy1tb2RhbC1jb250cm9sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQVdoRixNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLGdFQUFnRTtJQUNoRSxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWtCLENBQUM7SUFDekYsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBZSxDQUFDO0lBQ25GLENBQUM7SUFNRCxJQUFZLGlCQUFpQjtRQUMzQixtQ0FBbUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXNCLENBQUM7SUFDakcsQ0FBQztJQUVELFlBQTRDLGFBQXFDO1FBQXJDLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQVR6RSxtQkFBYyxHQUF5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxzQkFBaUIsR0FBeUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFGLDBCQUFxQixHQUE0QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQUVyRiw0Q0FBNEM7SUFDNUMsYUFBYSxDQUFDLFFBQXFCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0scUJBQXFCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqRyxNQUFNLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVuRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7U0FDbkc7SUFDSCxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLGVBQWUsQ0FBQyxRQUFxQjtRQUNuQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksY0FBYyxFQUFFO1lBQ2xCLG1HQUFtRztZQUNuRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxjQUFjLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsY0FBYyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLFFBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUUvQixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsUUFBcUI7UUFDM0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzNCO1NBQ0Y7SUFDSCxDQUFDO3VGQW5FVSxzQkFBc0I7dUVBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRnJCLDJCQUEyQjs7dUZBRTVCLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLDJCQUEyQjthQUN4Qzs7c0JBcUJjLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnBzTW9kYWxSZWYgfSBmcm9tICcuL2Jwcy1tb2RhbC1yZWYuY2xhc3MnO1xuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UubW9kdWxlJztcclxuXG5pbnRlcmZhY2UgUmVnaXN0ZXJlZE1ldGEge1xuICBtb2RhbFJlZjogQnBzTW9kYWxSZWY7XG4gIGFmdGVyT3BlblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBhZnRlckNsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIEJwc01vZGFsQ29udHJvbFNlcnZpY2Uge1xuICAvLyBUcmFjayBzaW5nbGV0b24gYWZ0ZXJBbGxDbG9zZSB0aHJvdWdoIG92ZXIgdGhlIGluamVjdGlvbiB0cmVlXG4gIGdldCBhZnRlckFsbENsb3NlKCk6IFN1YmplY3Q8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UuYWZ0ZXJBbGxDbG9zZSA6IHRoaXMucm9vdEFmdGVyQWxsQ2xvc2UhO1xuICB9XG5cbiAgLy8gVHJhY2sgc2luZ2xldG9uIG9wZW5Nb2RhbHMgYXJyYXkgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxuICBnZXQgb3Blbk1vZGFscygpOiBCcHNNb2RhbFJlZltdIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLm9wZW5Nb2RhbHMgOiB0aGlzLnJvb3RPcGVuTW9kYWxzITtcbiAgfVxuXG4gIHByaXZhdGUgcm9vdE9wZW5Nb2RhbHM6IEJwc01vZGFsUmVmW10gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IFtdO1xuICBwcml2YXRlIHJvb3RBZnRlckFsbENsb3NlOiBTdWJqZWN0PHZvaWQ+IHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHJvb3RSZWdpc3RlcmVkTWV0YU1hcDogTWFwPEJwc01vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IG5ldyBNYXAoKTtcblxuICBwcml2YXRlIGdldCByZWdpc3RlcmVkTWV0YU1hcCgpOiBNYXA8QnBzTW9kYWxSZWYsIFJlZ2lzdGVyZWRNZXRhPiB7XG4gICAgLy8gUmVnaXN0ZXJlZCBtb2RhbCBmb3IgbGF0ZXIgdXNhZ2VcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLnJlZ2lzdGVyZWRNZXRhTWFwIDogdGhpcy5yb290UmVnaXN0ZXJlZE1ldGFNYXAhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBwYXJlbnRTZXJ2aWNlOiBCcHNNb2RhbENvbnRyb2xTZXJ2aWNlKSB7fVxuXG4gIC8vIFJlZ2lzdGVyIGEgbW9kYWwgdG8gbGlzdGVuIGl0cyBvcGVuL2Nsb3NlXG4gIHJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IEJwc01vZGFsUmVmKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1JlZ2lzdGVyZWQobW9kYWxSZWYpKSB7XG4gICAgICBjb25zdCBhZnRlck9wZW5TdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlck9wZW4uc3Vic2NyaWJlKCgpID0+IHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlU3Vic2NyaXB0aW9uID0gbW9kYWxSZWYuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZW1vdmVPcGVuTW9kYWwobW9kYWxSZWYpKTtcblxuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5zZXQobW9kYWxSZWYsIHsgbW9kYWxSZWYsIGFmdGVyT3BlblN1YnNjcmlwdGlvbiwgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBkZXJlZ2lzdGVyIG1vZGFsc1xuICBkZXJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IEJwc01vZGFsUmVmKTogdm9pZCB7XG4gICAgY29uc3QgcmVnaXN0ZXJlZE1ldGEgPSB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmdldChtb2RhbFJlZik7XG4gICAgaWYgKHJlZ2lzdGVyZWRNZXRhKSB7XG4gICAgICAvLyBSZW1vdmUgdGhpcyBtb2RhbCBpZiBpdCBpcyBzdGlsbCBpbiB0aGUgb3BlbmVkIG1vZGFsIGxpc3QgKE5PVEU6IGl0IG1heSB0cmlnZ2VyIFwiYWZ0ZXJBbGxDbG9zZVwiKVxuICAgICAgdGhpcy5yZW1vdmVPcGVuTW9kYWwocmVnaXN0ZXJlZE1ldGEubW9kYWxSZWYpO1xuICAgICAgcmVnaXN0ZXJlZE1ldGEuYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlckNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmRlbGV0ZShtb2RhbFJlZik7XG4gICAgfVxuICB9XG5cbiAgaGFzUmVnaXN0ZXJlZChtb2RhbFJlZjogQnBzTW9kYWxSZWYpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5oYXMobW9kYWxSZWYpO1xuICB9XG5cbiAgLy8gQ2xvc2UgYWxsIHJlZ2lzdGVyZWQgb3BlbmVkIG1vZGFsc1xuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICBsZXQgaSA9IHRoaXMub3Blbk1vZGFscy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLm9wZW5Nb2RhbHNbaV0uY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZjogQnBzTW9kYWxSZWYpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3Blbk1vZGFscy5pbmRleE9mKG1vZGFsUmVmKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLm9wZW5Nb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgaWYgKCF0aGlzLm9wZW5Nb2RhbHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJBbGxDbG9zZS5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=