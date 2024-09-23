import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import SignInMenu from "../SignInMenu/SignInMenu";

interface NavigationPrimaryProps {
  isSignInMenuOpen: boolean;
  handleSignInMenuToggle: () => void;
}

const NavigationPrimary: React.FC<NavigationPrimaryProps> = ({
  isSignInMenuOpen,
  handleSignInMenuToggle,
}) => {
  return (
    <nav className="flex justify-end items-center bg-purple-light h-10 relative">
      <ul className="flex mx-2">
        <li className="mx-2">
          <a className="text-sm text-purple-faded" href="/">
            Find
          </a>
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
    </nav>
  );
};

export default NavigationPrimary;
