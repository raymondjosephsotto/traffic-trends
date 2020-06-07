import React, { useContext } from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { DataContext } from '../../../contexts/DataContext';

const CardDonutChart = () => {
	const dataContext = useContext(DataContext);

	const config = {
		series: dataContext.predictions.map((prediction) => prediction.value),
		options: {
			chart: {
				type: 'pie',
			},
			labels: dataContext.predictions.map((prediction) => prediction.label),
		},
	};
	return (
		<div>
			<Card className='flexItem2 card'>
				<CardHeader
					className='cardHeader'
					title='Crash Predictions'
					subheader="Here's the overview of track trends"
				/>
				<Chart options={config.options} series={config.series} type='donut' />
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

export default CardDonutChart;
