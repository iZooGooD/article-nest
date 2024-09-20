import React from "react";
import logo from "../../assets/article-nest-logo.png";

const NavigationSecondary: React.FC = () => {
  return (
    <nav className="flex bg-purple-dark h-20 items-center">
      <img src={logo} alt="site logo" className="h-[140px]" />
    </nav>
  );
};

export default NavigationSecondary;
