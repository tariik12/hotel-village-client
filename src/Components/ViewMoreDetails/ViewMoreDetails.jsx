import React, { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useLocation } from 'react-router-dom';

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
    {
        shorting:11,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        shorting:12,
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
]

const ViewMoreDetails = () => {

    const { location } = useLocation();

  // Check if location.state is null before trying to access data
  if (!location.state || !location.state.data) {
    return <div>No data available</div>;
  }

  const { image, _id,  description, rating } = location.state.data;
  console.log(image, _id,  description, rating)
    const [currentPage, setCurrentPage] = useState(1); // Set the default page to 1
  const itemsPerPage = 1; // Number of items to display per page
  const totalPages = Math.ceil(roomBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleRooms = roomBooks.slice(startIndex, startIndex + itemsPerPage);
    return (
        <div className='fixed mt-12 ms-44'>
            <div>
      <div className='flex justify-evenly items-center flex-wrap'> {/* Use flex-wrap to handle mobile layout */}
        {visibleRooms.map((room) => (
          <div key={room.shorting} className="room-card">
            <h1>{room.Category}</h1>
            <img className='h-[400px] w-[300px' src={room.image} alt={room.Category} />
          </div>
        ))}
      </div>

      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
        
      />
    </div>
        </div>
    );
};

export default ViewMoreDetails;