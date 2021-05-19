import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import "../css/style.css";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
