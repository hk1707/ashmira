const OurNews = ({ data }) => {

    return (
        <div className="padding-common container product_list_main mx-auto my-4 px-4 xl:px-0">
            <div className="product_list_heading text-center">
                {
                    data?.commonSectionIcon?.mediaItemUrl && data?.ourNewsTitle &&
                    (<>
                        <img src={data?.commonSectionIcon?.mediaItemUrl} />
                        <h3>{data?.ourNewsTitle}</h3>
                    </>)
                }
            </div>
            <div className="product_list_in news_section">

                <div className="product_item">
                    <div className="product_item_img news_section_img">
                        <img src="https://ashmira-react.demoproject.info/ashmira-wp/wp-content/uploads/2022/01/clay-scaled-1.jpeg" width="342px" />
                    </div>
                    <div className='product_item_description'>
                        <h2 className="product-title">The Benefits of Clay</h2>
                        <p className="product-attr">The Ashmira Botanica skincare range focuses on unblocking stale, sluggish energy, balancing elements and leaving you...</p>
                    </div>
                </div>
                <div className="product_item">
                    <div className="product_item_img news_section_img">
                        <img src="https://ashmira-react.demoproject.info/ashmira-wp/wp-content/uploads/2022/01/eyebrow-wax.jpg" width="342px" />
                    </div>
                    <div className='product_item_description'>
                        <h2 className="product-title">Eyebrow Waxing </h2>
                        <p className="product-attr">Eyebrows are such an essential part of your face, maintenance and grooming can make such a difference to how they...</p>
                    </div>
                </div>
                <div className="product_item">
                    <div className="product_item_img news_section_img">
                        <img src="https://ashmira-react.demoproject.info/ashmira-wp/wp-content/uploads/2021/12/Zero-Residue.jpg" width="342px" />
                    </div>
                    <div className='product_item_description'>
                        <h2 className="product-title">Peelable Waxes</h2>
                        <p className="product-attr">Have you tried peelable waxing yet? Did you know you can actually cut costs down by changing over to peelable waxes!...</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default OurNews;