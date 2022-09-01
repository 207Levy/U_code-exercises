const { is } = require("@babel/types");
const { boolean } = require("yargs");

class Exercises {
  constructor() {}
  //should return true if n is even, false otherwise
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }

  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }

  //should return a clean string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }

  validate(arr) {
    let boolArr = arr.filter((a) => typeof a == "boolean");
    if (boolArr.length == 0) {
      return { error: "Need at least one boolean" };
    } else {
      let Tcount = arr.filter((a) => a == true).length;
      let Fcount = arr.filter((a) => a == false).length;
      if (Tcount > Fcount) {
        return true;
      }
      return false;
    }
  }
}

module.exports = { Exercises };
