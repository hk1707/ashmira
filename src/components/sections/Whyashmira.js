import { useState } from 'react';
import Link from 'next/link';

const WhyAshmira = ({ data }) => {
    const styling = {
        backgroundImage: "url(" + data?.aboutAshmira[1]?.aboutAshmiraImage?.mediaItemUrl + ")",
        width: "100%",
        height: "100%",
    }
    return (
        <section>
            <div className="padding-common container product_list_main mx-auto my-4 px-4 xl:px-0">
                <div className="product_list_heading text-center">
                    {
                        data?.commonSectionIcon?.mediaItemUrl && data?.whyAshmiraTitle &&
                        (<>
                            <img src={data?.commonSectionIcon?.mediaItemUrl} />
                            <h3>{data?.whyAshmiraTitle}</h3>
                        </>)
                    }
                </div>
                <div className='botanica-banner-section'>
                    <div className='botanica-banner-inner-section'>
                        <div className='vegan-banner-section'>
                            {
                                data?.aboutAshmira[1] && (
                                    <>
                                        <div className='vegan-banner-image-section' style={styling}>
                                        </div>
                                        <div className='vegan-banner-text'>
                                            <h2>{data?.aboutAshmira[1]?.aboutAshmiraTitle}</h2>
                                            <p>{data?.aboutAshmira[1]?.aboutAshmiraDescription}</p>
                                            {
                                                data?.aboutAshmira[1]?.aboutAshmiraButtonText && (
                                                    <a className="custom_btn_hk block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10" href={data?.aboutAshmira[1]?.aboutAshmiraButton}>
                                                        <button className="btn px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:text-white hover:border-purple-600">Our Ingredients</button>
                                                    </a>
                                                )
                                            }

                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className='plant-banner-section'>
                            {
                                data?.aboutAshmira[0] && (
                                    <>
                                        <div className='plant-banner-image-section'>
                                            <img src={data?.aboutAshmira[0]?.aboutAshmiraImage?.mediaItemUrl} className='plant-image' />
                                        </div>
                                        <div className='plant-banner-text'>
                                            <h2>{data?.aboutAshmira[0]?.aboutAshmiraTitle}</h2>
                                            <p>{data?.aboutAshmira[0]?.aboutAshmiraDescription}</p>
                                            {
                                                data?.aboutAshmira[0]?.aboutAshmiraButtonText && (
                                                    <a className="custom_btn_hk block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10" href={data?.aboutAshmira[0]?.aboutAshmiraButton}>
                                                        <button className="btn px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:bg-purple-600 hover:text-white hover:border-purple-600">Our Ingredients</button>
                                                    </a>
                                                )
                                            }

                                        </div>
                                    </>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default WhyAshmira;