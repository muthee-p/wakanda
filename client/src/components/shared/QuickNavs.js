import React from 'react';
import {Link} from "react-router-dom";

const QuickNavs = () =>{
	return(
		<div className=' fixed w-[18%] p-3 right-0 min-h-full'>
		<p>Profile</p>
			<h4 className='text-xl'>Quick Navigation </h4>
			<ul className="space-y-2">
			<li>
			<Link to='/register' className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'>Citizenship Application</Link>
			</li>
			<li>
			<Link to='/insuranceform' className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'>Voter regitration</Link>
			</li>
			<li>
			<Link to='/insuranceform' className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'>Health Insurance Application</Link>
			</li>
			<li>
			<Link to='/insuranceform' className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'>Driving License Application</Link>
			</li>
			<li>
			<Link to='/insuranceform'className='block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700'>Register your business</Link>
			</li>
			</ul>
		</div>
		)
}
export default QuickNavs;