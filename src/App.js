import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Player from './Components/Player';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/player/:first/:last' component={Player} />
			</Switch>
		</div>
	);
}

export default App;
