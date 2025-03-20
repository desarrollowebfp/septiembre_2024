import "./Text.css";

const Text = (text, size = "base", align = "left") => {
  return `<p class="text ${size} ${align}">${text}</p>`;
};

export default Text;
