import AshmiraNavTop from "./AshmiraNavTop";
import AshmiraMainNav from "./Menu";

const Header = () => {
	return (
		<header className="header" suppressHydrationWarning={true} >
			<AshmiraNavTop />
			<AshmiraMainNav />
		</header>
	)
};

export default Header;
