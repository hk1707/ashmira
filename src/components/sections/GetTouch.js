import { useState } from "react";
import { fetchAPI } from "../contactform/contact";

const GetTouch = ({ data }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        let err = [];
        let formData = new FormData();
        formData.append('your-email', email);
        const form = await fetchAPI(formData);
        console.log(form);
        setMessage(form.message);
        if(form?.invalid_fields.length === 0){
            setEmail('');
        }
        // form?.invalid_fields?.map((item, i) => (
        //     //console.log(item)
        // ));

      }

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
                    <form className='subscribed-contact-form' onSubmit={handleSubmit} >
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="email-field" placeholder='Email Address' name='your-email' />
                        <input type="submit"  className="sign-me-button" value="Sign me up" />
                        <span className="wpcf7-form-control-wrap your-email"></span>
                    </form>
                    {message && (<div className="contacterrormsg">{message}</div>)}
                </div>
            </div>
            <div className='subscribed-image' style={styling}></div>
        </div>
    )
};
export default GetTouch;