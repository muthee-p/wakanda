import React from 'react';


const Register = () =>{
	return(
		<div>
		<h2>Wakandan Citizenship Application Form</h2>
		<form>
			<h4>Personal Information:</h4>
			<label>First Name:</label>
			<input type='text' name='first_name' placeholder='eg. John ' />

			<label>Last Name:</label>
			<input type='text' name='last_name' placeholder='eg. Snow' />

			<label>Date of birth:</label>
			<input type='date' name='date_of_birth' />

			<label>Gender:</label>
			<input type='radio'name='gender' />
			<label>Male</label>
			<input type='radio' name='gender'/>
			<label>Female</label>

			<label>Marital Status:</label>
			<input type='radio'name='marital' />
			<label>Single</label>
			<input type='radio' name='marital'/>
			<label>Married</label>
			<input type='radio'name='marital' />
			<label>Divorced</label>
			<input type='radio' name='marital'/>
			<label>Widowed</label>


			<label>Address:</label>
			<input type='text' name='address' placeholder='eg. 123 street' />

			<label>Phone Number:</label>
			<input type='text' name='phone' placeholder='eg. 11 22346743' />

			<label>Email:</label>
			<input type='email' name='email' placeholder='eg. johnsnow@kandamail.com' />

			<button type='submit'>Submit</button>
			
		</div>
		)
}
export default Register;