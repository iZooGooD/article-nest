import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "src/components/common/Layout/Layout";
import Button from "src/components/common/_ux/Button/Button";
import { faFilter, faClose } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "src/components/ArticlesHome/SearchBar";
import Filters from "src/components/ArticlesHome/Filters";
import ArticlesList from "src/components/ArticlesHome/ArticleList";
import { API } from "src/services/api";
import Pagination from "src/components/common/Pagination/Pagination";
import { useQuery } from "react-query";

const ArticlesHome: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keywords, setKeywords] = useState(searchParams.get("keywords") || "");
  const [sortBy, setSortBy] = useState("date");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [author, setAuthor] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const { data: articles, isLoading } = useQuery(
    ["searchArticles", currentPage],
    () =>
      API.searchArticles(
        currentPage,
        keywords,
        sortBy,
        author,
        selectedTags.toString()
      ),
    {
      onSuccess: (data) => {
        setTotalPages(data.metadata.pages);
      },
    }
  );

  const { data: tags } = useQuery("tags", API.getAllTags);

  const handleSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = { keywords };
    if (author) params.author = author;
    if (selectedTags.length > 0) params.tags = selectedTags.join(",");
    if (sortBy) params.sortBy = sortBy;

    setSearchParams(params);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-6xl mx-auto my-10">
          <SearchBar
            keywords={keywords}
            setKeywords={setKeywords}
            onSearch={handleSearch}
          />

          <div className="mb-4">
            <Button
              text={showFilters ? "Close Filters" : "Show Filters"}
              type="secondary"
              size="s"
              icon={showFilters ? faClose : faFilter}
              onClick={() => setShowFilters(!showFilters)}
            />
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showFilters ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {showFilters && (
              <Filters
                sortBy={sortBy}
                setSortBy={setSortBy}
                tags={tags ?? []}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                author={author}
                setAuthor={setAuthor}
                onSearch={handleSearch}
              />
            )}
          </div>

          <ArticlesList articles={articles?.data ?? []} isLoading={isLoading} />

          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <Pagination
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ArticlesHome;
