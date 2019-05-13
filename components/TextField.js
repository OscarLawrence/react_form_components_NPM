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
var styles_1 = require("../styles");
var TextField = function (props) {
    var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: solid 1.5px ", ";\n    border-radius: 3px;\n    padding: 1em;\n    margin: 0 auto;\n    height: ", "\n    width: ", ";\n    font-family: ", ";\n    box-sizing: border-box;\n  "], ["\n    border: solid 1.5px ", ";\n    border-radius: 3px;\n    padding: 1em;\n    margin: 0 auto;\n    height: ", "\n    width: ", ";\n    font-family: ", ";\n    box-sizing: border-box;\n  "])), styles_1.Colors.subtle, props.height || "100%", props.width || "95%", props.fontFamily || styles_1.Fonts.standard);
    var Textarea = styled_components_1.default.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    outline: none;\n    font-size: 1.25em;\n    resize: none;\n    border: none;\n  "], ["\n    width: 100%;\n    height: 100%;\n    outline: none;\n    font-size: 1.25em;\n    resize: none;\n    border: none;\n  "])));
    return (React.createElement(Wrapper, null,
        React.createElement("label", { htmlFor: props.name || "textarea" }),
        React.createElement(Textarea, __assign({ onChange: props.onChange, "aria-label": props.name || "textarea" }, props))));
};
exports.default = TextField;
var templateObject_1, templateObject_2;
