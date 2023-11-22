import { Outlet } from "react-router-dom";
import Header from "../../Components/DashboardComponents/Header/Header";
import Sidebar from "../../Components/DashboardComponents/Sidebar/Sidebar";
import { useState } from "react";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] =useState(false);
    return (
        <div className="">
            <div className="flex h-screen overflow-hidden"> 
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>
           
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Header>

                <main>
                    <div className="mx-auto max-w-screen-2xl p4 md:p6 2xl:p-10">
                        <Outlet></Outlet>

                    </div>
                </main>

            </div>
            </div>
        </div>
    );
};

export default Dashboard;