import React from "react";
import logo from "src/assets/article-nest-logo.png";
import LinkText from "src/components/common/LinkText/LinkText";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-purple-dark">
      <div className="text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center border-t border-grey-light justify-between">
            <div className="flex items-center">
              <img
                src={logo}
                alt="site logo"
                className="h-[100px] outline-none"
              />
              <p className="text-sm text-grey-light ml-4">
                Copyright 2024 Article Nest. All rights reserved
              </p>
            </div>
            <div className="flex">
              <LinkText to="/about-us" text="About Us" />
              <LinkText to="/contact-us" text="Contact Us" />
              <LinkText to="/privacy-policy" text="Privacy Policy" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
