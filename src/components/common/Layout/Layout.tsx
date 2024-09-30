import Header from "src/components/common/Header/Header";
import { useState } from "react";
import Footer from "src/components/common/Footer/Footer";
import { searchSchema } from "src/utils/validations/search";
import { z } from "zod";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
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
    try {
      searchSchema.parse(searchMenuInputText);
      setSearchInputErrors([]);
      setSearchMenuInputText("");
      navigate(`/articles?keywords=${searchMenuInputText}`);
    } catch (e) {
      if (e instanceof z.ZodError) {
        setSearchInputErrors(e.errors.map((error) => error.message));
      }
    }
  };

  const shouldBlueBackground = isSignInMenuOpen || isSearchMenuVisible;

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
        {children}
        <Footer />
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}

export default Layout;
