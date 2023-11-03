// import React, { useState } from 'react';
// import ResponsivePagination from 'react-responsive-pagination';
// import 'react-responsive-pagination/themes/classic.css';
// import { useLocation } from 'react-router-dom';

// const roomBooks =[
//     {
//         shorting:1,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen',
//         description:'For added space, choose our Deluxe Room with free Wi-Fi and an in-room work desk.'
//     },
//     {
//         shorting:2,
//         Category:'Suite',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416908_4k.jpg?impolicy=GalleryLightboxFullscreen',
//         description:"For an extended stay or for extra space, choose one of our Suites featuring a separate living area."
//     },
//     {
//         shorting:3,
//         Category:'Superior Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612888_4k.jpg?impolicy=GalleryLightboxFullscreen',
//         description:'Unwind in style in our Superior Rooms and enjoy plush bedding, free Wi-Fi, and a smart TV.'
//     },
//     {
//         shorting:4,
//         Category:'Business Class Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416900_4k.jpg?impolicy=GalleryLightboxFullscreen',
//         description:'Perfect for business and leisure travelers, our 200 hotel rooms and suites feature.'
//     },
//     {
//         shorting:5,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416902_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
//     {
//         shorting:6,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416906_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
//     {
//         shorting:7,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416904_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
//     {
//         shorting:8,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612800_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
//     {
//         shorting:9,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416994_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
//     {
//         shorting:10,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
//     {
//         shorting:11,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
//     {
//         shorting:12,
//         Category:'Deluxe Room',
//         image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
//     },
// ]

// const ViewMoreDetails = () => {

//     const { location } = useLocation();

//   // Check if location.state is null before trying to access data
//   if (!location.state || !location.state.data) {
//     return <div>No data available</div>;
//   }

//   const { image, _id,  description, rating } = location.state.data;
//   console.log(image, _id,  description, rating)
//     const [currentPage, setCurrentPage] = useState(1); // Set the default page to 1
//   const itemsPerPage = 1; // Number of items to display per page
//   const totalPages = Math.ceil(roomBooks.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const visibleRooms = roomBooks.slice(startIndex, startIndex + itemsPerPage);
//     return (
//         <div className='fixed mt-12 ms-44'>
//             <div>
//       <div className='flex justify-evenly items-center flex-wrap'> {/* Use flex-wrap to handle mobile layout */}
//         {visibleRooms.map((room) => (
//           <div key={room.shorting} className="room-card">
//             <h1>{room.Category}</h1>
//             <img className='h-[400px] w-[300px' src={room.image} alt={room.Category} />
//           </div>
//         ))}
//       </div>

//       <ResponsivePagination
//         current={currentPage}
//         total={totalPages}
//         onPageChange={setCurrentPage}
        
//       />
//     </div>
//         </div>
//     );
// };

// export default ViewMoreDetails;

import React, { useState, useEffect } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useLocation } from "react-router-dom";

const roomBooks = [
  {
    shorting: 1,
    Category: "Deluxe Room",
    image:
      "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen",
    description: "For added space, choose our Deluxe Room with free Wi-Fi and an in-room work desk.",
  },
  {
    shorting: 2,
    Category: "Suite",
    image:
      "https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416908_4k.jpg?impolicy=GalleryLightboxFullscreen",
    description:
      "For an extended stay or for extra space, choose one of our Suites featuring a separate living area.",
  },
];

const ViewMoreDetails = () => {
    const location = useLocation();
    const data = location.state?.data;
console.log(data)
  // Check if location.state is null before trying to access data
  if (!location?.state || !location.state?.data) {
    return <div>No data available</div>;
  }

  const { image, _id, description, rating } = location.state?.data;
  console.log(image, _id, description, rating);

  // Add a new state variable to store the next page of data.
  const [nextPageData, setNextPageData] = useState([]);

  // Fetch the next page of data when the user clicks the "Next" page button.
  useEffect(() => {
    const fetchData = async () => {
      // TODO: Implement a fetch function to fetch the next page of data.
      const nextPageData = await fetch("/api/rooms?page=" + (currentPage + 1));

      // Update the state variable with the new data.
      setNextPageData(nextPageData);
    };

    if (nextPageData.length === 0) {
      fetchData();
    }
  }, [currentPage, nextPageData]);

  // Update the current page when the user clicks on a pagination button.
  const onPageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  // Render the next page of data if it is available.
  if (nextPageData.length > 0) {
    return (
      <div className="room-details">
        <img src={image} alt={description} />
        <h1>{Category}</h1>
        <p>{description}</p>
        <p>{rating} stars</p>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    );
  }

  // Otherwise, return a loading spinner.
  return <div>Loading...</div>;
};

export default ViewMoreDetails;