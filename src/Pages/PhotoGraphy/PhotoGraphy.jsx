import Navbar from "../../Components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect,  } from "react";
const photography = [
    
    {
      name: 'Emily',
      image: 'https://tovaphotography.com/wp-content/uploads/2020/02/GrandBeachMiami003.jpg',
      address: 'Los Angeles, USA'
    },
    {
      name: 'Daniel',
      image: 'https://as2.ftcdn.net/v2/jpg/03/03/79/29/1000_F_303792962_TSN5rz5Yk9rrxX9NdT0duhK14cP7AF9U.jpg',
      address: 'Berlin, Germany'
    },
    {
      name: 'Sophia',
      image: 'https://as1.ftcdn.net/v2/jpg/04/22/29/14/1000_F_422291496_R0BrSpGBJlq8mTtuQbEos16hHcWT2tzJ.jpg',
      address: 'Tokyo, Japan'
    },
    {
      name: 'James',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/017/768/092/small_2x/little-cute-girl-play-with-father-at-the-pool-in-tropical-hotel-photo.jpg',
      address: 'Toronto, Canada'
    },
    {
      name: 'Ava',
      image: 'https://media.istockphoto.com/id/624570736/photo/father-and-baby-boy-at-niagara-falls.jpg?s=612x612&w=0&k=20&c=bvziYf11kC63N9hm3e-XQLP-RgceFadIYrxNGG_ARbo=',
      address: 'Paris, France'
    },
    {
      name: 'William',
      image: 'https://image1.masterfile.com/getImage/NjExMy0wNzgwODE2NGVuLjAwMDAwMDAw=AN0MAC/6113-07808164en_Masterfile.jpg',
      address: 'Sydney, Australia'
    },
    {
      name: 'Olivia',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgv3qV2k9VYK3YF1lyaiBW_RNMxHOotxCmtf4PGwj1HtMhKgkNJF7Bs6aHCttx7Mxd7Ls&usqp=CAU',
      address: 'Barcelona, Spain'
    },
    {
      name: 'Liam',
      image: 'https://i.pinimg.com/236x/44/16/a3/4416a379e65a3f42485f3883550749b3.jpg',
      address: 'Rio de Janeiro, Brazil'
    },
    {
      name: 'Ella',
      image: 'https://i.pinimg.com/736x/fe/c6/0f/fec60faa6917c0952dfcf252539e192b.jpg',
      address: 'Rome, Italy'
    },
    {
      name: 'Benjamin',
      image: 'https://images.unsplash.com/photo-1546967900-1bea5f16b69d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D',
      address: 'Cape Town, South Africa'
    },
    {
        name: 'Alex',
        image: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/hotel-photograhy-influencer2.jpg',
        address: 'Hondai, Holand'
      },
      {
        name: 'Sarah',
        image: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/hotel-room-champagne.jpg',
        address: 'New York, USA'
      },
      {
        name: 'Michael',
        image: 'https://images.squarespace-cdn.com/content/v1/57d9b89d9de4bb43099b7be3/1533084404197-JWYD7O8Z4ZNEWWSZETCV/LisaDiederichPhotography_BobbyHotel_Lifestyle-1.jpg?format=1500w',
        address: 'London, UK'
      },
    {
      name: 'Mia',
      image: 'https://img.freepik.com/premium-photo/hotel-style-swan-towel-setting_127090-696.jpg',
      address: 'Seoul, South Korea'
    },
    {
      name: 'Lucas',
      image: 'https://img.freepik.com/free-photo/romantic-bedroom_74190-3738.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697500800&semt=ais',
      address: 'Mexico City, Mexico'
    },
    {
      name: 'Amelia',
      image: 'https://lh3.googleusercontent.com/4vz38EaXz9kUIW9i25-IgEMXuhizb_NN3vw9rG_4Zc0pERxqRSJPQvOovTH4-UwLWY98jY8lUIgKryx6Oh-t6Tgt_uUuOr5jJ3mls3Lq=h450-rw',
      address: 'Moscow, Russia'
    },
    {
      name: 'Henry',
      image: 'https://i0.wp.com/c6.staticflickr.com/8/7794/28140992893_a5f3934273_c.jpg?resize=800%2C534&ssl=1',
      address: 'Mumbai, India'
    },
    {
      name: 'Isabella',
      image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-98077758,width-600,resizemode-4/98077758.jpg',
      address: 'Shanghai, China'
    },
    {
      name: 'Jackson',
      image: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/116420400.jpg?k=4fd6e9f8fb735b867743862fbcae86a3d708c15c947c6af3fdcebfda2830bcd8&o=',
      address: 'Dubai, UAE'
    },
    {
      name: 'Sophie',
      image: 'https://orlandosydney.com/wp-content/uploads/2023/04/Company-Large-Group-Year-Photo.-Photography-By-orlandosydney.com-OS1_0974.jpg',
      address: 'Istanbul, Turkey'
    }
  ];
  
  
const PhotoGraphy = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="">
            <Navbar></Navbar>
            {/* <div className=" text-right me-6 text-xl text-orange-700">
                Add Your Favorait pic
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 overflow-hidden mt-20">

            {
                photography?.map(({image},reversedIndex) =><div key={image} data-aos={reversedIndex % 2 === 0 ? 'fade-left' : 'fade-right'} >
                    <img className="rounded-xl hover:p-2 hover:border-2 hover:border-orange-700" src={image} alt="" />
                </div>)
            }
            </div>
        </div>
    );
};

export default PhotoGraphy;