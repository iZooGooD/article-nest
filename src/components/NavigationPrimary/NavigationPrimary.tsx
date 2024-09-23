import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

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
      <div
        className={`w-full shadow-md z-20 sign-in-menu flex gap-4 p-3 md:p-6 flex-wrap bg-neutral-light text-grey-dark absolute top-10 right-0 md:w-[580px] rounded-b-md transition-opacity duration-300 ${
          isSignInMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="google-sign-in p-2 md:p-4 bg-white flex-1 rounded-md">
          <h4 className="flex flex-col my-2 text-center">Sign in using</h4>
          <div className="flex justify-center">
            <button className="px-2 md:px-4 py-2  border flex items-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span className="text-sm">Login with Google</span>
            </button>
          </div>
        </div>
        <div className="email-sign-in p-2 md:p-4 bg-white flex-1 rounded-md">
          <h4 className="flex flex-col my-2 text-center">Sign in using</h4>
          <div className="flex justify-center">
            <button className="px-4 py-2  border flex items-center  gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700  hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <span className="text-sm">Login with Email</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationPrimary;
