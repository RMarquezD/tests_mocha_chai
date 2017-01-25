var should    = require("chai").should();
var calculator = require("../app/calculator");

describe("Calcultator tests using SHOULD interface from CHAI module: ", function() {
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
			it("Check the returned value using: value.should.equal(value): ", function() {
				result   = calculator.sum(2);
				result.should.equal(4);
			});
			it("Check the returned value using: value.should.be.a('value'): ", function() {
				result   = calculator.sum(2);
				result.should.be.a('number');
			});
	});	
	describe("Check addTested Function: ", function() {
		it("Check the returned value using: value.should.equal(value): ", function() {
			result   = calculator.addTested("text");
			result.should.equal("text tested");
		});		
		it("Check the returned value using: value.should.be.a('value'): ", function() {
			result   = calculator.addTested("text");
			result.should.be.a('string');
		});		
		it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function() {
			result   = calculator.addTested("text");
			result.should.have.lengthOf(11);
		});		
	});

});
