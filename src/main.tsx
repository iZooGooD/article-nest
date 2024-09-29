import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import makeServer from "./mirage/server";
import ArticleReading from "./pages/ArticleReading.tsx";
import AuthorProfile from "./pages/AuthorProfile.tsx";
import MyProfile from "./pages/MyProfile.tsx";

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
    path: "myProfile",
    element: <MyProfile />,
  },
]);

// TODO: remove this line once frontend is ready and replace with env check
makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
