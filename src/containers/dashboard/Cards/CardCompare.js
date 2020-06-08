import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import SelectButton from '../SelectButton';
import { DataContext } from '../../../contexts/DataContext';
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import CompareChart from '../CompareChart';
import styled from 'styled-components';

const CardCompare = () => {
	const [level, setLevel] = useState('low');
	const dataContext = useContext(DataContext);

	const initialViewState = {
		longitude: -81.655651,
		latitude: 30.3321838,
		width: ' 50vw',
		height: '50vh',
		zoom: 10,
		pitch: 0,
		bearing: 0,
	};

	const colors = {
		low: [244, 208, 63],
		high: [255, 0, 0],
		medium: [247, 202, 24],
		All: [0, 0, 0],
	};

	let data = [];
	if (Object.keys(dataContext.compareData).length > 0) {
		if (level === 'All') {
			data = formatAllLayers(
				[
					...dataContext.compareData.coordinates['low'],
					...dataContext.compareData.coordinates['medium'],
					...dataContext.compareData.coordinates['high'],
				],
				colors[level]
			);
		} else {
			data = formatAllLayers(
				dataContext.compareData.coordinates[level],
				colors[level]
			);
		}
	}

	return (
		<div>
			{Object.keys(dataContext.compareData).length > 0 ? (
				<Card className='flexItem3 card'>
					<CardHeader
						className='cardHeader'
						title='Compare Predictions vs Actual'
						subheader="Here's the overview of track trends"
					/>
					<StyledContent>
						<DeckGL
							key={data.length}
							initialViewState={initialViewState}
							controller={true}
							layers={data}
							style={{
								height: '50vh',
								minWidth: '250px',
								maxWidth: '500px',
								position: 'relative',
								display: 'block',
								margin: 'auto',
								padding: '2px',
							}}>
							<StaticMap
								mapStyle='mapbox://styles/sottrj/ckb5y7hlv43n01itchd5fs508'
								mapboxApiAccessToken={
									'pk.eyJ1Ijoic290dHJqIiwiYSI6ImNrYXk0ZjZsNzBldDYzMG83MjN3NHkwZDEifQ.E0F7oUDBoDDfpccXwzU8Cw'
								}
							/>
							<SelectButton level={level} onLevelChange={setLevel} />
						</DeckGL>
						<CompareChart />
					</StyledContent>
					<CardContent>
						<p>
							Develop a dashboard to display and track trends in traffic crashes
							in Duval County. Data: Use the provided JSON data for traffic
							crashes to develop static sources.
						</p>
					</CardContent>
					<StyledButton>
						<Button
							size='medium'
							color='primary'
							style={{
								fontWeight: 'bold',
							}}>
							<Link to='/compare' className='linkButton'>
								Learn More
							</Link>
						</Button>
					</StyledButton>
				</Card>
			) : (
				'Loading'
			)}
		</div>
	);
};

export default CardCompare;

const formatAllLayers = (levelData, color) => {
	const raw_layers = levelData.map(({ shape }) =>
		formatLine(shape.coordinates)
	);

	const layers = raw_layers.map(
		(layer, index) =>
			new LineLayer({
				id: `line-layer_${index}`,
				data: layer,
				getWidth: 8,
				opacity: 1,
				getColor: color,
			})
	);
	return layers;
};

const formatLine = (coord) => {
	let newArray = [];
	for (let i = 0; i < coord.length; i++) {
		if (!coord[i + 1]) {
			return newArray;
		} else {
			const newCords = {
				sourcePosition: coord[i],
				targetPosition: coord[i + 1],
			};
			newArray.push(newCords);
		}
	}
};

const StyledButton = styled.div`
	font-family: 'Open Sans';
	font-weight: bold;
	display: flex;
	justify-content: flex-end;
	padding: 2px;
	.linkButton {
		text-decoration: none;
		color: #1489fe;
	}
`;

const StyledContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
