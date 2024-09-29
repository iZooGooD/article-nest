import React, { useState } from "react";
import logo from "src/assets/article-nest-logo.png";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavigation from "src/components/MobileNavigation/MobileNavigation";
import LinkText from "src/components/common/LinkText/LinkText";
import { Link } from "react-router-dom";

const NavigationSecondary: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <nav className="flex bg-purple-dark h-20 items-center justify-between md:justify-around px-6">
      <div className="flex">
        <Link to="/">
          <img
            src={logo}
            alt="site logo"
            className="h-[175px] outline-none"
            height={175}
          />
        </Link>
      </div>
      <ul className="hidden md:flex">
        <LinkText to="/" text="Home" />
        <LinkText to="/" text="Software Dev" />
        <LinkText to="/" text="Cloud" />
        <LinkText to="/" text="AI" />
        <LinkText to="/" text="Security" />
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
