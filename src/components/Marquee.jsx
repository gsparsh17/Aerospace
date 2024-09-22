import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed="0.5" className=' w-full py-[2vw] bg-[#99e6ff] md:rounded-tl-3xl md:rounded-tr-3xl relative'>
        <div className='text px-6 py-[1vw] border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={ {ease: "linear",repeat: Infinity, duration: 150}} className='md:text-[12vw] text-[12vw] -m-[2.5vw] ml-1 leading-none font-["Founders_Grotesk_"] uppercase tracking-tighter'>Aeromodelling is the hobby of building and flying model airplanes. Aeromodelling cultivates hands-on STEM proficiency, drives research initiatives, sharpens technical expertise, fosters networking, and propels individuals towards rewarding careers within the aerospace and related industries while providing a fulfilling recreational experience.</motion.h1>
        </div>
    </div>
  )
}

export default Marquee