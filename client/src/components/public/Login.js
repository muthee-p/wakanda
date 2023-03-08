import React from 'react';


const Login = () =>{
	return(
		<div>
		<form>
		<label>First Name:</label>
			<input type='text' name='first_name' placeholder='eg. John ' />

			<label>Email:</label>
			<input type='email' name='email' placeholder='eg. johnsnow@kandamail.com' />

			<label>Password:</label>
			<input type='password' name='password' placeholder='use your id number' />
		</form>
			
		</div>
		)
}
export default Login;