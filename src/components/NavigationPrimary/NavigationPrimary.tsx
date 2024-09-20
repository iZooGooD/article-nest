import React from "react";

const NavigationPrimary: React.FC = () => {
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
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPrimary;
