import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">BURGER BUILDER</NavigationItem>
    <NavigationItem link="/">CHECKOUT</NavigationItem>
    <NavigationItem link="/">ALLERGENS INFORMATION</NavigationItem>
  </ul>
);

export default navigationItems;
