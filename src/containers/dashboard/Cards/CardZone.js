import React, { useState, useEffect } from 'react';

import { Card, CardHeader, CardContent } from '@material-ui/core';
import Chart from 'react-apexcharts';

const CardZone = () => {
	const [zoneCounts, setZoneCount] = useState([]);

	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://cdn.urbansdk.com/zone_count.json';

	useEffect(() => {
		fetch(proxyurl + url)
			.then((response) => response.text())
			.then((data) => JSON.parse(data))
			.then((content) => setZoneCount(content.data))
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
				categories: zoneCounts.map((zoneCount) => zoneCount.label),
			},
		},
		series: [
			{
				name: 'series-1',
				data: zoneCounts.map((zoneCount) => zoneCount.value),
			},
		],
	};
	return (
		<div>
			<Card className='flexItem2 card'>
				<CardHeader
					className='cardHeader'
					title='Zone Counts'
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

export default CardZone;
