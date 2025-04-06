"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@stackframe/stack'
import React from 'react'
import { ExpertsList } from './../../../../services/options';
import  Image  from 'next/image';

function FeatureAssistant() {
  const user = useUser();
  return (
    <div>
        <div className='flex justify-between items-center'>
           <div>
             <h2 className='font-medium text-gray-500'>My Workspace </h2>
             <h2 className='text-3xl font-bold'>Welcome Back, {user?.displayName} </h2>
      </div>
        <Button>Profile</Button>
     
       </div>
     <div>
       {ExpertsList.map ((option, index)=>(
         <div key={index} >
          <Image src={option.icon} alt={option.name} 
          width={150}
           height={150}
           className='h-[70px] w-[70px]'
           />
          </div>
       ))}
      </div>   
   </div>
  )
}

export default FeatureAssistant