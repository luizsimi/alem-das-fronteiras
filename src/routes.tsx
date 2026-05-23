import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  }
]);
