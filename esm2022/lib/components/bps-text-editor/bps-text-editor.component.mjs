import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@tinymce/tinymce-angular";
function BpsTextEditorComponent_editor_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("bps-editor-disabled", ctx_r0.disabled);
    i0.ɵɵproperty("id", ctx_r0.editorID)("init", ctx_r0.tinyMceSettings)("disabled", ctx_r0.disabled);
} }
export class BpsTextEditorComponent {
    constructor() {
        this.showEditor = false;
        this.lazyLoaded = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.onblur = new EventEmitter();
        this.onkeyup = new EventEmitter();
        this.disabled = false;
        this.height = '250px';
        this.editorID = 'myEditor';
        this.statusbar = false;
        this.resize = false;
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'];
        this.toolbar = 'bold italic underline forecolor | strikethrough backcolor | alignleft aligncenter alignright alignjustify | bullist numlist image';
    }
    ngOnInit() {
        if (!this.lazyLoaded) {
            this.initTinyMCE();
        }
    }
    initTinyMCE() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor lists advlist'],
                    toolbar: this.toolbarmobile
                },
                menubar: false,
                content_css: '/assets/tiny.css',
                image_title: true,
                toolbar_location: 'bottom',
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
                setup: (editor) => {
                    editor.on('init', (obj) => {
                        if (this.disabled) {
                            this.disableEditor();
                        }
                        this.oninit.emit(obj);
                    });
                    editor.on('blur', (obj) => {
                        this.onblur.emit(obj);
                    });
                    editor.on('keyup', (obj) => {
                        this.onkeyup.emit(obj);
                    });
                    editor.on('Change', (obj) => {
                        this.onchange.emit(obj);
                    });
                },
                color_map: [
                    "e94c0a", "Orange",
                    "00a2d1", "Blue",
                    "7bc053", "Green",
                    "d80f0f", "Red",
                    "e9d90a", "Yellow",
                    "ffffff", "White"
                ],
                plugins: ['image table textcolor lists advlist'],
                toolbar: this.toolbar
            };
        }
        setTimeout(() => {
            this.showEditor = true;
        }, 100);
    }
    disableEditor() {
        tinymce.get(this.editorID).mode.set('readonly');
    }
    enableEditor() {
        tinymce.get(this.editorID).mode.set('design');
    }
    ngOnChanges(changes) {
        if (changes.disabled !== null && changes.disabled !== undefined && tinymce.get(this.editorID)) {
            if (changes.disabled) {
                this.disableEditor();
            }
            else {
                this.enableEditor();
            }
        }
        if (changes.lazyLoaded !== null && changes.lazyLoaded !== undefined) {
            if (!this.lazyLoaded) {
                this.initTinyMCE();
            }
            else if (tinymce.get(this.editorID)) {
                this.showEditor = false;
                tinymce.get(this.editorID).remove();
            }
        }
    }
    static { this.ɵfac = function BpsTextEditorComponent_Factory(t) { return new (t || BpsTextEditorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTextEditorComponent, selectors: [["bps-text-editor"]], inputs: { lazyLoaded: "lazyLoaded", disabled: "disabled", height: "height", editorID: "editorID", statusbar: "statusbar", resize: "resize", toolbarmobile: "toolbarmobile", toolbar: "toolbar", tinyMceSettings: "tinyMceSettings" }, outputs: { oninit: "oninit", onchange: "onchange", onblur: "onblur", onkeyup: "onkeyup" }, exportAs: ["bpsTextEditor"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "bps-editor", 3, "bps-editor-disabled", "id", "init", "disabled", 4, "ngIf"], [1, "bps-editor", 3, "id", "init", "disabled"]], template: function BpsTextEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsTextEditorComponent_editor_0_Template, 1, 5, "editor", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showEditor);
        } }, dependencies: [i1.NgIf, i2.EditorComponent], styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"], encapsulation: 2 }); }
}
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "lazyLoaded", void 0);
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTextEditorComponent, [{
        type: Component,
        args: [{ exportAs: 'bpsTextEditor', selector: 'bps-text-editor', encapsulation: ViewEncapsulation.None, template: "<editor [class.bps-editor-disabled]=\"disabled\"\n        [id]=\"editorID\"\n        *ngIf=\"showEditor\"\n        [init]=\"tinyMceSettings\"\n        class=\"bps-editor\"\n        [disabled]=\"disabled\"></editor>\n", styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"] }]
    }], function () { return []; }, { lazyLoaded: [{
            type: Input
        }], oninit: [{
            type: Output
        }], onchange: [{
            type: Output
        }], onblur: [{
            type: Output
        }], onkeyup: [{
            type: Output
        }], disabled: [{
            type: Input
        }], height: [{
            type: Input
        }], editorID: [{
            type: Input
        }], statusbar: [{
            type: Input
        }], resize: [{
            type: Input
        }], toolbarmobile: [{
            type: Input
        }], toolbar: [{
            type: Input
        }], tinyMceSettings: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRleHQtZWRpdG9yL2Jwcy10ZXh0LWVkaXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10ZXh0LWVkaXRvci9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7SUNEdkQsNEJBS3VDOzs7SUFML0Isc0RBQXNDO0lBQ3RDLG9DQUFlLGdDQUFBLDZCQUFBOztBRFd2QixNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQztRQWhCQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLDRDQUE0QztRQUNuQyxrQkFBYSxHQUFH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QkFBakIsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLE9BQU87a0JBQWhCLE1BQU07WUFDa0IsUUFBUTtrQkFBaEMsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXG5kZWNsYXJlIHZhciB0aW55bWNlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ2Jwc1RleHRFZGl0b3InLFxuICBzZWxlY3RvcjogJ2Jwcy10ZXh0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJwc1RleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsYXp5TG9hZGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uaW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25rZXl1cDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBoZWlnaHQgPSAnMjUwcHgnO1xyXG4gIEBJbnB1dCgpIGVkaXRvcklEID0gJ215RWRpdG9yJztcclxuICBASW5wdXQoKSBzdGF0dXNiYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXNpemUgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gIEBJbnB1dCgpIHRvb2xiYXJtb2JpbGUgPSBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2V0aHJvdWdoJywgJ2FsaWdubGVmdCcsICdhbGlnbmNlbnRlcicsICdhbGlnbnJpZ2h0JywgJ2FsaWduanVzdGlmeScsICdidWxsaXN0JywgJ251bWxpc3QnLCAnZm9yZWNvbG9yJ107XHJcbiAgQElucHV0KCkgdG9vbGJhciA9ICdib2xkIGl0YWxpYyB1bmRlcmxpbmUgZm9yZWNvbG9yIHwgc3RyaWtldGhyb3VnaCBiYWNrY29sb3IgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3QgaW1hZ2UnO1xyXG4gIEBJbnB1dCgpIHRpbnlNY2VTZXR0aW5ncyE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMubGF6eUxvYWRlZCkge1xyXG4gICAgICB0aGlzLmluaXRUaW55TUNFKCk7XHJcbiAgICB9XHJcbiAgfVxuXG4gIGluaXRUaW55TUNFKCkge1xuICAgIGlmICh0aGlzLnRpbnlNY2VTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzID0ge1xyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3IgbGlzdHMgYWR2bGlzdCddLFxyXG4gICAgICAgICAgdG9vbGJhcjogdGhpcy50b29sYmFybW9iaWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50X2NzczogJy9hc3NldHMvdGlueS5jc3MnLFxyXG4gICAgICAgIGltYWdlX3RpdGxlOiB0cnVlLFxyXG4gICAgICAgIHRvb2xiYXJfbG9jYXRpb246ICdib3R0b20nLFxyXG4gICAgICAgIHJlc2l6ZTogdGhpcy5yZXNpemUsXHJcbiAgICAgICAgYXV0b21hdGljX3VwbG9hZHM6IHRydWUsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICBzdGF0dXNiYXI6IHRoaXMuc3RhdHVzYmFyLFxyXG4gICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnaW1hZ2UnLFxyXG4gICAgICAgIGltYWdlc191cGxvYWRfdXJsOiAnIycsXHJcbiAgICAgICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUVkaXRvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25pbml0LmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uYmx1ci5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbigna2V5dXAnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25rZXl1cC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignQ2hhbmdlJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3JfbWFwOiBbXHJcbiAgICAgICAgICBcImU5NGMwYVwiLCBcIk9yYW5nZVwiLFxyXG4gICAgICAgICAgXCIwMGEyZDFcIiwgXCJCbHVlXCIsXHJcbiAgICAgICAgICBcIjdiYzA1M1wiLCBcIkdyZWVuXCIsXHJcbiAgICAgICAgICBcImQ4MGYwZlwiLCBcIlJlZFwiLFxyXG4gICAgICAgICAgXCJlOWQ5MGFcIiwgXCJZZWxsb3dcIixcclxuICAgICAgICAgIFwiZmZmZmZmXCIsIFwiV2hpdGVcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3IgbGlzdHMgYWR2bGlzdCddLFxyXG4gICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhclxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dFZGl0b3IgPSB0cnVlO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XG5cbiAgZGlzYWJsZUVkaXRvcigpIHtcbiAgICB0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKS5tb2RlLnNldCgncmVhZG9ubHknKTtcclxuICB9XG5cbiAgZW5hYmxlRWRpdG9yKCkge1xuICAgIHRpbnltY2UuZ2V0KHRoaXMuZWRpdG9ySUQpLm1vZGUuc2V0KCdkZXNpZ24nKTtcclxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkICE9PSBudWxsICYmIGNoYW5nZXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCAmJiB0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKSkge1xyXG4gICAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUVkaXRvcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlRWRpdG9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5sYXp5TG9hZGVkICE9PSBudWxsICYmIGNoYW5nZXMubGF6eUxvYWRlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5sYXp5TG9hZGVkKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VGlueU1DRSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRpbnltY2UuZ2V0KHRoaXMuZWRpdG9ySUQpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RWRpdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XG5cbn1cbiIsIjxlZGl0b3IgW2NsYXNzLmJwcy1lZGl0b3ItZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbaWRdPVwiZWRpdG9ySURcIlxuICAgICAgICAqbmdJZj1cInNob3dFZGl0b3JcIlxuICAgICAgICBbaW5pdF09XCJ0aW55TWNlU2V0dGluZ3NcIlxuICAgICAgICBjbGFzcz1cImJwcy1lZGl0b3JcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2VkaXRvcj5cbiJdfQ==