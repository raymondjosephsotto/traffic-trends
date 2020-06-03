import React, { useState, useEffect } from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';
import Chart from 'react-apexcharts';

const CardCompare = () => {
	const [compare, setCompare] = useState([]);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://cdn.urbansdk.com/actual_v_prediction.json';

	useEffect(() => {
		fetch(proxyurl + url)
			.then((response) => response.text())
			.then((data) => JSON.parse(data))
			.then((content) => setCompare(content.data))
			.catch(() =>
				console.log('Can’t access ' + url + ' response. Blocked by browser?')
			);
	}, []);

	const data = {
		options: {
			chart: {
				id: 'basic-bar',
			},
			xaxis: {
				categories:
					compare && compare.timestamp_by_hour.map((timestamp) => timestamp),
			},
		},
		series: [
			{
				name: 'series-1',
				data: compare && compare.predict_count.map((comp) => comp.data),
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
				<Chart
					options={data.options}
					series={data.series}
					type='bar'
					width='500'
				/>
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

export default CardCompare;
