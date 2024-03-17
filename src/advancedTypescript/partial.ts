//--------------------------------------------PARTIAL----------------------------------------------------------

//Partial makes all properties of a type optional , creating a type with the same properties, but each marked as optional


// specificaly when you want to update

interface Users {
    id : string
    name : string,
    email : string,
    age : number,
    password : string
}

type updatedUsers = Pick<User, 'name' | 'email' | 'age'>
type updatePropsOptional = Partial<updatedUsers> // this makes everything optional

function updateUsers(updatedProps : updatePropsOptional){
    // hit the database to update user
}