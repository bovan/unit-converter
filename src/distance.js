var bovan = bovan || {};

bovan.distance = function () {
    this.mile = 1.609344;
};

// round off number by digits-helper
bovan.distance.prototype.round = function (num, digits) {
    if (!digits) {
	digits = 2;
    }
    var n = Math.pow(10, digits);
    var rounded = Math.round(num * n) / n;
    return rounded;
};

// convert km to mile with 3 digits
bovan.distance.prototype.km2mile = function (km) {
    var miles = km / this.mile;
    return this.round( miles, 3);
};

// convert mile to km with 3 digits
bovan.distance.prototype.mile2km = function (mile) {
    var km = mile * this.mile;
    return this.round( km, 3 );
};

bovan.distance.prototype.time2secs = function (timestring) {
    return 5;
};
