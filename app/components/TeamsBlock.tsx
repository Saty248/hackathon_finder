'use client'


import { data } from 'autoprefixer';
import React, { MouseEvent, useEffect, useState } from 'react'
import { useAccount, useConnect } from 'wagmi';




export default function TeamsBlock({name,leader,description,key,name2,teamId}:teamProp) {
    const [status, setStatus1] = useState("")
    const{address}=useAccount();
  console.log(address)
    
    const [mounted,setMounted]=React.useState(false);
   
    const fetchInfo=async()=>{

        const res1=await fetch('http://localhost:3000/api/users',{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(address),
        })
        let data1=await res1.json();
console.log("res1=",data1)



const isJoined=await fetch('http://localhost:3000/api/teams/playerTeam',{
    method:"POST",
    headers: {
        "Content-Type": "application/json",
     },
     body: JSON.stringify({data1,teamId}),})

let dataJoined=await isJoined.json();
console.log("rest32=",dataJoined)

if(dataJoined.flag){
    setStatus1("joined")
    
}



       if(status!="joined"){ const rest=await fetch('http://localhost:3000/api/teams',{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({data1,teamId}),
        })
        let datat=await rest.json();
console.log("rest=",datat)
if(datat.flag){
    setStatus1("ok")
}}

    }

   
    React.useEffect(() =>{setMounted(true)
        fetchInfo()
        return () => {}
    } , []);
   
    //@ts-ignore
    //React.useEffect(() => fetchInfo(), [])
    if(!mounted) return <></>
 
    
    const handleClick=async(e:MouseEvent)=>{
        const res1=await fetch('http://localhost:3000/api/users',{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(address),
        })
        let data1=await res1.json();
console.log("res1=",data1)







        console.log("teamId=",teamId)
         const res2=await fetch('http://localhost:3000/api/teams',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({data1,teamId}),
        })
        let data2=await res2.json();
console.log("res2=",data2)
        setStatus1(data2.status)
         

    }
  return (
    <>
        
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{leader}</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    {status=="joined" && <button disabled className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg">
        already joined
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>}
    
    {status!="ok" && status!="joined" && <button  onClick={handleClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        request to join
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>}

    {status=="ok" && <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg">
        request sent successfully
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>}

</div>

    </>
  )
}
