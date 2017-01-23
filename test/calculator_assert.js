var assert   = require('assert');
var calculator = require("../app/calculator");

describe("Calcultator tests using ASSERT interface from CHAI module", function() {	
	describe("Check Sum Function using chai methods", function() {
			it("Add 2 to an intenger", function() {
				var result   = calculator.sum(2);
				assert.equal(result, 4);
			});
	});	
	describe("Check Multiply Function", function() {
			it("Multiply by  2 an integer", function() {
				var result   = calculator.multiply(3);
				assert.equal(result, 6);
			});
	});
});