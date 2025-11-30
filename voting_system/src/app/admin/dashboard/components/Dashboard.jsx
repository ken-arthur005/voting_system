import React from 'react'
import { FaPlus } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const DashboardMain = () => {
  return (
    <div className='rounded-2xl border-2 bg-gray-200 mr-4 mb-4 mt-2 grid grid-rows-[10%_30%_30%_30%] grid-cols-3'>
        <div className='col-span-3 p-4 flex justify-between'>
            <div className=''>
                <h1 className='font-extrabold text-3xl mb-2'>Dashboard</h1>
                <h3 className='  '>Plan and execute tasks with ease</h3>
            </div>

            <button className='rounded-full bg-linear-to-r from-[#6441a5] to-[#2a0845] p-2 flex justify items-center'>
                <FaPlus color='white' className='ml-2'/>
                <h2 className='text-white mx-auto px-3' >add new user</h2>
                
            </button>
            
        </div>
        <div className='my-auto ml-3 '>
            <Card className={`bg-linear-to-r from-[#6441a5] to-[#2a0845] text-white w-[50%]`}>
                <CardHeader>
                    <CardTitle >Total Number of voters </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='text-5xl font-extrabold text-shadow-2xl'>500</p>
                </CardContent>
                
            </Card>
        </div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
    
    </div>
  )
}

export default DashboardMain