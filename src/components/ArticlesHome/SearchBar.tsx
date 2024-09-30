import Button from "../common/_ux/Button/Button";

interface SearchBarProps {
  keywords: string;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  keywords,
  setKeywords,
  onSearch,
}) => {
  return (
    <div className="search-bar w-full flex mb-6">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-l-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search articles..."
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <Button text="Search" type="primary" size="s" onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
