import React, { useEffect, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { logout } from '../../redux/user/userSlice';
import toast from 'react-hot-toast';
import auth from '../../../firebase.config';
const nabLinks = (

  <>
    
      <Link  to='/'>
             <span style={{
                
              }}
             whileHover={{  scale: 1.1 }} className="md:text-xl text-white  border-b-0 hover:border-b-4 border-orange-600">Home</span></Link>
      <Link  to='/allFoods'>
             <span style={{
                
              }}
             whileHover={{  scale: 1.1 }} className="md:text-xl text-white  border-b-0 hover:border-b-4 border-orange-600">Food</span></Link>
      <Link  to='/allRooms'>
             <span style={{
                
              }}
             whileHover={{  scale: 1.1 }} className="md:text-xl text-white  border-b-0 hover:border-b-4 border-orange-600">Room</span></Link>
      <Link  to='/allSpas'>
             <span style={{
                
              }}
             whileHover={{  scale: 1.1 }} className="md:text-xl text-white  border-b-0 hover:border-b-4 border-orange-600">Spa</span></Link>
  </>
);

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () =>{
    signOut(auth);
    dispatch(logout())
    navigate('/')
    toast.success("logout successful");
  }
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
   <div className='fixed z-50 w-full top-0' >
<div className={`navbar ${
      scrolling ? 'bg-black text-orange-400 font-bold' : 'bg-[#2b252529] text-white'
    }`}>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" lg:hidden bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow  rounded-box  text-black bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8] w-40">
      {nabLinks}
      </ul>
    </div>
    <Link className=' ' to='/'>
    <motion.span style={{
                
              }}
             whileHover={{  scale: 1.1 }}  className="md:text-3xl text-white border-white    font-mono border-b-0 hover:border-b-2  md:ms-10 hover:text-orange-600 w-full ">
        Vibrant Vineyard <span className="text-orange-600 hover:text-white capitalize">Villas</span>
      </motion.span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 gap-4">
    {nabLinks}
   
    </ul>
  </div>
  <div className="navbar-end me-6 ">
  <div className="dropdown dropdown-end p-1 bg-orange-600 rounded-full">
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
                      <div className="w-10 rounded-full border-white border-2 z-20">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbm4AFxi4zALrc_0Rv-m0yH2o0TrL3yuG09tTBAno&s" />
                      </div>
                    </label>
                  </>
                )}

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8] rounded-box w-52"
                >
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        className="px-4 py-3 transition font-semibold"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/dashboardLayout"
                        className="px-4 py-3 transition font-semibold"
                      >
                        Dashboard
                      </Link>
                      <div
                       onClick={handleLogout}
                        className="px-4 py-3 transition font-semibold cursor-pointer duration-1000 "
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 transition font-semibold"
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
