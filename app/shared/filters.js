"use strict";
var Filter = (function () {
    function Filter() {
    }
    Object.defineProperty(Filter.prototype, "all", {
        get: function () { return 9000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "audio", {
        get: function () { return 1000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "lossless", {
        get: function () { return 1101; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "mp3", {
        get: function () { return 1102; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "video", {
        get: function () { return 2000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "tv", {
        get: function () { return 2101; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "dvdrip", {
        get: function () { return 2102; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "hdrip", {
        get: function () { return 2103; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "dvd", {
        get: function () { return 2104; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "lq", {
        get: function () { return 2105; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "ebooks", {
        get: function () { return 3000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "comics", {
        get: function () { return 3101; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "magazines", {
        get: function () { return 3102; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "tutorials", {
        get: function () { return 3103; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "audiobook", {
        get: function () { return 3104; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "images", {
        get: function () { return 4000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "mobile", {
        get: function () { return 5000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "games", {
        get: function () { return 6000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "pc", {
        get: function () { return 6101; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "nintendo", {
        get: function () { return 6102; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "playstation", {
        get: function () { return 6103; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "xbox", {
        get: function () { return 6104; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "applications", {
        get: function () { return 7000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Filter.prototype, "adult", {
        get: function () { return 8000; },
        enumerable: true,
        configurable: true
    });
    return Filter;
}());
exports.Filter = Filter;
var FilterCategory = (function () {
    function FilterCategory(filter, checked) {
        this.filter = filter;
        this.checked = checked;
    }
    return FilterCategory;
}());
exports.FilterCategory = FilterCategory;
//# sourceMappingURL=filters.js.map