// import { TypeAnimation } from 'react-type-animation';
// import banner from '/banner1.mp4'
import banner from '/banner.mp4'

import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
const Banner = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
           <video src={banner} autoPlay muted loop  width='100%' className='w-300px' />

    
           <div className='hidden lg:block text-center'> {/* Center the content horizontally */}
   <motion.h3
     initial={{ x: -1000 }}
     animate={{ x:0 }}
     whileHover={{ scale: 0.8 }}
     transition={{
       duration: "2",
       delay: "1"
     }}
     className='absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-[#f1f1f3cf] via-[#2292b097] to-[#f7f4f4b8]  p-4 rounded-md hover:bg-gradient-to-t hover:from-[#f1f1f3c0] hover:via-[#21c4f197] hover:to-[#f7f4f4c1]'
     data-aos="zoom-in"
      /* Shift the entire element to the right */
   >
     <h3 className="md:text-5xl text-xl text-white uppercase hover:border-b-4 border-[#ff4500] py-4 text-left">Hey There, Welcome<br /> <span className='text-[#ff4500]  text-right'>  To The Hotel Village</span> <br /> <span></span></h3>
     <motion.h3 style={{}} className='text-white text-4xl uppercase'>
       Hotline :<span className="text-[#ff4500]  capitalize text-4xl">+880179542</span>
     </motion.h3>
   </motion.h3>
</div>


        </div>
    );
};

export default Banner;