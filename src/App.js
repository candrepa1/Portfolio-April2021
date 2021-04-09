import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
