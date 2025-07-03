import "./Flex.css";

const Flex = ({ children, direction, gap }) => {
  return <div className={`flex ${direction} ${gap}`}>{children}</div>;
};

export default Flex;
