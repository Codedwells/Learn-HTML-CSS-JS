// _____Comments_____
// semicolons, single quotes
// console.log()
// Variables
// Functions ,  arrow functions
// Loops
// Conditionals if else , while , do while, for loop,
// for of , for in, forEach, map, reduce, filter

//Naming standards
// camelCase
// snake_case
// PascalCase

// Debugging
console.log('I am debugging!!');

// Varibles
var myName = 'John';
let location = 'Nairobi';
const career = 'Web development';

// functions 
function sayHello() {
	console.log('Hello world!!!');
}

sayHello();

const sayHi = () => {
	console.log('Hi World!!!');
};

sayHi();

// for loop
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// While loop
let j = 1;
while (j < 10) {
	console.log(j);
	j++;
}

// Conditionals-
// If statements
if (1 < 2) {
	console.log('Less than two!!');
}

if (6 > 2) {
	console.log('Greater than two!!!');
} else {
	console.log('Less than two!!!');
}

if (4 > 9) {
	console.log('less than nine');
} else if (4 < 9) {
	console.log('Less than nine');
} else {
	console.log('Does not meet the  condition');
}
