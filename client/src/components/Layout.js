import React from 'react';
import {Outlet } from 'react-router-dom';
import {Nav, Footer, QuickNavs, SideBar} from './shared';



const Layout = () => {
  return (
    <div className="flex justify-around">
    	<Nav />
    	<div className="flex justify-around mt-[3rem] p-6">
        <SideBar /><QuickNavs />
        <div className=' w-[63%] min-w[63%] p-4 pt-8 text-m'>
    		<div className='min-h-[100vh]'><Outlet /></div><Footer />
          </div>
        
        
    	</div>
    	
    	
    </div>
    )
}
export default Layout ;