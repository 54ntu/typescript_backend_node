import mongoose, { mongo } from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String
    },
    description:{type:String,required:true},

    file:{
        type:String

    }
},{timestamps:true})



const Note = mongoose.model("Note",noteSchema)
export default Note