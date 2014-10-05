//var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

buster.testCase("Distance calc", {
    setUp: function() {
	this.d = new bovan.distance();
    },
    "km2mile() - km to mile conversion": {
	"calculates 1.609 km to 1 miles": function () {
	    assert.equals('1', this.d.km2mile('1.609'));
	},
	"calculates 3 km to 1.864 miles": function () {
	    assert.equals("1.864", this.d.km2mile('3'));
	},
	"calculates various distances from km to miles": function() {
	    assert.equals("3.107", this.d.km2mile('5'));
	    assert.equals("6.214", this.d.km2mile('10'));
	    assert.equals("13.111", this.d.km2mile('21.1'));
	    assert.equals("31.069", this.d.km2mile('50'));
	    assert.equals("4.142", this.d.km2mile('6.666'));
	    assert.equals("766.849", this.d.km2mile('1234.1234'));
	}
    }
});
