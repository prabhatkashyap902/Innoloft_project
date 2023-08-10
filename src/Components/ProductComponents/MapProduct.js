import React,{useEffect, useState} from 'react'
import { Profile_avatar_img } from '../../Utils'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(props) {
	console.log(props)
  return (
	<div className='ml-5 mt-5'>
		<div className='py-3'>Offered By </div>
		<div className='py-3'><img alt={props.detail?.id} src={props.detail?.company?.logo} className='w-[150px]'/></div>
		<div className='flex py-3'>
			<div><img alt="profile_img" src={Profile_avatar_img} className='rounded-[100%] h-full  w-[50px]'/></div>
			<div className=' pl-4 block'>
				<h1 className='inline-block'>Prabhat</h1><br/>
				<h1 className='inline-block'>Software Engineer</h1>
			</div>
		</div>
		<div className='py-3'>
			{props.detail?.company?.address?.street +" "+ props.detail?.company?.address?.house +", "+ props.detail?.company?.address?.zipCode +" "+
			props.detail?.company?.address?.city.name +" "+ props.detail?.company?.address?.country.name
			}
		</div>
		<div className='w-96 h-80'>
			<GoogleMapReact
				defaultCenter={{
					lat: 50.779729,
					lng: 6.100367
				  }}
				defaultZoom={11}
			/>
		
	  
		</div>
	</div>
  )
}
