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
]


const LatestPost = () => {

   return (
    <div className="flex mt-10">
       <div>
       {
         roomBooks.map(({ image, Category, description, shorting }) => 
            <div className={`flex w-full ${shorting % 2 === 1 ? 'flex-row-reverse' : ''}`} key={image}>
                <img className="w-[300px] h-[300px]" src={image} alt="" />
                <p>{Category}</p>
                <p className="w-[900px]">{description}</p>
            </div>
         )}
       </div>
    </div>
)
};

export default LatestPost;