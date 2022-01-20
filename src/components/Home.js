import Herobanner from "./sections/Herobanner";
import Product_Carousel from "./sections/HomeCorousel";
import HomeSkincare from "./sections/skincare";
import Whyashmira from "./sections/Whyashmira";
import CleanBeauty from "./sections/CleanBeauty";
import SilkySmooth from "./sections/SilkySmooth";
import OurNews from "./sections/OurNews";
import OurSpaPartners from "./sections/OurSpaPartners";
import GetTouch from "./sections/GetTouch";
import FooterTop from "./sections/FooterTop";



const Home_NEW = ({ acfhome }) => {
	const data = acfhome;
	return (
		<>	
			{/*Hero Banner Section*/}
			{data?.homeBanner && data?.bannerTitle && (<Herobanner data={data} />)}
			{/*Hero Product Carousel Section*/}
			{data?.bestSellersLogo && data?.bestSellersTitle && (<Product_Carousel data={data} />)}
			{/*Home Skin Care Section*/}
			{data?.skincareImage && data?.skincareTitle && (<HomeSkincare data={data} />)}
			{/*Home Why Ashmira Section*/}
			{data?.aboutAshmira && data?.whyAshmiraTitle && (<Whyashmira data={data} />)}
			{/*Home Clean Beauty Section*/}
			{data?.aboutAshmira && data?.whyAshmiraTitle && (<CleanBeauty data={data} />)}
			{/*Home Silky Smooth Section*/}
			{data?.silkySmoothDescription && data?.silkySmoothTitle && (<SilkySmooth data={data} />)}
			{/*Home Our News Section*/}
			{data?.ourNewsTitle && (<OurNews data={data} />)}
			{/*Home Our Spa Partners Section*/}
			{data?.ourSpaPartnersTitle && data?.ourSpaPartnersLogoOne?.mediaItemUrl && data?.ourSpaPartnersLogoTwo?.mediaItemUrl && (<OurSpaPartners data={data} />)}
			{/*Home Get Touch Section*/}
			{data?.stayInTouchSubTitle && data?.stayInTouchTitle && (<GetTouch data={data} />)}
			{/*Home Footer Top Section*/}
			{data?.stayInTouchSubTitle && data?.stayInTouchTitle && (<FooterTop data={data} />)}

		</>
	)
};

export default Home_NEW;