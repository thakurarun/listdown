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
        this.totalCount = 0;
        var self = this;
        self.sub = self.route.params.subscribe(function (params) {
            _this.torrentService.findTorrents(params['text']).then(function (model) {
                self.torrents = model.torrents;
                self.totalCount = model.total;
            }, function (err) { return self.router.navigate(['/']); });
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
            templateUrl: 'pages/list/list.view.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, torrentService_1.TorrentService])
    ], ListPageComponent);
    return ListPageComponent;
}());
exports.ListPageComponent = ListPageComponent;
//# sourceMappingURL=list.component.js.map