//  ---------------------------------------------ENUMS(Enumeration)-------------------------------------------------------------
// Enums in Typescript are features that allows you to define a set of names constants
// the concept of behind an enumeratione is to create a human readable way to represent a set of constant values, which might otherwise be represented as number or string

function doSomething(keypressed : Directions){
    //do something
    console.log(keypressed);
    if(keypressed === Directions.up){

    }
}

enum Directions {
    up,
    down,
    left,
    right
}

doSomething(Directions.down)


//--------------------------------------------------------------- Common usecase in express using ENUM -------------------------------------------------


import express, { Request, Response } from 'express';;

const app = express();

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}


app.get('/',(req : Request,res : Response) =>{
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound).json({})
    }
    res.status(ResponseStatus.Success).json({})
})