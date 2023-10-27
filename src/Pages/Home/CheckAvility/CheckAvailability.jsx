import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const CheckAvailability = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className=" bg-fixed mt-5 bg-cover bg-no-repeat py-20  " style={{backgroundImage:`url(https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/exterior/16256-113891-f63612886_4k.jpg?impolicy=GalleryLightboxFullscreen)`} } >
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="  flex md:flex-row flex-col md:justify-evenly py-10 items-center text-white bg-[#2b252529] hover:bg-orange-700  w-3/4  rounded-2xl mx-auto">
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
    );
};

export default CheckAvailability;