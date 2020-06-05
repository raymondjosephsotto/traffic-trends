import React from 'react';

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const SelectButton = (props) => {
	const classes = useStyles();
	// const [age, setAge] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleChange = (event) => {
		props.onLevelChange(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<StyledSelectButtonWrapper>
			<Button className={classes.button} onClick={handleOpen}>
				Select Traffic Levels:
			</Button>
			<FormControl className={classes.formControl}>
				<InputLabel id='demo-controlled-open-select-label'>Level</InputLabel>
				<Select
					labelId='demo-controlled-open-select-label'
					id='demo-controlled-open-select'
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={props.level}
					onChange={handleChange}>
					<MenuItem value='All'>
						<em>All</em>
					</MenuItem>
					<MenuItem value='low'>Low</MenuItem>
					<MenuItem value='medium'>Medium</MenuItem>
					<MenuItem value='high'>High</MenuItem>
				</Select>
			</FormControl>
		</StyledSelectButtonWrapper>
	);
};

export default SelectButton;

const StyledSelectButtonWrapper = styled.div`
	z-index: 3;
	position: fixed;
	top: 10vh;
	right: 2vh;
	background-color: white;
	border-radius: 12px;
`;
