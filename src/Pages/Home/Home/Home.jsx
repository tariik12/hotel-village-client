import ReactPagination from "../../../Components/ReactPagination";
import Banner from "../Banner/Banner";
import CheckAvailability from "../CheckAvility/CheckAvailability";
import LatestPost from "../LatestPost/LatestPost";
import LuxuryHotelVideo from "../LuxuryHotelVideo/LuxuryHotelVideo";
import OurService from "../OurService/OurService";
import RoomBook from "../RoomBook/RoomBook";
import Service3 from "../Service3/Service3";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service3></Service3>
            <CheckAvailability></CheckAvailability>
            <RoomBook></RoomBook>
            <OurService></OurService>
            <LuxuryHotelVideo></LuxuryHotelVideo>
            <LatestPost></LatestPost>
            <Subscribe></Subscribe>
            <ReactPagination></ReactPagination>
        </div>
    );
};

export default Home;