import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainContextProvider } from "./context/MainContext";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { AppLayout } from "./common/AppLayout";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Shop />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <MainContextProvider>
      <ShopContextProvider>
        <RouterProvider router={allRoutes} />
      </ShopContextProvider>
    </MainContextProvider>
  );
}

export default App;
