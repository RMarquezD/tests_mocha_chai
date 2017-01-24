var assert    = require("chai").assert;
var calculator = require("../app/calculator");

describe("Calcultator tests using ASSERT interface from CHAI module", function() {	
	describe("Check Sum Function", function() {
			it("Check the returned value using: assert.equal(value,'value') ", function() {
				var result   = calculator.sum(2);
				assert.equal(result, 4);
			});		
			it("Check the returned value using: assert.typeOf(value,'value')  ", function() {
				var result   = calculator.sum(2);
				assert.typeOf(result, 'number');
			});			
	});	
	describe("Check addTested Function", function() {
		it("Check the returned value using: assert.equal(value,'value') ", function() {
			var result   = calculator.addTested("text");
			assert.equal(result, "text tested");
		});		
		it("Check the returned value using: assert.typeOf(value,'value') ", function() {
			var result   = calculator.addTested("text");
			assert.typeOf(result, "string");
		});		
		it("Check the returned value using: assert.lengthOf(value,'value') ", function() {
			var result   = calculator.addTested("text");
			assert.lengthOf(result, 11);
		});				
	});		
	
	
	
	
});
