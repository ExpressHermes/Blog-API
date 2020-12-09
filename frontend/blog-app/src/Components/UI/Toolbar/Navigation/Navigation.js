import NavigationItem from './NavigationItem/NavigationItem';
import Wrap from '../../../../hoc/Wrap/Wrap';

import classes from './Navigation.module.css';

const Navigation = () => {
	return(
		<Wrap>
			<div className={classes["navBar"]}>
				<NavigationItem linkTo="/" exact={true}>Home</NavigationItem>
				<NavigationItem linkTo="/create" exact={true}>Write a Blog</NavigationItem>
				<NavigationItem linkTo="/blogs" exact={true}>My Blogs</NavigationItem>
				<NavigationItem linkTo="/login" exact={true}>Sign In</NavigationItem>
				<NavigationItem linkTo="/logout" exact={true}>Logout</NavigationItem>
			</div>
		</Wrap>
	)
}

export default Navigation;