"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var SearchPageComponent = (function () {
    function SearchPageComponent(_router) {
        this._router = _router;
    }
    SearchPageComponent.prototype.searchItem = function () {
        if (this.searchText && this.searchText.trim().length)
            this._router.navigate(['/List', this.searchText.trim()]);
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'search-item',
            template: "\n    <StackLayout>\n    <ActionBar title=\"List Down\"></ActionBar>\n      <Label text=\"Search Item\"></Label>\n      <TextField hint=\"any torrent\" [(ngModel)]=\"searchText\"></TextField>\n      <Button text=\"Search\" (tap)=\"searchItem()\"></Button>\n    </StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search.component.js.map