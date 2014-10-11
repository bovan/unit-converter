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

    if (!timestring) {
        return 0;
    }

    var parts = timestring.split(':'),
        secs = 0,
        multiplier = 1;

    while( parts.length > 0) {
        secs += multiplier * parseInt(parts.pop(), 10);
        multiplier *= 60;   
    }
    
    // NaN check
    if (secs !== secs) {
        return 0;
    }
    return secs;
};
