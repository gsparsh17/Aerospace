import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import logo1 from './R (7).jpeg';

function About() {
  const ref = useRef(null); // Reference to track the component
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animations when 20% of the component is in view

  return (
    <div ref={ref} className="w-full p-[10vw] sm:p-[8vw] bg-black text-white relative">
      
      {/* Heading Animation */}
      <motion.h1 
        className="font-['Neue_Montreal'] text-[6vw] leading-[7vw] sm:text-[3.5vw] sm:leading-[3vw] tracking-tight sm:w-[76vw] text-white"
        initial={{ opacity: 0, y: 50 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 1 }}
      >
        This workshop isn't just an event; it's a catalyst for transformation. It's about stepping into the unknown, embracing the challenges, and emerging as a stronger, more empowered version of ourselves.
      </motion.h1>
      
      <div className="flex flex-col sm:flex-row gap-5 w-full border-t-[1px] mt-[5vw] border-[#99e6ff]">
        
        {/* Left Side: Text and Button with Animations */}
        <motion.div 
          className="w-full sm:w-1/2 mt-[5vw]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className='text-[5vw] sm:text-[3vw] text-[#99e6ff]'>Our Approach</h1>

          {/* Button Animation */}
          <motion.button
            className="flex text-[3.5vw] sm:text-[1.5vw] h-[10vw] sm:h-[4vw] w-[30vw] sm:w-[12vw] gap-[2vw] sm:gap-[1vw] items-center mt-[4vw] px-[4vw] sm:px-[1.5vw] py-[1.5vw] sm:py-[0.5vw] bg-black border border-[#99e6ff] rounded-full text-white hover:text-[#99e6ff] hover:bg-[#333]"
            whileHover={{ scale: 1.05 }} // Button hover effect
            transition={{ type: "spring", stiffness: 200 }}
          >
            Read More
            <div className='w-[2vw] sm:w-[0.5vw] h-[2vw] sm:h-[0.5vw] bg-[#99e6ff] rounded-full'></div>
          </motion.button>
        </motion.div>

        {/* Right Side: Image with Hover Animation */}
        <motion.div 
          className='mt-[5vw] w-full sm:w-[40vw] rounded-3xl'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }} // Image hover effect
        >
          <img className='rounded-xl border-4 border-[#99e6ff]' src={logo1} alt="logo" />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
