import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Header from "./common/Header/Header";
import MySlider from "./components/My Slider";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data);
      return data;
    };

    fetchData();
  }, []);

  console.log(products);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
