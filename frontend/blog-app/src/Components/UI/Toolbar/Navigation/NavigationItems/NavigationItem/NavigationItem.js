import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
	return(
		<NavLink
			onClick={() => props.hide()}
			className={
				props.specialClass.length > 0 ?
				[classes["link"], classes[props.specialClass]].join(' ') :
				classes["link"]
			}
			to={props.linkTo}
			exact={props.exact}
			activeClassName={classes["activeLink"]}
			style={props.specialStyles}
			activeStyle={props.specialActiveStyles}
		>
			{props.children}
		</NavLink>
	)
}

export default navigationItem;