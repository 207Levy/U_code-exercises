import validator from "validator";

console.log(validator.isEmail("shoobert@dylan"));
console.log(validator.isMobilePhone("768-329-9958", "en-US"));
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";

console.log(validator.blacklist(text, blacklist));
