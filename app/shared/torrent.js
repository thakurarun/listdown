"use strict";
/**
 * Torrent
 */
var Torrent = (function () {
    /**
     *
     */
    function Torrent(category, title, seeds, leechs, torrent_size, torrent_hash, sizeString) {
        this.category = category;
        this.title = title;
        this.seeds = seeds;
        this.leechs = leechs;
        this.torrent_size = torrent_size;
        this.torrent_hash = torrent_hash;
        this.sizeString = sizeString;
    }
    return Torrent;
}());
exports.Torrent = Torrent;
var TorrentModel = (function () {
    function TorrentModel() {
    }
    return TorrentModel;
}());
exports.TorrentModel = TorrentModel;
//# sourceMappingURL=torrent.js.map