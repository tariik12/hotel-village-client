
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect,  } from "react";
import { useGetHotelServicesDataQuery } from "../../../redux/api/hotelVillageApi";
import ShowRoomsModal from "../../../Components/ShowRoomsModal/ShowRoomsModal";
const RoomBook = () => {
        useEffect(() => {
            AOS.init();
          }, []);
    
const {data:hotelServicesData} = useGetHotelServicesDataQuery()
const ourRooms = hotelServicesData?.filter(({category}) => category ==='Our Room');

    return (
        <div  className=" py-10 bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483]">
           
        
              <ShowRoomsModal ourRooms={ourRooms}></ShowRoomsModal>
        
        </div>
    );
};

export default RoomBook;