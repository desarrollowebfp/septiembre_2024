import "./Header.css";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

const Header = () => {
  return (
    <header>
      <h1>React Router Dom</h1>
      <nav>
        <ul>
          <li>
            <CustomNavLink to="/">Home</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/projects">Projects</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
