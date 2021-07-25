import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { GoGraph } from 'react-icons/go';
import { FaCarCrash } from 'react-icons/fa';
import { MdPinDrop } from 'react-icons/md';
import { GiTrafficCone } from 'react-icons/gi';
import Logo from '../../assets/urbansdklogo.png';

const NavItems = () => {
	return (
		<div>
			<StyledNavItemsWrapper>
				<StyledNavItems>
					<img src={Logo} alt='logo' className='icons' />
					<LogoName>
						<b>TRAFFIC</b>TRENDS
					</LogoName>
				</StyledNavItems>
				<StyledNavItems>
					<GoGraph className='icons' />
					<NavLink to='/' className='description'>
						Dashboard
					</NavLink>
				</StyledNavItems>
				<StyledNavItems>
					<FaCarCrash className='icons' />
					<NavLink to='/prediction' className='description'>
						Prediction
					</NavLink>
				</StyledNavItems>
				<StyledNavItems>
					<GiTrafficCone className='icons' />
					<NavLink to='/zoneCount' className='description'>
						Zone Count
					</NavLink>
				</StyledNavItems>
				<StyledNavItems>
					<MdPinDrop className='icons' />
					<NavLink to='/compare' className='description'>
						Compare
					</NavLink>
				</StyledNavItems>
			</StyledNavItemsWrapper>
		</div>
	);
};

export default NavItems;

const StyledNavItemsWrapper = styled.ul`
	list-style-type: none;
	color: white;
	&:first-child {
		padding-top: 1.5rem;
	}
`;

export const LogoName = styled.div`
	position: relative;
	display: block;
	bottom: 35px;
	padding-left: 5px;
	margin-left: 10px;
	color: white;
	font-family: 'Poppins', sans-serif;
	font-size: 1.1em;
	visibility: hidden;
`;

const StyledNavItems = styled.li`
	padding-bottom: 4rem;
	font-family: 'Poppins', sans-serif;
	.description {
		position: relative;
		display: block;
		top: -30px;
		padding-left: 15px;
		padding-right: 25px;
		transition: all 0.3s ease;
		margin-left: 25px;
		margin-right: 10px;
		text-decoration: none;
		color: white;
		font-family: 'Poppins', sans-serif;
		font-weight: 100;
		font-size: 1.15em;
		line-height: 1em;
		&:after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 2px;
			background: radial-gradient(
				circle at 94.02% 88.03%,
				#54a4ff,
				transparent 100%
			);
			opacity: 0;
			transition: all 0.5s ease;
			z-index: -10;
		}
	}
	&:hover a:after {
		opacity: 1;
	}
	.icons {
		width: 26px;
		height: 26px;
		position: relative;
		left: -15px;
		cursor: pointer;
		@media screen and(min-width:600px) {
			width: 32px;
			height: 32px;
			left: -15px;
		}
	}
`;
