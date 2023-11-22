import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const location = useLocation();
    const {pathname} = location;
    const trigger = useRef(null)
    const sidebar = useRef(null)
    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null? false : setSidebarExpanded ==='true');

    const {email} = useSelector((state)=>{state.userSlice})
const activeRoute = location.pathname;
    const isRouteActive = (route) =>{
        return activeRoute === route ?'active-link':'';
    }

    const [userData, setUserData] = useState({});
    useEffect(() =>{

    })
    return (
        <aside ref={Sidebar}
        className={`absolute left-0 top-0 z-40 flex h-screen w-72.5 flex-col overflow-hidden bg-black text-white duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen?'translate-x-0':'-translate-x-full'}`}
        >
<div>
    <Link >
    <img src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png" alt="" />
    </Link>
    <button ref={trigger} onClick={() =>setSidebarOpen(!sidebarOpen)} aria-controls='sidebar' aria-expanded={sidebarOpen} className='block lg:hidden'> dashboard</button>
</div>
<div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
    <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
        <div>
            <h3 className='mb-4 ml-4 text-sm font-semibold'>
                MENU
            </h3>
            
        </div>
    </nav>

</div>
        </aside>
    );
};

export default Sidebar;