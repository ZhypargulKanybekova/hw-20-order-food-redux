import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";
import { Provider } from "react-redux";

import { store } from "./store";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Sushi",
    description: "finest fish and veggies",
    price: 22.0,
  },
  {
    title: "Pizza",
    description: "finest fish and veggies",
    price: 16.0,
  },
  {
    id: 3,
    title: "Barbecue",
    description: "finest fish and veggies",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "finest fish and veggies",
    price: 19.99,
  },
];

function App() {
  const [toggle, setToggle] = useState(false);

  function toggleHandler() {
    setToggle((prev) => !prev);
  }
  return (
    <Provider store={store}>
      <Header onToggle={toggleHandler} />
      <MealSummary />
      <Meals />

      {toggle && <Basket onToggle={toggleHandler} />}
    </Provider>
  );
}

export default App;
