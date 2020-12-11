import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from '../Auth.module.css';

import {Link} from 'react-router-dom';

class ResetPass extends React.Component{

	componentDidMount(){
		document.title = "Sign In - Blog App"
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
						Here goes the logo
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
						
						<input type="password" placeholder="New Password (Min 6 chars)" className={classes["input"]}/>
						<input type="password" placeholder="Re-enter Password" className={classes["input"]}/>

						<button className={classes["signin"]}>Submit</button>
						<button className={classes["cancel"]}>Cancel</button>
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