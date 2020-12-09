import React from 'react';

import classes from './Backdrop.module.css';

const backDrop = (props) => {
   return (
	   	<div 
			className={classes["BackDrop"]} 
			style={{display : props.show ? "block" : "none"}} 
			onClick={props.clicked}
		>
		</div>)
}

export default backDrop;