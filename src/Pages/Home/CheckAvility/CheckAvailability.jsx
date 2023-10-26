

const CheckAvailability = () => {
    return (
        <div className=" bg-fixed mt-5 bg-cover bg-no-repeat py-20  " style={{backgroundImage:`url(https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/exterior/16256-113891-f63612886_4k.jpg?impolicy=GalleryLightboxFullscreen)`} } >
            <div className="  flex md:flex-row flex-col justify-evenly py-10 items-center text-white bg-orange-500 hover:bg-orange-700  md:w-2/4 hover:w-3/4  rounded-2xl mx-auto">
                <div>
                    <h1>Check In</h1>
                    <input type="date" />
                </div>
                <div>
                    <h1>Check Out</h1>
                    <input type="date" />
                </div>
                <div>
                    <h1>Occupancy</h1>
                    <input type="number" />
                </div>
                <div>
                    <h1>Selected Rate</h1>
                    <input type="number" />
                </div>
                <div>
                   <button>Search</button>
                </div>
                
            </div>
        </div>
    );
};

export default CheckAvailability;