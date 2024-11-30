import { Request, Response } from "express";
import Note from "../models/note.models";

const createNote= (req:Request,res:Response)=>{
    const file = req.file
    const {title,subtitle,description}= req.body

    if(!title || !subtitle || !description){
        res.status(400).json({
            message:"all fields are required"
        })
    }

    Note.create({title,description,subtitle,file})
}