import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 const roomBooks =[
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'For added space, choose our Deluxe Room with free Wi-Fi and an in-room work desk.'
    },
    {
        Category:'Suite',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416908_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:"For an extended stay or for extra space, choose one of our Suites featuring a separate living area."
    },
    {
        Category:'Superior Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612888_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'Unwind in style in our Superior Rooms and enjoy plush bedding, free Wi-Fi, and a smart TV.'
    },
    {
        Category:'Business Class Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416900_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'Perfect for business and leisure travelers, our 200 hotel rooms and suites feature.'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416902_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416906_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416904_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612800_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416994_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
];
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { useGetHotelServicesDataQuery } from "../../../redux/api/hotelVillageApi";
import { Link } from "react-router-dom";
const RoomBook = () => {
        useEffect(() => {
            AOS.init();
          }, [])
    const settings = {
       autoplay:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        className:'',
         responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
const {data:hotelServicesData} = useGetHotelServicesDataQuery()
const ourRooms = hotelServicesData?.filter(({category}) => category ==='Our Room')
    return (
        <div  className="mt-11">
             <Slider {...settings}>
             {
                ourRooms?.map(({_id, name, image,description}) =>
                    <div data-aos="zoom-in-down" className="md:w-[300px] border-2 hover:border-orange-600 hover:shadow-xl   rounded-2xl containWid p-2" key={_id}>
                   <Link className="" to='/'>
                   <img onClick={()=>openModal(name)} src={image} title={`Show ${name} Gallery`} alt={`${name}'Gallery'`} className=" w-full h-[200px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/></Link>
                   
                   <h3 className="text-center text-2xl text-orange-600">{name}</h3>
                  <p >{description}</p>
               </div>
               )
            }
          </Slider>
            
        </div>
    );
};

export default RoomBook;