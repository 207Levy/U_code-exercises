"use strict";
class Numbers {
    constructor(arr) {
        this.array = arr;
    }
    addNumber(number) {
        var _a;
        (_a = this.array) === null || _a === void 0 ? void 0 : _a.push(number);
    }
    sum() {
        let sum = 0;
        this.array.forEach((i) => sum += this.numeralValueOf(i));
        return sum;
    }
    numeralValueOf(input) {
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
}
const numbers1 = new Numbers(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");
const numbers2 = new Numbers([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);
console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
