import { getServerSession } from "next-auth/next"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../api/auth/[...nextauth]/route"
import React from 'react'
import { getToken } from "next-auth/jwt"
import UserForm from "../components/UserForm"


const secret = process.env.NEXTAUTH_SECRET
export default async function  page(req:NextRequest,res:NextResponse) {
const session=await getServerSession(authOptions)
console.log(session)
let thisSession:Object=Object(session)
if(!session){

    return (
        <div>not authenticated</div>
    )

    
}


  return (
    <div><UserForm /></div>
  )
}
