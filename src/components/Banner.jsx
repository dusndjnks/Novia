import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import candid1 from "../images/pexels-camera-treasure-928922-17548724.jpg";
import candid2 from "../images/pexels-camera-treasure-928922-12165511.jpg";
import candid3 from "../images/pexels-picturebymv-8295326.jpg";

const images = [candid1, candid2, candid3];

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
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Only showing 1 image at a time (no opacity/fade) */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover absolute inset-0 "
      />

      {/* Hero Text */}
      {/* <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow">
          Welcome to Candid Novia
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow">
          Capturing Love, Light, and the Little Moments
        </p>
        <a
          href="#gallery"
          className="bg-yellow-800 px-6 py-3 uppercase tracking-widest font-heading text-sm text-white"
        >
          Explore Gallery
        </a>
      </div> */}
    </div>
  );
};

export default Banner;
