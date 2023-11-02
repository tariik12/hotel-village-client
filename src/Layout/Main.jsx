
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { Outlet } from "react-router-dom";

const Main = () => {
   
    return (
        <>
        <div  className="overflow-hidden" >
            <Navbar></Navbar>
 <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
        </>
    );
};

export default Main;