import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart({ open = true, onClose = () => {} }) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const loadCart = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(Array.isArray(savedCart) ? savedCart : []);
    } catch {
      setCart([]);
    }
  };

  useEffect(() => {
    loadCart();
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increase = (product) => {
    const updatedCart = cart.map((item) =>
      item.name === product.name &&
      item.image === product.image &&
      item.quantity === product.quantity
        ? { ...item, count: (item.count || 1) + 1 }
        : item
    );

    updateCart(updatedCart);
  };

  const decrease = (product) => {
    const updatedCart = cart
      .map((item) =>
        item.name === product.name &&
        item.image === product.image &&
        item.quantity === product.quantity
          ? { ...item, count: (item.count || 1) - 1 }
          : item
      )
      .filter((item) => (item.count || 0) > 0);

    updateCart(updatedCart);
  };

  const totalItems = cart.reduce(
    (sum, item) => sum + (item.count || 1),
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + Number(item.price || 0) * (item.count || 1),
    0
  );

  if (!open) return null;

  return (
    <div className="mycart-overlay" onClick={onClose}>
      <div
        className="mycart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mycart-header">
          <button onClick={onClose}>
            <FaArrowLeft />
          </button>

          <h4>My Cart ({totalItems})</h4>

          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="mycart-content">
          <div className="mycart-savings">
            Your shopping cart
            <span>{totalItems} items</span>
          </div>

          {cart.length === 0 ? (
            <div className="mycart-empty">
              <FaShoppingCart size={45} />
              <h3>Your cart is empty</h3>
              <p>Add products to your cart.</p>

              <button
                onClick={() => {
                  onClose();
                  navigate("/products");
                }}
              >
                Shop Now
              </button>
            </div>
          ) : (
            <>
              <div className="mycart-delivery">
                <strong>Delivery in 8 minutes</strong>
                <p>Shipment of {totalItems} items</p>
              </div>

              {cart.map((item, index) => (
                <div
                  className="mycart-item"
                  key={`${item.name}-${item.quantity}-${index}`}
                >
                  <img src={item.image} alt={item.name} />

                  <div className="mycart-info">
                    <h5>{item.name}</h5>

                    <p>
                      Quantity:{" "}
                      {item.quantity >= 1000
                        ? `${item.quantity / 1000} kg`
                        : `${item.quantity || 250} g`}
                    </p>

                    <strong>₹{item.price}</strong>
                  </div>

                  <div className="mycart-qty">
                    <button onClick={() => decrease(item)}>−</button>
                    <span>{item.count || 1}</span>
                    <button onClick={() => increase(item)}>+</button>
                  </div>
                </div>
              ))}

              <div className="mycart-bill">
                <h3>Bill details</h3>

                <p>
                  Items total
                  <span>₹{totalPrice}</span>
                </p>

                <p>
                  Delivery charge
                  <span>FREE</span>
                </p>

                <p>
                  Handling charge
                  <span>₹5</span>
                </p>

                <hr />

                <h3 className="grand-total">
                  Grand total
                  <span>₹{totalPrice + 5}</span>
                </h3>
              </div>

              <button
                className="mycart-proceed"
                onClick={() => {
                  onClose();
                  navigate("/checkout");
                }}
              >
                <span>
                  ₹{totalPrice + 5}
                  <small>TOTAL</small>
                </span>
                Proceed →
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        .mycart-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.68);
          z-index: 10000;
        }

        .mycart-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: 490px;
          max-width: 100%;
          height: 100%;
          background: #f4f6ff;
          display: flex;
          flex-direction: column;
          box-shadow: -5px 0 20px #0002;
        }

        .mycart-header {
          display: flex;
          align-items: center;
          gap: 15px;
          justify-content: space-between;
          background: white;
          padding: 16px;
        }

        .mycart-header h4 {
          font-size: 19px;
          margin: 0;
          flex: 1;
        }

        .mycart-header button {
          border: none;
          background: transparent;
          font-size: 20px;
          cursor: pointer;
        }

        .mycart-content {
          padding: 14px;
          overflow-y: auto;
          flex: 1;
          padding-bottom: 25px;
        }

        .mycart-savings {
          display: flex;
          justify-content: space-between;
          background: #dce8ff;
          color: #1760ed;
          padding: 15px;
          border-radius: 16px;
          margin-bottom: 14px;
        }

        .mycart-delivery {
          background: white;
          padding: 18px;
          border-radius: 16px 16px 0 0;
        }

        .mycart-delivery p {
          margin: 5px 0 0;
          color: #777;
          font-size: 14px;
        }

        .mycart-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          background: white;
          border-bottom: 1px solid #eee;
        }

        .mycart-item img {
          width: 75px;
          height: 75px;
          object-fit: contain;
          border: 1px solid #eee;
          border-radius: 10px;
        }

        .mycart-info {
          flex: 1;
          min-width: 0;
        }

        .mycart-info h5 {
          font-size: 14px;
          margin: 0 0 6px;
        }

        .mycart-info p {
          color: #777;
          font-size: 13px;
          margin: 4px 0;
        }

        .mycart-qty {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px;
          color: white;
          background: #278b16;
          border-radius: 8px;
        }

        .mycart-qty button {
          border: none;
          color: white;
          background: transparent;
          font-weight: bold;
          cursor: pointer;
          font-size: 17px;
        }

        .mycart-bill {
          background: white;
          border-radius: 16px;
          padding: 18px;
          margin: 25px 0 15px;
        }

        .mycart-bill h3 {
          font-size: 17px;
          font-weight: bold;
        }

        .mycart-bill p,
        .mycart-bill .grand-total {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .mycart-bill .grand-total span {
          font-size: 17px;
        }

        .mycart-proceed {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
          margin: 10px 14px 16px;
          padding: 16px;
          border: none;
          border-radius: 10px;
          background: #07851d;
          color: white;
          font-size: 19px;
          cursor: pointer;
        }

        .mycart-proceed small {
          display: block;
          font-size: 12px;
        }

        .mycart-empty {
          text-align: center;
          padding: 65px 10px;
          color: #555;
        }

        .mycart-empty button {
          background: #16851d;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          cursor: pointer;
        }

        @media (max-width: 500px) {
          .mycart-panel {
            width: 100%;
          }

          .mycart-item {
            gap: 8px;
            padding: 10px 5px;
          }

          .mycart-item img {
            width: 60px;
            height: 65px;
          }

          .mycart-qty {
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
}

export default Cart;

