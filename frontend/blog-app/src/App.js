import './App.css';

import { Route, Switch } from "react-router-dom";

import Content from "./Components/Content/Content";
import Wrap from "./hoc/Wrap/Wrap";
import Home from './Containers/Home/Home';
import Auth from './Containers/Authentication/Auth';
import PageNotFound from './Components/UI/PageNotFound/PageNotFound';

const app = () => {
	return (
		<Wrap>
			<Content>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Auth} />
					<Route path="/logout" exact component={Auth} />
                  	<Route component={PageNotFound} />
				</Switch>
			</Content>
		</Wrap>
	);
};

export default app;