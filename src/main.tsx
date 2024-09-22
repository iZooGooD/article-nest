import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import makeServer from "./mirage/server";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

// TODO: remove this line once frontend is ready and replace with env check
makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
