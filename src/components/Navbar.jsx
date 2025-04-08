import React from 'react'
import { useState } from 'react'
import close from "../images/close.png"
import menu from "../images/menu.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [showMenu , setShowMenu] = useState(false)

  return (
    <div className=''>
    <div className='h-24 z-50 px-6 flex justify-center items-center'>
      
    <div className='flex  w-full'>
                <NavLink to="/">
                <h1 className='text-white md:text-2xl text-lg uppercase font-semibold font-serif'>Rolling Frames</h1>
                </NavLink>
            </div>

        <div className='flex items-center'>
            <button onClick={() => setShowMenu(true)}>
                <img src={menu} alt="" className='w-7 md:w-9' />
            </button>
            {showMenu && (
        <div className="fixed inset-0 w-full h-full z-50 text-pink-900">
          <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6 font-serif">
            <button onClick={() => setShowMenu(false)} className="absolute top-0 right-0 mt-8 mr-6">
              <img src={close} alt="Close" className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <NavLink className="text-[#805353]" to="/">Home</NavLink>
            <NavLink className="text-[#805353]" to="/about">About Us</NavLink>
            <NavLink className="text-[#805353]" to="/gallery">Wedding Gallery</NavLink>
            <NavLink className="text-[#805353]" to="/films">Wedding Films</NavLink>
            <NavLink className="text-[#805353]" to="/contact">Contact</NavLink>
          </div>
          <div className="absolute inset-0 w-full h-full bg-[#f6f1ee]"></div>
        </div>
      )}
        </div>  
        </div>
    </div>
  )
}

export default Navbar