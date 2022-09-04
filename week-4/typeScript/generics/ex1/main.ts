type Type = string | string[] | number | number[];
type Type2 = string | number;


function sum<Type>(input:Type): number{
    let sum: number = 0; 
    if(Array.isArray(input)){
       input.forEach((i) => sum += numeralValueOf(i))
    }
    else{
        if(typeof input === 'string'){
            sum = numeralValueOf(input)
        }
        else if(typeof input=== 'number'){
            sum = numeralValueOf(input)
        }
        else{
            sum = 0
        }

    }
    return sum
}


function numeralValueOf<Type2>(input: Type2): number{
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