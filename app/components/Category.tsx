"use client"
import Link from 'next/link'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Category = () => {
    const [Open, setOpen] = useState(false)
const toggle = () => {
    setOpen(!Open)
}    
  return (
    <>
    <div onClick={toggle} className='flex items-center cursor-pointer gap-1'>
        <h1>Filter</h1>
    {Open? <IoIosArrowUp />:
        <IoIosArrowDown/> 
    }
    
    </div>
    {
        Open && (
            <ul className='absolute top-[513px] border-2 rounded-sm w-auto flex flex-col bg-white z-10'>
                <Link href={'/Pages/Shop'} className='border-b px-2 py-1 hover:text-white hover:bg-[#7E33E0]'><li>All Products</li></Link>
                <Link href={'/Pages/Shop/Categories/Chairs'} className='border-b px-2 py-1 hover:text-white hover:bg-[#7E33E0]'><li>Chairs</li></Link>
                <Link href={'/Pages/Shop/Categories/Sofas'} className=' px-2 py-1 hover:text-white hover:bg-[#7E33E0]'><li>Sofas</li></Link>
            </ul>
        )
    }
    </>
  )
}

export default Category