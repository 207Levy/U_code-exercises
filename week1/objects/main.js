let p1 = {
    name:"Jill",
    age:27,
    city:"TLV",
}

let p2 = {
    name:"Robert",
    age:27,
    city:"TLV",
}

if(p1.age === p2.age)
{
    if(p1.city === p2.city){
        console.log(`${p1.name} wanted to date Robert`)
    }
    else{
        console.log(`${p1.name} wanted to date Robert, but couldn’t`)
    }
}



let library = {
    books: [{title: "HP", author: "J.K.R"}, {title: "SH", author: "??"}]
}

console.log(library);

let companies = ["Tesla", "Amazon", "Google", "Microsoft"];

for(let companyIndex in companies){
    console.log(companyIndex);
  }

for(let company of companies){
console.log(company);
}

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for(let indx in names){
    let obj = {
        name:names[indx],
        age:ages[indx]
    }
    people.push(obj);
}

console.log(people);

let car = {wheels: 4}; 
let x = [ {human: {name: 'Daena', age: 31} } ][0];
console.log(x.human);