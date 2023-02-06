import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/reviews" className="nav-item">Reviews</Link>
    </nav>
  );
};

export default Nav;