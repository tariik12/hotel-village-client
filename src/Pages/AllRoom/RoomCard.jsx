import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import '@smastrom/react-rating/style.css'
import { FaWifi } from "react-icons/fa";
import { GiBarbedNails, GiForkKnifeSpoon } from "react-icons/gi";

const RoomCard = ({allRooms}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="md:flex justify-around pt-10 md:mx-4 ">
        <div>
          {allRooms
            ?.slice() // Create a shallow copy of the array to avoid mutating the original
            .reverse() // Reverse the order of the copied array
            .map(({ _id,image, name, description,  }, reversedIndex) => (
              <div
                data-aos={reversedIndex % 2 === 0 ? 'fade-left' : 'fade-right'}
                className={`border-2 md:border-0 hover:border-orange-700 md:flex bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483] hover:bg-gradient-to-t hover:from-[#f1f1f3cf] hover:via-[#228eac97] hover:to-[#f7f4f4b8] w-full justify-between items-center md:my-2 my-4 p-3 md:p-0 rounded-md ${
                  reversedIndex % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                key={_id }
              >
                <img className="md:w-[600px] h-[300px] md:mx-0 mx-auto" src={image} alt="" />
                <div className='text-center p-2' data-aos='zoom-in'>
                <h3 className="text-center text-2xl text-orange-600 ">{name}</h3>
                
    <div className='flex justify-center gap-6 mt-3 text-2xl'>
                
        <FaWifi/>
        <GiForkKnifeSpoon/>
        <GiBarbedNails/>
    </div>
    <div className='flex justify-center gap-4 mt-3 '>
               < p className=' p-2 rounded-xl shadow-md bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8]  text-white'>max. guests :
    2 adults type : 2 double or 1 king
    bed </p>
    
                </div>
                <p className="px-5 mt-5 md:w-3/4 mx-auto"  >{description} </p>
                <div><button className='bg-slate-700 py-2 px-4 rounded-3xl text-white text-xs'> book Now</button></div>
                </div>
              </div>
            ))}
        </div>
          
      </div>
    );
};

export default RoomCard;