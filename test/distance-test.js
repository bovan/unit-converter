var assert = buster.assert;
var refute = buster.refute;

buster.testCase("Distance calc", {
    setUp: function() {
	this.d = new bovan.distance();
    },
    "km2mile() - km to mile conversion": {
	"calculates 1.609 km to 1 miles": function () {
	    assert.equals(1, this.d.km2mile(1.609));
	},
	"calculates 3 km to 1.864 miles": function () {
	    assert.equals(1.864, this.d.km2mile(3));
	},
	"calculates various distances from km to miles": function() {
	    assert.equals(3.107, this.d.km2mile(5));
	    assert.equals(6.214, this.d.km2mile(10));
	    assert.equals(13.111, this.d.km2mile(21.1));
	    assert.equals(31.069, this.d.km2mile(50));
	    assert.equals(4.142, this.d.km2mile(6.666));
	    assert.equals(766.849, this.d.km2mile(1234.1234));
	}
    },

    "mile2km() - mile to km conversion" : {
	"calculates 5 miles to km": function () {
	    assert.equals(8.047, this.d.mile2km(5));
	},
	"calculates 10 miles to km": function () {
	    assert.equals(16.093, this.d.mile2km(10));
	}
    },

    "round() - rounds off a number": {
	"rounds off 10.123 to 10.1": function () {
	    assert.equals(10.1, this.d.round(10.123, 1));
	},
	"rounds off 10.123 to 10.12": function () {
	    assert.equals(10.12, this.d.round(10.123, 2));
	},
	"rounding off defaults to 2 digits": function () {
            assert.equals(10.12, this.d.round(10.122222));
	}
    },
    "time to seconds": {
	"should calculate 5 seconds to 5": function () {
            assert.equals(5, this.d.time2secs('5'));
        }
    }
});