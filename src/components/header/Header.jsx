import styled from "styled-components";
import OrderBusket from "./OrderBusket";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = ({ onToggle }) => {
  const [modalAnimation, setModalAnimation] = useState("");
  // const { items } = useContext(cartContext);

  const { basketData } = useSelector((state) => state.basket);

  useEffect(() => {
    setModalAnimation("bump");

    const stopAnimated = setTimeout(() => {
      setModalAnimation("");
    }, 300);

    return () => {
      clearTimeout(stopAnimated);
    };
  }, [basketData]);

  return (
    <header style={{ width: "100%" }}>
      <Container>
        <h1>ReactMeals</h1>
        <OrderBusket className={modalAnimation} onToggle={onToggle}>
          your cart
        </OrderBusket>
      </Container>
    </header>
  );
};

const Container = styled.div`
  height: 101px;
  width: 100%;
  display: flex;
  background-color: #8a2b06;
  padding: 0px 120px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 40;

  h1 {
    font-weight: 600;
    font-size: 38px;
    color: #fff;
  }

  .bump {
    animation: bump 300ms ease-out;
  }

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
  }
`;

export default Header;
