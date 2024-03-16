function maxValue(arr : number[]){
    let maxValue = 0;

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i]
        }
    }
    return maxValue
}




// Example 2

interface Users {
    name : string,
    lastName : string,
    age : number   
}

function findUser(users : Users[]){
    
let legal = false
    for(let i=0; i<users.length; i++){
        if(users[i].age> 18){
            legal = true;
            return legal
        }
    }
    return legal
    
}

let users = [{name : "unais",lastName : "k", age : 26},{name : "jinas",lastName : "k", age : 19}];

console.log(findUser(users));