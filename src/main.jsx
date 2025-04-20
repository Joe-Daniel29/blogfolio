import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import BlogPostDetail from "./pages/BlogPostDetail";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/blog/:token", element: <BlogPostDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);