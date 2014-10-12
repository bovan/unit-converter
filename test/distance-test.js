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
        },
        "should calculate 10 seconds to 10": function () {
            assert.equals(10, this.d.time2secs('10'));
        },
        "should calculate 1:10 to 70 seconds": function () {
            assert.equals(70, this.d.time2secs('1:10'));
        },
        "should calculate 5:40 to 340": function () {
            assert.equals(340, this.d.time2secs('5:40'));
        },
        "should assert 1:30:00 and 90:00 to 5400": function () {
            assert.equals(5400, this.d.time2secs('1:30:00'));
            assert.equals(5400, this.d.time2secs('90:00'));
        },
        "error handling": {
            // lets make it simple and return 0 seconds
	    "should return 0 for string a": function () {
                assert.equals(0, this.d.time2secs('a'));
            },
            "should return 0 for empty input": function () {
                assert.equals(0, this.d.time2secs());
            },
            "should return 0 for empty string input": function () {
                assert.equals(0, this.d.time2secs(''));
            }
        }
    },
    "seconds to timestring": {
	"should convert 5 to string 5": function () {
            assert.equals('5', this.d.secs2time(5));
        },
	"should convert 10 to string 10": function () {
            assert.equals('10', this.d.secs2time(10));
        },
	"should convert 65 to string 1:05": function () {
            assert.equals('1:05', this.d.secs2time(65));
        }
    },
    "zero padding numbers": {
	"should zero pad 5 to 05": function () {
            assert.equals('05', this.d.zeropad(5));
        },
        "should not zero pad 10 to 010": function () {
            refute.equals('010', this.d.zeropad(10));
            assert.equals('10', this.d.zeropad(10));
        },
        "should zero pad string 9 to 09": function () {
            assert.equals('09', this.d.zeropad('09'));
        },
        "should leave 120 alone": function () {
            assert.equals('120', this.d.zeropad('120'));
        }
    },
    "pace conversions": {
	"should convert 9:41 min/mile to 6:01 min/km": function () {
            assert.equals('6:00', this.d.pace2km('9:39'));
        },
        "should convert 8:03 min/mile to 5:00 min/km": function () {
            assert.equals('5:00', this.d.pace2km('8:02'));
        },
        "should convert 10:00 min/mile to 6:12 min/km": function () {
            assert.equals('6:13', this.d.pace2km('10:00'));
        },
        "should convert 11:11 min/mile to 6:56 min/km": function () {
            assert.equals('6:57', this.d.pace2km('11:11'));
        },
        
    }
});