import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Nav() {
    const location=useLocation();
  return (
    <div>
<div className=' w-[20rem] h-[100vh] font-semibold'>
    <div className="flex flex-col py-2 items-center px-2">
      <div className='text-3xl mb-8' >
      Inventory Management
      </div>
      <div className="flex flex-col flex-grow items-center gap-2">
        <NavLink to="/" className={`flex items-center w-[10rem] px-2 py-2 text-xl text-center rounded-lg  ${
              location.pathname === '/' ? 'text-[white] bg-[#00CED1] ' : ''
            }`}>Items</NavLink>
        <NavLink to="/sales" className={`flex items-center w-[10rem] px-2 py-2 text-xl text-center rounded-lg  ${
              location.pathname === '/sales' ? 'text-[white] bg-[#00CED1] ' : ''
            }`}>Sales</NavLink>
        <NavLink to="/reports" className={`flex items-center w-[10rem]  px-2 py-2 text-xl rounded-lg text-center ${
              location.pathname === '/reports' ? 'text-[white] bg-[#00CED1] ' : ''
            }`}>Reports</NavLink>
            <NavLink to="/links" className={`flex items-center w-[10rem] px-2 py-2 text-xl text-center rounded-lg  ${
              location.pathname === '/links' ? 'text-[white] bg-[#00CED1] ' : ''
            }`}>Repo Links</NavLink>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Nav