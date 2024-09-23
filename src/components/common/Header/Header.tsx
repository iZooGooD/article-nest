import React from "react";
import NavigationPrimary from "../../NavigationPrimary/NavigationPrimary";
import NavigationSecondary from "../../NavigationSecondary/NavigationSecondary";

interface HeaderProps {
  isSignInMenuOpen: boolean;
  handleSignInMenuToggle: () => void;
  isSearchMenuVisible: boolean;
  handleSearchMenuToggle: () => void;
  handleSearchMenuInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  searchMenuInputText: string;
  onSearchButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isSignInMenuOpen,
  handleSignInMenuToggle,
  isSearchMenuVisible,
  handleSearchMenuToggle,
  handleSearchMenuInputChange,
  searchMenuInputText,
  onSearchButtonClick,
}) => {
  return (
    <header>
      <NavigationPrimary
        isSignInMenuOpen={isSignInMenuOpen}
        handleSignInMenuToggle={handleSignInMenuToggle}
        isSearchMenuVisible={isSearchMenuVisible}
        handleSearchMenuToggle={handleSearchMenuToggle}
        handleSearchMenuInputChange={handleSearchMenuInputChange}
        searchMenuInputText={searchMenuInputText}
        onSearchButtonClick={onSearchButtonClick}
      />
      <NavigationSecondary />
    </header>
  );
};

export default Header;
