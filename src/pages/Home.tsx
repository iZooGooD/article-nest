import Header from "src/components/common/Header/Header";
import TrendingArticles from "src/components/TrendingArticles/TrendingArticles";
import { useState, useEffect } from "react";
import { ArticleType } from "src/utils/types/article";
import { API } from "src/services/api";
import LatestArticles from "src/components/LatestArticles/LatestArticles";
import Footer from "src/components/common/Footer/Footer";
import { searchSchema } from "src/utils/validations/search";
import { z } from "zod";

function Home() {
  // SignInMenu states and handlers
  const [isSignInMenuOpen, setIsSignInMenuOpen] = useState<boolean>(false);
  const handleSignInMenuToggle = () => {
    setIsSignInMenuOpen(!isSignInMenuOpen);
  };

  // SearchMenu states and handlers
  const [searchMenuInputText, setSearchMenuInputText] = useState<string>("");
  const [isSearchMenuVisible, setIsSearchMenuVisible] =
    useState<boolean>(false);
  const handleSearchMenuToggle = () => {
    if (isSearchMenuVisible) {
      setSearchMenuInputText("");
      setSearchInputErrors([]);
    }
    setIsSearchMenuVisible(!isSearchMenuVisible);
  };
  const handleSearchMenuInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchMenuInputText(event.target.value);
  };
  const [searchInputErrors, setSearchInputErrors] = useState<string[]>([]);
  const onSearchButtonClick = () => {
    // TODO: Implement search functionality
    try {
      searchSchema.parse(searchMenuInputText);
      setSearchInputErrors([]);
      setSearchMenuInputText("");
    } catch (e) {
      if (e instanceof z.ZodError) {
        setSearchInputErrors(e.errors.map((error) => error.message));
      }
    }
  };

  const shouldBlueBackground = isSignInMenuOpen || isSearchMenuVisible;

  const [trendingArticles, setTrendingArticles] = useState<ArticleType[]>([]);
  const [latestArticles, setLatestArticles] = useState<ArticleType[]>([]);
  const [isTrendingArticlesLoading, setIsTrendingArticlesLoading] =
    useState<boolean>(true);
  const [isLatestArticlesLoading, setIsLatestArticlesLoading] =
    useState<boolean>(true);

  useEffect(() => {
    const fetchTrendingArticles = async () => {
      const articles = await API.getTrendingArticles();
      setTrendingArticles(articles);
      setIsTrendingArticlesLoading(false);
    };
    const fetchLatestArticles = async () => {
      const articles = await API.getLatestArticles();
      setLatestArticles(articles);
      setIsLatestArticlesLoading(false);
    };
    fetchTrendingArticles();
    fetchLatestArticles();
  }, []);

  return (
    <div>
      <Header
        isSignInMenuOpen={isSignInMenuOpen}
        handleSignInMenuToggle={handleSignInMenuToggle}
        isSearchMenuVisible={isSearchMenuVisible}
        handleSearchMenuToggle={handleSearchMenuToggle}
        handleSearchMenuInputChange={handleSearchMenuInputChange}
        searchMenuInputText={searchMenuInputText}
        onSearchButtonClick={onSearchButtonClick}
        searchInputErrors={searchInputErrors}
      />
      <div
        className={`dark:bg-grey-dark bg-neutral-light flex flex-col ${
          shouldBlueBackground && "blur-sm"
        }`}
      >
        <TrendingArticles
          articles={trendingArticles}
          isLoading={isTrendingArticlesLoading}
        />
        <LatestArticles
          articles={latestArticles}
          isLoading={isLatestArticlesLoading}
        />
        <div className="my-8 flex">
          <button className="mx-auto bg-brand text-white py-2 px-4 rounded-md">
            Explore more
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
