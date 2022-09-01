const firstURL = "www.workingurl.com";
const secondURL = "iamabadurl.com";
const thirdURL = "www.doireallywork.net";

const urlValidator = function (str) {
  const prefix = /^www./.test(str);
  const suffix = /.com$/.test(str);
  return prefix && suffix;
};

console.log(urlValidator(firstURL)); //return true
console.log(urlValidator(secondURL)); //return true
console.log(urlValidator(thirdURL)); //return false
