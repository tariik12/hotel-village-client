import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const nabLinks = (
  <>
    
      <Link style={{
                
              }}
             whileHover={{  scale: 1.1 }} className='hover:text-orange-600 border-b-0 hover:border-b-2 hover:font-bold' href='/'>Home</Link>
      <Link style={{
                
              }}
             whileHover={{  scale: 1.1 }} className='hover:text-orange-600 border-b-0 hover:border-b-2 hover:font-bold' href='/'>Room</Link>
      <Link style={{
                
              }}
             whileHover={{  scale: 1.1 }} className='hover:text-orange-600 border-b-0 hover:border-b-2 hover:font-bold' href='/'>Featurce</Link>
   

    
    
  
  </>
);

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
   <div className='fixed z-10 md:w-full w-[390px] top-0' >
<div className={`navbar ${
      scrolling ? 'bg-black text-orange-400 font-bold' : 'bg-[#2b252529] text-white'
    }`}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 text-black">
      {nabLinks}
      </ul>
    </div>
    <motion.h3 style={{
                
                }}
               whileHover={{  scale: 1.1 }}  className="md:text-2xl text-white   font-mono border-b-0 hover:border-b-2 md:ms-10 ">
          Hotel <span className="text-orange-600 capitalize">VILLAGE</span>
        </motion.h3>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 gap-4">
    {nabLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <motion.h3 style={{
                
              }}
             whileHover={{  scale: 1.1 }}  className="md:text-2xl text-white  font-mono border-b-0 hover:border-b-2 md:me-10 ">
       Hotline :<span className="text-orange-600 capitalize">+880179542</span>
      </motion.h3>
  </div>
</div>
   </div>

   
  );
};

export default Navbar;
