import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import logo from './OIP (15).jpeg';

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-0.6" className='w-full bg-zinc-900 pt-2 relative md:pb-20'>
      <div className='textstructure md:mt-[6vw] mt-[20vw] px-[4vw] flex sm:flex-row flex-col justify-center items-center'>
        
        {/* Text Block */}
        <div className='text-center sm:text-left'>
          {["Comprehensive & Hands-On", "Aeromodelling & Drone Classes", "For All Students"].map((text, index) => (
            <motion.div
              className='masker'
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-white uppercase text-[6vw] sm:text-[4vw] tracking-tighter font-regular leading-[7vw] sm:leading-[4vw]">
                {text}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Image Block */}
        <motion.div
          className='logo1 mt-[5vw] sm:ml-[4vw] w-[50vw] sm:w-[24vw] md:shadow-4xl shadow-sm rounded-xl shadow-cyan-500'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <img className='rounded-xl' src={logo} alt="Logo" />
        </motion.div>
      </div>

      {/* Bottom Text Block with Hover Animation */}
      <div className='border-t-[1px] border-zinc-700 mt-[5vw] sm:mt-[8vw] flex flex-col sm:flex-row justify-between items-center px-[4vw] py-2'>
        {["Join The Hobby Flying Classes", "Request a Call Back"].map((item, index) => (
          <motion.p
            key={index}
            className='text-[4vw] sm:text-[1.5vw] font-light tracking-tight leading-none text-[#99e6ff] m-[2vw]'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, color: "#00e6ff" }}
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
