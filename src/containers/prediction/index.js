import React from 'react';

import { StyledCharts } from '../../components/Styled/StyledCharts';

import CardBarChart from './Cards/CardBarChart';
import CardAreaChart from './Cards/CardAreaChart';
import CardDonutChart from './Cards/CardDonutChart';

const Prediction = () => {
	return (
		<StyledCharts>
			<CardBarChart />
			<CardAreaChart />
			<CardDonutChart />
		</StyledCharts>
	);
};

export default Prediction;
