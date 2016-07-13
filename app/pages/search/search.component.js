"use strict";
var core_1 = require('@angular/core');
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var filters_1 = require("./../../shared/filters");
var filterDialog_1 = require('./filterDialog');
var router_1 = require("@angular/router");
var SearchPageComponent = (function () {
    function SearchPageComponent(_router, modalService) {
        this._router = _router;
        this.modalService = modalService;
        this.searchText = "robot";
    }
    SearchPageComponent.prototype.show = function (fullscreen) {
        var _this = this;
        if (this.searchText.trim().length < 3) {
            alert("minimum 3 characters required.");
            return;
        }
        var options = {
            context: { promptMsg: "find particulars" },
            fullscreen: true
        };
        this.modalService.showModal(filterDialog_1.DialogContent, options)
            .then(function (dialogResult) {
            _this.filters = dialogResult;
            _this.searchItem();
        });
    };
    SearchPageComponent.prototype.searchItem = function () {
        var filters = this.filters.map(function (x) { return filters_1.Filter[x.filter]; });
        if (this.searchText.trim().length > 2)
            this._router.navigate(['/List'], { queryParams: { text: this.searchText.trim(), filter: filters[0] } });
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'search-item',
            directives: [modal_dialog_1.ModalDialogHost],
            providers: [modal_dialog_1.ModalDialogService],
            template: "\n    <StackLayout>\n    <ActionBar title=\"List Down\"></ActionBar>\n      <Label text=\"Search Any Torrent\"></Label>\n      <TextField hint=\"any torrent\" [(ngModel)]=\"searchText\"></TextField>\n     <StackLayout modal-dialog-host>\n        <Button text=\"Filter & Search\" (tap)=\"show()\"></Button>\n    </StackLayout>\n    </StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, modal_dialog_1.ModalDialogService])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search.component.js.map