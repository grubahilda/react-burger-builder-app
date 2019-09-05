import React from "react";
import classes from "./DrawerToggler.css";

const drawerToggler = props => (
  <div onClick={props.clicked}>
    <div className={classes.DrawerToggler}></div>
  </div>
);

export default drawerToggler;
