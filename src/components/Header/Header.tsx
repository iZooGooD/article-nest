import React from "react";
import NavigationPrimary from "../NavigationPrimary/NavigationPrimary";
import NavigationSecondary from "../NavigationSecondary/NavigationSecondary";

const Header: React.FC = () => {
  return (
    <header>
      <NavigationPrimary />
      <NavigationSecondary />
    </header>
  );
};

export default Header;
