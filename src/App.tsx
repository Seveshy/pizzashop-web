import "./global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/react-query";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <QueryClientProvider client={queryClient}>
        <Toaster richColors />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
