import dbConnect from "@/utils/dbconnect";
import TeamModel from "@/utils/models/Team.model";
import UserModel from "@/utils/models/User.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest,res:NextResponse){
    let {reqAddress,teamId}=await req.json()
    
    try {
       for(let i=0;i<2;i++){
  reqAddress=reqAddress.slice(1,-1)
  //
  
  }
  teamId=teamId.slice(1,-1) 
  
      console.log("reqAddress=",reqAddress)
      console.log("teamId=",teamId)
  
  
       await dbConnect();
      const teams=TeamModel;
      const myTeam=await teams.findOne({_id:teamId});
      const arr1=myTeam.req;
      console.log(arr1)
      const users = UserModel;
   
    const u1 = await users.findById(reqAddress)
      console.log("arr1=",arr1)
      const i=arr1.indexOf(u1._id);
      console.log("index=",i)
      const temp=arr1[i];
      
      arr1[i]=arr1[arr1.length -1];
      arr1[arr1.length -1]=temp;
      arr1.pop();
      console.log("arr1=",arr1)
      myTeam.req=arr1;
      await myTeam.save(); 
      console.log("post arr1=",arr1)
  } catch (error) {
      console.log("teamReq error",error)
  }

  return NextResponse.json( {status:"ok",message:"deleted"})
  }
 
  export async function PUT(req:NextRequest,res:NextResponse){
    let {reqAddress,teamId}=await req.json()
    
    try {
       for(let i=0;i<2;i++){
  reqAddress=reqAddress.slice(1,-1)
  //
  
  }
  teamId=teamId.slice(1,-1) 
  
      console.log("reqAddress=",reqAddress)
      console.log("teamId=",teamId)
  
  
       await dbConnect();
      const teams=TeamModel;
      const myTeam=await teams.findOne({_id:teamId});
      const arr1=myTeam.req;
      console.log(arr1)
      const users = UserModel;
   
    const u1 = await users.findById(reqAddress)
    u1.team=teamId
    await u1.save();
   let ap1=myTeam.players;
ap1.push(u1._id);

myTeam.players=ap1;
await myTeam.save();

      console.log("arr1=",arr1)
      const i=arr1.indexOf(u1._id);
      console.log("index=",i)
      const temp=arr1[i];
      
      arr1[i]=arr1[arr1.length -1];
      arr1[arr1.length -1]=temp;
      arr1.pop();
      console.log("arr1=",arr1)
      myTeam.req=arr1;
      await myTeam.save(); 
      console.log("post arr1=",arr1)
  } catch (error) {
      console.log("teamReq error",error)
  }

  return NextResponse.json( {status:"ok",message:"deleted"})
  }