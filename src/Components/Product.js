import React from 'react'
import UserInfoProductuct from './ProductComponents/UserInfoProduct'
import DetailedProduct from './ProductComponents/DetailedProduct'
import MapProduct from './ProductComponents/MapProduct'

export default function Product() {
  return (
    <div className='bg-gray-100  h-full w-[100%] '>
        <div className='mx-40 flex justify-stretch  pt-[20px]'>
            
            <UserInfoProductuct/>
            <DetailedProduct/>
            
            
        </div>
    </div>
  )
}
