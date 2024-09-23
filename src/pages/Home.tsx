import Header from "src/components/common/Header/Header";
import TrendingArticles from "src/components/TrendingArticles/TrendingArticles";
import { useState, useEffect } from "react";
import { ArticleType } from "src/utils/types/article";
import { API } from "src/services/api";
import LatestArticles from "src/components/LatestArticles/LatestArticles";
import Footer from "src/components/common/Footer/Footer";

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
    setIsSearchMenuVisible(!isSearchMenuVisible);
  };
  const handleSearchMenuInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchMenuInputText(event.target.value);
  };
  const onSearchButtonClick = () => {
    // TODO: Implement search functionality
  };

  const shouldBlueBackground = isSignInMenuOpen || isSearchMenuVisible;

  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isTrendingArticlesLoading, setIsTrendingArticlesLoading] =
    useState<boolean>(true);

  useEffect(() => {
    const fetchTrendingArticles = async () => {
      const trendingArticles = await API.getTrendingArticles();
      setArticles(trendingArticles);
      setIsTrendingArticlesLoading(false);
    };
    fetchTrendingArticles();
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
      />
      <div
        className={`dark:bg-grey-dark bg-neutral-light flex flex-col ${
          shouldBlueBackground && "blur-sm"
        }`}
      >
        <TrendingArticles
          articles={articles}
          isLoading={isTrendingArticlesLoading}
        />
        <LatestArticles
          articles={articles}
          isLoading={isTrendingArticlesLoading}
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
