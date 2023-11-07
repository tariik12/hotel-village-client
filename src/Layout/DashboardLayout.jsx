import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";




const DashboardLayout = () => {

    const isAdmin = true;
   
    return (
        <div>
            <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-gradient-to-t from-[#f1f1f3cf] via-[#228eac97] to-[#f7f4f4b8]">
     
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-[#fa5931f9] text-white">
      {
        isAdmin?<>
        <li><NavLink to='/dashboardLayout/addProducts'><FaCalendarAlt/>Add Products</NavLink></li>
        <li><NavLink to='/dashboardLayout/manageProducts'><FaCalendarAlt/>Manage Products</NavLink></li>
        <li><NavLink to='/dashboardLayout/allUsers'><FaHome/>All Users</NavLink></li>
        <li><NavLink to='/dashboardLayout/customerHandle'><FaHome/>Customer Handle</NavLink></li>
        <li><NavLink to='/dashboardLayout/ourEmploy'><FaHome/>Our Employ</NavLink></li>
        <li><NavLink to='/dashboardLayout/dailySold'><FaHome/>Daily Sold</NavLink></li>
        </>
        :
        <>
        <li><NavLink to='/dashboardLayout/selectedProducts'><FaHome/>My Selected Product</NavLink></li>
        <li><NavLink to='/dashboardLayout/boughtProducts'><FaCalendarAlt/>My Bought Products</NavLink></li>
        <li><NavLink to='/dashboardLayout/paymentHistory'><FaWallet/> Payment History</NavLink></li>
        <li><NavLink to='/dashboardLayout/hotelNotice'><FaWallet/> Hotel Notice</NavLink></li>
        <li><NavLink to='/dashboardLayout/userFeedback'><FaWallet/> My Feedback for hotel</NavLink></li>
        </>
      }
      <div className="divider"></div>
      <li><NavLink to='/'><FaHome/> Home</NavLink></li>
      <li><NavLink to='/allFoods'><FaCalendarAlt/>Food</NavLink></li>
      <li><NavLink to='/allSpas'><FaWallet/>Spa</NavLink></li>
      <li><NavLink to='/allRooms'><FaWallet/>Room</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;