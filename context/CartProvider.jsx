import { createContext, useContext, useReducer } from "react";
const cartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "Delete_ITEM": {
      return cart.filter((item) => item.id !== action.payload.id);
    }
    case "increaseQty": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }

    case "decreaseQty": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
    default:
      return cart; // default
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };

  const delItemToCart = (id) => {
    dispatch({ type: "Delete_ITEM", payload: { id: id } });
  };

  const increaseQty = (id) => {
    dispatch({ type: "increaseQty", payload: { id: id } });
  };

  const decreaseQty = (id) => {
    dispatch({ type: "decreaseQty", payload: { id: id } });
  };

  return (
    <cartContext.Provider
      value={{ cart, addItemToCart, delItemToCart, increaseQty, decreaseQty }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}

export default CartProvider;
