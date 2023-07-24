import UserModel from "@/utils/models/User.model";



import dbConnect from '@/utils/dbconnect';
import { NextRequest,NextResponse } from "next/server";
import Email from 'next-auth/providers/email';
import TeamModel from "@/utils/models/Team.model";

export async function POST( req: NextRequest,
    res: NextResponse){

        let {data1,teamId}=await req.json()
        console.log(data1)
        console.log(teamId)
       
console.log(teamId)
await dbConnect();


 const teams=TeamModel; 
const t1 = await teams.findById(teamId) 

const users = UserModel;

const allusers = await users.findById(data1)
let flag;
if(teamId==allusers.team){
flag=true;

}else{
    flag=false;
}

console.log(teamId)

console.log(allusers)

console.log(flag)

return NextResponse.json({flag:flag}) 



}