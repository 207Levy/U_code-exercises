"use strict";
function sum(input) {
    let sum = 0;
    if (Array.isArray(input)) {
        input.forEach((i) => sum += numeralValueOf(i));
    }
    else {
        if (typeof input === 'string') {
            sum = numeralValueOf(input);
        }
        else if (typeof input === 'number') {
            sum = numeralValueOf(input);
        }
        else {
            sum = 0;
        }
    }
    return sum;
}
function numeralValueOf(input) {
    if (typeof input === 'string') {
        if (!isNaN(parseInt(input))) {
            let x = parseInt(input);
            return x;
        }
        return 0;
    }
    else if (typeof input === 'number') {
        return input;
    }
    else {
        return 0;
    }
}
