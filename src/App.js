import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/Re-commerce"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        >
          Home
        </Route>
        <Route
          path="/about"
          element={
            <>
              <Slider />
              <About />
            </>
          }
        >
          About Us
        </Route>
        <Route path={"/product/:productId"} element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
