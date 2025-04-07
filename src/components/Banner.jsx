import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import img1 from "../img/2020-11-14.jpg"
import img2 from "../img/0RFW5936.jpg"
import img3 from "../img/VNS05994 copy.jpg"

const images = [img1, img2, img3];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] md:h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
      <img src={images[current]} alt={`Slide ${current + 1}`} className="w-full h-full object-cover object-center-bottom
       absolute inset-0 "/>
    </div>
  );
};

export default Banner;
