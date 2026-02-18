import { fontBangla } from '@/app/layout'
import Image from 'next/image'
import React from 'react'
//${fontBangla.className}
const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
                <h2 className={`text-5xl font-bold leading-20`}>আপনার শিশুকে দিন সুন্দর <span className='text-primary'>একটি ভবিষ্যৎ</span></h2>
                <p>Buy every top with up to 15% Discount</p>
                <button className='btn  btn-primary btn-outline'>Explore Products</button>
            </div>
            <div className='flex-1'>
                <Image alt='buy every toy'
                    width={500}
                    height={400}
                    src={"/assets/hero.png"}>

                </Image>
            </div>
        </div>
    )
}

export default Banner