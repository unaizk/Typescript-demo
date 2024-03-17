//--------------------------------------------------READ ONLY---------------------------------------------------------------

// if i created ia array or object i can change the value inside an array or object typescript dont complaint
// if i try to change a value it will complaint but i try to change inside value of array or object typescript dont complaint

/*eg*/  const arr = [1,2,3,4];
         arr[0] = 5 // typescript not complaining

        const obj = {
            name : "unais",
            age : 89,
        };

        obj.name = "jinas" // typescript not complaining

// By using readonly we can restrict that

/*eg*/  
type Values = {
   readonly name : string,
   readonly age : number
};

const obj1 : Values = {
    name : "ynausi",
    age : 78
}

//obj1.name = "jinas" // now typescript is complaining it restricted 