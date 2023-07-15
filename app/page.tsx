import Image from 'next/image'
import TeamsBlock from './components/TeamsBlock';
import dbConnect from '@/utils/dbconnect';
import TeamModel from "@/utils/models/Team.model";
export default async function  Home() {
 
return (
    <main className='min-h-screen bg-pink-300'>
    <h1 className="text-blue-800 font-bold ">news hackathon</h1>
    </main>
  )
}
