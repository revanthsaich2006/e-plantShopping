import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 200,
    image: "/plants/plant.jpg"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 300,
    image: "/plants/plant.jpg"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 250,
    image: "/plants/plant.jpg"
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 180,
    image: "/plants/plant.jpg"
  },
  {
    id: 5,
    name: "Money Plant",
    price: 220,
    image: "/plants/plant.jpg"
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 350,
    image: "/plants/plant.jpg"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const isAdded = id => cart.some(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants</h2>

      {plants.map(plant => (
        <div key={plant.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={plant.image} alt={plant.name} width="120" />
          <h3>{plant.name}</h3>
          <p>₹{plant.price}</p>

          <button
            disabled={isAdded(plant.id)}
            onClick={() => dispatch(addItem(plant))}
          >
            {isAdded(plant.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
