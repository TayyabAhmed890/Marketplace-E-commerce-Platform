import React from 'react';
import { Josefin_Sans } from 'next/font/google';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image_url: string;
    rating?: number; // Optional field
}

const getData = async (): Promise<Product[]> => {
    const response = await client.fetch(`
        [
            *[_type == "product" && category == "Chair"][17],
            *[_type == "product" && category == "Chair"][16],
            *[_type == "product" && category == "Chair"][5],
            *[_type == "product" && category == "Chair"][13],
        ]
    {
        id,
        name,
        description,
        quantity,
        price,
        "image_url":image.asset->url,
        rating
    }
    `);

    return response;
};

const getData2 = async () => {
    const response = await client.fetch(`
        [
            *[_type == "product" && category == "Chair"][14],
            *[_type == "product" && category == "Chair"][12],
            *[_type == "product" && category == "Chair"][6],
        ]
    {
        id,
        name,
        description,
        quantity,
        price,
        "image_url":image.asset->url,
        rating
    }
    `);

    return response;
};

const Josefin = Josefin_Sans({ subsets: ['latin'] });

const Trending = async () => {
    const product = await getData();
    const product2 = await getData2();

    // Filter out null or invalid products
    const validProducts = product.filter((product: Product) => product && product.id);
    const validProducts2 = product2.filter((product: Product) => product && product.id);

    return (
        <>
            <section className="container mx-auto flex flex-col justify-center items-center gap-9">
                <div>
                    <h1 className={`${Josefin.className} font-bold text-4xl mt-7 text-[#1A0B5B]`}>Trending Products</h1>
                </div>
                <div className="h-auto w-auto flex justify-center items-center gap-[29px] flex-wrap">
                    {validProducts.map((product: Product, index: number) => (
                        <Link key={index} href={`/Product/${product.id}`}>
                            <div className="w-[270px] h-[350px] flex flex-col items-center pt-3 justify-start">
                                <div className="h-[244px] w-[247px] bg-[#F5F6F8] flex items-center justify-center">
                                    <Image src={product.image_url} alt={product.name} height={190} width={190} />
                                </div>
                                <div className="mt-5">
                                    <h1 className={`${Josefin.className} text-xl`}>{product.name}</h1>
                                    <div className="flex justify-center gap-3">
                                        <h1>${product.price}</h1>
                                        <h1><s>${(product.price * 1.5).toFixed(2)}</s></h1>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="container px-5 flex items-center justify-center gap-[22px] flex-wrap mb-10">
                    <div className="h-[270px] w-[420px] bg-[#FFF6FB] flex flex-col">
                        <div className="w-[269px] h-[56px] flex flex-col px-2 py-2">
                            <h1 className={`${Josefin.className} text-[25px]`}>23% off in all products</h1>
                            <h1>Shop Now</h1>
                        </div>
                        <div className="flex justify-end">
                            <img src="/Products/time.svg" alt="Time Discount" className="w-[213px] h-[207px] mt-3" />
                        </div>
                    </div>
                    <div className="h-[270px] w-[420px] bg-[#EEEFFB]">
                        <div className="w-[269px] h-[56px] flex flex-col px-2 py-2">
                            <h1 className={`${Josefin.className} text-[25px]`}>23% off in all products</h1>
                            <h1>View Collection</h1>
                        </div>
                        <div className="flex justify-end">
                            <img src="/Products/table.svg" alt="Table Discount" className="w-[312px] h-[173px] mt-4" />
                        </div>
                    </div>
                    <div className="h-[262px] w-[267px] flex flex-col justify-between">
                        {validProducts2.map((product: Product, index: number) => (
                            <div key={index} className="h-[74px] w-[267px] flex items-center gap-2">
                                <div className="h-[74px] w-[107px] bg-[#F5F6F8] flex items-center justify-center">
                                    <Image className="h-[71px] w-[64px]" src={product.image_url} alt={product.name} height={100} width={100} />
                                </div>
                                <div className={`${Josefin.className}`}>
                                    <h1>{product.name}</h1>
                                    <h1><s>${(product.price * 1.5).toFixed(2)}</s></h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Trending;
