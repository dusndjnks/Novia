import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyMotion } from 'framer-motion'

import img from "../images/about1.jpg"
import img1 from "../images/about2.jpg"
import img2 from "../images/about3.jpg"
import img3 from "../images/about4.jpg"



const About = () => {

   useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
        });
      }, []);
  

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2, // smaller = snappier
      easing: (t) => t, // linear easing (no slow in/out)
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div className='bg-[#f6f1ee] h-full'>

    <div className="bg-[#5c4a4a] h-24 ">
      <Navbar />
    </div>
    
    <section className="py-14 bg-[#fbf9f7]">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div  data-aos="fade-up" className="md:flex flex flex-col  p-3">
            <img src={img} className="md:max-w-lg sm:rounded-lg rounded-2xl shadow-xl " alt="Photography services"/>
          </div>
          <div data-aos="fade-up" className="max-w-xl px-4 space-y-5 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-[#9d7c7c] font-semibold uppercase tracking-wide">
              About Us
            </h3>
            <p className="text-[#5c4a4a] text-3xl font-semibold sm:text-4xl font-serif">
              Capturing Emotions, Creating Memories
            </p>
            <p className="mt-3 text-[#6b5e5e] leading-relaxed">
              We are a professional photography company based in Trivandrum, committed to preserving life’s most beautiful moments through the lens. With a keen eye for detail and a passion for storytelling, we specialize in capturing raw emotions and timeless expressions.
            </p>
            <p className="text-[#6b5e5e] leading-relaxed">
              Our services include wedding photography, maternity shoots, independent photo sessions, and much more. Whether it's your big day or a quiet, intimate moment, we aim to deliver memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div data-aos="fade-up"
     class="text-center px-4 sm:px-6 lg:px-8 mb-12 py-10">
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#4B2E39]">
        Capture the Magic of Your Special Day
      </h2>
      <p class="mt-4 max-w-2xl mx-auto text-lg text-[#7D5A6B]">
        Elegant photography and timeless films to preserve every precious moment.
      </p>
    </div>

    <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 bg-[#F5EEF7]">
        <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
                <h3 class="mb-1 text-[#4B2E39] font-semibold">
                    <span class="mb-1 block text-sm leading-6 text-[#A67894]">Wedding Photography</span>
                    Cinematic films capturing every moment of your special day.
                </h3>
                <div class="prose prose-sm text-[#5E4954]">
                    <p>From heartfelt vows to joyful celebrations, we turn your wedding into a timeless cinematic experience you'll cherish forever.</p>
                </div>
            </div>
            <img src={img1} alt="Wedding Film"
                class="mb-6 shadow-md rounded-lg bg-[#FAF5F8] w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"/>
        </li>

        <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
                <h3 class="mb-1 text-[#4B2E39] font-semibold">
                    <span class="mb-1 block text-sm leading-6 text-[#B484A8]">Pre-Wedding Shoots</span>
                    Tell your love story with dreamy portraits before the big day.
                </h3>
                <div class="prose prose-sm text-[#5E4954]">
                    <p>Capture your chemistry and journey together in stunning locations with our curated pre-wedding sessions.</p>
                </div>
            </div>
            <img src={img2} alt="Pre-Wedding Shoot"
                class="mb-6 shadow-md rounded-lg bg-[#FAF5F8] w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"/>
        </li>

        <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
                <h3 class="mb-1 text-[#4B2E39] font-semibold">
                    <span class="mb-1 block text-sm leading-6 text-[#A16E96]">Luxury Albums</span>
                    Handcrafted albums to relive your memories beautifully.
                </h3>
                <div class="prose prose-sm text-[#5E4954]">
                    <p>Elegantly designed photo albums that preserve your love story in a tangible form for generations to enjoy.</p>
                </div>
            </div>
            <img src={img3} alt="Wedding Album"
                class="mb-6 shadow-md rounded-lg bg-[#FAF5F8] w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"/>
        </li>
    </ul>

    <div data-aos="fade-up" class="text-center px-4 sm:px-6 lg:px-8 mb-12 py-10">
      <h1 class="text-4xl sm:text-5xl font-bold text-center mb-4 text-[#5C4A4A]">
        Our Wedding Stories
      </h1>
      <p class="text-lg text-[#7D5A6B] max-w-2xl mx-auto">
        Relive the joy, laughter, and love from beautiful weddings we've been honored to capture.
      </p>
    </div>

    <div class="bg-[#f6f1ee]">
        <div class="container mx-auto px-4 pt-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                    <a href="https://www.youtube.com/watch?v=OVVdeF_dq4Y" target="_blank">
                        <img src="https://img.youtube.com/vi/OVVdeF_dq4Y/maxresdefault.jpg" alt="Akhila & Ajay Wedding Film" class="w-full h-full object-cover"/>
                        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h3 class="text-2xl font-bold text-white">Akhila & Ajay Wedding Film</h3>
                        </div>
                    </a>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <a href="https://www.youtube.com/watch?v=kGxYqC8FCac" target="_blank">
                        <img src="https://img.youtube.com/vi/kGxYqC8FCac/maxresdefault.jpg" alt="It's Always Been You | Akhil and Tinu | Save the Date" class="w-full h-48 object-cover"/>
                        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h4 class="text-xl font-bold text-white">It's Always Been You | Akhil and Tinu | Save the Date</h4>
                        </div>
                    </a>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <a href="https://www.youtube.com/watch?v=n0o0EiTPHtc" target="_blank">
                        <img src="https://img.youtube.com/vi/n0o0EiTPHtc/maxresdefault.jpg" alt="Best Wedding Teaser 2021 | Vineeth and Arya" class="w-full h-48 object-cover"/>
                        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h4 class="text-xl font-bold text-white">Best Wedding Teaser 2021 | Vineeth and Arya</h4>
                        </div>
                    </a>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <a href="https://www.youtube.com/watch?v=rUkbHXXZv4c" target="_blank">
                        <img src="https://img.youtube.com/vi/rUkbHXXZv4c/maxresdefault.jpg" alt="Bachelorette Party of Harshita" class="w-full h-48 object-cover"/>
                        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h4 class="text-xl font-bold text-white">Bachelorette Party of Harshita</h4>
                        </div>
                    </a>
                </div>
                <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                    <a href="https://www.youtube.com/watch?v=4SbjMkLF7eo" target="_blank">
                        <img src="https://img.youtube.com/vi/4SbjMkLF7eo/maxresdefault.jpg" alt="Dr. Kiran and Dr. Archana's Big Day | Wedding Trailer" class="w-full h-48 object-cover"/>
                        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h4 class="text-xl font-bold text-white">Dr. Kiran and Dr. Archana's Big Day | Wedding Trailer</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="flex justify-center my-5 ">
      <NavLink to="/films"className="inline-block px-6 py-3 text-sm font-semibold text-white bg-[#5C4A4A] rounded-full shadow-md hover:bg-[#473636] transition duration-300">
      More Films
      </NavLink>
    </div>

    <Footer/>
    </div>
  )
}

export default About