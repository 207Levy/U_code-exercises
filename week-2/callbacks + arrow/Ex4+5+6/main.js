const addThree = (a, b, c) => a + b + c;

alert(addThree(1, 2, 3));

const capitalize = (str) =>
  console.log(str.charAt(0).toUpperCase() + str.toLowerCase().slice(1));
capitalize("bOb"); // returns Bob
capitalize("TAYLOR"); // returns Taylor
capitalize("feliSHIA"); // returns Felishia

const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) =>
  console.log("It's " + determineWeather(temp));
commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"



const explode = (lightFunc, soundFunc, sound) => {
  lightFunc()
  soundFunc(sound)
}
    
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
const makeSound = sound => alert(sound)
    
explode(shineLight, makeSound, "BOOM")


