var bovan = bovan || {};

bovan.distance = function () {
    this.mile = 1.609344;
};

bovan.distance.prototype.km2mile = function (km) {
    var miles = km / this.mile;
    miles = Math.round(miles * 1000) / 1000;
    return '' + miles;
};
