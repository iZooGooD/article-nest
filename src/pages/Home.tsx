import { useState } from "react";
import Header from "../components/Header/Header";
import TrendingArticles from "../components/TrendingArticles/TrendingArticles";

function Home() {
  return (
    <div>
      <Header />
      <div className=" dark:bg-grey-dark bg-neutral-light flex flex-col">
        <TrendingArticles />
      </div>
    </div>
  );
}

export default Home;
