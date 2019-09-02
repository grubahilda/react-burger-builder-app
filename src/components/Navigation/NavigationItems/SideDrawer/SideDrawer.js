import React from "react";

import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import Auxiliary from "../../../../hoc/Auxiliary";
import Backdrop from "../../../../components/UI/Backdrop/Backdrop";

import classes from "./SideDrawer.css";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Closed];

  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
