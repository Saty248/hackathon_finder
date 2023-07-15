import UserModel from "@/utils/models/User.model";



import dbConnect from '@/utils/dbconnect';
import { NextRequest,NextResponse } from "next/server";
import Email from 'next-auth/providers/email';
import TeamModel from "@/utils/models/Team.model";

export async function  GET(
    req: NextRequest,
    res: NextResponse
  ) {

       await dbConnect();
        const users = UserModel;
        const teams=TeamModel;
   const allusers = await teams.find({})
           return NextResponse.json( allusers)
          
  }

  export async function  POST(
     req: NextRequest,
     res: NextResponse
   ) {
     let {data1,teamId}=await req.json()
                console.log(data1)
                console.log(teamId)
               
        console.log(teamId)
        await dbConnect();
        
        
         const teams=TeamModel; 
   const t1 = await teams.findById(teamId) 

   const users = UserModel;
   
const allusers = await users.findById(data1)
console.log(allusers)

    t1.req=[...t1.req,allusers]
  await  t1.save()

  allusers.team=t1.name;
  await allusers.save();
   console.log("t1=",t1.req.length) 
             return NextResponse.json( {status:"ok",message:"sent succ"}) 
            
           
   }


   export async function  PUT(
     req: NextRequest,
     res: NextResponse
   ) {
     let {data1,teamId}=await req.json()
                console.log(data1)
                console.log(teamId)
               
        console.log(teamId)
        await dbConnect();
        
        
         const teams=TeamModel; 
   const t1 = await teams.findById(teamId) 

   const users = UserModel;
   
const allusers = await users.findById(data1)

let playerReq=t1.req;
console.log(playerReq)
console.log(allusers)
let flag;
for(let i=0;i<playerReq.length;i++){

     const userI=await users.findById(playerReq[i])

    flag=(userI.address==allusers.address?true:false)
}


//console.log("flag=",flag)

   
   
             return NextResponse.json({flag:flag}) 
            
           
   }