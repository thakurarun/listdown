"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var SearchPageComponent = (function () {
    function SearchPageComponent(_router) {
        this._router = _router;
    }
    SearchPageComponent.prototype.searchItem = function () {
        console.log(this.searchText);
        this._router.navigate(['/List', this.searchText]);
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'search-item',
            template: "\n    <StackLayout>\n      <Label text=\"Search Item\"></Label>\n      <TextField hint=\"any torrent\" [(ngModel)]=\"searchText\" text=\"\"></TextField>\n      <<Button text=\"Search\" (tap)=\"searchItem()\"></Button>\n    </StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search.component.js.map