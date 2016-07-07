"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ListPageComponent = (function () {
    function ListPageComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ListPageComponent.prototype.ngOnInit = function () {
        console.log('search screen called');
        var self = this;
        self.sub = self.route.params.subscribe(function (params) {
            self.searchText = params['text'];
        });
    };
    ListPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ListPageComponent = __decorate([
        core_1.Component({
            selector: 'list-file',
            template: "\n    <StackLayout>\n      <Label text=\"List Torrents\">\n      </Label>\n      <Label textWrap=\"true\" [text]=\"searchText\"></Label>\n    </StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ListPageComponent);
    return ListPageComponent;
}());
exports.ListPageComponent = ListPageComponent;
//# sourceMappingURL=list.component.js.map