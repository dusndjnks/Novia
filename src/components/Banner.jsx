import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import img1 from "../images/pc1.jpg"
import img2 from "../images/pc2.jpg"
import img3 from "../images/pc3.jpg"
import img7 from "../images/pc5.jpg"

import img4 from "../images/phone1.jpg"
import img5 from "../images/phone2.jpg"
import img6 from "../images/phone3.jpg"


const desktopImages = [img1, img7 , img3, img2];
const mobileImages = [img4, img5, img6];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const images = isMobile ? mobileImages : desktopImages;
        return (prev + 1) % images.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="relative w-full h-[520px] md:h-screen  overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out 
          ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}/>
      ))}
    </div>
  );
};

export default Banner;
