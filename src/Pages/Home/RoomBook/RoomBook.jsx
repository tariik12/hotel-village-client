

import { useGetHotelServicesDataQuery } from "../../../redux/api/hotelVillageApi";
import ShowRoomsModal from "../../../Components/ShowRoomsModal/ShowRoomsModal";
import Header from "../../../Components/Header/Header";
const RoomBook = () => {

    
const {data:hotelServicesData} = useGetHotelServicesDataQuery()
const ourRooms = hotelServicesData?.filter(({category}) => category ==='Our Room');

    return (
        <div  className=" pb-10 bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483]">
           <Header header='Our Room'></Header>
        
              <ShowRoomsModal ourRooms={ourRooms}></ShowRoomsModal>
        
        </div>
    );
};

export default RoomBook;