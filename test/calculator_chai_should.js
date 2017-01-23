var should    = require("chai").should();
var calculator = require("../app/calculator");

describe("Calcultator tests using SHOULD interface from CHAI module", function() {	
	describe("Check Sum Function", function() {
			it("Add 2 to an intenger", function() {
				var result   = calculator.sum(2);
				result.should.equal(4);
			});
	});	
	describe("Check Multiply Function", function() {
			it("Multiply by  2 an integer", function() {
				var result   = calculator.multiply(3);
				result.should.equal(6);
			});
	});
});
