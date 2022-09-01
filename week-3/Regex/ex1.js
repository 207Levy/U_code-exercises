const str = "the fat cat hit the rat with a bat";
const str1 = "bob yelled hello";
const str2 = "it's fleece was white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "9542212222";

//Checks if it contains “a” in the string
const checkIfContainsA = function (str) {
  let n = str.search("a");
  if (n === -1) {
    return false;
  }
  return true;
};

//Checks if it’s a string that ends with “at”
const checkIfEndsWithAt = function (str) {
  return /at$/.test(str);
};

//Checks if it’s a number that starts with 054 and of size 10.
const checkIfStartsWithNum = function (str) {
  let start = /^054/.test(str);
  let size = str.length;
  return start && size == 10;
};

console.log(checkIfContainsA(str)); //returns true
console.log(checkIfContainsA(str1)); //returns false

console.log(checkIfEndsWithAt(str)); //returns true
console.log(checkIfEndsWithAt(str1)); //returns false
console.log(checkIfEndsWithAt(str2)); //returns false

console.log(checkIfStartsWithNum(str)); //returns false
console.log(checkIfStartsWithNum(str3)); //return true
console.log(checkIfStartsWithNum(str4)); //return false
console.log(checkIfStartsWithNum(str5)); //return false
