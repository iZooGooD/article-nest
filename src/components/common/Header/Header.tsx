import React from "react";
import NavigationPrimary from "../../NavigationPrimary/NavigationPrimary";
import NavigationSecondary from "../../NavigationSecondary/NavigationSecondary";

interface HeaderProps {
  isSignInMenuOpen: boolean;
  handleSignInMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isSignInMenuOpen,
  handleSignInMenuToggle,
}) => {
  return (
    <header>
      <NavigationPrimary
        isSignInMenuOpen={isSignInMenuOpen}
        handleSignInMenuToggle={handleSignInMenuToggle}
      />
      <NavigationSecondary />
    </header>
  );
};

export default Header;
