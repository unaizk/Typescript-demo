//------------------------------GENERICS----------------------------------------

//Generics are a language independent concept


// 1 : Problem Statement

// let say you have a function that needs to return the first element of an array. Array type can be either string or integer

// solution : 

            type Input = number | string;

            function firstElement(arr: Input[]){
                return arr[0]
            }

            let value = firstElement(["unais", "Jinas"]);
            // value.toLowerCase() // This will not support because when we do like this Typescript is'nt able to infer the right type of the return type

// --------------------------------------------------------------------Problem for this solution--------------------------------------------------- 
//1: Typescript isn't able to infer the right type of the return type,
//2 : User can send different types of values in input without any type error

    /*eg : */ type Inputs = number | string;

    function firstElements(arr: Input[]){
        return arr[0]
    }

    let values = firstElements(["unais", 1,2,3]);

    // This is wrong but typescript is not complaining

    // we can solve it like this
    type Inputss = number | string;

    function firstElementss(arr: number[] | string[]){
        return arr[0]
    }

    let valuess = firstElementss([ 1,2,3]);

    // but we are still facing 1st issue


    //------------------------------------------------------------ SOLUTION - GENERICS ------------------------------------------------------------

    //generics enables you to create a component that work with any data type while still providing compile-time type safety


    function identity<T>(arg : T) : T{
        return arg
    };

    let value1 = identity<string>("Unais"); // this return type is string
    let value2 = identity<number>(10) // this returnctype is number
     // Now i can do 
        value1.toLowerCase();


// Now lets solve original problem with generics



function firstElementReturn<T>(arr: T[]): T{
    return arr[0]
}

let output = firstElementReturn(["unais", "Jinas"]); // Now this return type is string
let output1 = firstElementReturn([1, 2]); // Now this return type is number

// ----------------------------------------------------------Another example-------------------------------------------------------------------------
interface Userss {
    name : string,
    age : number
}

function firstElementReturns<T>(arr: T[]): T{
    return arr[1]
}
let output2 = firstElementReturns<Userss>([{name:"Unais", age : 5},{name:"jinas", age : 8}]); // Now this return type is string

console.log(output2.name);

let output3 = firstElementReturns([1, 2]); // Now this return type is number