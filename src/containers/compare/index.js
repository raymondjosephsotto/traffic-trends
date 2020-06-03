import React, { useState, useEffect } from 'react';

import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

const Compare = () => {
	const initialViewState = {
		longitude: -81.655651,
		latitude: 30.3321838,
		width: ' 100vw',
		height: '100vh',
		zoom: 12,
		pitch: 0,
		bearing: 0,
	};

	const [compareData, setCompareData] = useState({});
	const [level, setLevel] = useState('low');
	// const [data, setData] = useState([]);
	const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://cdn.urbansdk.com/actual_v_prediction.json';

	useEffect(() => {
		fetch(proxyurl + url)
			.then((response) => response.text())
			.then((data) => JSON.parse(data))
			.then((content) => {
				setCompareData(content.data);
			})
			.catch(() =>
				console.log('Can’t access ' + url + ' response. Blocked by browser?')
			);
	}, []);

	// useEffect(() => {
	// 	if (Object.keys(compareData).length > 0)
	// 		setData(formatAllLayers(compareData.coordinates.high));
	// }, [compareData]);

	let data = [];
	if (Object.keys(compareData).length > 0) {
		data = formatAllLayers(compareData.coordinates.high);
	}
	console.log(data);

	return (
		<>
			{data.length > 0 && (
				<DeckGL
					key={data.length}
					initialViewState={initialViewState}
					controller={true}
					layers={data}>
					<StaticMap
						mapboxApiAccessToken={
							'pk.eyJ1Ijoic290dHJqIiwiYSI6ImNrYXk0ZjZsNzBldDYzMG83MjN3NHkwZDEifQ.E0F7oUDBoDDfpccXwzU8Cw'
						}
					/>
				</DeckGL>
			)}
		</>
	);
};

export default Compare;

const formatAllLayers = (levelData) => {
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
				getColor: [255, 0, 0, 50],
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
