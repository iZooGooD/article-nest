import NavigationPrimary from "src/components/common/NavigationPrimary/NavigationPrimary";
import NavigationSecondary from "src/components/common/NavigationSecondary/NavigationSecondary";
import useOutsideClickHandler from "src/hooks/useOutsideClickHandler";

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
  const dropdownRef = useOutsideClickHandler(handleSignInMenuToggle);
  return (
    <header>
      <div ref={isSignInMenuOpen ? dropdownRef : undefined}>
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
      </div>
      <NavigationSecondary />
    </header>
  );
};

export default Header;
