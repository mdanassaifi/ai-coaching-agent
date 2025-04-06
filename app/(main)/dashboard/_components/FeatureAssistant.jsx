"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@stackframe/stack'
import React from 'react'

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
    </div>
  )
}

export default FeatureAssistant