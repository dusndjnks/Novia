import React from 'react'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import { NavLink } from 'react-router-dom'

import img5 from "../img/0RFW9655.jpg"
import img6 from "../img/2023-11-26.jpg"

import grid3 from "../img/VNS00980.jpg"
import grid4 from "../img/265643107_890687938313345_4712320185914611722_n.jpg"
import grid5 from "../img/277907673_345457564226277_5762440556272328926_n.jpg"

import img9 from "../img/VNS09157.jpg"
import video from "../img/yt1z.net - Asmi Bhaski Save the Date 2024 (1080p).mp4"




const Home = () => {
  return (
    <div className=''>
        <Banner/>


        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#f6f1ee] p-12 md:p-24 flex justify-end items-center">
            <img src={img5} alt="Wedding Post" className="w-full max-w-md" />
          </div>
          <div className="bg-[#e8e0dd] p-12 md:p-24 flex justify-start items-center">
            <div className="max-w-md">
              <div className="w-24 h-2 bg-[#5c4a4a] mb-4"></div>
              <h2 className="font-display font-bold font-serif text-2xl md:text-3xl lg:text-4xl mb-6 text-[#5c4a4a]">Unforgettable Wedding Stories</h2>
              <p className="font-light text-[#7a6868] text-sm md:text-base mb-6 leading-relaxed">Telling your love story through timeless imagery and natural emotion.</p>
              <NavLink to="/about" className="inline-block border-2 border-[#5c4a4a] font-light text-[#5c4a4a] text-sm uppercase tracking-widest py-3 px-8 hover:bg-[#5c4a4a] hover:text-white transition">Read more</NavLink>
            </div>
          </div>
      </div>

    <div>
		<img src={img6} class="w-full h-[500px] md:h-screen object-cover object-right-bottom " />
		</div>

   <div className="max-w-xl mx-auto text-center py-24 md:py-32 px-2 ">
      <div className="w-24 h-2 bg-[#5c4a4a] mb-4 mx-auto"></div>
      <h2 className="font-serif font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-[#5c4a4a]">Capturing Timeless Moments</h2>
      <p className="font-light text-[#7a6868] mb-6 leading-relaxed"> Celebrate love, light, and candid emotion through our lens. Let us turn your most beautiful day into lifelong memories. </p>
    </div>

    <div class="flex flex-wrap bg-black">
    <a href="/gallery" class="bg-black relative w-full md:w-1/3 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
      <div class="relative z-5">Weddings</div>
      <img src={grid3} class="absolute inset-0 w-full h-full object-cover opacity-50" alt="Stories" />
    </a>
    <a href="/gallery" class="bg-black relative w-full md:w-1/3 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
      <div class="relative z-5">Pre-wedding</div>
      <img src={grid5} class="absolute inset-0 w-full h-full object-cover opacity-50" alt="Engagements" />
    </a>
    <a href="/gallery" class="bg-black relative w-full md:w-1/3 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
      <div class="relative z-5">Maternity & Newborn</div>
      <img src={grid4} class="absolute inset-0 w-full h-full object-cover object-left-bottom opacity-50" alt="Weddings" />
    </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#f6f1ee] p-12 md:p-24 flex flex-reverse justify-start items-center">
        <div className="relative group">
          <video src={video} autoPlay loop muted playsInline
            className="w-full h-64 object-cover transition-transform duration-500 "/>
          <div className="absolute inset-0 flex items-center justify-center">
            <NavLink to="/films" className="bg-white text-[#5c4a4a] font-semibold px-6 py-3 rounded-lg shadow-md uppercase tracking-wide hover:bg-[#5c4a4a] hover:text-white transition">Watch Our Films</NavLink>
          </div>
        </div>

      </div>
      <div className="md:order-first bg-[#ecdede] p-12 md:p-24 flex justify-end items-center">
        <div className="max-w-md">
          <div className="w-24 h-2 bg-[#5c4a4a] mb-4"></div>
          <h2 className="font-serif font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-[#5c4a4a]">Elegant Wedding Moments</h2>
          <p className="font-light text-[#7a6868] text-sm md:text-base mb-6 leading-relaxed">Discover stories captured with grace and warmth. Each frame tells the beauty of real moments on your special day.</p>
          <a href="/films" className="inline-block border-2 border-[#5c4a4a] font-light text-[#5c4a4a] text-sm uppercase tracking-widest py-3 px-8 hover:bg-[#5c4a4a] hover:text-white transition-colors duration-300">Wedding Films</a>
        </div>
      </div>
    </div>

      <div className="relative w-full px-6 py-16 md:py-24 lg:py-32 z-5">
        <img src={img9} alt="Footer CTA Background" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-5 text-center text-white max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 font-serif">Let's Capture Your Moment</h1>
          <p className="text-base md:text-lg font-medium mb-8">Book your timeless photoshoot today with Candid Novia.</p>
          <NavLink to="/contact" className="inline-block bg-[#5c4a4a] text-[#ffffff] uppercase text-sm tracking-widest font-heading px-8 py-4 transition">Book Now</NavLink>
        </div>
      </div>

     <Footer/>
    </div>
  )
}

export default Home