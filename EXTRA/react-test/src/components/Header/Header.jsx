import "./Header.css";
import Title from "../Title/Title";

const Header = ({title}) => {
  return (
    <header>
      <Title size="sm">{title}</Title>
      <Title size="md">Esto es una prop children</Title>
    </header>
  );
};

export default Header;
