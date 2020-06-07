import React from 'react';

import { StyledCharts } from '../../components/Styled/StyledCharts';
import DataProvider from '../../contexts/DataContext';

import CardZone from './Cards/CardZone';
import CardPrediction from './Cards/CardPrediction';
import CardCompareMap from './Cards/CardCompareMap';

const Dashboard = () => {
	return (
		<DataProvider>
			<StyledCharts>
				<CardPrediction />
				<CardZone />
				<CardCompareMap />
			</StyledCharts>
		</DataProvider>
	);
};

export default Dashboard;
