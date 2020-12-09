import React from "react";

import classes from "./SideDrawer.module.css";

import NavigationItems from "../Toolbar/Navigation/NavigationItems/NavigationItems";

const sideDrawer = (props) => {
   return (
      <div
         className={classes["SideDrawer"]}
         style={{ right: props.isOpened ? "0" : "-100vw" }}
      >
         <NavigationItems hide={props.hide}/>
      </div>
   );
};

export default sideDrawer;
