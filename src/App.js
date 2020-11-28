import React from "react";
import NavBar from './components/NavBar'
import PatientForm from './components/PatientForm'
import PatientManagement from './components/PatientManagement'

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/patient-form">
						<PatientForm />
					</Route>
					<Route path="/patient-management">
						<PatientManagement />
					</Route>
					<Route path="/">
						<PatientForm />
					</Route>
				</Switch>
			</Router>
		</div>

	);
}

export default App;