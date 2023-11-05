
import { useGetHotelServicesDataQuery } from "../../../redux/api/hotelVillageApi";

import ManageFoodCard from "../../../Components/AddProduts/ManageFoodCard";

const ManageProduct = () => {

    const {data:manageAllData} = useGetHotelServicesDataQuery()
    
    const manageFood = manageAllData?.filter(({category}) =>category === "Well Food")
    const manageRoom = manageAllData?.filter(({category}) =>category === "Our Room")
    const manageSpa = manageAllData?.filter(({category}) =>category === "Spa")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 overflow-hidden">
            {
               manageFood?.map((food) =><ManageFoodCard food={food} key={food._id}></ManageFoodCard>
               
               )
            }
        </div>
    );
};

export default ManageProduct;