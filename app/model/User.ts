import { match } from "assert";
import mongoose,{Schema,Document}from"moongoose";
import { unique } from "next/dist/build/utils";


 export interface Message extends Document{
    content:String;
    createdAt:Date
}

const MessageSchema:Schema<Message>=new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now
    }
})
export interface user extends Document{
    Username:string,
    email:string,
    password:string,
    isVerified:boolean,
    isAcceptingMessage:boolean
    message:Message[]
}
const UserSchema:Schema<Message>=new Schema({
    Username:{
        type:String,
        required:true,
        trim:true,
         unique:true
    },
    email:{
        type:String,
        required:[true, "email is required"],
        unique:true,
        match:[,"please use a valid email address"]

    },
    password:{
        type:String,
        required:[true, "password is required"]

    },
    isVerified:{
        type:Date,
        default:false,
    } , 
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },
    messages:[MessageSchema]
})

const UserModel=(mongoose.models.user as mongoose.model<user>)||(mongoose.model('User',UserSchema))
export default UserModel