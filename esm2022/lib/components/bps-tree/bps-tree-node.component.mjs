import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, HostListener, Input, Optional, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { InputBoolean, } from 'ng-zorro-antd/core/util';
import { warnDeprecation, } from 'ng-zorro-antd/core/logger';
import { treeCollapseMotion, } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "./tree/nz-tree-base.service";
import * as i2 from "ng-zorro-antd/core/no-animation";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/core/highlight";
const _c0 = ["dragElement"];
function BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0) { return { $implicit: a0 }; };
function BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r10.bpsExpandedIcon)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r10.bpsTreeNode));
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("ant-select-switcher-icon", ctx_r11.bpsSelectMode)("ant-tree-switcher-icon", !ctx_r11.bpsSelectMode);
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_1_Template, 1, 4, null, 2);
    i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_i_2_Template, 1, 4, "i", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.bpsExpandedIcon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.isTemplateRef(ctx_r8.bpsExpandedIcon));
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 9);
} if (rf & 2) {
    i0.ɵɵproperty("nzSpin", true);
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTreeNodeComponent_ng_container_2_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_2_ng_container_2_i_2_Template, 1, 1, "i", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.bpsTreeNode.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.bpsTreeNode.isLoading);
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function BpsTreeNodeComponent_ng_container_2_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsTreeNodeComponent_ng_container_2_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r13.bpsExpandedIcon)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r13.bpsTreeNode));
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r16.isSwitcherOpen ? "minus-square" : "plus-square");
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_1_Template, 1, 1, "i", 10);
    i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_i_2_Template, 1, 0, "i", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.isShowLineIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.isShowLineIcon);
} }
function BpsTreeNodeComponent_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTreeNodeComponent_ng_container_2_ng_container_3_1_Template, 1, 4, null, 2);
    i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_2_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isTemplateRef(ctx_r7.bpsExpandedIcon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.isTemplateRef(ctx_r7.bpsExpandedIcon));
} }
function BpsTreeNodeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵlistener("click", function BpsTreeNodeComponent_ng_container_2_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18._clickExpand($event)); });
    i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, BpsTreeNodeComponent_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.bpsNodeSwitcherClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isShowSwitchIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.bpsShowLine);
} }
function BpsTreeNodeComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵlistener("click", function BpsTreeNodeComponent_ng_container_3_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20._clickCheckBox($event)); });
    i0.ɵɵelement(2, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r2.bpsNodeCheckboxClass);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-tree-checkbox-inner", !ctx_r2.bpsSelectMode)("ant-select-tree-checkbox-inner", ctx_r2.bpsSelectMode);
} }
function BpsTreeNodeComponent_ng_container_4_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r25.bpsIcon);
} }
function BpsTreeNodeComponent_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18)(1, "span", 18);
    i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_4_span_2_i_2_Template, 1, 1, "i", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-tree-icon__open", ctx_r22.isSwitcherOpen)("ant-tree-icon__close", ctx_r22.isSwitcherClose)("ant-tree-icon_loading", ctx_r22.bpsTreeNode.isLoading);
    i0.ɵɵproperty("ngClass", ctx_r22.bpsNodeContentLoadingClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r22.bpsNodeContentIconClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.bpsIcon);
} }
function BpsTreeNodeComponent_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 21);
    i0.ɵɵpipe(1, "nzHighlight");
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind4(1, 1, ctx_r23.bpsTreeNode.title, ctx_r23.bpsSearchValue, "", "font-highlight"), i0.ɵɵsanitizeHtml);
} }
function BpsTreeNodeComponent_ng_container_4_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 22);
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r24.bpsTreeNode.title, i0.ɵɵsanitizeUrl);
} }
function BpsTreeNodeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 14);
    i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_4_span_2_Template, 3, 9, "span", 15);
    i0.ɵɵtemplate(3, BpsTreeNodeComponent_ng_container_4_span_3_Template, 2, 6, "span", 16);
    i0.ɵɵtemplate(4, BpsTreeNodeComponent_ng_container_4_img_4_Template, 1, 1, "img", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("draggable", ctx_r3.canDraggable);
    i0.ɵɵpropertyInterpolate("title", ctx_r3.bpsTreeNode.title);
    i0.ɵɵproperty("ngClass", ctx_r3.bpsNodeContentClass);
    i0.ɵɵattribute("draggable", ctx_r3.canDraggable)("aria-grabbed", ctx_r3.canDraggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.bpsTreeNode.icon && ctx_r3.bpsShowIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.bpsCustomTree || ctx_r3.bpsTreeNode.isLeaf);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.bpsCustomTree && !ctx_r3.bpsTreeNode.isLeaf);
} }
function BpsTreeNodeComponent_ng_template_5_Template(rf, ctx) { }
function BpsTreeNodeComponent_ul_6_bps_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-tree-node", 25);
} if (rf & 2) {
    const node_r27 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("bpsTreeNode", node_r27)("bpsShowExpand", ctx_r26.bpsShowExpand)("@.disabled", ctx_r26.noAnimation == null ? null : ctx_r26.noAnimation.nzNoAnimation)("bpsNoAnimation", ctx_r26.noAnimation == null ? null : ctx_r26.noAnimation.nzNoAnimation)("bpsSelectMode", ctx_r26.bpsSelectMode)("bpsShowLine", ctx_r26.bpsShowLine)("bpsExpandedIcon", ctx_r26.bpsExpandedIcon)("bpsDraggable", ctx_r26.bpsDraggable)("bpsCheckable", ctx_r26.bpsCheckable)("bpsAsyncData", ctx_r26.bpsAsyncData)("bpsExpandAll", ctx_r26.bpsExpandAll)("bpsShowIcon", ctx_r26.bpsShowIcon)("bpsSearchValue", ctx_r26.bpsSearchValue)("bpsHideUnMatched", ctx_r26.bpsHideUnMatched)("bpsBeforeDrop", ctx_r26.bpsBeforeDrop)("bpsTreeTemplate", ctx_r26.bpsTreeTemplate);
} }
function BpsTreeNodeComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 23);
    i0.ɵɵtemplate(1, BpsTreeNodeComponent_ul_6_bps_tree_node_1_Template, 1, 16, "bps-tree-node", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-tree-child-tree-open", !ctx_r5.bpsSelectMode || ctx_r5.bpsTreeNode.isExpanded);
    i0.ɵɵproperty("@.disabled", ctx_r5.noAnimation == null ? null : ctx_r5.noAnimation.nzNoAnimation)("@treeCollapseMotion", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.bpsTreeNode.getChildren());
} }
export class BpsTreeNodeComponent {
    set bpsDraggable(value) {
        this._bpsDraggable = value;
        this.handDragEvent();
    }
    get bpsDraggable() {
        return this._bpsDraggable;
    }
    /**
     * @deprecated use `nzExpandAll` instead.
     */
    set bpsDefaultExpandAll(value) {
        warnDeprecation(`'bpsDefaultExpandAll' is going to be removed in 9.0.0. Please use 'bpsExpandAll' instead.`);
        this._bpsExpandAll = value;
        if (value && this.bpsTreeNode && !this.bpsTreeNode.isLeaf) {
            this.bpsTreeNode.isExpanded = true;
        }
    }
    get bpsDefaultExpandAll() {
        return this._bpsExpandAll;
    }
    // default set
    set bpsExpandAll(value) {
        this._bpsExpandAll = value;
        if (value && this.bpsTreeNode && !this.bpsTreeNode.isLeaf) {
            this.bpsTreeNode.isExpanded = true;
        }
    }
    get bpsExpandAll() {
        return this._bpsExpandAll;
    }
    get bpsIcon() {
        return this.bpsTreeNode.icon;
    }
    get canDraggable() {
        return this.bpsDraggable && !this.bpsTreeNode.isDisabled ? true : null;
    }
    get isShowLineIcon() {
        return !this.bpsTreeNode.isLeaf && this.bpsShowLine;
    }
    get isShowSwitchIcon() {
        return !this.bpsTreeNode.isLeaf && !this.bpsShowLine;
    }
    get isSwitcherOpen() {
        return this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf;
    }
    get isSwitcherClose() {
        return !this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf;
    }
    get displayStyle() {
        // to hide unmatched nodes
        return this.bpsSearchValue &&
            this.bpsHideUnMatched &&
            !this.bpsTreeNode.isMatched &&
            !this.bpsTreeNode.isExpanded &&
            this.bpsTreeNode.canHide
            ? 'none'
            : '';
    }
    /**
     * reset node class
     */
    setClassMap() {
        this.prefixCls = this.bpsSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.bpsNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.bpsTreeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.bpsTreeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.bpsTreeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: this.bpsTreeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.bpsTreeNode.isLoading
        };
        this.bpsNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.bpsTreeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.bpsNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.bpsTreeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.bpsTreeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.bpsTreeNode.isDisabled || this.bpsTreeNode.isDisableCheckbox
        };
        this.bpsNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`bps-tree-leaf`]: this.bpsTreeNode.isLeaf,
            [`bps-tree-parent`]: !this.bpsTreeNode.isLeaf,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.bpsTreeNode.isSelected
        };
        this.bpsNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.bpsNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
    }
    onMousedown(event) {
        if (this.bpsSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.bpsTreeNode.isSelectable && !this.bpsTreeNode.isDisabled) {
            if (!this.bpsTreeNode.isSelected) {
                this.bpsTreeNode.isSelected = true;
            }
            if (this.bpsCustomTree) {
                this._clickExpand(event);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('click', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * @param event
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.bpsTreeNode.isLoading && !this.bpsTreeNode.isLeaf) {
            // set async state
            if (this.bpsAsyncData && this.bpsTreeNode.children.length === 0 && !this.bpsTreeNode.isExpanded) {
                this.bpsTreeNode.isLoading = true;
            }
            this.bpsTreeNode.isExpanded = !this.bpsTreeNode.isExpanded;
            if (this.bpsTreeNode.isMatched) {
                this.setDisplayForParentNodes(this.bpsTreeNode);
            }
            this.setDisplayForChildNodes(this.bpsTreeNode);
            const eventNext = this.nzTreeService.formatEvent('expand', this.bpsTreeNode, event);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
    }
    setDisplayForChildNodes(parentNode) {
        const { children } = parentNode;
        if (children.length > 0) {
            children.map(node => {
                const canHide = !node.isMatched;
                node.canHide = canHide;
                this.setDisplayForChildNodes(node);
            });
        }
    }
    setDisplayForParentNodes(targetNode) {
        const parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    }
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.bpsTreeNode.isDisabled || this.bpsTreeNode.isDisableCheckbox) {
            return;
        }
        this.bpsTreeNode.isChecked = !this.bpsTreeNode.isChecked;
        this.bpsTreeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.bpsTreeNode);
        }
        const eventNext = this.nzTreeService.formatEvent('check', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * drag event
     * @param e
     */
    clearDragClass() {
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        });
    }
    handleDragStart(e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', this.bpsTreeNode.key);
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.bpsTreeNode);
        this.bpsTreeNode.isExpanded = false;
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(() => {
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.bpsTreeNode.key && !this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf) {
                this.bpsTreeNode.isExpanded = true;
            }
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.bpsTreeNode, e);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        });
    }
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.bpsTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('dragover', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
        });
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.bpsTreeNode.key) || (this.dragPos === 0 && this.bpsTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            const dropEvent = this.nzTreeService.formatEvent('drop', this.bpsTreeNode, e);
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.bpsTreeNode, e);
            if (this.bpsBeforeDrop) {
                this.bpsBeforeDrop({
                    dragNode: this.nzTreeService.getSelectedNode(),
                    node: this.bpsTreeNode,
                    pos: this.dragPos
                }).subscribe((canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.bpsTreeNode, this.dragPos);
                    }
                    this.nzTreeService.triggerEventChange$.next(dropEvent);
                    this.nzTreeService.triggerEventChange$.next(dragEndEvent);
                });
            }
            else if (this.bpsTreeNode) {
                this.nzTreeService.dropAndApply(this.bpsTreeNode, this.dragPos);
                this.nzTreeService.triggerEventChange$.next(dropEvent);
            }
        });
    }
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            // if user do not custom beforeDrop
            if (!this.bpsBeforeDrop) {
                const eventNext = this.nzTreeService.formatEvent('dragend', this.bpsTreeNode, e);
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        });
    }
    /**
     * Listening to dragging events.
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular(() => {
            if (this.bpsDraggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragStart(e));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnter(e));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragOver(e));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragLeave(e));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragDrop(e));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnd(e));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        });
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.bpsHideUnMatched = false;
        this.bpsNoAnimation = false;
        this.bpsSelectMode = false;
        this.bpsShowIcon = false;
        this.bpsSearchValue = '';
        this.bpsCustomTree = true;
        // default var
        this.prefixCls = 'ant-tree';
        this.bpsNodeClass = {};
        this.bpsNodeSwitcherClass = {};
        this.bpsNodeContentClass = {};
        this.bpsNodeCheckboxClass = {};
        this.bpsNodeContentIconClass = {};
        this.bpsNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        this._bpsDraggable = false;
        this._bpsExpandAll = false;
    }
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.bpsTreeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.bpsTreeNode);
        }
        if (this.bpsTreeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.bpsTreeNode);
        }
        if (this.bpsTreeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.bpsTreeNode);
        }
        // TODO
        this.bpsTreeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(filter(data => data.node.key === this.bpsTreeNode.key), takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.markForCheck();
        });
        this.setClassMap();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function BpsTreeNodeComponent_Factory(t) { return new (t || BpsTreeNodeComponent)(i0.ɵɵdirectiveInject(i1.NzTreeBaseService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTreeNodeComponent, selectors: [["bps-tree-node"]], viewQuery: function BpsTreeNodeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dragElement = _t.first);
        } }, hostBindings: function BpsTreeNodeComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function BpsTreeNodeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function BpsTreeNodeComponent_click_HostBindingHandler($event) { return ctx.nzClick($event); })("dblclick", function BpsTreeNodeComponent_dblclick_HostBindingHandler($event) { return ctx.nzDblClick($event); })("contextmenu", function BpsTreeNodeComponent_contextmenu_HostBindingHandler($event) { return ctx.nzContextMenu($event); });
        } }, inputs: { bpsTreeNode: "bpsTreeNode", bpsShowLine: "bpsShowLine", bpsShowExpand: "bpsShowExpand", bpsCheckable: "bpsCheckable", bpsAsyncData: "bpsAsyncData", bpsHideUnMatched: "bpsHideUnMatched", bpsNoAnimation: "bpsNoAnimation", bpsSelectMode: "bpsSelectMode", bpsShowIcon: "bpsShowIcon", bpsExpandedIcon: "bpsExpandedIcon", bpsTreeTemplate: "bpsTreeTemplate", bpsBeforeDrop: "bpsBeforeDrop", bpsSearchValue: "bpsSearchValue", bpsCustomTree: "bpsCustomTree", bpsDraggable: "bpsDraggable", bpsDefaultExpandAll: "bpsDefaultExpandAll", bpsExpandAll: "bpsExpandAll" }, exportAs: ["bpsTreeNode"], features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 11, consts: [["role", "treeitem", 3, "ngClass"], ["dragElement", ""], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", "class", "ant-tree-child-tree", "data-expanded", "true", 3, "ant-tree-child-tree-open", 4, "ngIf"], [3, "ngClass", "click"], ["nz-icon", "", "nzType", "loading", "class", "ant-tree-switcher-loading-icon", 3, "nzSpin", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", 3, "ant-select-switcher-icon", "ant-tree-switcher-icon", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], [3, "title", "ngClass"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ngClass", 4, "ngIf"], ["class", "ant-tree-title", 3, "innerHTML", 4, "ngIf"], [3, "src", 4, "ngIf"], [3, "ngClass"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-tree-title", 3, "innerHTML"], [3, "src"], ["role", "group", "data-expanded", "true", 1, "ant-tree-child-tree"], [3, "bpsTreeNode", "bpsShowExpand", "bpsNoAnimation", "bpsSelectMode", "bpsShowLine", "bpsExpandedIcon", "bpsDraggable", "bpsCheckable", "bpsAsyncData", "bpsExpandAll", "bpsShowIcon", "bpsSearchValue", "bpsHideUnMatched", "bpsBeforeDrop", "bpsTreeTemplate", 4, "ngFor", "ngForOf"], [3, "bpsTreeNode", "bpsShowExpand", "bpsNoAnimation", "bpsSelectMode", "bpsShowLine", "bpsExpandedIcon", "bpsDraggable", "bpsCheckable", "bpsAsyncData", "bpsExpandAll", "bpsShowIcon", "bpsSearchValue", "bpsHideUnMatched", "bpsBeforeDrop", "bpsTreeTemplate"]], template: function BpsTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 0, 1);
            i0.ɵɵtemplate(2, BpsTreeNodeComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
            i0.ɵɵtemplate(3, BpsTreeNodeComponent_ng_container_3_Template, 3, 5, "ng-container", 2);
            i0.ɵɵtemplate(4, BpsTreeNodeComponent_ng_container_4_Template, 5, 9, "ng-container", 2);
            i0.ɵɵtemplate(5, BpsTreeNodeComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
            i0.ɵɵtemplate(6, BpsTreeNodeComponent_ul_6_Template, 2, 5, "ul", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("display", ctx.displayStyle);
            i0.ɵɵproperty("ngClass", ctx.bpsNodeClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.bpsShowExpand && !ctx.bpsCustomTree);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsCheckable && !ctx.bpsCustomTree);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.bpsTreeTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.bpsTreeTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(9, _c1, ctx.bpsTreeNode));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.bpsTreeNode.isExpanded);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.NzIconDirective, BpsTreeNodeComponent, i5.NzHighlightPipe], encapsulation: 2, data: { animation: [treeCollapseMotion] }, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowLine", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowExpand", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsCheckable", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsAsyncData", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsHideUnMatched", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsNoAnimation", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsSelectMode", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowIcon", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsCustomTree", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTreeNodeComponent, [{
        type: Component,
        args: [{ selector: 'bps-tree-node', exportAs: 'bpsTreeNode', changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, animations: [treeCollapseMotion], template: "<li\n  #dragElement\n  role=\"treeitem\"\n  [style.display]=\"displayStyle\"\n  [ngClass]=\"bpsNodeClass\">\n  <ng-container *ngIf=\"bpsShowExpand && !bpsCustomTree\">\n    <span\n      [ngClass]=\"bpsNodeSwitcherClass\"\n      (click)=\"_clickExpand($event)\">\n      <ng-container *ngIf=\"isShowSwitchIcon\">\n        <ng-container *ngIf=\"!bpsTreeNode.isLoading\">\n          <ng-template\n            *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\n            [ngTemplateOutlet]=\"bpsExpandedIcon\"\n            [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\n          </ng-template>\n          <i\n            *ngIf=\"!isTemplateRef(bpsExpandedIcon)\"\n            nz-icon\n            nzType=\"caret-down\"\n            [class.ant-select-switcher-icon]=\"bpsSelectMode\"\n            [class.ant-tree-switcher-icon]=\"!bpsSelectMode\">\n          </i>\n        </ng-container>\n        <i *ngIf=\"bpsTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"bpsShowLine\">\n        <ng-template\n          *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\n          [ngTemplateOutlet]=\"bpsExpandedIcon\"\n          [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\n        </ng-template>\n        <ng-container *ngIf=\"!isTemplateRef(bpsExpandedIcon)\">\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\n        </ng-container>\n      </ng-container>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"bpsCheckable && !bpsCustomTree\">\n    <span\n      [ngClass]=\"bpsNodeCheckboxClass\"\n      (click)=\"_clickCheckBox($event)\">\n      <span [class.ant-tree-checkbox-inner]=\"!bpsSelectMode\"\n            [class.ant-select-tree-checkbox-inner]=\"bpsSelectMode\"></span>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"!bpsTreeTemplate\">\n    <span\n      title=\"{{bpsTreeNode.title}}\"\n      [attr.draggable]=\"canDraggable\"\n      [attr.aria-grabbed]=\"canDraggable\"\n      [ngClass]=\"bpsNodeContentClass\"\n      [class.draggable]=\"canDraggable\">\n      <span\n        *ngIf=\"bpsTreeNode.icon && bpsShowIcon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"bpsTreeNode.isLoading\"\n        [ngClass]=\"bpsNodeContentLoadingClass\">\n        <span\n          [ngClass]=\"bpsNodeContentIconClass\">\n          <i nz-icon *ngIf=\"bpsIcon\" [nzType]=\"bpsIcon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\" *ngIf=\"!bpsCustomTree || bpsTreeNode.isLeaf\" [innerHTML]=\"bpsTreeNode.title | nzHighlight: bpsSearchValue: '' : 'font-highlight'\">\n      </span>\n      <img *ngIf=\"bpsCustomTree && !bpsTreeNode.isLeaf\" [src]=\"bpsTreeNode.title\"/>\n    </span>\n  </ng-container>\n  <ng-template\n    [ngTemplateOutlet]=\"bpsTreeTemplate\"\n    [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\n  </ng-template>\n\n  <ul\n    *ngIf=\"bpsTreeNode.isExpanded\"\n    role=\"group\"\n    class=\"ant-tree-child-tree\"\n    [class.ant-tree-child-tree-open]=\"!bpsSelectMode || bpsTreeNode.isExpanded\"\n    data-expanded=\"true\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    @treeCollapseMotion>\n    <bps-tree-node\n      *ngFor=\"let node of bpsTreeNode.getChildren()\"\n      [bpsTreeNode]=\"node\"\n      [bpsShowExpand]=\"bpsShowExpand\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      [bpsSelectMode]=\"bpsSelectMode\"\n      [bpsShowLine]=\"bpsShowLine\"\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\n      [bpsDraggable]=\"bpsDraggable\"\n      [bpsCheckable]=\"bpsCheckable\"\n      [bpsAsyncData]=\"bpsAsyncData\"\n      [bpsExpandAll]=\"bpsExpandAll\"\n      [bpsShowIcon]=\"bpsShowIcon\"\n      [bpsSearchValue]=\"bpsSearchValue\"\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\n      [bpsTreeTemplate]=\"bpsTreeTemplate\">\n    </bps-tree-node>\n  </ul>\n</li>\n" }]
    }], function () { return [{ type: i1.NzTreeBaseService }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { dragElement: [{
            type: ViewChild,
            args: ['dragElement', { static: false }]
        }], bpsTreeNode: [{
            type: Input
        }], bpsShowLine: [{
            type: Input
        }], bpsShowExpand: [{
            type: Input
        }], bpsCheckable: [{
            type: Input
        }], bpsAsyncData: [{
            type: Input
        }], bpsHideUnMatched: [{
            type: Input
        }], bpsNoAnimation: [{
            type: Input
        }], bpsSelectMode: [{
            type: Input
        }], bpsShowIcon: [{
            type: Input
        }], bpsExpandedIcon: [{
            type: Input
        }], bpsTreeTemplate: [{
            type: Input
        }], bpsBeforeDrop: [{
            type: Input
        }], bpsSearchValue: [{
            type: Input
        }], bpsCustomTree: [{
            type: Input
        }], bpsDraggable: [{
            type: Input
        }], bpsDefaultExpandAll: [{
            type: Input
        }], bpsExpandAll: [{
            type: Input
        }], onMousedown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], nzClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], nzDblClick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }], nzContextMenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRyZWUtbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL2Jwcy10cmVlLW5vZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtdHJlZS9icHMtdHJlZS1ub2RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osWUFBWSxFQUNaLEtBQUssRUFLTCxRQUFRLEVBRVIsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxZQUFZLEdBQ2IsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFDTCxrQkFBa0IsR0FDbkIsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7SUNqQjVCLG9JQUljOzs7SUFGWiwwREFBb0MsNEVBQUE7OztJQUd0Qyx1QkFNSTs7O0lBRkYsaUVBQWdELGtEQUFBOzs7SUFWcEQsNkJBQTZDO0lBQzNDLDZHQUljO0lBQ2QsOEdBTUk7SUFDTiwwQkFBZTs7O0lBWFYsZUFBb0M7SUFBcEMsbUVBQW9DO0lBS3BDLGVBQXFDO0lBQXJDLG9FQUFxQzs7O0lBTzFDLHVCQUFxSDs7SUFBM0QsNkJBQWU7OztJQWYzRSw2QkFBdUM7SUFDckMscUhBYWU7SUFDZiwrRkFB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QUVtQixhQUFhO2tCQUFyQyxLQUFLO1lBR0YsWUFBWTtrQkFEZixLQUFLO1lBY0YsbUJBQW1CO2tCQUR0QixLQUFLO1lBZUYsWUFBWTtrQkFEZixLQUFLO1lBdUhOLFdBQVc7a0JBRFYsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFXckMsT0FBTztrQkFETixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQWlCakMsVUFBVTtrQkFEVCxZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVlwQyxhQUFhO2tCQURaLFlBQVk7bUJBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIElucHV0Qm9vbGVhbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgd2FybkRlcHJlY2F0aW9uLFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xyXG5pbXBvcnQge1xyXG4gIHRyZWVDb2xsYXBzZU1vdGlvbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHtcclxuICBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQge1xyXG4gIE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LFxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgTnpUcmVlTm9kZVxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Utbm9kZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy10cmVlLW5vZGUnLFxyXG4gIGV4cG9ydEFzOiAnYnBzVHJlZU5vZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdHJlZS1ub2RlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbdHJlZUNvbGxhcHNlTW90aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVHJlZU5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdkcmFnRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqXHJcbiAgICogZm9yIGdsb2JhbCBwcm9wZXJ0eVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGJwc1RyZWVOb2RlOiBOelRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93TGluZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0V4cGFuZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ2hlY2thYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBc3luY0RhdGE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0hpZGVVbk1hdGNoZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VsZWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93SWNvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc0V4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgYnBzVHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBASW5wdXQoKSBicHNCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgQElucHV0KCkgYnBzU2VhcmNoVmFsdWUgPSAnJztcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0N1c3RvbVRyZWUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNEcmFnZ2FibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Jwc0RyYWdnYWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5oYW5kRHJhZ0V2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYnBzRHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jwc0RyYWdnYWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbnpFeHBhbmRBbGxgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRGVmYXVsdEV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnYnBzRGVmYXVsdEV4cGFuZEFsbCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnYnBzRXhwYW5kQWxsJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5fYnBzRXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5icHNUcmVlTm9kZSAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBicHNEZWZhdWx0RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jwc0V4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIC8vIGRlZmF1bHQgc2V0XHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9icHNFeHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLmJwc1RyZWVOb2RlICYmICF0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGJwc0V4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9icHNFeHBhbmRBbGw7XHJcbiAgfVxyXG5cclxuICAvLyBkZWZhdWx0IHZhclxyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgYnBzTm9kZUNsYXNzID0ge307XHJcbiAgYnBzTm9kZVN3aXRjaGVyQ2xhc3MgPSB7fTtcclxuICBicHNOb2RlQ29udGVudENsYXNzID0ge307XHJcbiAgYnBzTm9kZUNoZWNrYm94Q2xhc3MgPSB7fTtcclxuICBicHNOb2RlQ29udGVudEljb25DbGFzcyA9IHt9O1xyXG4gIGJwc05vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIGRyYWcgdmFyXHJcbiAgICovXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIGRyYWdQb3MgPSAyO1xyXG4gIGRyYWdQb3NDbGFzczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICcwJzogJ2RyYWctb3ZlcicsXHJcbiAgICAnMSc6ICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsXHJcbiAgICAnLTEnOiAnZHJhZy1vdmVyLWdhcC10b3AnXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogZGVmYXVsdCBzZXRcclxuICAgKi9cclxuICBfYnBzRHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgX2Jwc0V4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBnZXQgYnBzSWNvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYnBzVHJlZU5vZGUuaWNvbjtcclxuICB9XHJcblxyXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuYnBzRHJhZ2dhYmxlICYmICF0aGlzLmJwc1RyZWVOb2RlLmlzRGlzYWJsZWQgPyB0cnVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1Nob3dMaW5lSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYgJiYgdGhpcy5icHNTaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1Nob3dTd2l0Y2hJY29uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZiAmJiAhdGhpcy5icHNTaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZjtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcclxuICAgIC8vIHRvIGhpZGUgdW5tYXRjaGVkIG5vZGVzXHJcbiAgICByZXR1cm4gdGhpcy5icHNTZWFyY2hWYWx1ZSAmJlxyXG4gICAgICB0aGlzLmJwc0hpZGVVbk1hdGNoZWQgJiZcclxuICAgICAgIXRoaXMuYnBzVHJlZU5vZGUuaXNNYXRjaGVkICYmXHJcbiAgICAgICF0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQgJiZcclxuICAgICAgdGhpcy5icHNUcmVlTm9kZS5jYW5IaWRlXHJcbiAgICAgID8gJ25vbmUnXHJcbiAgICAgIDogJyc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBub2RlIGNsYXNzXHJcbiAgICovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZWZpeENscyA9IHRoaXMuYnBzU2VsZWN0TW9kZSA/ICdhbnQtc2VsZWN0LXRyZWUnIDogJ2FudC10cmVlJztcclxuICAgIHRoaXMuYnBzTm9kZUNsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWRpc2FibGVkYF06IHRoaXMuYnBzVHJlZU5vZGUuaXNEaXNhYmxlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc3dpdGNoZXItY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2UsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1jaGVja2JveC1pbmRldGVybWluYXRlYF06IHRoaXMuYnBzVHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zZWxlY3RlZGBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzU2VsZWN0ZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtbG9hZGluZ2BdOiB0aGlzLmJwc1RyZWVOb2RlLmlzTG9hZGluZ1xyXG4gICAgfTtcclxuICAgIHRoaXMuYnBzTm9kZVN3aXRjaGVyQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlci1ub29wYF06IHRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyX29wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJwc05vZGVDaGVja2JveENsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1pbmRldGVybWluYXRlYF06IHRoaXMuYnBzVHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1kaXNhYmxlZGBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy5icHNUcmVlTm9kZS5pc0Rpc2FibGVDaGVja2JveFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJwc05vZGVDb250ZW50Q2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXJgXTogdHJ1ZSxcclxuICAgICAgW2BicHMtdHJlZS1sZWFmYF06IHRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmLFxyXG4gICAgICBbYGJwcy10cmVlLXBhcmVudGBdOiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXItb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLWNsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtc2VsZWN0ZWRgXTogdGhpcy5icHNUcmVlTm9kZS5pc1NlbGVjdGVkXHJcbiAgICB9O1xyXG4gICAgdGhpcy5icHNOb2RlQ29udGVudEljb25DbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbl9fY3VzdG9taXplYF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLmJwc05vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgXTogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25Nb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc1NlbGVjdE1vZGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNsaWNrIG5vZGUgdG8gc2VsZWN0LCAyMDBtcyB0byBkYmwgY2xpY2tcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgbnpDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMuYnBzVHJlZU5vZGUuaXNTZWxlY3RhYmxlICYmICF0aGlzLmJwc1RyZWVOb2RlLmlzRGlzYWJsZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmJwc1RyZWVOb2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmJwc1RyZWVOb2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmJwc0N1c3RvbVRyZWUpIHtcclxuICAgICAgICB0aGlzLl9jbGlja0V4cGFuZChldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLmJwc1RyZWVOb2RlLCBldmVudCk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcclxuICBuekRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5icHNUcmVlTm9kZSwgZXZlbnQpO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgbnpDb250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjb250ZXh0bWVudScsIHRoaXMuYnBzVHJlZU5vZGUsIGV2ZW50KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29sbGFwc2Ugbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0V4cGFuZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmJwc1RyZWVOb2RlLmlzTG9hZGluZyAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXHJcbiAgICAgIGlmICh0aGlzLmJwc0FzeW5jRGF0YSAmJiB0aGlzLmJwc1RyZWVOb2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkKSB7XHJcbiAgICAgICAgdGhpcy5icHNUcmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYnBzVHJlZU5vZGUuaXNFeHBhbmRlZCA9ICF0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQ7XHJcbiAgICAgIGlmICh0aGlzLmJwc1RyZWVOb2RlLmlzTWF0Y2hlZCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGlzcGxheUZvclBhcmVudE5vZGVzKHRoaXMuYnBzVHJlZU5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0RGlzcGxheUZvckNoaWxkTm9kZXModGhpcy5icHNUcmVlTm9kZSk7XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy5icHNUcmVlTm9kZSwgZXZlbnQpO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGlzcGxheUZvckNoaWxkTm9kZXMocGFyZW50Tm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcGFyZW50Tm9kZTtcclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNoaWxkcmVuLm1hcChub2RlID0+IHtcclxuICAgICAgICBjb25zdCBjYW5IaWRlID0gIW5vZGUuaXNNYXRjaGVkO1xyXG4gICAgICAgIG5vZGUuY2FuSGlkZSA9IGNhbkhpZGU7XHJcbiAgICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yQ2hpbGROb2Rlcyhub2RlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERpc3BsYXlGb3JQYXJlbnROb2Rlcyh0YXJnZXROb2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNhbkhpZGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZXREaXNwbGF5Rm9yUGFyZW50Tm9kZXMocGFyZW50Tm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVjayBub2RlXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgX2NsaWNrQ2hlY2tCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIC8vIHJldHVybiBpZiBub2RlIGlzIGRpc2FibGVkXHJcbiAgICBpZiAodGhpcy5icHNUcmVlTm9kZS5pc0Rpc2FibGVkIHx8IHRoaXMuYnBzVHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3gpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5icHNUcmVlTm9kZS5pc0NoZWNrZWQgPSAhdGhpcy5icHNUcmVlTm9kZS5pc0NoZWNrZWQ7XHJcbiAgICB0aGlzLmJwc1RyZWVOb2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdCh0aGlzLmJwc1RyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2hlY2snLCB0aGlzLmJwc1RyZWVOb2RlLCBldmVudCk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRyYWcgZXZlbnRcclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIGNsZWFyRHJhZ0NsYXNzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZHJhZ0NsYXNzID0gWydkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInXTtcclxuICAgIGRyYWdDbGFzcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBpZSB0aHJvdyBlcnJvclxyXG4gICAgICAvLyBmaXJlZm94LW5lZWQtaXRcclxuICAgICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmJwc1RyZWVOb2RlLmtleSEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gZW1wdHlcclxuICAgIH1cclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUodGhpcy5icHNUcmVlTm9kZSk7XHJcbiAgICB0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgdGhpcy5icHNUcmVlTm9kZSwgZSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdFbnRlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXNldCBwb3NpdGlvblxyXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XHJcbiAgICAgIGlmIChub2RlICYmIG5vZGUua2V5ICE9PSB0aGlzLmJwc1RyZWVOb2RlLmtleSAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICAgIHRoaXMuYnBzVHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW50ZXInLCB0aGlzLmJwc1RyZWVOb2RlLCBlKTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGRyb3BQb3NpdGlvbiA9IHRoaXMubnpUcmVlU2VydmljZS5jYWxjRHJvcFBvc2l0aW9uKGUpO1xyXG4gICAgaWYgKHRoaXMuZHJhZ1BvcyAhPT0gZHJvcFBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgICAgdGhpcy5kcmFnUG9zID0gZHJvcFBvc2l0aW9uO1xyXG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXHJcbiAgICAgIGlmICghKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5kcmFnUG9zQ2xhc3NbdGhpcy5kcmFnUG9zXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLmJwc1RyZWVOb2RlLCBlKTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnbGVhdmUnLCB0aGlzLmJwc1RyZWVOb2RlLCBlKTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0Ryb3AoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAoIW5vZGUgfHwgKG5vZGUgJiYgbm9kZS5rZXkgPT09IHRoaXMuYnBzVHJlZU5vZGUua2V5KSB8fCAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXHJcbiAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMuYnBzVHJlZU5vZGUsIGUpO1xyXG4gICAgICBjb25zdCBkcmFnRW5kRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLmJwc1RyZWVOb2RlLCBlKTtcclxuICAgICAgaWYgKHRoaXMuYnBzQmVmb3JlRHJvcCkge1xyXG4gICAgICAgIHRoaXMuYnBzQmVmb3JlRHJvcCh7XHJcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpISxcclxuICAgICAgICAgIG5vZGU6IHRoaXMuYnBzVHJlZU5vZGUsXHJcbiAgICAgICAgICBwb3M6IHRoaXMuZHJhZ1Bvc1xyXG4gICAgICAgIH0pLnN1YnNjcmliZSgoY2FuRHJvcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLmJwc1RyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJhZ0VuZEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmJwc1RyZWVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLmJwc1RyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgLy8gaWYgdXNlciBkbyBub3QgY3VzdG9tIGJlZm9yZURyb3BcclxuICAgICAgaWYgKCF0aGlzLmJwc0JlZm9yZURyb3ApIHtcclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLmJwc1RyZWVOb2RlLCBlKTtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0ZW5pbmcgdG8gZHJhZ2dpbmcgZXZlbnRzLlxyXG4gICAqL1xyXG4gIGhhbmREcmFnRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmJwc0RyYWdnYWJsZSkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdzdGFydCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW50ZXInKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbnRlcihlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdPdmVyKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdMZWF2ZShlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJvcCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0Ryb3AoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbmQoZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56VHJlZVNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gaW5pdCBleHBhbmRlZCAvIHNlbGVjdGVkIC8gY2hlY2tlZCBsaXN0XHJcbiAgICBpZiAodGhpcy5icHNUcmVlTm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMuYnBzVHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnBzVHJlZU5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLmJwc1RyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJwc1RyZWVOb2RlLmlzQ2hlY2tlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMuYnBzVHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ET1xyXG4gICAgdGhpcy5icHNUcmVlTm9kZS5jb21wb25lbnQgPSB0aGlzO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKGRhdGEgPT4gZGF0YS5ub2RlIS5rZXkgPT09IHRoaXMuYnBzVHJlZU5vZGUua2V5KSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxsaVxuICAjZHJhZ0VsZW1lbnRcbiAgcm9sZT1cInRyZWVpdGVtXCJcbiAgW3N0eWxlLmRpc3BsYXldPVwiZGlzcGxheVN0eWxlXCJcbiAgW25nQ2xhc3NdPVwiYnBzTm9kZUNsYXNzXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNTaG93RXhwYW5kICYmICFicHNDdXN0b21UcmVlXCI+XG4gICAgPHNwYW5cbiAgICAgIFtuZ0NsYXNzXT1cImJwc05vZGVTd2l0Y2hlckNsYXNzXCJcbiAgICAgIChjbGljayk9XCJfY2xpY2tFeHBhbmQoJGV2ZW50KVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2hvd1N3aXRjaEljb25cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFicHNUcmVlTm9kZS5pc0xvYWRpbmdcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgICAgICpuZ0lmPVwiaXNUZW1wbGF0ZVJlZihicHNFeHBhbmRlZEljb24pXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc0V4cGFuZGVkSWNvblwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGJwc1RyZWVOb2RlIH1cIj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDxpXG4gICAgICAgICAgICAqbmdJZj1cIiFpc1RlbXBsYXRlUmVmKGJwc0V4cGFuZGVkSWNvbilcIlxuICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgbnpUeXBlPVwiY2FyZXQtZG93blwiXG4gICAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1zd2l0Y2hlci1pY29uXT1cImJwc1NlbGVjdE1vZGVcIlxuICAgICAgICAgICAgW2NsYXNzLmFudC10cmVlLXN3aXRjaGVyLWljb25dPVwiIWJwc1NlbGVjdE1vZGVcIj5cbiAgICAgICAgICA8L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8aSAqbmdJZj1cImJwc1RyZWVOb2RlLmlzTG9hZGluZ1wiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiIFtuelNwaW5dPVwidHJ1ZVwiIGNsYXNzPVwiYW50LXRyZWUtc3dpdGNoZXItbG9hZGluZy1pY29uXCI+PC9pPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnBzU2hvd0xpbmVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgKm5nSWY9XCJpc1RlbXBsYXRlUmVmKGJwc0V4cGFuZGVkSWNvbilcIlxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc0V4cGFuZGVkSWNvblwiXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBicHNUcmVlTm9kZSB9XCI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZVJlZihicHNFeHBhbmRlZEljb24pXCI+XG4gICAgICAgICAgPGkgKm5nSWY9XCJpc1Nob3dMaW5lSWNvblwiIG56LWljb24gW256VHlwZV09XCJpc1N3aXRjaGVyT3BlbiA/ICdtaW51cy1zcXVhcmUnIDogJ3BsdXMtc3F1YXJlJ1wiIGNsYXNzPVwiYW50LXRyZWUtc3dpdGNoZXItbGluZS1pY29uXCI+PC9pPlxuICAgICAgICAgIDxpICpuZ0lmPVwiIWlzU2hvd0xpbmVJY29uXCIgbnotaWNvbiBuelR5cGU9XCJmaWxlXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1saW5lLWljb25cIj48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9zcGFuPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc0NoZWNrYWJsZSAmJiAhYnBzQ3VzdG9tVHJlZVwiPlxuICAgIDxzcGFuXG4gICAgICBbbmdDbGFzc109XCJicHNOb2RlQ2hlY2tib3hDbGFzc1wiXG4gICAgICAoY2xpY2spPVwiX2NsaWNrQ2hlY2tCb3goJGV2ZW50KVwiPlxuICAgICAgPHNwYW4gW2NsYXNzLmFudC10cmVlLWNoZWNrYm94LWlubmVyXT1cIiFicHNTZWxlY3RNb2RlXCJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtY2hlY2tib3gtaW5uZXJdPVwiYnBzU2VsZWN0TW9kZVwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWJwc1RyZWVUZW1wbGF0ZVwiPlxuICAgIDxzcGFuXG4gICAgICB0aXRsZT1cInt7YnBzVHJlZU5vZGUudGl0bGV9fVwiXG4gICAgICBbYXR0ci5kcmFnZ2FibGVdPVwiY2FuRHJhZ2dhYmxlXCJcbiAgICAgIFthdHRyLmFyaWEtZ3JhYmJlZF09XCJjYW5EcmFnZ2FibGVcIlxuICAgICAgW25nQ2xhc3NdPVwiYnBzTm9kZUNvbnRlbnRDbGFzc1wiXG4gICAgICBbY2xhc3MuZHJhZ2dhYmxlXT1cImNhbkRyYWdnYWJsZVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nSWY9XCJicHNUcmVlTm9kZS5pY29uICYmIGJwc1Nob3dJY29uXCJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fX29wZW5dPVwiaXNTd2l0Y2hlck9wZW5cIlxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbl9fY2xvc2VdPVwiaXNTd2l0Y2hlckNsb3NlXCJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fbG9hZGluZ109XCJicHNUcmVlTm9kZS5pc0xvYWRpbmdcIlxuICAgICAgICBbbmdDbGFzc109XCJicHNOb2RlQ29udGVudExvYWRpbmdDbGFzc1wiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIFtuZ0NsYXNzXT1cImJwc05vZGVDb250ZW50SWNvbkNsYXNzXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiAqbmdJZj1cImJwc0ljb25cIiBbbnpUeXBlXT1cImJwc0ljb25cIj48L2k+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRyZWUtdGl0bGVcIiAqbmdJZj1cIiFicHNDdXN0b21UcmVlIHx8IGJwc1RyZWVOb2RlLmlzTGVhZlwiIFtpbm5lckhUTUxdPVwiYnBzVHJlZU5vZGUudGl0bGUgfCBuekhpZ2hsaWdodDogYnBzU2VhcmNoVmFsdWU6ICcnIDogJ2ZvbnQtaGlnaGxpZ2h0J1wiPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGltZyAqbmdJZj1cImJwc0N1c3RvbVRyZWUgJiYgIWJwc1RyZWVOb2RlLmlzTGVhZlwiIFtzcmNdPVwiYnBzVHJlZU5vZGUudGl0bGVcIi8+XG4gICAgPC9zcGFuPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzVHJlZVRlbXBsYXRlXCJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGJwc1RyZWVOb2RlIH1cIj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8dWxcbiAgICAqbmdJZj1cImJwc1RyZWVOb2RlLmlzRXhwYW5kZWRcIlxuICAgIHJvbGU9XCJncm91cFwiXG4gICAgY2xhc3M9XCJhbnQtdHJlZS1jaGlsZC10cmVlXCJcbiAgICBbY2xhc3MuYW50LXRyZWUtY2hpbGQtdHJlZS1vcGVuXT1cIiFicHNTZWxlY3RNb2RlIHx8IGJwc1RyZWVOb2RlLmlzRXhwYW5kZWRcIlxuICAgIGRhdGEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgQHRyZWVDb2xsYXBzZU1vdGlvbj5cbiAgICA8YnBzLXRyZWUtbm9kZVxuICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2YgYnBzVHJlZU5vZGUuZ2V0Q2hpbGRyZW4oKVwiXG4gICAgICBbYnBzVHJlZU5vZGVdPVwibm9kZVwiXG4gICAgICBbYnBzU2hvd0V4cGFuZF09XCJicHNTaG93RXhwYW5kXCJcbiAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgIFticHNOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICBbYnBzU2VsZWN0TW9kZV09XCJicHNTZWxlY3RNb2RlXCJcbiAgICAgIFticHNTaG93TGluZV09XCJicHNTaG93TGluZVwiXG4gICAgICBbYnBzRXhwYW5kZWRJY29uXT1cImJwc0V4cGFuZGVkSWNvblwiXG4gICAgICBbYnBzRHJhZ2dhYmxlXT1cImJwc0RyYWdnYWJsZVwiXG4gICAgICBbYnBzQ2hlY2thYmxlXT1cImJwc0NoZWNrYWJsZVwiXG4gICAgICBbYnBzQXN5bmNEYXRhXT1cImJwc0FzeW5jRGF0YVwiXG4gICAgICBbYnBzRXhwYW5kQWxsXT1cImJwc0V4cGFuZEFsbFwiXG4gICAgICBbYnBzU2hvd0ljb25dPVwiYnBzU2hvd0ljb25cIlxuICAgICAgW2Jwc1NlYXJjaFZhbHVlXT1cImJwc1NlYXJjaFZhbHVlXCJcbiAgICAgIFticHNIaWRlVW5NYXRjaGVkXT1cImJwc0hpZGVVbk1hdGNoZWRcIlxuICAgICAgW2Jwc0JlZm9yZURyb3BdPVwiYnBzQmVmb3JlRHJvcFwiXG4gICAgICBbYnBzVHJlZVRlbXBsYXRlXT1cImJwc1RyZWVUZW1wbGF0ZVwiPlxuICAgIDwvYnBzLXRyZWUtbm9kZT5cbiAgPC91bD5cbjwvbGk+XG4iXX0=