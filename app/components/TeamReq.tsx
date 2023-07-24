"use client"
import dbConnect from '@/utils/dbconnect'
import TeamModel from '@/utils/models/Team.model';
import UserModel from '@/utils/models/User.model';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React from 'react'


export default  function TeamReq({reqAddress,teamId}:reqTeam) {
  const router = useRouter()
  const  handleAccept=async()=>{ 
  
    const response=await fetch('http://localhost:3000/api/teams/reqteam',{

    method:"PUT",
    headers:{ "Content-Type": "application/json"},
    body:JSON.stringify({reqAddress,teamId})
    })
    let data1=await response.json();
console.log("res1=",data1.message)
if(data1.status==='ok'){
  router.refresh()
}
    }


   const  handleDelete=async()=>{ 
  
    const response=await fetch('http://localhost:3000/api/teams/reqteam',{

    method:"POST",
    headers:{ "Content-Type": "application/json"},
    body:JSON.stringify({reqAddress,teamId})
    })
    let data1=await response.json();
console.log("res1=",data1.message)
    }
    

  return (
    <div>
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div className="flex flex-col items-center pb-10">
            
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
                <button onClick={handleAccept}className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">accept</button>
                <button onClick={handleDelete} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">delete</button>
            </div>
        </div>
    </div>
    </div>
  )
}
