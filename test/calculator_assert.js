var assert   = require('assert');
var calculator = require("../app/calculator");

describe("Calcultator tests using ASSERT module", function() {	
	describe("Check Sum Function", function() {
			it("Check the returned value using: assert.equal(value, value)", function() {
				var result   = calculator.sum(2);
				assert.equal(result, 4);
			});
			it("Check the returned value using: assert(typeof(value, 'value'))", function() {
				var result   = calculator.sum(2);
				assert(typeof(result, "number"));
			});
	});	
	
	describe("Check addTested Function", function() {
		it("Check the returned value using: assert.equal(value, value)", function() {
			var result   = calculator.addTested("text");
			assert.equal(result, "text tested");
		});
		it("Check the returned value using: assert(typeof(value, 'value'))", function() {
			var result   = calculator.addTested("text");
			assert(typeof(result, "string"));
		});
		it("Check the returned value using: assert.equal(value, value)", function() {
			var result   = calculator.addTested("text");
			assert.equal(result.length, 11);
		});
});	
});