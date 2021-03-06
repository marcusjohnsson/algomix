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

// Return the length of the longet word in a string
// @param str, return int
function findLongestWordLength(str) {
  const pattern = /(\w[a-z]*)/g;
  let words = str.match(pattern);
  let lenghts = [];
  words.forEach(element => {
    lenghts.push(element.length);
  });
  return Math.max(...lenghts);
}

// Piglatinize a word
// @param str, return str
function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // vowels;
  let ay = "ay";
  let way = "way";
  let consonantCluster = String;
  let vowelCore = String;
  let hasVowels = false;

  function isVowel(str) {
    return vowels.includes(str);
  }

  // Identify vowelCore & consonantCluster and sets has vowels to true
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str.charAt(i))) {
      vowelCore = str.slice(i, str.lenght);
      consonantCluster = str.slice(0, i);
      hasVowels = true;
      break;
    }
  }

  // 1) hasVowels = false
  if (!hasVowels) {
    return str + ay;
  }

  // 2) string doen not begin with a vowel but has a consonsantcluster:
  if (consonantCluster !== "" && !isVowel(str[0])) {
    return vowelCore + consonantCluster + ay;
  }

  // begins with vowel
  if (isVowel(str[0])) {
    return str + way;
  }
}

// Assertion test
function uniteUnique(arr) {
  let arrNum = arguments.length;

  return arr;
}

function isPangram(str) {
  let phrase = str.toLowerCase();

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z"
  ];

  let checksum = alphabet.length;
  let count = 0;
  let no = 0;
  for (var i = 0; i < phrase.length; i++) {
    if (alphabet.includes(phrase[i])) {
      console.log("yes!");
      count++;
    } else {
      console.log("no!", phrase[i]);
      no++;
    }
  }
  console.log(alphabet.length);
  console.log(str.length);
  count;
  checksum;
  if (count => checksum) {
    return true;
  } else {
    return false;
  }
}
let string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));
