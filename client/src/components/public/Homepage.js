import React, {useState} from 'react';
import { community, fairGreen, maryland, pets, top, trade} from '../../assets';
import {Link} from "react-router-dom";

const Homepage = () =>{
	

  return (
    <div>
    <div className='min-h-[100vh] p-6 flex justify-between'>
    	<img src={community} alt='community' className='w-[40%] h-[30%]'/>
    	<div className='w-[60%]'>
      		<h1 className='text-6xl'>Welcome</h1>
      			<p className='mt-8 mb-8'>Welcome to the official website of the Government of Wakanda,
       				where we strive to provide our citizens with easy access to all the necessary information and
        			resources they need to live, work, and thrive in our great nation. 
      				From our advanced technology to our rich culture and heritage, Wakanda is a unique and remarkable 
      				country that stands as a beacon of hope and progress for the rest of the world.</p>

      			<button className='bg-amber-500 p-3'>
      				<Link to='health/mental'>Explore</Link>
      			</button>
      	</div>
      </div>
      <div className=' bg-zinc-200 p-6'>
      <p className='text-zinc-800 text-center'>In partnership with</p>
      <div className='bottom-0 flex justify-between items-center'>
      <img src={top} alt='top' className='w-[10%] h-[10%] '/>
      <img src={maryland} alt='maryland' className='w-[5%] h-[5%] ' />
      <img src={fairGreen} alt='fairGreen'className='w-[15%] h-[15%] ' />
      <img src={trade} alt='trade' className='w-[10%] h-[10%] '/>
      <img src={pets} alt='pets' className='w-[10%] h-[10%]'/>
      </div>
      </div>
    </div>
  );
}
export default Homepage;