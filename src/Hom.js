import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Categories from "./Categories";
function Hom() {
  return (
    <>
      <style>
        {`
          .slide-img {
            width: 100%;
            height: 550px;
            background: #f5f5f5;
            filter: brightness(75%);
            }

          .slide-text {
            padding: 10px;
            
          }

          .slide-text h1 {
            color: black;
          }

          .slide-text h2 {
            font-size: 25px;
            color: dark;
          }
            .about-shop {
             padding: 50px 80px; 
             text-align: center; 
             background: green; 
          } 
             
            .about-shop h2 { 
            color: white;
             margin-bottom: 20px; 
          } 
             
            .about-shop p { 
            font-size: 18px;
            line-height: 1.7; 
            color: white; 
            max-width: 900px; 
            margin: auto; 
          }

          .why-us {
  padding: 50px 30px;
  text-align: center;
}

.why-us h2 {
  margin-bottom: 30px;
  color: #333;
}

.why-container {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}

.why-card {
  width: 250px;
  padding: 15px;
  background: #f8f8f8;
  border-radius: 10px;
}

.why-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 10px;
}

.why-card h3 {
  font-size: 20px;
  margin-top: 12px;
}

.why-card p {
  font-size: 15px;
  color: #666;
}

        `}
      </style>

      <Carousel>

        {/* Groceries */}
        <Carousel.Item>
          <img
            className="slide-img"
            src="/grocery.jpg"
            alt="Groceries"
          />
          <Carousel.Caption className="slide-text">
            <h1>Groceries</h1>
            <h2>All your daily grocery needs</h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Fruits */}
        <Carousel.Item>
          <img
            className="slide-img"
            src="/fruits.jpg"
            alt="Fruits"
          />
          <Carousel.Caption className="slide-text">
            <h1>Fresh Fruits</h1>
            <h2>Fresh and healthy fruits</h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Vegetables */}
        <Carousel.Item>
          <img
            className="slide-img"
            src="/vegies.webp"
            alt="Vegetables"
          />
          <Carousel.Caption className="slide-text">
            <h1>Fresh Vegetables</h1>
            <h2>Fresh vegetables for your family</h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Dairy & Milk */}
        <Carousel.Item>
          <img
            className="slide-img"
            src="/dairy.jpg"
            alt="Dairy and Milk"
          />
          <Carousel.Caption className="slide-text">
            <h1>Dairy & Milk</h1>
            <h2>Fresh milk and dairy products</h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Stationery */}
        <Carousel.Item>
          <img
            className="slide-img"
            src="/stationary.jpg"
            alt="Stationery"
          />
          <Carousel.Caption className="slide-text">
            <h1>Stationery</h1>
            <h2>Books, pens and stationery items</h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Personal Care */}
        <Carousel.Item>
          <img
            className="slide-img"
            src="/personalcare.jpg"
            alt="Personal Care"
          />
          <Carousel.Caption className="slide-text">
            <h1>Personal Care</h1>
            <h2>Personal care products for everyone</h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Beverages */}
        <Carousel.Item>
          <img
            className="slide-img"
            src="/beverages.jpg"
            alt="Beverages"
          />
          <Carousel.Caption className="slide-text">
            <h1>Beverages</h1>
            <h2>Refreshing drinks and beverages</h2>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <Categories />

      <div className="about-shop"> 
        <h2>About Family First Mart</h2>
        <p> Family First Mart is your one-stop shop for all your daily needs. 
          We provide groceries, fresh fruits, vegetables, dairy products, stationery, personal care items and beverages at affordable prices. 
          Our aim is to make shopping easy, convenient and comfortable for every family. </p>
           </div>

           <div className="why-us">
             <h2>Why Choose Us?</h2> 
             <div className="why-container">
               
               <div className="why-card"> 
                <img src="/easyshopping.jpg" alt="Easy Shopping" /> 
                <h3>Easy Shopping</h3> 
                <p>Shop all your daily needs easily at one place.</p>
                 </div> 
                 
                 <div className="why-card"> 
                  <img src="quality.jpg" alt="Quality Products" />
                   <h3>Quality Products</h3>
                  <p>We provide fresh and quality products for your family.</p> 
                  </div> 
                  
                  <div className="why-card"> 
                  <img src="/price.jpg" alt="Affordable Prices" />
                  <h3>Affordable Prices</h3> <p>Get your favourite products at reasonable prices.</p> 
                       </div>
                
                <div className="why-card"> 
                <img src="/wide range.jpg" alt="Wide Range" />
                <h3>Wide Range</h3>
                <p>Groceries, fruits, dairy, stationery and much more.</p> 
           </div> 
           </div> 
           </div>
    </>




  );
}

export default Hom;
