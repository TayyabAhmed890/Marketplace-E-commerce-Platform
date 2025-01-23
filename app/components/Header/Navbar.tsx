"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { IoMdMenu,IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductOpen, setIsProductMenuOpen] = useState(false)

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  const toggleMenuProduct=()=>{
    setIsProductMenuOpen(!isProductOpen)
  }
  return (
   <>
   <nav className='flex items-center my-[20px] px-8 '>
    <div className='h-[40px] w-[1170px] flex items-center justify-between mx-auto '>
      
    <div className='flex gap-x-24 justify-between'>
      <Image src="/Header/Hekto.svg" alt='' height={34} width={98}></Image>
      <div className='hidden md:block'>
    <ul className='flex items-center gap-[25px] mt-1'>
      
      <li><Link href="/">Home</Link></li>
      <li onClick={toggleMenuProduct} className='flex items-center gap-1 cursor-pointer'>Pages
        {isProductOpen ? <IoIosArrowUp />:
                  <IoIosArrowDown/>
                  }
      
      {
        isProductOpen && (
          <>
          <ul className='flex flex-col rounded-sm border-2 h-auto w-auto bg-white absolute top-32 z-10'>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4 border-b' href="/Pages/Shop">Shop Grid Default</Link>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4 border-b' href="/Pages/Cart">Add to Cart</Link>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4 border-b' href="/Pages/Checkout">Checkout</Link>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4 border-b' href="/Pages/Order">Order Completed</Link>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4' href="/Pages/Account">My Account</Link>
      
          </ul>
          </>
        )
      }
      </li>
      <li><Link href="/Pages/Error">Blog</Link></li>
      <li><Link href="/Pages/Shop">Shop</Link></li>
      <li><Link href="/Pages/Contact">Contact</Link></li>
    </ul>
    </div>
    </div>
    <div className='hidden lg:block ml-7'>
    <div className='flex items-center h-[40px] w-[317px] bg-pink-600 justify-end '>
      <input type="text" className='h-[40px] w-[317px] outline-none px-2 border-2 border-gray-200'/>
      <FiSearch className='mx-4 h-[20px] w-[20px] text-white'/>
    </div>
    </div>
    </div>
    <div className=' md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose size={30}/>:
        <IoMdMenu size={30} />
        }
      </div>
      {
        isMenuOpen && (
          <>
          <ul className='flex flex-col gap-3 h-auto left-0 top-32 w-full bg-white md:hidden absolute z-10 '>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4' href="/">Home</Link>
        <li onClick={toggleMenuProduct} className='hover:bg-[#7E33E0] flex items-center px-4 gap-1 cursor-pointer  py-4 hover:text-white'>Pages
          {isProductOpen ? <IoIosArrowUp />:
                  <IoIosArrowDown/>
                  }
      </li>
      
      {
        isProductOpen && (
          <>
          <ul className='flex flex-col  h-auto w-auto  absolute top-32 z-20 bg-white border-2 mx-4 rounded-sm '>
        <Link className='hover:bg-[#7E33E0] bg-white py-2  px-4 border-b hover:text-white' href="/Pages/Shop">Shop Grid Default</Link>
        <Link className='hover:bg-[#7E33E0] bg-white py-2 px-4 border-b hover:text-white' href="/Pages/Cart">Add to Cart</Link>
        <Link className='hover:bg-[#7E33E0] bg-white py-2 px-4 border-b hover:text-white' href="/Pages/Checkout">Checkout</Link>
        <Link className='hover:bg-[#7E33E0] bg-white py-2 px-4 border-b hover:text-white' href="/Pages/Order">Order Completed</Link>
        <Link className='hover:bg-[#7E33E0] bg-white  py-2 px-4 hover:text-white' href="/Pages/Account">My Account</Link>
      
          </ul>
          </>
        )
      }
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4' href="/Pages/Error">Blog</Link>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4' href="/Pages/Shop">Shop</Link>
        <Link className='hover:bg-[#7E33E0] hover:text-white py-4 px-4' href="/Pages/Contact">Contact</Link>
          <div className='z-10 m-4'>
          <div className='flex items-center h-[40px] w-[317px] bg-pink-600 justify-end '>
            <input type="text" className='h-[40px] w-[317px] outline-none px-2 border-2 border-gray-200'/>
            <FiSearch className='mx-4 h-[20px] w-[20px] text-white'/>
          </div>
          </div>
          </ul>
          </>
        )
      }
   
   </nav>
   </>
  )
}

export default Navbar