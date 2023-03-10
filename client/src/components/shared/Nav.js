import React from 'react';
import {Link } from 'react-router-dom';
const Nav = () =>{
	return(
	
		<div className='flex fixed top-0 w-full pl-10 p-4 shadow-xl justify-between bg-[#212529] bg-opacity-30 backdrop-filter backdrop-blur-md z-50 '>
			<Link to='/' className='text-amber-500 w-[20%] text-2xl font-thin'>Wakanda</Link>

			<ul className='flex mr-8'>

			<li><input type='search' placeholder='search' className='rounded-2xl p-1 mr-8 w-[15rem] bg-zinc-700' /></li>
			<li>
			<Link to='/'>Home</Link>
			</li>
			</ul>
		</div>
		)
}
export default Nav;