import React from 'react'
import { useState } from 'react'
import close from "../images/close2.png"
import menu from "../images/menu.png"
import contact from "../images/contact.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [showMenu , setShowMenu] = useState(false)

  return (
    <div className=''>
    <div className='h-24 z-50 px-6 flex justify-center items-center'>
        <div className='flex items-center'>
            <button onClick={() => setShowMenu(true)}>
                <img src={menu} alt="" className='w-6 h-6 md:w-8 md:h-8' />
            </button>
            {showMenu && (
        <div className="fixed inset-0 w-full h-full z-50 text-pink-900">
          <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6 font-mono">
            <button onClick={() => setShowMenu(false)} className="absolute top-0 left-0 mt-8 ml-6">
              <img src={close} alt="Close" className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <NavLink className="text-[#2C3E50]" to="/">Home</NavLink>
            <NavLink className="text-[#2C3E50]" to="/about">About Us</NavLink>
            <NavLink className="text-[#2C3E50]" to="/projects">Our Projects</NavLink>
            <NavLink className="text-[#2c3e50]" to="/contact">Contact</NavLink>
          </div>
          <div className="absolute inset-0 w-full h-full bg-[#BFD8E1]"></div>
        </div>
      )}
        </div> 

            <div className='flex items-center justify-center w-full'>
                <NavLink to="/">
                <h1 className='text-white md:text-2xl text-lg uppercase font-semibold font-serif'>Candid Novia</h1>
                </NavLink>
            </div>

            <div className='flex items-center justify-end'>
                <NavLink to="/contact">
                    <img src={contact} alt="" className='w-6 h-6 md:w-8 md:h-8' />
                </NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar