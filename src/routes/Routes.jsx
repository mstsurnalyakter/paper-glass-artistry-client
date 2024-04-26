import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems/AllArtAndCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList/MyArtAndCraftList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-art-and-craft-items",
        element: <AllArtAndCraftItems />,
      },
      {
        path: "/add-craft-item",
        element: <AddCraftItem />,
      },
      {
        path: "/my-art-craft-list",
        element:<MyArtAndCraftList/>
      },
    ],
  },
]);

export default router;