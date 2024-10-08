import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileAlt,
  faRightFromBracket,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "src/contexts/AuthContext";

interface SignInMenuProps {
  isSignInMenuOpen: boolean;
}

const SignInMenu: React.FC<SignInMenuProps> = ({ isSignInMenuOpen }) => {
  const { state, logout } = useAuth();
  return (
    <div
      className={`rounded-md shadow-md z-20 sign-in-menu flex flex-col gap-4 ${
        state.isAuthenticated ? "" : "p-3 md:p-6"
      }  bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 absolute top-10 right-0 rounded-b-md transition-opacity duration-300 ${
        isSignInMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {state.isAuthenticated ? (
        <div>
          <ul className="">
            <li className="border-b dark:border-gray-600">
              <Link
                to="/me/articles"
                className="text-sm flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="text-gray-600 dark:text-neutral-300"
                />
                <span>My articles</span>
              </Link>
            </li>
            <li className="border-b dark:border-gray-600">
              <Link
                to="/me/profile"
                className="text-sm flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-600 dark:text-neutral-300"
                />
                <span>Profile & Settings</span>
              </Link>
            </li>
            <li className="border-b dark:border-gray-600">
              <Link
                to="/articleEditor?mode=create"
                className="text-sm flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="text-gray-600 dark:text-neutral-300"
                />
                <span>Write article</span>
              </Link>
            </li>
            <li className="border-b dark:border-gray-600">
              <Link
                className="text-sm flex items-center  gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                to={""}
                onClick={logout}
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="text-gray-600 dark:text-neutral-300"
                />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <SignInButtons />
      )}
    </div>
  );
};

const SignInButtons: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="google-sign-in p-4 bg-white dark:bg-gray-700 rounded-md shadow-sm">
        <h4 className="text-center text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
          Sign in using
        </h4>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Login with Google
            </span>
          </button>
        </div>
      </div>
      <div className="email-sign-in p-4 bg-white dark:bg-gray-700 rounded-md shadow-sm">
        <h4 className="text-center text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
          Sign in using
        </h4>
        <div className="flex justify-center">
          <Link
            to="/members"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500 transition"
          >
            <span className="text-sm text-gray-700 dark:text-gray-200">
              Sign in with Email
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInMenu;
