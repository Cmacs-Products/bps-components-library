import { __decorate, __read, __spread, __param, __extends } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Renderer2, ElementRef, Input, Directive, NgZone, ContentChildren, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, Pipe, ChangeDetectorRef, EventEmitter, ViewChildren, Output, Host, Optional, forwardRef, ContentChild, NgModule } from '@angular/core';
import { en_US, NgZorroAntdModule, NzNoAnimationModule, NzOverlayModule, NZ_I18N } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { InputBoolean, NzDomEventService, isNotNil, isNil, NzNoAnimationDirective, zoomMotion, toBoolean, slideMotion, warnDeprecation, helpMotion, NzUpdateHostClassService, NzConfigService, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NG_VALUE_ACCESSOR, FormControl, NgModel, FormControlName, FormControlDirective, NgControl, FormsModule } from '@angular/forms';
import { Platform } from '@angular/cdk/platform';
import { Subject, BehaviorSubject, ReplaySubject, combineLatest, merge, fromEvent, EMPTY, Subscription } from 'rxjs';
import { takeUntil, finalize, distinctUntilChanged, map, filter, skip, share, tap, pairwise, startWith, flatMap } from 'rxjs/operators';
import { TAB, SPACE, BACKSPACE, ENTER, DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { MediaMatcher } from '@angular/cdk/layout';

var BpsComponentsLibService = /** @class */ (function () {
    function BpsComponentsLibService() {
    }
    BpsComponentsLibService.ɵprov = ɵɵdefineInjectable({ factory: function BpsComponentsLibService_Factory() { return new BpsComponentsLibService(); }, token: BpsComponentsLibService, providedIn: "root" });
    BpsComponentsLibService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], BpsComponentsLibService);
    return BpsComponentsLibService;
}());

var BpsComponentsLibComponent = /** @class */ (function () {
    function BpsComponentsLibComponent() {
    }
    BpsComponentsLibComponent.prototype.ngOnInit = function () {
    };
    BpsComponentsLibComponent = __decorate([
        Component({
            selector: 'lib-bps-components-lib',
            template: "\n    <p>\n      bps-components-lib works!\n    </p>\n  "
        })
    ], BpsComponentsLibComponent);
    return BpsComponentsLibComponent;
}());

var BpsInputDirective = /** @class */ (function () {
    function BpsInputDirective(renderer, elementRef) {
        this.bpsSize = 'default';
        this.disabled = false;
        this.centered = false;
        this.opened = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    BpsInputDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], BpsInputDirective.prototype, "bpsSize", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputDirective.prototype, "disabled", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputDirective.prototype, "centered", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputDirective.prototype, "opened", void 0);
    BpsInputDirective = __decorate([
        Directive({
            selector: '[bps-input]',
            exportAs: 'bpsInput',
            host: {
                '[class.ant-input-disabled]': 'disabled',
                '[class.ant-input-lg]': "bpsSize === 'large'",
                '[class.ant-input-sm]': "bpsSize === 'small'",
                '[class.bps-input-centered]': "centered",
                '[class.bps-input-opened]': "opened"
            }
        })
    ], BpsInputDirective);
    return BpsInputDirective;
}());

function isAutoSizeType(value) {
    return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
}
var BpsAutosizeDirective = /** @class */ (function () {
    function BpsAutosizeDirective(elementRef, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    Object.defineProperty(BpsAutosizeDirective.prototype, "bpsAutosize", {
        get: function () {
            return this.autosize;
        },
        set: function (value) {
            if (typeof value === 'string') {
                this.autosize = true;
            }
            else if (isAutoSizeType(value)) {
                this.autosize = value;
                this.minRows = value.minRows;
                this.maxRows = value.maxRows;
                this.setMaxHeight();
                this.setMinHeight();
            }
        },
        enumerable: true,
        configurable: true
    });
    BpsAutosizeDirective.prototype.resizeToFitContent = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        var textarea = this.el;
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
            this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(function () {
                return requestAnimationFrame(function () {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                });
            });
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    };
    BpsAutosizeDirective.prototype.cacheTextareaLineHeight = function () {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        var textareaClone = this.el.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.setMinHeight();
        this.setMaxHeight();
    };
    BpsAutosizeDirective.prototype.setMinHeight = function () {
        var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    };
    BpsAutosizeDirective.prototype.setMaxHeight = function () {
        var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    };
    BpsAutosizeDirective.prototype.noopInputHandler = function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    BpsAutosizeDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.bpsAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                .subscribe(function () { return _this.resizeToFitContent(true); });
        }
    };
    BpsAutosizeDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    BpsAutosizeDirective.prototype.ngDoCheck = function () {
        if (this.bpsAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    BpsAutosizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Platform },
        { type: NzDomEventService }
    ]; };
    __decorate([
        Input()
    ], BpsAutosizeDirective.prototype, "bpsAutosize", null);
    BpsAutosizeDirective = __decorate([
        Directive({
            selector: 'textarea[bpsAutosize]',
            exportAs: 'bpsAutosize',
            host: {
                // Textarea elements that have the directive applied should have a single row by default.
                // Browsers normally show two rows by default and therefore this limits the minRows binding.
                rows: '1',
                '(input)': 'noopInputHandler()'
            }
        })
    ], BpsAutosizeDirective);
    return BpsAutosizeDirective;
}());

