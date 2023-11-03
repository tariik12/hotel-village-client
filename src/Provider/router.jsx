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
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>
        }
      ]
    },
    {
      path:"/viewMoreDetails",
      element:<ViewMoreDetails></ViewMoreDetails>
    }
  ]);
