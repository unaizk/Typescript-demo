//---------------------------------------------PICK-------------------------------------------------------

//pick allows to create a new type by selecting a set of properties (keys) from an existing type (Type)

// Imagine you have a User model with several properties , but for user profile display , you only need a subset of these properties.

interface User {
    name : string,
    email : string,
    age : number,
    password : string
}

type updatedUser = Pick<User, 'name' | 'email' | 'age'>


function updateUser(updatedProps : updatedUser){
    // hit the database to update user
}