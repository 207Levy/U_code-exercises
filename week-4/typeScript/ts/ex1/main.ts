const sum = function(arr: number[]): number {
    let sum : number = 0;
    arr.forEach((n)=> sum+=n);
    return sum; 
}

const isEven = function(num: number): boolean {
    let res : boolean = false;
    if(num % 2 ==0){
        res = true;
    }
    return res; 
}

const numArray1: number[] = [4,7,44,5,234];
const numArray2: number[] = [65,33,5,2532,32,6];
const numArray3: number[] = [54,6,656,4];

console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);
