import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () =>{
	return(
		<div className='fixed  left-0'>
		<ul>
			<li>Health
				<ul className='flex flex-col'>
				 <Link to='/health/mental'>Mental Health</Link>
				 <Link to='health/emergency'>Emergency HealthCare</Link>
				 <Link to='health/facilities'>HealthCare Facilities</Link>
				 <Link to='health/drugs'>Drugs and Alcohol</Link>
				 <Link to='health/insurance'>Health Insurance</Link>
				 <Link to='health/policies'>HealthCare Policies</Link>

				</ul>
			</li>
		</ul>

		</div>
		)
}
export default SideBar;