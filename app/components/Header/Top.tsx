import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';

const Top = () => {
  return (
    <>
    <nav className='flex justify-around h-[44px] w-full bg-[#7E33E0] items-center text-white'>
        <div>
            <div className='flex gap-2 items-center'>
                <Image src="/Header/mail.svg" alt='' height={16} width={16}></Image>
                <h1>mhhasanul@gmail.com</h1>
               
                <Image className='ml-4' src="/Header/phone.svg" alt='' height={16} width={16}></Image>
                <h1>(12345)67890</h1>
            </div>
        </div>
        <div className='hidden md:block'>
        <div className='flex items-center gap-[17px]'>
          <div className='flex items-center gap-1'>
          <h1>English</h1>
          <IoIosArrowDown /> 
          </div>
          <div className='flex items-center gap-1'>
          <h1>USD</h1>
          <IoIosArrowDown />      
          </div>
          <div className='flex items-center gap-1'>
          <h1>Login</h1>
          <FiUser />
          </div>
          <div className='flex items-center gap-1'>
          <h1>Wishlist</h1>
          <FaRegHeart />
          </div>
          <Link href={"/Pages/Cart"}>
          <FiShoppingCart className='ml-3'/>
          </Link>
        
    
        </div>
        </div>
    </nav>
    </>
  )
}

export default Top