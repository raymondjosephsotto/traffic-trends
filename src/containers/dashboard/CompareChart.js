import React, { useContext } from 'react';

import Chart from 'react-apexcharts';
import { DataContext } from '../../contexts/DataContext';

const CompareChart = (props) => {
	const dataContext = useContext(DataContext);
	const config = {
		options: {
			chart: {
				id: 'line-chart',
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
			},
			colors: ['#ff9000'],
			dataLabels: {
				enabled: true,
			},
			stroke: {
				curve: 'stepline',
			},
			title: {
				text: 'Predict Count & Timestamp by Hour',
				align: 'center',
				fontFamily: 'Poppins',
				fontSize: '12px',
				fontWeight: 'bold',
			},
			grid: {
				borderColor: '#e7e7e7',
				row: {
					colors: ['#f3f3f3', 'transparent'],
					opacity: 0.5,
				},
			},
			markers: {
				size: 1,
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
			<Chart
				options={config.options}
				series={config.series}
				width={550}
				type='line'
			/>
		</div>
	);
};

export default CompareChart;

const formatDate = (seconds) => {
	const date = new Date(seconds);

	return `${date.getHours()}:${date.getMinutes()}`;
};
