import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import DarkModeSwitch from "src/components/Common/DarkModeSwitch/DarkModeSwitch";
import SignInMenu from "src/components/Common/SignInMenu/SignInMenu";
import SearchMenu from "src/components/Common/SearchMenu/SearchMenu";

interface NavigationPrimaryProps {
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

const NavigationPrimary: React.FC<NavigationPrimaryProps> = ({
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
    <nav className="flex justify-end items-center bg-purple-light h-10 relative">
      <ul className="flex mx-2">
        <li className="mx-2">
          <span
            className="mx-2 text-sm cursor-pointer text-purple-faded hover:text-white select-none"
            onClick={handleSearchMenuToggle}
          >
            Find
          </span>
        </li>
        <li className="mx-2">|</li>
        <li className="mx-2 flex items-center" onClick={handleSignInMenuToggle}>
          <FontAwesomeIcon
            className="hover:text-white text-purple-faded"
            icon={faUser}
          />
          <span className="mx-2 text-sm cursor-pointer text-purple-faded hover:text-white select-none">
            Sign in
          </span>
          <FontAwesomeIcon
            className="hover:text-white text-purple-faded"
            icon={isSignInMenuOpen ? faCaretUp : faCaretDown}
          />
        </li>
        <li className="mx-2">
          <DarkModeSwitch />
        </li>
      </ul>
      <SignInMenu isSignInMenuOpen={isSignInMenuOpen} />
      <SearchMenu
        isSearchMenuVisible={isSearchMenuVisible}
        handleSearchMenuToggle={handleSearchMenuToggle}
        handleSearchMenuInputChange={handleSearchMenuInputChange}
        searchMenuInputText={searchMenuInputText}
        onSearchButtonClick={onSearchButtonClick}
        searchInputErrors={searchInputErrors}
      />
    </nav>
  );
};

export default NavigationPrimary;
