var should    = require("chai").should();
var calculator = require("../app/calculator");

describe("Calcultator tests using SHOULD interface from CHAI module", function() {	
	describe("Check Sum Function", function() {
			it("Check the returned value using: value.should.equal(value)", function() {
				var result   = calculator.sum(2);
				result.should.equal(4);
			});
			it("Check the returned value using: value.should.be.a('value')", function() {
				var result   = calculator.sum(2);
				result.should.be.a('number');
			});
	});	
	describe("Check addTested Function", function() {
		it("Check the returned value using: value.should.equal(value)", function() {
			var result   = calculator.addTested("text");
			result.should.equal("text tested");
		});		
		it("Check the returned value using: value.should.be.a('value') ", function() {
			var result   = calculator.addTested("text");
			result.should.be.a('string');
		});		
		it("Check the returned value using: expect(value).to.have.lengthOf(value) ", function() {
			var result   = calculator.addTested("text");
			result.should.have.lengthOf(11);
		});		
	});

});
