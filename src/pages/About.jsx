import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
    <div className="bg-[#2C3E50] h-24 ">
      <Navbar/>
    </div>

    <div className="w-full h-screen bg-[#fbf9f7]">
  <div className="md:h-1/3 sm:h-[20%] h-[16%] md:w-[80%] sm:w-[90%] mx-auto bg-[#e7e3e0]"></div>
  <div className="relative md:w-[70%] w-[80%] mx-auto ">
    <div className="absolute md:-top-[7rem] -top-[4rem] flex flex-col items-center">
      <img className='md:w-[24rem] sm:w-[16rem] w-[10rem] object-center' src="https://images.unsplash.com/photo-1568733479167-08d48cb167bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxiZWF1dHlmdWwlMjBnaXJsfGVufDB8MHx8fDE3MzYxNDYzODJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile" />
      <h2 className="sm:text-5xl text-3xl font-serif mt-10 text-center">Ready to work with me?</h2>
      <p className="text-center text-md mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>
      <button className="text-lg font-semibold px-6 py-2 mt-8 outline outline-2 outline-gray-700 rounded-full hover:bg-[#e7e3e0]">Contact</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default About