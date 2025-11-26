import React from 'react'
import { President } from './presidents'
import Image from 'next/image'
const PresidentVote = () => {
  return (
    <div className='min-h-[95vh] max-w-[90vw]'>
        <h1 className='text-center text-3xl'> President </h1>
        <h2 className='text-center text-2xl'>Vote for your prefered candidate</h2>
        
        <div className='flex justify-center gap-10 my-10'>
            {President.map((i)=>{
              const Name = i.name
              const picture = i.image
              return(
                <div key={i.id}>
                  <Image src={picture}  
                  width={200} 
                  height={200}
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                  />
                  <h2 className='text-2xl '>{Name}</h2>
                </div>
              )
            })}
        </div>
        
    </div>
  )
}

export default PresidentVote