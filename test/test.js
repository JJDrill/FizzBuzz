var code = require('../main');
var expect = require('chai').expect;

describe('FizzBuzz', function(){
	it('should print "Fizz" if it can be divided by 3', function(){
    expect(code.FizzBuzz(3)).to.equal("Fizz");
    expect(code.FizzBuzz(9)).to.equal("Fizz");
    expect(code.FizzBuzz(18)).to.equal("Fizz");
  });
  it('should print "Buzz" if it can be divided by 5');
  it('should print "FizzBuzz" if it can be divided by both 3 and 5', function(){
    expect(code.FizzBuzz(15)).to.equal("FizzBuzz");
    expect(code.FizzBuzz(30)).to.equal("FizzBuzz");
    expect(code.FizzBuzz(45)).to.equal("FizzBuzz");
  });
  it('should print the number if it is not divisible by either');
});
