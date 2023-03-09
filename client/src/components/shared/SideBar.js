import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const SideBar = () =>{
	const [isOpen, setIsOpen] = useState(false);

	const dropDown = () =>{
		setIsOpen(!isOpen);
	}


	return(
		<div className='fixed left-0 min-h-full w-[20%] p-4 '>
		<ul className="space-y-2">
  <li className="flex flex-col text-zinc-100 ">
    <span onClick={dropDown}>Health <span className='ml-[60%]'>{isOpen ? <ArrowDropUpIcon />:<ArrowDropDownIcon />}</span></span>
    {/*<svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="heroicon-ui"
        d="M9.7 15.7a1 1 0 011.4 0L16 19.6V4a1 1 0 012 0v15.6l4.9-3.9a1 1 0 011.4 1.5l-6.5 5.2a1 1 0 01-1.4 0L4.3 13.3a1 1 0 011.4-1.5l4.9 3.9z"
      />
    </svg>*/}
    {isOpen && (
    <ul className="space-y-2">
      <li>
        <Link
          to="/health/mental"
          className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
        >
          Mental Health
        </Link>
      </li>
      <li>
        <Link
          to="/health/emergency"
          className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
        >
          Emergency HealthCare
        </Link>
      </li>
      <li>
        <Link
          to="/health/facilities"
          className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
        >
          HealthCare Facilities
        </Link>
      </li>
      <li>
        <Link
          to="/health/drugs"
          className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
        >
          Drugs and Alcohol
        </Link>
      </li>
      <li>
        <Link
          to="/health/insurance"
          className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
        >
          Health Insurance
        </Link>
      </li>
      <li>
        <Link
          to="/health/policies"
          className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-700"
        >
          HealthCare Policies
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