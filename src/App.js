import "./App.css";
import Nav from "./navbar/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import axios from "axios";
import Products from "./products/Products";
import { useState, useEffect } from "react";
import Card from "./utils/Card";
function App() {
  const [products, setProduct] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, query, selected) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, name }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          name === selected
      );
    }
    return filteredProducts.map(({ image, name, value, description }) => (
      <Card
        key={Math.random()}
        img={image}
        name={name}
        value={value}
        description={description}
      />
    ));
  }
  const result = filteredData(products, selectedCategory, query);
  return (
    <div className="App">
      <Sidebar handleChange={handleChange} />
      <div className="container">
        <Router>
          <Nav handleInputChange={handleInputChange} query={query} />
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </Router>
      </div>
    </div>
  );
}

export default App;
