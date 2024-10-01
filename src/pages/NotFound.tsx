// File: src/pages/NotFound.tsx

import React from "react";
import { Link } from "react-router-dom";
import Button from "src/components/common/_ux/Button/Button";
import Layout from "src/components/common/Layout/Layout";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
          <div className="text-center px-4">
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt="404 illustration"
              className="w-full max-w-sm mx-auto mb-8"
            />

            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-2xl font-medium mb-2">Oops! Lost in the void?</p>
            <p className="mb-6">
              It looks like the page you're trying to find got lost somewhere in
              the infinite digital abyss.
            </p>

            <p className="mb-8 text-lg">
              But don’t worry, our search party is on the way! 🚀
            </p>

            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Button
                text="Take Me Home"
                type="primary"
                size="s"
                onClick={() => (window.location.href = "/")}
              />
              <Link to="/articles">
                <Button text="Explore Articles" type="secondary" size="s" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
