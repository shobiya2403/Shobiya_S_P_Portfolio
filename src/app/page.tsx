"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import image from "@/../public/shobi_img.jpeg";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-indigo-950">
      <Navbar />

      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-20 pt-20">
      <motion.div
  className="max-w-xl py-2"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
  Hi, I'm <span className="text-sky-500">Shobiya S P</span>
</h1>

<h2 className="text-xl md:text-3xl text-gray-300 mb-6">
  BCA Student & Full Stack Developer
</h2>

<p className="text-gray-400 mb-8 leading-relaxed md:text-2xl">
  I'm passionate about building web applications and learning new technologies.
</p>  </motion.div>
      </section>

      {/* ABOUT SECTION */}
<section id="about" className="min-h-screen px-6 md:px-20 flex items-center  py-20">
  
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">

    {/* LEFT - TEXT */}
   

    <div className="md:w-1/2 ">
     <motion.div
  className="w-full"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100 ">
        About Me 
      </h2>

      <p className="text-gray-300 mb-3 leading-relaxed text-base md:text-xl">
        I am a BCA student currently learning full stack web development.
        My journey started with HTML, CSS, and JavaScript, and now I am exploring modern frameworks.
      </p>

      <p className="text-gray-300 leading-relaxed mb-3 text-base md:text-xl">
        I enjoy turning ideas into real projects and improving my problem-solving skills through coding.
      </p>

      <p className="text-gray-300 leading-relaxed text-base md:text-xl">
        My goal is to become a professional Full Stack Developer and work on impactful real-world applications.
      </p>
       </motion.div>
    </div>
   

    {/* RIGHT - IMAGE */}
    <div className="md:w-1/2 flex justify-center">
    <motion.div
  className="md:w-1/2 flex justify-center"
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
>
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-2xl">

        <img
          src="shobi_img.jpeg"
          alt="Profile"
        
          className="w-72 h-75 md:w-70 md:h-70 object-cover rounded-2xl 
          border border-white/10 shadow-lg hover:scale-105 transition duration-300 quality-100"
        />
      </div>
      </motion.div>
    </div>

  </div>
</section>

      {/* SKILLS SECTION */}
      <section id="skills" className="min-h-screen px-6 md:px-20 flex items-center  py-20">
        <div >
          <motion.h2
  className="text-3xl md:text-4xl font-bold mb-8 text-white"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6 }}
>
  
Tech Stack & Skills</motion.h2> 

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           
    <motion.div
  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center 
  text-gray-300 hover:border-indigo-400 hover:shadow-lg transition flex flex-col"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
>
    <h4 className="text-lg font-semibold text-blue-500 ">Frontend Development</h4>
    <ul className="text-gray-400 mt-2">
      <li>React.js</li>
      <li>Next.js</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>Tailwind CSS</li>
    </ul>
              </motion.div>

              <motion.div
  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center 
  text-gray-300 hover:border-indigo-400 hover:shadow-lg transition flex flex-col"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
>
    <h4 className="text-lg font-semibold text-blue-500 ">Backend Development</h4>
    <ul className="text-gray-400 mt-2">
      <li>Java</li>
      <li>Python</li>
    </ul>
              </motion.div>

   <motion.div
  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center 
  text-gray-300 hover:border-indigo-400 hover:shadow-lg transition flex flex-col"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
>
    <h4 className="text-lg font-semibold text-blue-500 ">Database Management</h4>
    <ul className="text-gray-400 mt-2">
      <li>Oracle SQL</li>
      <li>SQLite</li>
      <li>DBMS Concepts</li>
    </ul>
              </motion.div>

              <motion.div
  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center 
  text-gray-300 hover:border-indigo-400 hover:shadow-lg transition flex flex-col"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
>
    <h4 className="text-lg font-semibold text-blue-500 ">CS Fundamentals</h4>
    <ul className="text-gray-400 mt-2">
      <li>Data Structures & Algorithms</li>
      <li>Object-Oriented Programming</li>
    </ul>
              </motion.div>     

             <motion.div
  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center 
  text-gray-300 hover:border-indigo-400 hover:shadow-lg transition flex flex-col"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
>
    <h4 className="text-lg font-semibold text-blue-500 ">Tools & Technologies</h4>
    <ul className="text-gray-400 mt-2">
      <li>Git & Github </li>
      <li>VS Code</li>
      <li>Cursor AI </li>
      <li>NPM</li>
    </ul>
              </motion.div>

              <motion.div
  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center 
  text-gray-300 hover:border-indigo-400 hover:shadow-lg transition flex flex-col"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
>
    <h4 className="text-lg font-semibold text-blue-500 ">Soft Skills</h4>
    <ul className="text-gray-400 mt-2">
      <li>Teamwork</li>
      <li>Time Management</li>
      <li>Communication</li>
      <li>Problem Solving</li>
      </ul>
              </motion.div>
          </div>
        </div>
      </section>

  

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen px-6 md:px-20 flex items-center pt-20">
        <div className="max-w-xl w-full">
           <motion.h2
  className="text-3xl md:text-4xl font-bold mb-4 text-white"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6 }}
>
  Contact Me
</motion.h2>

          <p className="text-gray-600 mb-6 text-base md:text-xl">
            Feel free to reach out for collaborations or opportunities 
          </p>

         {/* SOCIAL LINKS */}
    <div className="flex flex-col gap-4">

      {/* LinkedIn */}
      <motion.a
  href="https://www.linkedin.com/in/shobiya-s-p/"
  target="_blank"
  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between text-gray-300 hover:border-indigo-400 hover:shadow-lg transition"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.03,
    x: 10,
  }}
>
        <span>LinkedIn</span>
        <span className="text-blue-500">↗</span>
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/shobiya2403-bot"
        target="_blank"
        className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between text-gray-300 hover:border-indigo-400 hover:shadow-lg transition"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.03,
          x: 10,
        }}
      >
      
        <span>GitHub</span>
        <span className="text-sky-500">↗</span>
      </motion.a>

      {/* Twitter / X */}
     <motion.a
  href="https://www.linkedin.com/in/shobiya-s-p/"
  target="_blank"
  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between text-gray-300 hover:border-indigo-400 hover:shadow-lg transition"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.03,
    x: 10,
  }}
>
        <span>Twitter / X</span>
        <span className="text-sky-500">↗</span>
      </motion.a>

      {/* Email */}
      <motion.a
  href="https://www.linkedin.com/in/shobiya-s-p/"
  target="_blank"
  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between text-gray-300 hover:border-indigo-400 hover:shadow-lg transition"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.5 }}
  whileHover={{
    scale: 1.03,
    x: 10,
  }}
>
        <span>shobiya2403@gmail.com</span>
        <span className="text-sky-500">✉</span>
      </motion.a>
        </div>
        </div>
      </section>
    </div>
  );
}