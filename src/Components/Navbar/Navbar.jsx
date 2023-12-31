import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { logout } from '../../redux/user/userSlice';
import toast from 'react-hot-toast';
import auth from '../../../firebase.config';


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const {name,email, photo} = useSelector((state) =>state.userSlice);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const activeRoute = location.pathname;
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

  const isRouteActive = (route) => {
    return activeRoute === route ? 'active-link' : '';
  };
  const nabLinks = (

    <>
      
        <Link  to='/' className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/')}`}
               >
                Home</Link>
        <Link  to='/allFoods' className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/allFoods')}`}
                >
                Food</Link>
        <Link  to='/allRooms' className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/allRooms')}`}  >
               Room</Link>
        <Link  to='/allSpas' className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/allSpas')}`} >
              Spa</Link>
    </>
  );
  return (
   <div className='fixed z-30 w-full top-0' >
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
    <Link className='font-boldb  ' to='/'>
    <motion.span style={{
                
              }}
             whileHover={{  scale: 1.1 }}  className="md:text-3xl text-white border-white    font-mono border-b-0 hover:border-b-2  md:ms-10 hover:text-[#ff4500] w-full uppercase">
        Vibrant Vineyard <span className="text-[#ff4500] hover:text-white ">Villas</span>
      </motion.span>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 gap-4">
    {nabLinks}
    </ul>
  </div>
  <div className="navbar-end me-6 ">
  <div className="dropdown dropdown-end p-1  rounded-full">
                {email ? (
                  <>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full ">
                        <img src={photo} title={name} />
                      </div>
                    </label>
                  </>
                ) : (
                  <>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full border-2 z-50">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbm4AFxi4zALrc_0Rv-m0yH2o0TrL3yuG09tTBAno&s" />
                      </div>
                    </label>
                  </>
                )}

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8] rounded-box w-52"
                >
                  {email ? (
                    <>
                      <Link
                        to="/profile"
                        className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/profile')}`} 
                      >
                        Profile
                      </Link>
                      <Link
                        to="/dashboardLayout"
                        className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout')}`} 
                      >
                        Dashboard
                      </Link>
                      <Link
                       onClick={handleLogout}
                       className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/login')}`} 
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className={`nav-link md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/login')}`} 
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
