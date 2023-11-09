import { FaCalendarAlt, FaHome, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";




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
    <ul className="menu p-4 w-80 h-full  text-white">
      {
        isAdmin?<>
        <Link to='/dashboardLayout/addProducts'><FaCalendarAlt/>Add Products</Link>
        <Link to='/dashboardLayout/manageProducts'><FaCalendarAlt/>Manage Products</Link>
        <Link to='/dashboardLayout/allUsers'><FaHome/>All Users</Link>
        <Link to='/dashboardLayout/customerHandle'><FaHome/>Customer Handle</Link>
        <Link to='/dashboardLayout/ourEmploy'><FaHome/>Our Employ</Link>
        <Link to='/dashboardLayout/dailySold'><FaHome/>Daily Sold</Link>
        </>
        :
        <>
        <Link to='/dashboardLayout/selectedProducts'><FaHome/>My Selected Product</Link>
        <Link to='/dashboardLayout/boughtProducts'><FaCalendarAlt/>My Bought Products</Link>
        <Link to='/dashboardLayout/paymentHistory'><FaWallet/> Payment History</Link>
        <Link to='/dashboardLayout/hotelNotice'><FaWallet/> Hotel Notice</Link>
        <Link to='/dashboardLayout/userFeedback'><FaWallet/> My Feedback for hotel</Link>
        </>
      }
      <div className="divider"></div>
      <Link to='/'><FaHome/> Home</Link>
      <Link to='/allFoods'><FaCalendarAlt/>Food</Link>
      <Link to='/allSpas'><FaWallet/>Spa</Link>
      <Link to='/allRooms'><FaWallet/>Room</Link>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;