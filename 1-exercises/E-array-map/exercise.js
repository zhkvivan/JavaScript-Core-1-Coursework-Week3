// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function by100(number) {
	return number * 100;
}

let multipliedNumbers = numbers.map(by100);

let multipliedNumbers2 = numbers.map(function (number) {
	return number * 100;
});

let multipliedNumbers3 = numbers.map((number) => number * 100);

console.log(multipliedNumbers3);
