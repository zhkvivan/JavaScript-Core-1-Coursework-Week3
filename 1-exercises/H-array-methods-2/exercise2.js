/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(string) {
	let array = string.split('');
	array[0] = array[0].toUpperCase();
	array = array.join('');
	return array;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = 'daniel';

console.log(capitalise(name));
console.log(capitalise('hello'));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
