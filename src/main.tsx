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
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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

const queryClient = new QueryClient();

// TODO: remove this line once frontend is ready and replace with env check
makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