var BpsInputGroupComponent = /** @class */ (function () {
    function BpsInputGroupComponent() {
        this._size = 'default';
        this.bpsSearch = false;
        this.bpsCompact = false;
    }
    Object.defineProperty(BpsInputGroupComponent.prototype, "bpsSize", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.updateChildrenInputSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLarge", {
        get: function () {
            return this.bpsSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmall", {
        get: function () {
            return this.bpsSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isAffix", {
        get: function () {
            return !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isAddOn", {
        get: function () {
            return !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isAffixWrapper", {
        get: function () {
            return this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isGroup", {
        get: function () {
            return !this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeGroup", {
        get: function () {
            return this.isGroup && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeGroupWrapper", {
        get: function () {
            return this.isAddOn && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeAffix", {
        get: function () {
            return this.isAffixWrapper && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isLargeSearch", {
        get: function () {
            return this.bpsSearch && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallGroup", {
        get: function () {
            return this.isGroup && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallAffix", {
        get: function () {
            return this.isAffixWrapper && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallGroupWrapper", {
        get: function () {
            return this.isAddOn && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsInputGroupComponent.prototype, "isSmallSearch", {
        get: function () {
            return this.bpsSearch && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    BpsInputGroupComponent.prototype.updateChildrenInputSize = function () {
        var _this = this;
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(function (item) { return (item.bpsSize = _this.bpsSize); });
        }
    };
    BpsInputGroupComponent.prototype.ngAfterContentInit = function () {
        this.updateChildrenInputSize();
    };
    __decorate([
        ContentChildren(BpsInputDirective)
    ], BpsInputGroupComponent.prototype, "listOfNzInputDirective", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnBeforeIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnAfterIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsPrefixIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsSuffixIcon", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnBefore", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsAddOnAfter", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsPrefix", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsSuffix", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputGroupComponent.prototype, "bpsSearch", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsInputGroupComponent.prototype, "bpsCompact", void 0);
    __decorate([
        Input()
    ], BpsInputGroupComponent.prototype, "bpsSize", null);
    BpsInputGroupComponent = __decorate([
        Component({
            selector: 'bps-input-group',
            exportAs: 'bpsInputGroup',
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\n  <span class=\"ant-input-group-addon\" *ngIf=\"bpsAddOnBefore || bpsAddOnBeforeIcon\">\n    <i nz-icon [nzType]=\"bpsAddOnBeforeIcon\" *ngIf=\"bpsAddOnBeforeIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsAddOnBefore\">{{ bpsAddOnBefore }}</ng-container>\n  </span>\n  <ng-container *ngIf=\"!isAffix\">\n    <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  </ng-container>\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n  </span>\n  <span class=\"ant-input-group-addon\" *ngIf=\"bpsAddOnAfter || bpsAddOnAfterIcon\">\n    <i nz-icon [nzType]=\"bpsAddOnAfterIcon\" *ngIf=\"bpsAddOnAfterIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsAddOnAfter\">{{ bpsAddOnAfter }}</ng-container>\n  </span>\n</span>\n<ng-container *ngIf=\"isAffix && !isAddOn\">\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n</ng-container>\n<ng-template #affixTemplate>\n  <span class=\"ant-input-prefix\" *ngIf=\"bpsPrefix || bpsPrefixIcon\">\n    <!-- TODO: should have a class to set its color, cc: antd-->\n    <i nz-icon [nzType]=\"bpsPrefixIcon\" *ngIf=\"bpsPrefixIcon\" style=\"color: rgba(0, 0, 0, 0.25)\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsPrefix\">{{ bpsPrefix }}</ng-container>\n  </span>\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-suffix\" *ngIf=\"bpsSuffix || bpsSuffixIcon\">\n    <i nz-icon [nzType]=\"bpsSuffixIcon\" *ngIf=\"bpsSuffixIcon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"bpsSuffix\">{{ bpsSuffix }}</ng-container>\n  </span>\n</ng-template>\n<ng-container *ngIf=\"isGroup\">\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n</ng-container>\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n",
            host: {
                '[class.ant-input-group-compact]': 'bpsCompact',
                '[class.ant-input-search-enter-button]': 'bpsSearch',
                '[class.ant-input-search]': 'bpsSearch',
                '[class.ant-input-search-sm]': 'isSmallSearch',
                '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                '[class.ant-input-group-wrapper]': 'isAddOn',
                '[class.ant-input-group]': 'isGroup',
                '[class.ant-input-group-lg]': 'isLargeGroup',
                '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                '[class.ant-input-search-lg]': 'isLargeSearch',
                '[class.ant-input-group-sm]': 'isSmallGroup',
                '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
            }
        })
    ], BpsInputGroupComponent);
    return BpsInputGroupComponent;
}());

var BpsOptionComponent = /** @class */ (function () {
    function BpsOptionComponent() {
        this.changes = new Subject();
        this.bpsDisabled = false;
        this.bpsHide = false;
        this.bpsCustomContent = false;
    }
    BpsOptionComponent.prototype.ngOnChanges = function () {
        this.changes.next();
    };
    __decorate([
        ViewChild(TemplateRef, { static: false })
    ], BpsOptionComponent.prototype, "template", void 0);
    __decorate([
        Input()
    ], BpsOptionComponent.prototype, "bpsLabel", void 0);
    __decorate([
        Input()
    ], BpsOptionComponent.prototype, "bpsValue", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsOptionComponent.prototype, "bpsDisabled", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsOptionComponent.prototype, "bpsHide", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsOptionComponent.prototype, "bpsCustomContent", void 0);
    BpsOptionComponent = __decorate([
        Component({
            selector: 'bps-option',
            exportAs: 'bpsOption',
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
        })
    ], BpsOptionComponent);
    return BpsOptionComponent;
}());

var BpsFilterOptionPipe = /** @class */ (function () {
    function BpsFilterOptionPipe() {
    }
    BpsFilterOptionPipe.prototype.transform = function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return options.filter(function (o) { return filterOption(searchValue, o); });
        }
    };
    BpsFilterOptionPipe = __decorate([
        Pipe({ name: 'bpsFilterOption' })
    ], BpsFilterOptionPipe);
    return BpsFilterOptionPipe;
}());
var BpsFilterGroupOptionPipe = /** @class */ (function () {
    function BpsFilterGroupOptionPipe() {
    }
    BpsFilterGroupOptionPipe.prototype.transform = function (groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return groups.filter(function (g) {
                return g.listOfNzOptionComponent.some(function (o) { return filterOption(searchValue, o); });
            });
        }
    };
    BpsFilterGroupOptionPipe = __decorate([
        Pipe({ name: 'bpsFilterGroupOption' })
    ], BpsFilterGroupOptionPipe);
    return BpsFilterGroupOptionPipe;
}());
function defaultFilterOption(searchValue, option) {
    if (option && option.bpsLabel) {
        return option.bpsLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

var BpsSelectService = /** @class */ (function () {
    function BpsSelectService() {
        var _this = this;
        // tslint:disable-next-line:jsdoc-format
        /** Input params **/
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:jsdoc-format
        /** selectedValueChanged should emit ngModelChange or not **/
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // tslint:disable-next-line:jsdoc-format
        /** ContentChildren Change **/
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // tslint:disable-next-line:jsdoc-format
        /** searchValue Change **/
        this.searchValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.isShowNotFound = false;
        // tslint:disable-next-line:jsdoc-format
        /** animation event **/
        this.animationEvent$ = new Subject();
        // tslint:disable-next-line:jsdoc-format
        /** open event **/
        this.open$ = this.openRaw$.pipe(distinctUntilChanged());
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map(function (data) { return data.value; }));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter(function (item) { return item.emit; }), map(function (data) {
            var selectedList = data.value;
            var modelValue = null; // tslint:disable-line:no-any
            if (_this.isSingleMode) {
                if (selectedList.length) {
                    modelValue = selectedList[0];
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        }));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(function (value) {
            _this.searchValue = value;
            if (value) {
                _this.updateActivatedOption(_this.listOfFilteredOption[0]);
            }
            _this.updateListOfFilteredOption();
        }));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // tslint:disable-next-line:jsdoc-format
        /** flat ViewChildren **/
        this.listOfTemplateOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** tag option **/
        this.listOfTagOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** tag option concat template option **/
        this.listOfTagAndTemplateOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** ViewChildren **/
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        // tslint:disable-next-line:jsdoc-format
        /** display in top control **/
        this.listOfCachedSelectedOption = [];
        // tslint:disable-next-line:jsdoc-format
        /** selected value or ViewChildren change **/
        this.valueOrOption$ = combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(tap(function (data) {
            var _a = __read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
            _this.listOfSelectedValue = listOfSelectedValue;
            _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
            _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
            _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce(function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
            _this.updateListOfTagOption();
            _this.updateListOfFilteredOption();
            _this.resetActivatedOptionIfNeeded();
            _this.updateListOfCachedOption();
        }), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
        // tslint:disable-next-line:no-any
        this.compareWith = function (o1, o2) { return o1 === o2; };
    }
    Object.defineProperty(BpsSelectService.prototype, "isSingleMode", {
        get: function () {
            return this.mode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectService.prototype, "isTagsMode", {
        get: function () {
            return this.mode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectService.prototype, "isMultipleMode", {
        get: function () {
            return this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectService.prototype, "isMultipleOrTags", {
        get: function () {
            return this.mode === 'tags' || this.mode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    BpsSelectService.prototype.clickOption = function (option) {
        var _this = this;
        // tslint:disable-next-line:jsdoc-format
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.bpsDisabled) {
            this.updateActivatedOption(option);
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            if (this.isMultipleOrTags) {
                var targetValue = listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.bpsValue); });
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    listOfSelectedValue.push(option.bpsValue);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.bpsValue)) {
                listOfSelectedValue = [option.bpsValue];
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if (this.isSingleMode) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    };
    BpsSelectService.prototype.updateListOfCachedOption = function () {
        var _this = this;
        if (this.isSingleMode) {
            var selectedOption = this.listOfTemplateOption.find(function (o) {
                return _this.compareWith(o.bpsValue, _this.listOfSelectedValue[0]);
            });
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            var listOfCachedSelectedOption_1 = [];
            this.listOfSelectedValue.forEach(function (v) {
                var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                var option = listOfMixedOption.find(function (o) { return _this.compareWith(o.bpsValue, v); });
                if (option) {
                    listOfCachedSelectedOption_1.push(option);
                }
            });
            this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
        }
    };
    BpsSelectService.prototype.updateListOfTagOption = function () {
        var _this = this;
        if (this.isTagsMode) {
            var listOfMissValue = this.listOfSelectedValue.filter(function (value) { return !_this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.bpsValue, value); }); });
            this.listOfTagOption = listOfMissValue.map(function (value) {
                var cachedOption = _this.listOfCachedSelectedOption.find(function (o) { return _this.compareWith(o.bpsValue, value); });
                if (cachedOption) {
                    return cachedOption;
                }
                else {
                    var nzOptionComponent = new BpsOptionComponent();
                    nzOptionComponent.bpsValue = value;
                    nzOptionComponent.bpsLabel = value;
                    return nzOptionComponent;
                }
            });
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
        }
        else {
            this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
        }
    };
    BpsSelectService.prototype.updateAddTagOption = function () {
        var _this = this;
        var isMatch = this.listOfTagAndTemplateOption.find(function (item) { return item.bpsLabel === _this.searchValue; });
        if (this.isTagsMode && this.searchValue && !isMatch) {
            var option = new BpsOptionComponent();
            option.bpsValue = this.searchValue;
            option.bpsLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    };
    BpsSelectService.prototype.updateListOfFilteredOption = function () {
        this.updateAddTagOption();
        var listOfFilteredOption = new BpsFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
        this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
    };
    BpsSelectService.prototype.clearInput = function () {
        this.clearInput$.next();
    };
    // tslint:disable-next-line:no-any
    BpsSelectService.prototype.updateListOfSelectedValue = function (value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
    };
    BpsSelectService.prototype.updateActivatedOption = function (option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    };
    BpsSelectService.prototype.tokenSeparate = function (inputValue, tokenSeparators) {
        // tslint:disable-next-line:jsdoc-format
        /** auto tokenSeparators **/
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    };
    BpsSelectService.prototype.includesSeparators = function (str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    };
    BpsSelectService.prototype.splitBySeparators = function (str, separators) {
        var reg = new RegExp("[" + separators.join() + "]");
        var array = str.split(reg).filter(function (token) { return token; });
        return Array.from(new Set(array));
    };
    BpsSelectService.prototype.resetActivatedOptionIfNeeded = function () {
        var _this = this;
        var resetActivatedOption = function () {
            var activatedOption = _this.listOfFilteredOption.find(function (item) {
                return _this.compareWith(item.bpsValue, _this.listOfSelectedValue[0]);
            });
            _this.updateActivatedOption(activatedOption || null);
        };
        if (this.activatedOption) {
            if (
            // tslint:disable-next-line:no-non-null-assertion
            !this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.bpsValue, _this.activatedOption.bpsValue); }) ||
                // tslint:disable-next-line:no-non-null-assertion
                !this.listOfSelectedValue.find(function (item) { return _this.compareWith(item, _this.activatedOption.bpsValue); })) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    };
    BpsSelectService.prototype.updateTemplateOption = function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
    };
    BpsSelectService.prototype.updateSearchValue = function (value) {
        this.searchValueRaw$.next(value);
    };
    BpsSelectService.prototype.updateSelectedValueByLabelList = function (listOfLabel) {
        var _this = this;
        var listOfSelectedValue = __spread(this.listOfSelectedValue);
        var listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter(function (item) { return listOfLabel.indexOf(item.bpsLabel) !== -1; })
            .map(function (item) { return item.bpsValue; })
            .filter(function (item) { return !isNotNil(_this.listOfSelectedValue.find(function (v) { return _this.compareWith(v, item); })); });
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
        }
        else {
            var listOfUnMatchOptionValue = listOfLabel.filter(function (label) { return _this.listOfTagAndTemplateOption.map(function (item) { return item.bpsLabel; }).indexOf(label) === -1; });
            this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
        }
    };
    BpsSelectService.prototype.onKeyDown = function (e) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        var keyCode = e.keyCode;
        var eventTarget = e.target;
        var listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter(function (item) { return !item.bpsDisabled && !item.bpsHide; });
        var activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex(function (item) { return item === _this.activatedOption; });
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.bpsDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    };
    // tslint:disable-next-line:no-any
    BpsSelectService.prototype.removeValueFormSelected = function (option) {
        var _this = this;
        if (this.disabled || option.bpsDisabled) {
            return;
        }
        var listOfSelectedValue = this.listOfSelectedValue.filter(function (item) { return !_this.compareWith(item, option.bpsValue); });
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    };
    BpsSelectService.prototype.setOpenState = function (value) {
        this.openRaw$.next(value);
        this.open = value;
    };
    BpsSelectService.prototype.check = function () {
        this.checkRaw$.next();
    };
    BpsSelectService = __decorate([
        Injectable()
    ], BpsSelectService);
    return BpsSelectService;
}());

var BpsOptionLiComponent = /** @class */ (function () {
    function BpsOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    BpsOptionLiComponent.prototype.clickOption = function () {
        this.nzSelectService.clickOption(this.bpsOption);
    };
    BpsOptionLiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe(function (list) {
            _this.selected = isNotNil(list.find(function (v) { return _this.nzSelectService.compareWith(v, _this.bpsOption.bpsValue); }));
            _this.cdr.markForCheck();
        });
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(function (option) {
            if (option) {
                _this.active = _this.nzSelectService.compareWith(option.bpsValue, _this.bpsOption.bpsValue);
            }
            else {
                _this.active = false;
            }
            _this.cdr.markForCheck();
        });
    };
    BpsOptionLiComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    BpsOptionLiComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: BpsSelectService },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], BpsOptionLiComponent.prototype, "bpsOption", void 0);
    __decorate([
        Input()
    ], BpsOptionLiComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
    BpsOptionLiComponent = __decorate([
        Component({
            selector: '[bps-option-li]',
            exportAs: 'bpsOptionLi',
            template: "<ng-container *ngIf=\"!bpsOption.bpsCustomContent; else bpsOption.template\">\n  {{bpsOption.bpsLabel}}\n</ng-container>\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\n  <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!bpsMenuItemSelectedIcon; else bpsMenuItemSelectedIcon\"></i>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            host: {
                '[class.ant-select-dropdown-menu-item-selected]': 'selected && !bpsOption.bpsDisabled',
                '[class.ant-select-dropdown-menu-item-disabled]': 'bpsOption.bpsDisabled',
                '[class.ant-select-dropdown-menu-item-active]': 'active && !bpsOption.bpsDisabled',
                '[attr.unselectable]': '"unselectable"',
                '[style.user-select]': '"none"',
                '(click)': 'clickOption()',
                '(mousedown)': '$event.preventDefault()'
            }
        })
    ], BpsOptionLiComponent);
    return BpsOptionLiComponent;
}());

var BpsOptionContainerComponent = /** @class */ (function () {
    function BpsOptionContainerComponent(nzSelectService, cdr, ngZone) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.bpsScrollToBottom = new EventEmitter();
    }
    BpsOptionContainerComponent.prototype.scrollIntoViewIfNeeded = function (option) {
        var _this = this;
        // delay after open
        setTimeout(function () {
            if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                var targetOption = _this.listOfNzOptionLiComponent.find(function (o) {
                    return _this.nzSelectService.compareWith(o.bpsOption.bpsValue, option.bpsValue);
                });
                // tslint:disable:no-any
                if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                    targetOption.el.scrollIntoViewIfNeeded(false);
                }
            }
        });
    };
    BpsOptionContainerComponent.prototype.trackLabel = function (_index, option) {
        return option.bpsLabel;
    };
    // tslint:disable-next-line:no-any
    BpsOptionContainerComponent.prototype.trackValue = function (_index, option) {
        return option.bpsValue;
    };
    BpsOptionContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(function (option) {
            _this.scrollIntoViewIfNeeded(option);
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
        this.ngZone.runOutsideAngular(function () {
            var ul = _this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(_this.destroy$))
                .subscribe(function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    _this.lastScrollTop = ul.scrollTop;
                    _this.ngZone.run(function () {
                        _this.bpsScrollToBottom.emit();
                    });
                }
            });
        });
    };
    BpsOptionContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.listOfNzOptionLiComponent.changes
            .pipe(map(function (list) { return list.length; }), pairwise(), filter(function (_a) {
            var _b = __read(_a, 2), before = _b[0], after = _b[1];
            return after < before;
        }), takeUntil(this.destroy$))
            .subscribe(function () { return (_this.lastScrollTop = 0); });
    };
    BpsOptionContainerComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    BpsOptionContainerComponent.ctorParameters = function () { return [
        { type: BpsSelectService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    __decorate([
        ViewChildren(BpsOptionLiComponent)
    ], BpsOptionContainerComponent.prototype, "listOfNzOptionLiComponent", void 0);
    __decorate([
        ViewChild('dropdownUl', { static: true })
    ], BpsOptionContainerComponent.prototype, "dropdownUl", void 0);
    __decorate([
        Input()
    ], BpsOptionContainerComponent.prototype, "bpsNotFoundContent", void 0);
    __decorate([
        Input()
    ], BpsOptionContainerComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
    __decorate([
        Output()
    ], BpsOptionContainerComponent.prototype, "bpsScrollToBottom", void 0);
    BpsOptionContainerComponent = __decorate([
        Component({
            selector: '[bps-option-container]',
            exportAs: 'bpsOptionContainer',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            preserveWhitespaces: false,
            template: "<ul #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  tabindex=\"0\">\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\n    bps-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"bpsNotFoundContent\"></nz-embed-empty>\n  </li>\n  <li bps-option-li\n    *ngIf=\"nzSelectService.addedTagOption\"\n    [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n    [bpsOption]=\"nzSelectService.addedTagOption\">\n  </li>\n  <ng-container *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\">\n    <li bps-option-li\n      *ngIf=\"!option.bpsHide\"\n      [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n      [bpsOption]=\"option\">\n    </li>\n  </ng-container>\n  <li class=\"ant-select-dropdown-menu-item-group\"\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | bpsFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\n      [attr.title]=\"group.isLabelString ? group.bpsLabel : ''\">\n      <ng-container *nzStringTemplateOutlet=\"group.bpsLabel\"> {{group.bpsLabel}} </ng-container>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <ng-container *ngFor=\"let option of group.listOfNzOptionComponent | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\">\n        <li bps-option-li\n          *ngIf=\"!option.bpsHide\"\n          [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n          [bpsOption]=\"option\">\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n  <li bps-option-li\n    *ngFor=\"let option of nzSelectService.listOfTagOption | bpsFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\n    [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n    [bpsOption]=\"option\">\n  </li>\n</ul>\n"
        })
    ], BpsOptionContainerComponent);
    return BpsOptionContainerComponent;
}());

var BpsOptionGroupComponent = /** @class */ (function () {
    function BpsOptionGroupComponent() {
        this.isLabelString = false;
    }
    Object.defineProperty(BpsOptionGroupComponent.prototype, "bpsLabel", {
        get: function () {
            return this.label;
        },
        set: function (value) {
            this.label = value;
            this.isLabelString = !(this.bpsLabel instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ContentChildren(BpsOptionComponent)
    ], BpsOptionGroupComponent.prototype, "listOfNzOptionComponent", void 0);
    __decorate([
        Input()
    ], BpsOptionGroupComponent.prototype, "bpsLabel", null);
    BpsOptionGroupComponent = __decorate([
        Component({
            selector: 'bps-option-group',
            exportAs: 'bpsOptionGroup',
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<ng-content></ng-content>"
        })
    ], BpsOptionGroupComponent);
    return BpsOptionGroupComponent;
}());

var BpsSelectTopControlComponent = /** @class */ (function () {
    function BpsSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.isComposing = false;
        this.destroy$ = new Subject();
        this.bpsShowSearch = false;
        this.bpsOpen = false;
        this.bpsAllowClear = false;
        this.bpsShowArrow = true;
        this.bpsLoading = false;
        this.bpsTokenSeparators = [];
    }
    BpsSelectTopControlComponent.prototype.onClearSelection = function (e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
    };
    BpsSelectTopControlComponent.prototype.setInputValue = function (value) {
        /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
        if (this.inputDOM && !value) {
            this.inputDOM.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.bpsTokenSeparators);
    };
    Object.defineProperty(BpsSelectTopControlComponent.prototype, "mirrorDOM", {
        get: function () {
            return this.mirrorElement && this.mirrorElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectTopControlComponent.prototype, "inputDOM", {
        get: function () {
            return this.inputElement && this.inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: function () {
            return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectTopControlComponent.prototype, "selectedValueStyle", {
        get: function () {
            var showSelectedValue = false;
            var opacity = 1;
            if (!this.bpsShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.bpsOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    BpsSelectTopControlComponent.prototype.trackValue = function (_index, option) {
        return option.bpsValue;
    };
    BpsSelectTopControlComponent.prototype.updateWidth = function () {
        if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
            this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
        }
        else if (this.inputDOM) {
            this.renderer.removeStyle(this.inputDOM, 'width');
            this.mirrorDOM.innerText = '';
        }
    };
    BpsSelectTopControlComponent.prototype.removeSelectedValue = function (option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    };
    BpsSelectTopControlComponent.prototype.animationEnd = function () {
        this.nzSelectService.animationEvent$.next();
    };
    BpsSelectTopControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(function (open) {
            if (_this.inputElement && open) {
                setTimeout(function () { return _this.inputDOM.focus(); });
            }
        });
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.setInputValue('');
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    BpsSelectTopControlComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    BpsSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: BpsSelectService },
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    __decorate([
        ViewChild('inputElement', { static: false })
    ], BpsSelectTopControlComponent.prototype, "inputElement", void 0);
    __decorate([
        ViewChild('mirrorElement', { static: false })
    ], BpsSelectTopControlComponent.prototype, "mirrorElement", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsShowSearch", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsPlaceHolder", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsOpen", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsMaxTagCount", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsAllowClear", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsShowArrow", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsLoading", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsCustomTemplate", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsSuffixIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsClearIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsRemoveIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsMaxTagPlaceholder", void 0);
    __decorate([
        Input()
    ], BpsSelectTopControlComponent.prototype, "bpsTokenSeparators", void 0);
    BpsSelectTopControlComponent = __decorate([
        Component({
            selector: '[bps-select-top-control]',
            exportAs: 'bpsSelectTopControl',
            preserveWhitespaces: false,
            animations: [zoomMotion],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "<ng-template #inputTemplate>\n  <input #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzSelectService.disabled\">\n  <span #mirrorElement class=\"ant-select-search__field__mirror\"></span>\n</ng-template>\n<div class=\"ant-select-selection__rendered\">\n  <div *ngIf=\"bpsPlaceHolder\"\n    bps-select-unselectable\n    [style.display]=\"placeHolderDisplay\"\n    class=\"ant-select-selection__placeholder\">{{ bpsPlaceHolder }}</div>\n  <!--single mode-->\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\n    <!--selected label-->\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\n      class=\"ant-select-selection-selected-value\"\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel\"\n      [ngStyle]=\"selectedValueStyle\">\n      <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context: { $implicit: nzSelectService.listOfCachedSelectedOption[0] }\">\n        <ng-container>{{ nzSelectService.listOfCachedSelectedOption[0]?.bpsLabel }}</ng-container>\n      </ng-container>\n    </div>\n    <!--show search-->\n    <div *ngIf=\"bpsShowSearch\"\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"bpsOpen ? 'block' : 'none'\">\n      <div class=\"ant-select-search__field__wrap\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </div>\n    </div>\n  </ng-container>\n  <!--multiple or tags mode-->\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : bpsMaxTagCount;trackBy:trackValue; let index = index\">\n      <li [@zoomMotion]\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [attr.title]=\"option.bpsLabel\"\n        [class.ant-select-selection__choice__disabled]=\"option.bpsDisabled\"\n        (@zoomMotion.done)=\"animationEnd()\"\n        class=\"ant-select-selection__choice\">\n        <ng-container *nzStringTemplateOutlet=\"bpsCustomTemplate; context:{ $implicit: nzSelectService.listOfCachedSelectedOption[index] }\">\n          <div class=\"ant-select-selection__choice__content\">{{ option.bpsLabel }}</div>\n        </ng-container>\n        <span *ngIf=\"!option.bpsDisabled\"\n          class=\"ant-select-selection__choice__remove\"\n          (mousedown)=\"$event.preventDefault()\"\n          (click)=\"removeSelectedValue(option, $event)\">\n          <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!bpsRemoveIcon; else bpsRemoveIcon\"></i>\n        </span>\n      </li>\n    </ng-container>\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > bpsMaxTagCount\"\n      [@zoomMotion]\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      (@zoomMotion.done)=\"animationEnd()\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">\n        <ng-container *ngIf=\"bpsMaxTagPlaceholder\">\n          <ng-template\n            [ngTemplateOutlet]=\"bpsMaxTagPlaceholder\"\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: bpsMaxTagCount}\">\n          </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"!bpsMaxTagPlaceholder\">\n          + {{ nzSelectService.listOfCachedSelectedOption.length - bpsMaxTagCount }} ...\n        </ng-container>\n      </div>\n    </li>\n    <li class=\"ant-select-search ant-select-search--inline\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n    </li>\n  </ul>\n</div>\n<span *ngIf=\"bpsAllowClear && nzSelectService.listOfSelectedValue.length\"\n  class=\"ant-select-selection__clear\"\n  bps-select-unselectable\n  (mousedown)=\"$event.preventDefault()\"\n  (click)=\"onClearSelection($event)\">\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!bpsClearIcon; else bpsClearIcon\" class=\"ant-select-close-icon\"></i>\n  </span>\n<span class=\"ant-select-arrow\" bps-select-unselectable *ngIf=\"bpsShowArrow\">\n  <i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading; else defaultArrow\"></i>\n  <ng-template #defaultArrow>\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!bpsSuffixIcon; else bpsSuffixIcon\"></i>\n  </ng-template>\n</span>\n"
        }),
        __param(3, Host()), __param(3, Optional())
    ], BpsSelectTopControlComponent);
    return BpsSelectTopControlComponent;
}());

var BpsSelectComponent = /** @class */ (function () {
    function BpsSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.platform = platform;
        this.noAnimation = noAnimation;
        this.open = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.dropDownPosition = 'bottom';
        this._disabled = false;
        this.isInit = false;
        this.destroy$ = new Subject();
        this.bpsOnSearch = new EventEmitter();
        this.bpsScrollToBottom = new EventEmitter();
        this.bpsOpenChange = new EventEmitter();
        this.bpsBlur = new EventEmitter();
        this.bpsFocus = new EventEmitter();
        this.bpsSize = 'default';
        this.bpsDropdownMatchSelectWidth = true;
        this.bpsAllowClear = false;
        this.bpsShowSearch = false;
        this.bpsLoading = false;
        this.bpsAutoFocus = false;
        this.bpsShowArrow = true;
        this.bpsTokenSeparators = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select');
    }
    BpsSelectComponent_1 = BpsSelectComponent;
    Object.defineProperty(BpsSelectComponent.prototype, "bpsAutoClearSearchValue", {
        set: function (value) {
            this.nzSelectService.autoClearSearchValue = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsMaxMultipleCount", {
        set: function (value) {
            this.nzSelectService.maxMultipleCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsServerSearch", {
        set: function (value) {
            this.nzSelectService.serverSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsMode", {
        set: function (value) {
            this.nzSelectService.mode = value;
            this.nzSelectService.check();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsFilterOption", {
        set: function (value) {
            this.nzSelectService.filterOption = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "compareWith", {
        set: function (value) {
            this.nzSelectService.compareWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsOpen", {
        set: function (value) {
            this.open = value;
            this.nzSelectService.setOpenState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsDisabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = toBoolean(value);
            this.nzSelectService.disabled = this._disabled;
            this.nzSelectService.check();
            if (this.bpsDisabled && this.isInit) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsSelectComponent.prototype, "bpsSelectTopControlDOM", {
        get: function () {
            return this.bpsSelectTopControlElement && this.bpsSelectTopControlElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    BpsSelectComponent.prototype.updateAutoFocus = function () {
        if (this.bpsSelectTopControlDOM && this.bpsAutoFocus) {
            this.bpsSelectTopControlDOM.focus();
        }
    };
    BpsSelectComponent.prototype.focus = function () {
        if (this.bpsSelectTopControlDOM) {
            this.bpsSelectTopControlDOM.focus();
        }
    };
    BpsSelectComponent.prototype.blur = function () {
        if (this.bpsSelectTopControlDOM) {
            this.bpsSelectTopControlDOM.blur();
        }
    };
    BpsSelectComponent.prototype.onFocus = function () {
        this.bpsFocus.emit();
    };
    BpsSelectComponent.prototype.onBlur = function () {
        this.bpsBlur.emit();
    };
    BpsSelectComponent.prototype.onKeyDown = function (event) {
        this.nzSelectService.onKeyDown(event);
    };
    BpsSelectComponent.prototype.toggleDropDown = function () {
        if (!this.bpsDisabled) {
            this.nzSelectService.setOpenState(!this.open);
        }
    };
    BpsSelectComponent.prototype.closeDropDown = function () {
        this.nzSelectService.setOpenState(false);
    };
    BpsSelectComponent.prototype.onPositionChange = function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    BpsSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    };
    BpsSelectComponent.prototype.updateCdkConnectedOverlayPositions = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                _this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    BpsSelectComponent.prototype.writeValue = function (value) {
        this.value = value;
        var listValue = []; // tslint:disable-line:no-any
        if (isNotNil(value)) {
            if (this.nzSelectService.isMultipleOrTags) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.nzSelectService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    };
    BpsSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    BpsSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    BpsSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.bpsDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    BpsSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nzSelectService.animationEvent$
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () { return _this.updateCdkConnectedOverlayPositions(); });
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe(function (data) {
            _this.bpsOnSearch.emit(data);
            _this.updateCdkConnectedOverlayPositions();
        });
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe(function (modelValue) {
            if (_this.value !== modelValue) {
                _this.value = modelValue;
                _this.onChange(_this.value);
            }
        });
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(function (value) {
            if (_this.open !== value) {
                _this.bpsOpenChange.emit(value);
            }
            if (value) {
                _this.focus();
                _this.updateCdkConnectedOverlayStatus();
            }
            else {
                _this.blur();
                _this.onTouched();
            }
            _this.open = value;
            _this.nzSelectService.clearInput();
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(function () {
            _this.cdr.markForCheck();
        });
    };
    BpsSelectComponent.prototype.ngAfterViewInit = function () {
        this.updateCdkConnectedOverlayStatus();
        this.updateAutoFocus();
        this.isInit = true;
    };
    BpsSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listOfNzOptionGroupComponent.changes
            .pipe(startWith(true), flatMap(function () {
            return merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map(function (option) { return option.changes; }), _this.listOfNzOptionGroupComponent.map(function (group) {
                return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY;
            }))).pipe(startWith(true));
        }))
            .subscribe(function () {
            _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
        });
    };
    BpsSelectComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    var BpsSelectComponent_1;
    BpsSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: BpsSelectService },
        { type: ChangeDetectorRef },
        { type: Platform },
        { type: ElementRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    __decorate([
        ViewChild(CdkOverlayOrigin, { static: false })
    ], BpsSelectComponent.prototype, "cdkOverlayOrigin", void 0);
    __decorate([
        ViewChild(CdkConnectedOverlay, { static: false })
    ], BpsSelectComponent.prototype, "cdkConnectedOverlay", void 0);
    __decorate([
        ViewChild(BpsSelectTopControlComponent, { static: true })
    ], BpsSelectComponent.prototype, "bpsSelectTopControlComponent", void 0);
    __decorate([
        ViewChild(BpsSelectTopControlComponent, { static: true, read: ElementRef })
    ], BpsSelectComponent.prototype, "bpsSelectTopControlElement", void 0);
    __decorate([
        ContentChildren(BpsOptionComponent)
    ], BpsSelectComponent.prototype, "listOfNzOptionComponent", void 0);
    __decorate([
        ContentChildren(BpsOptionGroupComponent)
    ], BpsSelectComponent.prototype, "listOfNzOptionGroupComponent", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsOnSearch", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsScrollToBottom", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsOpenChange", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsBlur", void 0);
    __decorate([
        Output()
    ], BpsSelectComponent.prototype, "bpsFocus", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsSize", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownClassName", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownMatchSelectWidth", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownStyle", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsNotFoundContent", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsAllowClear", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsShowSearch", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsLoading", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsSelectComponent.prototype, "bpsAutoFocus", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsPlaceHolder", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMaxTagCount", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDropdownRender", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsCustomTemplate", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsSuffixIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsClearIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsRemoveIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMenuItemSelectedIcon", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsShowArrow", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsTokenSeparators", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMaxTagPlaceholder", void 0);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsAutoClearSearchValue", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMaxMultipleCount", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsServerSearch", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsMode", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsFilterOption", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "compareWith", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsOpen", null);
    __decorate([
        Input()
    ], BpsSelectComponent.prototype, "bpsDisabled", null);
    BpsSelectComponent = BpsSelectComponent_1 = __decorate([
        Component({
            selector: 'bps-select',
            exportAs: 'bpsSelect',
            preserveWhitespaces: false,
            providers: [
                BpsSelectService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return BpsSelectComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            animations: [slideMotion],
            template: "<div cdkOverlayOrigin\n  bps-select-top-control\n  tabindex=\"0\"\n  class=\"ant-select-selection\"\n  [bpsOpen]=\"open\"\n  [@.disabled]=\"noAnimation?.nzNoAnimation\"\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n  [bpsMaxTagPlaceholder]=\"bpsMaxTagPlaceholder\"\n  [bpsPlaceHolder]=\"bpsPlaceHolder\"\n  [bpsAllowClear]=\"bpsAllowClear\"\n  [bpsMaxTagCount]=\"bpsMaxTagCount\"\n  [bpsShowArrow]=\"bpsShowArrow\"\n  [bpsLoading]=\"bpsLoading\"\n  [bpsCustomTemplate]=\"bpsCustomTemplate\"\n  [bpsSuffixIcon]=\"bpsSuffixIcon\"\n  [bpsClearIcon]=\"bpsClearIcon\"\n  [bpsRemoveIcon]=\"bpsRemoveIcon\"\n  [bpsShowSearch]=\"bpsShowSearch\"\n  [bpsTokenSeparators]=\"bpsTokenSeparators\"\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\n  (focus)=\"onFocus()\"\n  (blur)=\"onBlur()\"\n  (keydown)=\"onKeyDown($event)\">\n</div>\n<ng-template\n  cdkConnectedOverlay\n  nzConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayMinWidth]=\"bpsDropdownMatchSelectWidth? null : triggerWidth\"\n  [cdkConnectedOverlayWidth]=\"bpsDropdownMatchSelectWidth? triggerWidth - 21 : null\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown();\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"open\">\n  <div\n    class=\"ant-select-dropdown\"\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n    [nzClassListAdd]=\"[bpsDropdownClassName]\"\n    [@slideMotion]=\"dropDownPosition\"\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n    [ngStyle]=\"bpsDropdownStyle\">\n    <div bps-option-container\n      style=\"overflow: auto;transform: translateZ(0px);\"\n      (keydown)=\"onKeyDown($event)\"\n      [bpsMenuItemSelectedIcon]=\"bpsMenuItemSelectedIcon\"\n      [bpsNotFoundContent]=\"bpsNotFoundContent\"\n      (bpsScrollToBottom)=\"bpsScrollToBottom.emit()\">\n    </div>\n    <ng-template [ngTemplateOutlet]=\"bpsDropdownRender\"></ng-template>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
            host: {
                '[class.ant-select-lg]': 'bpsSize==="large"',
                '[class.ant-select-sm]': 'bpsSize==="small"',
                '[class.ant-select-enabled]': '!bpsDisabled',
                '[class.ant-select-no-arrow]': '!bpsShowArrow',
                '[class.ant-select-disabled]': 'bpsDisabled',
                '[class.ant-select-allow-clear]': 'bpsAllowClear',
                '[class.ant-select-open]': 'open',
                '(click)': 'toggleDropDown()'
            },
            styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0;box-shadow:none}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
        }),
        __param(5, Host()), __param(5, Optional())
    ], BpsSelectComponent);
    return BpsSelectComponent;
}());

var BpsSelectUnselectableDirective = /** @class */ (function () {
    function BpsSelectUnselectableDirective() {
    }
    BpsSelectUnselectableDirective = __decorate([
        Directive({
            selector: '[bps-select-unselectable]',
            exportAs: 'bpsSelectUnselectable',
            host: {
                '[attr.unselectable]': '"unselectable"',
                '[style.user-select]': '"none"'
            }
        })
    ], BpsSelectUnselectableDirective);
    return BpsSelectUnselectableDirective;
}());

var BpsFormExplainComponent = /** @class */ (function () {
    function BpsFormExplainComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation("'bps-form-explain' is going to be removed in 9.0.0. Use [bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip] in bps-form-control instead. Read https://ng.ant.design/components/form/en");
    }
    BpsFormExplainComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    BpsFormExplainComponent = __decorate([
        Component({
            selector: 'bps-form-explain',
            exportAs: 'bpsFormExplain',
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            animations: [helpMotion],
            template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>",
            styles: ["\n      bps-form-explain {\n        display: block;\n      }\n    "]
        })
        /**
         * @deprecated Use `[bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip]` in `bpsFormControlComponent` instead, will remove in 9.0.0.
         */
    ], BpsFormExplainComponent);
    return BpsFormExplainComponent;
}());

/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
var BpsFormItemComponent = /** @class */ (function (_super) {
    __extends(BpsFormItemComponent, _super);
    function BpsFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) || this;
        _this.cdr = cdr;
        _this.bpsFlex = false;
        _this.withHelpClass = false;
        _this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
        return _this;
    }
    BpsFormItemComponent.prototype.updateFlexStyle = function () {
        if (this.bpsFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    };
    BpsFormItemComponent.prototype.setWithHelpViaTips = function (value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    };
    BpsFormItemComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe(function () {
                _this.withHelpClass = _this.listOfNzFormExplainComponent && _this.listOfNzFormExplainComponent.length > 0;
                _this.cdr.markForCheck();
            });
        }
    };
    BpsFormItemComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateFlexStyle();
    };
    BpsFormItemComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    BpsFormItemComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.hasOwnProperty('bpsFlex')) {
            this.updateFlexStyle();
        }
    };
    BpsFormItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform },
        { type: NzDomEventService },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(), InputBoolean()
    ], BpsFormItemComponent.prototype, "bpsFlex", void 0);
    __decorate([
        ContentChildren(BpsFormExplainComponent, { descendants: true })
    ], BpsFormItemComponent.prototype, "listOfNzFormExplainComponent", void 0);
    BpsFormItemComponent = __decorate([
        Component({
            selector: 'bps-form-item',
            exportAs: 'bpsFormItem',
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            providers: [NzUpdateHostClassService],
            template: "<ng-content></ng-content>",
            host: {
                '[class.ant-form-item-with-help]': 'withHelpClass'
            },
            styles: ["\n      bps-form-item {\n        display: block;\n      }\n    "]
        })
    ], BpsFormItemComponent);
    return BpsFormItemComponent;
}(NzRowDirective));

var BpsFormLabelComponent = /** @class */ (function (_super) {
    __extends(BpsFormLabelComponent, _super);
    function BpsFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.cdr = cdr;
        _this.bpsRequired = false;
        _this.defaultNoColon = false;
        _this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        return _this;
    }
    Object.defineProperty(BpsFormLabelComponent.prototype, "bpsNoColon", {
        get: function () {
            return !!this.noColon;
        },
        set: function (value) {
            this.noColon = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    BpsFormLabelComponent.prototype.setDefaultNoColon = function (value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    };
    BpsFormLabelComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    BpsFormLabelComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    BpsFormLabelComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: BpsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], BpsFormLabelComponent.prototype, "bpsFor", void 0);
    __decorate([
        Input(), InputBoolean()
    ], BpsFormLabelComponent.prototype, "bpsRequired", void 0);
    __decorate([
        Input()
    ], BpsFormLabelComponent.prototype, "bpsNoColon", null);
    BpsFormLabelComponent = __decorate([
        Component({
            selector: 'bps-form-label',
            exportAs: 'bpsFormLabel',
            providers: [NzUpdateHostClassService],
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n"
        }),
        __param(2, Optional()), __param(2, Host()),
        __param(3, Optional()), __param(3, Host())
    ], BpsFormLabelComponent);
    return BpsFormLabelComponent;
}(NzColDirective));

var NZ_CONFIG_COMPONENT_NAME = 'form';
var BpsFormDirective = /** @class */ (function () {
    function BpsFormDirective(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.bpsLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    BpsFormDirective.prototype.setClassMap = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-form-" + this.bpsLayout] = this.bpsLayout,
            _a));
    };
    BpsFormDirective.prototype.updateItemsDefaultColon = function () {
        var _this = this;
        if (this.bpsFormLabelComponent) {
            this.bpsFormLabelComponent.forEach(function (item) { return item.setDefaultNoColon(_this.bpsNoColon); });
        }
    };
    BpsFormDirective.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    BpsFormDirective.prototype.ngOnChanges = function (changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('bpsNoColon')) {
            this.updateItemsDefaultColon();
        }
    };
    BpsFormDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.bpsFormLabelComponent.changes
            .pipe(startWith(null), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.updateItemsDefaultColon();
        });
    };
    BpsFormDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    BpsFormDirective.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    __decorate([
        Input()
    ], BpsFormDirective.prototype, "bpsLayout", void 0);
    __decorate([
        Input(), WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean()
    ], BpsFormDirective.prototype, "bpsNoColon", void 0);
    __decorate([
        ContentChildren(BpsFormLabelComponent, { descendants: true })
    ], BpsFormDirective.prototype, "bpsFormLabelComponent", void 0);
    BpsFormDirective = __decorate([
        Directive({
            selector: '[bps-form]',
            exportAs: 'bpsForm',
            providers: [NzUpdateHostClassService]
        })
    ], BpsFormDirective);
    return BpsFormDirective;
}());

var BpsFormControlComponent = /** @class */ (function (_super) {
    __extends(BpsFormControlComponent, _super);
    function BpsFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.nzFormItemComponent = nzFormItemComponent;
        _this.cdr = cdr;
        _this._hasFeedback = false;
        _this.validateChanges = Subscription.EMPTY;
        _this.status = null;
        _this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
        return _this;
    }
    Object.defineProperty(BpsFormControlComponent.prototype, "bpsHasFeedback", {
        get: function () {
            return this._hasFeedback;
        },
        set: function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsFormControlComponent.prototype, "bpsValidateStatus", {
        set: function (value) {
            if (value instanceof FormControl || value instanceof NgModel) {
                this.validateControl = value;
                this.validateString = null;
                this.watchControl();
            }
            else if (value instanceof FormControlName) {
                this.validateControl = value.control;
                this.validateString = null;
                this.watchControl();
            }
            else {
                this.validateString = value;
                this.validateControl = null;
                this.setControlClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    BpsFormControlComponent.prototype.removeSubscribe = function () {
        this.validateChanges.unsubscribe();
    };
    BpsFormControlComponent.prototype.watchControl = function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(function () {
                _this.setControlClassMap();
                _this.cdr.markForCheck();
            });
        }
    };
    BpsFormControlComponent.prototype.validateControlStatus = function (status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    };
    BpsFormControlComponent.prototype.setControlClassMap = function () {
        var _a;
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.status === 'warning',
            _a["is-validating"] = this.status === 'validating',
            _a["has-error"] = this.status === 'error',
            _a["has-success"] = this.status === 'success',
            _a["has-feedback"] = this.bpsHasFeedback && this.status,
            _a);
    };
    Object.defineProperty(BpsFormControlComponent.prototype, "hasTips", {
        get: function () {
            return !!(this.bpsSuccessTip || this.bpsWarningTip || this.bpsErrorTip || this.bpsValidatingTip);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsFormControlComponent.prototype, "showSuccessTip", {
        get: function () {
            return this.status === 'success' && !!this.bpsSuccessTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsFormControlComponent.prototype, "showWarningTip", {
        get: function () {
            return this.status === 'warning' && !!this.bpsWarningTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsFormControlComponent.prototype, "showErrorTip", {
        get: function () {
            return this.status === 'error' && !!this.bpsErrorTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsFormControlComponent.prototype, "showValidatingTip", {
        get: function () {
            return this.status === 'validating' && !!this.bpsValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BpsFormControlComponent.prototype, "showInnerTip", {
        get: function () {
            return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    BpsFormControlComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setControlClassMap();
    };
    BpsFormControlComponent.prototype.ngOnDestroy = function () {
        this.removeSubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    BpsFormControlComponent.prototype.ngAfterContentInit = function () {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.bpsValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.bpsValidateStatus = this.defaultValidateControl;
            }
        }
    };
    BpsFormControlComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    BpsFormControlComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: BpsFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        ContentChild(NgControl, { static: false })
    ], BpsFormControlComponent.prototype, "defaultValidateControl", void 0);
    __decorate([
        Input()
    ], BpsFormControlComponent.prototype, "bpsSuccessTip", void 0);
    __decorate([
        Input()
    ], BpsFormControlComponent.prototype, "bpsWarningTip", void 0);
    __decorate([
        Input()
    ], BpsFormControlComponent.prototype, "bpsErrorTip", void 0);
    __decorate([
        Input()
    ], BpsFormControlComponent.prototype, "bpsValidatingTip", void 0);
    __decorate([
        Input()
    ], BpsFormControlComponent.prototype, "bpsExtra", void 0);
    __decorate([
        Input()
    ], BpsFormControlComponent.prototype, "bpsHasFeedback", null);
    __decorate([
        Input()
    ], BpsFormControlComponent.prototype, "bpsValidateStatus", null);
    BpsFormControlComponent = __decorate([
        Component({
            selector: 'bps-form-control',
            exportAs: 'bpsFormControl',
            preserveWhitespaces: false,
            animations: [helpMotion],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [NzUpdateHostClassService],
            template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n",
            styles: ["\n      bps-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "]
        }),
        __param(2, Optional()), __param(2, Host()),
        __param(3, Optional()), __param(3, Host())
    ], BpsFormControlComponent);
    return BpsFormControlComponent;
}(NzColDirective));

var BpsFormExtraComponent = /** @class */ (function () {
    function BpsFormExtraComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation("'bps-form-extra' is going to be removed in 9.0.0. Use [bpsExtra] in bps-form-control instead. Read https://ng.ant.design/components/form/en");
    }
    BpsFormExtraComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    BpsFormExtraComponent = __decorate([
        Component({
            selector: 'bps-form-extra',
            exportAs: 'bpsFormExtra',
            template: "<ng-content></ng-content>",
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n      bps-form-extra {\n        display: block;\n      }\n    "]
        })
        /**
         * @deprecated Use `[bpsExtra]` in `BpsFormControlComponent` instead, will remove in 9.0.0.
         */
    ], BpsFormExtraComponent);
    return BpsFormExtraComponent;
}());

var BpsFormSplitComponent = /** @class */ (function () {
    function BpsFormSplitComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
    BpsFormSplitComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    BpsFormSplitComponent = __decorate([
        Component({
            selector: 'bps-form-split',
            exportAs: 'bpsFormSplit',
            preserveWhitespaces: false,
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<ng-content></ng-content>"
        })
    ], BpsFormSplitComponent);
    return BpsFormSplitComponent;
}());

var BpsFormTextComponent = /** @class */ (function () {
    function BpsFormTextComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
    BpsFormTextComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    BpsFormTextComponent = __decorate([
        Component({
            selector: 'bps-form-text',
            exportAs: 'bpsFormText',
            preserveWhitespaces: false,
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            template: "<ng-content></ng-content>"
        })
    ], BpsFormTextComponent);
    return BpsFormTextComponent;
}());

var ɵ0 = en_US;
var BpsComponentsLibModule = /** @class */ (function () {
    function BpsComponentsLibModule() {
    }
    BpsComponentsLibModule = __decorate([
        NgModule({
            declarations: [
                BpsComponentsLibComponent,
                BpsInputGroupComponent,
                BpsInputDirective,
                BpsAutosizeDirective,
                BpsOptionComponent,
                BpsFilterOptionPipe,
                BpsFilterGroupOptionPipe,
                BpsOptionContainerComponent,
                BpsOptionGroupComponent,
                BpsOptionLiComponent,
                BpsSelectComponent,
                BpsSelectTopControlComponent,
                BpsSelectUnselectableDirective,
                BpsFormDirective,
                BpsFormExplainComponent,
                BpsFormControlComponent,
                BpsFormExtraComponent,
                BpsFormItemComponent,
                BpsFormLabelComponent,
                BpsFormSplitComponent,
                BpsFormTextComponent
            ],
            imports: [
                NgZorroAntdModule,
                CommonModule,
                NzAddOnModule,
                NzIconModule,
                OverlayModule,
                NzNoAnimationModule,
                NzOverlayModule,
                NzEmptyModule,
                FormsModule
            ],
            exports: [
                BpsComponentsLibComponent,
                BpsComponentsLibComponent,
                BpsInputGroupComponent,
                BpsInputDirective,
                BpsAutosizeDirective,
                BpsOptionComponent,
                BpsFilterOptionPipe,
                BpsFilterGroupOptionPipe,
                BpsOptionContainerComponent,
                BpsOptionGroupComponent,
                BpsOptionLiComponent,
                BpsSelectComponent,
                BpsSelectTopControlComponent,
                BpsSelectUnselectableDirective,
                BpsFormDirective,
                BpsFormExplainComponent,
                BpsFormControlComponent,
                BpsFormExtraComponent,
                BpsFormItemComponent,
                BpsFormLabelComponent,
                BpsFormSplitComponent,
                BpsFormTextComponent
            ],
            providers: [
                { provide: NZ_I18N, useValue: ɵ0 }
            ],
        })
    ], BpsComponentsLibModule);
    return BpsComponentsLibModule;
}());

/*
 * Public API Surface of bps-components-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BpsAutosizeDirective, BpsComponentsLibComponent, BpsComponentsLibModule, BpsComponentsLibService, BpsFilterGroupOptionPipe, BpsFilterOptionPipe, BpsFormControlComponent, BpsFormDirective, BpsFormExplainComponent, BpsFormExtraComponent, BpsFormItemComponent, BpsFormLabelComponent, BpsFormSplitComponent, BpsFormTextComponent, BpsInputDirective, BpsInputGroupComponent, BpsOptionComponent, BpsOptionContainerComponent, BpsOptionGroupComponent, BpsOptionLiComponent, BpsSelectComponent, BpsSelectService, BpsSelectTopControlComponent, BpsSelectUnselectableDirective, defaultFilterOption, isAutoSizeType, ɵ0 };
//# sourceMappingURL=bps-components-lib.js.map
