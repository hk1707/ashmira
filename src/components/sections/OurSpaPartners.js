const OurSpaPartners = ({ data }) => {

    return (
        <div className="container product_list_main spa-section mx-auto my-4 px-4 xl:px-0">
            <div className="product_list_heading text-center">
                {
                    data?.commonSectionIcon?.mediaItemUrl && data?.ourSpaPartnersTitle &&
                    (<>
                        <img src={data?.commonSectionIcon?.mediaItemUrl} />
                        <h3>{data?.ourSpaPartnersTitle}</h3>
                    </>)
                }
            </div>
            <div className='spa-banner-section'>
                <div className='spa-banner-img-section'>
                    <span>
                        {
                            data?.ourSpaPartnersLogoOne?.mediaItemUrl && (<img src={data?.ourSpaPartnersLogoOne?.mediaItemUrl} />)
                        }
                    </span>
                </div>
                <div className='spa-banner-img-section'>
                    <span>
                        {
                            data?.ourSpaPartnersLogoTwo?.mediaItemUrl && (<img src={data?.ourSpaPartnersLogoTwo?.mediaItemUrl} />)
                        }
                    </span>
                </div>
            </div>
        </div>
    )

};
export default OurSpaPartners;