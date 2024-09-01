import React from 'react'
import logo from '../assets/mlogo.png'
import { NavLink } from 'react-router-dom'
import logo2 from '../assets/logo2.svg'
const Header = () => {
  return (
    <div className='bg-zinc-950 fixed z-[999] w-full px-14 py-5 flex justify-between items-center'>
      <div id="logo">
        <img src={logo2} className='invert' alt="" />
      </div>
      <div id="links" className='flex items-center capitalize gap-7'>
        {["Services","Our work", "About us","Insights","Contact Us"].map((item,index) => <NavLink className={`text-md  text-white ${index === 4 && 'ml-32'} font-light `} key={index} to="/">{item}</NavLink>)}
      </div>
    </div>
  )
}

export default Header
