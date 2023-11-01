

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect} from "react";
import ShowServicesModal from "../../../Components/Service3Modal/ShowServicesModal";
import { useGetServices3Query } from '../../../redux/api/hotelVillageApi';

const Service3 = () => {
const {data:service3} = useGetServices3Query()
useEffect(() => {
    AOS.init();
},[] );

    return (
        <div className="bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483] py-10 ">
            <ShowServicesModal service3={service3}></ShowServicesModal>
            
            
        </div>
    );
};

export default Service3;