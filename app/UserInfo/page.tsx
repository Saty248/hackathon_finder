import { getServerSession } from "next-auth/next"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../api/auth/[...nextauth]/route"
import React from 'react'
import { getToken } from "next-auth/jwt"
import UserForm from "../components/UserForm"
import dbConnect from "@/utils/dbconnect"
import UserModel from "@/utils/models/User.model"
import UserDetails from "../components/UserDetails"


const secret = process.env.NEXTAUTH_SECRET
export default async function  page() {
const session=await getServerSession(authOptions)
console.log(session)
 // @ts-ignore 
 let address=session?.user?.address 
if(!session){

    return (
        <div>not authenticated</div>
    )

    
}



  await dbConnect();
  const users=UserModel;

  const userExist=await users.findOne({address:address})

  if(userExist){
    console.log(userExist)
    let name:string=userExist.first_name;
    //name=JSON.stringify(name)
    let email:string=userExist.email;
    //email=JSON.stringify(email)
    console.log(typeof(name))
    return(<UserDetails name={name} email={email} />)
  }



  return (
    <div><UserForm /></div>
  )
}
