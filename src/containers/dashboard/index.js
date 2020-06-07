import React, { useContext } from 'react';

import { StyledCharts } from '../../components/Styled/StyledCharts';
import DataProvider, { DataContext } from '../../contexts/DataContext';

import CardZone from './Cards/CardZone';
import CardPrediction from './Cards/CardPrediction';
import CardCompare from './Cards/CardCompare';

const Dashboard = () => {
	const dataContext = useContext(DataContext);
	return (
		<DataProvider>
			{Object.keys(dataContext.compareData).length > 0 ? (
				<StyledCharts>
					<CardPrediction />
					<CardZone />
					<CardCompare />
				</StyledCharts>
			) : (
				'Loading'
			)}
		</DataProvider>
	);
};

export default Dashboard;
