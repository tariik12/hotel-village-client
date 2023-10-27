
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { motion, useScroll } from "framer-motion"
import { Outlet } from "react-router-dom";

const Main = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
        <motion.div  >
            <Navbar></Navbar>
 <Outlet></Outlet>
            <Footer></Footer>

            
        </motion.div>
        </>
    );
};

export default Main;