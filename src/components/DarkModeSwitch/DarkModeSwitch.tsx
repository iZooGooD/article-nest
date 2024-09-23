import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "src/hooks/useDarkMode";

const DarkModeSwitch: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="block bg-gray-600 w-12 h-6 rounded-full"></div>
        <div
          className={`dot absolute top-[2px] bg-white w-6 h-5 rounded-full transition-transform ${
            isDarkMode ? "transform translate-x-6" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={isDarkMode ? faMoon : faSun}
            className={`${
              isDarkMode ? "text-gray-600" : "text-orange-500"
            }  text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          />
        </div>
      </div>
    </label>
  );
};

export default DarkModeSwitch;
