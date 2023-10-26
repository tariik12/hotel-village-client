// import { TypeAnimation } from 'react-type-animation';
import banner from '../../../../public/banner1.mp4'
import { useState } from 'react';

const Banner = () => {
    const [textColor, setTextColor] = useState('yellow');
    return (
        <div>
           <video src={banner} autoPlay muted loop width='100%' className='w-300px' />

    
     {/* <div
      style={{
        fontSize: '60px',
        color: textColor,
      }}
      className='text-center -mt-72 '>
      <TypeAnimation
        sequence={[
          'WELCOME',
          800,
          () => setTextColor('darksalmon'),
          'WELCOME TO ',
          800,
          () => setTextColor('brown'),
          'WELCOME TO HO',
          800,
          () => setTextColor('purple'),
          'WELCOME TO HOTEL',
          800,
          () => setTextColor('darkviolet'),
          'WELCOME TO HOTEL VILLAGE',
          1000,
          () => setTextColor('firebrick'),
          '',
        ]}
        repeat={Infinity}
      />
    </div> */}
   

        </div>
    );
};

export default Banner;