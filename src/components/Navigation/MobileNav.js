import React from 'react';

import { NavLink } from 'react-router-dom';
import {
	makeStyles,
	BottomNavigation,
	BottomNavigationAction,
	AppBar,
} from '@material-ui/core/';
import styled from 'styled-components';

import { GoGraph } from 'react-icons/go';
import { FaCarCrash } from 'react-icons/fa';
import { MdPinDrop } from 'react-icons/md';
import { GiTrafficCone } from 'react-icons/gi';

import Logo from '../../assets/urbansdklogo.png';

const MobileNav = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState('recents');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<AppBar className={classes.appBar}>
				
					<LogoWrapper>
					<img src={Logo} alt='logo' className='icons' />
						<b>TRAFFIC</b>TRENDS
					</LogoWrapper>
			</AppBar>
			<BottomNavigation
				value={value}
				onChange={handleChange}
				className={classes.root}>
				<StyledBottomNavigationAction
					component={NavLink}
					to='/'
					label='Dashboard'
					value='dashboard'
					icon={<GoGraph className='icons' />}
				/>
				<StyledBottomNavigationAction
					component={NavLink}
					to='/prediction'
					label='Prediction'
					value='prediction'
					icon={<FaCarCrash className='icons' />}
				/>
				<StyledBottomNavigationAction
					component={NavLink}
					to='/zoneCount'
					label='Zone Count'
					value='zoneCount'
					icon={<GiTrafficCone className='icons' />}
				/>
				<StyledBottomNavigationAction
					component={NavLink}
					to='/compare'
					label='Compare'
					value='compare'
					icon={<MdPinDrop className='icons' />}
				/>
			</BottomNavigation>
		</React.Fragment>
	);
};

export default MobileNav;

const useStyles = makeStyles({
	root: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
		backgroundColor: '#16163e',
		boxShadow: '4px 7px 10px rgba(0, 0, 0, 0.4)',
		zIndex: '100',
	},
	appBar: {
		width: '100%',
		backgroundColor: '#16163e',
		padding: '2%',
	},
	logoFull: {
		width: '120px',
		height: '20px',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
	.MuiBottomNavigationAction-wrapper {
		color: white;
		.icons {
			width: 22px;
			height: 22px;
			left: -15px;
			cursor: pointer;
		}
	}
	.MuiBottomNavigationAction-label {
		font-size: 2px;
		line-height: 14px;
	}
`;

export const LogoWrapper = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-family: 'Poppins', sans-serif;
	font-size: 1.1em;

	img{
		width: 30px;
		height: 30px;
		margin: 5px ;
	}
`;