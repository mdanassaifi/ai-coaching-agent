import React, { useState } from 'react'
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
import { Button } from '@/components/ui/button'
import { Ghost } from 'lucide-react'

  
function UserInputDialog({children, ExpertsList}) {
  
    const [selectedExpert,setSelectedExpert]=useState();


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
                <div className='grid grid-cols-3 md:grid-cols-5 gap-6 mt-3'>
                  {CoachingExpert.map((expert,index)=>(
                    <div key={index} onClick={()=> setSelectedExpert (expert.name)} >
                    
                    <Image src={expert.avatar} alt={expert.name}
                        width={100}
                        height={100}
                        className={`rounded-2xl h-[80px] w-[80px] object-cover
                        hover:scale-105 transition-all cursor-pointer p-1 border-primary
                        ${selectedExpert == expert.name && 'border-2'}
                         `}
                      />
                   
                    <h2 className='text-center'>{expert.name}</h2>
                    </div>
                  ))}

                </div>
                <div className='flex gap-5 justify-end'>
                  <Button variant={'ghost'}>Cancel</Button>
                  <Button> Next </Button>
                </div>
            </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default UserInputDialog