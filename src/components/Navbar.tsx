import React from 'react'
import Image from "next/image";
import image from "@/../public/shobi_img.jpeg";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 bg-black text-white z-10">
     <div>

        
        <Image
  src={image}
  alt="Profile"

  className="quality-100 rounded-full object-cover w-12 h-13 border border-white/10 shadow-lg hover:scale-105 transition duration-300"
/>
       
      </div>

      <div className="flex gap-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );

}
