import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import ExecutiveBoard from "./components/ExecutiveBoard";
import Divisions from "./components/Divisions";
import Sponsors from "./components/Sponsors";
import Merch from "./components/Merch";
import Involvement from "./components/Involvement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "ExecutiveBoard", Component: ExecutiveBoard },
      { path: "divisions", Component: Divisions },
      { path: "sponsors", Component: Sponsors},
      { path: "merch", Component: Merch },
      { path: "involvement", Component: Involvement},
    ],
  },
]);
