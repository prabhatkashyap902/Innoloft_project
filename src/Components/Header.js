import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { LOGO_IMG_LINK } from '../Utils'
export default function Header() {
  return (
<div className='bg-[#cfd7da] py-2 flex justify-between w-full px-40'>
	<div className="">
			<img alt="logo-img" src={LOGO_IMG_LINK} className='w-[100px] inline'/>
	</div>
	<div className="">
		<ul className='flex justify-between text-center '>
			<Link to="/"><li className='mx-10'><FontAwesomeIcon icon={faHouse} /></li></Link>
			<Link to="/product"><li>Product</li></Link>
		</ul>
	</div>
	
  </div>
  )
}
