import React from 'react';
import {Link } from 'react-router-dom';
const Nav = () =>{
	return(
	
		<div className='flex fixed top-0 w-full p-4 shadow-xl justify-between bg-[#212529] z-50 '>
			<h4 className='text-amber-500 w-[20%] text-2xl font-thin'>Wakanda</h4>

			<ul className='flex '>
			<Link to='/'>Home</Link>
			<li><input type='search' placeholder='search'/></li>
			<li>profile</li>
			</ul>
		</div>
		)
}
export default Nav;