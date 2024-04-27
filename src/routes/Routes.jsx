import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllArtAndCraftItems from "../pages/AllArtAndCraftItems/AllArtAndCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtAndCraftList from "../pages/MyArtAndCraftList/MyArtAndCraftList";
import PrivateRoute from "./PrivateRoute";
import ViewDetailsPage from "../pages/ViewDetailsPage/ViewDetailsPage";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
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
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-art-craft-list",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-details-page/:id",
        element: (
          <PrivateRoute>
            <ViewDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-page/:id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;