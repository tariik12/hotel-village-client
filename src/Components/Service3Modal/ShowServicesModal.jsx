import { Link } from "react-router-dom";
import Modal from "../Ui/Modal";
import { useState } from "react";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import { useGetHotelServicesDataQuery } from "../../redux/api/hotelVillageApi";






const ShowServicesModal = ({service3}) => {
  const {data:hotelServicesData} = useGetHotelServicesDataQuery()
  const [selectedService, setSelectedService] = useState(null);
     let [isOpen, setIsOpen] = useState(false);



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
               service3?.map(({index,name,image,text}) =><div data-aos="zoom-in-down" className="md:w-[300px] hover:w-[305px] border hover:border-orange-600 hover:shadow-xl p-2 hover:p-1 hover:rounded-2xl mx-auto" key={index}>
                   <Link className="" to='/'>
                   <img onClick={()=>openModal(name)} src={image} title={`Show ${name} Gallery`} alt={`${name}'Gallery'`} className=" w-full h-[200px] hover:h-[205px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/></Link>
                   
                   <h3 className="text-center text-2xl">{name}</h3>
                  <p >{text.slice(0, 74)} .</p>
               </div>)
           }
     </div>

     
     <Modal isOpen={isOpen} closeModal={closeModal} title={selectedService}>
        {selectedService === "Well Food" && (
          <PhotoSlider data={hotelServicesData?.filter((rooms) => rooms.category  === "Well Food")} />
        )}
        {selectedService === "Spa" && (
          <PhotoSlider data={hotelServicesData?.filter((rooms) => rooms.category === "Spa")} />
        )}
        {selectedService === "Our Room" && (
          <PhotoSlider data={hotelServicesData?.filter((rooms) => rooms.category === "Our Room")} />
        )}
      </Modal>
    </div>
  );
};

export default ShowServicesModal;