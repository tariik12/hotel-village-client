// import { TypeAnimation } from 'react-type-animation';
import banner from '/banner1.mp4'
import { useState } from 'react';
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
const Banner = () => {
    const [textColor, setTextColor] = useState('yellow');

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
           <video src={banner} autoPlay muted loop  width='100%' className='w-300px' />

    
   <div className='hidden md:block'>
   <motion.h3
                initial={{ x: -500 }}
                animate={{ x:0 }}
                whileHover={{  scale: 0.8 }}
                transition={{
                    duration: "2",
                    delay: "1"
                }} className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 hover:bg-[#1e1a1ab5] p-4 rounded-md'
                data-aos="zoom-in">
                <h3 className=" text-3xl text-white uppercase hover:border-b-4 border-orange-700 py-4 t">Hey There Welcome To The Hotel <span className='text-orange-700'> Village</span> <br /> <span>
                
                  </span></h3>

                  <motion.h3 style={{
                
              }}
               className="md:text-2xl text-white text-center  font-mono hover:border-b-4 border-orange-600 ">
       Hotline :<span className="text-orange-600 capitalize">+880179542</span>
      </motion.h3>
            </motion.h3>
   </div>

        </div>
    );
};

export default Banner;