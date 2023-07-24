import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { create_team } from '../components/actions'
import dbConnect from "../../utils/dbconnect";
import UserModel from "../../utils/models/User.model";
import TeamModel from '@/utils/models/Team.model';
import TeamReq from '../components/TeamReq';


export default async function page() {
    const session=await getServerSession(authOptions)
console.log(session)
     // @ts-ignore 
     let address=session?.user?.address 
if(!session){
    return (
        <div>not authenticated</div>
    )
    
}else{
try {
  await dbConnect();
    const users = UserModel;
      // for retrieving todos list
      const allusers = await users.findOne({address:address})
      //const allusers = await users.find({});
      console.log("from yourTeam server",allusers)
      if(!allusers){
        return(<div>fill up the details</div>)
      }
      let teamId=allusers.team;
      console.log(teamId)
      if(teamId!='null'){
        const teams=TeamModel;
      const hasTeam= await teams.findOne({_id:teamId})
      console.log("hasTeam=",hasTeam)
         if(hasTeam){
          console.log("hasteam=",hasTeam)
          const teamreq=hasTeam.req;
          console.log(teamreq)
          const map1=await teamreq.map(async(item:object)=>{
            console.log(hasTeam._id)
           
        return <TeamReq reqAddress={JSON.stringify(item)} teamId={JSON.stringify(hasTeam._id)}/>
          })
          return(<>{map1}</>)
        }
      }
      

     

} catch (error) {
    console.log("ypurTeam",error)
}

}


 
async function handleForm(data:FormData){
    'use server'
    let name=data.get('name')

    console.log(name)

    await dbConnect();
       
        const users = UserModel;
      // for retrieving todos list
      const allusers = await users.find({address:address})
      //console.log(allusers)
 // @ts-ignore 
      let userId=allusers[0]?._id
      console.log(userId)
      //const allusers = await users.find({});
      const p1=await users.findById(userId)
      console.log("p1=",p1._id);
  let team:team={
    name:name,
    leader:userId,
    description:data.get('description'),
    name2:data.get('name2')
   
  }
  
    const response=await create_team(team)
console.log(response);

}


  return (
    <>
    <form action={handleForm}>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">team name</label>
        <input type="text" id="name" name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
        <input type="text" id="description" name='description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
      </div>
      <div className="mb-6">
        <label htmlFor="name2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">hackathon Name</label>
        <input type="text" id="name2" name='name2' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
      </div>
      
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </>
  )
}
