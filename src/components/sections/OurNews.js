import Link from 'next/link';

const OurNews = ({ data, postItem }) => {
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
            <div className="product_list_in news_section home_post_list">
                {postItem?.map(function (d, idx) {
                    return (
                        <div className="product_item home_post_item" key={idx} >
                            <Link href={`blog/${d?.slug && (d?.slug) ? d?.slug : "#"}`}>
                                <a>
                                    <div className="product_item_img news_section_img">
                                        {
                                            d.featuredImage?.node?.sourceUrl && (<img src={d.featuredImage?.node?.sourceUrl} />)
                                        }
                                    </div>
                                    <h2 className="product-title">{d.title}</h2>
                                    <div className="home_post_content" dangerouslySetInnerHTML={{ __html: d?.content }} ></div>
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default OurNews;