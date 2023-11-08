
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { useGetHotelServicesDataQuery } from '../../../redux/api/hotelVillageApi';
import ShowLatestModal from '../../../Components/ShowLatestPostModal/ShowLatestPostModal';
import Header from '../../../Components/Header/Header';

const LatestPost = () => {
    const {data:latestPosts } = useGetHotelServicesDataQuery()
    useEffect(() => {
        AOS.init();
      }, [])
   return (
    <div>
      <Header header="Latest Post"></Header>
    <div className="md:flex justify-around   ">
   <ShowLatestModal latestPosts={latestPosts}></ShowLatestModal>
      
  </div>

    </div>
  
)
};

export default LatestPost;