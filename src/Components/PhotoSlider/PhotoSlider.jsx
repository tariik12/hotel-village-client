import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PhotoSlider = ({data}) => {
   console.log(data)
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
        <div  className="mt-11">
             <Slider {...settings}>
             {
                data?.map(({ image,shorting, Category }) =><div  className=" rounded-xl    w-full  p-2 " key={shorting}>
                     <h2>{Category}</h2>
                    
                    <img src={image} className="h-[300px] rounded-md w-full " alt="" />
                   
                   
                </div>)
            }
          </Slider>
            
        </div>
    );
};

export default PhotoSlider;