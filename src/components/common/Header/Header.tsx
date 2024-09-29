import React from "react";
import NavigationPrimary from "src/components/Common/NavigationPrimary/NavigationPrimary";
import NavigationSecondary from "src/components/Common/NavigationSecondary/NavigationSecondary";

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
  searchInputErrors: string[];
}

const Header: React.FC<HeaderProps> = ({
  isSignInMenuOpen,
  handleSignInMenuToggle,
  isSearchMenuVisible,
  handleSearchMenuToggle,
  handleSearchMenuInputChange,
  searchMenuInputText,
  onSearchButtonClick,
  searchInputErrors,
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
        searchInputErrors={searchInputErrors}
      />
      <NavigationSecondary />
    </header>
  );
};

export default Header;
