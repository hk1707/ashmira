import { useState } from 'react';
import Link from 'next/link';

const HomeSkincare = ({ data }) => {

    return (
        <section>
            <div className=" ashima-skin-banner" >
                <div className='ashima-skin-banner-inner'>
                    <div className='ashima-skin-img'>
                        {
                            data?.skincareImage?.mediaItemUrl && (<img src={data?.skincareImage?.mediaItemUrl} />)
                        }
                    </div>
                    <div className='ashima-skin-text'>
                        <div className='ashima-skin-text-in'>
                            <h2>{data?.skincareTitle}</h2>
                            <div dangerouslySetInnerHTML={{ __html: data?.skincareDescription }}></div>
                            <Link href={data?.skincareBtnLink && (data?.skincareBtnLink) ? data?.skincareBtnLink : "#"}>
                                <a className="custom_btn_hk block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10" >
                                    {data?.skincareButtonText && (<button className="btn px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:bg-purple-600 hover:text-white hover:border-purple-600">{data?.skincareButtonText}</button>)}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HomeSkincare;