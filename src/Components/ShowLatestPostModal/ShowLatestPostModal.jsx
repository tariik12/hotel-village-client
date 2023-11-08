import { useState } from "react";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import Modal from "../Ui/Modal";
import { FaWifi } from "react-icons/fa";
import { GiBarbedNails, GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";





const ShowLatestModal = ({latestPosts}) => {


let [isOpen, setIsOpen] = useState(false);
const [selectedService, setSelectedService] = useState(null);


function closeModal() {
setIsOpen(false);
setSelectedService(null);
}

function openModal(name) {
setIsOpen(true);
setSelectedService(name);  
}
    return (
        <div>
        {latestPosts
          ?.slice(5,20) // Create a shallow copy of the array to avoid mutating the original
          .reverse() // Reverse the order of the copied array
          .map(({ _id,image, name, description,category  }, reversedIndex) => (
            <div
              data-aos={reversedIndex % 2 === 0 ? 'fade-left' : 'fade-right'}
              className={`border-2 md:border-0 hover:border-orange-700 md:flex bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483] hover:bg-gradient-to-t hover:from-[#f1f1f3cf] hover:via-[#228eac97] hover:to-[#f7f4f4b8] w-full justify-between items-center md:my-2 my-4 p-3 md:p-0 rounded-md ${
                reversedIndex % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              key={_id }
            >
                <Link>
              <img onClick={()=>openModal(category)} className="md:w-[600px] h-[300px] md:mx-0 mx-auto" src={image} alt="" />
                </Link>
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
  
              {
                category === 'Well Food'?<><button className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >Order Now</button></>: category===" Our Room"?<><button className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >Book Now</button></>:<><button className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >Take Spa</button></>
              }
              
              </div>
            </div>
          ))}
          <Modal isOpen={isOpen} closeModal={closeModal} title={selectedService}>
        {selectedService === "Well Food" && (
          <PhotoSlider data={latestPosts?.filter((rooms) => rooms.category  === "Well Food")} />
        )}
        {selectedService === "Spa" && (
          <PhotoSlider data={latestPosts?.filter((rooms) => rooms.category === "Spa")} />
        )}
        {selectedService === "Our Room" && (
          <PhotoSlider data={latestPosts?.filter((rooms) => rooms.category === "Our Room")} />
        )}
      </Modal>
      </div>
    );
};

  

export default ShowLatestModal;