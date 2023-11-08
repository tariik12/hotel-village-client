import React from 'react';

const Header = ({header}) => {
    return (
        <div>
        <h3 className='text-center uppercase text-4xl py-10 text-orange-700 font-serif'>{header}</h3>
      </div>
      
    );
};

export default Header;