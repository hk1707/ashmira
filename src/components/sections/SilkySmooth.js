const SilkySmooth = ({ data }) => {
    const styling = {
        backgroundImage: "url(" + data?.silkySmoothImage?.mediaItemUrl + ")",
        width: "100%"
    }
    return (
        <div className='ashima-smooth-banner-image-section'>
            <div className=" ashima-smooth-banner" style={styling}>
            </div>
            <div className='ashima-smooth-banner-inner'>
                <div className='ashima-smooth-img'>

                </div>
                <div className='ashima-smooth-text'>
                    <div className='ashima-smooth-text-in'>
                        <h2>{data?.silkySmoothTitle}</h2>
                        <p>{data?.silkySmoothDescription}</p>
                        <a className="custom_btn_hk block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10" href="/"><button className="btn px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:bg-purple-600 hover:text-white hover:border-purple-600">Wax Products</button></a>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default SilkySmooth;