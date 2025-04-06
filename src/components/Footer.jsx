import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#3a4861] bg-opacity-90 text-white font-semibold uppercase text-xs tracking-widest">
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
      
      <div>
        <div className="text-white opacity-50 text-4xl font-display tracking-wider mb-6 font-serif">
          Candid Novia
        </div>
        <p className="text-sm text-white text-opacity-50 leading-relaxed">
          Capturing love, laughter, and timeless memories through our lens.
        </p>
      </div>
      <div className='md:pl-16'>
        <div className="font-display text-white text-sm tracking-widest mb-6 font-serif">
          About Us
        </div>
        <a href="/our-story" className="block mb-3">Our Story</a>
        <a href="/team" className="block mb-3">Meet the Team</a>
        <a href="/careers" className="block mb-3">Careers</a>
      </div>
      <div className='md:pl-16'>
        <div className="font-display text-white text-sm tracking-widest mb-6 font-serif">
          Services
        </div>
        <a href="/weddings" className="block mb-3">Weddings</a>
        <a href="/engagements" className="block mb-3">Engagements</a>
        <a href="/destinations" className="block mb-3">Destination Shoots</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer