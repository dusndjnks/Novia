import React from 'react'

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

    <div className="md:pl-16">
      <div className="font-display text-white text-sm tracking-widest mb-6 font-serif">
        About Us
      </div>
      <a href="/our-story" className="block mb-3 hover:text-[#f6f1ee] transition">Our Story</a>
      <a href="/team" className="block mb-3 hover:text-[#f6f1ee] transition">Meet the Team</a>
      <a href="/careers" className="block mb-3 hover:text-[#f6f1ee] transition">Careers</a>
    </div>

    <div className="md:pl-16">
      <div className="font-display text-white text-sm tracking-widest mb-6 font-serif">
        Services
      </div>
      <a href="/weddings" className="block mb-3 hover:text-[#f6f1ee] transition">Weddings</a>
      <a href="/engagements" className="block mb-3 hover:text-[#f6f1ee] transition">Engagements</a>
      <a href="/destinations" className="block mb-3 hover:text-[#f6f1ee] transition">Destination Shoots</a>
    </div>

  </div>
</footer>

  )
}

export default Footer