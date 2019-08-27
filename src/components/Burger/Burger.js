import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import PropTypes from "prop-types";
import React from "react";

import classes from "./Burger.css";

const burger = props => {
  let ingredientsArray = Object.keys(props.ingredients)
    .map(ing => {
      return [...Array(props.ingredients[ing])].map((_, index) => {
        return <BurgerIngredient key={ing + index} type={ing} />;
      });
    })
    .reduce((acc, val) => {
      return acc.concat(val);
    });
  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please, start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
