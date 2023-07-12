import UserModel from "@/utils/models/User.model";



import dbConnect from '@/utils/dbconnect';
import { NextRequest,NextResponse } from "next/server";

export async function  GET(
    req: NextRequest,
    res: NextResponse
  ) {

       await dbConnect();
        const users = UserModel;
   const allusers = await users.find({})
      
      return NextResponse.json({ allusers })
          
  }



  