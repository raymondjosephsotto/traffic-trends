import React, { useState, useEffect } from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';
import Chart from 'react-apexcharts';

const CardDonutChart = () => {
	const [predictions, setPredictions] = useState([]);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://cdn.urbansdk.com/predictions.json';

	useEffect(() => {
		fetch(proxyurl + url)
			.then((response) => response.text())
			.then((data) => JSON.parse(data))
			.then((content) => setPredictions(content.data))
			.catch(() =>
				console.log('Can’t access ' + url + ' response. Blocked by browser?')
			);
	}, []);

	const data = {
		series: predictions.map((prediction) => prediction.value),
		options: {
			chart: {
				type: 'pie',
			},
			labels: predictions.map((prediction) => prediction.label),
		},
	};
	return (
		<div>
			<Card className='flexItem3 card'>
				<CardHeader
					className='cardHeader'
					title='Crash Predictions'
					subheader="Here's the overview of track trends"
				/>
				<Chart options={data.options} series={data.series} type='donut' />
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
