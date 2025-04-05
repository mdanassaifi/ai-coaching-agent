import React from 'react'
import Image from 'next/image'
import { UserButton } from '@stackframe/stack'


function AppHeader() {
  return (
    <div>
        <Image src ={'/logo.svg'} alt='logo'
        width={165}
        height={200}
        />

            <UserButton/>
        
    </div>
  )
}

export default AppHeader