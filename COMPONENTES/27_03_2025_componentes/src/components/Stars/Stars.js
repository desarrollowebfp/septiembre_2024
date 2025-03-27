import "./Stars.css";

const Stars = (number) => {
  const roundedNum = Math.round(number);
  return `<span>${"⭐️".repeat(roundedNum/2)}</span>`;
};

export default Stars;
