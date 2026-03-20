import Products from "./components/Products";
import CartProvider from "../context/CartProvider";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        newestOnTop={true}
        hideProgressBar={true}
      />
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
