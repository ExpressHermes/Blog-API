import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';
import PasswordShowHide from '../../../Components/UI/PasswordShowHide/PasswordShowHide';

import {Link} from 'react-router-dom';

class ResetPass extends React.Component{

	state = {
		email : '',
		password : '',
		rePassword : ''
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
		// This email will be coming from either a unique key/id/token the link params of the confirmation
		// At present it is being passed directly
		let email = "expresshermes@expherm.org";
		let name,domain,emailName,maskedMail;
		if (email.length > 0){
			[name,domain] = email.split('@');
			emailName = new Array(name.length - 1).join('*');
			emailName = name[0] + emailName + name[name.length - 1];
			maskedMail = emailName + '@' + domain;
		}

		return(
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
							Use the following wizard for resetting password of
							<b className={classes["bold"]}>
								{maskedMail}
							</b>
						</div>
						<hr/>
						
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

						<button className={classes["signin"]}>Submit</button>
						<button className={classes["cancel"]} >Cancel </button> 
					</div>
				
				</div>
				<div style={{textAlign : 'center'}}>
					This is just a development stage message:
					l be coming from either a unique key/id/token the link params of the confirmation mail
					At present it i passed directly
				</div>
			</Wrap>
		)
	}
}

export default ResetPass;