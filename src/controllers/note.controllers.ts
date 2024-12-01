import { NextFunction, Request, Response } from "express";
import Note from "../models/note.models";
import createHttpError from "http-errors";

const createNote=async (req:Request,res:Response,next:NextFunction):Promise<void> =>{
    try {
        console.log(req.file)
        const imagename = req.file?.filename;
        console.log(imagename)
        
        const {title,subtitle,description}= req.body


        // console.log(filename, title)
    
        if(!title || !subtitle || !description){
            res.status(400).json({
                message:"all fields are required"
            })
        }
    
       const response= await Note.create({title,description,subtitle,file:imagename})
        if(response){
             res.status(200).json({message:"note added succcessfully....!!!",data:response})
    
    
        }else{
             res.status(500).json({
                message:"something went wrong...1!!"
            })
        }
    
    } catch (error) {
        console.log(error)
        return next(createHttpError(500,"error creating note.!"))
    }



}



export {createNote};