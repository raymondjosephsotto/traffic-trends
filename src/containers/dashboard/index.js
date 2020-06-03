import React from 'react';
import styled from 'styled-components';

import CardZone from './Cards/CardZone';
import CardPrediction from './Cards/CardPrediction';
// import CardCompare from './Cards/CardCompare';

const Dashboard = () => {
	return (
		<StyledDashboard>
			<CardPrediction />
			<CardZone />
			{/* <CardCompare /> */}
		</StyledDashboard>
	);
};

export default Dashboard;

const StyledDashboard = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	padding: 2vh 0.6vw 0 4vw;
	.card {
		min-width: 340px;
		max-width: 600px;
		margin: 10px;
		border-radius: 12px;
		padding: 12px;
	}
	.flexItem3 {
		flex-grow: 2;
	}
	@media screen and (max-width: 897px) {
		padding: 10%;
	}
`;
