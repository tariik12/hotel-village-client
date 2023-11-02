const roomBooks =[
    {
        shorting:1,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'For added space, choose our Deluxe Room with free Wi-Fi and an in-room work desk.'
    },
    {
        shorting:2,
        Category:'Suite',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416908_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:"For an extended stay or for extra space, choose one of our Suites featuring a separate living area."
    },
    {
        shorting:3,
        Category:'Superior Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612888_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'Unwind in style in our Superior Rooms and enjoy plush bedding, free Wi-Fi, and a smart TV.'
    },
    {
        shorting:4,
        Category:'Business Class Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416900_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'Perfect for business and leisure travelers, our 200 hotel rooms and suites feature.'
    },
    {
        shorting:5,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416902_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        shorting:6,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416906_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        shorting:7,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416904_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        shorting:8,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612800_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        shorting:9,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416994_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        shorting:10,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
]
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { useGetHotelServicesDataQuery } from '../../../redux/api/hotelVillageApi';
import { FaWifi } from 'react-icons/fa';
import {GiForkKnifeSpoon, GiBarbedNails } from 'react-icons/gi';

const LatestPost = () => {
    const {data:LatestPosts } = useGetHotelServicesDataQuery()
    useEffect(() => {
        AOS.init();
      }, [])
   return (
    <div className="md:flex justify-around mt-10 mx-4 ">
    <div>
      {LatestPosts
        ?.slice() // Create a shallow copy of the array to avoid mutating the original
        .reverse() // Reverse the order of the copied array
        .map(({ _id,image, name, description,  }, reversedIndex) => (
          <div
            data-aos={reversedIndex % 2 === 0 ? 'fade-left' : 'fade-right'}
            className={`md:flex bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483] hover:bg-gradient-to-t hover:from-[#f1f1f3cf] hover:via-[#228eac97] hover:to-[#f7f4f4b8] w-full justify-between items-center mt-3 ${
              reversedIndex % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            key={_id }
          >
            <img className="md:w-[600px] h-[300px]" src={image} alt="" />
            <div className='text-center' data-aos='zoom-in'>
            <h3 className="text-center text-2xl text-orange-600">{name}</h3>
            <div className='flex justify-center gap-4 mt-3'>
           < p className='bg-orange-500 p-2 rounded-xl shadow-md'>max. guests :
2 adults
bed </p>
<p className='bg-orange-500 p-2 rounded-xl shadow-md'>type : 2 double or 1 king</p>
            </div>
<div className='flex justify-center gap-6 mt-3 text-2xl'>
    <FaWifi/>
    <GiForkKnifeSpoon/>
    <GiBarbedNails/>
</div>
            <p className="px-5 mt-5 w-3/4 mx-auto"  >{description} </p>
            <div><button className='bg-slate-700 py-2 px-4 rounded-3xl text-white text-xs'> book Now</button></div>
            </div>
          </div>
        ))}
    </div>
      
  </div>
  
)
};

export default LatestPost;