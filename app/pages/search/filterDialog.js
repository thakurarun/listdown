"use strict";
var core_1 = require('@angular/core');
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var filters_1 = require("./../../shared/filters");
var DialogContent = (function () {
    function DialogContent(params) {
        var _this = this;
        this.params = params;
        this.prompt = params.context.promptMsg;
        this.filters = new Array();
        Object.keys(filters_1.Filter).filter(function (x) { return !+x; }).forEach(function (x) {
            _this.filters.push(new filters_1.FilterCategory(x, false));
        });
    }
    DialogContent.prototype.close = function (result) {
        this.params.closeCallback(this.filters.filter(function (x) { return !!x.checked; }));
    };
    DialogContent.prototype.checkFilters = function () {
        console.log("item checked: " + this.filters.filter(function (x) { return !!x.checked; }).length);
    };
    __decorate([
        core_1.ViewChildren(DialogContent), 
        __metadata('design:type', DialogContent)
    ], DialogContent.prototype, "children", void 0);
    DialogContent = __decorate([
        core_1.Component({
            selector: 'modal-content',
            templateUrl: 'pages/search/filter.dialog.view.html'
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams])
    ], DialogContent);
    return DialogContent;
}());
exports.DialogContent = DialogContent;
//# sourceMappingURL=filterDialog.js.map