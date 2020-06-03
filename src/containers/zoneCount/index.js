import React from 'react';

import { StyledCharts } from '../../components/Styled/StyledCharts';

import CardPieChart from './Cards/CardPieChart';
import CardRadarChart from './Cards/CardRadarChart';
import CardRadialBarChart from './Cards/CardRadialBarChart';

const ZoneCount = () => {
	return (
		<StyledCharts>
			<CardPieChart />
			<CardRadialBarChart />
			<CardRadarChart />
		</StyledCharts>
	);
};

export default ZoneCount;
