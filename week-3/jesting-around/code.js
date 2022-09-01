const add = function (a, b) {
  return a + b;
};

const calculateHyp = function (a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

module.exports = { add, calculateHyp };
