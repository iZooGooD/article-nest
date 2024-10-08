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
import { AuthProvider } from "./contexts/AuthContext.js";
import PrivateRoutes from "./routes/PrivateRoutes.tsx";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
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

const queryClient = new QueryClient();

// TODO: remove this line once frontend is ready and replace with env check
makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimatePresence initial={false} mode="wait">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </AnimatePresence>
  </StrictMode>
);
