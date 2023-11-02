import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useMemo } from "react";
import { GrMapLocation } from 'react-icons/gr';
import { Rating,ThinStar } from '@smastrom/react-rating'
import { FaWifi } from 'react-icons/fa';
import {GiForkKnifeSpoon, GiBarbedNails } from 'react-icons/gi';
import { Link } from "react-router-dom";
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#FF4433',
  inactiveFillColor: '#FFF5EE'
}
const PhotoSlider = ({data, title}) => {
  const showSlider = useMemo(() => {
    if (title) {
      return data.filter(({ name }) => name === title);
    } else {
      return data;
    }
  }, [data, title]);
  
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb -mt-10",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    customPaging: (i) => {
        const dotImageSrc = data[i].image;
      return (
        <a className="">
          <img
            src={dotImageSrc}
            alt={`Dot ${i + 1}`}
            
          />
        </a>
      );
    },
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

    return (
        <div  className="mt-11 ">
             <Slider {...settings}>
             {
               showSlider?.map(({ image,_id, Category,description,rating }) =><div  className=" rounded-xl    w-full  p-2 " key={_id}>
                     <h2>{Category}</h2>
                  {
                    title &&  <Link to='/viewMoreDetails' className=" hover:text-orange-700 "> View More Details</Link>
                  }
                    <img src={image} className="h-[300px] rounded-md w-full " alt="" />
                   
            {title && <div className="">
             
                  <p >{description}</p>
                  <p className=" font-thin flex justify-start items-center gap-3 my-2"><GrMapLocation className=" text-orange-900 "/>Air Port Dhaka, Bangladesh</p>
                  <div className="flex justify-start gap-6 items-center ">


                  <Rating style={{ maxWidth: 120 }} itemStyles={myStyles} value={rating} readOnly />
                  <p >reviews &#40;1411&#41;</p>
                  
                  </div>
                  <div className='flex justify-center gap-6 mt-3 text-2xl'>
            
    <FaWifi/>
    <GiForkKnifeSpoon/>
    <GiBarbedNails/>
</div>
<div className='flex justify-center gap-4 mt-3 '>
           < p className=' p-2 rounded-xl shadow-md bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8]  text-white'>max. guests :
2 adults type : 2 double or 1 king
bed </p>

            </div>
            <p className="px-5 mt-5 md:w-3/4 mx-auto"  >{description} </p>
            <div><button className='bg-slate-700 py-2 px-4 rounded-3xl text-white text-xs'> book Now</button></div>
<div className=" flex justify-center">

                  <button className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >Check Ability</button>
</div>
              </div>}       
                </div>)
            }
          </Slider>
            
        </div>
    );
};

export default PhotoSlider;

