import React from "react";

import classes from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
	return (
		<div className={classes["NavigationItems"]}>
			<NavigationItem specialClass="" hide={props.hide} linkTo="/" exact={true}>Home</NavigationItem>
			<NavigationItem specialClass="" hide={props.hide} linkTo="/create" exact={true}>Write a Blog</NavigationItem>
			<NavigationItem specialClass="" hide={props.hide} linkTo="/blogs" exact={true}>My Blogs</NavigationItem>
			<NavigationItem specialClass="auth" hide={props.hide} linkTo="/login" exact={true}>Sign In</NavigationItem>
		</div>
	);
}

export default navigationItems;
