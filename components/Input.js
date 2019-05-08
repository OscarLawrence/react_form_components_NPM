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
var Asterisk = require("../assets/asterisk.png");
var styles_1 = require("../styles");
var Input = function (props) {
    var Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: none;\n    outline: none;\n    width: ", ";\n    font-size: 1.5em;\n    font-family: ", ";\n  "], ["\n    border: none;\n    outline: none;\n    width: ", ";\n    font-size: 1.5em;\n    font-family: ", ";\n  "])), props.width || "100%", props.fontFamily || styles_1.Fonts.standard);
    var Info = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    text-align: left;\n    pointer-events: none;\n    height: 1.5rem;\n    font-weight: 400;\n    font-family: ", ";\n  "], ["\n    text-align: left;\n    pointer-events: none;\n    height: 1.5rem;\n    font-weight: 400;\n    font-family: ", ";\n  "])), props.fontFamily || styles_1.Fonts.standard);
    var bStyle = {
        padding: 0,
        height: "2px",
        borderRadius: "5px",
        margin: "0 auto",
        transform: "translateY(-1.25em)"
    };
    var _a = react_spring_1.useSpring(function () { return ({
        fontSize: "1.5em",
        transform: "translateY(-1.25em)",
        color: styles_1.Colors.subtle,
        config: { velocity: 20 }
    }); }), spring = _a[0], set = _a[1];
    var _b = react_spring_1.useSpring(function () { return ({
        backgroundColor: styles_1.Colors.subtle
    }); }), borderSpring = _b[0], setBorder = _b[1];
    var handleFocus = function (e) {
        e.preventDefault();
        set({
            fontSize: "1em",
            transform: "translateY(-3.1em)",
            color: styles_1.Colors.highlight
        });
        setBorder({
            backgroundColor: styles_1.Colors.highlight
        });
    };
    var handleUnFocus = function (e) {
        e.preventDefault();
        set({
            fontSize: e.target.value === "" ? "1.5em" : "1em",
            transform: e.target.value === "" ? "translateY(-1.25em)" : "translateY(-3em)",
            color: styles_1.Colors.subtle
        });
        setBorder({
            backgroundColor: styles_1.Colors.subtle
        });
    };
    return (React.createElement("div", { style: { marginBottom: props.error ? "0.1em" : 0 } },
        React.createElement("label", { htmlFor: "input" }),
        React.createElement(Input, __assign({}, props, { onFocus: handleFocus, "aria-label": props.type ? props.type : "text", onBlur: handleUnFocus })),
        React.createElement(react_spring_1.animated.div, { style: spring },
            React.createElement(Info, null,
                props.label,
                " ",
                props.required ? (React.createElement("img", { style: {
                        width: "7.5px",
                        height: "7.5px",
                        transform: "translateY(-150%)"
                    }, alt: "is required asterisk", src: Asterisk })) : null)),
        React.createElement(react_spring_1.animated.div, { style: __assign({}, borderSpring, bStyle) }),
        props.error ? (React.createElement("div", { style: {
                textAlign: "left",
                transform: "translateY(-1.2em)",
                fontFamily: styles_1.Fonts.error
            } }, props.error)) : ("")));
};
exports.default = Input;
var templateObject_1, templateObject_2;
