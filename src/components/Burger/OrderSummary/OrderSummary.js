import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    if (props.ingredients[ingKey] > 0) {
      return (
        <li key={ingKey}>
          {ingKey[0].toUpperCase() + ingKey.slice(1)}:{" "}
          {props.ingredients[ingKey]}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious vegan burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Price: {props.price.toFixed(2)} &euro;</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button clicked={props.purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
  );
};

export default orderSummary;
