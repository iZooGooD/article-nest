import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

interface LoadingErrorProps {
  message?: string;
}

const LoadingError: React.FC<LoadingErrorProps> = ({
  message = "Oops, something went wrong on the server",
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-8 rounded-md shadow-md">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="text-red-500 text-6xl mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">Error</h2>
      <p className="text-center text-lg">{message}</p>
    </div>
  );
};

export default LoadingError;
