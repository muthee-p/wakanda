import React from 'react';

const Nav = () =>{
	return(
		<div className='flex fixed top-0 justify-between'>
			<h4 className='text-amber-500 w-[20%]'>Wakanda</h4>

			<ul className='flex '>
			<li><input type='search' placeholder='search'/></li>
			<li>profile</li>
			</ul>
		</div>
		)
}
export default Nav;