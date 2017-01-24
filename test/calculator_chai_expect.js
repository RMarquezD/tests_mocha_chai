var expect    = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calcultator tests using EXPECT interface from CHAI module", function() {	
	describe("Check Sum Function", function() {
			it("Check the returned value using: expect(value).to.equal(value) ", function() {
				var result   = calculator.sum(2);
				expect(result).to.equal(4);
			});
			it("Check the returned value using: expect(value).to.be.a('value') ", function() {
				var result   = calculator.sum(2);
				expect(result).to.be.a('number');
			});
	});	
	describe("Check addTested Function", function() {
		it("Check the returned value using: expect(value).to.equal('value') ", function() {
			var result   = calculator.addTested("text");
			expect(result).to.equal("text tested");
		});		
		it("Check the returned value using: expect(value).to.be.a('value')) ", function() {
			var result   = calculator.addTested("text");
			expect(result).to.be.a('string');
		});		
		it("Check the returned value using: expect(value).to.have.lengthOf(value) ", function() {
			var result   = calculator.addTested("text");
			expect(result).to.have.lengthOf(11);
		});		
	});
});
