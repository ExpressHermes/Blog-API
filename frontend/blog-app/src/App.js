import './App.css';

import { Route, Switch } from "react-router-dom";

import Content from "./Components/Content/Content";
import Wrap from "./hoc/Wrap/Wrap";
import Home from './Containers/Home/Home';
import Profile from './Containers/Profile/Profile';
import PageNotFound from './Components/UI/PageNotFound/PageNotFound';
import Logout from './Containers/Authentication/Logout/Logout';
import Signin from './Containers/Authentication/Signin/Signin';
import SignUp from './Containers/Authentication/Signup/Signup';
import ForgotPass from './Containers/Authentication/ForgotPass/ForgotPass';
import ResetPass from './Containers/Authentication/ResetPass/ResetPass';

const app = () => {
	return (
		<Wrap>
			<Content>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/profile" exact component={Profile} />
					<Route path="/login" exact component={Signin} />
					<Route path="/signup" exact component={SignUp} />
					<Route path="/logout" exact component={Logout} />
					<Route path="/forgotPass" exact component={ForgotPass} />
					<Route path="/resetPass" exact component={ResetPass} />
                  	<Route component={PageNotFound} />
				</Switch>
			</Content>
		</Wrap>
	);
};

export default app;