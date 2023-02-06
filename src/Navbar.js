import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="">Home</Link> |{" "}
        <Link to="another-page">My Other Page</Link>
      </nav>
    </div>
  );
}

export default Navbar