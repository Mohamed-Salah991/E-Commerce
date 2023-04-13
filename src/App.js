import "./App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Root from "./Pages/Root";
import Error from "./Pages/Error";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WhishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/:productId",
        element: <Details />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wish-list",
        element: <WishList />,
      },
    ],
  },
]);

function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data);

      return data;
    };

    // fetchData();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
