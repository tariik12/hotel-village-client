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
               service3?.map(({_id,name,image,text}) =><div data-aos="zoom-in-down" className="md:w-[300px] border-2 hover:border-orange-600 hover:shadow-xl p-2  rounded-2xl mx-auto" key={_id}>
                   <Link className="" to='/'>
                   <img onClick={()=>openModal(name)} src={image} title={`Show ${name} Gallery`} alt={`${name}'Gallery'`} className=" w-full h-[200px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/></Link>
                   
                   <h3 className="text-center text-2xl text-orange-600">{name}</h3>
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