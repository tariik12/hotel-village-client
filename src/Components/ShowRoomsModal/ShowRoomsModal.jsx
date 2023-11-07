import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect,  } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { GrMapLocation } from 'react-icons/gr';
import { Rating,ThinStar } from '@smastrom/react-rating'
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#FF4433',
  inactiveFillColor: '#FFF5EE'
}
import '@smastrom/react-rating/style.css'
import Modal from "../Ui/Modal";
import PhotoSlider from "../PhotoSlider/PhotoSlider";



const ShowRoomsModal = ({ourRooms}) => {
  useEffect(() => {
    AOS.init();
  }, []);
const settings = {
   autoplay:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className:'',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };
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
      <div >
<Slider {...settings}>
             {
                ourRooms?.map((room) =>
                    <div data-aos="zoom-in-down" data-aos-duration="2000" className="hover:shadow-[#f1f1f3ef]  shadow-lg md:w-[300px] h-[470px] border-2 hover:border-orange-600 hover:shadow-xl   rounded-2xl containWid p-2 md:ms-10 bg-white" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} key={room._id}>
                   <Link className="" to='/'>
                   <img onClick={()=>openModal(room.name)} src={room.image} title={`Show ${room.name} Gallery`} alt={`${room.name}'Gallery'`} className=" w-full h-[200px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/></Link>
                   
                   <h3 className="text-center text-2xl text-orange-600 mb-4">{room.name}</h3>
                  <p >{room.description}</p>
                  <p className=" font-thin flex justify-start items-center gap-3 my-2"><GrMapLocation className=" text-orange-900 "/>Air Port Dhaka, Bangladesh</p>
                  <div className="flex justify-start gap-6 items-center ">


                  <Rating style={{ maxWidth: 120 }} itemStyles={myStyles} value={room.rating} readOnly />
                  <p >reviews &#40;1411&#41;</p>
                  </div>
<div className=" flex justify-center">

                  <button className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >Check Ability</button>
</div>
               </div>
               )
            }
          </Slider>
          <Modal isOpen={isOpen} closeModal={closeModal} title={selectedService}>
  {selectedService && <PhotoSlider title={selectedService} data={ourRooms} />}
</Modal>
      </div>
    );
};

  

export default ShowRoomsModal;