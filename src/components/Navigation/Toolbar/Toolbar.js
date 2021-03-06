import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from "../../Navigation/NavigationItems/SideDrawer/DrawerToggler/DrawerToggler";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggler clicked={props.openSideDrawer} open={props.open} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
