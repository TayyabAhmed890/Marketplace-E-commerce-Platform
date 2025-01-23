import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});
const ImageSection = () => {
  return (
    <>
    <section>
    <div
      className="h-[462px] container mx-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/Products/wallpaper.svg')" }}
    >
      <div className="flex items-center justify-center h-full text-center">
        <div className='h-[185px] w-[574px]  flex flex-col items-center justify-center'>
          <p className={`${Josefin.className} text-[#151875] text-lg font-bold md:text-4xl mb-4`}>
            Get Latest Update By Subscribe Our Newsletter
          </p>
         <button className='h-[49px] w-[173px] bg-[#FB2E86] text-white'>
          Shop Now
         </button>
        </div>
      </div>
    </div>
    </section>
    <div className='h-auto w-auto  mx-auto'>
      <img className='h-[93px] w-[400px] md:w-[800px] mx-auto' src="/Products/company.svg" alt="" />
    </div>
    </>
  )
}

export default ImageSection