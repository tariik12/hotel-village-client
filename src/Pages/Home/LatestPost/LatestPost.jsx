
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { useGetHotelServicesDataQuery } from '../../../redux/api/hotelVillageApi';
import ShowLatestModal from '../../../Components/ShowLatestPostModal/ShowLatestPostModal';

const LatestPost = () => {
    const {data:latestPosts } = useGetHotelServicesDataQuery()
    useEffect(() => {
        AOS.init();
      }, [])
   return (
    <div className="md:flex justify-around mt-10  ">
   <ShowLatestModal latestPosts={latestPosts}></ShowLatestModal>
      
  </div>
  
)
};

export default LatestPost;