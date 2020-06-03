import React from 'react';

import { StyledCharts } from '../../components/Styled/StyledCharts';

import CardZone from './Cards/CardZone';
import CardPrediction from './Cards/CardPrediction';
// import CardCompare from './Cards/CardCompare';

const Dashboard = () => {
	return (
		<StyledCharts>
			<CardPrediction />
			<CardZone />
			{/* <CardCompare /> */}
		</StyledCharts>
	);
};

export default Dashboard;
