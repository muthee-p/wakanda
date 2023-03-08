import React from 'react';
import {Link} from "react-router-dom";

const QuickNavs = () =>{
	return(
		<div className=' fixed right-0'>
			<h4>Quick Navigation </h4>
			<Link to='/insuranceform'>Insurance Application</Link>
		</div>
		)
}
export default QuickNavs;