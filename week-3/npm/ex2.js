import { faker } from "@faker-js/faker";
const { faker } = require("@faker-js/faker");
console.log(faker.datatype.uuid());

class Person {
  constructor(name, img, Cname) {
    this.name = name;
    this.img = img;
    this.Companyname = Cname;
  }

  toString() {
    return `name: ${this.name} \nimg: ${this.img} \nCompany: ${this.Companyname}`;
  }
}

const makeHuman = function (num) {
  let users = [];
  for (let i = 0; i < num; i++) {
    let name = faker.name.fullName();
    let img = faker.image.avatar();
    let Cname = faker.company.name();
    users.push(new Person(name, img, Cname));
  }

  users.forEach((a) => console.log(a.toString()));
};

makeHuman(3);
