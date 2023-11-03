
import { useGetHotelServicesDataQuery } from "../../redux/api/hotelVillageApi";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SpaCard from "./SpaCard";

const AllSpa = () => {
    const {data:hotelServiceData } = useGetHotelServicesDataQuery()
    const allSpas = hotelServiceData?.filter(({category}) =>category === "Spa")
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
              allSpas?.map((spa) =><div key={spa._id}>
              <img className="w-full h-[250px] md:h-[450px]" src={spa.image} alt="" />
           </div>
             
          
                   
              )
            }
        
      </Slider>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
   {
                allSpas?.map((spa) =><SpaCard spa={spa}></SpaCard >
                   
               )
            }
        </div>
        </div>
    );
};

export default AllSpa;