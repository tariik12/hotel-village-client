import { Link } from "react-router-dom";

const nabLinks = <>

<li>
    <Link to='/'>Home</Link>
</li>

<li>
    <Link to='/'>Room</Link>
</li>
<li>
    <Link to='/'>Features</Link>
</li>
</>

const Navbar = () => {
    return (
        <div className="sticky top-0">
            <div className="flex justify-evenly items-center bg-[#ab5f2c53] text-white  py-4">
             <h3 className="text-4xl font-mono">Hotel <span className="text-orange-600 capitalize">VILLAGE</span></h3>
             <div>
                <ul className="flex gap-4 me-5">

                {nabLinks}
                </ul>
             </div>
             <div>
                <p className="text-xl font-thin"><span className="font-semibold text-red-600">Hotline : +880179542</span> </p>
               
             </div>
            </div>
        </div>
    );
};

export default Navbar;