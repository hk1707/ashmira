import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import { useRouter } from 'next/router';
import { useState } from 'react';

const Nav = ( props ) => {

	const { menuitems } = props;
	const [ isMenuVisible, setMenuVisibility ] = useState(false);
	const router = useRouter(); 

	return (
		<div className="bg-white p-4 main-nav-menu">
			<div className="flex items-center justify-between flex-wrap container mx-auto">

				{/*Menu button*/}
				<div className="block lg:hidden">
					<button onClick={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>

				{/*MMenu in mobile*/}
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full main-nav-menu-inner overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					<div className="text-sm text-center font-medium uppercase lg:flex-grow">
					
					{
						menuitems.map( item => 
						<Link href={item.node.path} key={item.node.id}>
							<a className="block mt-4 main-nav-menu-item lg:inline-block lg:mt-0 text-gray hover:text-black mr-10">
								{item.node.label}
							</a>
						</Link>

						)
					}
					</div>
				</div>

			</div>
		</div>
	)
};

export default Nav;