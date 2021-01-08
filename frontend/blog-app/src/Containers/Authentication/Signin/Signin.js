import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';

import PasswordShowHide from '../../../Components/UI/PasswordShowHide/PasswordShowHide';

import {Link} from 'react-router-dom';

class Signin extends React.Component{

	state = {
		username : '',
		password : ''
	}

	error = null;
	loading = false;

	handleFormChange = (e) => {
		var key = e.target.name;
		this.setState({ [key] : e.target.value});
	}

	handleSubmit = (e) => {
		this.loading = true;
		var data = {
			"username" : this.state.username,
			"password" : this.state.password
		}
		fetch("http://127.0.0.1:8000/api-auth/login/",{
			method : "POST",
			headers : {
				"Content-Type": "application/json",
			},
			body : JSON.stringify(data),
		})
		.then((res) => res.json() )
		.then((json) => {
			console.log(json);
			this.loading = false;
			// Redirect to dashboard
		})
		.catch((err) => {
			console.log(err);
			this.error = err;
			this.loading = false;
		})
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
		console.log(this.state);
		return(
			<Wrap>
				<div className={classes["brandMsg"]}>
					<div className={classes["brandLogo"]}>
						<img src="/logo.png" alt="logo"/>
					</div>
					Sign In to Blog App
				</div>
				<div className={classes["external"]}>
					<div className="Signin">
						<div className={classes["wel_quote"]}>
							Signin to start writing and enter a new world of Blogs
						</div>
						<hr/>
						<input name="username" type="text" value={this.state.username} placeholder="Username" className={classes["input"]} onChange= { this.handleFormChange } />

						<PasswordShowHide 
							valueKey = "password"
							senddata = {this.getData} 
							placeholder = "Password (Min 6 Chars)"
						/>

						<div className={classes["forgotMsg"]}>
							<Link to="/forgotPass">Forgot Password?</Link>
						</div>
						<button className={classes["signin"]} onClick={this.handleSubmit} >Sign In</button>
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