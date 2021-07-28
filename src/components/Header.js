import React from "react";
import HeaderStyles from "./styles/HeaderStyles"

const Header = (props) => {
  return (
    <div>
      <HeaderStyles.Header>
        Onomichi City BOE Car Schedule
      </HeaderStyles.Header>
      <div>
        The dates will go here
      </div>
    </div>
  );
};

export default Header;
