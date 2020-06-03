import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Canvas from './components/Common/Canvas';
import Dashboard from './containers/dashboard';
import Prediction from './containers/prediction';
import ZoneCount from './containers/zoneCount';
import Compare from './containers/compare';

const App = () => {
	useEffect(() => {
		fetch('https://cdn.urbansdk.com/predictions.json', {
			mode: 'no-cors',
		})
			.then((res) => console.log(res))
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<React.Fragment>
			<Navigation />
			<Canvas>
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route path='/dashboard' component={Dashboard} />
					<Route exact path='/prediction' component={Prediction} />
					<Route exact path='/zoneCount' component={ZoneCount} />
					<Route exact path='/compare' component={Compare} />
				</Switch>
			</Canvas>
		</React.Fragment>
	);
};

export default App;
