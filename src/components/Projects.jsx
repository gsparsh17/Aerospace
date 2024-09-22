import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import logo1 from './lfr.jpeg';
import logo2 from './mars.jpg';

const ProjectCard = ({ title, image, isInView }) => {
  return (
    <motion.div 
      className="card rounded-xl relative w-full md:w-1/2 h-[50vw] md:h-[27vw] group"
      whileHover={{ scale: 1 }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0, y: 100 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}}
    >
      {/* Hover Text Animation */}
      <motion.h1 
        className="absolute left-1/2 tracking-tight text-[6vw] md:text-[4vw] z-20 text-[#99e6ff] top-1/2 -translate-x-1/2 -translate-y-2/3 font-['Founders_Grotesk_Light'] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        {title.split("").map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </motion.h1>

      {/* Image with Animation */}
      <motion.img
        className="w-full h-full object-cover rounded-xl hover:brightness-50"
        src={image}
        alt={title}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className='w-full relative md:top-[600px] top-[300px] md:h-[60vw] py-[4vw] bg-black'>
      {/* Section Title */}
      <div className='w-full px-[4vw] border-b-[1px] pb-[4vw] border-zinc-600'>
        <h1 className="text-[8vw] md:text-[4vw] font-['Neue_Montreal'] tracking-tight text-white">
          Featured Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="px-[4vw]">
        <div className="cards w-full flex gap-[2vw] mt-[2vw] relative z-10">
          
          {/* First Card */}
          <ProjectCard title="LFR" image={logo1} isInView={isInView} />

          {/* Second Card */}
          <ProjectCard title="ROVER" image={logo2} isInView={isInView} />
          
          {/* Repeated Cards */}
          <ProjectCard title="LFR" image={logo1} isInView={isInView} />
          <ProjectCard title="ROVER" image={logo2} isInView={isInView} />
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
