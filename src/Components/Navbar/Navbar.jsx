import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
const nabLinks = (

  <>
    
      <Link  href='/'>
             <span style={{
                
              }}
             whileHover={{  scale: 1.1 }} className="md:text-xl text-white  border-b-0 hover:border-b-4 border-orange-600">Home</span></Link>
      <Link  href='/'>
             <span style={{
                
              }}
             whileHover={{  scale: 1.1 }} className="md:text-xl text-white  border-b-0 hover:border-b-4 border-orange-600">Feature</span></Link>
      <Link  href='/'>
             <span style={{
                
              }}
             whileHover={{  scale: 1.1 }} className="md:text-xl text-white  border-b-0 hover:border-b-4 border-orange-600">Room</span></Link>
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

  const user = true;
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
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow  rounded-box w-52 text-black bg-orange-6 00">
      {nabLinks}
      </ul>
    </div>
    <motion.h3 style={{
                
                }}
               whileHover={{  scale: 1.1 }}  className="md:text-2xl text-white border-white    font-mono border-b-0 hover:border-b-2 md:ms-10 hover:text-orange-600 ">
          HOTEL <span className="text-orange-600 hover:text-white capitalize">VILLAGE</span>
        </motion.h3>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 gap-4">
    {nabLinks}
   
    </ul>
  </div>
  <div className="navbar-end me-6">
  <div className="dropdown dropdown-end">
                {user ? (
                  <>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL} title={user?.displayName} />
                      </div>
                    </label>
                  </>
                ) : (
                  <>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full z-20">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbm4AFxi4zALrc_0Rv-m0yH2o0TrL3yuG09tTBAno&s" />
                      </div>
                    </label>
                  </>
                )}

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52"
                >
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/setting"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Settings & Privacy
                      </Link>
                      <div
                        onClick={() => {
                          logOut();
                          toast.success("logout successful");
                          navigate("/login");
                        }}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer duration-1000 "
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </ul>
              </div>
  </div>

  
</div>
   </div>

   
  );
};

export default Navbar;
