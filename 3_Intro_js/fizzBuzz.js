const fizzBuzz = () => {
	for (let i = 1; i <= 20; i++) {
		if (i % 2 === 0) {
			console.log(i, 'Fizz');
		} else {
			console.log(i, 'Buzz');
		}
	}
};
fizzBuzz();
