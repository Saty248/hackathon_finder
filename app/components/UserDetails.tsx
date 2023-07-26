import React from 'react'

type userProp={
    name:string,email:string
}
export default function UserDetails({name,email}:userProp) {
   

  return (
    <>
    
<div className='flex items-center justify-center'>    
<div  className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{email}</p>
</div>
</div>


    
    
    </>
  )
}
