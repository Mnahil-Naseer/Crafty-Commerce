import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(totalAmount);
  }, [cart]);

  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((item) => item.id === id);
      setTimeout(() => {
        alert("✔ Product is added to cart successfully. You can check your cart anytime...");
      }, 200);
      if (cartItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...product, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, id: new Date().getTime(), amount: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    setCart((prevCart) => {
      let alertShown = false;
      const updatedCart = prevCart.map((item) => {
        if (item.id === id && !alertShown) {
          alertShown = true;
          alert("Product amount increased successfully.");
          return { ...item, amount: item.amount + 1 };
        }
        return item.id === id ? { ...item, amount: item.amount + 1 } : item;
      });
      return updatedCart;
    });
  };

  const decreaseAmount = (id) => {
    setCart((prevCart) => {
      const cartItem = prevCart.find((item) => item.id === id);
      if (cartItem.amount <= 1) {
        return prevCart.filter((item) => item.id !== id);
      } else {
        return prevCart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
