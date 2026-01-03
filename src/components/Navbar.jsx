import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector(state => state.cart);

  return (
    <nav style={styles.nav}>
      <h2>Paradise Nursery</h2>
      <div>
        <Link to="/plants" style={styles.link}>Plants</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/cart" style={styles.link}>
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#2e7d32",
    color: "white"
  },
  link: {
    marginLeft: "15px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;
