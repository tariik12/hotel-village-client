
import { useGetHotelServicesDataQuery } from "../../redux/api/hotelVillageApi";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RoomCard from "./RoomCard";



const AllRoom = () => {
    const {data:hotelServiceData } = useGetHotelServicesDataQuery()
    console.log(hotelServiceData)
    const allRooms = hotelServiceData?.filter(({category}) =>category === "Our Room")
    const settings = {
        autoPlay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Slider {...settings} className="mb-10">
            {
              allRooms?.map((room) =><div key={room._id}>
              <img className="w-full h-[250px] md:h-[450px]" src={room.image} alt="" />
           </div>
             
          
                   
              )
            }
        
      </Slider>

        <div>
   
               <RoomCard allRooms={allRooms} ></RoomCard>
                   
               
            
        </div>
        </div>
    );
};

export default AllRoom;