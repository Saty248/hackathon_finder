

import React from 'react'
import { getServerSession } from "next-auth/next"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../api/auth/[...nextauth]/route"
import TeamsBlock from '../components/TeamsBlock'

export default async function page() {
  
    const session=await getServerSession(authOptions)
console.log(session)
 // @ts-ignore 
 let address=session?.user?.address 
if(!session){
    return (
        <div>not authenticated</div>
    )
}

const res =await fetch('http://localhost:3000/api/teams', { next: { revalidate: 10 } })
  let data=await res.json();
  
  let k=0;
  const map1=await data.map(async (item:teamApi)=>{
    console.log(item.leader)
let resget=await fetch(`http://localhost:3000/api/users?id=${item.leader}`)
let getdata=await resget.json()
console.log(getdata);
return <TeamsBlock name={item.name} leader={getdata} description={item.description} key={item._id} name2={item.name2} teamId={item._id}/>




  }) 
console.log("map1=",map1)
return (
    <>{map1}</>
  )
}
