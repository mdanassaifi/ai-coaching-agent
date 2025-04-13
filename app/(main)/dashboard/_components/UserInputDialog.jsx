import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  
function UserInputDialog({children, ExpertsList}) {
  return (
    <Dialog>
    <DialogTrigger>{children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{ExpertsList.name}</DialogTitle>
        <DialogDescription>
            <div>
              <h2> Enter a topic to master your skills in {ExpertsList.name} </h2>
            </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
  )
}

export default UserInputDialog