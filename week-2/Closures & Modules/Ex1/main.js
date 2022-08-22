const StringFormatter = function () {
  const capitalizeFirst = (str) =>
    str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  const skewerCase = (str) => str.replace(/\s/g, "-");
  return {
    capitalizeFirst,
    skewerCase,
  };
};

const formatter = StringFormatter();

console.log(
  formatter.capitalizeFirst("dorothy"),
  formatter.skewerCase("blue box")
); //should print blue-box
