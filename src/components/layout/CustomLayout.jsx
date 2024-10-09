import React from 'react'
import ProfileNavbar from "./ProfileNavbar"
function CustomLayout({children}) {
  return (
    <div>
      <ProfileNavbar/>
      <div
      style={{
        minHeight:"100vh"
      }}
      >
        {children}

      </div>
    </div>
  )
}

export default CustomLayout