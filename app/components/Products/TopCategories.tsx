// import React from 'react'
// import { Josefin_Sans } from 'next/font/google'
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   quantity: number;
//   price: number;
//   image_url: string;
//   rating?: number; // Optional field
// }

// const getData = async ():Promise<Product[]> => {
//   const response = await client.fetch(`
//     [
//       *[_type == "product" && category == "Chair"][13],
//       *[_type == "product" && category == "Chair"][7],
//       *[_type == "product" && category == "Chair"][18],
//       *[_type == "product" && category == "Chair"][5],
//     ]
//   {
//     id,
//     name,
//     description,
//     quantity,
//     price,
//     "image_url":image.asset->url,
//     rating
// }
//     `)

// return response;

// }

// const Josefin = Josefin_Sans({subsets:['latin']});

// const TopCategories = async () => {
//     const product = await getData();
//     const validProducts = product.filter((product: Product) => product && product.id);
//   return (
//     <section className='flex justify-center items-center flex-col container mx-auto'>
//         <div><h1 className={`${Josefin.className} font-bold text-4xl p-9 text-[#1A0B5B]`}>Top Categories</h1></div>
//         <div className='flex items-center justify-center h-auto w-auto gap-[39px] flex-wrap'>
//             {validProducts.map((chairs:Product,index:number)=>(
//                 <div key={index} className='w-[269px] h-[345px]  flex flex-col justify-between items-center'>
//                 <div className='h-[269px] w-[269px] rounded-full bg-[#F6F7FB] flex items-center justify-center'>
//                     <Image className='h-[178px] w-[178px]' src={chairs.image_url} alt="" height={100} width={100}/>
//                 </div>
//                 <div className='flex flex-col items-center justify-center'>
//                 <h1 className={`${Josefin.className} text-xl`}>Mini LCW Chair</h1>
//                 <h1 className={`${Josefin.className} text-lg`}>$56.00</h1>
                    
//                 </div>
//             </div>
//             ))}
//         </div>
//     </section>
//   )
// }

// export default TopCategories