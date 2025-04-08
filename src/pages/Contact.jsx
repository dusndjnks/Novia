import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_991ztg1",
        "template_vpbzgdq",
        form.current,
        "myBJ-9y0Yz72y_NdU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div>
      <div className="bg-[#5c4a4a] h-24">
        <Navbar />
      </div>

  <div>
     <div className="text-center pt-12 md:pb-12 px-6 mt-12">
          <h1 className="font-display font-bold text-5xl mb-6 font-serif text-[#5C4A4A]">
            Get in Touch
          </h1>
    </div>
    <div className="container mx-auto px-6 mb-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <div>
        <a href="tel:+91 88939 83777" className="flex items-center my-2 text-[#5C4A4A]"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> </svg>+91 88939 83777</a>

        <a href="" className="flex items-center my-2 text-[#5C4A4A]"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>therollingframes@yahoo.com</a>

        <div className="flex items-center my-2 text-[#5C4A4A]"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>Monday - Saturday: 9am - 8pm</div>

        <a href="https://www.google.co.in/maps/place/Rolling+Frames+Photography+Studio/@8.4738883,76.974414,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05bb11ca07ee31:0x1d546404958ecf53!8m2!3d8.473883!4d76.9769889!16s%2Fg%2F11fmgb6fhh?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 text-[#5C4A4A]"> <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Rolling Frames Photography Studio</a>
        <div className="w-full h-56 ">
      <iframe
        title="Rolling Frames Studio Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2619628997772!2d76.97441397449401!3d8.47388829743229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb11ca07ee31%3A0x1d546404958ecf53!2sRolling%20Frames%20Photography%20Studio!5e0!3m2!1sen!2sin!4v1744113069262!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block text-base tracking-tight text-[#7D6464]">Name</label>
            <input name="name" type="text" placeholder="Name" required
              className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-[#5C4A4A]" />
          </div>
          <div className="mt-6">
            <label className="block text-base tracking-tight text-[#7D6464]">Email address</label>
            <input name="email" type="email" placeholder="your@email.com" required
              className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-[#5C4A4A]" />
          </div>
          <div className="mt-6">
            <label className="block text-base tracking-tight text-[#7D6464]">Message</label>
            <textarea name="message" placeholder="Your message" required
              className="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-[#5C4A4A]"></textarea>
          </div>
          <button type="submit" className="inline-block bg-[#5C4A4A] hover:bg-[#473636] text-white uppercase text-sm tracking-widest font-heading px-8 py-4 mt-6 transition duration-300"> Send message</button>
          {success && (<p className="text-green-600 text-sm mt-4">Your message has been sent successfully!</p>)}
        </form>
      </div>
    </div>
    </div>
  </div>

      <Footer />
    </div>
  );
};

export default Contact;
