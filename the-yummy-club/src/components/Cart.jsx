import React from 'react'
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  return (
    <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white '>
          <div>
              <span>My Orders</span>
              <IoMdClose className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:'/>
         </div>
    </div>
  )
}

export default Cart
