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
        Object.keys(filters_1.Filter).map(function (x) {
            _this.filters.push(new filters_1.FilterCategory(x, false));
        });
    }
    DialogContent.prototype.ngAfterViewInit = function () {
        // children are set
    };
    DialogContent.prototype.close = function (result) {
        this.params.closeCallback(result);
    };
    __decorate([
        core_1.ViewChildren(DialogContent), 
        __metadata('design:type', DialogContent)
    ], DialogContent.prototype, "children", void 0);
    DialogContent = __decorate([
        core_1.Component({
            selector: 'modal-content',
            template: "\n    <StackLayout margin=\"24\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\n      <ListView [items]=\"filters\">\n          <template let-item=\"item\" let-odd=\"odd\" let-even=\"even\">\n              <StackLayout orientation=\"horizontal\">\n                  <Switch [checked]=\"item.checked\" [text]=\"item.filter\" ></Switch>\n              </StackLayout>\n          </template>\n      </ListView>\n        <StackLayout orientation=\"horizontal\" marginTop=\"12\">\n            <Button text=\"ok\" (tap)=\"close('OK')\"></Button>\n            <Button text=\"cancel\" (tap)=\"close('Cancel')\"></Button>\n        </StackLayout>\n    </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams])
    ], DialogContent);
    return DialogContent;
}());
exports.DialogContent = DialogContent;
//# sourceMappingURL=filterDialog.js.map