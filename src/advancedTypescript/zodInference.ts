// Zod is a runtime variable and typescript type will be compile time variable

// -----------------------------ZOD INFERENCE -----------------------------------------
import express from 'express'
import {z} from 'zod';

const app = express()

const runtimeSchema = z.string();

type compileTypeSchema = z.infer<typeof runtimeSchema>; // it will become string


// another example

const userProfileSchema = z.object({
    name : z.string().min(1),
    email : z.string().email(),
    age : z.number().min(18).optional()
});

type FinalUserSchema = z.infer<typeof userProfileSchema>

app.put('/user',(req,res) =>{
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody : FinalUserSchema = req.body
    if(!success){
        res.status(404).json({})
    };

    //update user here
})