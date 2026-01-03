import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 250 },
      { id: 2, name: "Peace Lily", price: 300 },
      { id: 3, name: "Aloe Vera", price: 200 },
      { id: 4, name: "Spider Plant", price: 180 },
      { id: 5, name: "ZZ Plant", price: 350 },
      { id: 6, name: "Rubber Plant", price: 400 },
    ],
  },
  {
    category: "Flowering Plants",
    items: [
      { id: 7, name: "Rose", price: 150 },
      { id: 8, name: "Jasmine", price: 180 },
      { id: 9, name: "Orchid", price: 500 },
      { id: 10, name: "Tulip", price: 220 },
      { id: 11, name: "Hibiscus", price: 200 },
      { id: 12, name: "Lily", price: 260 },
    ],
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 13, name: "Bamboo", price: 450 },
      { id: 14, name: "Palm", price: 600 },
      { id: 15, name: "Neem", price: 350 },
      { id: 16, name: "Bougainvillea", price: 300 },
      { id: 17, name: "Ashoka", price: 500 },
      { id: 18, name: "Money Tree", price: 280 },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>

      {plants.map(group => (
        <div key={group.category}>
          <h3>{group.category}</h3>

          <div style={styles.grid}>
            {group.items.map(plant => (
              <div key={plant.id} style={styles.card}>
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                <button
                  disabled={isInCart(plant.id)}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    textAlign: "center",
  },
};

export default ProductList;
