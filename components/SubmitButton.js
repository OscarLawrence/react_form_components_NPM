"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_spring_1 = require("react-spring");
var styles_1 = require("../styles");
var SubmitButton = function (props) {
    var styles = {
        cursor: "pointer",
        width: "100%",
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        fontFamily: styles_1.Fonts.standard
    };
    var _a = react_spring_1.useSpring(function () { return ({
        transform: "scale(1)"
    }); }), spring = _a[0], set = _a[1];
    var onMouseDown = function (e) {
        set({ transform: "scale(0.9)" });
    };
    var onMouseUp = function (e) {
        set({ transform: "scale(1)" });
    };
    return (React.createElement("div", { onMouseDown: onMouseDown, onMouseUp: onMouseUp, style: { width: "80%", margin: "0 auto" } },
        React.createElement(react_spring_1.animated.button, __assign({}, props, { "aria-label": "submit", style: __assign({}, styles, spring) }), props.children)));
};
exports.default = SubmitButton;
