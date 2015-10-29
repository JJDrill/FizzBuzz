module.exports = {

	FizzBuzz: function(endNum) {
		returnArray = [];

		for (var i = 0; i <= endNum; i++) {

	  	if ((i % 3 === 0) && (i % 5 === 0)) {
				returnArray.push('FizzBuzz');
	  	} else if (i % 3 === 0) {
				returnArray.push('Fizz');
	  	} else if (i % 5 === 0) {
				returnArray.push('Buzz');
	  	} else {
	  		returnArray.push(i);
	  	}
		}
		return returnArray;
	}

}
