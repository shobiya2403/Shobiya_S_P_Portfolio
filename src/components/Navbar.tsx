import React from 'react'
import Image from "next/image";
import image from "@/../public/shobi_img.jpeg";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 fixed top-0 left-0 right-0 bg-black text-white z-50">
     <div>

        
        <Image
  src={image}
  alt="Profile"
  width={48}
  height={48}
  className="rounded-full object-cover border border-white/10 shadow-lg"
/>
       
      </div>

      <div className="flex gap-2 sm:gap-4 text-sm sm:text-base">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );

}
