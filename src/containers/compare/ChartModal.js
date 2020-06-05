import React, { useState } from 'react';

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core/';
import TimeStampChart from './TimeStampChart';
import { FaChartLine } from 'react-icons/fa';

const ChartModal = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div className={classes.paper}>
			<TimeStampChart onClose={handleClose} />
		</div>
	);

	return (
		<StyledButtonWrapper>
			<Button
				variant='contained'
				color='primary'
				type='button'
				onClick={handleOpen}>
				Open Chart <FaChartLine style={{ marginLeft: '8px' }} />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				{body}
			</Modal>
		</StyledButtonWrapper>
	);
};

export default ChartModal;

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: '10vh',
		minWidth: '300px',
		width: '40vw',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
}));

const StyledButtonWrapper = styled.div`
	z-index: 3;
	position: fixed;
	top: 30vh;
	right: 6vh;
	@media screen and (max-width: 321px) {
		top: 35vh;
	}
`;
