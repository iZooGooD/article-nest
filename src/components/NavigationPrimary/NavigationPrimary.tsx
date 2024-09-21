import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../../hooks/useDarkMode";

const NavigationPrimary: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <nav className="flex justify-end items-center bg-purple-light h-8">
      <ul className="flex mx-2">
        <li className="mx-2">
          <a className="text-sm" href="/">
            Find
          </a>
        </li>
        <li className="mx-2">|</li>
        <li className="mx-2">
          <a className="text-sm" href="/sing-in">
            <FontAwesomeIcon icon={faUser} />
            <span className="mx-2">Sign in</span>
          </a>
        </li>
        <li className="mx-2">
          <button onClick={toggleDarkMode} className="flex items-center">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            <span className="ml-2">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPrimary;
