# CHAI:
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.  
Chaijs page: http://chaijs.com/ 

# INTERFACES:
Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel:

> # Should:  
>>chai.should();  
>>foo.should.be.a('string');  
>>foo.should.equal('bar');  
>>foo.should.have.lengthOf(3);  
>>tea.should.have.property('flavors').with.lengthOf(3);  

># Expect:  
>>var expect = chai.expect;  
>>expect(foo).to.be.a('string');  
>>expect(foo).to.equal('bar');  
>>expect(foo).to.have.lengthOf(3);  
>>expect(tea).to.have.property('flavors').with.lengthOf(3);  

># Assert:  
>>var assert = chai.assert;  
>>assert.typeOf(foo, 'string');  
>>assert.equal(foo, 'bar');  
>>assert.lengthOf(foo, 3)  
>>assert.property(tea, 'flavors');  
>>assert.lengthOf(tea.flavors, 3);  
