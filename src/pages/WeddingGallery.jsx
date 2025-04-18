import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lenis from '@studio-freight/lenis'

import gallery1 from "../images/gallery/gallery (1).jpg";
import gallery2 from "../images/gallery/gallery (2).jpg";
import gallery3 from "../images/gallery/gallery (3).jpg";
import gallery4 from "../images/gallery/gallery (4).jpg";
import gallery5 from "../images/gallery/gallery (5).jpg";
import gallery6 from "../images/gallery/gallery (6).jpg";
import gallery7 from "../images/gallery/gallery (7).jpg";
import gallery8 from "../images/gallery/gallery (8).jpg";
import gallery9 from "../images/gallery/gallery (9).jpg";
import gallery10 from "../images/gallery/gallery (10).jpg";
import gallery11 from "../images/gallery/gallery (11).jpg";
import gallery12 from "../images/gallery/gallery (12).jpg";
import gallery13 from "../images/gallery/gallery (13).jpg";
import gallery14 from "../images/gallery/gallery (14).jpg";
import gallery15 from "../images/gallery/gallery (15).jpg";
import gallery16 from "../images/gallery/gallery (16).jpg";
import gallery17 from "../images/gallery/gallery (17).jpg";
import gallery18 from "../images/gallery/gallery (18).jpg";
import gallery19 from "../images/gallery/gallery (19).jpg";
import gallery20 from "../images/gallery/gallery (20).jpg";
import gallery21 from "../images/gallery/gallery (21).jpg";
import gallery23 from "../images/gallery/gallery (23).jpg";
import gallery24 from "../images/gallery/gallery (24).jpg";
import gallery25 from "../images/gallery/gallery (25).jpg";
import gallery26 from "../images/gallery/gallery (26).jpg";
import gallery27 from "../images/gallery/gallery (27).jpg";
import gallery28 from "../images/gallery/gallery (28).jpg";
import gallery29 from "../images/gallery/gallery (29).jpg";
import gallery32 from "../images/gallery/gallery (32).jpg";
import gallery33 from "../images/gallery/gallery (33).jpg";
import gallery34 from "../images/gallery/gallery (34).jpg";
import gallery35 from "../images/gallery/gallery (35).jpg";
import gallery36 from "../images/gallery/gallery (36).jpg";
import gallery37 from "../images/gallery/gallery (37).jpg";
import gallery38 from "../images/gallery/gallery (38).jpg";

const Gallery = () => {
  const images = [gallery12, gallery27, gallery3, gallery21, gallery36, gallery7, gallery15, gallery10, gallery5, gallery8, gallery19, gallery28, gallery25, gallery2, gallery24, gallery13, gallery38, gallery1, gallery6, gallery34, gallery17, gallery32, gallery29, gallery11, gallery26, gallery14, gallery9, gallery4, gallery23, gallery18, gallery33, gallery16, gallery35, gallery37, gallery20];

  const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === "Escape") {
          setSelectedImage(null);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
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
    <div>
      <div className="bg-[#5c4a4a] h-24">
        <Navbar />
      </div>

      <section className="px-4 py-12 bg-[#f9f7f6]">
        <h2 className="text-4xl md:text-5xl text-center font-serif font-bold text-[#5C4A4A] mb-12"> Wedding Memories</h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Wedding ${index + 1}`} className="w-full rounded-lg shadow-md break-inside-avoid cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => setSelectedImage(src)} />
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center" onClick={() => setSelectedImage(null)} >
          <img src={selectedImage} alt="Full View" className="w-full h-full object-contain p-4 rounded-md shadow-xl"/>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
