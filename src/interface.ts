let legal : boolean = false

interface User {
    firstName : string,
    lastName : string,
    age : number
}

function isLegal(user : User):boolean {
    if(user.age >= 18){
        legal = true
        return legal
    }

    return legal
};

console.log(isLegal({
    firstName : "unais",
    lastName : "k",
    age : 26
}));



// 2 : IMPLEMENTING INTERFACES
//  Interface has another special property . You can implement interfaces as class

//eg:

interface Person {
    name : string,
    age : number,
    greet(phrase : string) : void
}


class Employee implements Person {
    name : string;
    age : number;

    constructor(n: string,a : number){
        this.name = n;
        this.age = a
    }

    greet(phrase : string){
        console.log(` ${phrase} ${this.name}`);
        
    }
}

const e = new Employee("unais",26);

e.greet("hi my name is");

console.log(e.name,e.age);





