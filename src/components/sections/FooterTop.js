const FooterTop = ({ data }) => {
    const styling = {
        backgroundImage: "url(" + data?.ashmiraQuoteImage?.mediaItemUrl + ")",
        width:"100%",
        height:"100%",
        backgroundSize: "initial",
        backgroundPosition: "top center"
    }
    return(
        <div className='padding-common pattern-img-section mx-auto my-4 px-4 xl:px-0' style={styling}>
            <div className='pattern-section-content'>
                <h4>{data?.ashmiraQuoteTitle}</h4>
                <p><span>{data?.ashmiraQuoteSubtitle}</span></p>
            </div>
        </div>
    )
};
export default FooterTop;