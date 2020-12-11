import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';
import PasswordShowHide from '../../../Components/UI/PasswordShowHide/PasswordShowHide';

import {Link} from 'react-router-dom';

class SignUp extends React.Component{

	state = {
		password : '',
		rePassword : ''
	}

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

	render(){
		return(
			<Wrap>
				<div className={classes["brandMsg"]}>
					<div className={classes["brandLogo"]}>
						Here goes the logo
					</div>
					Create Account in Blog App
				</div>
				<div className={classes["external"]}>
					<div className="Signin">
						<div className={classes["wel_quote"]}>
							Signup to get access to and get freedom to write and view blogs
						</div>
						<hr/>
						<input type="text" placeholder="Full name" className={classes["input"]}/>
						<input type="text" placeholder="Username" className={classes["input"]}/>
						<input type="email" placeholder="Email Address" className={classes["input"]}/>
						<input placeholder="Date of Birth" className={classes["input"]} type="text" onFocus={(e) => {e.currentTarget.type='date'}} onBlur={(e) => { 
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

						<button className={classes["signin"]}>Create Account</button>
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