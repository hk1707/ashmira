import Error from 'next/error';

export async function fetchAPI(data) {
    const headers = { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' };
    const API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/213/feedback`;
    try {
        const headers = { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
        let res = await fetch("https://ashmira-react.demoproject.info/ashmira-wp/wp-json/contact-form-7/v1/contact-forms/213/feedback", {
            method: "POST",
            body: data
        });

        let json = await res.json();
        if (res.status !== 200) {
            console.log("Some error occured");
        }
        if (json.errors) {
            return false;
        }
        return json ;


    } catch (err) {
        console.log(err);
        return null;
    }
}