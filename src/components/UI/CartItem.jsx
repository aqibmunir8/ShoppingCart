import { useCart } from "../../../context/CartProvider";

function CartItem({ id, title, price, img, quantity }) {
  const { delItemToCart, increaseQty, decreaseQty } = useCart();
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>id : {id}</p>
      <p>title : {title}</p>
      <p>price : {price * quantity}</p>
      <p>quantity : {quantity}</p>

      <button
        onClick={() => {
          increaseQty(id);
        }}
      >
        Increase Quantity
      </button>

      <button
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          decreaseQty(id);
        }}
      >
        Decrease Quantity
      </button>

      <button
        onClick={() => {
          delItemToCart(id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
