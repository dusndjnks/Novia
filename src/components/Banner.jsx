import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const images = [
  "https://images.pexels.com/photos/30740014/pexels-photo-30740014.jpeg",
  "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
  "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg",
];


const Banner = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
  return (
    <div className="relative w-full h-[500px] md:h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Navbar over banner */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar/>
      </div>

    </div>
  )
}

export default Banner