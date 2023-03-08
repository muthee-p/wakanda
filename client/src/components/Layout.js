import React from 'react';
import {Outlet } from 'react-router-dom';
import {Nav, Footer, QuickNavs, SideBar} from './shared';



const Layout = () => {
  return (
    <div className="flex justify-around">
    	<Nav />
    	<div className="w-[60%] mt-[3rem]">
        <SideBar />

    		<Outlet />

        <QuickNavs />
    	</div>
    	
    	<Footer />
    </div>
    )
}
export default Layout ;