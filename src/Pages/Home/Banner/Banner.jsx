import banner from '../../../../public/banner.mp4'

const Banner = () => {
    return (
        <div>
           <video src={banner} autoPlay muted loop width='100%'/>

           <div className='relative group mx-auto'>
            <p className='absolute inset-0 flex justify-center -mt-72 text-4xl text-white'>Welcome To  HOTEL <span className="text-orange-600 capitalize">VILLAGE</span></p>
           
           </div>
        </div>
    );
};

export default Banner;