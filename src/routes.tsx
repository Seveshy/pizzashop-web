import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Dashboard } from "./pages/app/dashboard";

export const router = createBrowserRouter([
    { path: "/sign-in", element: <SignIn />},
    { path: "/", element: <Dashboard />}
])