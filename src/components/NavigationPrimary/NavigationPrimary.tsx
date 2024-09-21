import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const NavigationPrimary: React.FC = () => {
  return (
    <nav className="flex justify-end items-center bg-purple-light h-10">
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
          <DarkModeSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPrimary;
