import React from 'react'
import Navbar from '../components/Navbar'
import banner from "../img/0RFW5901.jpg"

const About = () => {
  return (
    <div>
    <div className="relative w-full h-[80vh] lg:h-[90vh] bg-cover bg-bottom-left sm:bg-bottom" style={{backgroundImage: `url(${banner})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>



    </div>
  )
}

export default About