import { useState } from 'react';
import Link from 'next/link';

const Herobanner = ({ data }) => {

    const styling = {

        backgroundImage: "url(" + data?.homeBanner?.mediaItemUrl + ")",
        width: "100%",
        height: "100%"
    }

    return (
        <div className="ashima-hero-banner" style={styling} >
            <div className='ashima-hero-banner-inner'>
                <Link href={data?.bannerBtnLink && (data?.bannerBtnLink) ? data?.bannerBtnLink : "#"}>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
                        <h1>{data?.bannerTitle}</h1>
                    </a>
                </Link>
                <Link href={data?.bannerBtnLink && (data?.bannerBtnLink) ? data?.bannerBtnLink : "#"}>
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
                        {data?.bannerButtonLinkText && (<button className="px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:bg-purple-600 hover:text-white hover:border-purple-600">{data?.bannerButtonLinkText}</button>)}
                    </a>
                </Link>
            </div>
        </div>
    )
};

export default Herobanner;
