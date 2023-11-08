import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Header from '../../../Components/Header/Header';

const CheckAvailability = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>

        <div className=" bg-fixed bg-cover bg-no-repeat py-28  " style={{backgroundImage:`url(https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/exterior/16256-113891-f63612886_4k.jpg?impolicy=GalleryLightboxFullscreen)`} } >
            <Header header='Check Availability'></Header>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="  flex md:flex-row flex-col md:justify-evenly py-10 items-center text-white bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483]   hover:bg-gradient-to-t hover:from-[#f1f1f3cf] hover:via-[#228eac97] hover:to-[#f7f4f4b8]  w-3/4  rounded-2xl mx-auto border-2 hover:border-orange-700">
                <div>
                    <h1>Check In</h1>
                    <input type="date"   className="rounded-md"/>
                </div>
                <div>
                    <h1>Check Out</h1>
                    <input type="date" className="rounded-md"/>
                </div>
                <div>
                    <h1>Occupancy</h1>
                    <input type="number" className="rounded-md"/>
                </div>
                <div>
                    <h1>Selected Rate</h1>
                    <input type="number" className="rounded-md"/>
                </div>
                <div>
                   <button className="hover:bg-white hover:text-orange-600 p-1 rounded-md mt-2">Search</button>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default CheckAvailability;