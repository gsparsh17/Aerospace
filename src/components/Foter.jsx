import React from 'react';

function Footer() {
  return (
    <div className='relative md:top-[500px] top-[300px] w-full h-auto bg-black text-white'>
      <div className='flex flex-col md:flex-row items-start gap-[2vw] p-[5vw] md:py-[4vw] md:px-[8vw]'>
        
        {/* About Us Section */}
        <div className='w-full md:w-1/2 mb-[6vw] md:mb-0 animate-fade-in-up'>
          <div className='card rounded-xl w-full h-full border-2 border-[#99e6ff] p-[3vw] md:p-[2vw] shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl'>
            <h2 className='text-[10vw] md:text-[3vw] font-semibold text-[#99e6ff] mb-[3vw] md:mb-[1.5vw] animate-fade-in-down'>About Us</h2>
            <p className='text-[5vw] md:text-[1.5vw] text-[#99e6ff] leading-relaxed'>
              We bring you the latest in sports, technology, and innovation. Our platform provides up-to-date news, reviews, and insights on trending topics. Stay connected with us for engaging and reliable content.
            </p>
          </div>
        </div>

        {/* Contact and Services Section */}
        <div className='w-full md:w-1/2 flex flex-col gap-[3vw] md:flex-row'>

          {/* Contact Us */}
          <div className='w-full md:w-1/2 animate-fade-in-up delay-200'>
            <div className='card rounded-xl w-full h-full border-2 border-white p-[3vw] md:p-[2vw] shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl'>
              <h3 className='text-[7vw] md:text-[2.5vw] font-semibold text-white mb-[2vw] md:mb-[1.5vw]'>Contact Us</h3>
              <ul className='text-[4.5vw] md:text-[1.3vw] text-gray-500 leading-relaxed'>
                <li>Email: <a href='mailto:contact@yourwebsite.com' className='text-[#99e6ff] underline hover:text-blue-400 transition-colors'>contact@yourwebsite.com</a></li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Main Street, City, Country</li>
              </ul>
              <div className='mt-[2vw]'>
                <a href='mailto:contact@yourwebsite.com' className='text-[#99e6ff] underline text-[4.5vw] md:text-[1.3vw] hover:text-blue-400 transition-colors'>
                  Send us an email
                </a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className='w-full md:w-1/2 animate-fade-in-up delay-400'>
            <div className='card rounded-xl w-full h-full border-2 border-white p-[3vw] md:p-[2vw] shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl'>
              <h3 className='text-[7vw] md:text-[2.5vw] font-semibold text-white mb-[2vw] md:mb-[1.5vw]'>Our Services</h3>
              <ul className='text-[4.5vw] md:text-[1.3vw] text-gray-500 leading-relaxed'>
                <li>News & Articles</li>
                <li>Tech Reviews</li>
                <li>Event Coverage</li>
                <li>Community Forums</li>
                <li>Newsletter Subscription</li>
              </ul>
              <div className='mt-[2vw]'>
                <a href='#services' className='text-[#99e6ff] underline text-[4.5vw] md:text-[1.3vw] hover:text-blue-400 transition-colors'>
                  Learn more about our services
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className='w-full text-center py-[4vw] bg-zinc-800 animate-fade-in-up delay-600'>
        <p className='text-[4vw] md:text-[1.5vw] text-gray-400'>© 2024 Your Company. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
