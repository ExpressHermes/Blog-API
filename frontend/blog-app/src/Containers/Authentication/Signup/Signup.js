import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';

import {Link} from 'react-router-dom';

class SignUp extends React.Component{

	componentDidMount(){
		document.title = "Create Account - Blog App"
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

						<input type="password" placeholder="Create Password (Min 6 chars)" className={classes["input"]}/>
						<input type="password" placeholder="Re-enter Password" className={classes["input"]}/>
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