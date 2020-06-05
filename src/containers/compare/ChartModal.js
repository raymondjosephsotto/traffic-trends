import React, { useState } from 'react';

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core/';
import TimeStampChart from './TimeStampChart';
import { FaChartLine } from 'react-icons/fa';

const ChartModal = () => {
	const [open, setOpen] = useState(false);
	// const [modalStyle] = useState(getModalStyle);
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
		position: 'absolute',
		top: '10vh',
		left: '32vw',
		minwidth: '340px',
		width: '40vw',
		backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const StyledButtonWrapper = styled.div`
	z-index: 3;
	position: fixed;
	top: 30vh;
	right: 6vh;
`;
