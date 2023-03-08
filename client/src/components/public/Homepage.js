import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () =>{
	return(
		<div>
		<h1>Welcome</h1>
		<p>Are you a wakanda citizen</p>
		<input type='radio' />
		<label>Yes</label>
		<input type='radio' />
		<label>No</label>

		<Link to='/register'>Become a citizen</Link>
			
		</div>
		)
}
export default Homepage;