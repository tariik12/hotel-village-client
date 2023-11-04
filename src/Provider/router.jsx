import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ViewMoreDetails from "../Components/ViewMoreDetails/ViewMoreDetails";
import AllFood from "../Pages/AllFood/AllFood";
import AllRoom from "../Pages/AllRoom/AllRoom";
import AllSpa from "../Pages/AllSpa/AllSpa";
import AddProducts from "../Pages/Dashboard/Admin/AddProducts";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import DailySold from "../Pages/Dashboard/Admin/DailySold";
import OurEmployer from "../Pages/Dashboard/Admin/OurEmployer";
import CustomerHandle from "../Pages/Dashboard/Admin/CustomerHandle";
import AddCardProduct from "../Pages/Dashboard/User/AddCardProduct";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory";
import HotelNotice from "../Pages/Dashboard/User/HotelNotice";
import UserFeedback from "../Pages/Dashboard/User/userFeedback";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'/allFoods',
          element:<AllFood></AllFood>
        },
        {
          path:'/allRooms',
          element:<AllRoom></AllRoom>
        },
        {
          path:'/allSpas',
          element:<AllSpa></AllSpa>
        },
        
      ]
    },
    {
      path: "/dashboardLayout",
      element: <DashboardLayout></DashboardLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/dashboardLayout",
          element:<Dashboard></Dashboard>
        },
        {
path:'addProducts',
element:<AddProducts></AddProducts>
},
        {
path:'allUsers',
element:<AllUsers></AllUsers>
},
        {
path:'customerHandle',
element:<CustomerHandle></CustomerHandle>
},
        {
path:'dailySold',
element:<DailySold></DailySold>
},
        {
path:'ourEmploy',
element:<OurEmployer></OurEmployer>
},
        {
path:'',
element:<AddCardProduct></AddCardProduct>
},
        {
path:'',
element:<PaymentHistory></PaymentHistory>
},
        {
path:'',
element:<HotelNotice></HotelNotice>
},
        {
path:'',
element:<UserFeedback></UserFeedback>
},
      ]
    },
    {
      path:"/viewMoreDetails",
      element:<ViewMoreDetails></ViewMoreDetails>
    }
  ]);
