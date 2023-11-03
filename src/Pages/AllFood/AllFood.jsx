
import { useGetHotelServicesDataQuery } from "../../redux/api/hotelVillageApi";

import FoodCard from "./FoodCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AllFood = () => {
    const {data:hotelServiceData } = useGetHotelServicesDataQuery()
    const allFoods = hotelServiceData?.filter(({category}) =>category === "Our Room")
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
              allFoods?.map((food) =><div key={food._id}>
              <img className="w-full h-[250px] md:h-[450px]" src={food.image} alt="" />
           </div>
             
          
                   
              )
            }
        
      </Slider>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
   {
                allFoods?.map((food) =><FoodCard food={food}></FoodCard>
                   
               )
            }
        </div>
        </div>
    );
};

export default AllFood;