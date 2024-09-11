import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Dashboard } from "./pages/app/dashboard";
import { AuthLayout } from "./pages/_layouts/auth";
import { AppLayout } from "./pages/_layouts/app";
import { SignUp } from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
