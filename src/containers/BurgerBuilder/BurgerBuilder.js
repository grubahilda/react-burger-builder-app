import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  romain: 0.5,
  rocket: 0.5,
  lettuce: 0.5,
  tomato: 0.5,
  pickle: 0.5,
  rawonion: 0.5,
  friedonion: 0.5,
  cheese: 1,
  bacon: 1,
  burger: 2,
  chickea: 2,
  mostard: 0,
  aioli: 0,
  ketchup: 0,
  mayo: 0
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      romain: 0,
      rocket: 0,
      lettuce: 0,
      tomato: 0,
      pickle: 0,
      rawonion: 0,
      friedonion: 0,
      cheese: 0,
      bacon: 0,
      burger: 0,
      chickea: 0,
      mostard: 0,
      aioli: 0,
      ketchup: 0,
      mayo: 0
    },
    totalPrice: 2,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseable = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ing => {
        return ingredients[ing];
      })
      .reduce((acc, val) => {
        return acc + val;
      }, 0);

    this.setState({ purchaseable: sum >= 2 });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Continue it is");
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];

    if (oldCount < 3) {
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      // Adding old price to the new one
      const priceAddition = INGREDIENT_PRICES[type] + this.state.totalPrice;

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: priceAddition
      });

      this.updatePurchaseable(updatedIngredients);
    }
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];

    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      // Adding old price to the new one
      const priceReduction = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: priceReduction
      });
      this.updatePurchaseable(updatedIngredients);
    }
  };

  render() {
    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.purchaseCancelHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          currentPrice={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
