"use strict";
var Utility = (function () {
    function Utility() {
    }
    Utility.StringFormat = function (text) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var e = text.toString();
        if (!args.length)
            return e;
        var t = typeof args[0], n = "string" == t || "number" == t ? Array.prototype.slice.call(args) : args[0];
        for (var i in n)
            e = e.replace(new RegExp("\\{" + i + "\\}", "gi"), n[i]);
        return e;
    };
    return Utility;
}());
exports.Utility = Utility;
//# sourceMappingURL=Utility.js.map