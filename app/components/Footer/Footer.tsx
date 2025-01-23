
import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const Footer = () => {
  return (
    <>
    <footer className='flex justify-center h-auto w-auto flex-wrap bg-[#EEEFFB]'>
        <div className='flex gap-10 md:gap-28 flex-wrap'>
            <div className='flex flex-col justify-center gap-[60px] mx-6 my-3'>
                <h1 className={`${Josefin.className} text-4xl font-bold pt-3`}>Hekto</h1>
                <div className='h-[44px] w-[280px] sm:w-auto flex justify-between items-center'>
                    <input type="text" className='w-[180px] outline-none px-2 sm:w-[277px] h-[44px]' />
                    <button className='w-[135px] h-[39px] bg-pink-500'>Sign up</button>
                </div>
                <div>
                <h1>Contact Info</h1>
                <h1>17 Princess Road, London, Greater London NW1 8JR, UK</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-[20px] mx-6'>
                <h1 className='text-2xl font-semibold mb-3'>Catagories</h1>
                <h1>Laptops & Computers</h1>
                <h1>Cameras & Photography</h1>
                <h1>Smart Phones & Tablets</h1>
                <h1>Video Games & Consoles</h1>
                <h1>Waterproof Headphones</h1>
            </div>
            <div className='flex flex-col justify-center gap-[20px] mx-6'>
                <h1 className='text-2xl font-semibold mb-3'>Customer Care</h1>
                <h1>My Account</h1>
                <h1>Discount</h1>
                <h1>Returns</h1>
                <h1>Orders History</h1>
                <h1>Order Tracking</h1>
            </div>
            <div className='flex flex-col justify-center gap-[20px] mx-6 md:mt-11'>
                <h1 className='text-2xl font-semibold mb-3'>Pages</h1>
                <h1>Blog</h1>
                <h1>Browse the Shop</h1>
                <h1>Category</h1>
                <h1>Pre-Built Pages</h1>
                <h1>Visual Composer Elements</h1>
                <h1>WooCommerce Pages</h1>
            </div>
        </div>
    </footer>
<div className='h-[53px] w-[auto] flex justify-between items-center px-4 bg-[#E7E4F8]'>
    <h1 className='text-md'>©Webecy - All Rights Reserved</h1>
    <div className='h-[20px] w-[80px]'>
       <img src="/Blog/icon.svg" alt="" />
    </div>
    
</div>
    </>
  )
}

export default Footer