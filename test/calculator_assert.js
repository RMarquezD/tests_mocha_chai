var assert   = require('assert');
var calculator = require("../app/calculator");

describe("Calcultator tests using ASSERT module", function() {
	before(function() {
		// runs before all tests in this block
		var result;
	});
	after(function() {
		// runs after all tests in this block
	});
	beforeEach(function() {
		// runs before each test in this block
    });
    afterEach(function() {
	   // runs after each test in this block
	   result = null;  
	 });
	describe("Check Sum Function: ", function() {
			it("Check the returned value using: assert.equal(value, value): ", function() {
				result   = calculator.sum(2);
				assert.equal(result, 4);
			});
			it("Check the returned value using: assert(typeof(value, 'value')): ", function() {
				result   = calculator.sum(2);
				assert(typeof(result), "number");
			});
	});		
	describe("Check addTested Function: ", function() {
		it("Check the returned value using: assert.equal(value, value): ", function() {
			result   = calculator.addTested("text");
			assert.equal(result, "text tested");
		});
		it("Check the returned value using: assert(typeof(value, 'value')): ", function() {
			result   = calculator.addTested("text");
			assert.equal(typeof(result), "string");
		});
		it("Check the returned value using: assert.equal(value, value): ", function() {
			result   = calculator.addTested("text");
			assert.equal(result.length, 11);
		});
});	
});