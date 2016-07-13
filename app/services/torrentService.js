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
    TorrentService.prototype.findTorrents = function (searchText, filter) {
        var _this = this;
        if (filter === void 0) { filter = 9000; }
        var query = searchText.split(" ").map(function (m) { return m.trim(); }).join("+"), outputType = "json", rowcount = "50";
        var url = Utility_1.Utility.StringFormat("https://torrentproject.se/?s={0}&out={1}&orderby=seeders&filter={2}&num={3}", query, outputType, filter, rowcount);
        return this._http.get(url)
            .toPromise()
            .then(function (response) {
            var model = new torrent_1.TorrentModel();
            model.torrents = [];
            var data = response.json();
            Object.keys(data).filter(function (c) { return !!+c; }).forEach(function (x) {
                var _torrent = new torrent_1.Torrent(data[x].category, data[x].title, data[x].seeds, data[x].leechs, data[x].torrent_size, data[x].torrent_hash, _this.formatBytes(data[x].torrent_size));
                model.torrents.push(_torrent);
            });
            model.total = data.total_found;
            return model;
        })
            .catch(this.handleError);
    };
    TorrentService.prototype.formatBytes = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes == 0)
            return '0 Byte';
        var k = 1000;
        var dm = decimals + 1 || 3;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
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