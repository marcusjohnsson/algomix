// Convert Celcius Temperature to Farenheit
// @param int, return int
function convertCelciusToFarenheitF(celsius) {
  let farenheit = (celsius * 9) / 5 + 32;
  return farenheit;
}

// Reverses order of string
// @param str, return str
function reverseString(str) {
  let l = str.length - 1;
  let reversedString = "";
  reversedString;
  while (l > -1) {
    reversedString += str[l];
    l--;
  }
  return reversedString;
}

// Return the factor of a whole number
// @param int, return int
function factorize(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorize(num - 1);
  }
}

//
// Basic Algorithm Scripting: Find the Longest Word in a String, return as int;
