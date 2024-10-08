import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import makeServer from "./mirage/server";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthProvider } from "./contexts/AuthContext.js";
import { AnimatePresence } from "framer-motion";
import { Routes } from "./routes/Routes.tsx";

const queryClient = new QueryClient();

// TODO: remove this line once frontend is ready and replace with env check
makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnimatePresence initial={false} mode="wait">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Routes} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </AnimatePresence>
  </StrictMode>
);
