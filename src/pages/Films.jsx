import React from 'react'
import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';


const Films = () => {

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
    

    const [isVideoPoppedUp, setVideoPopUp] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            title: "Akhila & Ajay Wedding Film",
            url: "https://www.youtube.com/watch?v=OVVdeF_dq4Y",
            thumbnail: "https://img.youtube.com/vi/OVVdeF_dq4Y/maxresdefault.jpg"
        },
        {
            title: "Indu & Amal Save the Date Film 2024",
            url: "https://www.youtube.com/watch?v=JDfjTpBZ4YA",
            thumbnail: "https://img.youtube.com/vi/JDfjTpBZ4YA/maxresdefault.jpg"
        },
        {
            title: "Vipin & Harsha Wedding Film",
            url: "https://www.youtube.com/watch?v=Q0dbfm2b7u4",
            thumbnail: "https://img.youtube.com/vi/Q0dbfm2b7u4/maxresdefault.jpg"
        },
        {
            title: "Prewedding Film of Arun and Sruthi",
            url: "https://www.youtube.com/watch?v=eTfD1_11_LI",
            thumbnail: "https://img.youtube.com/vi/eTfD1_11_LI/maxresdefault.jpg"
        },
        {
            title: "Vineeth and Arya Wedding Teaser 2021",
            url: "https://www.youtube.com/watch?v=n0o0EiTPHtc",
            thumbnail: "https://img.youtube.com/vi/n0o0EiTPHtc/maxresdefault.jpg"
        },
        {
            title: "Brahmin Wedding Highlights | Raghav & Sruthy",
            url: "https://www.youtube.com/watch?v=Aytyula-lwk",
            thumbnail: "https://img.youtube.com/vi/Aytyula-lwk/maxresdefault.jpg"
        },
        {
            title: "Harshita's Bachelorette Party",
            url: "https://www.youtube.com/watch?v=rUkbHXXZv4c",
            thumbnail: "https://img.youtube.com/vi/rUkbHXXZv4c/maxresdefault.jpg"
        },
        {
            title: "Save the Date for Harshita and Siva",
            url: "https://www.youtube.com/watch?v=o097koWV810",
            thumbnail: "https://img.youtube.com/vi/o097koWV810/maxresdefault.jpg"
        },
        {
            title: "Akhil and Tinu Save the Date",
            url: "https://www.youtube.com/watch?v=kGxYqC8FCac",
            thumbnail: "https://img.youtube.com/vi/kGxYqC8FCac/maxresdefault.jpg"
        },
        {
            title: "Sruthi's Bridal Look",
            url: "https://www.youtube.com/watch?v=iXH3gxOBMmM",
            thumbnail: "https://img.youtube.com/vi/iXH3gxOBMmM/maxresdefault.jpg"
        },
        {
            title: "Fou d'amour - Arun and Nirosha Post Wedding",
            url: "https://www.youtube.com/watch?v=_slBdD5Iu4U",
            thumbnail: "https://img.youtube.com/vi/_slBdD5Iu4U/maxresdefault.jpg"
        },
        {
            title: "Jobin and Tina's Pre-Wedding Film",
            url: "https://www.youtube.com/watch?v=NYPoOPhShU4",
            thumbnail: "https://img.youtube.com/vi/NYPoOPhShU4/maxresdefault.jpg"
        },
        {
            title: "Jobin & Tina Wedding Trailer",
            url: "https://www.youtube.com/watch?v=AGSjT68NWgo",
            thumbnail: "https://img.youtube.com/vi/AGSjT68NWgo/maxresdefault.jpg"
        }
    ];
    

    const openVideoPopup = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setVideoPopUp(true);
    };

  return (
    <div>
    <div className="bg-[#5c4a4a] h-24">
      <Navbar/>
    </div>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <section className="bg-[#fdfaf6] text-[#444444] py-16 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[#b8a398] mb-4">Your Story, Beautifully Told</h2>
                <p className="text-lg text-gray-600">Elegant, emotional wedding films captured with an artistic touch.</p>
              </div>
            </section>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video, idx) => (
                        <div key={idx} className="relative group">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-56 object-cover rounded-lg shadow-lg" />
                            <button
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                onClick={() => openVideoPopup(video.url)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-white">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                            <h3 className="mt-3 text-lg text-gray-800 font-semibold">{video.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            {isVideoPoppedUp && selectedVideo && (
                <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50">
                    <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                    <div className="relative w-full max-w-4xl px-4">
                        <button
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center"
                            onClick={() => setVideoPopUp(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                        <div className="relative pt-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                src={selectedVideo.replace("watch?v=", "embed/")}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
        <Footer/>
    </div>
  )
}

export default Films