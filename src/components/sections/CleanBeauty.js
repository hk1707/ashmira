const CleanBeauty = ({ data }) => {

    return (
        <div className='clean-beauty-section py-4'>
            <div className='clean-beauty-inner-section'>
                <div className='clean-beauty-section-text'>
                    <div className='clean-beauty-heading'>
                        <h2>{data?.cleanBeautyTitle}</h2>
                    </div>
                    <p>{data?.cleanBeautyDescription}</p>
                </div>
                <div className='clean-beauty-section-image'>
                    {data?.cleanBeautyIconWithTitle?.map(function (d, idx) {
                        return (
                            <div className='clean-beauty-image-part' key={idx} >
                                {
                                  d.cleanBeautyIcon?.mediaItemUrl && (<img src={d.cleanBeautyIcon?.mediaItemUrl} />)
                                }
                                <h4>{d.cleanBeautyTitle}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
export default CleanBeauty;