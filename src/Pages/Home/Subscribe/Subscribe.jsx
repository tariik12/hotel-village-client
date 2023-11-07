import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect,  } from "react";
import { Link } from 'react-router-dom';

const Subscribe = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return ( <div style={{backgroundImage:
    `linear-gradient(to top, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
     url('https://media.radissonhotels.net/image/radisson-blu-royal-hotel-bergen/meeting-room/16256-113899-f62715896_3xl.jpg?impolicy=Banner')`}} className="bg-cover bg-no-repeat border mb-7">
    <div className="grid md:grid-cols-2 grid-cols-1   md:ps-80 pt-28 pb-28 pe-40 " >
   <div className=" mb-10 md:mb-0 " data-aos="fade-left">
    <h4 className="text-white uppercase text-4xl bebasNeue font-thin ms-20 md:ms-0">Our  <br /> PhotoGraphy </h4>
    <Link to='/photoGraphy'>
   <h2 className="text-5xl font-bold bebasNeue uppercase pt-3 text-orange-700 cursor-pointer ms-20 md:ms-0">Show</h2>
    </Link>
   </div>
   <div className="ms-32 md:ms-0 hover:border-orange-600 hover:border-2 rounded-xl "  data-aos="fade-right">
   <Link to='/photoGraphy' className=''> <img src="https://i.ibb.co/HrH5ztG/image-183.png" alt="" /></Link>
   </div>
</div>
</div>
//         <div>
//             <div className=' mt-10 md:flex justify-evenly py-24 bg-cover' style={{backgroundImage:'url()'}}>
// <div className='  bg-slate-600 flex items-center gap-6 p-10 rounded-md'>
//     <h1 className='w-full text-orange-500'>IF You Want to Subscribe</h1>
//     <input type="text" name="" id="" placeholder='give your email' className='w-full p-2' />
// </div>
// <div className=' bg-slate-600 flex items-center gap-6 p-10 rounded-md mt-10'>
//     <h1 className='w-full text-orange-500'>IF You Want to Subscribe</h1>
//     <input type="text" name="" id="" placeholder='give your email' className='w-full p-2' />
// </div>

//         </div>
//         </div>
    );
};

export default Subscribe;