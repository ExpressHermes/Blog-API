import React from 'react';

import Wrap from '../../../hoc/Wrap/Wrap';
import classes from './PasswordShowHide.module.css';

class PassShowHide extends React.Component {

    state = {
		hidden: true,
		password: ''
	};

	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value });
		this.props.senddata(this.props.valueKey,this.state.password);
	}
	toggleShow = () => {
		this.setState({ hidden: !this.state.hidden });
	}

	render(){

		return(
			<Wrap>
				<div className={classes["pass"]}>

					<input 
						type={this.state.hidden ? 'password' : 'text'}
						placeholder={this.props.placeholder} 
						className={classes["input"]}
						value={this.state.password}
						onChange={this.handlePasswordChange}
					/>

					<div className={classes["toggle"]} onClick={this.toggleShow}>
						{
							this.state.hidden ? 
							<img src="https://cdn1.iconfinder.com/data/icons/general-icons2/128/eye-open-512.png" alt="show"/> :
							<img src="https://cdn2.iconfinder.com/data/icons/content-and-edition/24/hide-512.png" alt="hide"/>
						}
					</div>
				</div>

			</Wrap>
		)
	}
}
export default PassShowHide;
