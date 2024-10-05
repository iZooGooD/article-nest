import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import makeServer from "./mirage/server";
import ArticleReading from "./pages/ArticleReading.tsx";
import AuthorProfile from "./pages/AuthorProfile.tsx";
import MyProfile from "./pages/MyProfile.tsx";
import UserSignupLogin from "./pages/UserSignupLogin.tsx";
import ArticlesHome from "./pages/ArticlesHome.tsx";
import NotFound from "./pages/NotFound.tsx";
import MyDashboard from "./pages/MyDashboard.tsx";
import { Editor } from "./pages/Editor.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":username/:slug",
    element: <ArticleReading />,
  },
  {
    path: ":username",
    element: <AuthorProfile />,
  },
  {
    path: "me/profile",
    element: <MyProfile />,
  },
  {
    path: "me/articles",
    element: <MyDashboard />,
  },
  {
    path: "members",
    element: <UserSignupLogin />,
  },
  {
    path: "articles",
    element: <ArticlesHome />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "articleEditor",
    element: <Editor />,
  },
]);

// TODO: remove this line once frontend is ready and replace with env check
makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
