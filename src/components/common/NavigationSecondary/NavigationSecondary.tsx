import React, { useState } from "react";
import logo from "src/assets/article-nest-logo.png";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavigation from "src/components/common/MobileNavigation/MobileNavigation";
import LinkText from "src/components/common/_ux/LinkText/LinkText";
import { Link } from "react-router-dom";
import useOutsideClickHandler from "src/hooks/useOutsideClickHandler";

const NavigationSecondary: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const mobileMenuRef = useOutsideClickHandler(handleMobileNavClick);

  return (
    <nav className="flex bg-purple-dark h-20 items-center justify-between md:justify-around px-6">
      <div className="flex">
        <Link to="/">
          <img
            src={logo}
            alt="site logo"
            className="h-[175px] outline-none select-none"
            height={175}
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 select-none">
        <li className="nav-item">
          <LinkText to="/" text="Home" />
        </li>
        <li className="nav-item">
          <LinkText to="/articles?tags=Software+Dev" text="Software Dev" />
        </li>
        <li className="nav-item">
          <LinkText to="/articles?tags=Cloud" text="Cloud" />
        </li>
        <li className="nav-item">
          <LinkText to="/articles?tags=AI" text="AI" />
        </li>
        <li className="nav-item">
          <LinkText to="/articles?tags=Security" text="Security" />
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="flex">
        <FontAwesomeIcon
          icon={isMobileNavOpen ? faClose : faBars}
          className="text-3xl cursor-pointer md:hidden flex"
          onClick={handleMobileNavClick}
        />
        <div ref={isMobileNavOpen ? mobileMenuRef : undefined}>
          <MobileNavigation isOpen={isMobileNavOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationSecondary;
