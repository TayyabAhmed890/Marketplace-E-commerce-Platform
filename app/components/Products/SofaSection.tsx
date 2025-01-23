import Image from 'next/image'
import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const Josefin = Josefin_Sans({subsets:['latin']});

const SofaSection = () => {
  return (
    <>
    {/* bg-[#F1F0FF] */}
    <section className='container mx-auto flex items-center px-5'>
        <div className='h-[auto] w-auto  m-auto flex items-center flex-wrap justify-center'>
        <div> 
            <Image src="/Products/sofa.svg" alt='' height={550} width={558}></Image>
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className={`${Josefin.className} text-[35px] font-bold`}>Unique Features Of leatest & <br />
            Trending Poducts</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                    <div className='h-[11px] w-[11px] bg-[#F52B70] rounded-full'></div>
                <h1>All frames constructed with hardwood solids and laminates</h1>
                </div>
                
                <div className='flex gap-4 items-center '>
                    <div className='h-[11px] w-[11px] bg-[#2B2BF5] rounded-full mb-6'></div>
                <h1>Reinforced with double wood dowels, glue, screw - nails corner <br />
                blocks and machine nails</h1>
                </div>
                
                <div className='flex gap-4 items-center'>
                    <div className='h-[11px] w-[11px] bg-[#2BF5CC] rounded-full'></div>
                <h1>Arms, backs and seats are structurally reinforced</h1>
                </div>
                
            </div>
            <div className='flex gap-6 my-6'>
                <button className='h-[45px] w-[157px] bg-pink-600 text-white'>Add to Cart</button>
                <div>
                <h1>B&B Italian Sofa </h1>
                <h1>$32.00</h1>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default SofaSection