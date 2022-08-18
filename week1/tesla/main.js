let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

let ans
if(boughtTesla)
{
    if(isUSCitizen){
        if(currentYear - yearOfTeslaPurchase >=4){
            console.log("would you like an upgrade?")
        }
    }
    else{
        console.log("Would you like to move to the US?")
    }
}
else{
    console.log("are you interested in buying one?")
}



let numbers = [1,2,3,4,5,6,7,8,9,10]

let res = numbers.splice(1,2)
numbers[3] = 1
numbers.splice(4,4)
numbers.splice(0,0,0)
console.log(numbers)
