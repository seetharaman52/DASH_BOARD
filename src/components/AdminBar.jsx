import React from 'react'
import AdminLogOut from './AdminLogout'
const AdminBar = (props) => {
    return (
        <div className='p-5 bg-slate-100 flex flex-row items-center'>
          <button className='flex flex-col items-center' onClick={() => props.setSideBarOpen(!props.sideBarOpen)}><span className="bg-transparent material-symbols-outlined hover:scale-110 transition-all duration-200">menu</span></button>
          <p className='ml-10 font-sans text-xl'>Dashboard</p>
          <button className='flex flex-col items-center ml-auto' onClick={() => props.setMoreOpen(!props.moreOpen)}><span className="material-symbols-outlined bg-transparent hover:scale-110 transition-all duration-200">more_vert</span></button>
          { props.moreOpen ? <AdminLogOut /> : null }
          <div className='flex flex-col ml-5 mr-5'>
            <button><span className="flex flex-col items-center p-2 material-symbols-outlined ml-auto">manage_accounts</span></button>
            <p>{localStorage.getItem('role')}</p>
          </div>
        </div>
    )
}

export default AdminBar