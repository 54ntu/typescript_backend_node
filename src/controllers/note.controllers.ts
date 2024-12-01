import { Request, Response } from "express";
import Note from "../models/note.models";

const createNote=async (req:Request,res:Response)=>{
    try {
        const filename = req.file?.filename;
        const {title,subtitle,description}= req.body
    
        if(!title || !subtitle || !description){
            res.status(400).json({
                message:"all fields are required"
            })
        }
    
       const response= await Note.create({title,description,subtitle,file:filename})
        if(response){
            return res.status(200).json({message:"note added succcessfully....!!!",data:response})
    
    
        }else{
            return res.status(500).json({
                message:"something went wrong...1!!"
            })
        }
    
    } catch (error) {
        return res.status(500).json({
            message:"error while creating notes....."
        })
    }



}



export default createNote;