import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { KEY_CODES } from "src/utils/constants";

interface SearchMenuProps {
  isSearchMenuVisible: boolean;
  handleSearchMenuToggle: () => void;
  handleSearchMenuInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  searchMenuInputText: string;
  onSearchButtonClick: () => void;
  searchInputErrors: string[];
}

const SearchMenu: React.FC<SearchMenuProps> = ({
  isSearchMenuVisible,
  handleSearchMenuToggle,
  handleSearchMenuInputChange,
  searchMenuInputText,
  onSearchButtonClick,
  searchInputErrors,
}) => {
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === KEY_CODES.ENTER) {
      onSearchButtonClick();
    }
  };

  return (
    <div
      className={`flex flex-col mx-auto justify-center absolute top-0 z-20 h-[180px] md:h-[120px] w-full bg-white dark:bg-black-faded shadow-lg ${
        isSearchMenuVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center w-full mw-[100%]">
        <input
          type="text"
          placeholder="Search for articles"
          value={searchMenuInputText}
          onChange={handleSearchMenuInputChange}
          onKeyUp={onKeyUp}
          className="md:w-[70%] h-[50px] bg-neutral-light dark:bg-gray-200 text-neutral-600  px-4 border border-blue-500 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-brand text-white py-2 px-4 h-[50px]"
          onClick={onSearchButtonClick}
        >
          Search
        </button>
        <button
          onClick={handleSearchMenuToggle}
          className="ml-4 text-neutral-500 hover:text-neutral-500 p-2"
        >
          <FontAwesomeIcon icon={faClose} className="text-3xl" />
        </button>
      </div>
      <div className="errors flex flex-col items-center justify-center my-2">
        {searchInputErrors.map((error) => (
          <p
            key={error}
            className="text-yellow-500 text-sm flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-lg text-red-500 mr-2"
            />
            {error}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchMenu;
