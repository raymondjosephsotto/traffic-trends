import React from 'react';

import { StyledCharts } from '../../components/Styled/StyledCharts';
import DataProvider from '../../contexts/DataContext';

import CardZone from './Cards/CardZone';
import CardPrediction from './Cards/CardPrediction';
import CardCompare from './Cards/CardCompare';

const Dashboard = () => {
	return (
		<DataProvider>
			<StyledCharts>
				<CardPrediction />
				<CardZone />
				<CardCompare />
			</StyledCharts>
		</DataProvider>
	);
};

export default Dashboard;
