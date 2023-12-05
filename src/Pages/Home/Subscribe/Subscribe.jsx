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
     url('https://media.radissonhotels.net/image/radisson-blu-royal-hotel-bergen/meeting-room/16256-113899-f62715896_3xl.jpg?impolicy=Banner')`}} className="bg-cover bg-no-repeat  py-10">
    <div className="flex justify-evenly items-center  " >
   <div className=" mb-10 md:mb-0 " data-aos="fade-left">
    <h4 className="text-white uppercase text-4xl bebasNeue font-thin ms-20 md:ms-0">Our  <br /> PhotoGraphy </h4>
    <Link to='/photoGraphy'>
   <h2 className="text-5xl font-bold bebasNeue uppercase pt-3 text-orange-700 cursor-pointer ms-20 md:ms-0">Show</h2>
    </Link>
   </div>
   <div className=""  data-aos="fade-right">
   <Link to='/photoGraphy' > <img className=" border-4 border-orange-700 rounded-lg" src="https://media.istockphoto.com/id/628389442/photo/dslr-camera.jpg?s=170667a&w=0&k=20&c=h95gGbHjG8gvb-6769jiBxOJwiOUgEZkSnly9rJr4PA=" alt="" />
   </Link>
   </div>
</div>
</div>

    );
};

export default Subscribe;