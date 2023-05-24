import React, { useEffect } from "react";
import { Modal } from "../../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBasketItem,
  getBasket,
  updateBasketItem,
} from "../../store/basket";

const Basket = ({ onToggle }) => {
  const { basketData } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBasket);
  }, [dispatch]);
  const decrement = (id, amount) => {
    if (amount > 1) {
      dispatch(updateBasketItem({ amount: amount - 1, id: id }));
    } else {
      dispatch(deleteBasketItem(id));
    }
  };
  const increment = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id: id }));
  };
  const totalPrice = basketData?.reduce(
    (prev, current) => prev + current.amount * current.price,
    0
  );

  return (
    <Modal onClose={onToggle}>
      <Content>
        {basketData?.length ? (
          <FixedWidthContainer>
            {basketData?.map((item) => {
              if (item.amount > 0) {
                return (
                  <BasketItem
                    key={item._id}
                    id={item._id}
                    increment={() => increment(item._id, item.amount)}
                    decrement={() => decrement(item._id, item.amount)}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  ></BasketItem>
                );
                return null;
              }
            })}
          </FixedWidthContainer>
        ) : null}

        <TotalAmount onClose={onToggle} totalPrice={totalPrice} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
`;

export default Basket;
