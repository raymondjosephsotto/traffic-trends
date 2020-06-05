import React, { useContext } from 'react';

import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { DataContext } from '../../contexts/DataContext';

const TimeStampChart = (props) => {
	const dataContext = useContext(DataContext);
	const config = {
		options: {
			chart: {
				id: 'area-chart',
				dropShadow: {
					enabled: true,
					top: 0,
					left: 0,
					blur: 3,
					opacity: 0.5,
				},
				zoom: {
					enabled: false,
				},
			},
			xaxis: {
				categories: dataContext.compareData.timestamp_by_hour.map(
					(time, index) => {
						return formatDate(time);
					}
				),
				labels: {
					style: {
						fontFamily: 'Poppins',
						fontSize: '12px',
						fontWeight: 'bold',
					},
				},
			},
		},
		series: [
			{
				name: 'Predicted Crashes',
				data: dataContext.compareData.predict_count.data,
			},
		],
	};

	return (
		<div>
			<Card className='flexItem1 card'>
				<CardHeader
					className='cardHeader'
					title='Predictions vs Actual'
					subheader='Predict Count and Timestamp by Hour'
				/>
				<Chart options={config.options} series={config.series} type='area' />
				<CardContent className='cardContent'>
					<Button
						variant='contained'
						color='secondary'
						type='button'
						onClick={props.onClose}>
						Close
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default TimeStampChart;

const formatDate = (seconds) => {
	const date = new Date(seconds);

	return `${date.getHours()}:${date.getMinutes()}`;
};
