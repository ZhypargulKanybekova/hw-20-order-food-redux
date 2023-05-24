import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons//Basket.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../../store/basket";

const OrderBusket = ({ onToggle, children, className }) => {
  const { basketData } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);
  const orderAmount = basketData.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  return (
    <Button className={className} onClick={onToggle}>
      <BasketIcon /> <OrderBasketTitle> {children}</OrderBasketTitle>
      <OrderBasketCount>{orderAmount}</OrderBasketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #4d1601;
  }

  /* animation: bump 300ms ease-out;

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  } */
`;

const OrderBasketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  margin: 0px 24px 0px 13px;
`;

const OrderBasketCount = styled.span`
  border-radius: 30px;
  background-color: #8a2b06;
  padding: 9px 20px;
  font-weight: 600;
`;

export default OrderBusket;
