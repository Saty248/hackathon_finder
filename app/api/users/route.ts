import UserModel from "@/utils/models/User.model";



import dbConnect from '@/utils/dbconnect';
import { NextRequest,NextResponse } from "next/server";
import Email from 'next-auth/providers/email';
import TeamModel from "@/utils/models/Team.model";
import { useSearchParams  } from "next/navigation";

export async function GET(req:NextRequest,res:NextResponse){
  const id = req.nextUrl.searchParams.get("id");
  console.log(id)
await dbConnect()
let users=UserModel;
    let u1=await users.findById(id);
    console.log(u1.first_name);
return NextResponse.json(u1.first_name)
}


export async function  PUT(
    req: NextRequest,
    res: NextResponse
  ) {
   try{let address=await req.json();
    console.log(address) 
       await dbConnect()
        
    let users=UserModel;
    let u1=await users.findOne({address:address})
    console.log(u1.team)   
           
    return NextResponse.json(u1._id)          
}catch(e){
            console.log(e)
          }
          
  }

  

  export async function  POST(
    req: NextRequest,
    res: NextResponse
  ) {
    let id=await req.json();
    console.log(id) 
      await dbConnect()
        
    let users=UserModel;
    let u1=await users.findById(id)
    console.log(u1)  
           return NextResponse.json( u1.name)
          
  } 