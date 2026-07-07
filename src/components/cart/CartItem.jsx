export default function CartItem({ item, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => removeFromCart(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </li>
  );
}
