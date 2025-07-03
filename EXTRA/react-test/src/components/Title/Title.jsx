import "./Title.css";

const Title = ({ size, children }) => {
  return <h1 className={`title ${size}`}>{children}</h1>;
};

export default Title;
