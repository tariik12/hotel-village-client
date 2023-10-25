

const CheckAvailability = () => {
    return (
        <div className="h-[600px] bg-fixed mt-5 bg-cover bg-no-repeat " style={{backgroundImage:`url(https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/exterior/16256-113891-f63612886_4k.jpg?impolicy=GalleryLightboxFullscreen)`} } >
            <div className="absolute mt-52 flex justify-evenly py-10 items-center text-white bg-[#27292566] hover:bg-orange-700 w-3/4 left-48 hover:left-0 hover:w-full rounded-2xl ">
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