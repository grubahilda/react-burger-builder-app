import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-order";

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
    ingredients: null,
    totalPrice: 2,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  constructor(props) {
    super(props);
    axios
      .get("https://react-burger-builder-39324.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
        console.log(this.state.ingredients);
      })
      .catch(_error => this.setState({ error: true }));
  }

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
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "max",
        address: {
          street: "Some street",
          zipCode: "666",
          country: "UK"
        }
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/order.json", order)
      .then(_response => this.setState({ loading: false, purchasing: false }))
      .catch(_error => {
        this.setState({ loading: false, purchasing: false, error: true });
      });
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
    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingrediends can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Auxiliary>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseCancelled={this.purchaseCancelHandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
