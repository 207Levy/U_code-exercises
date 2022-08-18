people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += "is " + ageRange(person.age);
  summary += capitalizeWords(person.profession);
  summary += "From " + concatCityCountry(person.city, person.country) + ". ";
  summary += catchphraseStr(person);
  return summary;
};

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
  capitalizedStr += str.slice(1); //add the rest of str normallyreturn capitalizedStr
  return capitalizedStr + " ";
};

const concatCityCountry = function (city, country) {
  return city.concat(", ", country);
};

const ageRange = function (age) {
  let res = "";
  if (age < 21) {
    res += "Underage.";
  } else if (age > 55) {
    res += "55+.";
  } else {
    res += age.toString();
    res += " years old. ";
  }
  return res;
};

const capitalizeWords = function (profession) {
  const words = profession.split(" ");
  let res = "";
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    res += words[i] + " ";
  }
  return res;
};

const catchphraseStr = function (person) {
  res = "";
  res += capitalize(person.name);
  res += 'loves to say "';
  res += capitalize(person.catchphrase) + ".";
  return res;
};

for (let person of people_info) {
  console.log(getSummary(person));
}

const cleanString = function (str, delimeters) {
  return str.replace("/[" + delimeters.join() + " ]+/", "").toLowerCase();
};

const countUniqueWords = function (str, specialCh) {
  let cleanStory = cleanString(str, specialCh);
  let res = {};
  for (ch of cleanStory.split(" ")) {
    if (res[ch] == undefined) {
      res[ch] = 1;
    } else {
      res[ch] += 1;
    }
  }

  return res;
};

const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = countUniqueWords(story, specialChars);

console.log(wordCounts);
