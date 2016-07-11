"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var Utility_1 = require("./../util/Utility");
var torrent_1 = require("./../shared/torrent");
var TorrentService = (function () {
    function TorrentService(_http) {
        this._http = _http;
    }
    TorrentService.prototype.findTorrents = function (searchText) {
        var query = searchText.split(" ").map(function (m) { return m.trim(); }).join("+"), outputType = "json", rowcount = "50";
        var url = Utility_1.Utility.StringFormat("https://torrentproject.se/?s={0}&out={1}&orderby=latest&filter=9000&num={2}", query, outputType, rowcount);
        return this._http.get(url)
            .toPromise()
            .then(function (response) {
            var model = new torrent_1.TorrentModel();
            model.torrents = [];
            var data = response.json();
            var objectKeys = Object.keys(data).filter(function (c) { if (c * 1)
                return c; });
            objectKeys.forEach(function (x) {
                model.torrents.push(data[x]);
            });
            model.total = data.total_found;
            return model;
        })
            .catch(this.handleError);
    };
    TorrentService.prototype.handleError = function (error) {
        alert('check your internet');
        console.log(error.message || error);
        return Promise.reject(error.message || error);
    };
    TorrentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TorrentService);
    return TorrentService;
}());
exports.TorrentService = TorrentService;
//# sourceMappingURL=torrentService.js.map