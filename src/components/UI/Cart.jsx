import { useCart } from "../../../context/CartProvider";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useCart();
  if (cart.length === 0) return <h1>No items found!!</h1>;
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <>
      {cart.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      <h1> Total Amount : &#8377;{totalAmount}</h1>
    </>
  );
}

export default Cart;
