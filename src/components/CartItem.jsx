import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your Cart is Empty</h2>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} style={styles.item}>
          <div>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>

          <div>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total Cost: ₹{totalCost}</h3>

      <button onClick={() => alert("Checkout coming soon!")}>
        Checkout
      </button>

      <br /><br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
  },
};

export default CartItem;
