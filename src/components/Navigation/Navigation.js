import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NavItems, { LogoName } from './NavItems';
import MobileNav from './MobileNav';

const Navigation = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 897);

	const updateMedia = () => {
		setIsMobile(window.innerWidth < 897);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		//Sets condition to display the Mobile Navigation or the Desktop Navigation
		<div>
			{isMobile ? (
				//Screen Size 896px and lower
				<MobileNav />
			) : (
				//Screen Size 896px and higher
				<NavBar>
					<NavItems />
				</NavBar>
			)}
		</div>
	);
};

export default Navigation;

const NavBar = styled.div`
	position: fixed;
	width: 60px;
	top: 0;
	height: 100vh;
	z-index: 100;
	background-color: #16163e;
	overflow: hidden;
	transition: width 0.3s ease;
	cursor: pointer;
	box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
	&:hover {
		width: 200px;
		${LogoName} {
			visibility: visible;
		}
	}
	@media screen and (min-width: 600px) {
		width: 80px;
	}
`;
