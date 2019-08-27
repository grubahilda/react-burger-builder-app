import React from "react";
import classes from "./BuildControl.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} onClick={props.added}>
      +
    </button>
    <button className={classes.Less} onClick={props.removed}>
      -
    </button>
    <div className={classes.Buttons} />
  </div>
);

export default buildControl;
