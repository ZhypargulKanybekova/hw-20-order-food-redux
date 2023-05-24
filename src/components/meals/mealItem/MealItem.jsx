import React, { useContext } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../store/meals";

const MealItem = ({ meal }) => {
  const dispatch = useDispatch();

  function addProduct(amount) {
    const data = {
      id: meal._id,
      amount: +amount,
    };
    dispatch(addToBasket(data));
  }

  return (
    <Container>
      <StyledMealItem>
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <span>${meal.price}</span>
      </StyledMealItem>
      <MealItemForm inputId={meal.id} onAdd={addProduct} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid #d6d6d6;

  :last-child {
    border-bottom: none;
  }
  margin-top: 20px;

  :first-child {
    margin-top: 0px !important;
  }
`;

const StyledMealItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;

  h4 {
    font-weight: 600;
    font-size: 18px;
    color: #222222;
    margin-top: 20px;
  }

  h4:first-child {
    margin-top: 0px;
  }

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: #222222;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    color: #ad5502;
  }
`;

export default MealItem;
