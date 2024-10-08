import "src/index.scss";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import ArticleReading from "src/pages/ArticleReading.tsx";
import AuthorProfile from "src/pages/AuthorProfile.tsx";
import Home from "src/pages/Home";
import ArticlesHome from "src/pages/ArticlesHome";
import MyProfile from "src/pages/MyProfile";
import MyDashboard from "src/pages/MyDashboard";
import { Editor } from "src/pages/Editor";
import UserSignupLogin from "src/pages/UserSignupLogin";
import NotFound from "src/pages/NotFound";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":username/posts/:slug",
    element: <ArticleReading />,
  },
  {
    path: "user/:username",
    element: <AuthorProfile />,
  },
  {
    path: "articles",
    element: <ArticlesHome />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "me/profile",
        element: <MyProfile />,
      },
      {
        path: "me/articles",
        element: <MyDashboard />,
      },
      {
        path: "articleEditor",
        element: <Editor />,
      },
    ],
  },
  {
    path: "members",
    element: <UserSignupLogin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
