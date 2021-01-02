import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';
import PasswordShowHide from '../../../Components/UI/PasswordShowHide/PasswordShowHide';

import {Link} from 'react-router-dom';

class SignUp extends React.Component{

	state = {
		fullname : '',
		username : '',
		email : '',
		dob : '',
		password : '',
		rePassword : ''
	}

	error = null;
	loading = false;

	componentDidMount(){
		document.title = "Create Account - Blog App"
	}

	getData = (key,val) => {
		this.setState((prevState) => ({
				...prevState,
				[key] : val
			})
		)
	}

	handleFormChange = (e) => {
		var key = e.target.name;
		this.setState({ [key] : e.target.value});
	}

	handleSubmit = (e) => {
		this.error = null;
		this.loading = true;
		if(this.state.password === this.state.rePassword){
			var data = {
				"username" : this.state.username,
				"email" : this.state.email,
				"password" : this.state.password
			}
			fetch("http://127.0.0.1:8000/user/register/",{
				method: "POST",
				headers : {
					"Content-Type": "application/json",
				},
				body : JSON.stringify(data),
			})
			.then((res) => {
				console.log(res);
				console.log("Success");
				this.loading = false;
			})
			.catch((err) => {
				console.log(err);
				this.error = err;
				this.loading = false;
			})
			
		}
		else{
			this.error = true;
			this.loading = false;
		}
		
	}
	
	render(){
		console.log(this.state);
		return(
			<Wrap>
				<div className={classes["brandMsg"]}>
					<div className={classes["brandLogo"]}>
						<img src="/logo.png" alt="logo"/>
					</div>
					Create Account in Blog App
				</div>
				<div className={classes["external"]}>
					<div className="Signin">
						<div className={classes["wel_quote"]}>
							Signup to get access to and get freedom to write and view blogs
						</div>
						<hr/>
						<input name="fullname" value={this.state.fullname} type="text" placeholder="Full name" className={classes["input"]} onChange= { this.handleFormChange } />
						<input name="username" value={this.state.username} type="text" placeholder="Username" className={classes["input"]} onChange= { this.handleFormChange } />
						<input name="email" value={this.state.email} type="email" placeholder="Email Address" className={classes["input"]} onChange= { this.handleFormChange } />
						<input name="dob" value={this.state.dob} placeholder="Date of Birth" className={classes["input"]} type="text" onChange= { this.handleFormChange } onFocus={(e) => {e.currentTarget.type='date'}} onBlur={(e) => { 
							if(e.currentTarget.value.length === 0)
								e.currentTarget.type='text'
						}}/>
						
						<PasswordShowHide
							valueKey = "password"
							senddata = {this.getData} 
							placeholder = "Enter Password"
						/>
						<PasswordShowHide
							valueKey = "rePassword"
							senddata = {this.getData} 
							placeholder = "Re-enter Password"
						/>

						<div className={classes["accept"]}>
							<input type="checkbox" id="acceptBox"/> 
							<label for="acceptBox">
								I accept to the Terms and Conditions of Express Hermes
							</label>
						</div>

						<button type="submit" onClick={this.handleSubmit} className={classes["signin"]}>Create Account</button>
					</div>
					
					<div className={classes["newToAppMsg"]}>
						Already in Blog App?
						<Link to="/login">Sign In</Link>
					</div>
				</div>
			</Wrap>
		)
	}
}

export default SignUp;