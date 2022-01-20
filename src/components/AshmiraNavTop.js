import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import { useState } from 'react';

const AshmiraNavTop = () => {

	const [ isMenuVisible, setMenuVisibility ] = useState(false);

	return (
		<div className="color-asmira p-4">
            <div className="asmira-top-nav flex items-center justify-between flex-wrap container mx-auto ">
				<div className='asmira-top-nav-item flex items-center'></div>
				<div className='asmira-top-nav-item justify-center flex items-center'>
					<Link href="/">
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
							<img src='/ashmira-botanica-logo.png' />
						</a>
					</Link>
				</div>
				<div className='asmira-top-nav-item justify-end flex items-center'>
					<div className="text-sm font-medium">
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="100%" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-10">
							<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="100%" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Account
						</a>
						<CartIcon/>
					</div>
				</div>
            </div>
			
		</div>
	)
};

export default AshmiraNavTop;
