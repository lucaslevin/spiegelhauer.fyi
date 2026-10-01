import { Route, Switch } from 'wouter';
import Home from './pages/home.tsx';
import NomismaPrivacy from './pages/nomisma-privacy.tsx';

function App() {
	return (
		<Switch>
			<Route path="/nomisma/privacy" component={NomismaPrivacy} />
			<Route component={Home} />
		</Switch>
	);
}

export default App;
