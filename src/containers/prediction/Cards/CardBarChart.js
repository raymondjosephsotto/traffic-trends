import React, { useContext } from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { ContextApi } from '../../../contexts/ContextApi';

const CardBarChart = () => {
	const predictions = useContext(ContextApi);

	const data = {
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
				categories: predictions.map((prediction) => prediction.label),
				labels: {
					style: {
						fontFamily: 'Poppins',
						fontSize: '12px',
						fontWeight: 'bold',
					},
				},
			},
			plotOptions: {
				bar: { horizontal: false },
			},
			fill: {
				colors: ['#20E647'],
				type: 'gradient',
				gradient: {
					shade: 'dark',
					type: 'vertical',
					gradientToColors: ['#87D4F9'],
					stops: [0, 100],
				},
			},
		},
		series: [
			{
				name: 'Predicted Crashes',
				data: predictions.map((prediction) => prediction.value),
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
				<Chart options={data.options} series={data.series} type='bar' />
				<CardContent className='cardContent'>
					<p>
						Develop a dashboard to display and track trends in traffic crashes
						in Duval County. Data: Use the provided JSON data for traffic
						crashes to develop static sources.
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default CardBarChart;
