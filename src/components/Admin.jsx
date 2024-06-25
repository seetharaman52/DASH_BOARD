import React from 'react'
import AdminBar from './AdminBar'
import { useState } from 'react'
const Admin = (props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  return (
    <div>
      <AdminBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} moreOpen={moreOpen} setMoreOpen={setMoreOpen}/>
    </div>
  )
}

export default Admin