import React from 'react';

import { Switch, Route } from 'react-router-dom';
import ContextApiProvider from './contexts/ContextApi';
import Navigation from './components/Navigation/Navigation';
import Canvas from './components/Common/Canvas';
import Dashboard from './containers/dashboard';
import Prediction from './containers/prediction';
import ZoneCount from './containers/zoneCount';
import Compare from './containers/compare';

const App = () => {
	return (
		<React.Fragment>
			<Navigation />
			<Canvas>
				<Switch>
					<ContextApiProvider>
						<Route exact path='/' component={Dashboard} />
						<Route path='/dashboard' component={Dashboard} />
						<Route exact path='/prediction' component={Prediction} />
						<Route exact path='/zoneCount' component={ZoneCount} />
						<Route exact path='/compare' component={Compare} />
					</ContextApiProvider>
				</Switch>
			</Canvas>
		</React.Fragment>
	);
};

export default App;
