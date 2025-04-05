import React from 'react'
import Image from 'next/image'


function AppHeader() {
  return (
    <div>
        <Image src ={'/logo.svg'} alt='logo'
        width={165}
        height={200}
        />
    </div>
  )
}

export default AppHeader