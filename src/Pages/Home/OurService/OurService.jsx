
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect} from "react";
const ourServices = [
    {
        title: 'Swimming Pool',
        image: 'https://t4.ftcdn.net/jpg/04/23/46/73/360_F_423467345_2pTv76ndux2tP2KYBx1nUqqrWCzbNlAF.jpg',
        description: 'Enjoy a relaxing swim in our spacious swimming pool and take a break from the hustle and bustle of daily life.'
    },
    {
        title: 'Sustainable Stays',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471041195.jpg?k=a29952222447cca58623f4220ecf3dba30a611d0e94e8b732a44a64a1cc5a56a&o=&hp=1',
        description: 'Experience eco-friendly and sustainable stays with our commitment to reducing our environmental impact.'
    },
    {
        title: 'Airport shuttle',
        image: 'https://images-platform.99static.com//MfPs-_jyDlnbiLPd9Pi-X8u00NI=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/82/82285/attachment_82285456',
        description: 'We provide convenient airport shuttle services to make your arrival and departure hassle-free.'
    },
    {
        title: 'Breakfast buffet',
        image: 'https://static.vecteezy.com/system/resources/previews/002/620/792/non_2x/chef-kitchen-restaurant-catering-food-silhouette-style-icon-free-vector.jpg',
        description: 'Start your day with a delicious breakfast buffet featuring a variety of options to suit your taste.'
    },
    {
        title: 'Charging Stations',
        image: 'https://chargetech.com/cdn/shop/articles/GettyImages-1249775796_800x800.jpg?v=1687397391',
        description: 'Charge your electric vehicle with ease at our EV charging stations for a greener and more sustainable travel experience.'
    },
    {
        title: 'Concierge service',
        image: 'https://images-platform.99static.com//_EK8as5OFn27ZV60sTskHEHzTFE=/0x0:2001x2001/fit-in/590x590/99designs-contests-attachments/61/61539/attachment_61539836',
        description: 'Our dedicated concierge service is here to assist you with all your needs and make your stay as comfortable as possible.'
    }
];


const OurService = () => {

    useEffect(() => {
        AOS.init();
    },[] );
    return (
        <div className=''>
    <div className='md:flex gap-3 md:justify-evenly'>
        {
            ourServices.map(({title, image, description}) => (
                <div key={image} className='relative p-10 bg-white rounded-md shadow-lg mt-10 hover:shadow-xl w-[250px] mx-auto'  data-aos="flip-left" data-aos-duration="2000">
                    <img className='w-full' src={image} alt={title} />
                    <div className='opacity-0 hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center  hover:bg-gradient-to-t hover:from-[#f1f1f3cf] hover:via-[#228eac97] hover:to-[#f7f4f4b8] text-white p-2 border-2 hover:border-orange-700 hover:rounded-md'>
                        <h2 className='text-xl font-bold text-orange-700 '>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            ))
        }
    </div>
</div>

    );
};

export default OurService;