import { act, createContext, useContext, useReducer } from "react";
const cartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };
  return (
    <cartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}

export default CartProvider;
