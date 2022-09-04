"use strict";
const sum = function (arr) {
    let sum = 0;
    arr.forEach((n) => sum += n);
    return sum;
};
const isEven = function (num) {
    let res = false;
    if (num % 2 == 0) {
        res = true;
    }
    return res;
};
const numArray1 = [4, 7, 44, 5, 234];
const numArray2 = [65, 33, 5, 2532, 32, 6];
const numArray3 = [54, 6, 656, 4];
console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);
