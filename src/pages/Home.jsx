import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import Footer from '../components/Footer'
import Banner from '../components/Banner'
import { NavLink } from 'react-router-dom'

import img5 from "../images/home1.jpg"
import img6 from "../images/fullscreen.jpg"

import grid1 from "../images/grid1.jpg"
import grid2 from "../images/grid2.jpg"
import grid3 from "../images/grid3.jpg"

import img9 from "../images/contact.jpg"
import video from "../images/ytvideo.mp4"




const Home = () => {

  const testimonials = [
    {
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW7NVuHiQUx3aMlhIykqiWK9fyojHKOupeFiqAY50G03eUXyl2e=w75-h75-p-rp-mo-br100",
        name: "Asmithha Kumaresan",
        quote: "We had a very good experience. Their pictures will speak. Overall, we loved their incredible work and support ❤️. Soon we will connect for another shoot."
    },
    {
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVFLH19BS7h__FGmLcJMsQ5W1kqDV4GCDNStt5iIhxdo55sLjgB=w75-h75-p-rp-mo-br100",
        name: "Its me ASH",
        quote: "Rolling frames made our wedding events colourful. All frames are so beautiful. Talented crew. Extremely satisfied. Highly recommended."
    },
    {
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUdhwKwZj59KPxbR9E6UGuGKT1kPaXh22y0QnohzLvYPtpK0bIl=w75-h75-p-rp-mo-br100",
        name: "Rahul R Nair",
        quote: "The album is of very good quality. The photography skills is highly appreciated and they have given us options to change photos after feedback and we are fully satisfied with the results."
    },
];
const [currentTestimonial, setCurrentTestimonial] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
}, [testimonials.length]);

return (
    <div className=''>
    <Banner/>

    <section className="bg-[#f9f7f6] py-12 md:px-6">
  <div className=" rounded-2xl p-8 text-center">
    <h2 className="text-2xl md:text-3xl font-serif text-[#5C4A4A] mb-4 font-semibold">About Rolling Frames</h2>
    <p className="text-[#5C4A4A] font-serif text-base md:text-lg leading-relaxed font-light">Rolling Frames Photography, based in Karumam, Thiruvananthapuram, is known for capturing heartfelt moments with elegance and style. With over 7 years of experience and a 4.9-star rating, we specialize in weddings, maternity, newborn, and lifestyle shoots—turning every story into timeless visuals.</p>
  </div>
</section>



    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#f6f1ee] p-6 lg:p-20 flex md:justify-end justify-center items-center">
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

    <div className="flex flex-wrap bg-black">
      <NavLink to="/gallery" className="bg-black relative w-full md:w-1/3 flex items-center justify-center h-72 font text-white uppercase tracking-widest hover:opacity-75">
        <div className="relative z-10">Weddings</div>
        <img src={grid1} alt="Weddings" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
      </NavLink>
      <NavLink to="/gallery" className="bg-black relative w-full md:w-1/3 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
        <div className="relative z-10">Pre-wedding</div>
        <img  src={grid2}  alt="Pre-wedding"  className="absolute inset-0 w-full h-full object-cover opacity-50"/>
      </NavLink>
      <NavLink to="/gallery" className="bg-black relative w-full md:w-1/3 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75">
        <div className="relative z-10">Maternity & Newborn</div>
        <img src={grid3} alt="Maternity and Newborn" className="absolute inset-0 w-full h-full object-cover object-left-bottom opacity-50" />
      </NavLink>
    </div>

    <section className="py-14 bg-[#f9f7f6]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-[#5C4A4A] font-semibold text-2xl pb-6 font-serif">What People Are Saying</h3>
                    <ul>
                        {testimonials.map((item, idx) => (
                            currentTestimonial === idx && (
                                <li key={idx}>
                                    <figure>
                                        <blockquote>
                                            <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                “{item.quote}”
                                            </p>
                                        </blockquote>
                                        <div className="mt-6">
                                            <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" alt={item.name} />
                                            <div className="mt-3">
                                                <span className="block text-[#5C4A4A] font-semibold">{item.name}</span>
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
                <div className="">
                    <ul className="flex gap-x-3 justify-center">
                        {testimonials.map((_, idx) => (
                            <li key={idx}>
                                <button
                                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-[#5C4A4A] focus:ring ${
                                        currentTestimonial === idx ? "bg-[#5C4A4A]" : "bg-gray-300"
                                    }`}
                                    onClick={() => setCurrentTestimonial(idx)}
                                ></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#f6f1ee] p-6 md:p-12 flex flex-reverse justify-start items-center">
        <div className="relative group">
          <video src={video} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-500 "/>
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