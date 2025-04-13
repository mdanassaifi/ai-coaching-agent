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
            </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default UserInputDialog