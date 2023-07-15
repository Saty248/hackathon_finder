"use server"

import { Module } from "module";
import dbConnect from "../../utils/dbconnect";
import UserModel from "../../utils/models/User.model";
import TeamModel from "../../utils/models/Team.model";
export const check_submit_user=async(data:userdetail)=>{
    try{
       await dbConnect();
       
        const users = UserModel;
      // for retrieving todos list
      const allusers = await users.find({address:data.address})
      //const allusers = await users.find({});
      console.log("from route  server",allusers)
if(!allusers){
  await users.create(data);
    
  return {status:"ok",message:"sent succ"}
}else{
  console.log("duplicate",allusers)
}
     
    }catch(e){
      console.log(e);
      return {status:"ERROR", message:"server eror"}
    }
  }

  export const create_team=async (data:team)=>{
      try {
        await dbConnect();
        const teams=TeamModel;

        let teamEntry={...data,players:[],req:[]}
        console.log(data)
        console.log(teamEntry);
        await teams.create(teamEntry);
        return {status:"ok",message:"sent succ"}

        
      } catch (error) {
        console.log(error);
      return {status:"ERROR", message:"server eror"}
      }
  }


 