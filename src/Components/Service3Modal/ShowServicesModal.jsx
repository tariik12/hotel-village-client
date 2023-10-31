import { Link } from "react-router-dom";
import Modal from "../Ui/Modal";
import { useState } from "react";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import { useGetLatestProductsQuery } from "../../redux/api/hotelVillageApi";
const ShowServicesModal = ({service3}) => {
  const {data:roomBooks} = useGetLatestProductsQuery()
  const [selectedService, setSelectedService] = useState(null);
     let [isOpen, setIsOpen] = useState(true)

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
       <div className="md:flex md:justify-evenly md:gap-4 md:-mt-24">
       
       {
               service3.map(({index,name,image,text}) =><div data-aos="zoom-in-down" className="md:w-[300px] hover:w-[305px] border hover:border-orange-600 hover:shadow-xl p-2 hover:p-1 hover:rounded-2xl mx-auto" key={index}>
                   <Link className="" to='/'>
                   <img onClick={()=>openModal(name)} src={image} title={`Show ${name} Gallery`} alt={`${name}'Gallery'`} className=" w-full h-[200px] hover:h-[195px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/></Link>
                   
                   <h3 className="text-center text-2xl">{name}</h3>
                  
                   <details>
              <summary className="relative">
                {text.slice(0, 74)}... Read More
              </summary>
              <p className="absolute mb-3 text-black bg-white p-2 border-orange-500 rounded-md">
                {text}
              </p>
            </details>
                 
               </div>)
           }
     </div>
     <Modal isOpen={isOpen} closeModal={closeModal}>
        {selectedService === "Well Food" && (
          <PhotoSlider data={roomBooks.filter((rooms) => rooms.Category  === "Deluxe Room")} />
        )}
        {selectedService === "Spa" && (
          <PhotoSlider data={roomBooks.filter((rooms) => rooms.Category === "Suite")} />
        )}
        {selectedService === "Our Room" && (
          <PhotoSlider data={roomBooks.filter((rooms) => rooms.Category === "Business Class Room")} />
        )}
      </Modal>
    </div>
  );
};

export default ShowServicesModal;