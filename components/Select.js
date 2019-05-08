"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_spring_1 = require("react-spring");
var shortid_1 = require("shortid");
var DropDownIcon = require("../assets/drop-down-arrow.png");
var styles_1 = require("../styles");
var Select = function (props) {
    // useState for open/close
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    var _b = React.useState(props.currentValue), currentValue = _b[0], setValue = _b[1];
    var _c = React.useState(false), keyUser = _c[0], setKeyUser = _c[1];
    React.useEffect(function () {
        document.addEventListener("mouseup", handleOutsideClick, true);
        document.addEventListener("keydown", kbUser, true);
        return function () {
            document.removeEventListener("keydown", kbUser, true);
            document.removeEventListener("mouseup", handleOutsideClick, true);
        };
    });
    var kbUser = function (e) {
        if (e.keyCode === 9) {
            setKeyUser(true);
            document.removeEventListener("keydown", kbUser, true);
        }
    };
    var selectID = shortid_1.generate();
    var handleOutsideClick = function (e) {
        e.preventDefault();
        var wrapper = document.getElementById(selectID);
        if (!wrapper.contains(e.target) && open) {
            setOpen(false);
        }
    };
    // _______Styles__________
    //__outerDiv Styles__
    var selectBoxStyles = {
        left: 0,
        right: 0,
        width: "100%",
        margin: "1em auto"
    };
    //__options div styles__
    var Options = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-style: none solid solid solid;\n    border-width: 0px;\n    border-radius: 5px;\n    box-shadow: 0px 12px 37px 1px rgba(0, 0, 0, 0.47);\n    position: absolute;\n    width: ", ";\n    font-family: ", ";\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    z-index: 999;\n  "], ["\n    border-style: none solid solid solid;\n    border-width: 0px;\n    border-radius: 5px;\n    box-shadow: 0px 12px 37px 1px rgba(0, 0, 0, 0.47);\n    position: absolute;\n    width: ", ";\n    font-family: ", ";\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    z-index: 999;\n  "])), props.width || 100, props.fontFamily || styles_1.Fonts.standard);
    //__selectButton Style__
    var SelectButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border-style: none none solid none;\n    border-width: 1px;\n    border-color: black;\n    cursor: pointer;\n    font-family: ", ";\n    width: ", ";\n    text-align: left;\n    background-color: transparent;\n    outline: ", ";\n  "], ["\n    border-style: none none solid none;\n    border-width: 1px;\n    border-color: black;\n    cursor: pointer;\n    font-family: ", ";\n    width: ", ";\n    text-align: left;\n    background-color: transparent;\n    outline: ", ";\n  "])), props.fontFamily || styles_1.Fonts.standard, props.width || 100, keyUser ? "  " : "none");
    // ______handler______
    var toggle = function (e) {
        e.preventDefault();
        setOpen(!open);
    };
    var handleSelect = function (e) {
        e.preventDefault();
        setValue(e.target.innerText);
        setOpen(false);
        if (props.onChange) {
            props.onChange(e.target.attributes.value.value);
        }
    };
    return (React.createElement("div", { style: selectBoxStyles, id: selectID, className: "selectBox" },
        React.createElement(SelectButton, { onClick: toggle },
            currentValue,
            React.createElement("img", { style: { float: "right", width: ".8em" }, src: DropDownIcon, alt: "" })),
        open ? (React.createElement(Options, { className: "selectOptions" }, Object.keys(props.options).map(function (optionKey, i) {
            return (React.createElement(SelectOption, { keyuser: keyUser, onClick: handleSelect, value: optionKey, key: i, hoverColor: props.hoverColor }, props.options[optionKey]));
        }))) : null));
};
exports.default = Select;
var SelectOption = function (props) {
    var _a = react_spring_1.useSpring(function () { return ({
        backgroundColor: "white"
    }); }), spring = _a[0], set = _a[1];
    //__option button styles__
    var optionStyle = {
        width: "100%",
        outline: props.keyuser ? "" : "none",
        borderStyle: "none none solid none",
        borderWidth: "0px",
        borderRadius: "5px",
        cursor: "pointer",
        padding: ".3em 0",
        display: "block",
        left: 0,
        right: 0
    };
    var mouseEnter = function (e) {
        e.preventDefault();
        set({
            backgroundColor: props.hoverColor ? props.hoverColor : styles_1.Colors.subtle
        });
    };
    var mouseLeave = function (e) {
        e.preventDefault();
        set({ backgroundColor: "white" });
    };
    return (React.createElement(react_spring_1.animated.button, { onMouseEnter: mouseEnter, onMouseLeave: mouseLeave, onClick: props.onClick, value: props.value, style: __assign({}, optionStyle, spring) }, props.children));
};
var templateObject_1, templateObject_2;
