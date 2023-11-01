import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { useGetHotelServicesDataQuery } from "../../../redux/api/hotelVillageApi";
import { Link } from "react-router-dom";
import { GrMapLocation } from 'react-icons/gr';
import { Rating,ThinStar } from '@smastrom/react-rating'
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#FF4433',
  inactiveFillColor: '#FFF5EE'
}
import '@smastrom/react-rating/style.css'
const RoomBook = () => {
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
const {data:hotelServicesData} = useGetHotelServicesDataQuery()
const ourRooms = hotelServicesData?.filter(({category}) => category ==='Our Room');


    return (
        <div  className=" py-10 bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483]">
             <Slider {...settings}>
             {
                ourRooms?.map(({_id, name, image,description,  rating}) =>
                    <div data-aos="zoom-in-down" className="hover:shadow-[#f1f1f3ef]  shadow-lg md:w-[300px] h-[470px] border-2 hover:border-orange-600 hover:shadow-xl   rounded-2xl containWid p-2 md:ms-10 bg-white" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} key={_id}>
                   <Link className="" to='/'>
                   <img onClick={()=>openModal(name)} src={image} title={`Show ${name} Gallery`} alt={`${name}'Gallery'`} className=" w-full h-[200px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/></Link>
                   
                   <h3 className="text-center text-2xl text-orange-600 mb-4">{name}</h3>
                  <p >{description}</p>
                  <p className=" font-thin flex justify-start items-center gap-3 my-2"><GrMapLocation className=" text-orange-900 "/>Air Port Dhaka, Bangladesh</p>
                  <div className="flex justify-start gap-6 items-center ">


                  <Rating style={{ maxWidth: 120 }} itemStyles={myStyles} value={rating} readOnly />
                  <p >reviews &#40;1411&#41;</p>
                  </div>
<di className=" flex justify-center">

                  <button className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >Check Ability</button>
</di>
               </div>
               )
            }
          </Slider>
            
        </div>
    );
};

export default RoomBook;