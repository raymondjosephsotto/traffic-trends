import React, { useContext } from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { ContextApi } from '../../../contexts/ContextApi';

const CardPieChart = () => {
	const zoneCounts = useContext(ContextApi);

	const data = {
		series: zoneCounts.map((zoneCount) => zoneCount.value),
		options: {
			chart: {
				type: 'pie',
			},
			labels: zoneCounts.map((zoneCount) => zoneCount.label),
		},
	};
	return (
		<div>
			<Card className='flexItem2 card'>
				<CardHeader
					className='cardHeader'
					title='Zone Counts'
					subheader="Here's the overview of track trends"
				/>
				<Chart options={data.options} series={data.series} type='pie' />
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

export default CardPieChart;
