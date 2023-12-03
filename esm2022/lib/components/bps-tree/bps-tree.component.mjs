import { __decorate } from "tslib";
import { forwardRef, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core/util';
import { warnDeprecation, } from 'ng-zorro-antd/core/logger';
import { NzTreeBase, } from './tree/nz-tree-base';
import { NzTreeBaseService, } from './tree/nz-tree-base.service';
import { BpsTreeService } from './bps-tree.service';
import { WithConfig } from './tree/config.service';
import { NzTreeHigherOrderServiceToken } from './tree/nz-tree-service.resolver';
import * as i0 from "@angular/core";
import * as i1 from "./tree/nz-tree-base.service";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "ng-zorro-antd/core/no-animation";
import * as i4 from "@angular/common";
import * as i5 from "./bps-tree-node.component";
const _c0 = ["bpsTreeTemplate"];
function BpsTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "bps-tree-node", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("bpsTreeNode", node_r1)("bpsSelectMode", ctx_r0.bpsSelectMode)("bpsShowLine", ctx_r0.bpsShowLine)("bpsExpandedIcon", ctx_r0.bpsExpandedIcon)("bpsDraggable", ctx_r0.bpsDraggable)("bpsCheckable", ctx_r0.bpsCheckable)("bpsShowExpand", ctx_r0.bpsShowExpand)("bpsAsyncData", ctx_r0.bpsAsyncData)("bpsSearchValue", ctx_r0.bpsSearchValue)("bpsHideUnMatched", ctx_r0.bpsHideUnMatched)("bpsBeforeDrop", ctx_r0.bpsBeforeDrop)("bpsExpandAll", ctx_r0.bpsExpandAll)("bpsShowIcon", ctx_r0.bpsShowIcon)("bpsTreeTemplate", ctx_r0.treeTemplate)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("bpsNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
const NZ_CONFIG_COMPONENT_NAME = 'tree';
export class BpsTreeComponent extends NzTreeBase {
    get treeTemplate() {
        return this.bpsTreeTemplate || this.bpsTreeTemplateChild;
    }
    /**
     * @deprecated 9.0.0 use `bpsExpandAll` instead.
     */
    set bpsDefaultExpandAll(value) {
        warnDeprecation(`'bpsDefaultExpandAll' would be removed in 9.0.0. Please use 'bpsExpandAll' instead.`);
        this.bpsExpandAll = value;
        this._bpsDefaultExpandAll = value;
    }
    get bpsDefaultExpandAll() {
        return this._bpsDefaultExpandAll;
    }
    set bpsData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated 9.0.0 - use `bpsExpandedKeys` instead.
     */
    set bpsDefaultExpandedKeys(value) {
        warnDeprecation(`'bpsDefaultExpandedKeys' would be removed in 9.0.0. Please use 'bpsExpandedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `bpsSelectedKeys` instead.
     */
    set bpsDefaultSelectedKeys(value) {
        warnDeprecation(`'bpsDefaultSelectedKeys' would be removed in 9.0.0. Please use 'bpsSelectedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `bpsCheckedKeys` instead.
     */
    set bpsDefaultCheckedKeys(value) {
        warnDeprecation(`'bpsDefaultCheckedKeys' would be removed in 9.0.0. Please use 'bpsCheckedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set bpsExpandedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    set bpsSelectedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    set bpsCheckedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set bpsSearchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (isNotNil(value)) {
            this.bpsSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            /**
             * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
             * Hide warning, need remove next version
             */
            this.bpsOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    get bpsSearchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed.
     */
    get bpsNodes() {
        return this.nzTreeService.rootNodes;
    }
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            ['bps-tree']: true,
            [this.prefixCls + '-show-line']: this.bpsShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.bpsShowIcon,
            [`${this.prefixCls}-block-node`]: this.bpsBlockNode,
            ['draggable-tree']: this.bpsDraggable,
            ['ant-select-tree']: this.bpsSelectMode
        };
    }
    writeValue(value) {
        this.initNzData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
            this.nzTreeService.isMultiple = this.bpsMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.bpsShowExpand = true;
        this.bpsShowLine = false;
        this.bpsCheckable = false;
        this.bpsAsyncData = false;
        this.bpsDraggable = false;
        this.bpsSelectMode = false;
        this.bpsCheckStrictly = false;
        this.bpsExpandAll = false;
        this.bpsCustomTree = true;
        this._bpsDefaultExpandAll = false;
        this.bpsMultiple = false;
        this.bpsExpandedKeysChange = new EventEmitter();
        this.bpsSelectedKeysChange = new EventEmitter();
        this.bpsCheckedKeysChange = new EventEmitter();
        this.bpsSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        this.bpsOnSearchNode = new EventEmitter();
        this.bpsClick = new EventEmitter();
        this.bpsDblClick = new EventEmitter();
        this.bpsContextMenu = new EventEmitter();
        this.bpsCheckBoxChange = new EventEmitter();
        this.bpsExpandChange = new EventEmitter();
        this.bpsOnDragStart = new EventEmitter();
        this.bpsOnDragEnter = new EventEmitter();
        this.bpsOnDragOver = new EventEmitter();
        this.bpsOnDragLeave = new EventEmitter();
        this.bpsOnDrop = new EventEmitter();
        this.bpsOnDragEnd = new EventEmitter();
        this.bpsDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    ngOnInit() {
        this.setClassMap();
        this.bpsDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.bpsNodes);
                    this.bpsExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.bpsNodes, this.bpsMultiple);
                    this.bpsSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.bpsNodes, this.bpsCheckStrictly);
                    this.bpsCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
            switch (data.eventName) {
                case 'expand':
                    if (this.bpsCustomTree) {
                        const keys = data.keys;
                        data.keys = [keys[keys.length - 1]];
                        this.nzTreeService.calcExpandedKeys(data.keys, this.bpsNodes);
                    }
                    this.bpsExpandChange.emit(data);
                    break;
                case 'click':
                    this.bpsClick.emit(data);
                    break;
                case 'check':
                    this.bpsCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.bpsDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.bpsContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.bpsOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.bpsOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.bpsOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.bpsOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.bpsOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.bpsOnDragEnd.emit(data);
                    break;
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.bpsCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
        }
        if (changes.bpsMultiple) {
            this.nzTreeService.isMultiple = this.bpsMultiple;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function BpsTreeComponent_Factory(t) { return new (t || BpsTreeComponent)(i0.ɵɵdirectiveInject(i1.NzTreeBaseService), i0.ɵɵdirectiveInject(i2.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTreeComponent, selectors: [["bps-tree"]], contentQueries: function BpsTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsTreeTemplateChild = _t.first);
        } }, inputs: { bpsShowIcon: "bpsShowIcon", bpsShowExpand: "bpsShowExpand", bpsShowLine: "bpsShowLine", bpsExpandedIcon: "bpsExpandedIcon", bpsCheckable: "bpsCheckable", bpsAsyncData: "bpsAsyncData", bpsDraggable: "bpsDraggable", bpsHideUnMatched: "bpsHideUnMatched", bpsSelectMode: "bpsSelectMode", bpsCheckStrictly: "bpsCheckStrictly", bpsBlockNode: "bpsBlockNode", bpsExpandAll: "bpsExpandAll", bpsCustomTree: "bpsCustomTree", bpsTreeTemplate: "bpsTreeTemplate", bpsDefaultExpandAll: "bpsDefaultExpandAll", bpsBeforeDrop: "bpsBeforeDrop", bpsMultiple: "bpsMultiple", bpsData: "bpsData", bpsDefaultExpandedKeys: "bpsDefaultExpandedKeys", bpsDefaultSelectedKeys: "bpsDefaultSelectedKeys", bpsDefaultCheckedKeys: "bpsDefaultCheckedKeys", bpsExpandedKeys: "bpsExpandedKeys", bpsSelectedKeys: "bpsSelectedKeys", bpsCheckedKeys: "bpsCheckedKeys", bpsSearchValue: "bpsSearchValue" }, outputs: { bpsExpandedKeysChange: "bpsExpandedKeysChange", bpsSelectedKeysChange: "bpsSelectedKeysChange", bpsCheckedKeysChange: "bpsCheckedKeysChange", bpsSearchValueChange: "bpsSearchValueChange", bpsOnSearchNode: "bpsOnSearchNode", bpsClick: "bpsClick", bpsDblClick: "bpsDblClick", bpsContextMenu: "bpsContextMenu", bpsCheckBoxChange: "bpsCheckBoxChange", bpsExpandChange: "bpsExpandChange", bpsOnDragStart: "bpsOnDragStart", bpsOnDragEnter: "bpsOnDragEnter", bpsOnDragOver: "bpsOnDragOver", bpsOnDragLeave: "bpsOnDragLeave", bpsOnDrop: "bpsOnDrop", bpsOnDragEnd: "bpsOnDragEnd" }, exportAs: ["bpsTree"], features: [i0.ɵɵProvidersFeature([
                BpsTreeService,
                {
                    provide: NzTreeBaseService,
                    useFactory: NzTreeServiceFactory,
                    deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], BpsTreeService]
                },
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsTreeComponent),
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["role", "tree", "unselectable", "on", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "bpsTreeNode", "bpsSelectMode", "bpsShowLine", "bpsExpandedIcon", "bpsDraggable", "bpsCheckable", "bpsShowExpand", "bpsAsyncData", "bpsSearchValue", "bpsHideUnMatched", "bpsBeforeDrop", "bpsExpandAll", "bpsShowIcon", "bpsTreeTemplate", "bpsNoAnimation"]], template: function BpsTreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵtemplate(1, BpsTreeComponent_ng_container_1_Template, 2, 16, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.classMap);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.bpsNodes);
        } }, dependencies: [i4.NgClass, i4.NgForOf, i5.BpsTreeNodeComponent], styles: [".ant-tree.bps-tree li ul{padding:0!important}  .ant-tree{background:transparent!important}  .ant-tree li .ant-tree-node-content-wrapper{display:inline-block;height:24px;margin:0;padding:0 5px;color:#000000a6;line-height:24px;text-decoration:none;vertical-align:top;border-radius:2px;cursor:pointer;transition:all .3s}  .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}  .bps-tree-parent,   .bps-tree-leaf{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}  .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}  .bps-tree-parent:hover,   .bps-tree-leaf:hover{border:solid 1px #445c67!important}  .bps-tree-parent.ant-tree-node-selected,   .bps-tree-leaf.ant-tree-node-selected,   .bps-tree-leaf.ant-tree-node-selected:hover,   .bps-tree-parent.ant-tree-node-selected:hover{border:solid 1px #00a2d1!important}  .ant-tree-treenode-disabled>.bps-tree-leaf:hover,   .ant-tree-treenode-disabled>.bps-tree-leaf,   .ant-tree-treenode-disabled>.bps-tree-parent,   .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}  li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,   li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}  .ant-tree li{padding:0!important}"], changeDetection: 0 }); }
}
__decorate([
    InputBoolean(),
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false)
], BpsTreeComponent.prototype, "bpsShowIcon", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsShowExpand", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsShowLine", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCheckable", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsAsyncData", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsDraggable", void 0);
__decorate([
    InputBoolean(),
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false)
], BpsTreeComponent.prototype, "bpsHideUnMatched", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsSelectMode", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCheckStrictly", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean()
], BpsTreeComponent.prototype, "bpsBlockNode", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsExpandAll", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCustomTree", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsDefaultExpandAll", null);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsMultiple", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTreeComponent, [{
        type: Component,
        args: [{ selector: 'bps-tree', exportAs: 'bpsTree', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                    BpsTreeService,
                    {
                        provide: NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], BpsTreeService]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsTreeComponent),
                        multi: true
                    }
                ], template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"classMap\">\n  <ng-container *ngFor=\"let node of bpsNodes\">\n    <bps-tree-node\n      [bpsTreeNode]=\"node\"\n      [bpsSelectMode]=\"bpsSelectMode\"\n      [bpsShowLine]=\"bpsShowLine\"\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\n      [bpsDraggable]=\"bpsDraggable\"\n      [bpsCheckable]=\"bpsCheckable\"\n      [bpsShowExpand]=\"bpsShowExpand\"\n      [bpsAsyncData]=\"bpsAsyncData\"\n      [bpsSearchValue]=\"bpsSearchValue\"\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\n      [bpsExpandAll]=\"bpsExpandAll\"\n      [bpsShowIcon]=\"bpsShowIcon\"\n      [bpsTreeTemplate]=\"treeTemplate\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\">\n    </bps-tree-node>\n  </ng-container>\n</ul>\n", styles: ["::ng-deep .ant-tree.bps-tree li ul{padding:0!important}::ng-deep .ant-tree{background:transparent!important}::ng-deep .ant-tree li .ant-tree-node-content-wrapper{display:inline-block;height:24px;margin:0;padding:0 5px;color:#000000a6;line-height:24px;text-decoration:none;vertical-align:top;border-radius:2px;cursor:pointer;transition:all .3s}::ng-deep .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}::ng-deep .bps-tree-parent,::ng-deep .bps-tree-leaf{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}::ng-deep .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}::ng-deep .bps-tree-parent:hover,::ng-deep .bps-tree-leaf:hover{border:solid 1px #445c67!important}::ng-deep .bps-tree-parent.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected:hover,::ng-deep .bps-tree-parent.ant-tree-node-selected:hover{border:solid 1px #00a2d1!important}::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf:hover,::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}::ng-deep .ant-tree li{padding:0!important}\n"] }]
    }], function () { return [{ type: i1.NzTreeBaseService }, { type: i2.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i3.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { bpsShowIcon: [{
            type: Input
        }], bpsShowExpand: [{
            type: Input
        }], bpsShowLine: [{
            type: Input
        }], bpsExpandedIcon: [{
            type: Input
        }], bpsCheckable: [{
            type: Input
        }], bpsAsyncData: [{
            type: Input
        }], bpsDraggable: [{
            type: Input
        }], bpsHideUnMatched: [{
            type: Input
        }], bpsSelectMode: [{
            type: Input
        }], bpsCheckStrictly: [{
            type: Input
        }], bpsBlockNode: [{
            type: Input
        }], bpsExpandAll: [{
            type: Input
        }], bpsCustomTree: [{
            type: Input
        }], bpsTreeTemplate: [{
            type: Input
        }], bpsTreeTemplateChild: [{
            type: ContentChild,
            args: ['bpsTreeTemplate', { static: true }]
        }], bpsDefaultExpandAll: [{
            type: Input
        }], bpsBeforeDrop: [{
            type: Input
        }], bpsMultiple: [{
            type: Input
        }], bpsData: [{
            type: Input
        }], bpsDefaultExpandedKeys: [{
            type: Input
        }], bpsDefaultSelectedKeys: [{
            type: Input
        }], bpsDefaultCheckedKeys: [{
            type: Input
        }], bpsExpandedKeys: [{
            type: Input
        }], bpsSelectedKeys: [{
            type: Input
        }], bpsCheckedKeys: [{
            type: Input
        }], bpsSearchValue: [{
            type: Input
        }], bpsExpandedKeysChange: [{
            type: Output
        }], bpsSelectedKeysChange: [{
            type: Output
        }], bpsCheckedKeysChange: [{
            type: Output
        }], bpsSearchValueChange: [{
            type: Output
        }], bpsOnSearchNode: [{
            type: Output
        }], bpsClick: [{
            type: Output
        }], bpsDblClick: [{
            type: Output
        }], bpsContextMenu: [{
            type: Output
        }], bpsCheckBoxChange: [{
            type: Output
        }], bpsExpandChange: [{
            type: Output
        }], bpsOnDragStart: [{
            type: Output
        }], bpsOnDragEnter: [{
            type: Output
        }], bpsOnDragOver: [{
            type: Output
        }], bpsOnDragLeave: [{
            type: Output
        }], bpsOnDrop: [{
            type: Output
        }], bpsOnDragEnd: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtdHJlZS9icHMtdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL2Jwcy10cmVlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sNkJBQTZCLENBQUM7QUFjckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7O0lDM0M5RSw2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QUFoQyxNQUFNO1lBQ1ksaUJBQWlCO2tCQUFuQyxNQUFNO1lBQ1ksZUFBZTtrQkFBakMsTUFBTTtZQUVZLGNBQWM7a0JBQWhDLE1BQU07WUFDWSxjQUFjO2tCQUFoQyxNQUFNO1lBQ1ksYUFBYTtrQkFBL0IsTUFBTTtZQUNZLGNBQWM7a0JBQWhDLE1BQU07WUFDWSxTQUFTO2tCQUEzQixNQUFNO1lBQ1ksWUFBWTtrQkFBOUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgd2FybkRlcHJlY2F0aW9uLFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xyXG5pbXBvcnQge1xyXG4gIE56VHJlZUJhc2UsXHJcbn0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZSc7XHJcbmltcG9ydCB7XHJcbiAgTnpUcmVlQmFzZVNlcnZpY2UsXHJcbn0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtcclxuICBOelRyZWVOb2RlXHJcbn0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS1ub2RlJztcclxuaW1wb3J0IHtcclxuICBOekNvbmZpZ1NlcnZpY2VcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHtcclxuICBOekZvcm1hdEJlZm9yZURyb3BFdmVudCxcclxuICBOekZvcm1hdEVtaXRFdmVudCxcclxufSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHtcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBCcHNUcmVlU2VydmljZSB9IGZyb20gJy4vYnBzLXRyZWUuc2VydmljZSc7XHJcbmltcG9ydCB7IFdpdGhDb25maWcgfSBmcm9tICcuL3RyZWUvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbiB9IGZyb20gJy4vdHJlZS9uei10cmVlLXNlcnZpY2UucmVzb2x2ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE56VHJlZVNlcnZpY2VGYWN0b3J5KFxyXG4gIGhpZ2hlck9yZGVyU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgdHJlZVNlcnZpY2U6IEJwc1RyZWVTZXJ2aWNlXHJcbik6IE56VHJlZUJhc2VTZXJ2aWNlIHtcclxuICByZXR1cm4gaGlnaGVyT3JkZXJTZXJ2aWNlID8gaGlnaGVyT3JkZXJTZXJ2aWNlIDogdHJlZVNlcnZpY2U7XHJcbn1cclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICd0cmVlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXRyZWUnLFxyXG4gIGV4cG9ydEFzOiAnYnBzVHJlZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEJwc1RyZWVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogTnpUcmVlU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIEJwc1RyZWVTZXJ2aWNlXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc1RyZWVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRyZWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNUcmVlQ29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgYnBzU2hvd0ljb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Nob3dFeHBhbmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc0V4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRHJhZ2dhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBicHNIaWRlVW5NYXRjaGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZWxlY3RNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NoZWNrU3RyaWN0bHkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgYnBzQmxvY2tOb2RlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNFeHBhbmRBbGwgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0N1c3RvbVRyZWUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBicHNUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBDb250ZW50Q2hpbGQoJ2Jwc1RyZWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGJwc1RyZWVUZW1wbGF0ZUNoaWxkOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBnZXQgdHJlZVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+IHtcclxuICAgIHJldHVybiB0aGlzLmJwc1RyZWVUZW1wbGF0ZSB8fCB0aGlzLmJwc1RyZWVUZW1wbGF0ZUNoaWxkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgdXNlIGBicHNFeHBhbmRBbGxgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzZXQgYnBzRGVmYXVsdEV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnYnBzRGVmYXVsdEV4cGFuZEFsbCcgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnYnBzRXhwYW5kQWxsJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5icHNFeHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2Jwc0RlZmF1bHRFeHBhbmRBbGwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBicHNEZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jwc0RlZmF1bHRFeHBhbmRBbGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9icHNEZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGJwc0JlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc011bHRpcGxlID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBicHNEYXRhKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBicHNFeHBhbmRlZEtleXNgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRFeHBhbmRlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2Jwc0V4cGFuZGVkS2V5cycgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYGJwc1NlbGVjdGVkS2V5c2AgaW5zdGVhZC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnYnBzRGVmYXVsdFNlbGVjdGVkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnYnBzU2VsZWN0ZWRLZXlzJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgYnBzQ2hlY2tlZEtleXNgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnYnBzRGVmYXVsdENoZWNrZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdicHNDaGVja2VkS2V5cycgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc1NlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzQ2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzU2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZWFyY2hFeHBhbmQodmFsdWUpO1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmJwc1NlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgbnpPblNlYXJjaE5vZGVgIGluc3RlYWQuXHJcbiAgICAgICAqIEhpZGUgd2FybmluZywgbmVlZCByZW1vdmUgbmV4dCB2ZXJzaW9uXHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLmJwc09uU2VhcmNoTm9kZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGJwc1NlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUbyByZW5kZXIgbm9kZXMgaWYgcm9vdCBpcyBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIGdldCBicHNOb2RlcygpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzRXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzU2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQ2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzU2VhcmNoVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYG56U2VhcmNoVmFsdWVDaGFuZ2VgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uU2VhcmNoTm9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0RibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQ29udGV4dE1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0V4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25EcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25EcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XHJcbiAgYnBzRGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDx7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfT4oNik7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgY2xhc3NNYXAgPSB7fTtcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFsnYnBzLXRyZWUnXTogdHJ1ZSxcclxuICAgICAgW3RoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnXTogdGhpcy5icHNTaG93TGluZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgXTogIXRoaXMuYnBzU2hvd0ljb24sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYmxvY2stbm9kZWBdOiB0aGlzLmJwc0Jsb2NrTm9kZSxcclxuICAgICAgWydkcmFnZ2FibGUtdHJlZSddOiB0aGlzLmJwc0RyYWdnYWJsZSxcclxuICAgICAgWydhbnQtc2VsZWN0LXRyZWUnXTogdGhpcy5icHNTZWxlY3RNb2RlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgaW5pdE56RGF0YSh2YWx1ZTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5icHNDaGVja1N0cmljdGx5O1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMuYnBzTXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmNvZXJjZVRyZWVOb2Rlcyh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGF0YTogeyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0pID0+IHtcclxuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmtleXMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcclxuICAgICAgICBjYXNlICduekV4cGFuZGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0V4cGFuZGVkS2V5cyhkYXRhLmtleXMsIHRoaXMuYnBzTm9kZXMpO1xyXG4gICAgICAgICAgdGhpcy5icHNFeHBhbmRlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLmJwc05vZGVzLCB0aGlzLmJwc011bHRpcGxlKTtcclxuICAgICAgICAgIHRoaXMuYnBzU2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256Q2hlY2tlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMuYnBzTm9kZXMsIHRoaXMuYnBzQ2hlY2tTdHJpY3RseSk7XHJcbiAgICAgICAgICB0aGlzLmJwc0NoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcclxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAnZXhwYW5kJzpcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnBzQ3VzdG9tVHJlZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBkYXRhLmtleXM7XHJcbiAgICAgICAgICAgICAgZGF0YS5rZXlzID0gW2tleXNba2V5cy5sZW5ndGggLSAxXV07XHJcbiAgICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLmJwc05vZGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJwc0V4cGFuZENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcclxuICAgICAgICAgICAgdGhpcy5icHNDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICAgICAgdGhpcy5icHNDaGVja0JveENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RibGNsaWNrJzpcclxuICAgICAgICAgICAgdGhpcy5icHNEYmxDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcclxuICAgICAgICAgICAgdGhpcy5icHNDb250ZXh0TWVudS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIC8vIGRyYWcgZHJvcFxyXG4gICAgICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcclxuICAgICAgICAgICAgdGhpcy5icHNPbkRyYWdTdGFydC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25EcmFnRW50ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnb3Zlcic6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25EcmFnT3Zlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25EcmFnTGVhdmUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcm9wJzpcclxuICAgICAgICAgICAgdGhpcy5icHNPbkRyb3AuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcclxuICAgICAgICAgICAgdGhpcy5icHNPbkRyYWdFbmQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmJwc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMuYnBzQ2hlY2tTdHJpY3RseTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLmJwc011bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5icHNNdWx0aXBsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjx1bFxuICByb2xlPVwidHJlZVwiXG4gIHVuc2VsZWN0YWJsZT1cIm9uXCJcbiAgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbm9kZSBvZiBicHNOb2Rlc1wiPlxuICAgIDxicHMtdHJlZS1ub2RlXG4gICAgICBbYnBzVHJlZU5vZGVdPVwibm9kZVwiXG4gICAgICBbYnBzU2VsZWN0TW9kZV09XCJicHNTZWxlY3RNb2RlXCJcbiAgICAgIFticHNTaG93TGluZV09XCJicHNTaG93TGluZVwiXG4gICAgICBbYnBzRXhwYW5kZWRJY29uXT1cImJwc0V4cGFuZGVkSWNvblwiXG4gICAgICBbYnBzRHJhZ2dhYmxlXT1cImJwc0RyYWdnYWJsZVwiXG4gICAgICBbYnBzQ2hlY2thYmxlXT1cImJwc0NoZWNrYWJsZVwiXG4gICAgICBbYnBzU2hvd0V4cGFuZF09XCJicHNTaG93RXhwYW5kXCJcbiAgICAgIFticHNBc3luY0RhdGFdPVwiYnBzQXN5bmNEYXRhXCJcbiAgICAgIFticHNTZWFyY2hWYWx1ZV09XCJicHNTZWFyY2hWYWx1ZVwiXG4gICAgICBbYnBzSGlkZVVuTWF0Y2hlZF09XCJicHNIaWRlVW5NYXRjaGVkXCJcbiAgICAgIFticHNCZWZvcmVEcm9wXT1cImJwc0JlZm9yZURyb3BcIlxuICAgICAgW2Jwc0V4cGFuZEFsbF09XCJicHNFeHBhbmRBbGxcIlxuICAgICAgW2Jwc1Nob3dJY29uXT1cImJwc1Nob3dJY29uXCJcbiAgICAgIFticHNUcmVlVGVtcGxhdGVdPVwidHJlZVRlbXBsYXRlXCJcbiAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgIFticHNOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiPlxuICAgIDwvYnBzLXRyZWUtbm9kZT5cbiAgPC9uZy1jb250YWluZXI+XG48L3VsPlxuIl19