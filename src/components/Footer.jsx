import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#5c4a4a] text-white font-semibold uppercase text-xs tracking-widest">
  <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
    
    <div>
      <div className="text-white opacity-80 text-4xl font-display tracking-wider mb-6 font-serif">
        Rolling Frames
      </div>
      <p className="text-sm text-white text-opacity-60 leading-relaxed">
        Capturing love, laughter, and timeless memories through our lens.
      </p>
    </div>

    <div className="md:pl-28">
      <div className="font-display text-white text-sm tracking-widest mb-6 font-serif">
        About Us
      </div>
      <NavLink to="/about" className="block mb-3 hover:text-[#f6f1ee] transition">Our Story</NavLink>
      <NavLink to="/gallery" className="block mb-3 hover:text-[#f6f1ee] transition">Gallery</NavLink>
      <NavLink to="/films" className="block mb-3 hover:text-[#f6f1ee] transition">Films</NavLink>
    </div>

    <div className="md:pl-16">
      <div className="font-display text-white text-sm tracking-widest mb-6 font-serif">
      Find Us Online
      </div>
      <a href="https://www.instagram.com/rollingframes/" className="block mb-3 hover:text-[#f6f1ee] transition">Instagram</a>
      <a href="https://www.youtube.com/c/RollingFrames" className="block mb-3 hover:text-[#f6f1ee] transition">Youtube</a>
      <a href="https://www.facebook.com/share/18ZeNsDdBW/" className="block mb-3 hover:text-[#f6f1ee] transition">Facebook</a>
    </div>

  </div>
</footer>

  )
}

export default Footer