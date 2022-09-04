"use strict";
function printPhones(numbers) {
    if (Array.isArray(numbers)) {
        if (typeof numbers[0] === 'string') {
            numbers.forEach((n) => console.log("strings - " + n));
        }
        else if (typeof numbers[0] === 'number') {
            numbers.forEach((n) => console.log("numbers - " + n));
        }
        else {
            console.log("function does not suport type of " + typeof numbers);
        }
    }
    else {
        if (typeof numbers === 'string') {
            console.log("string - " + numbers);
        }
        else if (typeof numbers === 'number') {
            console.log("number - " + numbers);
        }
        else {
            console.log("function does not suport type of " + typeof numbers);
        }
    }
}
printPhones(972528684411);
printPhones([972528684411, 9725242223]);
printPhones("052863423243");
printPhones(["052343434286", "0547734343"]);
