//------------------------------------------------------- RECORDS AND MAP -------------------------------------------------------------



const user : Username =  {
    'unais@5676' : {
        id : 'unais@5676',
        username : 'unaiz'
    },
    'jinas@5676' : {
        id : 'jinas@5676',
        username : 'jinas'
    }
}

// what will the type of this complex object
type Usernames = {
    id : string,
    username : string
}
type Username = {
    [key : string] : Usernames
}


// ---------------------------------------------------------------------- RECORD ---------------------------------------------------------
// Record lets give you a cleaner type to object


type UserNamess = Record<string, {name : string, age : number}>

const people : UserNamess = {
    'unais5676' : {
        name : 'unais',
        age : 26
    }
}


type UserName = Record<string, number>;

const peoples : UserName = {
    "unais5676" : 56,
    "jinas5676" : 89
}

// Record is a Typescript thing not javascript thing


// -----------------------------------------------------------------------MAP -----------------------------------------------------------

// Map is a javascript thing

type Usersss = {
    name : string,
    age : number,
    email : string
}

const peopless = new Map<string, Usersss>();

peopless.set('unais' , {name : 'unais', age : 26, email : "unais@gmailcom"});
peopless.set('jinas' , {name : 'jinas', age : 6, email : "jinas@gmailcom"});

const u = peopless.get('unais');

console.log(u);
