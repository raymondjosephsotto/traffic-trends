import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { DataContext } from '../../../contexts/DataContext';
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const CardPrediction = () => {
	const dataContext = useContext(DataContext);
	const config = {
		options: {
			chart: {
				id: 'basic-bar',
				dropShadow: {
					enabled: true,
					top: 0,
					left: 0,
					blur: 3,
					opacity: 0.5,
				},
			},
			xaxis: {
				categories: dataContext.predictions.map(
					(prediction) => prediction.label
				),
			},
			yaxis: {
				labels: {
					style: {
						fontFamily: 'Poppins',
						fontSize: '12px',
						fontWeight: 'bold',
					},
				},
			},
			plotOptions: {
				bar: { horizontal: true },
			},
			fill: {
				colors: ['#f44336'],
			},
		},
		series: [
			{
				name: 'Predicted Crashes',
				data: dataContext.predictions.map((prediction) => prediction.value),
			},
		],
	};
	return (
		<div>
			<Card className='flexItem1 card'>
				<CardHeader
					className='cardHeader'
					title='Crash Predictions'
					subheader="Here's the overview of track trends"
				/>
				<Chart options={config.options} series={config.series} type='bar' />
				<CardContent className='cardContent'>
					<p>
						Develop a dashboard to display and track trends in traffic crashes
						in Duval County. Data: Use the provided JSON data for traffic
						crashes to develop static sources.
					</p>
				</CardContent>
				<StyledButton>
					<Button
						size='medium'
						color='primary'
						style={{
							fontWeight: 'bold',
						}}>
						<Link to='/prediction' className='linkButton'>
							Learn More
						</Link>
					</Button>
				</StyledButton>
			</Card>
		</div>
	);
};

export default CardPrediction;

const StyledButton = styled.div`
	font-family: 'Open Sans';
	font-weight: bold;
	display: flex;
	justify-content: flex-end;
	padding: 2px;
	.linkButton {
		text-decoration: none;
		color: #1489fe;
	}
`;
