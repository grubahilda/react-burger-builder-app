import React from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "burger":
      ingredient = <div className={classes.Burger} />;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese} />;
      break;
    case "romain":
      ingredient = <div className={classes.Romain} />;
      break;
    case "lettuce":
      ingredient = <div className={classes.Lettuce} />;
      break;
    case "rocket":
      ingredient = <div className={classes.Rocket} />;
      break;
    case "tomato":
      ingredient = <div className={classes.Tomato} />;
      break;
    case "pickle":
      ingredient = <div className={classes.Pickle} />;
      break;
    case "rawonion":
      ingredient = <div className={classes.RawOnion} />;
      break;
    case "friedonion":
      ingredient = <div className={classes.FriedOnion} />;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon} />;
      break;
    case "chickeapatty":
      ingredient = <div className={classes.Chickpea} />;
      break;
    case "mostard":
      ingredient = <div className={classes.Mostard} />;
      break;
    case "aioli":
      ingredient = <div className={classes.Aioli} />;
      break;
    case "ketchup":
      ingredient = <div className={classes.Ketchup} />;
      break;
    case "mayo":
      ingredient = <div className={classes.Mayo} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
