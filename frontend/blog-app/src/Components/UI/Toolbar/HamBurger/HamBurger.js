import React from 'react';

import classes from './HamBurger.module.css';

const hamBurger = (props) => {
   return (
      <div onClick={props.clicked} className={classes["Burger"]}>
         <div className = {classes["bar"]}></div>
         <div className = {classes["bar"]}></div>
         <div className = {classes["bar"]}></div>
      </div>
   );
}

export default hamBurger;