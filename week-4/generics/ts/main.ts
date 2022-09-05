//Ex 1
function sum<Type>(num:Type):number{
    if(Array.isArray(num)){
        let sum : number = 0
        num.forEach(item => sum += getNumValue(item))
        return sum
    }else if(typeof num === "string"){
        return getNumValue(num)
    }else if(typeof num === "number"){
        return num
    }else{
        return 0
    }
}

function getNumValue(num: string|number):number{
    if(typeof num === "string"){
        const res: number = parseInt(num)
        return !isNaN(res)? res : 0
    }else{
        return num
    }
}

console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));


//Ex 2

class Ex2<Type>{
    numbers : Type[]

    constructor(numbers : Type[]){
        this.numbers = numbers
    }

    addNumber(num : Type): void{
        this.numbers.push(num)
    } 


    sum<Type>():number{
        if(Array.isArray(this.numbers)){
            let sum : number = 0
            this.numbers.forEach(item => sum += this.getNumValue(item))
            return sum
            }else{
                return 0
            }
        }

    getNumValue(num: Type):number{
        if(typeof num === "string"){
            const res: number = parseInt(num)
            return !isNaN(res)? res : 0
        }else{
            return num as number
        }
    }
}


const numbers1: Ex2<string> = new Ex2<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Ex2<number> = new Ex2<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);