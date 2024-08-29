import React from 'react'
import ProfileNavbar from "./ProfileNavbar"
function CustomLayout({children}) {
  return (
    <div>
      <ProfileNavbar/>
        {children}
    </div>
  )
}

export default CustomLayout