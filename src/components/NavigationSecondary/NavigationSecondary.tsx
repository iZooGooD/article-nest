import React, { useState } from "react";
import logo from "../../assets/article-nest-logo.png";
import { Link } from "react-router-dom";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const NavigationSecondary: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <nav className="flex bg-purple-dark h-20 items-center justify-between md:justify-around px-6">
      <div className="flex">
        <img
          src={logo}
          alt="site logo"
          className="h-[175px] outline-none"
          height={175}
        />
      </div>
      <ul className="hidden md:flex">
        <li className="mx-4">
          <Link to="/" className="text-lg text-grey-light hover:text-white">
            Home
          </Link>
        </li>
        <li className="mx-4">
          <Link className="text-lg text-grey-light hover:text-white" to="/">
            Software Dev
          </Link>
        </li>
        <li className="mx-4">
          <Link className="text-lg text-grey-light hover:text-white" to="/">
            Cloud
          </Link>
        </li>
        <li className="mx-4">
          <Link className="text-lg text-grey-light hover:text-white" to="/">
            AI
          </Link>
        </li>
        <li className="mx-4">
          <Link className="text-lg text-grey-light hover:text-white" to="/">
            Security
          </Link>
        </li>
      </ul>
      <div className="flex">
        <FontAwesomeIcon
          icon={isMobileNavOpen ? faClose : faBars}
          className="text-3xl cursor-pointer md:hidden flex"
          onClick={handleMobileNavClick}
        />
        <MobileNavigation isOpen={isMobileNavOpen} />
      </div>
    </nav>
  );
};

export default NavigationSecondary;
