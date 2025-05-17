import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Service from "./components/Service";
import Contact from "./components/Contact";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail", element: <Detail /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/service", element: <Service /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default routes;
