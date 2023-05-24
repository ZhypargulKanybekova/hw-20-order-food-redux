import React from "react";
import styled from "styled-components";
import {
  getBackgroundColor,
  getBorderColor,
  getBorderRadius,
  getColor,
} from "../utils/helpers";

export const Button = ({
  borderRadius = "rounded",
  variant = "contained",
  icon,
  onClick,
  children,
  ...props
}) => {
  return (
    <MyButton
      borderRadius={borderRadius}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </MyButton>
  );
};

const MyButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  color: ${getColor};
  border: ${getBorderColor};

  font-weight: 700;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  :hover {
    background: #7e2a0a;
    color: #fff;
    svg{
    stroke: #fff;
    
  }
  }
  :active {
    background: #993108;
  }
  :disabled {
    background: #cac6c4;
    color: white;
    border: none;
  }  
  svg{
    fill: ${getColor};
    stroke: ${getColor};
  }
`;
