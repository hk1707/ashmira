import { useState } from 'react';
import Link from 'next/link';

const Herobanner = () => {

    const styling = {
        backgroundImage: "url(https://www.ashmirabotanica.com/wp-content/uploads/2021/07/homepage-slider-bg3.jpg)",
        width:"100%",
        height:"100%"
      }

	return (
		<div className="ashima-hero-banner" style={styling} > 
            <div className='ashima-hero-banner-inner'>
                <Link href="/">
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
                        <h1>Luxury Wax and Skincare</h1>
                    </a>
                </Link>
                <Link href="/">
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
                    <button className="px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:bg-purple-600 hover:text-white hover:border-purple-600">Shop Now</button>
                    </a>
                </Link>
            </div>
		</div>
	)
};

export default Herobanner;
