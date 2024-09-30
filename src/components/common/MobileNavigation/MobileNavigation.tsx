import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface MobileNavigationProps {
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen }) => {
  return (
    <div className={`md:hidden  ${isOpen ? "block" : "hidden"}`}>
      <nav className="md:hidden flex bg-white  h-[100vh] z-10 right-0 absolute top-[120px] w-[60%] shadow-lg">
        <ul className="flex flex-col  w-[100%] mt-4">
          <li className="mx-4 my-2 border-b-2 p-2 hover:border-blue-400">
            <Link
              className="text-neutral-dark  flex justify-between items-center"
              to="/"
            >
              <span>Home</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-neutral-dark"
              />
            </Link>
          </li>
          <li className="mx-4 my-2 border-b-2 p-2 hover:border-blue-400">
            <Link
              className="text-neutral-dark  flex justify-between items-center"
              to="/articles?tags=Software+Dev"
            >
              <span>Software Dev</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-neutral-dark"
              />
            </Link>
          </li>
          <li className="mx-4 my-2 border-b-2 p-2 hover:border-blue-400">
            <Link
              className="text-neutral-dark  flex justify-between items-center"
              to="/articles?tags=Cloud"
            >
              <span>Cloud</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-neutral-dark"
              />
            </Link>
          </li>
          <li className="mx-4 my-2 border-b-2 p-2 hover:border-blue-400">
            <Link
              className="text-neutral-dark  flex justify-between items-center"
              to="/articles?tags=AI"
            >
              <span>AI</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-neutral-dark"
              />
            </Link>
          </li>
          <li className="mx-4 my-2 border-b-2 p-2 hover:border-blue-400">
            <Link
              className="text-neutral-dark  flex justify-between items-center"
              to="/articles?tags=Security"
            >
              <span> Security</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-neutral-dark"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
