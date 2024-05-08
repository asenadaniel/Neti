import React, { useState } from 'react'
import profile_img from '../../assets/profile_img.png'
import logo from '../../assets/logo.png'
import { ArrowDropDown, Notifications, Person, Search } from '@mui/icons-material'
import { logOut } from '../../firebase'


function Navbar() {
  const [open, setOpen] = useState(true)
  return (
    <div className=' w-full py-5 md:px-[8%] px-[4%] flex justify-between  text-[14px]  inset-0 bg-gradient-to-b from-transparent to-black z-10'>
      <div className=' flex items-center gap-14'>
        <h1 className=' text-xl lg:text-4xl text-red-600 font-bold'>
          NetTrail
        </h1>
        <ul className=' lg:flex gap-5 hidden '>
          <li className=' cursor-pointer'>Home</li>
          <li className=' cursor-pointer'>Tv Shows</li>
          <li className=' cursor-pointer'>Movies</li>
          <li className=' cursor-pointer'>News & Popular</li>
          <li className=' cursor-pointer'>My List</li>
        </ul>
      </div>

      <div className=' flex gap-5 items-center'>
        <Search className=' cursor-pointer' />
        <p className=' cursor-pointer'>Children</p>
        <Notifications className=' cursor-pointer' />

        <div className=' flex items-center gap-3 relative'>
          <img src={profile_img} alt="" className=' cursor-pointer' />
          <ArrowDropDown className=' cursor-pointer'
            onClick={() => setOpen(!open)}
          />
          {!open && <div className=' absolute top-[100%] right-0 w-max bg-gray-900 py-4 px-6 rounded z-10 underline'>
            <p className=' text-[13px] cursor-pointer' onClick={() => logOut()}>Sign Out Of NetTrail</p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
