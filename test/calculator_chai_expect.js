var expect    = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calcultator tests using EXPECT interface from CHAI module", function() {	
	describe("Check Sum Function", function() {
			it("Add 2 to an intenger", function() {
				var result   = calculator.sum(2);
				expect(result).to.equal(4);
			});
	});	
	describe("Check Multiply Function", function() {
			it("Multiply by  2 an integer", function() {
				var result   = calculator.multiply(3);
				expect(result).to.equal(6);
			});
	});
});
