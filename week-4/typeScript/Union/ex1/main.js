"use strict";
function concat(input, flag) {
    let res = "";
    if (Array.isArray(input)) {
        input.forEach((s) => res += s);
    }
    if (flag) {
        console.log(res);
    }
    return res;
}
concat("Tomer", false);
concat("Tomer", 2);
concat(["Tomer", "Sagi"], 1);
concat(["Tomer", "Sagi"], 0);
concat(["Michael", "Jordan", "is", "the", "King"], true);
