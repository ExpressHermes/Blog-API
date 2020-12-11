import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';

import PasswordShowHide from '../../../Components/UI/PasswordShowHide/PasswordShowHide';

import {Link} from 'react-router-dom';

class Signin extends React.Component{

	state = {
		password : ''
	}

	componentDidMount(){
		document.title = "Sign In - Blog App"
	}  

	getData = (key,val) => {
		this.setState((prevState) => ({
				...prevState,
				[key] : val
			})
		)
	}

	render(){
		return(
			<Wrap>
				<div className={classes["brandMsg"]}>
					<div className={classes["brandLogo"]}>
						Here goes the logo
					</div>
					Sign In to Blog App
				</div>
				<div className={classes["external"]}>
					<div className="Signin">
						<div className={classes["wel_quote"]}>
							Signin to start writing and enter a new world of Blogs
						</div>
						<hr/>
						<input type="text" placeholder="Username" className={classes["input"]}/>

						<PasswordShowHide 
							valueKey = "password"
							senddata = {this.getData} 
							placeholder = "Password (Min 6 Chars)"
						/>

						<div className={classes["forgotMsg"]}>
							<Link to="/forgotPass">Forgot Password?</Link>
						</div>
						<button className={classes["signin"]}>Sign In</button>
					</div>
					
					<div className={classes["newToAppMsg"]}>
						New to Blog App?
						<Link to="/signup">Create Account</Link>
					</div>
				</div>
				<div style={{textAlign : 'center'}}>
					This is just a development stage message: check all the functionalities like resetPass, forgotPass, verificationMail and all
				</div>
			</Wrap>
		)
	}
}

export default Signin;