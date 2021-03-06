import React from "react";
import Styled from "styled-components";
import { FoodGrid, Food, foodItems } from "./FoodGrid";

const MenuStyled = Styled.div`
  height: 1000px;
  margin: 0px 400px 50px 300px;
`;

function Menu() {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      <FoodGrid>
        {foodItems.map(food => (
          <Food img={food.img} /> {food.img} <Food>
        ))}
      </FoodGrid>
    </MenuStyled>
  );
}

export default Menu;
