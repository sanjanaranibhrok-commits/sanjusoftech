import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(250);

  const products = [
    { name: "India Gate Basmati Rice", price: 135, image: "/India-Gate-Brown.jpg" },
    { name: "Aashirvaad Atta", price: 250, image: "/atta.avif" },
    { name: "Tata Salt", price: 25, image: "/salt.jpg" },
    { name: "Tata Sampann Toor Dal", price: 165, image: "/toor dal.jpg" },
    { name: "Fortune Mustard Oil", price: 160, image: "/oil.jpg" },
    { name: "Fortune Refined Oil", price: 135, image: "/refined.avif" },
    { name: "Gagan Ghee", price: 550, image: "/ghee.jpg" },
    { name: "Tata Tea", price: 120, image: "/tea.jpg" },
    { name: "Maggi 2-Minute Noodles", price: 60, image: "/maggi.jpg" },
    { name: "Parle-G Biscuits", price: 30, image: "/parleg.jpg" },
    { name: "MDH Masala", price: 65, image: "/mdh.jpg" },
    { name: "Saffola Masala Oats", price: 55, image: "/oats.jpg" }
  ];

  const quantities = [
    { label: "250 g", value: 250 },
    { label: "500 g", value: 500 },
    { label: "1 kg", value: 1000 },
    { label: "2 kg", value: 2000 },
    { label: "3 kg", value: 3000 },
    { label: "4 kg", value: 4000 },
    { label: "5 kg", value: 5000 }
  ];

  function calculatePrice(product, qty) {
    return Math.round((product.price / 1000) * qty);
  }

  function addToCart() {
    const productToAdd = {
      ...selectedProduct,
      quantity: quantity,
      price: calculatePrice(selectedProduct, quantity)
    };

    if (localStorage.getItem("isLoggedIn") !== "true") {
      localStorage.setItem(
        "pendingProduct",
        JSON.stringify(productToAdd)
      );

      setSelectedProduct(null);
      navigate("/lgin");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productToAdd);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added to Cart");
    setSelectedProduct(null);
  }

  return (
    <>
      <style>
        {`
          .products {
            padding: 30px;
            text-align: center;
            background: #f8f9fa;
          }

          .products h2 {
            color: #2c3e50;
            margin-bottom: 30px;
          }

          .product-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
          }

          .product-card {
            padding: 15px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
          }

          .product-card img {
            width: 100%;
            height: 180px;
            object-fit: contain;
          }

          .product-card h4 {
            font-size: 17px;
            margin: 15px 0;
            color: #333;
          }

          .details-btn, .cart-btn {
            background: #27ae60;
            color: white;
            border: none;
            padding: 10px 18px;
            border-radius: 5px;
            cursor: pointer;
          }

          .details-btn:hover, .cart-btn:hover {
            background: #219150;
          }

          .popup-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 15px;
          }

          .product-popup {
            position: relative;
            background: white;
            padding: 25px;
            width: 350px;
            max-width: 100%;
            border-radius: 10px;
            text-align: center;
          }

          .product-popup img {
            width: 150px;
            height: 130px;
            object-fit: contain;
          }

          .product-popup h3 {
            margin: 15px 0;
            color: #2c3e50;
          }

          .product-popup label {
            display: block;
            margin-bottom: 8px;
          }

          .product-popup select {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .close-btn {
            position: absolute;
            top: 5px;
            right: 12px;
            border: none;
            background: white;
            font-size: 28px;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .product-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
            }

            .products {
              padding: 15px;
            }
          }

          @media (max-width: 450px) {
            .product-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="products">
        <h2>Our Products</h2>

        <div className="product-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />

              <h4>{product.name}</h4>

              <button
                className="details-btn"
                onClick={() => {
                  setSelectedProduct(product);
                  setQuantity(250);
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="popup-overlay">
            <div className="product-popup">
              <button
                className="close-btn"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

              <h3>{selectedProduct.name}</h3>

              <label>Select Quantity:</label>

              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {quantities.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>

              <h3>
                Price: ₹{calculatePrice(selectedProduct, quantity)}
              </h3>

              <button className="cart-btn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
