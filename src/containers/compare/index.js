import React, { useState, useContext } from 'react';

import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import SelectButton from './SelectButton';
import { DataContext } from '../../contexts/DataContext';
import ChartModal from './ChartModal';

const Compare = () => {
	const [level, setLevel] = useState('low');
	const dataContext = useContext(DataContext);

	const initialViewState = {
		longitude: -81.655651,
		latitude: 30.3321838,
		width: ' 100vw',
		height: '100vh',
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
				<DeckGL
				style={{position: 'fixed', overflow: 'hidden'}}
					key={data.length}
					initialViewState={initialViewState}
					controller={true}
					layers={data}>
					<StaticMap
						mapStyle='mapbox://styles/sottrj/ckb5yhita2kh01inj1zqw33wa'
						mapboxApiAccessToken={
							'pk.eyJ1Ijoic290dHJqIiwiYSI6ImNrYXk0ZjZsNzBldDYzMG83MjN3NHkwZDEifQ.E0F7oUDBoDDfpccXwzU8Cw'
						}
					/>
					<SelectButton level={level} onLevelChange={setLevel} />
					<ChartModal />
				</DeckGL>
			) : (
				'Loading'
			)}
		</div>
	);
};

export default Compare;

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
