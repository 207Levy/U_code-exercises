


class Numbers<Type>{
    array: Type[];
    constructor(arr:Type[]){
         this.array = arr;
    }

    addNumber(number: Type): void{
        this.array?.push(number);
    }
    
    sum(): number{
        let sum: number = 0; 
       this.array.forEach((i) => sum += this.numeralValueOf(i))
        
        return sum
    }


    numeralValueOf<Type2>(input: Type2): number{
        if(typeof input ==='string'){
            if(!isNaN(parseInt(input))){
                let x:number = parseInt(input);
                return x;
            }
            return 0;
        }
        else if(typeof input ==='number'){
            return input;
        }
        else{
            return 0
        }
    }
}

const numbers1: Numbers<string> = new Numbers<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Numbers<number> = new Numbers<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);