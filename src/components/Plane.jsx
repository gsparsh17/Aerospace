import React, { useEffect, useState } from 'react';
import logo1 from './runway.jpg';
import plane from './plane.png';
import './plane.css';

function Plane() {
  const [rotate, setRotate] = useState(0);
  const [delx, setDelx] = useState(0);
  const [dely, setDely] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltax = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      setDelx(deltax - 30);
      setDely(deltaY + 30);
      const angle = Math.atan2(deltaY, deltax) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='fixed w-full h-screen flex flex-col justify-center items-center bg-black'>
      {/* Title */}
      <div className='text-center'>
      <h1 className="relative z-50 md:top-[400px] text-[7vw] sm:text-[5vw] lg:text-[3vw] font-['Neue_Montreal'] tracking-tight text-white mb-[2vw] custom-shadow">
          Take Off Your First Flight Now!!
      </h1>


        {/* Background Image */}
        <img 
          className="overflow-hidden w-auto h-full sm:w-[60vw] lg:w-[100vw] shadow-2xl shadow-[#99e6ff] opacity-50 rounded-2xl mb-[2vw]" 
          src={logo1} 
          alt="runway"
        />

        {/* Register Button */}
        <button className="w-[40vw] sm:w-[20vw] relative md:bottom-[500px] lg:w-[10vw] text-[3vw] sm:text-[2vw] lg:text-[1.5vw] px-[2vw] sm:px-[1vw] py-[1vw] sm:py-[0.5vw] bg-black border border-[#99e6ff] rounded-full text-white hover:text-[#99e6ff] hover:bg-[#333]">
          Register
        </button>
      </div>

      {/* Moving Plane */}
      <div 
        style={{ transform: `translate(${delx}px, ${dely}px) rotate(${rotate}deg)` }} 
        className='plane absolute w-[12vw] sm:w-[8vw] lg:w-[5vw]'
      >
        <img src={plane} alt="plane" className='drop-shadow-2xl' />
      </div>
    </div>
  );
}

export default Plane;
