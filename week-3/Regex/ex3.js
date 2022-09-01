const email1 = "cat@meow.com";
const email2 = "bad1npuT!@gmail.com";
const email3 = "meow@gmail.net";

const emailValidator = function (str) {
  const isNumInside = /\d/.test(str);
  const endsWithCom = /.com$/.test(str);
  return endsWithCom && !isNumInside;
};

console.log(emailValidator(email1)); //return true
console.log(emailValidator(email2)); //return true
console.log(emailValidator(email3)); //return false
