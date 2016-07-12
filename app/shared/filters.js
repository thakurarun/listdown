"use strict";
(function (Filter) {
    Filter[Filter["all"] = 9000] = "all";
    Filter[Filter["audio"] = 1000] = "audio";
    Filter[Filter["lossless"] = 1101] = "lossless";
    Filter[Filter["mp3"] = 1102] = "mp3";
    Filter[Filter["video"] = 2000] = "video";
    Filter[Filter["tv"] = 2101] = "tv";
    Filter[Filter["dvdrip"] = 2102] = "dvdrip";
    Filter[Filter["hdrip"] = 2103] = "hdrip";
    Filter[Filter["dvd"] = 2104] = "dvd";
    Filter[Filter["lq"] = 2105] = "lq";
    Filter[Filter["ebooks"] = 3000] = "ebooks";
    Filter[Filter["comics"] = 3101] = "comics";
    Filter[Filter["magazines"] = 3102] = "magazines";
    Filter[Filter["tutorials"] = 3103] = "tutorials";
    Filter[Filter["audiobook"] = 3104] = "audiobook";
    Filter[Filter["images"] = 4000] = "images";
    Filter[Filter["mobile"] = 5000] = "mobile";
    Filter[Filter["games"] = 6000] = "games";
    Filter[Filter["pc"] = 6101] = "pc";
    Filter[Filter["nintendo"] = 6102] = "nintendo";
    Filter[Filter["playstation"] = 6103] = "playstation";
    Filter[Filter["xbox"] = 6104] = "xbox";
    Filter[Filter["applications"] = 7000] = "applications";
    Filter[Filter["adult"] = 8000] = "adult";
})(exports.Filter || (exports.Filter = {}));
var Filter = exports.Filter;
var FilterCategory = (function () {
    function FilterCategory(filter, checked) {
        this.filter = filter;
        this.checked = checked;
    }
    return FilterCategory;
}());
exports.FilterCategory = FilterCategory;
//# sourceMappingURL=filters.js.map