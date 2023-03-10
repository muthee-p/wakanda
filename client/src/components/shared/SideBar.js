import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';

const SideBar = () =>{
	const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);


	const dropDown = () =>{
		setIsOpen(!isOpen);
	}
  const dropDown1 = () =>{
    setIsOpen1(!isOpen1);
  }
  const dropDown2 = () =>{
    setIsOpen2(!isOpen2);
  }
  const dropDown3 = () =>{
    setIsOpen3(!isOpen3);
  }



	return(
		<div className='fixed left-0 min-h-full w-[20%] p-4 '>
		<ul className="space-y-2">
    <li className="flex flex-col text-zinc-100 ">
      <span onClick={dropDown} className='hover:bg-zinc-700 p-2'>
      <span className=''>
      <BloodtypeOutlinedIcon /> </span> 
      Health 
      <span className='ml-[50%]'>
      {isOpen ? <ArrowDropUpIcon />:<ArrowDropDownIcon />}
    </span></span>
  
    {isOpen && (
    <ul className="space-y-2">
      <li>
        <Link to="/health/mental"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Mental Health
        </Link>
      </li>
      <li>
        <Link to="/health/emergency"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Emergency HealthCare
        </Link>
      </li>
      <li>
        <Link to="/health/facilities"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700">
          HealthCare Facilities
        </Link>
      </li>
      <li>
        <Link to="/health/drugs"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Drugs and Alcohol
        </Link>
      </li>
      <li>
        <Link to="/health/insurance"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700">
          Health Insurance
        </Link>
      </li>
      <li>
        <Link to="/health/policies"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700">
          HealthCare Policies
        </Link>
      </li>
    </ul>
    )}
  </li>

  <li className="flex flex-col text-zinc-100 ">
      <span onClick={dropDown1} className='hover:bg-zinc-700 p-2'>
      <span className=''>
      <MonetizationOnOutlinedIcon  /> </span> 
      Trade 
      <span className='ml-[55%]'>
      {isOpen1 ? <ArrowDropUpIcon />:<ArrowDropDownIcon />}
    </span></span>
  
    {isOpen1 && (
    <ul className="space-y-2">
      <li>
        <Link to="/trade/ecommerce"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Ecommerce and Digital
        </Link>
      </li>
      <li>
        <Link to="/trade/imports"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Imports and Exports
        </Link>
      </li>
      <li>
        <Link to="/trade/international"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700">
          International Trade
        </Link>
      </li>
      <li>
        <Link to="/trade/policies"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Trade Policies
        </Link>
      </li>
      
    </ul>
    )}
  </li>

  <li className="flex flex-col text-zinc-100 ">
      <span onClick={dropDown2} className='hover:bg-zinc-700 p-2'>
      <span className=''>
      <ScaleOutlinedIcon /> </span> 
      Crime and Justice 
      <span className='ml-[17%]'>
      {isOpen2 ? <ArrowDropUpIcon />:<ArrowDropDownIcon />}
    </span></span>
  
    {isOpen2 && (
    <ul className="space-y-2">
      <li>
        <Link to="/crime/cyber"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Cyber security
        </Link>
      </li>
      <li>
        <Link to="/crime/forensics"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Forensic Evidence
        </Link>
      </li>
      <li>
        <Link to="/crime/rehab"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700">
          Rehabilitation
        </Link>
      </li>
      <li>
        <Link to="/crime/victim"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Victim advocacy
        </Link>
      </li>
      <li>
        <Link to="/crime/jury"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700">
          Importance of Jury
        </Link>
      </li>
     
    </ul>
    )}
  </li>

  <li className="flex flex-col text-zinc-100 ">
      <span onClick={dropDown3} className='hover:bg-zinc-700 p-2'>
      <span className=''>
      <LocalShippingOutlinedIcon /> </span> 
      Transport
      <span className='ml-[43%]'>
      {isOpen3 ? <ArrowDropUpIcon />:<ArrowDropDownIcon />}
    </span></span>
  
    {isOpen3 && (
    <ul className="space-y-2">
      <li>
        <Link to="/transport/public"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Public Transport
        </Link>
      </li>
      <li>
        <Link to="/transport/driving"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Driving Lincence
        </Link>
      </li>
      <li>
        <Link to="/transport/vehicle"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700">
          Vehicle Registration
        </Link>
      </li>
      <li>
        <Link to="/transport/freight"
          className="block px-8 py-2 text-sm text-zinc-200 hover:bg-zinc-700" >
          Freight Transport
        </Link>
      </li>
      
    </ul>
    )}
  </li>

</ul>


		</div>
		)
}
export default SideBar;