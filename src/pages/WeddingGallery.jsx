import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import img from "../img/0RFW5859.jpg";
import img1 from "../img/0RFW5901.jpg";
import img3 from "../img/0RFW6292.jpg";
import img4 from "../img/0RFW9644.jpg";
import img5 from "../img/0RFW9655.jpg";
import img6 from "../img/2020-11-14.jpg";
import img7 from "../img/2023-11-26 (1).jpg";
import img8 from "../img/2023-11-26 (2).jpg";
import img9 from "../img/2023-11-26 (3).jpg";
import img10 from "../img/2023-11-26 (4).jpg";

const Gallery = () => {
  const images = [ img1, img3, img4, img5, img6, img7, img8, img9, img10];
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div>
      <div className="bg-[#5c4a4a] h-24">
        <Navbar />
      </div>

      <section className="px-4 py-12 bg-[#f9f7f6]">
        <h2 className="text-4xl md:text-5xl text-center font-serif font-bold text-[#5C4A4A] mb-12">
          Wedding Memories
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Wedding ${index + 1}`}
              className="w-full rounded-lg shadow-md break-inside-avoid cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-full max-h-full object-contain p-4 rounded-md shadow-xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
