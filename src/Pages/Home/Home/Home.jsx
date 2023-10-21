import Banner from "../Banner/Banner";
import CheckAvailability from "../CheckAvility/CheckAvailability";
import LatestPost from "../LatestPost/LatestPost";
import LuxuryHotelVideo from "../LuxuryHotelVideo/LuxuryHotelVideo";
import RoomBook from "../RoomBook/RoomBook";
import Service3 from "../Service3/Service3";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service3></Service3>
            <CheckAvailability></CheckAvailability>
            <RoomBook></RoomBook>
            <LuxuryHotelVideo></LuxuryHotelVideo>
            <LatestPost></LatestPost>
        </div>
    );
};

export default Home;