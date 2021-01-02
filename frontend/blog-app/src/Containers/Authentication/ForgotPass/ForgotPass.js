import React from 'react';
import { Link } from 'react-router-dom';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';

// import {Link} from 'react-router-dom';

class ForgotPass extends React.Component{

	state = {
		sent : false,
		email : ''
	}

	render(){

		// Let an email address entered and will be passed to the Backend server and if succesull the confirmation will be displayed
		let name,domain,emailName,maskedMail;
		if (this.state.email.length > 0 && this.state.sent){
			[name,domain] = this.state.email.split('@');
			emailName = new Array(name.length - 1).join('*');
			emailName = name[0] + emailName + name[name.length - 1];
			maskedMail = emailName + '@' + domain;
		}

		return(
			!this.state.sent ?
			<Wrap>
				<div className={classes["brandMsg"]}>
					<div className={classes["brandLogo"]}>
						<img src="/logo.png" alt="logo"/>
					</div>
					Reset Password
				</div>
				<div className={classes["external"]}>
					<div className="Signin">
						<div className={classes["wel_quote"]}>
							Use the following wizard to get the Verification link
						</div>
						<hr/>
						<input 
							type="email" 
							placeholder="Email Address" 
							className={classes["input"]}
							onChange = {(e) => {
								this.setState((prevState) => ({
									...prevState,
									email: e.target.value
							}))
							}}
						/>
						<button 
							className={classes["signin"]} 
							// Around this the mail address will be searched in server and if it is correct then only a confirmation will be displayed
							onClick = {() => {
								this.setState((prevState) => ({
										...prevState,
										sent: true
								}))
							}}
						>
							Send Link
						</button>
					</div>
				</div>
				<div style={{textAlign : 'center'}}>
					This is just a development stage message: enter a valid email and see magic.
				</div>
			</Wrap> 
			:
			<Wrap>
				<div className={classes["brandMsg"]}>
					<div className={classes["brandLogo"]}>
						<img src="/logo.png" alt="logo"/>
					</div>
					Reset Password
				</div>
				<div className={classes["external"]}>
					<div className="Signin">
						<div className={classes["wel_quote"]}>
							Succesfully sent the Verification link to {maskedMail}
						</div>
					</div>
				</div>
				<div style={{textAlign : 'center'}}>
					This is just a development stage message: After this user may get a lnk which redirects him to following page: 
					<Link to="/resetPass" >./resetPass</Link>
				</div>
			</Wrap>
		)
	}
}

export default ForgotPass;