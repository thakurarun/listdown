"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var torrentService_1 = require('./../../services/torrentService');
var ListPageComponent = (function () {
    function ListPageComponent(route, router, torrentService) {
        this.route = route;
        this.router = router;
        this.torrentService = torrentService;
    }
    ListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.sub = self.route.params.subscribe(function (params) {
            _this.torrentService.findTorrents(params['text']).then(function (data) {
                _this.torrents = data;
            }, function (err) { return _this.router.navigate(['/']); });
        });
    };
    ListPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ListPageComponent.prototype.onNavBtnTap = function () {
        this.router.navigate(['/']);
    };
    ListPageComponent.prototype.onItemTap = function () {
        alert('to do');
    };
    ListPageComponent = __decorate([
        core_1.Component({
            selector: 'list-file',
            providers: [torrentService_1.TorrentService],
            template: "\n    <StackLayout>\n      <Label text=\"List Torrents\"></Label>\n      <ListView [items]=\"torrents\" (itemTap)=\"onItemTap($event)\">\n    <template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n        <StackLayout [class.odd]=\"odd\" [class.even]=\"even\">\n            <Label [text]='item.title'></Label>\n        </StackLayout>\n    </template>\n</ListView>\n    </StackLayout>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, torrentService_1.TorrentService])
    ], ListPageComponent);
    return ListPageComponent;
}());
exports.ListPageComponent = ListPageComponent;
//# sourceMappingURL=list.component.js.map