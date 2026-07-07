import { useState } from "react";
import PLANTS from "./data";
import PlantGrid from "./components/plants/PlantGrid";
import ShoppingCart from "./components/cart/ShoppingCart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantGrid plants={PLANTS} addToCart={addToCart} />
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </main>
    </>
  );
}
