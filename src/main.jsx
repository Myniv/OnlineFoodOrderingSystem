import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./page/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerPage from "./page/CustomerPage.jsx";
import OrderPage from "./page/OrderPage.jsx";
import MenuPage from "./page/MenuPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
    errorElement:<div>404 NotFound</div>
  },
  {
    path: "/CustomerPage",
    element: <CustomerPage />,
  },
  {
    path: "/OrderPage",
    element: <OrderPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
