import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { SiNginxproxymanager } from "react-icons/si";
import { Link, Outlet, useLocation } from "react-router-dom";




const DashboardLayout = () => {
  const location = useLocation();
  const activeRoute = location.pathname;
    const isAdmin = false;
    const isRouteActive = (route) => {
      return activeRoute === route ? 'active-link' : '';
    };
    return (
        <div>
            <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8]">
     
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side bg-gradient-to-r from-[#ec5c096a] via-[#4bbcdb8f] to-[#ec5c094c]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full  text-white">
      {
        isAdmin?<>
        <Link to='/dashboardLayout/addProducts' className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/addProducts')}`}><AiOutlineAppstoreAdd/>Add Products</Link>
        <Link className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/manageProducts')}`} to='/dashboardLayout/manageProducts'><SiNginxproxymanager/>Manage Products</Link>
        <Link className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/allUsers')}`} to='/dashboardLayout/allUsers'><FaHome/> All Users</Link>
        <Link className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/customerHandle')}`} to='/dashboardLayout/customerHandle'><FaHome/>Customer Handle</Link>
        <Link className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/ourEmploy')}`} to='/dashboardLayout/ourEmploy'><FaHome/>Our Employ</Link>
        <Link className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/dailySold')}`} to='/dashboardLayout/dailySold'><FaHome/>Daily Sold</Link>
        </>
        :
        <>
        <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/selectedProducts')}`} to='/dashboardLayout/selectedProducts'><FaHome/>My Selected Product</Link>
        <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/boughtProducts')}`} to='/dashboardLayout/boughtProducts'><FaCalendarAlt/>My Bought Products</Link>
        <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/paymentHistory')}`} to='/dashboardLayout/paymentHistory'><FaWallet/> Payment History</Link>
        <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/hotelNotice')}`} to='/dashboardLayout/hotelNotice'><FaWallet/> Hotel Notice</Link>
        <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/dashboardLayout/userFeedback')}`} to='/dashboardLayout/userFeedback'><FaWallet/> My Feedback for hotel</Link>
        </>
      }
      <div className="divider"></div>
      <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/')}`} to='/'><FaHome/> Home</Link>
      <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/allFoods')}`} to='/allFoods'><FaCalendarAlt/>Food</Link>
      <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/allSpas')}`} to='/allSpas'><FaWallet/>Spa</Link>
      <Link  className={`nav-link flex items-center gap-3 justify-start md:text-xl font-bold uppercase text-white  border-b-0 hover:border-b-4 border-orange-600 ${isRouteActive('/allRooms')}`} to='/allRooms'><FaWallet/>Room</Link>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;