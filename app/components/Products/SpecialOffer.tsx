import React from 'react'
import Image from 'next/image';
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const SpecialOffer = () => {
  return (
    <>
    <section className='h-auto w-auto flex flex-col items-center justify-center mb-16'>
    <h1 className={`${Josefin.className} font-bold text-4xl p-9 text-[#1A0B5B]`}>What Shoppex Offer</h1>
     <div className='flex items-center gap-[29px] flex-wrap justify-center'>
     <div className=' h-[361px] w-[270px] flex flex-col items-center justify-center gap-6 shadow-xl'>
     <Image className='' src="/Products/i1.svg" alt='' height={65} width={65}></Image>
     <h1>24/7 Support</h1>
     <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
     </div>
     <div className=' h-[361px] w-[270px] flex flex-col items-center justify-center gap-6 shadow-xl'>
     <Image className='' src="/Products/i2.svg" alt='' height={65} width={65}></Image>
     <h1>24/7 Support</h1>
     <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
     </div>
     <div className=' h-[361px] w-[270px] flex flex-col items-center justify-center gap-6 shadow-xl'>
     <Image className='' src="/Products/i3.svg" alt='' height={65} width={65}></Image>
     <h1>24/7 Support</h1>
     <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
     </div>
     <div className=' h-[361px] w-[270px] flex flex-col items-center justify-center gap-6 shadow-xl'>
     <Image className='' src="/Products/i4.svg" alt='' height={65} width={65}></Image>
     <h1>24/7 Support</h1>
     <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
     </div>
     </div>
    </section>
    </>
  )
}

export default SpecialOffer