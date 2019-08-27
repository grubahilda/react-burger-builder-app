import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Romain lettuce", type: "romain" },
  { label: "Rocket", type: "rocket" },
  { label: "Lettuce", type: "lettuce" },
  { label: "Tomato", type: "tomato" },
  { label: "Pickle", type: "pickle" },
  { label: "Raw onion", type: "rawonion" },
  { label: "Fried onion", type: "friedonion" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Beyond Burger", type: "burger" },
  { label: "Chickpea Patty", type: "chickeapatty" },
  { label: "Mostard", type: "mostard" },
  { label: "Aioli sauce", type: "aioli" },
  { label: "Ketchup", type: "ketchup" },
  { label: "Mayo", type: "mayo" }
];

const buildControls = props => (
  <div className={classes.BuildControlsWrapper}>
    <div className={classes.Price}>
      <p>Price: {props.currentPrice.toFixed(2)} &euro;</p>
    </div>
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
        />
      ))}
    </div>
    <div className={classes.Order}>
      <button className={classes.OrderButton} disabled={!props.purchaseable}>
        CHECKOUT
      </button>
    </div>
  </div>
);

export default buildControls;
