import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Textarea } from '@/components/ui/textarea'
import { CoachingExpert } from '@/services/options'
import Image from 'next/image'

  
function UserInputDialog({children, ExpertsList}) {
  return (
    <Dialog>
    <DialogTrigger>{children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{ExpertsList.name}</DialogTitle>
        <DialogDescription asChild>
            <div className='mt-3'>
              <h2 className='text-black'> Enter a topic to master your skills in {ExpertsList.name} </h2>
               <Textarea placeholder="Enter your topic here..." className='mt-2'/>
                
               <h2 className='text-black mt-5'> Enter a topic to master your skills in {ExpertsList.name} </h2>
                <div>
                  {CoachingExpert.map((expert,index)=>(
                    <Image key={index} src={expert.avatar} alt={expert.name}
                        width={100}
                        height={100}
                    />
                  ))}

                </div>
            </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default UserInputDialog