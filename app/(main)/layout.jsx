import React from 'react'
import AppHeader from './_components/AppHeader';

function dashboardLayout ({children}) {
  return (
    <div>
      <AppHeader/>
      {children}</div>
  )
}

export default dashboardLayout