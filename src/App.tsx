import { Redirect, Route, Switch } from 'wouter';
import Home from './pages/home.tsx';
import NomismaPrivacy from './pages/nomisma-privacy.tsx';

function App() {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/nomisma/privacy" component={NomismaPrivacy} />
			<Route component={() => <Redirect to="/" />} />
		</Switch>
	);
}

export default App;
