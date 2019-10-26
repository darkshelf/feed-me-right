import React, { Component } from "react";
import "./App.css";
const API = "http://localhost.fmr.com:8080/recipe/show/";
const DEFAULT_QUERY = "thought-scour";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: String,
      ingredients: [],
      steps: []
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          recipeName: data.name,
          ingredients: data.ingredients,
          steps: data.steps
        })
      );
  }
  render() {
    const { recipeName, ingredients, steps } = this.state;
    return (
      <div>
        <h1>{recipeName}</h1>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(ingredient => (
            <li>{ingredient.name}</li>
          ))}
        </ul>
        <h2>Steps</h2>
        <ul>
          {steps.map(step => (
            <li>{step.step.stepText}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
