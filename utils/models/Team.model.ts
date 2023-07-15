import mongoose from "mongoose";
import { models, model, Schema } from 'mongoose';
const TeamSchema:Schema=new Schema({
name:String,
description:String,
name2:String,
leader:Schema.Types.ObjectId,
players:[Schema.Types.ObjectId],
req:[[Schema.Types.ObjectId]]

})

const TeamModel=models.Team || model('Team',TeamSchema)
export default TeamModel