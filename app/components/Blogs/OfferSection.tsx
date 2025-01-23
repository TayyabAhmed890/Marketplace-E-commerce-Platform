import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const OfferSection = () => {
  return (
    <>
    <section className='flex flex-col items-center justify-center mx-auto'>
    <h1 className={`${Josefin.className} font-bold text-4xl text-[#1A0B5B]`}>Latest Products</h1>
   <div className=' w-[auto] h-[auto] items-center flex justify-evenly mb-8 flex-wrap gap-16'>
    <h1>Wood Chair</h1>
    <h1>Plastic Chair</h1>
    <h1>Sofa Collection</h1>
   </div>

        <div className='w-auto flex items-center justify-center flex-wrap '>
        <div className='h-[auto] mx-auto flex flex-col justify-center gap-10  p-4'>
            <h1 className={`${Josefin.className} text-2xl sm:text-4xl`}>20% Discount Of All Products</h1>
            <h1 className={`${Josefin.className} text-lg sm:text-2xl`}>Eams Sofa Compact</h1>
            <h1 className=' '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br /> feugiat habitasse nec, bibendum condimentum.</h1>
            <div className='flex items-center gap-4'>
              <div className='flex flex-col gap-2'>
              <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                </div>
                <div className='flex flex-col gap-2'>
              <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                <div className='flex'>
              <img src="/Blog/tick.svg" alt="" />
                <h1>Material expose like metals</h1>
                </div>
                </div>
            </div>
            <button className='h-[57px] w-[200px] bg-pink-500'>Shop Now</button>
        </div>
        <div className='h-auto w-auto md:w-[550px]  mx-auto relative z-40 flex items-center justify-center '>
            <div className='bg-pink-300 rounded-full h-[300px] md:h-[400px] inset-0 w-[300px] md:w-[400px] -z-10 absolute top-32 md:top-28 left-8 md:left-20 '></div>
            <img className='h-[597px] w-[699px]' src="/Blog/s1.svg" alt="" />
        </div>
        </div>
  
    </section>
    </>
  )
}

export default OfferSection