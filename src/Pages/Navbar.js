import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <nav id="navbar">
      <a href="/Home">
        <img src={Logo} width={250} />{" "}
      </a>
      <ul id="navlist">
        <Link className="link" to="/Home">
          Home
        </Link>
        <Link className="link" to="/About">
          About Us
        </Link>
        <Link className="link" to="/Courses">
          Courses
        </Link>
        <Link className="link" to="/Resources">
          Resources
        </Link>
        <Link className="link" to="/OnlineLearning">
          Online Learning
        </Link>
      </ul>
      <button className="btn">Log in</button>
    </nav>
  );
};
