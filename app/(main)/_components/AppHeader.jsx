import React from 'react'
import Image from 'next/image'
import { UserButton } from '@stackframe/stack'


function AppHeader() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center' >
        <Image src ={'/logo.svg'} alt='logo'
        width={160}
        height={200}
        />

            <UserButton/>
        
    </div>
  )
}

export default AppHeader