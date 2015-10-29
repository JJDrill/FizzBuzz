var code = require('../main');
var expect = require('chai').expect;

describe('FizzBuzz', function(){
	it('should print "Fizz" if it can be divided by 3', function(){
    expect(code.FizzBuzz(3).toString()).to.equal(['FizzBuzz', 1, 2, 'Fizz'].toString());
  });
  it('should print "Buzz" if it can be divided by 5', function(){
    expect(code.FizzBuzz(5).toString()).to.equal(['FizzBuzz', 1, 2, "Fizz", 4, "Buzz"].toString());
  });
  it('should print "FizzBuzz" if it can be divided by both 3 and 5', function(){
    expect(code.FizzBuzz(15).toString()).to.equal(['FizzBuzz', 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"].toString());
  });
  it('should print the number if it is not divisible by either', function(){
    expect(code.FizzBuzz(2).toString()).to.equal(['FizzBuzz', 1, 2].toString());
  });
});
