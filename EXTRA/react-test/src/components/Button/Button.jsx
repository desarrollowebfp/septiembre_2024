import "./Button.css";

const Button = ({ children, action }) => {
  return <button onClick={action}>{children}</button>;
};

export default Button;
