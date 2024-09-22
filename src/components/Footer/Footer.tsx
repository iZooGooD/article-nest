import React from "react";
import logo from "../../assets/article-nest-logo.png";

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
            <div>
              <ul className="flex">
                <li className="text-sm mx-2 text-grey-light">About Us</li>
                <li className="text-sm mx-2 text-grey-light">Contact Us</li>
                <li className="text-sm mx-2 text-grey-light">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
