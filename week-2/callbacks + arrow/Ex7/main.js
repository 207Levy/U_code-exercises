const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);

function make() {
  explode(shineLight, makeSound, "BOOM");
}

const run = (name) => {
  console.log("Run, " + name + ", run!");
};
const yell = function (action) {
  let env = "Forest";
  action(env);
};
run(yell);

const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };
  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};
