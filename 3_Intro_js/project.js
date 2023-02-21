function addEvenNumbersBetween1and10() {
	let number = 1;
	let sum = 0;

	while (number < 11) {
		if (number % 2 == 0) {
			sum += number;
		}
		number++;
	}
	console.log(sum);
}

addEvenNumbersBetween1and10();
