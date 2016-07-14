"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var nativescript_ng2_fonticon_1 = require('nativescript-ng2-fonticon');
var torrentService_1 = require('./../../services/torrentService');
var ListPageComponent = (function () {
    function ListPageComponent(route, router, torrentService, fonticon) {
        this.route = route;
        this.router = router;
        this.torrentService = torrentService;
        this.fonticon = fonticon;
        this.isLoading = false;
        this.colors = ["#f16364", "#663cb5", "#e61564", "#e4c62e", "#67bf74", "#59a2be", "#2093cd", "#ad62a7"];
    }
    ListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.totalCount = 0;
        var self = this;
        self.sub = self.router.routerState.queryParams.subscribe(function (params) {
            _this.torrentService.findTorrents(params['text'], params['filter']).then(function (model) {
                self.torrents = _this.colorTheCards(model.torrents);
                self.totalCount = model.total;
                self.isLoading = false;
            }, function (err) { return self.router.navigate(['/']); });
        });
    };
    ListPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ListPageComponent.prototype.onNavBtnTap = function () {
        this.router.navigate(['/']);
    };
    ListPageComponent.prototype.onItemTap = function (e, torrent) {
        alert('to do' + torrent.torrent_hash);
    };
    ListPageComponent.prototype.colorTheCards = function (torrents) {
        var _this = this;
        var length = this.colors.length - 1;
        return torrents.filter(function (x) {
            x.color = _this.colors[Math.floor(Math.random() * length)];
            return true;
        });
    };
    ListPageComponent = __decorate([
        core_1.Component({
            selector: 'list-file',
            providers: [torrentService_1.TorrentService],
            pipes: [nativescript_ng2_fonticon_1.TNSFontIconPipe, nativescript_ng2_fonticon_1.TNSFontIconPurePipe],
            templateUrl: 'pages/list/list.view.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, torrentService_1.TorrentService, nativescript_ng2_fonticon_1.TNSFontIconService])
    ], ListPageComponent);
    return ListPageComponent;
}());
exports.ListPageComponent = ListPageComponent;
//# sourceMappingURL=list.component.js.map