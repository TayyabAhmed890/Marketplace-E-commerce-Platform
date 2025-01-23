import React from 'react'
import { Josefin_Sans } from 'next/font/google'
import { FaPenNib } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const Josefin = Josefin_Sans({subsets:['latin']});

const BlogSection = () => {
  return (
   <section className=' flex flex-col items-center justify-center '>
     <div><h1 className={`${Josefin.className} font-bold text-4xl p-9 text-[#1A0B5B]`}>Latest Blog</h1>
     </div>
     <div className='flex items-center justify-center gap-[56px] flex-wrap'>
        <div className='h-[493px] w-[340px] sm:w-[370px] '>
            <div className='w-[340px] sm:w-[370px] h-[231px] sm:h-[255px] bg-white rounded-[8px]'>
                <img src="/Blog/blog.svg" alt="" />
            </div>
            <div className='p-5 flex flex-col justify-center gap-6'>
            <div className='flex items-center gap-12'>
                <h1 className={`${Josefin.className} flex gap-2`}><span className='mt-[1px]'><FaPenNib className='text-[#FB2E86]'/></span> SaberAli</h1>
                <h1 className={`${Josefin.className} flex  gap-2`}><span className='mt-[1px]'><FaRegCalendarAlt className='text-[#FFA454]'/></span>21 August,2020</h1>
            </div>
            <h1 className={`${Josefin.className} text-xl`}>Top esssential Trends in 2021</h1>
            <h1>More off this less hello samlande lied much
over tightly circa horse taped mightly</h1>
            <h1>Read More</h1>
            </div>
        </div>
        <div className='h-[493px] w-[340px] sm:w-[370px]'>
            <div className='w-[340px] sm:w-[370px] h-[231px] sm:h-[255px] bg-white rounded-[8px]'>
                <img src="/Blog/blog2.svg" alt="" className='rounded-[8px]'/>
            </div>
            <div className='p-5 flex flex-col justify-center gap-6'>
            <div className='flex items-center gap-12'>
                <h1 className={`${Josefin.className} flex gap-2`}><span className='mt-[1px]'><FaPenNib className='text-[#FB2E86]'/></span> SaberAli</h1>
                <h1 className={`${Josefin.className} flex  gap-2`}><span className='mt-[1px]'><FaRegCalendarAlt className='text-[#FFA454]'/></span>21 August,2020</h1>
            </div>
            <h1 className={`${Josefin.className} text-xl`}>Top esssential Trends in 2021</h1>
            <h1>More off this less hello samlande lied much
over tightly circa horse taped mightly</h1>
            <h1>Read More</h1>
            </div>
        </div>
        <div className='h-[493px] w-[340px] sm:w-[370px]'>
            <div className='w-[340px] sm:w-[370px] h-[231px] sm:h-[255px] bg-white rounded-[8px]'>
                <img src="/Blog/blog1.svg" alt="" />
            </div>
            <div className='p-5 flex flex-col justify-center gap-6'>
            <div className='flex items-center gap-12'>
                <h1 className={`${Josefin.className} flex gap-2`}><span className='mt-[1px]'><FaPenNib className='text-[#FB2E86]'/></span> SaberAli</h1>
                <h1 className={`${Josefin.className} flex  gap-2`}><span className='mt-[1px]'><FaRegCalendarAlt className='text-[#FFA454]'/></span>21 August,2020</h1>
            </div>
            <h1 className={`${Josefin.className} text-xl`}>Top esssential Trends in 2021</h1>
            <h1>More off this less hello samlande lied much
over tightly circa horse taped mightly</h1>
            <h1>Read More</h1>
            </div>
        </div>
     </div>
   </section>
  )
}

export default BlogSection