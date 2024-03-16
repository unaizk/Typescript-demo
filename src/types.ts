// WHAT ARE TYPES
// very similar to interfaces , types let you aggregate data together

// DIFFERENCE BETWEEN INTERFACE AND TYPES
//  - Types not used to implement calsses Only Interface used to implement classes.



// 1 :-------------------------------- UNIONS-----------------------------------
// let say you want to print the id of user  which can be number or string
// Interface cant do UNIONS
type StringOrNumber = string | number

function printId(id : StringOrNumber){
    console.log(`${id}`);
    
}

printId(5);
printId("5")

// 2 : ---------------------------------------INTERSECTION --------------------------------------
// What if you want to create a type that has every property of multiple types
// You cannot do this using Interface

type Employeee = {
    name : string,
    startDate : Date
}

interface Manager {
    name : string,
    department : string
}

type Techlead = Employeee & Manager

const teamlead : Techlead ={
    name : "unais",
    startDate : new Date(),
    department : "It"
}