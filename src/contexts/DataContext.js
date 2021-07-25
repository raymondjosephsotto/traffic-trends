import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const proxyurl = 'https://cdn.urbansdk.com/';
// const proxyurl = 'https://thingproxy.freeboard.io/fetch/';
// const proxyurl = 'https://traffic-trends-dashboard.web.app/';
const predictionUrl = 'predictions.json';
const zoneUrl = 'zone_count.json';
const compareUrl = 'actual_v_prediction.json';

const DataProvider = (props) => {
	const [predictions, setPredictions] = useState([]);
	const [zoneCounts, setZoneCount] = useState([]);
	const [compareData, setCompareData] = useState({});

	useEffect(() => {
		fetch(proxyurl + predictionUrl)
			.then((response) => response.text())
			.then((data) => JSON.parse(data))
			.then((content) => setPredictions(content.data))
			.catch(() =>
				console.log(
					'Can’t access ' + predictionUrl + ' response. Blocked by browser?'
				)
			);

		fetch(proxyurl + zoneUrl)
			.then((response) => response.text())
			.then((data) => JSON.parse(data))
			.then((content) => setZoneCount(content.data))
			.catch(() =>
				console.log(
					'Can’t access ' + zoneUrl + ' response. Blocked by browser?'
				)
			);

		fetch(proxyurl + compareUrl)
			.then((response) => response.text())
			.then((data) => JSON.parse(data))
			.then((content) => setCompareData(content.data))
			.catch(() =>
				console.log(
					'Can’t access ' + compareUrl + ' response. Blocked by browser?'
				)
			);
	}, []);

	return (
		<DataContext.Provider value={{ predictions, zoneCounts, compareData }}>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataProvider;
