import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Headr from "./Headr";
import Hom from "./Hom";
import Categories from "./Categories";
import Products from "./Products";
import Lgin from "./Lgin";
import Foot from "./Foot";

function App() {
  return (
    <BrowserRouter>

      <Headr />

      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/lgin" element={<Lgin />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>

      <Foot />

    </BrowserRouter>
  );
}

export default App;
