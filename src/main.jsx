import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import GadgetDetails from "./Components/GadgetDetails/GadgetDetails.jsx";
import CartList from "./Components/CartList/CartList.jsx";
import WishList from "./Components/WishList/WishList.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Statistic from "./Components/Statistics/Statistic.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "cartList",
        element: <CartList></CartList>,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "wishList",
        element: <WishList></WishList>,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "statistics",
        element: <Statistic></Statistic>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>
);
