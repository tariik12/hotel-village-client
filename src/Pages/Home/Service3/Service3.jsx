
const service3 =[
    {
        name:'Well Food',
        image:'https://media.radissonhotels.net/image/radisson-blu-brand/breakfast-area/16256-116722-f73996491_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=384',
        text:'Whether you are searching for familiar cuisine or hoping to dig into the flavors of Bangladesh after a day of sightseeing, the Hotel Village Water Garden has just the meal for you. You can enjoy fresh, wholesome Bangladeshi cuisine at Sublime, a restaurant perfect for a romantic evening or an important client meeting. Or, visit the Water Garden Brasserie for breakfast, lunch, or dinner and choose from the international buffet and cook-to-order stations. For a modern take on Asian cuisine, make your way to Spice & Rice, and if you crave a snack or delicious dessert, visit our deli café, Chit Chat.'

    },
    {
        name:'Spa',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/spa/16256-113891-f63612808_3xl.jpg?impolicy=GalleryLightboxFullscreen',
        text:'Relax your body and restore your mind and spirits at Spa Esc. Enjoy soothing massages, fresh manicures and pedicures from the beauty salon, or get new highlights at our hair salon. Offering a wide range of wellness therapies and beauty treatments, Spa Esc offers everything you need for a rejuvenating spa experience'

    },
    {
        name:'Our Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen',
        text:'Sleek design, modern furnishings, and bright décor combine to create a memorable stay at the Radisson Blu Dhaka Water Garden. Each of our 200 rooms and suites offers incredible views of the city, the sparkling hotel pool, and lush gardens. Enjoy a comfortable and convenient stay with our thoughtful in-room services including electronic safes, coffee and tea facilities, individual climate control, and free Wi-Fi.'

    },

]
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect} from "react";
import ShowServicesModal from "../../../Components/Service3Modal/ShowServicesModal";

const Service3 = () => {

useEffect(() => {
    AOS.init();
},[] );

    return (
        <div className="">
            <ShowServicesModal service3={service3}></ShowServicesModal>
            
            
        </div>
    );
};

export default Service3;