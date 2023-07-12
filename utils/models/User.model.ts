
import mongoose from "mongoose";
import { models, model, Schema } from 'mongoose';
const userSchema:Schema=new mongoose.Schema({
email:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
first_name:{
    type:String,
    required:true
},
last_name:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
team:{
    type:String,
    required:true
}}
);


 const  UserModel =models.User || model('User',userSchema)

 export default UserModel
/* export class User{

    @prop({ default: () => nanoid(9) })
    _id: string;
  
    @prop()
    email: string;
  
    @prop()
    address: string;
  
    @prop()
    first_name: string;
  
    @prop()
    last_name: string;

    @prop()
    phone: string;

    @prop()
    company: string;

    @prop()
    team: string;
  
  
} */