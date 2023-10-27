import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
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
  ]);
