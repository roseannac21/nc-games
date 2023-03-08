import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="nav-bar">
      <Link to="/" id="nav-item">
        Home
      </Link>
      <Link to="/reviews" id="nav-item">
        Reviews
      </Link>
      <Link to="/categories" id="nav-item">
        Game Categories
      </Link>
    </nav>
  );
};

export default Nav;
