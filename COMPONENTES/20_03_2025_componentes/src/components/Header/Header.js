import "./Header.css";
import Nav from "../Nav/Nav";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Header = () => `
<header>
  <img src="https://www.figma.com/community/resource/d3ce5064-a3ee-468b-8245-0e47504800f2/thumbnail" alt="My App Logo"/>
  ${Nav(links)}
</header>
`;

export default Header;
