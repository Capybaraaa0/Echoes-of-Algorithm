(function () {
    'use strict';

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var TextMeasurer = CGT.WWCore.Overflow.TextMeasurer;
    var PrecisionTextMeasurer = /** @class */ (function (_super) {
        __extends(PrecisionTextMeasurer, _super);
        function PrecisionTextMeasurer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PrecisionTextMeasurer.prototype.GetDefaultWidthOf = function (text, textField) {
            return textField.measureTextWidth(text);
        };
        return PrecisionTextMeasurer;
    }(TextMeasurer));

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var OverflowFinder = CGT.WWCore.Overflow.OverflowFinder;
    var PrecisionOverflowFinder = /** @class */ (function (_super) {
        __extends$1(PrecisionOverflowFinder, _super);
        function PrecisionOverflowFinder() {
            var _this = _super.call(this) || this;
            _this.textMeasurer = new PrecisionTextMeasurer();
            return _this;
        }
        PrecisionOverflowFinder.prototype.RegularWrapSpace = function (args) {
            var fullSpace = this.FullWrapSpace(args);
            var spacing = args.wordWrapArgs.spacing;
            var allSidePadding = spacing.SidePadding * 2;
            return fullSpace - allSidePadding;
        };
        PrecisionOverflowFinder.prototype.FullWrapSpace = function (args) {
            var textField = args.wordWrapArgs.textField;
            return textField.width;
        };
        Object.defineProperty(PrecisionOverflowFinder.prototype, "Params", {
            get: function () { return CGT.WWCore.Params; },
            enumerable: false,
            configurable: true
        });
        return PrecisionOverflowFinder;
    }(OverflowFinder));

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var WrapCoreShared = CGT.WWCore.Shared;
    var WordWrapper = CGT.WWCore.WordWrapper;
    var PrecisionWordWrapper = /** @class */ (function (_super) {
        __extends$2(PrecisionWordWrapper, _super);
        function PrecisionWordWrapper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PrecisionWordWrapper.prototype, "WrapCode", {
            get: function () { return PrecisionWordWrapper.WrapCode; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PrecisionWordWrapper, "WrapCode", {
            get: function () { return this.wrapCode; },
            enumerable: false,
            configurable: true
        });
        PrecisionWordWrapper.wrapCode = "precision";
        return PrecisionWordWrapper;
    }(WordWrapper));

    var __extends$3 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var UnderflowCascader = CGT.WWCore.UnderflowCascader;
    var PrecisionUnderflowCascader = /** @class */ (function (_super) {
        __extends$3(PrecisionUnderflowCascader, _super);
        function PrecisionUnderflowCascader() {
            var _this = _super.call(this) || this;
            _this.textMeasurer = new PrecisionTextMeasurer();
            return _this;
        }
        return PrecisionUnderflowCascader;
    }(UnderflowCascader));

    var __extends$4 = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var LineWrapper = CGT.WWCore.LineWrapper;
    var PrecisionLineWrapper = /** @class */ (function (_super) {
        __extends$4(PrecisionLineWrapper, _super);
        function PrecisionLineWrapper() {
            var _this = _super.call(this) || this;
            _this.overflowFinder = new PrecisionOverflowFinder();
            _this.underflowCascader = new PrecisionUnderflowCascader();
            return _this;
        }
        return PrecisionLineWrapper;
    }(LineWrapper));

    var PrWoWr = {
        PrecisionOverflowFinder: PrecisionOverflowFinder,
        PrecisionWordWrapper: PrecisionWordWrapper,
    };
    var WordWrapper$1 = CGT.WWCore.WordWrapper;
    RegisterWrapper();
    function RegisterWrapper() {
        var lineWrapper = new PrecisionLineWrapper();
        var precisionWrapper = new WordWrapper$1(lineWrapper);
        precisionWrapper.WrapCode = "precision";
        CGT.WWCore.RegisterWrapper(precisionWrapper);
    }
    CGT.WWCore.UpdateActiveWrappers(); // For when this plugin's supposed to handle wrapping

    /*:
    * @plugindesc Wraps based on the physical space and state of the message box.
    * @author CG-Tespy – https://github.com/CG-Tespy
    * @help This is version 3.01.01 of this plugin. Tested with RMMV versions 1.5.1 and
    * 1.6.2.
    *
    * Requires version 3.01.01+ of the CGT WordWrapCore plugin. To have this
    * set as the wrapper right away, set the appropriate WordWrapCore Wrapper params
    * to "precision".
    *
    * Best not make this the Bubble Wrapper, though. Try it and you'll see why.
    */
    var plugin = {
        PrWoWr: PrWoWr,
    };
    Object.assign(CGT, plugin);

}());
