const GetTouch = ({ data }) => {
    const styling = {
        backgroundImage: "url(" + data?.stayInTouchImage?.mediaItemUrl + ")",
        height:"100%",
    }
    return(
        <div className='subscribed-section'>
            <div className='subscribed-form-section'>
                <div className='subscribed-description'>
                    <h3>{data?.stayInTouchTitle}</h3>
                    <p>{data?.stayInTouchSubTitle}</p>
                </div>
                <div className='subscribed-form'>
                    <form className='subscribed-contact-form' method='post' action='#'>
                        <input type="text" className="email-field" placeholder='Email Address' name='email' />
                        <input type="submit" className="sign-me-button" value="Sign me up" />
                    </form>
                </div>
            </div>
            <div className='subscribed-image' style={styling}></div>
        </div>
    )
};
export default GetTouch;