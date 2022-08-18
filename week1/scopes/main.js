
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

//console.log("Damn, you see this gal? She ran " + distance + " miles") 






const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like" + food)
    }
  }

person.speak("cheese toast")

const isEven = function(number){
    return number%2===0 ? true:false
}

console.log(isEven(10))

const searchForOdd = function(arr){
    for (const iterator of arr) {
        if(!isEven(iterator)){
            console.log(iterator)
        }
    }
}

const checkExists = function(arr, number){
    for (const iterator of arr) {
        if(iterator===number){
            return true
        }
    }
    return false
}

searchForOdd([1,2,3,4,5,6,7,8,9,10])
console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))



const calculator = {
    add: function(n1, n2){
        return n1+n2
    },
    subtract: function(n1,n2){
        return n1-n2
    }
}


const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) 