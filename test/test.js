var code = require('../main');
var expect = require('chai').expect;

describe('FizzBuzz', function(){
	it('should print "Fizz" if it can be divided by 3', function(){
    expect(code.FizzBuzz(3)).to.equal("Fizz");
    expect(code.FizzBuzz(9)).to.equal("Fizz");
    expect(code.FizzBuzz(18)).to.equal("Fizz");
  });
  it('should print "Buzz" if it can be divided by 5', function(){
    expect(code.FizzBuzz(5)).to.equal("Buzz");
    expect(code.FizzBuzz(10)).to.equal("Buzz");
    expect(code.FizzBuzz(20)).to.equal("Buzz");
  });
  it('should print "FizzBuzz" if it can be divided by both 3 and 5', function(){
    expect(code.FizzBuzz(15)).to.equal("FizzBuzz");
    expect(code.FizzBuzz(30)).to.equal("FizzBuzz");
    expect(code.FizzBuzz(45)).to.equal("FizzBuzz");
  });
  it('should print the number if it is not divisible by either', function(){
    expect(code.FizzBuzz(1)).to.equal(1);
    expect(code.FizzBuzz(2)).to.equal(2);
    expect(code.FizzBuzz(4)).to.equal(4);
    expect(code.FizzBuzz(7)).to.equal(7);
    expect(code.FizzBuzz(8)).to.equal(8);
  });
});
