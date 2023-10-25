import React from 'react';

const ourServices =[
    {
        title:'Swimming Pool',
        image:'',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'
    },
    {
        title:'Sustainable Stays',
        image:'',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'
    },
    {
        title:'Airport shuttle',
        image:'',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'
    },
    {
        title:'Breakfast buffet',
        image:'',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'
    },
    {
        title:'EV Charging Stations',
        image:'',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'
    },
    {
        title:'Concierge service',
        image:'',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'
    },
]

const OurService = () => {
    return (
        <div className='md:flex gap-3 mx-3 md:justify-evenly'>
            {
                ourServices.map(({title, image, description}) =><div className='p-10 rounded-md shadow-lg mt-10 hover:shadow-xl'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <p>{description}</p>
                </div>)
            }
        </div>
    );
};

export default OurService;