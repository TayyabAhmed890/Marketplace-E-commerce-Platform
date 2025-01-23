"use client"
import Image from 'next/image'
import { Josefin_Sans } from 'next/font/google'
import { useRouter } from 'next/navigation';


const Josefin = Josefin_Sans({subsets:['latin']});

const Hero = () => {
  const router = useRouter()
  
      const ShopRoute = () =>{
        router.push('/Pages/Shop')
      }
  return (
    <>
    <section className='h-auto bg-[#F2F0FF] flex justify-around gap-4 items-center flex-wrap px-3'>
        <div className='h-[400px] sm:h-[520px] lg:h-[794px] w-auto'>
        <div className='flex items-start h-[400px] '>
        <Image className='' src="/Header/lamp.svg" alt='' height={387} width={387}></Image>
        </div>
        </div>
        <div className='h-[368px] w-[644px] flex flex-col justify-center gap-7'>
            <h1 className='text-xl text-pink-600'>Best Furniture For Your Castle....</h1>
            <h1 className={`${Josefin.className} text-5xl font-bold`}>New Furniture Collection
            Trends in 2020</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>
            <button onClick={ShopRoute} className='w-[150px] h-[50px] bg-pink-600 text-white mb-4 py-2'>Shop Now</button>
        </div>
        <div className='my-14'>
        <Image className='' src="/Header/sofa.svg" alt='' height={689} width={706}></Image>
        </div>
    </section>
    </>
  )
}

{/* <div className='h-[400px] sm:h-[520px] lg:h-[794px] w-auto'>
<div className='flex items-start h-[400px] '>
<Image className='' src="/Header/lamp.svg" alt='' height={387} width={387}></Image>
</div>
</div>
<div className='h-[368px] w-[644px] flex flex-col justify-center gap-7'>
    <h1 className='text-xl text-pink-600'>Best Furniture For Your Castle....</h1>
    <h1 className={`${Josefin.className} text-5xl font-bold`}>New Furniture Collection
    Trends in 2020</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
    in phasellus non in justo.</p>
    <button className='w-[150px] h-[50px] bg-pink-600 text-white mb-4 py-2'>Shop Now</button>
</div>
<div className='my-14'>
<Image className='' src="/Header/sofa.svg" alt='' height={689} width={706}></Image>
</div> */}

export default Hero