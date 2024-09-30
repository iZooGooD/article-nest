import Button from "../Common/_ux/Button/Button";
import { TagType } from "src/utils/types/tags";
interface FiltersProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  tags: TagType[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  author: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  sortBy,
  setSortBy,
  tags,
  selectedTags,
  setSelectedTags,
  author,
  setAuthor,
  onSearch,
}) => {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="filters flex flex-col space-y-4 mb-6">
      {/* Sort By and Author Filters */}
      <div className="sort-by">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Sort by
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg dark:text-neutral-200 text-neutral-600 dark:bg-gray-700"
        >
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
          <option value="comments">Comments</option>
        </select>
      </div>

      <div className="author-filter">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Author
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Filter by author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      {/* Tags Filter */}
      <div className="tags-filter">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Tags
        </label>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className={`px-3 py-1 border rounded-lg ${
                selectedTags.includes(tag.name)
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => toggleTag(tag.name)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      <Button text="Apply Filters" type="primary" size="s" onClick={onSearch} />
    </div>
  );
};

export default Filters;
