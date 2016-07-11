"use strict";
var core_1 = require('@angular/core');
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var filterDialog_1 = require('./filterDialog');
var router_1 = require("@angular/router");
var SearchPageComponent = (function () {
    function SearchPageComponent(_router, modalService) {
        this._router = _router;
        this.modalService = modalService;
    }
    SearchPageComponent.prototype.show = function (fullscreen) {
        var _this = this;
        var options = {
            context: { promptMsg: "This is the prompt message!" },
            fullscreen: true
        };
        this.modalService.showModal(filterDialog_1.DialogContent, options)
            .then(function (dialogResult) { _this.result = dialogResult; });
    };
    SearchPageComponent.prototype.searchItem = function () {
        if (this.searchText && this.searchText.trim().length)
            this._router.navigate(['/List', this.searchText.trim()]);
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'search-item',
            directives: [modal_dialog_1.ModalDialogHost],
            providers: [modal_dialog_1.ModalDialogService],
            template: "\n    <StackLayout>\n    <ActionBar title=\"List Down\"></ActionBar>\n      <Label text=\"Search Any Torrent\"></Label>\n      <TextField hint=\"any torrent\" [(ngModel)]=\"searchText\"></TextField>\n      <Button text=\"Search\" (tap)=\"searchItem()\"></Button>\n     <StackLayout modal-dialog-host>\n        <Button text=\"Filters\" (tap)=\"show()\"></Button>\n    </StackLayout>\n    </StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, modal_dialog_1.ModalDialogService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search.component.js.map