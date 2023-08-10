import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Profile_avatar_img } from '../../Utils'

export default function UserInfoProduct() {
	return (
		<div className='pr-28'>
			<div className='flex max-w-[100%]'>
				<img className='rounded-[100%] w-[80px]' alt="profile_img" src={Profile_avatar_img}/>
				<div className=' my-auto px-10'>
					<h1 className=' font-bold whitespace-nowrap'>Prabhat Kumar</h1>
					<h2 className='font-semibold whitespace-nowrap'>Software Engineer</h2>
				</div>
			</div>
			<div className='my-7'><FontAwesomeIcon icon={faHouse} />  <span className='ml-4'>  Home</span></div>
			<div className='my-7'><FontAwesomeIcon icon={faUserGroup} /><span className='ml-4'> Members</span></div>
		</div>
	)
}
