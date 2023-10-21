const roomBooks =[
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416992_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'For added space, choose our Deluxe Room with free Wi-Fi and an in-room work desk.'
    },
    {
        Category:'Suite',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416908_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:"For an extended stay or for extra space, choose one of our Suites featuring a separate living area."
    },
    {
        Category:'Superior Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612888_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'Unwind in style in our Superior Rooms and enjoy plush bedding, free Wi-Fi, and a smart TV.'
    },
    {
        Category:'Business Class Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416900_4k.jpg?impolicy=GalleryLightboxFullscreen',
        description:'Perfect for business and leisure travelers, our 200 hotel rooms and suites feature.'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416902_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416906_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f65416904_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/guest-room/16256-113891-f63612800_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f65416994_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
    {
        Category:'Deluxe Room',
        image:'https://media.radissonhotels.net/image/radisson-blu-hotel-dhaka-water-garden/suite/16256-113891-f63612856_4k.jpg?impolicy=GalleryLightboxFullscreen'
    },
]

const LatestPost = () => {
    return (
        <div className="grid grid-cols-2 ">
           {
             roomBooks.map(({image, Category,description}) =><div className="flex w-full" key={image}>
                <img className="w-[300px] h-[300px]" src={image} alt="" />
                <p >{Category}</p>
                <p className="w-[900px]">{description}</p>
                
               
                
             </div>)
           }
        </div>
    );
};

export default LatestPost;