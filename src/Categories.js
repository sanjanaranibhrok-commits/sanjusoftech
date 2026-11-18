import React from "react";

function Categories() {
  return (
    <>
      <style>
        {`
          .categories {
            padding: 50px;
            text-align: center;
          }

          .categories h1 {
            color: green;
            margin-bottom: 30px;
          }

          .category-box {
            display: flex;
            flex-wrap: wrap;
            gap: 50px;
            justify-content: center;
          }

          .category-box a {
            text-decoration: none !important;
            color: black;
          }

          .category {
            width: 220px;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 10px;
            background: white;
          }

          .category img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            border-radius: 10px;
          }

          .category h3 {
            color: green;
            margin-top: 12px;
            text-decoration: none;
          }

        
          
        `}
      </style>

      <div className="categories">

        <h1>Shop by Categories</h1>

        <div className="category-box">

          {/* Groceries */}
          <a href="/products?category=groceries">
            <div className="category">
              <img
                src="https://www.zipgro.in/cdn/shop/collections/Untitled_design_40.jpg?v=1754383449"
                alt="Groceries"
              />
              <h3>Groceries</h3>
              
            </div>
          </a>

          {/* Dairy */}
          <a href="/products?category=dairy">
            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80"
                alt="Dairy"
              />
              <h3>Dairy & Milk</h3>
            
            </div>
          </a>

          {/* Fruits */}
          <a href="/products?category=fruits">
            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80"
                alt="Fruits"
              />
              <h3>Fruits</h3>
              
            </div>
          </a>

          {/* Vegetables */}
          <a href="/products?category=vegetables">
            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80"
                alt="Vegetables"
              />
              <h3>Vegetables</h3>
            
            </div>
          </a>

          {/* Beverages */}
          <a href="/products?category=beverages">
            <div className="category">
              <img
                src="https://resourcewebsite.singoo.cc/attachment/654dcab2be95c.jpeg"
                alt="Beverages"
              />
              <h3>Beverages</h3>
              
            </div>
          </a>

          {/* Personal Care */}
          <a href="/products?category=personal-care">
            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=500&q=80"
                alt="Personal Care"
              />
              <h3>Personal Care</h3>
              
            </div>
          </a>

          {/* Stationery */}
          <a href="/products?category=stationery">
            <div className="category">
              <img
                src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=500&q=80"
                alt="Stationery"
              />
              <h3>Stationery</h3>
              
            </div>
          </a>

          {/* Household Essentials */}
          <a href="/products?category=household">
            <div className="category">
              <img
                src="https://www.shreejichemicalindia.com/uploads/category/cleaning-products-6CUI-7WMW-7E20-2604-2413-0044.jpg"
                alt="Home Cleaning"
              />
              <h3>Home Cleaning</h3>
              
            </div>
          </a>

        </div>
      </div>
    </>
  );
}

export default Categories;