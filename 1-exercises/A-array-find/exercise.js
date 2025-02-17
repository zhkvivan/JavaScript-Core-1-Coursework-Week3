/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

function findLongNameThatStartsWithA(name) {
	if ((name.length > 7) && (name[0] === 'A')) {
		return true
	}
}

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA)

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
